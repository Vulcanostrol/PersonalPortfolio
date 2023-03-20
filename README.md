# Personal portfolio website
This repository holds the code for my personal website at https://koenvandenbrink.com.

The website is made with Next and Tailwind.

## Building for prod
It is very likely I will forget about the docker `-f` argument, so I will add an example to build here:

```shell
docker build -t portfolio-production -f Dockerfile.production .
```
