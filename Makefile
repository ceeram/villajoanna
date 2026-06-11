.PHONY: help images docs serve clean-photos

help: ## Show available targets
	@grep -E '^[a-zA-Z_-]+:.*##' $(MAKEFILE_LIST) | awk 'BEGIN{FS=":.*##"}{printf "  \033[36m%-14s\033[0m %s\n", $$1, $$2}'

images: ## Optimize originals (images/_originals/) into web photos (images/photos/)
	@bash scripts/optimize-images.sh

docs: ## Generate first-page previews for the PDFs in documents/
	@bash scripts/make-doc-previews.sh

serve: ## Preview the site locally at http://localhost:8000
	@echo "Serving at http://localhost:8000  (press Ctrl+C to stop)"
	@python3 -m http.server 8000

clean-photos: ## Remove generated web photos (keeps your originals)
	@rm -rf images/photos && echo "Removed images/photos/"
