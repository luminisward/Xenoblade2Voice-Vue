#!/bin/bash
cd 
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker build -t luminisward/xb2voice /home/travis/build/luminisward/Xenoblade2Voice-Vue
docker push luminisward/xb2voice
