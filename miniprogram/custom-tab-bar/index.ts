import { TabItem } from "./types";

Component({
  data: {
    value: 'home',
    list: [
      { value: 'home', icon: 'sonic', ariaLabel: '首页', path: '/pages/index/index' },
      { value: 'me', icon: 'user', ariaLabel: '我的', path: '/pages/me/index' }
    ],
  } as {
    list: TabItem[]
  },
  lifetimes: {

  },
  methods: {
    onChange(e: WechatMiniprogram.CustomEvent<{value: string}>) {
      const value = e.detail.value

      this.switchPage(value)
    },
    switchPage(value: string) {
      const targetItem = this.data.list.find(item=>item.value === value)
      this.setData({
        value,
      });
      if(this.needToChangePage(targetItem)) {
        wx.switchTab({
          url: targetItem!.path
        })
      }
    },
    needToChangePage(item: TabItem | undefined) {
      if(item && !item.path.includes(getCurrentPages()[0].route) ) {
        return true
      }
      return false
    }
  },
});
