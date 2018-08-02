#!/bin/bash
cd /home/travis/build/luminisward/Xenoblade2Voice-Vue
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker build -t luminisward/xb2voice .
docker push luminisward/xb2voice
