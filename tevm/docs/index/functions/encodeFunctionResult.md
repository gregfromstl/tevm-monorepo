**tevm** ∙ [README](../../README.md) ∙ [API](../../API.md)

***

[API](../../API.md) > [index](../README.md) > encodeFunctionResult

# Function: encodeFunctionResult()

> **encodeFunctionResult**\<`abi`, `functionName`\>(`parameters`): `EncodeFunctionResultReturnType`

## Type parameters

▪ **abi** extends `Abi` \| readonly `unknown`[]

▪ **functionName** extends `undefined` \| `string` = `undefined`

## Parameters

▪ **parameters**: `EncodeFunctionResultParameters`\<`abi`, `functionName`, `abi` extends `Abi` ? `Abi` extends `abi`\<`abi`\> ? `true` : [`Extract`\<`abi`\<`abi`\>[`number`], `object`\>] extends [`never`] ? `false` : `true` : `true`, [`ContractFunctionName`](../type-aliases/ContractFunctionName.md)\<`abi`, `AbiStateMutability`\>\>

## Source

node\_modules/.pnpm/viem@2.8.18\_typescript@5.4.5\_zod@3.22.4/node\_modules/viem/\_types/utils/abi/encodeFunctionResult.d.ts:21

***
Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)