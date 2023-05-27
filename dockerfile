# Use the Alpine base image
FROM alpine

# Install git, npm, and nodejs
RUN apk update && apk add --no-cache git npm nodejs

# Set the working directory
WORKDIR /app

# Clone the repository from GitHub
RUN git clone https://github.com/Canu-leonardo-principal/MagicTreevial.git

# Set the working directory to the cloned repository
WORKDIR /app/MagicTreevial

# Install dependencies
RUN npm install

# Start the application
CMD npm run dev