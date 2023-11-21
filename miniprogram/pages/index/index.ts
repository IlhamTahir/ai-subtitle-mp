Page({
  data: {},
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
        this.getTabBar().switchPage('home')
    }
  }
})
