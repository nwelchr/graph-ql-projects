const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// if request is made to /graphql, it means
// they're trying to use graphql
// so they'll let it handle the request
// app.use links up a middleware
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('listening');
});
