//引入mockjs
const Mock = require('mockjs');

// 首页楼层
Mock.mock('/api/homedata' ,(req, res) => {
  return {
    data: [
      {
        "Category": {
          "Id": "1",
          "TopText": "休闲零食",
          "TopNum": "one"
        },
        "SalesProduct": [
          {
            "CategoryId": "1",
            "GoodsName": "坚果夹心海苔",
            "GoodsPrice": 9,
            "GoodsNum": 1,
            "GoodsImage": "./static/img/goods/home_floor_one_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "卤汁牛肉",
            "GoodsPrice": 32,
            "GoodsNum": 1,
            "GoodsImage": "./static/img/goods/home_floor_one_2.jpg"
          }
        ]
      },

      {
        "Category": {
          "Id": "2",
          "TopText": "糖果·巧克力",
          "TopNum": "two"
        },
        "SalesProduct": [
          {
            "CategoryId": "1",
            "GoodsName": "乐奈牛奶燕麦巧克力 ",
            "GoodsPrice": 78,
            "GoodsNum": 1,
            "GoodsImage": "./static/img/goods/home_floor_two_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "牛轧糖",
            "GoodsPrice": 59,
            "GoodsNum": 1,
            "GoodsImage": "./static/img/goods/home_floor_two_2.jpg"
          }
        ]
      },
      {
        "Category": {
          "Id": "3",
          "TopText": "饼干·糕点",
          "TopNum": "three"
        },
        "SalesProduct": [
          {
            "CategoryId": "1",
            "GoodsName": "苏打饼干 ",
            "GoodsPrice": 61,
            "GoodsNum": 1,
            "GoodsImage": "./static/img/goods/home_floor_three_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "可可威化饼干",
            "GoodsPrice": "22",
            "GoodsNum": 1,
            "GoodsImage": "./static/img/goods/home_floor_three_2.jpg"
          }
        ]
      },
      {
        "Category": {
          "Id": "4",
          "TopText": "果冻·布丁",
          "TopNum": "four"
        },
        "SalesProduct": [
          {
            "CategoryId": "1",
            "GoodsName": "粒粒鲜果冻 ",
            "GoodsPrice": 59,
            "GoodsNum": 1,
            "GoodsImage": "./static/img/goods/home_floor_four_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "葡萄果汁软糖",
            "GoodsPrice": 9,
            "GoodsNum": 1,
            "GoodsImage": "./static/img/goods/home_floor_four_2.jpg"
          }
        ]
      },
      {
        "Category": {
          "Id": "5",
          "TopText": "坚果·炒货",
          "TopNum": "five"
        },
        "SalesProduct": [
          {
            "CategoryId": "1",
            "GoodsName": "夏威夷果",
            "GoodsPrice": 189,
            "GoodsNum": 1,
            "GoodsImage": "./static/img/goods/home_floor_five_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "坚果混合",
            "GoodsPrice": 9,
            "GoodsNum": 1,
            "GoodsImage": "./static/img/goods/home_floor_five_2.jpg"
          }
        ]
      },
      {
        "Category": {
          "Id": "6",
          "TopText": "膨化·薯片",
          "TopNum": "six"
        },
        "SalesProduct": [
          {
            "CategoryId": "1",
            "GoodsName": "风味虾片 ",
            "GoodsPrice": 199,
            "GoodsNum": 1,
            "GoodsImage": "./static/img/goods/home_floor_six_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "大胡子烧烤味薯片",
            "GoodsPrice": 28,
            "GoodsNum": 1,
            "GoodsImage": "./static/img/goods/home_floor_six_2.jpg"
          }
        ]
      }
    ]
  }

})
