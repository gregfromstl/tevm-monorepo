**@tevm/effect** ∙ [README](../../README.md) ∙ [API](../../API.md)

***

[API](../../API.md) > [createRequireEffect](../README.md) > CreateRequireError

# Class: CreateRequireError

## Extends

- `Error`

## Constructors

### new CreateRequireError(url, options)

> **new CreateRequireError**(`url`, `options`): [`CreateRequireError`](CreateRequireError.md)

#### Parameters

▪ **url**: `string`

▪ **options**: `object`= `{}`

#### Overrides

Error.constructor

#### Source

[packages/effect/src/createRequireEffect.js:17](https://github.com/evmts/tevm-monorepo/blob/main/packages/effect/src/createRequireEffect.js#L17)

## Properties

### \_tag

> **\_tag**: `"CreateRequireError"` = `'CreateRequireError'`

#### Source

[packages/effect/src/createRequireEffect.js:10](https://github.com/evmts/tevm-monorepo/blob/main/packages/effect/src/createRequireEffect.js#L10)

***

### cause

> **cause**?: `unknown`

#### Inherited from

Error.cause

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### message

> **message**: `string`

#### Inherited from

Error.message

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

Error.name

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack

> **stack**?: `string`

#### Inherited from

Error.stack

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### prepareStackTrace

> **`static`** **prepareStackTrace**?: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Parameters

▪ **err**: `Error`

▪ **stackTraces**: `CallSite`[]

#### Inherited from

Error.prepareStackTrace

#### Source

node\_modules/.pnpm/@types+node@20.9.1/node\_modules/@types/node/globals.d.ts:11

***

### stackTraceLimit

> **`static`** **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Source

node\_modules/.pnpm/@types+node@20.9.1/node\_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace()

> **`static`** **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

▪ **targetObject**: `object`

▪ **constructorOpt?**: `Function`

#### Inherited from

Error.captureStackTrace

#### Source

node\_modules/.pnpm/@types+node@20.9.1/node\_modules/@types/node/globals.d.ts:4

***
Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)