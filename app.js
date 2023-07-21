'use strict';


const {app, start} = require('./src/server');
const { sequelize } = require('./src/auth/models/index');


require('dotenv').config();



sequelize
  // .drop()
  .sync({force:true})
  .then(() => {
    app.listen(3000, () => console.log('server up'));
  }).catch(e => {
    console.error('Could not start server', e.message);
  });