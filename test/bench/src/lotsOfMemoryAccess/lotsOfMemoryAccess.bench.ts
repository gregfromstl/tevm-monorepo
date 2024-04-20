import { bench, describe, expect } from 'vitest'
import { lotsOfMemoryAccess } from './lotsOfMemoryAccess.js'

/* ---------------------------------- TEVM ---------------------------------- */
const alchemyKey = process.env.BENCH_ALCHEMY_KEY
const rpcUrl = alchemyKey ? `https://opt-mainnet.g.alchemy.com/v2/${alchemyKey}` : 'https://mainnet.optimism.io'

describe('import("@tevm/memory-client").createMemoryClient().contract - lotsOfMemoryAccess', () => {
	bench(
		'initialize a brand new tevm client and then execute a call with lots of storage requirements. This is similar to how one might use tevm in a serverless function where tevm is reinitialized often',
		async () => {
			expect(await lotsOfMemoryAccess(rpcUrl)).toEqual({
				createdAddresses: new Set(),
				data: undefined,
				executionGasUsed: 78590n,
				gas: 999921410n,
				logs: [
					{
						address: '0x171593d3E5Bc8A2E869600F951ed532B9780Cbd2',
						data: '0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000008ac7230489e80000000000000000000000000000000000000000000000000001158e460913d00000',
						topics: [
							'0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb',
							'0x0000000000000000000000001111111111111111111111111111111111111111',
							'0x0000000000000000000000000000000000000000000000000000000000000000',
							'0x0000000000000000000000001111111111111111111111111111111111111111',
						],
					},
				],
				rawData: '0x',
				selfdestruct: new Set(),
			})
		},
	)
})
