.PHONY: build deploy deploy-prod tag-and-deploy

# Build the project
build:
	npm run build

# Deploy to Vercel preview
deploy:
	vercel

# Deploy to Vercel production
deploy-prod:
	vercel --prod

# Build and deploy to production
deploy-all: build deploy-prod

# Install dependencies
install:
	npm install

# Clean build artifacts
clean:
	rm -rf dist/
	rm -rf node_modules/

# Run development server
dev:
	npm run dev

# Full rebuild and deploy
rebuild: clean install build deploy-prod

# Create a new version tag and push
tag:
	version := $(shell git rev-parse HEAD)
	git tag -a v$(version) -m "Release v$(version)"; \
	git push origin v$(version)

# Delete a tag
delete-tag:
	@read -p "Enter version to delete (e.g., 1.0.0): " version; \
	git tag -d v$$version; \
	git push origin :refs/tags/v$$version
