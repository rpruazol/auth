// Create a Sequelize model

const Users = (dbInstance, DataTypes) => {
  // console.log('data', data);
  // console.log('dbConnection', dbConnection);
  return dbInstance.define('Users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})
};


module.exports = Users;