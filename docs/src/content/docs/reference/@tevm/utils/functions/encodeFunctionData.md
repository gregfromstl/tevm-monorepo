---
editUrl: false
next: false
prev: false
title: "encodeFunctionData"
---

> **encodeFunctionData**\<`abi`, `functionName`\>(`parameters`): `EncodeFunctionDataReturnType`

## Type parameters

▪ **abi** extends readonly `unknown`[] \| `Abi`

▪ **functionName** extends `undefined` \| `string` = `undefined`

## Parameters

▪ **parameters**: [`EncodeFunctionDataParameters`](/reference/tevm/utils/type-aliases/encodefunctiondataparameters/)\<`abi`, `functionName`, `abi` extends `Abi` ? `Abi` extends `abi` ? `true` : [`Extract`\<`abi`[`number`], `object`\>] extends [`never`] ? `false` : `true` : `true`, `ContractFunctionArgs`\<`abi`, `AbiStateMutability`, `functionName` extends [`ContractFunctionName`](/reference/tevm/utils/type-aliases/contractfunctionname/)\<`abi`, `AbiStateMutability`\> ? `functionName` : [`ContractFunctionName`](/reference/tevm/utils/type-aliases/contractfunctionname/)\<`abi`, `AbiStateMutability`\>\>, [`ContractFunctionName`](/reference/tevm/utils/type-aliases/contractfunctionname/)\<`abi`, `AbiStateMutability`\>\>

## Source

node\_modules/.pnpm/viem@2.8.18\_typescript@5.3.3\_zod@3.22.4/node\_modules/viem/\_types/utils/abi/encodeFunctionData.d.ts:27

***
Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)