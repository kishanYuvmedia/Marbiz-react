import { create, find, upsertPatch, findOne,deleteById,count } from './core-service'
import { getLocalData} from '../global-storage'
export const getSystemList = (type) => {
    return new Promise((resolve, reject) => {
        find('MtSystemLists', { "where": { "listType": type }, order: "label asc" })
            .then(data => {
                // storeCachedData(`${type}List`, data)
                resolve(data);
            })
    })
}
export const createProfileListing = (data) => {
    return create('MtProfiles', data)
}
export const createMtUsers = (data) => {
    return create('MtUsers', data)
}
export const findRegisterProfile = (email) => {
    const filter = { where: {}, order: "id desc" };
    if (email) {
        filter.where.and= [{ email:email }];
    }
    return find('MtProfiles', filter)
}
export const getPublicList = (type) => {
    return new Promise((resolve, reject) => {
        find('MtPublicLists', { "where": { "listType": type }, order: "label asc" })
            .then(data => {
                // storeCachedData(`${type}List`, data)
                resolve(data);
            })
    })
}
