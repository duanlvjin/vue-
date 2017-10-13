import * as types from './types';
const actions={
  showLoading:({commit,state})=>{
    commit(types.SHOW_LOADING);
  },
  hideLoading:({commit,state})=>{
    commit(types.HIDE_LOADING);
  },
  showFoot:({commit,state})=>{
    commit(types.SHOW_FOOT);
  },
  hideFoot:({commit,state})=>{
    commit(types.HIDE_FOOT);
  }
};
export default actions;