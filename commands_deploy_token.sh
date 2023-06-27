near call $CONTRACT_NAME ft_transfer '{"receiver_id": "realitymaster.near", "amount": "500000000000000000"}' --accountId $CONTRACT_NAME --amount 0.000000000000000000000001


export NEAR_ENV=mainnet

near create-account token.realitymaster.near --masterAccount realitymaster.near --initialBalance 5

near deploy --wasmFile res/fungible_token.wasm --accountId token.realitymaster.near

export CONTRACT_NAME=token.realitymaster.near


near call $CONTRACT_NAME new '{"owner_id": "'$CONTRACT_NAME'", "total_supply": "500000000000000000", "metadata": { "spec": "ft-1.0.0", "name": "Realities", "symbol": "RLTS", "decimals": 8 }}' --accountId $CONTRACT_NAME

near call $ID ft_transfer '{"receiver_id": "realitymaster.near", "amount": "500000000000000000"}' --accountId $CONTRACT_NAME --amount 0.000000000000000000000001

near call $CONTRACT_NAME ft_transfer '{"receiver_id": "realitymaster.near", "amount": "500000000000000000"}' --accountId $CONTRACT_NAME --amount 0.000000000000000000000001

near call $CONTRACT_NAME storage_deposit '' --accountId realitymaster.near --amount 0.00125

