import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabletSize: false,
    mobileSize: false,
    sideMenuState: (window.screen.width < 768) ? 'close' : 'open',
    lastPacketData: {},
    lastRateData: {},
    dateList: {},
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
    changeSideMenuState: (state, menuState) => state.sideMenuState = menuState,
    setLastPacket: (state, lastPacketData, dateList) => state.lastPacketData = lastPacketData,
    setDateList: (state, dateList) => state.dateList = dateList,
    setLastRate: (state, lastRateData) => state.lastRateData = lastRateData
  },
  actions:{
    triggerResponsividade: ({commit}) => commit('triggerResponsividade', window.screen.width),
    changeSideMenuState: ({commit}, menuState) => commit('changeSideMenuState', menuState),
    recoverDateList: ({commit}, dateList) => commit('setDateList', dateList),
    recoverLastPacket: ({commit}, lastPacketData) => commit('setLastPacket', lastPacketData),
    recoverLastRate: ({commit}, lastRateData) => commit('setLastRate', lastRateData),
  },
  getters:{
    returnTabletSize: state => state.tabletSize,
    returnMobileSize: state => state.mobileSize,
    returnSideMenuState: state => state.sideMenuState,
    returnLastPacket: state => state.lastPacketData,
    returnLastRate: state => state.lastRateData,
    returnDateList: state => state.dateList,
  }
})

