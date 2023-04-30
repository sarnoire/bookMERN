const users = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      password: 'password1',
    },
    {
      id: '2',
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@example.com',
      password: 'password2',
    },
  ];
  
  const resolvers = {
    Query: {
      users: () => users,
      user: (parent, { id }) => users.find(user => user.id === id),
    },
    Mutation: {
      createUser: (parent, { firstName, lastName, email, password }) => {
        const user = { id: String(users.length + 1), firstName, lastName, email, password };
        users.push(user);
        return user;
      },
      updateUser: (parent, { id, firstName, lastName, email, password }) => {
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex === -1) {
          throw new Error('User not found');
        }
        const user = { ...users[userIndex], firstName, lastName, email, password };
        users[userIndex] = user;
        return user;
      },
      deleteUser: (parent, { id }) => {
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex === -1) {
          throw new Error('User not found');
        }
        const user = users[userIndex];
        users.splice(userIndex, 1);
        return user;
      },
    },
  };
  
  module.exports = resolvers;
  