---
editUrl: false
next: false
prev: false
title: "EipNotEnabledError"
---

Represents an error that occurs when an EIP (Ethereum Improvement Proposal) is not enabled.

EIP not enabled errors can occur due to:
- Attempting to use features or operations that require a specific EIP which is not enabled in the VM.

EIPs can be set on common and passed into createMemoryClient

## Example

```typescript
import { EipNotEnabledError } from '@tevm/errors'
try {
  // Some operation that can throw an EipNotEnabledError
} catch (error) {
  if (error instanceof EipNotEnabledError) {
    console.error(error.message);
    // Handle the EIP not enabled error
  }
}
```

## Param

A human-readable error message.

## Param

Additional parameters for the BaseError.

## Extends

- [`ExecutionError`](/reference/tevm/errors/classes/executionerror/)

## Constructors

### new EipNotEnabledError()

> **new EipNotEnabledError**(`message`?, `args`?): [`EipNotEnabledError`](/reference/tevm/errors/classes/eipnotenablederror/)

Constructs an EipNotEnabledError.

#### Parameters

• **message?**: `string`= `'EIP not enabled error occurred.'`

Human-readable error message.

• **args?**: [`EipNotEnabledErrorParameters`](/reference/tevm/errors/interfaces/eipnotenablederrorparameters/)= `{}`

Additional parameters for the BaseError.

#### Returns

[`EipNotEnabledError`](/reference/tevm/errors/classes/eipnotenablederror/)

#### Overrides

[`ExecutionError`](/reference/tevm/errors/classes/executionerror/).[`constructor`](/reference/tevm/errors/classes/executionerror/#constructors)

#### Source

[packages/errors/src/common/EipNotEnabledError.js:53](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/common/EipNotEnabledError.js#L53)

## Properties

### \_tag

> **\_tag**: `string` = `'ExecutionError'`

Same as name, used internally.

#### Inherited from

[`ExecutionError`](/reference/tevm/errors/classes/executionerror/).[`_tag`](/reference/tevm/errors/classes/executionerror/#_tag)

#### Source

[packages/errors/src/ethereum/ExecutionErrorError.js:76](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/ExecutionErrorError.js#L76)

***

### cause

> **cause**: `any`

#### Inherited from

[`ExecutionError`](/reference/tevm/errors/classes/executionerror/).[`cause`](/reference/tevm/errors/classes/executionerror/#cause)

#### Source

[packages/errors/src/ethereum/BaseError.js:114](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L114)

***

### code

> **code**: `number`

Error code, analogous to the code in JSON RPC error.

#### Inherited from

[`ExecutionError`](/reference/tevm/errors/classes/executionerror/).[`code`](/reference/tevm/errors/classes/executionerror/#code)

#### Source

[packages/errors/src/ethereum/BaseError.js:112](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L112)

***

### details

> **details**: `string`

#### Inherited from

[`ExecutionError`](/reference/tevm/errors/classes/executionerror/).[`details`](/reference/tevm/errors/classes/executionerror/#details)

#### Source

[packages/errors/src/ethereum/BaseError.js:91](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L91)

***

### docsPath

> **docsPath**: `undefined` \| `string`

Path to the documentation for this error.

#### Inherited from

[`ExecutionError`](/reference/tevm/errors/classes/executionerror/).[`docsPath`](/reference/tevm/errors/classes/executionerror/#docspath)

#### Source

[packages/errors/src/ethereum/BaseError.js:96](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L96)

***

### message

> **message**: `string`

Human-readable error message.

#### Inherited from

[`ExecutionError`](/reference/tevm/errors/classes/executionerror/).[`message`](/reference/tevm/errors/classes/executionerror/#message)

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### meta

> **meta**: `undefined` \| `object`

Optional object containing additional information about the error.

#### Inherited from

[`ExecutionError`](/reference/tevm/errors/classes/executionerror/).[`meta`](/reference/tevm/errors/classes/executionerror/#meta)

#### Source

[packages/errors/src/ethereum/ExecutionErrorError.js:69](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/ExecutionErrorError.js#L69)

***

### metaMessages

> **metaMessages**: `undefined` \| `string`[]

Additional meta messages for more context.

#### Inherited from

[`ExecutionError`](/reference/tevm/errors/classes/executionerror/).[`metaMessages`](/reference/tevm/errors/classes/executionerror/#metamessages)

#### Source

[packages/errors/src/ethereum/BaseError.js:100](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L100)

***

### name

> **name**: `"ExecutionError"` = `'ExecutionError'`

The name of the error, used to discriminate errors.

#### Inherited from

[`ExecutionError`](/reference/tevm/errors/classes/executionerror/).[`name`](/reference/tevm/errors/classes/executionerror/#name)

#### Source

[packages/errors/src/ethereum/ExecutionErrorError.js:82](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/ExecutionErrorError.js#L82)

***

### shortMessage

> **shortMessage**: `string`

#### Inherited from

[`ExecutionError`](/reference/tevm/errors/classes/executionerror/).[`shortMessage`](/reference/tevm/errors/classes/executionerror/#shortmessage)

#### Source

[packages/errors/src/ethereum/BaseError.js:104](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L104)

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`ExecutionError`](/reference/tevm/errors/classes/executionerror/).[`stack`](/reference/tevm/errors/classes/executionerror/#stack)

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### version

> **version**: `string`

#### Inherited from

[`ExecutionError`](/reference/tevm/errors/classes/executionerror/).[`version`](/reference/tevm/errors/classes/executionerror/#version)

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

[`ExecutionError`](/reference/tevm/errors/classes/executionerror/).[`prepareStackTrace`](/reference/tevm/errors/classes/executionerror/#preparestacktrace)

#### Source

node\_modules/.pnpm/@types+node@20.14.2/node\_modules/@types/node/globals.d.ts:28

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`ExecutionError`](/reference/tevm/errors/classes/executionerror/).[`stackTraceLimit`](/reference/tevm/errors/classes/executionerror/#stacktracelimit)

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

#### Inherited from

[`ExecutionError`](/reference/tevm/errors/classes/executionerror/).[`walk`](/reference/tevm/errors/classes/executionerror/#walk)

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

[`ExecutionError`](/reference/tevm/errors/classes/executionerror/).[`captureStackTrace`](/reference/tevm/errors/classes/executionerror/#capturestacktrace)

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

[`ExecutionError`](/reference/tevm/errors/classes/executionerror/).[`captureStackTrace`](/reference/tevm/errors/classes/executionerror/#capturestacktrace)

##### Source

node\_modules/.pnpm/bun-types@1.1.12/node\_modules/bun-types/globals.d.ts:1613