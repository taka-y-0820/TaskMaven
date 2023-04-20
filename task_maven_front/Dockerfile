FROM node:16-bullseye-slim AS dev
ARG APP_WORKDIR
WORKDIR ${APP_WORKDIR}
# 依存パッケージインストール
COPY ./src/package*.json ./
RUN npm ci --only=production

# Build環境
FROM node:16-bullseye-slim AS builder
ARG APP_WORKDIR
WORKDIR ${APP_WORKDIR}
COPY ./src/package*.json ./
RUN npm ci
COPY ./src .
RUN npm run build

# 実行環境
# debug image set for each language provides a busybox shell to enter.
FROM gcr.io/distroless/nodejs:16-debug
ENV NODE_ENV development
ARG APP_WORKDIR
WORKDIR ${APP_WORKDIR}
COPY --from=builder ${APP_WORKDIR}/public ./public
COPY --from=builder --chown=nonroot:nonroot ${APP_WORKDIR}/.next ./.next
COPY --from=dev ${APP_WORKDIR}/node_modules ./node_modules
COPY --from=builder ${APP_WORKDIR}/package.json ./package.json
USER nonroot
EXPOSE 3000
CMD ["node_modules/.bin/next","dev"]
