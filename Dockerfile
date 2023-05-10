# Using node:16-alpine base image
FROM node:16-alpine
LABEL maintainer="DefinitelyHuman"

# Set /app as the default work directory
WORKDIR /usr/app

# copy package.json to the working directory for packages installation
COPY react-app/package*.json ./
# Copy all the project files to the working directory
COPY ./react-app ./

# Install npm dependencies
RUN yarn install && \
    mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache && \
    mkdir -p node_modules/.vite && chmod -R 777 node_modules/.vite && \
    adduser \
    --disabled-password \
    --no-create-home \
    react-user


# Expose the port of your application to bind with the host port
EXPOSE 3000
# USER react-user # causes errors when creating cache foldr in .vite
