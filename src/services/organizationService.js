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
  createOrganization,
  updateOrganization,
  deleteOrganization,
};

export default organizationService;