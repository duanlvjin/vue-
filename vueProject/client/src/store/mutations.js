import * as types from './types';
const mutations={
  [types.SHOW_LOADING]:(state)=>{
    state.bLoading=true;
  },
  [types.HIDE_LOADING]:(state)=>{
    state.bLoading=false;
  },
  [types.SHOW_FOOT]:(state)=>{
    state.bFoot=true;
  },
  [types.HIDE_FOOT]:(state)=>{
    state.bFoot=false;
  }
};
export default mutations;