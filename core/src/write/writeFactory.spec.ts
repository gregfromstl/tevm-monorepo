import { evmtsContractFactory } from '../evmtsContractFactory'
import { dummyAbi } from '../test/fixtures'
import type { Address } from 'abitype'
import { describe, expect, it } from 'vitest'

const dummyAddresses = { 1: '0x12345678' } as const satisfies Record<
	number,
	Address
>

const bytecode = '0x12345678'

const contract = evmtsContractFactory({
	abi: dummyAbi,
	name: 'DummyContract',
	addresses: dummyAddresses,
	bytecode,
})

describe('write', () => {
	it('should return information for write function', () => {
		const writeInfo = contract.write().exampleWrite('data', BigInt(420))
		expect(writeInfo.address).toMatchInlineSnapshot('"0x12345678"')
		expect(writeInfo.args).toMatchInlineSnapshot(`
				[
				  "data",
				  420n,
				]
			`)
		expect(writeInfo.abi).toMatchInlineSnapshot(`
        [
          {
            "inputs": [
              {
                "name": "str",
                "type": "string",
              },
              {
                "name": "num",
                "type": "uint256",
              },
            ],
            "name": "exampleWrite",
            "outputs": [
              {
                "name": "",
                "type": "string",
              },
            ],
            "stateMutability": "payable",
            "type": "function",
          },
        ]
      `)
		expect(writeInfo.humanReadableAbi).toMatchInlineSnapshot(`
        [
          "function exampleWrite(string str, uint256 num) payable returns (string)",
        ]
      `)
	})
	it('should work for overloaded function', () => {
		const writeInfo1Arg = contract.write().overloadedWrite('data')
		expect(writeInfo1Arg.address).toMatchInlineSnapshot('"0x12345678"')
		expect(writeInfo1Arg.args).toMatchInlineSnapshot(`
				[
				  "data",
				]
			`)
		expect(writeInfo1Arg.abi).toMatchInlineSnapshot(`
				[
				  {
				    "inputs": [
				      {
				        "name": "str",
				        "type": "string",
				      },
				    ],
				    "name": "overloadedWrite",
				    "outputs": [
				      {
				        "name": "",
				        "type": "string",
				      },
				    ],
				    "stateMutability": "payable",
				    "type": "function",
				  },
				  {
				    "inputs": [],
				    "name": "overloadedWrite",
				    "outputs": [
				      {
				        "name": "",
				        "type": "string",
				      },
				    ],
				    "stateMutability": "payable",
				    "type": "function",
				  },
				]
			`)
		expect(writeInfo1Arg.humanReadableAbi).toMatchInlineSnapshot(`
				[
				  "function overloadedWrite() payable returns (string)",
				]
			`)
		const writeInfo0Arg = contract.write().overloadedWrite()
		expect(writeInfo0Arg.address).toMatchInlineSnapshot('"0x12345678"')
		expect(Object.keys(writeInfo0Arg).includes('args')).toBe(false)
		expect(writeInfo0Arg.abi).toMatchInlineSnapshot(`
				[
				  {
				    "inputs": [
				      {
				        "name": "str",
				        "type": "string",
				      },
				    ],
				    "name": "overloadedWrite",
				    "outputs": [
				      {
				        "name": "",
				        "type": "string",
				      },
				    ],
				    "stateMutability": "payable",
				    "type": "function",
				  },
				  {
				    "inputs": [],
				    "name": "overloadedWrite",
				    "outputs": [
				      {
				        "name": "",
				        "type": "string",
				      },
				    ],
				    "stateMutability": "payable",
				    "type": "function",
				  },
				]
			`)
		expect(writeInfo0Arg.humanReadableAbi).toMatchInlineSnapshot(`
				[
				  "function overloadedWrite() payable returns (string)",
				]
			`)
	})
})