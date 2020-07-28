import {
  getHotSingerListRequest
} from "../../../api/request";

import {
  CHANGE_CATOGORY,
  CHANGE_ALPHA,
  CHANGE_SINGER_LIST,
  CHANGE_LIST_OFFSET,
} from './constants';
export const changeCategory = (data) => ({
  type: CHANGE_CATOGORY,
  data
});

export const changeAlpha = (data) => ({
  type: CHANGE_ALPHA,
  data
});

const changeSingerList = (data) => ({
  type: CHANGE_SINGER_LIST,
  data: data
});

export const changeListOffset = (data) => ({
  type: CHANGE_LIST_OFFSET,
  data
});

export const getHotSingerList = () => {
  return (dispatch) => {
    getHotSingerListRequest(0).then(res => {
      // console.log(res, '---------------');
      if (res.status == 200) {
        const data = res.data.artists;
        // console.log(data);
        dispatch(changeSingerList(data)); 
        dispatch(changeListOffset(data.length));
      }
      
      // // console.log(data);
    })
    // .catch(() => {
    //   console.log('热门歌手数据获取失败');
    // })
  }
};

export const refreshMoreHotSingerList = () => {
  return (dispatch, getState) => {
    const offset = getState().singers.listOffset;
    const singerList = getState().singers.singerList;
    getHotSingerListRequest(offset)
    .then(res => {
      const data = [...singerList, ...res.data.artists];
      dispatch(changeSingerList(data));
      dispatch(changeListOffset(data.length));
    })
  }
}