import * as actionTypes from './constants';

const defaultState = {
  category: "",
  alpha: "",
  singerList: [],
  enterLoading: true,
  pullUpLoading: false,
  pullDownLoading: false,
  listOffset: 0, // 请求列表的偏移不是page，是个数
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_ALPHA:
      return {
        ...state,
        alpha: action.data,
        listOffset: 0,
        enterLoading: true
      };
    case actionTypes.CHANGE_CATOGORY:
      return {
        ...state,
        category: action.data,
        listOffset: 0,
        enterLoading: true
      };;
    case actionTypes.CHANGE_SINGER_LIST:
      return {...state, singerList: action.data};
    case actionTypes.CHANGE_LIST_OFFSET:
      return {...state,listOffset:action.data};
    case actionTypes.CHANGE_ENTER_LOADING:
      return {...state,enterLoading:action.data};
    case actionTypes.CHANGE_PULLUP_LOADING:
      return {...state,pullUpLoading:action.data};
    case actionTypes.CHANGE_PULLDOWN_LOADING:
      return {...state,pullDownLoading:action.data};
    default:
      return state;
  }
}