###########################################
# build
###########################################
ARG NODE_VERSION=14.15.4
FROM node:${NODE_VERSION} as dev

WORKDIR /app
COPY . .

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm ci

# Our app will run on port 4000
EXPOSE 4000
ENV ENV=development

###########################################
# package up only the app
###########################################
FROM node:${NODE_VERSION}

WORKDIR /app
COPY . .

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY --from=dev /app/ .

# Our app will run on port 4000
EXPOSE 4000

# Start an apollo server at port 3000
CMD ["./start.sh"]
