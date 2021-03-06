// pages/mine/cardDetails/cardDetails.js
var app=getApp();
Page({
  data: {
    mycardid:'',
    array:["已婚","未婚"],
    cardDetail:'',
    cardInfo: {},
    companyInfo:{},
    bgList:[],
    from:'',
    iconList:{
      photo:"../../../assets/images/icon/icon-phone-gray.png",
      email:"../../../assets/images/icon/icon-email-gray.png",
      position:"../../../assets/images/icon/icon-map.png",
      photoWhite:"../../../assets/images/icon/icon-phone.png",
      emailWhite:"../../../assets/images/icon/icon-email.png",
      addressWhite:"../../../assets/images/icon/icon-address.png",
      authentication:"../../../assets/images/icon/icon-authentication-yellow.png",
      editbluetag:'../../../assets/images/icon/mycard-tagbg.png',
      mapSmall:'../../../assets/images/icon/map-small.png',
      warning:'../../../assets/images/icon/icon-warning.png',
        bluetag:'../../../assets/images/icon/icon-tag.png',
        share:'../../../assets/images/icon/icon-share.png',

    },
    // 默认头像
    userAvatar:'../../../assets/images/icon/photobg.png',
    showcompanyInfo:false,
    pageFrom:'cardDetails',
    // 是否已收藏
    colStatus:0,
    // 是否是我的名片
    isMine:0,
      isshare:true,
      isedit:true,
      companyCardInfo:{}
  },
    // 去编辑公司页面
    goEditCompany:function (event) {
        var companyId = event.currentTarget.dataset.id;
        var canChangeTemp = event.currentTarget.dataset.can;
        var isuthentication = event.currentTarget.dataset.isuthentication;


        console.log('点击的公司的id是')
        console.log(companyId)
        console.log(this.data.clickIndex)
        console.log('点击的公司的id是')

        wx.setStorage({
            key:'companyDesInfoKey',
            data:this.data.clickIndex
        })



        wx.navigateTo({
            url: '../editMyCompany/editMyCompany?id='+companyId+'&can='+canChangeTemp+'&isuthentication='+isuthentication
        })

    },
    // 点击了公司名片分享
    shareCompanyCard:function (e) {
        console.log(e)
        var item = e.currentTarget.dataset.item;
        console.log(item)
        wx.setStorage({
            key:"shareCompanyCardKey",
            data:item,
            success: function(res) {
                wx.navigateTo({
                    url:'../shareCompanyCard/shareCompanyCard'
                })
            },
            fail: function(res) {

            },
            complete: function(res) {

            }
        })
    },
  addPhoneContact(){
    wx.addPhoneContact({firstName:this.data.cardInfo.name,
      mobilePhoneNumber:this.data.cardInfo.mobile,
      organization:this.data.cardInfo.companyName,
      email:this.data.cardInfo.email,
    workAddressStreet:this.data.cardInfo.address,
  success:function(){
        console.log("成功");
    },
    fail:function(error){
      console.log("失败");
      console.log(error);

    }
  })
  },
  tochangebg:function () {
    console.log(this.data.avatar)
    console.log(this.data.tempAvatar)

    app.businessInfoStorage={
      name:this.data.cardInfo.name,
      bgUrl:this.data.cardInfo.bgUrl,
      cardbgId:this.data.cardInfo.bgId,
      avatar:this.data.cardInfo.avatar,
      // avatar:this.data.tempAvatar,
      position:this.data.cardInfo.position,
      isOriginal:this.data.cardInfo.isOriginal,
      position:this.data.cardInfo.position,
      companyName:this.data.cardInfo.companyName,
      mobile:this.data.cardInfo.mobile,
      email:this.data.cardInfo.email,
      address:this.data.cardInfo.address,
      isAuthentication:this.data.cardInfo.isAuthentication,
      id:this.data.cardInfo.id
    };
    wx.navigateTo({
      url: '../../mine/reviseCardBg/reviseCardBg',
      success: res => {
        console.log('businessInfoStorage')
        console.log(app.businessInfoStorage)
        console.log('businessInfoStorage')

      },
      fail: res => {

      },
      complete: res => {

      }
    })
    console.log('存储的名片详情数据')
    console.log(app.businessInfoStorage)
    console.log('存储的名片详情数据')
  },
  unbindCompany(){
    var that=this;
    wx.showModal({
    title: '提示',
    content: '您确定要解除绑定吗？解除后不可恢复。',
    success: function(res) {
      if (res.confirm) {
        wx.request({
          url: app.data.apiurl+'admin/unbundledEmployee',
          data: {cardId:that.data.mycardid,type:1},
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function(res) {
            console.log(res);
            if(res.statusCode==200){
              if(res.data.success==0){
                wx.showToast({
                  title: "解除成功",
                  icon: 'success',
                  duration: 2000
                });
                wx.navigateBack({
                  delta: 1
                });
              }else{
                wx.showToast({
                  title: res.data.message,
                  image:'../../../assets/images/icon/error-fff.png',
                  duration: 2000
                })
              }
            }else{
              wx.showToast({
                title: '加载失败',
                image:'../../../assets/images/icon/error-fff.png',
                duration: 2000
              })
            }
          },
          fail(){
            wx.showToast({
              title: '加载失败',
              image:'../../../assets/images/icon/error-fff.png',
              duration: 2000
            })
          }
        })
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
  },
  toeditCard(){
    wx.navigateTo({
      url: '../../homePage/businessInfo/businessInfo?mycardid='+this.data.mycardid+'&edit=edit',
      success: res => {
      },
      fail: res => {
      },
      complete: res => {
      }
    })
  },
  deletecard(){
    var that=this;
      wx.showModal({
      title: '警告',
      content: '删除后不可恢复!',
      success: function(res) {
        if (res.confirm) {
             wx.request({
              url: app.data.apiurl+'applets/deleteCard',
              data: {cardId:that.data.mycardid},
              header: {
                  'content-type': 'application/json' // 默认值
              },
              success: function(res) {
                console.log(res);
                if(res.statusCode==200){
                  if(res.data.success==0){
                    wx.showToast({
                      title: '删除成功',
                      image:'../../../assets/images/icon/error-fff.png',
                      duration: 2000
                    })
                    var pages = getCurrentPages();
                    var prevPage = pages[pages.length - 2]
                    // prevPage.getdata();
                    wx.navigateBack({
                      delta: 1
                    });
                  }else{
                    wx.showToast({
                      title: res.data.message,
                      image:'../../../assets/images/icon/error-fff.png',
                      duration: 2000
                    })
                  }
                }else{
                  wx.showToast({
                    title: '删除失败',
                    image:'../../../assets/images/icon/error-fff.png',
                    duration: 2000
                    })
                 }
           },
          fail(){
            wx.showToast({
              title: '删除失败',
              image:'../../../assets/images/icon/error-fff.png',
              duration: 2000
            })
          }
        });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  getDetails(){
    var that=this;
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    wx.request({
      url: app.data.apiurl+'applets/myCardInfo',
      data: {
        cardId:that.data.mycardid,
        userId:app.globalData.userId
      },
      header: {
          'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res);
        if(res.statusCode==200){
          if(res.data.success==0){
            console.log('根据id获取到的名片详情')
            console.log(res.data.entity);
            console.log('根据id获取到的名片详情')
              that.setData({
                cardInfo:res.data.entity.cardInfo,
                cardDetail:res.data.entity.cardDetail,
                companyInfo:res.data.entity.companyInfo,
                  companyCardInfo:res.data.entity.companyInfo,
                colStatus:res.data.entity.colStatus,
                isMine:res.data.entity.isMine
              });


              if((that.data.cardInfo.avatar==''||!that.data.cardInfo.avatar)&&app.globalData.userInfo.avatarUrl&&that.data.from =='true'){
                that.data.cardInfo.avatar=app.globalData.userInfo.avatarUrl
                that.setData({cardInfo:that.data.cardInfo});
              }
              if(res.data.entity.companyInfo&&that.data.companyInfo.name){
                that.data.companyInfo.textlogo=that.data.companyInfo.name.substring(0,2);
                that.data.companyInfo.fontsize='font34';
                if(that.data.companyInfo.name.length>30){
                  that.data.companyInfo.fontsize='font'+Math.floor(544*2/(that.data.companyInfo.name.length+1));
                }
                that.setData({
                  companyInfo:that.data.companyInfo,
                  showcompanyInfo:true
                });
              }else{
                that.setData({showcompanyInfo:false})
                console.log(that.data.showcompanyInfo);
                console.log(11111111111111111111);
                console.log(that.data.form =='true');
                console.log(that.data.form =='true'&&!that.data.showcompanyInfo);
              }

          }else{
            wx.showToast({
              title: res.data.message,
              image:'../../../assets/images/icon/error-fff.png',
              duration: 2000
            })
          }
        }else{
          wx.showToast({
            title: '加载失败',
            image:'../../../assets/images/icon/error-fff.png',
            duration: 2000
          })
        }
      },
      fail(){
        wx.showToast({
          title: '加载失败',
          image:'../../../assets/images/icon/error-fff.png',
          duration: 2000
        })
      },
      complete(){
        wx.hideLoading({
          title: '加载中'
        })
      }
    });
  },
  // 收藏到名片夹或者取消收藏
  collectionInPackage:function () {
    if(!app.globalData.userId||app.globalData.userId==-1){
      wx.navigateTo({
        url: "../../logIn/phone/phone"
      });
    }else{
      var that=this;
      var userId = app.globalData.userId;
      wx.showLoading({
        title: '加载中',
        mask:true
      })
      wx.request({
        url: app.data.apiurl+'applets/addCollection',
        data: {
          user_id:userId,
          object_id:that.data.cardInfo.id,
          // 名片
          type:'0',
          // 0是添加到收藏
          colStatus:that.data.colStatus
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          console.log(res);
          if(res.statusCode==200){
            if(res.data.success==0){

              console.log('收藏情况是')
              console.log(res)
              console.log('收藏情况是')

              var title = ''
              if(that.data.colStatus == '0'){
                  title="已收藏"
              }else{
                title="已取消"
              }

              wx.showToast({
                title:title,
                mask:true,
                duration:1000
              })
              setTimeout(function () {
                that.getDetails()
              },1000)
            }else{
              wx.showToast({
                title: res.data.message,
                image:'../../../assets/images/icon/error-fff.png',
                duration: 2000
              })
            }
          }else{
            wx.showToast({
              title: '加载失败',
              image:'../../../assets/images/icon/error-fff.png',
              duration: 2000
            })
          }
        },
        fail(){
          wx.showToast({
            title: '加载失败',
            image:'../../../assets/images/icon/error-fff.png',
            duration: 2000
          })
        }
      });
    }
  },
  // 打电话
  makeCall:function (e) {
    app.makeCall(e)
  },
  // 去地图页面
  goAddressDes:function (e) {
    var address = e.currentTarget.dataset.address;
    console.log(e)
    console.log(address)
    wx.navigateTo({
      url:'../companyAddressMaps/companyAddressMaps?address='+address
    })
  },
  toaddressMaps(e){
     var address = e.currentTarget.dataset.address;
    console.log(e)
    console.log(address)
    wx.navigateTo({
      url:'../companyAddressMaps/companyAddressMaps?address='+address
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('cardDetails---optinos')
    console.log(options)
    console.log('cardDetails---optinos')


    this.setData({
      mycardid:options.mycardid,
      from:options.from
    });

    console.log(this.data.mycardid);
    // this.getDetails()
  },
  // 举报名片
  reportCardClick:function () {
    wx.navigateTo({
      url:'../reportCards/reportCards?beReporterId='+this.data.mycardid
    })
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
    if(!this.data.cardInfo.avatar&&app.globalData.userInfo.avatarUrl&&this.data.from =='true'){
      this.data.cardInfo.avatar=app.globalData.userInfo.avatarUrl
      this.setData({cardInfo:this.data.cardInfo});
    }

     // 新加， 刷新一下更换的北京
   this.getDetails()

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
    var cardid = this.data.mycardid;
     return {
        title: '分享给您的名片,请惠存',
        path: "pages/mine/cardDetails/cardDetails?from="+'share'+'&mycardid='+cardid
      }
  }
})
