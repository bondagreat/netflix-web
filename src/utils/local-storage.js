const ACCESS_TOKEN = 'ACCESS_TOKEN';

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const setAccessToken = (accessToken) =>
  localStorage.setItem(ACCESS_TOKEN, accessToken);
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);

const PROFILE_ID = 'PROFILE_ID';

export const getProfileId = () => localStorage.getItem(PROFILE_ID);
export const setProfileId = (profileId) =>
  localStorage.setItem(PROFILE_ID, profileId);
export const removeProfileId = () => localStorage.removeItem(PROFILE_ID);
