build:
	docker build -t container-root-process .

run: build
	$(eval CID := $(shell docker run -d container-root-process))

run-and-kill: run
	sleep 1
	time docker stop ${CID}
	docker logs ${CID}
