/* A helper file that simplifies using the wallet selector */

// near api js
import { providers, utils } from 'near-api-js';

// wallet selector UI
import '@near-wallet-selector/modal-ui/styles.css';
import { setupModal } from '@near-wallet-selector/modal-ui';
// import LedgerIconUrl from '@near-wallet-selector/ledger/assets/ledger-icon.png';
import MyNearIconUrl from '@near-wallet-selector/my-near-wallet/assets/my-near-wallet-icon.png';

// wallet selector options
import { setupWalletSelector } from '@near-wallet-selector/core';
// import { setupLedger } from '@near-wallet-selector/ledger';
import { setupMyNearWallet } from '@near-wallet-selector/my-near-wallet';

import { Buffer } from 'buffer'

import "@near-wallet-selector/modal-ui/styles.css";

const THIRTY_TGAS = '30000000000000';
const NO_DEPOSIT = '0';

// Wallet that simplifies using the wallet selector
export class Wallet {
  walletSelector;
  wallet;
  network;
  createAccessKeyFor;
  accountId;
  contractId = "dev-1686953379196-16615581735686";
  contractTokenId = "token.guxal.testnet";

  constructor({ createAccessKeyFor = undefined, network = 'testnet' }) {
    // Login to a wallet passing a contractId will create a local
    // key, so the user skips signing non-payable transactions.
    // Omitting the accountId will result in the user being
    // asked to sign all transactions.
    this.createAccessKeyFor = createAccessKeyFor
    this.network = network
  }

  // To be called when the website loads
  async startUp() {
    this.walletSelector = await setupWalletSelector({
      network: this.network,
      modules: [setupMyNearWallet({ iconUrl: MyNearIconUrl }),
      // setupLedger({ iconUrl: LedgerIconUrl })
      ],
    });

    const isSignedIn = this.walletSelector.isSignedIn();

    if (isSignedIn) {
      this.wallet = await this.walletSelector.wallet();
      this.accountId = this.walletSelector.store.getState().accounts[0].accountId;
    }

    return isSignedIn;
  }

  // Sign-in method
  signIn() {
    const description = 'Please select a wallet to sign in.';
    const modal = setupModal(this.walletSelector, { contractId: this.createAccessKeyFor, description });
    modal.show();
  }

  // Sign-out method
  signOut() {
    this.wallet.signOut();
    this.wallet = this.accountId = this.createAccessKeyFor = null;
    window.location.replace(window.location.origin + window.location.pathname);
  }

  // Make a read-only call to retrieve information from the network
  async viewMethod() {
    const method= 'ft_balance_of';
    const { network } = this.walletSelector.options;
    const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });
    let res = await provider.query({
      request_type: 'call_function',
      account_id: this.contractTokenId,
      method_name: method,
      args_base64: Buffer.from(JSON.stringify({ account_id: this.accountId})).toString('base64'),
      finality: 'optimistic',
    });
    return this.parseAmount(JSON.parse(Buffer.from(res.result).toString()));
  }

  // Call a method that changes the contract's state
  async callMethod({ contractId, method, args = { }, gas = THIRTY_TGAS, deposit = NO_DEPOSIT }) {
    // Sign a transaction with the "FunctionCall" action
   
    const outcome = await this.wallet.signAndSendTransaction({
      signerId: this.accountId,
      receiverId: contractId,
      actions: [
        {
          type: 'FunctionCall',
          params: {
            methodName: method,
            args,
            gas,
            deposit,
          },
        },
      ],
    });

    return providers.getTransactionLastResult(outcome)
  }

  // Get transaction result from the network
  async getTransactionResult(txhash, accountId) {
    console.log(accountId)
    const { network } = this.walletSelector.options;
    const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

    console.log(provider);

    console.log(network);

    console.log(txhash);

    try {
      // Retrieve transaction result from the network
      const transaction = await provider.txStatus(txhash, 'none'); 
      console.log(transaction)
      
      console.log(JSON.parse(Buffer.from(transaction.status.SuccessValue, 'base64').toString()));

      return JSON.parse(Buffer.from(transaction.status.SuccessValue, 'base64').toString());
      
    } catch (error) {
      console.log(error)
      console.error("Error getting transaction details:", error);
      return null;
    }
    


 
    // return providers.getTransactionLastResult(transaction);
  }

  async getTransactionDetails(txhash, sender) {
    try {
      const { network } = this.walletSelector.options;
      const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });
  
      // Create custom query
      const query = {
        path: "tx",
        data: [txhash, sender],
      };
  
      // Execute custom query
      const transactionDetails = await provider.query(query);
      console.log(transactionDetails)
      console.log("Transaction details:", transactionDetails);
      return transactionDetails;
    } catch (error) {
      console.log(error)
      console.error("Error getting transaction details:", error);
      return null;
    }
  }
  
  

  //
  parseAmount(amount) {
    let balance = (amount * 10 ** 16).toLocaleString().replace(/,/g, "");
    return utils.format.formatNearAmount(balance);
  }

  //
  async callMethodBatch({deposit, package: packageId, quantity: quantity}) {
   
    let gas = "30000000000000";
    await this.wallet.signAndSendTransaction({
      signerId: this.accountId,
      receiverId: this.contractId,
      actions: [
        {
          type: "FunctionCall",
          params: {
            methodName: "storage_deposit",
            args: Buffer.from(JSON.stringify({})),
            gas,
            deposit: 1250000000000000000000n,
          },
        },
        {
          type: "FunctionCall",
          params: {
            methodName: "buy",
            args: Buffer.from(JSON.stringify({ package: packageId, quantity: quantity })),
            gas,
            deposit: utils.format.parseNearAmount(deposit),
          },
        },
      ],
    });
  }
}