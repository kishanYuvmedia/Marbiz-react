import {
  create,
  find,
  upsertPatch,
  findOne,
  deleteById,
  count,
} from "./core-service"
import { getLocalData } from "../global-storage"
import { retry } from "redux-saga/effects"
import apiKit, { axiosRequest } from "./axios-base"

export const getSystemList = type => {
  return new Promise((resolve, reject) => {
    find("MtSystemLists", {
      where: { listType: type },
      order: "label asc",
    }).then(data => {
      resolve(data)
    })
  })
}
export const createPublicList = data => {
  return create("MtPublicLists", data)
}
export const getPublicList = type => {
  return new Promise((resolve, reject) => {
    find("MtPublicLists", {
      where: { listType: type },
      order: "label asc",
    }).then(data => {
      resolve(data)
    })
  })
}
