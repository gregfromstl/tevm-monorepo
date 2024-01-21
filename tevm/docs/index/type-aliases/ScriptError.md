**tevm** ∙ [README](../../README.md) ∙ [API](../../API.md)

***

[API](../../API.md) > [index](../README.md) > ScriptError

# Type alias: ScriptError

> **ScriptError**: [`ContractError`](ContractError.md) \| [`InvalidBytecodeError`](../../api/type-aliases/InvalidBytecodeError.md) \| [`InvalidDeployedBytecodeError`](../../api/type-aliases/InvalidDeployedBytecodeError.md)

Error type of errors thrown by the tevm_script procedure

## Example

```ts
const {errors} = await tevm.script({address: '0x1234'})
if (errors?.length) {
 console.log(errors[0].name) // InvalidBytecodeError
 console.log(errors[0].message) // Invalid bytecode should be a hex string: 1234
}
```

## Source

vm/api/types/errors/ScriptError.d.ts:13

***
Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)