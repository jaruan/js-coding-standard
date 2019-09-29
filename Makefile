ENV?=qa

pack:
	rm -rf ./package
	mkdir ./package ./package/config
	cp -R ./config/default.json ./config/${ENV}.json ./package/config
	cp -r ./src package.json package-lock.json .npmrc .npmignore ./package/
	npm --prefix ./package install ./package --production
	cd package/ && zip -r package.zip *

deploy: pack
	LAMBDA_NAME=${ENV}-membership-sns node ./scripts/deploy-lambda.js

deploy_production: pack
	LAMBDA_NAME=prod-membership-sns node ./scripts/deploy-lambda.js
