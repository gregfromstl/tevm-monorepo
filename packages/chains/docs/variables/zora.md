[**@tevm/chains**](../README.md) • **Docs**

***

[@tevm/chains](../globals.md) / zora

# Variable: zora

> `const` **zora**: [`TevmChainCommon`](../type-aliases/TevmChainCommon.md)\<`object`\>

## Type declaration

### blockExplorers

> **blockExplorers**: `object`

### blockExplorers.default

> `readonly` **default**: `object`

### blockExplorers.default.apiUrl

> `readonly` **apiUrl**: `"https://explorer.zora.energy/api"`

### blockExplorers.default.name

> `readonly` **name**: `"Explorer"`

### blockExplorers.default.url

> `readonly` **url**: `"https://explorer.zora.energy"`

### contracts

> **contracts**: `object`

### contracts.gasPriceOracle

> `readonly` **gasPriceOracle**: `object`

### contracts.gasPriceOracle.address

> `readonly` **address**: `"0x420000000000000000000000000000000000000F"`

### contracts.l1Block

> `readonly` **l1Block**: `object`

### contracts.l1Block.address

> `readonly` **address**: `"0x4200000000000000000000000000000000000015"`

### contracts.l1StandardBridge

> `readonly` **l1StandardBridge**: `object`

### contracts.l1StandardBridge.1

> `readonly` **1**: `object`

### contracts.l1StandardBridge.1.address

> `readonly` **address**: `"0x3e2Ea9B92B7E48A52296fD261dc26fd995284631"`

### contracts.l2CrossDomainMessenger

> `readonly` **l2CrossDomainMessenger**: `object`

### contracts.l2CrossDomainMessenger.address

> `readonly` **address**: `"0x4200000000000000000000000000000000000007"`

### contracts.l2Erc721Bridge

> `readonly` **l2Erc721Bridge**: `object`

### contracts.l2Erc721Bridge.address

> `readonly` **address**: `"0x4200000000000000000000000000000000000014"`

### contracts.l2OutputOracle

> `readonly` **l2OutputOracle**: `object`

### contracts.l2OutputOracle.1

> `readonly` **1**: `object`

### contracts.l2OutputOracle.1.address

> `readonly` **address**: `"0x9E6204F750cD866b299594e2aC9eA824E2e5f95c"`

### contracts.l2StandardBridge

> `readonly` **l2StandardBridge**: `object`

### contracts.l2StandardBridge.address

> `readonly` **address**: `"0x4200000000000000000000000000000000000010"`

### contracts.l2ToL1MessagePasser

> `readonly` **l2ToL1MessagePasser**: `object`

### contracts.l2ToL1MessagePasser.address

> `readonly` **address**: `"0x4200000000000000000000000000000000000016"`

### contracts.multicall3

> `readonly` **multicall3**: `object`

### contracts.multicall3.address

> `readonly` **address**: `"0xcA11bde05977b3631167028862bE2a173976CA11"`

### contracts.multicall3.blockCreated

> `readonly` **blockCreated**: `5882`

### contracts.portal

> `readonly` **portal**: `object`

### contracts.portal.1

> `readonly` **1**: `object`

### contracts.portal.1.address

> `readonly` **address**: `"0x1a0ad011913A150f69f6A19DF447A0CfD9551054"`

### custom?

> `optional` **custom**: `Record`\<`string`, `unknown`\>

### fees?

> `optional` **fees**: `ChainFees`\<`undefined`\>

### formatters

> **formatters**: `object`

### formatters.block

> `readonly` **block**: `object`

### formatters.block.exclude

> **exclude**: `undefined` \| []

### formatters.block.format()

> **format**: (`args`) => `object`

#### Parameters

• **args**: `Assign`\<`ExactPartial`\<`RpcBlock`\<`BlockTag`, `boolean`, `RpcTransaction`\<`boolean`\>\>\>, `OpStackRpcBlockOverrides` & `object`\>

#### Returns

`object`

##### baseFeePerGas

> **baseFeePerGas**: `null` \| `bigint`

##### blobGasUsed

> **blobGasUsed**: `bigint`

##### difficulty

> **difficulty**: `bigint`

##### excessBlobGas

> **excessBlobGas**: `bigint`

##### extraData

> **extraData**: \`0x$\{string\}\`

##### gasLimit

> **gasLimit**: `bigint`

##### gasUsed

> **gasUsed**: `bigint`

##### hash

> **hash**: `null` \| \`0x$\{string\}\`

##### logsBloom

> **logsBloom**: `null` \| \`0x$\{string\}\`

##### miner

> **miner**: \`0x$\{string\}\`

##### mixHash

> **mixHash**: \`0x$\{string\}\`

##### nonce

> **nonce**: `null` \| \`0x$\{string\}\`

##### number

> **number**: `null` \| `bigint`

##### parentHash

> **parentHash**: \`0x$\{string\}\`

##### receiptsRoot

> **receiptsRoot**: \`0x$\{string\}\`

##### sealFields

> **sealFields**: \`0x$\{string\}\`[]

##### sha3Uncles

> **sha3Uncles**: \`0x$\{string\}\`

##### size

> **size**: `bigint`

##### stateRoot

> **stateRoot**: \`0x$\{string\}\`

##### timestamp

> **timestamp**: `bigint`

##### totalDifficulty

> **totalDifficulty**: `null` \| `bigint`

##### transactions

> **transactions**: \`0x$\{string\}\`[] \| `OpStackTransaction`\<`boolean`\>[]

##### transactionsRoot

> **transactionsRoot**: \`0x$\{string\}\`

##### uncles

> **uncles**: \`0x$\{string\}\`[]

##### withdrawals?

> `optional` **withdrawals**: `Withdrawal`[]

##### withdrawalsRoot?

> `optional` **withdrawalsRoot**: \`0x$\{string\}\`

### formatters.block.type

> **type**: `"block"`

### formatters.transaction

> `readonly` **transaction**: `object`

### formatters.transaction.exclude

> **exclude**: `undefined` \| []

### formatters.transaction.format()

> **format**: (`args`) => `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object`

#### Parameters

• **args**: `object` & `Omit`\<`PartialBy`\<`object`, `"yParity"`\>, `"typeHex"`\> & `object` \| `object` & `Omit`\<`TransactionBase`\<\`0x$\{string\}\`, \`0x$\{string\}\`, `boolean`\>, `"typeHex"`\> & `FeeValuesEIP1559`\<\`0x$\{string\}\`\> & `object` \| `object` & `Omit`\<`PartialBy`\<`object`, `"yParity"`\>, `"typeHex"`\> & `object` \| `object` & `Omit`\<`PartialBy`\<`object`, `"yParity"`\>, `"typeHex"`\> & `object` \| `object` & `Omit`\<`PartialBy`\<`object`, `"yParity"`\>, `"typeHex"`\> & `object` \| `object` & `Omit`\<`TransactionBase`\<\`0x$\{string\}\`, \`0x$\{string\}\`, `boolean`\>, `"typeHex"`\> & `FeeValuesEIP1559`\<\`0x$\{string\}\`\> & `object` \| `object` & `Omit`\<`PartialBy`\<`object`, `"yParity"`\>, `"typeHex"`\> & `object` \| `object` & `Omit`\<`PartialBy`\<`object`, `"yParity"`\>, `"typeHex"`\> & `object` \| `object` & `Omit`\<`PartialBy`\<`object`, `"yParity"`\>, `"typeHex"`\> & `object` \| `object` & `Omit`\<`TransactionBase`\<\`0x$\{string\}\`, \`0x$\{string\}\`, `boolean`\>, `"typeHex"`\> & `FeeValuesEIP1559`\<\`0x$\{string\}\`\> & `object` \| `object` & `Omit`\<`PartialBy`\<`object`, `"yParity"`\>, `"typeHex"`\> & `object` \| `object` & `Omit`\<`PartialBy`\<`object`, `"yParity"`\>, `"typeHex"`\> & `object` \| `object` & `Omit`\<`PartialBy`\<`object`, `"yParity"`\>, `"typeHex"`\> & `object` \| `object` & `Omit`\<`PartialBy`\<`object`, `"yParity"`\>, `"typeHex"`\> & `object` \| `object` & `Omit`\<`TransactionBase`\<\`0x$\{string\}\`, \`0x$\{string\}\`, `boolean`\>, `"typeHex"`\> & `FeeValuesEIP1559`\<\`0x$\{string\}\`\> & `object`

#### Returns

`object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object`

### formatters.transaction.type

> **type**: `"transaction"`

### formatters.transactionReceipt

> `readonly` **transactionReceipt**: `object`

### formatters.transactionReceipt.exclude

> **exclude**: `undefined` \| []

### formatters.transactionReceipt.format()

> **format**: (`args`) => `object`

#### Parameters

• **args**: `Assign`\<`ExactPartial`\<`RpcTransactionReceipt`\>, `OpStackRpcTransactionReceiptOverrides`\>

#### Returns

`object`

##### blobGasPrice?

> `optional` **blobGasPrice**: `bigint`

##### blobGasUsed?

> `optional` **blobGasUsed**: `bigint`

##### blockHash

> **blockHash**: \`0x$\{string\}\`

##### blockNumber

> **blockNumber**: `bigint`

##### contractAddress

> **contractAddress**: `undefined` \| `null` \| \`0x$\{string\}\`

##### cumulativeGasUsed

> **cumulativeGasUsed**: `bigint`

##### effectiveGasPrice

> **effectiveGasPrice**: `bigint`

##### from

> **from**: \`0x$\{string\}\`

##### gasUsed

> **gasUsed**: `bigint`

##### l1Fee

> **l1Fee**: `null` \| `bigint`

##### l1FeeScalar

> **l1FeeScalar**: `null` \| `number`

##### l1GasPrice

> **l1GasPrice**: `null` \| `bigint`

##### l1GasUsed

> **l1GasUsed**: `null` \| `bigint`

##### logs

> **logs**: `Log`\<`bigint`, `number`, `false`, `undefined`, `undefined`, `undefined`, `undefined`\>[]

##### logsBloom

> **logsBloom**: \`0x$\{string\}\`

##### root?

> `optional` **root**: \`0x$\{string\}\`

##### status

> **status**: `"success"` \| `"reverted"`

##### to

> **to**: `null` \| \`0x$\{string\}\`

##### transactionHash

> **transactionHash**: \`0x$\{string\}\`

##### transactionIndex

> **transactionIndex**: `number`

##### type

> **type**: `TransactionType`

### formatters.transactionReceipt.type

> **type**: `"transactionReceipt"`

### id

> **id**: `7777777`

### name

> **name**: `"Zora"`

### nativeCurrency

> **nativeCurrency**: `object`

### nativeCurrency.decimals

> `readonly` **decimals**: `18`

### nativeCurrency.name

> `readonly` **name**: `"Ether"`

### nativeCurrency.symbol

> `readonly` **symbol**: `"ETH"`

### rpcUrls

> **rpcUrls**: `object`

### rpcUrls.default

> `readonly` **default**: `object`

### rpcUrls.default.http

> `readonly` **http**: readonly [`"https://rpc.zora.energy"`]

### rpcUrls.default.webSocket

> `readonly` **webSocket**: readonly [`"wss://rpc.zora.energy"`]

### serializers

> **serializers**: `object`

### serializers.transaction()

> `readonly` **transaction**: (`transaction`, `signature`?) => \`0x02$\{string\}\` \| \`0x01$\{string\}\` \| \`0x03$\{string\}\` \| `TransactionSerializedLegacy` \| \`0x7e$\{string\}\`

#### Parameters

• **transaction**: `OpStackTransactionSerializable`

• **signature?**: `Signature`

#### Returns

\`0x02$\{string\}\` \| \`0x01$\{string\}\` \| \`0x03$\{string\}\` \| `TransactionSerializedLegacy` \| \`0x7e$\{string\}\`

### sourceId

> **sourceId**: `1`

### testnet?

> `optional` **testnet**: `boolean`

## Source

[packages/chains/src/index.ts:121](https://github.com/evmts/tevm-monorepo/blob/main/packages/chains/src/index.ts#L121)