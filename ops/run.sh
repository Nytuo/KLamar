#!/bin/sh

front=false
back=false
dockercomp=false
logging=false

while (( "$#" )); do
    case "$1" in
    --rebuild-front)
        front=true
        shift
    ;;
    --rebuild-back)
        back=true
        shift
    ;;
    *)
        echo "Invalid option: $1" >&2
        exit 1
    ;;
    esac
done

if $front; then
    echo "Forcing the removal of the container and image with tag front..."
    echo "Removing the container..."
    docker rmi -f front
    echo "Rebuilding the image without cache..."
    docker build --no-cache --build-arg ENVIROMENT=docker -t front ../front-end

fi

if $back; then
    echo "Forcing the removal of the container and image with tag back..."
    echo "Removing the container..."
    docker rmi -f back
    echo "Rebuilding the image without cache..."
    docker build --no-cache -t back ../backend
fi



echo "Running docker-compose down..."
docker-compose --file docker-compose-e2e.yml down
docker-compose --file docker-compose.yml down

echo "Running docker-compose up..."
docker-compose --file docker-compose.yml up
