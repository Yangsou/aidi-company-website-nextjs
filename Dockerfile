FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Install build tools and enable pnpm
RUN apk add --no-cache python3 make g++ && \
    corepack enable && corepack prepare pnpm@latest --activate

# Copy dependency manifests
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code and build
COPY . .
RUN pnpm build

# Create non-root user
RUN addgroup -S nodejs && adduser -S nextuser -G nodejs

RUN chown -R nextuser:nodejs /app

USER nextuser

EXPOSE 3000

CMD ["sh", "-c", "node node_modules/next/dist/bin/next start -p $PORT -H 0.0.0.0"]