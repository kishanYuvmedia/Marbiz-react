import apiKit from "./axios-base";
import { getLocalData, removeLocalData, storeLocalData } from '../global-storage'

const login = (username, password) => {
  return new Promise((resolve, reject) => {
    apiKit
      .post("/MtUsers/login?include=user", { username, password })
      .then(function (response) {
        storeLocalData("accessToken", response.data.id);
        storeLocalData("userId", response.data.userId);
        storeLocalData("authUser", JSON.stringify(response.data.user));
        resolve(response.data.id);

      })
      .catch(function (error) {
        console.error(`Error:${error}`)
        reject(error);
      });
  })
}
const signup = (contactName, contactNumber, password, email, username, isTermsAgreed, userType) => {
  const data = { contactName, contactNumber, password, email, username, isTermsAgreed, userType };
  //console.log(data)
  return new Promise((resolve, reject) => {
    apiKit.post("/MtUsers", data)
      .then(function (response) {
        resolve(response.data);
        this.props.history.push("/login");
      })
      .catch(function (error) {
        console.error(`Error:${JSON.stringify(error)}`)
        reject(error);
      });
  })
}
const logout = () => {

  return new Promise((resolve, reject) => {
    apiKit
      .post("/MtUsers/logout?access_token="+getLocalData('accessToken'))
      .then(function (response) {
        console.log("logout");
        removeLocalData("accessToken");
        removeLocalData("authUser");
        removeLocalData("userId");
        removeLocalData("auth_token");
        resolve(response)
      })
      .catch(function (error) {
        console.error(`Error:${error}`)
        reject(error);
      });
  })

}
export const authenticationService = {
  login,
  signup,
  logout
};