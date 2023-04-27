FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

EXPOSE 8080


# Run the application
CMD ["npm", "start"]





