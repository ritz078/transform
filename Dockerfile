# Use an official Node.js runtime as a parent image
FROM node:16.20.2-alpine

# Set the working directory in the container
WORKDIR /transform

# Install required binaries
RUN apk update && apk add git autoconf automake gcc build-base

# Copy the package.json file
COPY package*.json yarn.lock ./

# Install the dependencies
RUN yarn install --network-timeout 600000

# Copy the application code
COPY . .

# Build the Next.js application for production
RUN yarn && yarn build

# Expose port 3000
EXPOSE 3000

# Run the Next.js production server
CMD ["yarn", "start"]
