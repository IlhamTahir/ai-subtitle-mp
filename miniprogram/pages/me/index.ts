// pages/me/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
        this.getTabBar().switchPage('me')
    }
  }
})