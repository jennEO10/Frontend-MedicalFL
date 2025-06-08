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
  newUser: async (data) => {
    try {
      const response = await userApi.createUser(data);
      console.log("User created:", response);
      return response;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },
  updateUser: async (id, data) => {
    try {
      const response = await userApi.updateUser(id, data);
      console.log("User updated:", response);
      return response;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  },
  deleteUser: async (id) => {
    try {
      const response = await userApi.deleteUser(id);
      console.log("User deleted:", response);
      return response;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  },
};

export default userService;