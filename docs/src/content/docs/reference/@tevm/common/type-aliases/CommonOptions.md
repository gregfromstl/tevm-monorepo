---
editUrl: false
next: false
prev: false
title: "CommonOptions"
---

> **CommonOptions**: `object`

Options for creating an Tevm MemoryClient instance

## Type declaration

### chainId

> **chainId**: `bigint`

The network chain id

### eips?

> `optional` **eips**: `ReadonlyArray`\<`number`\>

Eips to enable. Defaults to `[1559, 4895]`

### hardfork

> **hardfork**: [`Hardfork`](/reference/tevm/common/type-aliases/hardfork/)

Hardfork to use. Defaults to `shanghai`

### loggingLevel

> **loggingLevel**: `LogOptions`\[`"level"`\]

Tevm logger instance

## Source

[packages/common/src/CommonOptions.ts:7](https://github.com/evmts/tevm-monorepo/blob/main/packages/common/src/CommonOptions.ts#L7)