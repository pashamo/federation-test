import fastify from 'fastify';
import mercurius from 'mercurius';
import fastifyCors from 'fastify-cors';

const typeDefs = `
  extend type Query {
    servB: String!
  }
`;

const resolvers = {
  Query: {
    servB: () => "hello from servB"
  },
};

const app = fastify({logger:true});
app.register(fastifyCors);
app.register(mercurius, {
  schema: typeDefs,
  resolvers,
  federationMetadata: true
});

app.listen(4002, (err) => {
  if (err) console.log(err)
  console.log("Listening on 4002");
});