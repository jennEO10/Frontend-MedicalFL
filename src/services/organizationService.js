import { getOrganizations, createOrganization, updateOrganization, deleteOrganization } from '../api/organizationsApi';

const organizationService = {
  fetchAll: async () => {
    try {
      const organizations = await getOrganizations();
      console.log("Fetched organizations:", organizations);
      return organizations;
    } catch (error) {
      console.error("Error fetching organizations:", error);
      throw error;
    }
  },
  saveOrganization: async (data) => {
    try {
      const response = await createOrganization(data);
      console.log("Organization created:", response);
      return response;
    } catch (error) {
      console.error("Error creating organization:", error);
      throw error;
    }
  },
  updateOrganization,
  deleteOrganization,
};

export default organizationService;