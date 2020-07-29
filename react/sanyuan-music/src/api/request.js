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

// 前后端合作要素
// 1. 接口地址
// url /top/artists 请求 RESTFUL 资源的暴露
// 2. 传参
// 按照后端要求传参
// 3. 接口文档 ？？
// 后端提供， 前端根据接口文档传参

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

export const getHotKeyWordsRequest = () => {
  return axiosInstance.get(`/search/hot`);
};