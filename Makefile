NODE_DOCKER_IMAGE=node:8.16.0-alpine

run:
	docker run -v $(PWD):/workspace -w /workspace $(NODE_DOCKER_IMAGE) node index ./fedor-rusak.ru/notes/