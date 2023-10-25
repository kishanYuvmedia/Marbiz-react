import { create, find, upsertPatch, findOne, count,deleteById } from "./core-service";
import { storeLocalData,getLocalData,removeLocalData } from "../global-storage";
import apiKit from "./axios-base";

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

export const getInfluencersList = (limit, type) => {
  return new Promise((resolve, reject) => {
    find("MtProfiles", {
      limit: limit,
      where: { categoryType: type, status: "A" },
      order: "fullName asc",
    }).then((data) => {
      resolve(data);
    });
  });
};

export const getInfluencersFeturedList = (limit, type) => {
  return new Promise((resolve, reject) => {
    find("MtProfiles", {
      limit: limit,
      where: { categoryType: type, Fetured: "A" },
      order: "fullName asc",
    }).then((data) => {
      resolve(data);
    });
  });
};
export const getInfluencersFetured = (limit) => {
  return new Promise((resolve, reject) => {
    find("MtProfiles", {
      limit: limit,
      where: { Fetured: "A" },
      order: "fullName asc",
    }).then((data) => {
      resolve(data);
    });
  });
};
export const getInfluencersAll = (platform, category1) => {
  let filter = {
    where: {},
    order: "id desc",
  };
  if (platform != null && category1.length > 0) {
    filter.where.and = [
      { category: { inq: category1 } },
      { status: "A" },
      { categoryType: platform },
    ];
  } else if (platform != null) {
    filter.where.and = platform
      ? [{ status: "A" }, { categoryType: platform }]
      : [{ status: "A" }];
  }
  return find("MtProfiles", filter);
};
export const createProfileListing = (data) => {
  return create("MtProfiles", data);
};

export const createMtUsers = (data) => {
  return create("MtUsers", data);
};
export const createEnquiry = (data) => {
  return create("Enquiries", data);
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
// async-await method
export const getPublicList = async (type) => {
  try {
    const data = await find("MtPublicLists", {
      where: { listType: type },
      order: "label asc",
    });
    return data;
  } catch (error) {
    throw error;
  }
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
  return findOne("MtProfiles", {
    where: { status: "A", and: [{ regName: name }] },
  });
};
export const getInfluencersProfilebyId = (userId) => {
  return findOne("MtProfiles", {
    where:{mtUserId:userId},
  });
};
export const getImagesList = (id) => {
  return find(`MtProfiles/${id}/Images`, {
    where: { status: "A" },
  });
};
export const loginUser = (username, password) => {
  return new Promise((resolve, reject) => {
    apiKit
      .post("/MtUsers/login?include=user", { username, password })
      .then(function (response) {
        console.log(response);
        storeLocalData("accessToken", response.data.id);
        storeLocalData("userId", response.data.userId);
        storeLocalData("authUser", JSON.stringify(response.data.user));
        resolve(response.data.id);
      })
      .catch(function (error) {
        console.error(`Error:${error}`);
        reject(error);
      });
  });
};
export const loginOut = () => {
  return new Promise((resolve, reject) => {
    apiKit
    .post("/MtUsers/logout?access_token=" + getLocalData("accessToken"))
    .then(function (response) {
      console.log("logout");
      removeLocalData("accessToken");
      removeLocalData("authUser");
      removeLocalData("userId");
      removeLocalData("auth_token");
      resolve(response);
    })
    .catch(function (error) {
      console.error(`Error:${error}`);
      reject(error);
    });
  });
};

export const getProfile = profileid => {
  return new Promise((resolve, reject) => {
    findOne("MtProfiles", {
      where: { id: profileid },
    }).then(data => {
      resolve(data)
    })
  })
}
export const UpdateProfile = data => {
  return upsertPatch("MtProfiles", data)
}
export const UpdateMtUser = data => {
  return upsertPatch("MtUsers", data)
}
export const getUserBooking= async (id)=>{
  try {
    const data = await find("Enquiries", {
      where: { email: id },
      order: "createdAt asc",
    });
    return data;
  } catch (error) {
    throw error;
  }
}
export const deleteEnquiry = id => {
  return deleteById("Enquiries", id)
}
