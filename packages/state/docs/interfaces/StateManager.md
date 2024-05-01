**@tevm/state** ∙ [README](../README.md) ∙ [API](../API.md)

***

[API](../API.md) > StateManager

# Interface: StateManager

The core data structure powering the state manager internally

## Extends

- `EVMStateManagerInterface`.[`BaseState`](../type-aliases/BaseState.md)

## Properties

### \_caches

> **\_caches**: [`StateCache`](../type-aliases/StateCache.md)

#### Inherited from

BaseState.\_caches

#### Source

[packages/state/src/BaseState.ts:16](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/BaseState.ts#L16)

***

### \_currentStateRoot

> **\_currentStateRoot**: `Uint8Array`

#### Inherited from

BaseState.\_currentStateRoot

#### Source

[packages/state/src/BaseState.ts:14](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/BaseState.ts#L14)

***

### \_options

> **\_options**: [`StateOptions`](../type-aliases/StateOptions.md)

#### Inherited from

BaseState.\_options

#### Source

[packages/state/src/BaseState.ts:15](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/BaseState.ts#L15)

***

### \_stateRoots

> **\_stateRoots**: [`StateRoots`](../type-aliases/StateRoots.md)

Mapping of hashes to State roots

#### Inherited from

BaseState.\_stateRoots

#### Source

[packages/state/src/BaseState.ts:13](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/BaseState.ts#L13)

***

### getAccountAddresses

> **getAccountAddresses**: () => \`0x${string}\`[]

Returns contract addresses

#### Source

[packages/state/src/StateManager.ts:10](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/StateManager.ts#L10)

***

### originalStorageCache

> **originalStorageCache**: `object`

#### Type declaration

##### clear()

##### get()

###### Parameters

▪ **address**: `Address`

▪ **key**: `Uint8Array`

#### Inherited from

EvmStateManagerInterface.originalStorageCache

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:73

***

### ready

> **ready**: () => `Promise`\<`true`\>

#### Inherited from

BaseState.ready

#### Source

[packages/state/src/BaseState.ts:9](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/BaseState.ts#L9)

## Methods

### checkpoint()

> **checkpoint**(): `Promise`\<`void`\>

#### Inherited from

EvmStateManagerInterface.checkpoint

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:62

***

### clearCaches()

> **clearCaches**(): `void`

Resets all internal caches

#### Source

[packages/state/src/StateManager.ts:22](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/StateManager.ts#L22)

***

### clearContractStorage()

> **clearContractStorage**(`address`): `Promise`\<`void`\>

#### Parameters

▪ **address**: `Address`

#### Inherited from

EvmStateManagerInterface.clearContractStorage

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:61

***

### commit()

> **commit**(): `Promise`\<`void`\>

#### Inherited from

EvmStateManagerInterface.commit

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:63

***

### deepCopy()

> **deepCopy**(): `Promise`\<[`StateManager`](StateManager.md)\>

Returns a new instance of the ForkStateManager with the same opts and all storage copied over

#### Source

[packages/state/src/StateManager.ts:14](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/StateManager.ts#L14)

***

### deleteAccount()

> **deleteAccount**(`address`): `Promise`\<`void`\>

#### Parameters

▪ **address**: `Address`

#### Inherited from

EvmStateManagerInterface.deleteAccount

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:55

***

### dumpCanonicalGenesis()

> **dumpCanonicalGenesis**(): `Promise`\<[`TevmState`](../type-aliases/TevmState.md)\>

Dumps the state of the state manager as a [TevmState](../type-aliases/TevmState.md)

#### Source

[packages/state/src/StateManager.ts:18](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/StateManager.ts#L18)

***

### dumpStorage()

> **dumpStorage**(`address`): `Promise`\<`StorageDump`\>

#### Parameters

▪ **address**: `Address`

#### Inherited from

EvmStateManagerInterface.dumpStorage

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:77

***

### dumpStorageRange()

> **dumpStorageRange**(`address`, `startKey`, `limit`): `Promise`\<`StorageRange`\>

#### Parameters

▪ **address**: `Address`

▪ **startKey**: `bigint`

▪ **limit**: `number`

#### Inherited from

EvmStateManagerInterface.dumpStorageRange

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:78

***

### generateCanonicalGenesis()

> **generateCanonicalGenesis**(`initState`): `Promise`\<`void`\>

#### Parameters

▪ **initState**: `any`

#### Inherited from

EvmStateManagerInterface.generateCanonicalGenesis

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:79

***

### getAccount()

> **getAccount**(`address`): `Promise`\<`undefined` \| `Account`\>

#### Parameters

▪ **address**: `Address`

#### Inherited from

EvmStateManagerInterface.getAccount

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:53

***

### getAppliedKey()

> **`optional`** **getAppliedKey**(`address`): `Uint8Array`

#### Parameters

▪ **address**: `Uint8Array`

#### Inherited from

EvmStateManagerInterface.getAppliedKey

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:70

***

### getContractCode()

> **getContractCode**(`address`): `Promise`\<`Uint8Array`\>

#### Parameters

▪ **address**: `Address`

#### Inherited from

EvmStateManagerInterface.getContractCode

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:58

***

### getContractStorage()

> **getContractStorage**(`address`, `key`): `Promise`\<`Uint8Array`\>

#### Parameters

▪ **address**: `Address`

▪ **key**: `Uint8Array`

#### Inherited from

EvmStateManagerInterface.getContractStorage

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:59

***

### getProof()

> **getProof**(`address`, `storageSlots`?): `Promise`\<`Proof`\>

#### Parameters

▪ **address**: `Address`

▪ **storageSlots?**: `Uint8Array`[]

#### Inherited from

EvmStateManagerInterface.getProof

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:80

***

### getStateRoot()

> **getStateRoot**(): `Promise`\<`Uint8Array`\>

#### Inherited from

EvmStateManagerInterface.getStateRoot

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:65

***

### hasStateRoot()

> **hasStateRoot**(`root`): `Promise`\<`boolean`\>

#### Parameters

▪ **root**: `Uint8Array`

#### Inherited from

EvmStateManagerInterface.hasStateRoot

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:68

***

### modifyAccountFields()

> **modifyAccountFields**(`address`, `accountFields`): `Promise`\<`void`\>

#### Parameters

▪ **address**: `Address`

▪ **accountFields**: `Partial`\<`Pick`\<`Account`, `"nonce"` \| `"balance"` \| `"storageRoot"` \| `"codeHash"`\>\>

#### Inherited from

EvmStateManagerInterface.modifyAccountFields

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:56

***

### putAccount()

> **putAccount**(`address`, `account`?): `Promise`\<`void`\>

#### Parameters

▪ **address**: `Address`

▪ **account?**: `Account`

#### Inherited from

EvmStateManagerInterface.putAccount

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:54

***

### putContractCode()

> **putContractCode**(`address`, `value`): `Promise`\<`void`\>

#### Parameters

▪ **address**: `Address`

▪ **value**: `Uint8Array`

#### Inherited from

EvmStateManagerInterface.putContractCode

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:57

***

### putContractStorage()

> **putContractStorage**(`address`, `key`, `value`): `Promise`\<`void`\>

#### Parameters

▪ **address**: `Address`

▪ **key**: `Uint8Array`

▪ **value**: `Uint8Array`

#### Inherited from

EvmStateManagerInterface.putContractStorage

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:60

***

### revert()

> **revert**(): `Promise`\<`void`\>

#### Inherited from

EvmStateManagerInterface.revert

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:64

***

### setStateRoot()

> **setStateRoot**(`stateRoot`, `clearCache`?): `Promise`\<`void`\>

#### Parameters

▪ **stateRoot**: `Uint8Array`

▪ **clearCache?**: `boolean`

#### Inherited from

EvmStateManagerInterface.setStateRoot

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:66

***

### shallowCopy()

> **shallowCopy**(`downlevelCaches`?): `EVMStateManagerInterface`

#### Parameters

▪ **downlevelCaches?**: `boolean`

#### Inherited from

EvmStateManagerInterface.shallowCopy

#### Source

node\_modules/.pnpm/@ethereumjs+common@4.3.0/node\_modules/@ethereumjs/common/dist/esm/interfaces.d.ts:81

***
Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)