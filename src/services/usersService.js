import * as userApi from '../api/usersApi';

const userService = {
  getAllUsers: async () => {
    try {
      const users = await userApi.getUsers();
      console.log("Fetched users:", users);
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  },
};

export default userService;