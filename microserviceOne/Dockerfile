# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . /app

# Expose port 3000 to the outside world
EXPOSE 3000

# Run the app when the container starts
CMD [ "npm", "run", "dev" ]