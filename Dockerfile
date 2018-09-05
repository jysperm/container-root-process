FROM node:stretch

RUN apt-get update && apt-get install -y dumb-init daemon runit
RUN echo '{}' > package.json
ADD * ./

# CMD ["dumb-init", "--", "npm", "start"]
# CMD ["node", "server.js"]
# CMD ["dumb-init", "--", "daemon", "-rfU", "--", "node", "server.js"]
CMD ["dumb-init", "--", "daemon", "-rfU", "--", "npm", "start"]
