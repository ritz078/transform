FROM node:16-bookworm AS base

FROM base AS deps

RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json yarn.lock* ./
RUN yarn --frozen-lockfile

FROM base AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN yarn run build

FROM base AS runner

WORKDIR /app

RUN adduser --uid 1001 nextjs

COPY --from=builder --chown=nextjs:node /app/ /app/

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "run", "start"]
