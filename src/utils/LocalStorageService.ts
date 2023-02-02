export const LocalStorageService = {
  getAccessToken: () => localStorage.getItem('token') || '',
  deleteAccessToken: () => localStorage.removeItem('token'),
};
