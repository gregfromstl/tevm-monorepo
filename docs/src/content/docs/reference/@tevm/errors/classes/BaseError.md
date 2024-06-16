---
editUrl: false
next: false
prev: false
title: "BaseError"
---

Base class for custom errors in TEVM.
This class is abstract and should be extended by other error classes.

## Implements

## Abstract

## Extends

- `Error`

## Extended by

- [`NoForkTransportSetError`](/reference/tevm/errors/classes/noforktransportseterror/)
- [`ForkError`](/reference/tevm/errors/classes/forkerror/)
- [`ParseError`](/reference/tevm/errors/classes/parseerror/)
- [`RevertError`](/reference/tevm/errors/classes/reverterror/)
- [`InternalError`](/reference/tevm/errors/classes/internalerror/)
- [`ExecutionError`](/reference/tevm/errors/classes/executionerror/)
- [`NonceTooLowError`](/reference/tevm/errors/classes/noncetoolowerror/)
- [`NonceTooHighError`](/reference/tevm/errors/classes/noncetoohigherror/)
- [`UnknownBlockError`](/reference/tevm/errors/classes/unknownblockerror/)
- [`AccountLockedError`](/reference/tevm/errors/classes/accountlockederror/)
- [`InvalidParamsError`](/reference/tevm/errors/classes/invalidparamserror/)
- [`LimitExceededError`](/reference/tevm/errors/classes/limitexceedederror/)
- [`InvalidAddressError`](/reference/tevm/errors/classes/invalidaddresserror/)
- [`InvalidRequestError`](/reference/tevm/errors/classes/invalidrequesterror/)
- [`MethodNotFoundError`](/reference/tevm/errors/classes/methodnotfounderror/)
- [`ChainIdMismatchError`](/reference/tevm/errors/classes/chainidmismatcherror/)
- [`InvalidGasPriceError`](/reference/tevm/errors/classes/invalidgaspriceerror/)
- [`GasLimitExceededError`](/reference/tevm/errors/classes/gaslimitexceedederror/)
- [`InvalidSignatureError`](/reference/tevm/errors/classes/invalidsignatureerror/)
- [`NonceAlreadyUsedError`](/reference/tevm/errors/classes/noncealreadyusederror/)
- [`ResourceNotFoundError`](/reference/tevm/errors/classes/resourcenotfounderror/)
- [`UnsupportedChainError`](/reference/tevm/errors/classes/unsupportedchainerror/)
- [`InsufficientFundsError`](/reference/tevm/errors/classes/insufficientfundserror/)
- [`RateLimitExceededError`](/reference/tevm/errors/classes/ratelimitexceedederror/)
- [`InvalidTransactionError`](/reference/tevm/errors/classes/invalidtransactionerror/)
- [`MethodNotSupportedError`](/reference/tevm/errors/classes/methodnotsupportederror/)
- [`ResourceUnavailableError`](/reference/tevm/errors/classes/resourceunavailableerror/)
- [`TransactionRejectedError`](/reference/tevm/errors/classes/transactionrejectederror/)
- [`TransactionTooLargeError`](/reference/tevm/errors/classes/transactiontoolargeerror/)
- [`BlockGasLimitExceededError`](/reference/tevm/errors/classes/blockgaslimitexceedederror/)
- [`TransactionUnderpricedError`](/reference/tevm/errors/classes/transactionunderpricederror/)
- [`ContractExecutionFailedError`](/reference/tevm/errors/classes/contractexecutionfailederror/)
- [`InsufficientPermissionsError`](/reference/tevm/errors/classes/insufficientpermissionserror/)
- [`PendingTransactionTimeoutError`](/reference/tevm/errors/classes/pendingtransactiontimeouterror/)
- [`InternalEvmError`](/reference/tevm/errors/classes/internalevmerror/)

## Constructors

### new BaseError()

> **new BaseError**(`shortMessage`, `args`?, `_tag`?, `code`?): [`BaseError`](/reference/tevm/errors/classes/baseerror/)

#### Parameters

• **shortMessage**: `string`

A short, human-readable summary of the error.

• **args?**: [`BaseErrorParameters`](/reference/tevm/errors/interfaces/baseerrorparameters/)= `{}`

Additional parameters for the error.

• **\_tag?**: `string`= `'BaseError'`

Internal tag for the error.

• **code?**: `number`= `0`

Error code analogous to the code in JSON RPC error.

#### Returns

[`BaseError`](/reference/tevm/errors/classes/baseerror/)

#### Overrides

`Error.constructor`

#### Source

[packages/errors/src/ethereum/BaseError.js:44](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L44)

## Properties

### \_tag

> **\_tag**: `string`

#### Source

[packages/errors/src/ethereum/BaseError.js:82](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L82)

***

### cause

> **cause**: `any`

#### Inherited from

`Error.cause`

#### Source

[packages/errors/src/ethereum/BaseError.js:114](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L114)

***

### code

> **code**: `number`

#### Source

[packages/errors/src/ethereum/BaseError.js:112](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L112)

***

### details

> **details**: `string`

#### Source

[packages/errors/src/ethereum/BaseError.js:91](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L91)

***

### docsPath

> **docsPath**: `undefined` \| `string`

#### Source

[packages/errors/src/ethereum/BaseError.js:96](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L96)

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### metaMessages

> **metaMessages**: `undefined` \| `string`[]

#### Source

[packages/errors/src/ethereum/BaseError.js:100](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L100)

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### shortMessage

> **shortMessage**: `string`

#### Source

[packages/errors/src/ethereum/BaseError.js:104](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L104)

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### version

> **version**: `string`

#### Source

[packages/errors/src/ethereum/BaseError.js:108](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L108)

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### Inherited from

`Error.prepareStackTrace`

#### Source

node\_modules/.pnpm/@types+node@20.14.2/node\_modules/@types/node/globals.d.ts:28

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Source

node\_modules/.pnpm/@types+node@20.14.2/node\_modules/@types/node/globals.d.ts:30

## Methods

### walk()

> **walk**(`fn`?): `unknown`

Walks through the error chain.

#### Parameters

• **fn?**: `Function`

A function to execute on each error in the chain.

#### Returns

`unknown`

The first error that matches the function, or the original error.

#### Source

[packages/errors/src/ethereum/BaseError.js:137](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L137)

***

### captureStackTrace()

#### captureStackTrace(targetObject, constructorOpt)

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

##### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

##### Returns

`void`

##### Inherited from

`Error.captureStackTrace`

##### Source

node\_modules/.pnpm/@types+node@20.14.2/node\_modules/@types/node/globals.d.ts:21

#### captureStackTrace(targetObject, constructorOpt)

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

##### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

##### Returns

`void`

##### Inherited from

`Error.captureStackTrace`

##### Source

node\_modules/.pnpm/bun-types@1.1.12/node\_modules/bun-types/globals.d.ts:1613