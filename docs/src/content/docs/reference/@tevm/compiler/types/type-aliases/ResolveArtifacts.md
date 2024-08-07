---
editUrl: false
next: false
prev: false
title: "ResolveArtifacts"
---

> **ResolveArtifacts**: (`solFile`, `basedir`, `logger`, `config`, `includeAst`, `includeBytecode`, `fao`, `solc`) => `Promise`\<[`ResolvedArtifacts`](/reference/tevm/compiler/types/type-aliases/resolvedartifacts/)\>

## Parameters

• **solFile**: `string`

• **basedir**: `string`

• **logger**: [`Logger`](/reference/tevm/compiler/types/type-aliases/logger/)

• **config**: `ResolvedCompilerConfig`

• **includeAst**: `boolean`

• **includeBytecode**: `boolean`

• **fao**: [`FileAccessObject`](/reference/tevm/compiler/types/type-aliases/fileaccessobject/)

• **solc**: `any`

## Returns

`Promise`\<[`ResolvedArtifacts`](/reference/tevm/compiler/types/type-aliases/resolvedartifacts/)\>

## Defined in

[compiler/src/types.ts:14](https://github.com/evmts/tevm-monorepo/blob/main/bundler-packages/compiler/src/types.ts#L14)
