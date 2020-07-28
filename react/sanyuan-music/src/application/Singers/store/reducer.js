import * as actionTypes from './constants'

const defaultState = {
  category: "",
  alpha: "",
  singerList: [],
  enterLoading: true,
  pullUpLoading: false,
  pullDownLoading: false,
  listOffset: 0
}

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}