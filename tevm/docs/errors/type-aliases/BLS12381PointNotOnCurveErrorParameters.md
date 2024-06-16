[**tevm**](../../README.md) • **Docs**

***

[tevm](../../modules.md) / [errors](../README.md) / BLS12381PointNotOnCurveErrorParameters

# Type alias: BLS12381PointNotOnCurveErrorParameters

> **BLS12381PointNotOnCurveErrorParameters**: `object`

Parameters for constructing a [BLS12381PointNotOnCurveError](../classes/BLS12381PointNotOnCurveError.md).

## Type declaration

### cause?

> `optional` **cause**: [`ExecutionError`](../classes/ExecutionError.md) \| `EvmError`

- The cause of the error.

### details?

> `optional` **details**: `string`

- Details of the error.

### docsBaseUrl?

> `optional` **docsBaseUrl**: `string`

- Base URL for the documentation.

### docsPath?

> `optional` **docsPath**: `string`

- Path to the documentation.

### docsSlug?

> `optional` **docsSlug**: `string`

- Slug for the documentation.

### meta?

> `optional` **meta**: `object`

- Optional object containing additional information about the error.

### metaMessages?

> `optional` **metaMessages**: `string`[]

- Additional meta messages.

## Source

packages/errors/types/ethereum/ethereumjs/BLS12381PointNotOnCurveError.d.ts:58