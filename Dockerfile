# Dockerfile
FROM localhost:5000/node:20.0.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --production

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 3333

# Command to run the app
CMD [ "npm", "run", "start:api"]