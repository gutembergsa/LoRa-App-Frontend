import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabletSize: false,
    mobileSize: false,
    sideMenuState: (window.screen.width < 768) ? 'close' : 'open',
  },
  mutations:{
    triggerResponsividade: (state, width) =>{
      if (width <= 768) {
        state.tabletSize = true;
      }
      else {
        state.tabletSize = false; 
      }
      if (width <= 425) {
        state.mobileSize = true;
      }
      else {
        state.mobileSize = false;
      }
    },
    changeSideMenuState: (state, menuState) => state.sideMenuState = menuState
  },
  actions:{
    triggerResponsividade: ({commit}) => commit('triggerResponsividade', window.screen.width),
    changeSideMenuState: ({commit}, menuState) => commit('changeSideMenuState', menuState),
  },
  getters:{
    returnTabletSize: state => state.tabletSize,
    returnMobileSize: state => state.mobileSize,
    returnSideMenuState: state => state.sideMenuState,
  }
})

