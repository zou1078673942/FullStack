import { axiosInstance, categoryTypes } from './config';

export const getRecommendListRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data:[{
          id: 1,
          title: 'aaaaaa'
        }]
      })
    }, 1000)
  })
}

// 项目所有请求API的列表文件 
// 每个请求一个函数
// 每个函数都是返回一个promise 

// api 与actions的分离点
// axiosInstance.get   返回是Promise 

//首页广告 
export const getBannersRequest = () => {
  return axiosInstance.get("/banner");
}

// 歌手列表
export const getSingerListRequest = (category,alpha,count) => {
  return axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
  )
}

export const getHotSingerListRequest = count => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};


export const getSingerInfoRequest = id => {
  return axiosInstance.get(`/artists?id=${id}`);
};