FROM node:20-alpine AS build
WORKDIR /app

RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --no-frozen-lockfile

COPY . .
RUN pnpm run build

FROM node:20-alpine AS runtime
WORKDIR /app
RUN corepack enable

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./
COPY --from=build /app/pnpm-lock.yaml ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/wrangler.jsonc ./

EXPOSE 4321
CMD ["pnpm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4321"]
