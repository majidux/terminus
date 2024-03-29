# Base image
FROM node:16

LABEL authors="m.darvishnejad"

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN yarn

# RUN npm install --target_arch=x64 --target_platform=linux --target_libc=glibc

# Bundle app source
COPY . .

# Copy the .env and .env.development files
#COPY .env .env.development ./

# Creates a "dist" folder with the production build
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3000

# Start the server using the production build
CMD ["npm", "run", "start:prod"]

