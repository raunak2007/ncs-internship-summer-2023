# Use an official Node.js image as the base
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install --production

# Copy the rest of the backend files to the working directory
COPY . .

# Expose the port on which the backend will run (8080 by default)
EXPOSE 8080

# Set the command to run the backend server
CMD ["node", "server.js"]
