const { paginateResults } = require('./utils');

module.exports = {
    Query: {
      hello: () => {
        return `hey sup ? `;
      },
      my_query: async () => {
        values = await db.collection('anuncios').find().toArray().then(res => { return res });
        return values;
      }
    },
  };