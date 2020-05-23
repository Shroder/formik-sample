# Static Analysis Quickstart Project

[Prettier Playground](http://prettier.io/playground) Tool that helps generating
Prettier config (.prettierrc)

## Commands/Tools

### Tools

[eslint](https://www.npmjs.com/package/eslint) - Reports and fixes syntax errors
and other code problems

[lintstaged](https://www.npmjs.com/package/lint-staged) - Runs commands against
staged files. (ex. eslint, prettier)

[prettier](https://www.npmjs.com/package/prettier) - Formats code and json

[husky](https://www.npmjs.com/package/husky) - Run commands on githooks

[npm-run-all](https://www.npmjs.com/package/npm-run-all) - Runs multiple
commands. With `---parallel`, runs commands in parallel

    npm-run-all --parallel [commands]

### Commands

    npx eslint . --fix // Automatically fix ESLint errors npx format // Fix
    npx format // Runs prettier against changed files

formating issues

## Visual Code Commands

cmd + shift + p > format document
