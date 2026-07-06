# Step 1: Build Stage
FROM public.ecr.aws/docker/library/node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Declare build arguments for Next.js public environment variables
# These must be available at BUILD TIME for Next.js to bake them into the bundle
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_SOCKET_URL

# Set environment variables from build arguments
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_SOCKET_URL=$NEXT_PUBLIC_SOCKET_URL

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./
# If you're using yarn with a yarn.lock file, copy it instead of package-lock.json and use yarn commands
# COPY package.json yarn.lock ./

# Install dependencies
RUN npm install
# For yarn, use the following command
# RUN yarn install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Debug: Print environment variables to verify they're set during build
RUN echo "🔍 Build-time environment variables:" && \
    echo "NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}" && \
    echo "NEXT_PUBLIC_SOCKET_URL=${NEXT_PUBLIC_SOCKET_URL}"

# Build the application for production
RUN npm run build
# For yarn, use the following command
# RUN yarn build

# Step 2: Run Stage
FROM public.ecr.aws/docker/library/node:20-alpine

WORKDIR /app

# Copy the built next app from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
# For yarn, use the following command
# CMD ["yarn", "start"]