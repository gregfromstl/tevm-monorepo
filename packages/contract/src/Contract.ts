import type { EventActionCreator } from './event/EventActionCreator.js'
import type { ReadActionCreator } from './read/ReadActionCreator.js'
import type { WriteActionCreator } from './write/WriteActionCreator.js'
import type { Address, ParseAbi } from 'abitype'

/**
 * An action creator for `Tevm.contract`, `Tevm.eth.getEvents` and more
 * It also is the type solidity contract imports are turned into.
 *
 * Contracts generate actions that can be dispatched to tevm methods
 * such as `contract` `traceContract` and `eth.events`
 * @example
 * ```typescript
 * tevm.contract(
 * -  { abi: [...], args: ['0x1234...'], functionName: 'balanceOf' },
 * +  MyContract.withAddress('0x420...').read.balanceOf('0x1234...'),
 * )
 * ```
 *
 * A contract can be made via the `createContract` function
 * @example
 * ```typescript
 * import { type Contract, createContract} from 'tevm/contract'
 *
 * const contract: Contract = createContract({
 *   name: 'MyContract',
 *  	abi: [
 *  		...
 *  	],
 * })
 * ```
 * These contracts can be automatically generated by using [@tevm/bundler](https://todo.todo)
 * and then importing it. The Tevm bundler will automatically resolve your solidity imports into
 * tevm contract instances
 * @example
 * ```typescript
 * import { MyContract } from './MyContract.sol'
 *
 * console.log(MyContract.humanReadableAbi)
 * ```
 * Address can be added to a contract using the `withAddress` method
 * @example
 * ```typescript
 * import { MyContract } from './MyContract.sol'
 *
 * const MyContractOptimism = MyContract.withAddress('0x420...')
 * ```
 * Contracts can also be used with other libraries such as Viem and ethers.
 * @example
 * ```typescript
 * import { MyContract } from './MyContract.sol'
 * import { createPublicClient } from 'viem'
 *
 * // see viem docs
 * const client = createPublicClient({...})
 *
 * const result = await client.readContract(
 *   MyContract.withAddress('0x420...').read.balanceOf('0x1234...'),
 * )
 */
export type Contract<
	TName extends string,
	THumanReadableAbi extends ReadonlyArray<string>,
> = {
	/**
	 * The json abi of the contract
	 * @example
	 * ```typescript
	 * import { MyContract } from './MyContract.sol'
	 * console.log(MyContract.abi) // [{name: 'balanceOf', inputs: [...], outputs: [...], ...}]
	 * ```
	 */
	abi: ParseAbi<THumanReadableAbi>
	/**
	 * The contract bytecode is not defined on Contract objects are expected
	 * to be deployed to the chain. See `Script` type which is a contract with bytecode
	 * It's provided here to allow easier access of the property when using a
	 * `Contract | Script` union type
	 */
	bytecode?: undefined
	/**
	 * The contract deployedBytecode is not defined on Contract objects are expected
	 * to be deployed to the chain. See `Script` type which is a contract with deployedBytecode
	 * It's provided here to allow easier access of the property when using a
	 * `Contract | Script` union type
	 */
	deployedBytecode?: undefined
	/**
	 * The human readable abi of the contract
	 * @example
	 * ```typescript
	 * import { MyContract } from './MyContract.sol'
	 * console.log(MyContract.humanReadableAbi)
	 * // ['function balanceOf(address): uint256', ...]
	 * ```
	 */
	humanReadableAbi: THumanReadableAbi
	/**
	 * The name of the contract. If imported this will match the name of the contract import
	 */
	name: TName
	/**
	 * Action creators for events. Can be used to create event filters in a typesafe way
	 * @example
	 * ```typescript
	 * tevm.eth.getLog(
	 *   MyContract.withAddress('0x420...').events.Transfer({ from: '0x1234...' }),
	 * )
	 * ===
	 */
	events: EventActionCreator<THumanReadableAbi, undefined, undefined, undefined>
	/**
	 * Action creators for contract view and pure functions
	 * @example
	 * ```typescript
	 * tevm.contract(
	 *   MyContract.withAddress('0x420...').read.balanceOf('0x1234...'),
	 *)
	 * ```
	 */
	read: ReadActionCreator<THumanReadableAbi, undefined, undefined, undefined>
	/**
	 * Action creators for contract payable and nonpayable functions
	 * @example
	 * ```typescript
	 * tevm.contract(
	 *   MyContract.withAddress('0x420...').read.balanceOf('0x1234...'),
	 * )
	 * ```
	 */
	write: WriteActionCreator<THumanReadableAbi, undefined, undefined, undefined>
	/**
	 * Adds an address to the contract. All action creators will return
	 * the address property if added.
	 * @example
	 * ```typescript
	 * import { MyContract } from './MyContract.sol'
	 * const MyContractOptimism = MyContract.withAddress('0x420...')
	 * ```
	 */
	withAddress: <TAddress extends Address>(address: TAddress) => Omit<
		Contract<TName, THumanReadableAbi>,
		'read' | 'write' | 'events' | 'address'
	> & {
		address: TAddress
		events: EventActionCreator<
			THumanReadableAbi,
			undefined,
			undefined,
			TAddress
		>
		read: ReadActionCreator<THumanReadableAbi, undefined, undefined, TAddress>
		write: WriteActionCreator<THumanReadableAbi, undefined, undefined, TAddress>
	}
}
