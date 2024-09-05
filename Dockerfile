# Use an official Node.js runtime as a parent image
FROM node:20.17.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock into the container
COPY package.json yarn.lock ./

# Install the project dependencies using Yarn
RUN yarn install

# Copy the rest of the project files into the container
COPY . .

# Build the React app
RUN yarn build

# Install a simple HTTP server to serve the static files
RUN yarn global add serve

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]
