const fastify = require('fastify');
const mercurius = require('mercurius');
const fastifyCors = require('fastify-cors');

const typeDefs = `
  extend type Query {
    servA: String!
  }
`;

const resolvers = {
  Query: {
    servA: () => "hello from servA"
  },
};

const app = fastify({logger:true});
app.register(fastifyCors);
app.register(mercurius, {
  schema: typeDefs,
  resolvers,
  federationMetadata: true
});

app.listen(4001, (err) => {
  if (err) console.log(err)
  console.log("Listening on 4001");
});