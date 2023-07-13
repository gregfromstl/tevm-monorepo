// Temporary for alpha breaking change nice to have
// these properties changed
// solcVersion?: string
// deployments?: Record<string, DeploymentConfig>
// forge?: ForgeConfig

import {
	CompilerConfig,
	EVMtsConfig,
	LocalContractsConfig,
} from './EVMtsConfig'

export interface DeprecatedConfig extends EVMtsConfig {
	deployments?: LocalContractsConfig['contracts']
	forge?: CompilerConfig['foundryProject']
	libs?: CompilerConfig['libs']
	solcVersion?: CompilerConfig['solcVersion']
}

export const handleDeprecations = (
	config?: DeprecatedConfig,
	logger: { warn: (message: string) => void } = console,
) => {
	if (!config) {
		return config
	}
	let newConfig = config
	if (config.deployments) {
		logger.warn(`deployments in EVMtsConfig is deprecated and
			has been renamed to 'localContracts.contracts'. It will be
removed in the EVMts beta release.
Please rename the property in your tsconfig.json.`)
		const { deployments, ...rest } = config as typeof config & {
			deployments: any
		}
		newConfig = {
			...rest,
			localContracts: {
				...rest.localContracts,

				contracts: rest?.localContracts?.contracts ?? deployments,
			},
		}
	}
	if (config.forge) {
		const { forge, ...rest } = config as typeof config & { forge: any }
		logger.warn(`forge in EVMtsConfig is deprecated and
			has been renamed to 'compiler.foundryProject'. It will be
removed in the EVMts beta release.
Please rename the property in your tsconfig.json.`)
		newConfig = {
			...rest,
			compiler: {
				...rest.compiler,
				foundryProject: rest?.compiler?.foundryProject ?? forge,
			},
		}
	}
	if (config.libs) {
		const { libs, ...rest } = config as typeof config & { libs: any }
		logger.warn(`libs in EVMtsConfig is deprecated
			and has been renamed to 'compiler.libs'. It will be
removed in the EVMts beta release.
Please rename the property in your tsconfig.json.`)
		newConfig = {
			...rest,
			compiler: {
				...rest.compiler,
				libs: [...(rest?.compiler?.libs ?? []), ...libs],
			},
		}
	}
	if (config.solcVersion) {
		const { solcVersion, ...rest } = config as typeof config & {
			solcVersion: any
		}
		logger.warn(`solcVersion in EVMtsConfig is deprecated and
			has been renamed to 'compiler.solcVersion'
Please rename the property in your tsconfig.json`)
		newConfig = {
			...rest,
			compiler: {
				...rest.compiler,
				solcVersion: rest?.compiler?.solcVersion ?? solcVersion,
			},
		}
	}
	return newConfig
}