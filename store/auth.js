export const state = () => ({ userData: {}, isLoggedIn: false });

export const mutations = {
  setUserID(state, payload) {
    state.userData.id = payload;
  },
  setUserData(state, payload) {
    state.userData = payload;
    state.isLoggedIn = true;
    localStorage.setItem("userInfo", JSON.stringify(payload));
    localStorage.setItem("accessToken", payload.jwt);
  },
  checkLogedIn(state) {
    if (localStorage.getItem("accessToken")) {
      state.isLoggedIn = true;
    } else {
      state.isLoggedIn = false;
    }
    if (localStorage.getItem("userInfo")) {
      state.userData = JSON.parse(localStorage.getItem("userInfo"));
    }
  },

  // clar storage when logged out //
  logout(state) {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("accessToken");
    localStorage.clear();
    state.isLoggedIn = false;
  }
};
