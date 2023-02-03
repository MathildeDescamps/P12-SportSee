import axios from "axios";

const baseURL = "http://localhost:3000";

export const GetUserInformations = (userId) =>  axios(`${baseURL}/user/${userId}`);
export const GetUserActivity = (userId) => axios(`${baseURL}/user/${userId}/activity`);
export const GetUserAverageSessions = (userId) => axios(`${baseURL}/user/${userId}/average-sessions`);
export const GetUserPerformance = (userId) => axios(`${baseURL}/user/${userId}/performance`);