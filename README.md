# Reproduction for bug with consistent-type-declarations

1. Clone this repo
2. Run `npm i`
3. Run `npm run lint`
	- You'll see an error reported that the type defined in src/index.ts should be an interface instead
4. Run `npm run lint -- --fix`
	- You'll see a new syntax error reported. Open src/index.ts to see the problem: the rule left behind a parenthesis that it shouldn't have

