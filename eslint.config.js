import tsEslint from 'typescript-eslint';

export default tsEslint.config(
	...tsEslint.configs.recommendedTypeChecked,
	{
		rules: {
			'@typescript-eslint/consistent-type-definitions': 'error'
		}
	},
	{
		languageOptions: {
			parserOptions: {
				project: import.meta.dirname + '/tsconfig.eslint.json'
			}
		}
	}
);

