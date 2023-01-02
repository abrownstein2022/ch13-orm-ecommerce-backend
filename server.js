const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });

// //turn on connection to db and server
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'),PORT);
// });
// catch-all route
// any route that doesn't match any of the defined routes
app.all('*', (req, res) => {
  console.log('No route found at:', req.path)
  res.render(`errorpage`)
})

//added PORT below so other users will know if the port has changed
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening',PORT));
});