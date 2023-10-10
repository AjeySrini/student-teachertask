import { profilesUrl } from "./Config";


export const createTeacherprofile = async (profileData) => {
  const response = await fetch(
    `${profilesUrl}/teacher`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profileData)
    }
  );
  const profile = await response.json();
  return profile;
}

export const getTeacherprofiles = async () => {
  const response = await fetch(
    `${profilesUrl}/teacher`
  );
  const profiles = await response.json();
  return profiles;
}

export const getTeacherprofile = async (profileId) => {
  const response = await fetch(
    `${profilesUrl}/teacher/${profileId}`
  );
  const profile = await response.json();
  return profile;
}

export const deleteTeacherprofile = async (profileId) => {
  const response = await fetch(
    `${profilesUrl}/teacher/${profileId}`,
    {
      method: 'DELETE'
    }
  );
  const profile = await response.json();
  return profile;
}

export const updateTeacherProfile = async (profileId, profileData) => {
  const response = await fetch(
    `${profilesUrl}/teacher/${profileId}`,
    {
      method: 'PUT',
      body: JSON.stringify(profileData),
      headers: { 'Content-Type': 'application/json' }
    }
  );
  const profile = await response.json();
  return profile;
}

export const getstudentprofiles = async () => {
  const response = await fetch(
    `${profilesUrl}/Student`
  );
  const profiles = await response.json();
  return profiles;
}

export const getStudentprofile = async (profileId) => {
  const response = await fetch(
    `${profilesUrl}/Student/${profileId}`
  );
  const profile = await response.json();
  return profile;
}

export const deleteStudentprofile = async (profileId) => {
  const response = await fetch(
    `${profilesUrl}/Student/${profileId}`,
    {
      method: 'DELETE'
    }
  );
  const profile = await response.json();
  return profile;
}

export const createStudentprofile = async (profileData) => {
  const response = await fetch(
    `${profilesUrl}/Student`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profileData)
    }
  );
  const profile = await response.json();
  return profile;
}


export const updateStudentProfile = async (profileId, profileData) => {
  const response = await fetch(
    `${profilesUrl}/Student/${profileId}`,
    {
      method: 'PUT',
      body: JSON.stringify(profileData),
      headers: { 'Content-Type': 'application/json' }
    }
  );
  const profile = await response.json();
  return profile;
}