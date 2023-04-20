FROM golang:1.18-alpine AS dev
ARG API_WORKDIR
WORKDIR ${API_WORKDIR}
COPY ./src/go.mod ./src/go.sum ./src/main.go ./
RUN go mod download \
&& go build -o main ${API_WORKDIR}/main.go
EXPOSE 8000
CMD ["go","run","main.go"]

