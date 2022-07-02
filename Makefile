install: # install
	npm ci

brain-games: # run
	node bin/brain-games.js

publish: # publish
	npm publish --dry-run