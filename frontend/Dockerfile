# Use an official Node.js image as the base
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install --production

# Copy the rest of the frontend files to the working directory
COPY . .

# Build the frontend
RUN npm run build

# Expose the port on which the frontend will run (3000 by default)
EXPOSE 3000

# Set the command to run the frontend server
CMD ["npm", "start"]
