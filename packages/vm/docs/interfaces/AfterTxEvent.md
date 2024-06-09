[**@tevm/vm**](../README.md) • **Docs**

***

[@tevm/vm](../globals.md) / AfterTxEvent

# Interface: AfterTxEvent

Execution result of a transaction

## Extends

- [`RunTxResult`](RunTxResult.md)

## Properties

### accessList?

> `optional` **accessList**: `AccessList`

EIP-2930 access list generated for the tx (see `reportAccessList` option)

#### Inherited from

[`RunTxResult`](RunTxResult.md).[`accessList`](RunTxResult.md#accesslist)

#### Source

[packages/vm/src/utils/types.ts:439](https://github.com/evmts/tevm-monorepo/blob/main/packages/vm/src/utils/types.ts#L439)

***

### amountSpent

> **amountSpent**: `bigint`

The amount of ether used by this transaction

#### Inherited from

[`RunTxResult`](RunTxResult.md).[`amountSpent`](RunTxResult.md#amountspent)

#### Source

[packages/vm/src/utils/types.ts:417](https://github.com/evmts/tevm-monorepo/blob/main/packages/vm/src/utils/types.ts#L417)

***

### blobGasUsed?

> `optional` **blobGasUsed**: `bigint`

This is the blob gas units times the fee per blob gas for 4844 transactions

#### Inherited from

[`RunTxResult`](RunTxResult.md).[`blobGasUsed`](RunTxResult.md#blobgasused)

#### Source

[packages/vm/src/utils/types.ts:454](https://github.com/evmts/tevm-monorepo/blob/main/packages/vm/src/utils/types.ts#L454)

***

### bloom

> **bloom**: `Bloom`

Bloom filter resulted from transaction

#### Inherited from

[`RunTxResult`](RunTxResult.md).[`bloom`](RunTxResult.md#bloom)

#### Source

[packages/vm/src/utils/types.ts:412](https://github.com/evmts/tevm-monorepo/blob/main/packages/vm/src/utils/types.ts#L412)

***

### createdAddress?

> `optional` **createdAddress**: `Address`

Address of created account during transaction, if any

#### Inherited from

[`RunTxResult`](RunTxResult.md).[`createdAddress`](RunTxResult.md#createdaddress)

#### Source

node\_modules/.pnpm/@ethereumjs+evm@3.0.0/node\_modules/@ethereumjs/evm/dist/esm/types.d.ts:248

***

### execResult

> **execResult**: `ExecResult`

Contains the results from running the code, if any, as described in runCode

#### Inherited from

[`RunTxResult`](RunTxResult.md).[`execResult`](RunTxResult.md#execresult)

#### Source

node\_modules/.pnpm/@ethereumjs+evm@3.0.0/node\_modules/@ethereumjs/evm/dist/esm/types.d.ts:252

***

### gasRefund

> **gasRefund**: `bigint`

The amount of gas as that was refunded during the transaction (i.e. `gasUsed = totalGasConsumed - gasRefund`)

#### Inherited from

[`RunTxResult`](RunTxResult.md).[`gasRefund`](RunTxResult.md#gasrefund)

#### Source

[packages/vm/src/utils/types.ts:434](https://github.com/evmts/tevm-monorepo/blob/main/packages/vm/src/utils/types.ts#L434)

***

### minerValue

> **minerValue**: `bigint`

The value that accrues to the miner by this transaction

#### Inherited from

[`RunTxResult`](RunTxResult.md).[`minerValue`](RunTxResult.md#minervalue)

#### Source

[packages/vm/src/utils/types.ts:449](https://github.com/evmts/tevm-monorepo/blob/main/packages/vm/src/utils/types.ts#L449)

***

### preimages?

> `optional` **preimages**: `Map`\<\`0x$\{string\}\`, `Uint8Array`\>

Preimages mapping of the touched accounts from the tx (see `reportPreimages` option)

#### Inherited from

[`RunTxResult`](RunTxResult.md).[`preimages`](RunTxResult.md#preimages)

#### Source

[packages/vm/src/utils/types.ts:444](https://github.com/evmts/tevm-monorepo/blob/main/packages/vm/src/utils/types.ts#L444)

***

### receipt

> **receipt**: [`TxReceipt`](../type-aliases/TxReceipt.md)

The tx receipt

#### Inherited from

[`RunTxResult`](RunTxResult.md).[`receipt`](RunTxResult.md#receipt)

#### Source

[packages/vm/src/utils/types.ts:422](https://github.com/evmts/tevm-monorepo/blob/main/packages/vm/src/utils/types.ts#L422)

***

### totalGasSpent

> **totalGasSpent**: `bigint`

The amount of gas used in this transaction, which is paid for
This contains the gas units that have been used on execution, plus the upfront cost,
which consists of calldata cost, intrinsic cost and optionally the access list costs

#### Inherited from

[`RunTxResult`](RunTxResult.md).[`totalGasSpent`](RunTxResult.md#totalgasspent)

#### Source

[packages/vm/src/utils/types.ts:429](https://github.com/evmts/tevm-monorepo/blob/main/packages/vm/src/utils/types.ts#L429)

***

### transaction

> **transaction**: `TypedTransaction`

The transaction which just got finished

#### Source

[packages/vm/src/utils/types.ts:461](https://github.com/evmts/tevm-monorepo/blob/main/packages/vm/src/utils/types.ts#L461)