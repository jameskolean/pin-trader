//import faunadb from 'faunadb';

// const q = faunadb.query;
// const client = new faunadb.Client({
//   secret: process.env.FAUNADB_SERVER_SECRET,
// });

// exports.handler = (event, context, callback) => {
//   console.log('****************');
//   console.log('****************');
//   console.log('****************');
//   console.log('****************');
//   console.log('****************');
//   console.log('****************');
//   console.log('Function `users-read-all` invoked');
//   callback(null, {
//     // return null to show no errors
//     statusCode: 200, // http status code
//     body: JSON.stringify({
//       msg: 'Hello, World! ' + Math.round(Math.random() * 10),
//     }),
//   });
//   //  return
//   // client
//   //   .query(q.Paginate(q.Match(q.Ref('indexes/all_users'))))
//   //   .then(response => {
//   //     const userRefs = response.data;
//   //     console.log('Users refs', todoRefs);
//   //     console.log(`${usersRefs.length} users found`);
//   //     // create new query out of todo refs. http://bit.ly/2LG3MLg
//   //     const getAllUsersDataQuery = todoRefs.map(ref => {
//   //       return q.Get(ref);
//   //     });
//   //     // then query the refs
//   //     return client.query(getAllUsersDataQuery).then(ret => {
//   //       return callback(null, {
//   //         statusCode: 200,
//   //         body: JSON.stringify(ret),
//   //       });
//   //     });
//   //   })
//   //   .catch(error => {
//   //     console.log('error', error);
//   //     return callback(null, {
//   //       statusCode: 400,
//   //       body: JSON.stringify(error),
//   //     });
//   //   });
// };
exports.handler = (event, context, callback) => {
  console.log('queryStringParameters', event.queryStringParameters);
  callback(null, {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      msg: 'Hello, World! ' + Math.round(Math.random() * 10),
    }),
  });
};
