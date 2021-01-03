const userModel = (options = {}) => {
    return {
        getUsers: () => {},
        findUserById: () => {},
        limit: options.limit || 10
    }
}

const user = userModel();

console.log(user.limit); // 10

const adminModel = (userModel) => {
    userModel.limit += 20
    userModel.removeUser = () => {}
    userModel.addUser = () => {}

    return userModel;
}

console.log(adminModel(user));

/**
 *  {
      getUsers: [Function: getUsers],
      findUserById: [Function: findUserById],
      limit: 30,
      removeUser: [Function (anonymous)],
      addUser: [Function (anonymous)]
    }
 */
