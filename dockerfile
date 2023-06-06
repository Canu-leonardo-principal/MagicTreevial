# Use the Alpine base image
FROM alpine

# Install git, npm, and nodejs
RUN apk update && apk add --no-cache git npm nodejs

# Set the working directory
WORKDIR /app

COPY comandi.sh /app/comandi.sh 

RUN chmod +x /app/comandi.sh 

ENTRYPOINT /app/comandi.sh

# COMMAND TO BUILD:
# > docker build -t magic-treevial --no-cache .

# COMMAND TO RUN:
# > docker run -it --rm -p 5173:5173 magic-treevial