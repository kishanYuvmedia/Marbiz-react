import {
  create,
  find,
  upsertPatch,
  findOne,
  deleteById,
  count,
} from "./core-service";
import { getLocalData } from "../global-storage";
import { retry } from "redux-saga/effects";
import apiKit, { axiosRequest } from "./axios-base";
export const getSystemList = (type) => {
  return new Promise((resolve, reject) => {
    find("MtSystemLists", {
      where: { listType: type },
      order: "label asc",
    }).then((data) => {
      // storeCachedData(`${type}List`, data)
      resolve(data);
    });
  });
};
export const getInfluencersList = (limit) => {
  return new Promise((resolve, reject) => {
    find("MtProfiles", { limit: limit, order: "fullName asc" }).then((data) => {
      resolve(data);
    });
  });
};
export const createProfileListing = (data) => {
  return create("MtProfiles", data);
};
export const createMtUsers = (data) => {
  return create("MtUsers", data);
};
export const createProfile = (data) => {
  return create("MtProfiles", data);
};
export const findRegisterProfile = (emailaddress) => {
  return find("MtUsers", {
    where: { status: "I", and: [{ email: emailaddress }] },
  });
};
export const checkPublicName = (name) => {
  return count("MtProfiles", null, { regName: name });
};
export const getPublicList = (type) => {
  return new Promise((resolve, reject) => {
    find("MtPublicLists", {
      where: { listType: type },
      order: "label asc",
    }).then((data) => {
      // storeCachedData(`${type}List`, data)
      resolve(data);
    });
  });
};
export const updateProfile = (data) => {
  return upsertPatch("MtProfiles", data);
};
export const uploadFile = (fileData, bucketName, folder = "") => {
  const formData = new FormData();
  const today = new Date();
  const datestring =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  formData.append("myFile", fileData, folder + datestring + fileData.name);
  return apiKit.post(`https://portfolio.yuvmedia.in/api/upload.php`, formData);
};
export const getInfluencersProfile = (name) => {
  return find("MtProfiles", {
    where: { status: "I", and: [{ regName: name }] },
  });
};
