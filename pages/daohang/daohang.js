var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop:0,
    isChecked:true,
    isSpread:true,
    img: "/images/o.png",
    didian:[{
      imageo:"http://r.photo.store.qq.com/psb?/V12jCv3P1JX1Bf/TgN65VOIrZFPboBwsqs1eOmr2I0f3z8.AhH7qkBwc.g!/r/dAgBAAAAAAAA",
      wenzi:"贵州大学东门",
      id:"北校区大门",
      image: "/images/r.png"
    },
    {
      imageo: "http://r.photo.store.qq.com/psb?/V12jCv3P1JX1Bf/218pQdzPcxoTSTVLaIPWGB5P7D2nxlLJ2wx1bWfkATw!/r/dDIBAAAAAAAA",
      wenzi: "综合楼",
      id:"综合楼",
      image: "/images/r.png"
      
    },
    {
      imageo: "http://r.photo.store.qq.com/psb?/V12jCv3P1JX1Bf/7xUOPzX*u3SoL4H8ZcHN22jMs.l8yCs3VMAnwGltmfw!/r/dAgBAAAAAAAA",
      wenzi: "教一",
      id:"教一",
      image: "/images/r.png"
    },
    {
      imageo: "http://r.photo.store.qq.com/psb?/V12jCv3P1JX1Bf/LIaOTwLBd3ZShC2FHu2i8BoF1RQY7pY2trN6DQzh8X4!/r/dDIBAAAAAAAA",
      wenzi: "教二",
      id:"教二",
      image: "/images/r.png"
    },
    {
      imageo: "http://r.photo.store.qq.com/psb?/V12jCv3P1JX1Bf/AMseFqe47O4G00RRZsLOWuWFFUmt1.rNxzcwFf02Y14!/r/dFYBAAAAAAAA",
      wenzi: "实验楼",
      id:"实验楼",
      image: "/images/r.png"
    },
    {
      imageo: "http://r.photo.store.qq.com/psb?/V12jCv3P1JX1Bf/*MmDHS.ZGPxR*yF5uMX6nXMr2pLgydeDok1rfV*Vq1Y!/r/dPIAAAAAAAAA",
      wenzi: "教三",
      id: "教三",
      image: "/images/r.png"
    
    },
    {
      imageo: "http://r.photo.store.qq.com/psb?/V12jCv3P1JX1Bf/gRzTwogyf5cVwvmHY0khcH*K0dQHJ3TA2oDJPz03ZXU!/r/dDEBAAAAAAAA",
      wenzi: "地球科学博物馆",
      id: "地球科学博物馆",
      image: "/images/r.png"
    },
    {
      imageo: "http://r.photo.store.qq.com/psb?/V12jCv3P1JX1Bf/.ME.OeS3NPpMsSboTfJ7f5*L70mRHqmimwOnlwTARFQ!/r/dAgBAAAAAAAA",
      wenzi: "春秋讲堂",
      id: "春秋讲堂",
      image: "/images/r.png"
    },
    {
      imageo: "http://r.photo.store.qq.com/psb?/V12jCv3P1JX1Bf/fb3f5DNwI829DzhMBruIm0LwM6yeXxghOVV9GCn7Hzk!/r/dGEBAAAAAAAA",
      wenzi: "钱圆金融博物馆",
      id: "钱圆金融博物馆",
      image: "/images/r.png"
    },
    {
      imageo: "http://r.photo.store.qq.com/psb?/V12jCv3P1JX1Bf/fUZImZOACwmzkF6b0m54oqDdEk9DK3nOVg27PPQ8itk!/r/dAQBAAAAAAAA",
      wenzi: "学生餐厅",
      id: "学生餐厅",
      image: "/images/r.png"
    },
    {
      imageo: "http://r.photo.store.qq.com/psb?/V12jCv3P1JX1Bf/LPdzWZ1MG3RkWb7GN4g8XGRMmU2EMinGaEp5vhFHVTo!/r/dEQBAAAAAAAA",
      wenzi: "图书馆",
      id: "图书馆",
      image: "/images/r.png"
    },
    {
      imageo: "http://r.photo.store.qq.com/psb?/V12jCv3P1JX1Bf/iNZoWqdlGmVpntJoRe0FuEAWKhk5vYqMewH4qx3JzRk!/r/dHIAAAAAAAAA",
      wenzi: "北门",
      id: "北门",
      image: "/images/r.png"
    },
    {
      imageo: "http://r.photo.store.qq.com/psb?/V12jCv3P1JX1Bf/bDqF6hhyTapx4DijyKKSGquLzjkLjml1INdns1DAtuE!/r/dEQBAAAAAAAA",
      wenzi: "西门",
      id: "西门",
      image: "/images/r.png"
    },
    {
      imageo: "http://r.photo.store.qq.com/psb?/V12jCv3P1JX1Bf/TlO.LPQO5RTbG4KPmBJxV36diiTQ6V221Cd1O1tXJj4!/r/dJEAAAAAAAAA",
      wenzi: "惠馨苑",
      id: "惠馨苑",
      image:"/images/r.png"
    }
    ],
    markers:[
    {
      iconPath: "/images/n.png",
      id: 0,
      latitude: 26.443111,
      longitude:  106.676267,
      
    },
    {
      iconPath: "/images/n.png",
      id: 1,
      latitude: 38.0217800000,
      longitude: 114.5476100000,
      
    },
    {
      iconPath: "/images/n.png",
      id: 2,
      latitude: 38.0201200000,
      longitude: 114.5474800000,
      
    },
    {
      iconPath: "/images/n.png",
      id: 3,
      latitude: 38.0201100000,
      longitude: 114.5488100000,
      
    },
    {
      iconPath: "/images/n.png",
      id: 4,
      latitude: 38.0188800000,
      longitude: 114.5518800000,
      
    },
    {
        iconPath: "/images/n.png",
        id: 5,
        latitude: 38.0194000000,
        longitude: 114.5487300000,
        
    },
     {
        iconPath: "/images/n.png",
        id: 6,
        latitude: 38.0191900000,
        longitude: 114.5483800000,
        
    },
    {
        iconPath: "/images/n.png",
        id: 7,
        latitude: 38.0188500000,
        longitude: 114.5479500000,
       
    },
    {
        iconPath: "/images/n.png",
        id: 8,
        latitude: 38.0192900000,
        longitude: 114.5480700000,
        
    },
    {
        iconPath: "/images/n.png",
        id: 9,
        latitude: 38.0215800000,
        longitude: 114.5490400000,
        
    },
    {
        iconPath: "/images/n.png",
        id: 10,
        latitude: 38.0193800000,
        longitude: 114.5475000000,
        
    },
    {
        iconPath: "/images/n.png",
        id: 11,
        latitude: 38.0220700000,
        longitude: 114.5491600000,
        
    },
    {
        iconPath: "/images/n.png",
        id: 12,
        // title:'西门',
        latitude: 38.0197600000,
        longitude: 114.5469300000,
        

    },
    {
        iconPath: "/images/n.png",
        id:13,
        // title: "惠馨苑",
        latitude: 38.019021,
        longitude: 114.551917,
        
    }]
    // ifShow:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  },
  change:function(e){
    var that = this;
    that.setData({ isChecked: !that.data.isChecked});
    if(that.data.isSpread === true){
      that.setData({
        isSpread:false
      })
    }
    else{
      that.setData({isSpread:true})
    }
    if(that.data.img=="/images/l.png"){
      that.setData({img:"/images/o.png"})

    }
    else{
      that.setData({ img: "/images/l.png"})

    }
    
  },
  markertap(e){
    console.log(e)
    var that=this;
    var markerId = e.markerId;
    
    var didian = that.data.didian;
    for (var i = 0; i < didian.length;i++){
      if(didian[i].display){
        didian[i].display=false;
      }
    }
    that.setData({didian:didian})
    var data ={};
    data['didian['+markerId+'].display']=true;
    that.setData(data);
    // 当点击相应的marker时下面相应的元素就会显示出来
    that.setData({scrollTop:markerId*56})
    
    // 改变marker的颜色
    var id = e.markerId,
    data = that.data.markers;
    //用于存储处理过的数据
    let markers = [];
    data.forEach(m=>{
      //如果当前id为当前点击的标记的id那么显示高亮的图片
        markers.push({
          iconPath:m.id == id?"/images/m.png":"/images/n.png",
          id:m.id,
          latitude:m.latitude,
          longitude:m.longitude
        })
    });
    that.setData({
      markers:markers
    })
  },
  tiaozhuan:function(e){
    console.log(e)
    var that = this;
    var index = e.currentTarget.dataset.index;
    wx.openLocation({
      latitude: that.data.markers[index].latitude,
      longitude: that.data.markers[index].longitude,
      name: that.data.didian[index].id
    })
  }
  

})