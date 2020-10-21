import fastify from 'fastify';
import mercurius from 'mercurius';
import fastifyCors from 'fastify-cors';

const app = fastify({logger:true});
app.register(fastifyCors);
app.register(mercurius, {
  graphiql: "playground",
  gateway: {
    services: [
      {
        name: "serviceA",
        url: "http://localhost:4001/graphql",
        mandatory: true
      },
      {
        name: "serviceB",
        url: "http://localhost:4002/graphql",
        mandatory: false
      }
    ]
  }
});

app.listen(4000, (err) => {
  if (err) console.log(err)
  console.log("Listening on 4000");
});