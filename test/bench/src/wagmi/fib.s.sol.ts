import { createContract } from '@tevm/contract'
const _Fibonacci = {
	name: 'Fibonacci',
	humanReadableAbi: ['function calculate(uint256 n) pure returns (uint256)', 'constructor()'],
	bytecode:
		'0x608060405234801561000f575f80fd5b5061022d8061001d5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063b9d92de81461002d575b5f80fd5b610047600480360381019061004291906100fd565b61005d565b6040516100549190610137565b60405180910390f35b5f80820361006d575f90506100c1565b6001820361007e57600190506100c1565b5f80600190505f600290505b8481116100ba575f828461009e919061017d565b90508293508092505080806100b2906101b0565b91505061008a565b5080925050505b919050565b5f80fd5b5f819050919050565b6100dc816100ca565b81146100e6575f80fd5b50565b5f813590506100f7816100d3565b92915050565b5f60208284031215610112576101116100c6565b5b5f61011f848285016100e9565b91505092915050565b610131816100ca565b82525050565b5f60208201905061014a5f830184610128565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610187826100ca565b9150610192836100ca565b92508282019050808211156101aa576101a9610150565b5b92915050565b5f6101ba826100ca565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036101ec576101eb610150565b5b60018201905091905056fea264697066735822122069aab50b5ad2bce51b67a6bfd30357202045b69025e9a2849dcfddd3e8da22c364736f6c63430008170033',
	deployedBytecode:
		'0x608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063b9d92de81461002d575b5f80fd5b610047600480360381019061004291906100fd565b61005d565b6040516100549190610137565b60405180910390f35b5f80820361006d575f90506100c1565b6001820361007e57600190506100c1565b5f80600190505f600290505b8481116100ba575f828461009e919061017d565b90508293508092505080806100b2906101b0565b91505061008a565b5080925050505b919050565b5f80fd5b5f819050919050565b6100dc816100ca565b81146100e6575f80fd5b50565b5f813590506100f7816100d3565b92915050565b5f60208284031215610112576101116100c6565b5b5f61011f848285016100e9565b91505092915050565b610131816100ca565b82525050565b5f60208201905061014a5f830184610128565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610187826100ca565b9150610192836100ca565b92508282019050808211156101aa576101a9610150565b5b92915050565b5f6101ba826100ca565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036101ec576101eb610150565b5b60018201905091905056fea264697066735822122069aab50b5ad2bce51b67a6bfd30357202045b69025e9a2849dcfddd3e8da22c364736f6c63430008170033',
} as const
export const Fibonacci = createContract(_Fibonacci)
