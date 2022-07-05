install: # install
	npm ci

brain-games: # run
	node bin/brain-games.js

brain-even: # run
	node bin/brain-even.js

brain-calc: # run
	node bin/brain-calc.js

publish: # publish
	npm publish --dry-run

lint: # eslint
	npx eslint .