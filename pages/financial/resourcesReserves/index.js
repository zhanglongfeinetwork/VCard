// pages/financial/itemIntr/index.js
//资源储备
import {programemodule} from "../../../module/programe";
const programe = new programemodule
Page({

  /**
   * 页面的初始数据
   */
  data: {
      items: [
          {
              name:'产品研发',
              tip:'请描述产品研发到了什么阶段？',
              rate:'0',
              fn:'onProductResearch'
          },
          {
              name: '知识产权',
              tip: '请描述已完成的知识产权储备？',
              rate: '0',
              fn:'onIntellectualProperty'
          },
          {
              name: '渠道布局',
              tip: '请描述已完成那些渠道布局？',
              rate: '0',
              fn:'onChannel'
          },
          {
              name: '运营资质',
              tip: '请描述已完成的运营资质办理？',
              rate: '0',
              fn:'onOperation'
          },
          {
              name: '战略合作',
              tip: '请描述已经达成那些战略合作',
              rate: '0',
              fn:'onStrategicCooperation'
          },
      ],
      pid:`-1`,//缓存pid
      logo:'',//logo
      title:'',//公司名字
      Intro:'',//公司介绍
  },
    //产品研发
    //type 10
    onProductResearch(){
      wx.navigateTo({
        url: '/pages/financial/mixture/ImageText/index?'+`pid=${this.data.pid}&&type=10&&name=产品研发`
      })
    },
    //知识产权
    //type 11
    onIntellectualProperty(){
        wx.navigateTo({
            url: '/pages/financial/mixture/ImageText/index?'+`pid=${this.data.pid}&&type=11&&name=知识产权`
        })
    },
    //渠道布局
    //type 12
    onChannel(){
        wx.navigateTo({
            url: '/pages/financial/mixture/ImageText/index?'+`pid=${this.data.pid}&&type=12&&name=渠道布局`
        })
    },
    //运营资质
    //type 13
    onOperation(){
        wx.navigateTo({
            url: '/pages/financial/mixture/ImageText/index?'+`pid=${this.data.pid}&&type=13&&name=运营资质`
        })
    },
    //战略合作
    // type 14
    onStrategicCooperation(){
        wx.navigateTo({
            url: '/pages/financial/mixture/case/index?'+`pid=${this.data.pid}&&type=14&&name=战略合作`
        })
    },
    _rander(){
        programe.getresourcesProgress(this.data.pid).then(res=>{
            // console.log(res);
            let resourceEdit = res.resourceEdit
            console.log(resourceEdit);
            // console.log(introEdit.companyLabel);
            // let Intro
            // if(introEdit.companyLabel){
            //      Intro = introEdit.companyLabel.join(',')
            // }
            let items= this.data.items
            items[0].rate = resourceEdit.developProgress||'0'
            items[1].rate = resourceEdit.propertyRightsProgress||'0'
            items[2].rate = resourceEdit.channelLayoutProgress||'0'
            items[3].rate = resourceEdit.qualificationProgress||'0'
            items[4].rate = resourceEdit.cooperationProgress||'0'
            this.setData({
                items,
            })
        })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options)
        //保存pid跳转传参
      this.setData({
          pid:options.pid
      })
        this._rander()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
        this._rander();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
