define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/address",
    "title": "新增收货地址",
    "group": "Address",
    "name": "createAddress",
    "description": "<p>新增收货地址</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/address"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>收货人电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>省</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>市</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>区</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street",
            "description": "<p>街道</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>邮编</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "isDefault",
            "description": "<p>是否默认</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式",
          "content": "{\n    \"name\": \"张三\",\n    \"tel\": \"13212341234\",\n    \"province\": \"浙江\",\n    \"city\": \"杭州\",\n    \"area\": \"余杭\",\n    \"street\": \"无常街道 一社区 1动 1单元 101\",\n    \"code\": \"123456\",\n    \"isDefault\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "goodsId",
            "description": "<p>商品ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>收货人电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>省、市、区、街道、邮编...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"查询成功\",\n   \"data\": { 地址 }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/user/address.js",
    "groupTitle": "Address",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/address",
    "title": "获取收货地址列表",
    "group": "Address",
    "name": "getAddressList",
    "description": "<p>获取收货地址列表</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/address"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"添加成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/user/address.js",
    "groupTitle": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageNum",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式:",
          "content": "?pageNum=1&pageSize=10",
          "type": "string"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/address/default",
    "title": "获取默认地址",
    "group": "Address",
    "name": "getDefaultAddress",
    "description": "<p>获取默认收货地址</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/address/default"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "goodsId",
            "description": "<p>商品ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>收货人电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>省、市、区、街道、邮编...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"查询成功\",\n   \"data\": { 默认地址 }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/user/address.js",
    "groupTitle": "Address",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/address/:id",
    "title": "修改收货地址",
    "group": "Address",
    "name": "updateAddress",
    "description": "<p>修改收货地址</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/address/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>收货地址ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>收货人电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>省</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>市</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>区</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street",
            "description": "<p>街道</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>邮编</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "isDefault",
            "description": "<p>是否默认</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式",
          "content": "{\n    \"name\": \"张三\",\n    \"tel\": \"13212341234\",\n    \"province\": \"浙江\",\n    \"city\": \"杭州\",\n    \"area\": \"余杭\",\n    \"street\": \"无常街道 一社区 1动 1单元 101\",\n    \"code\": \"123456\",\n    \"isDefault\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "goodsId",
            "description": "<p>商品ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>收货人电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>省、市、区、街道、邮编...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"查询成功\",\n   \"data\": { 地址 }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/user/address.js",
    "groupTitle": "Address",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/cart",
    "title": "购物车添加商品",
    "group": "Cart",
    "name": "CartAddGoods",
    "description": "<p>购物车添加商品</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/cart"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "goodsId",
            "description": "<p>商品ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "goodsNum",
            "description": "<p>商品个数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式:",
          "content": "{\n   \"goodsId\": 1,\n   \"goodsNum\": 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"添加成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/user/cart.js",
    "groupTitle": "Cart",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/cart",
    "title": "删除购物车商品",
    "group": "Cart",
    "name": "CartDelGoods",
    "description": "<p>购物车删除商品</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/cart"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "goodsId",
            "description": "<p>商品ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式:",
          "content": "{\n   \"goodsId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"删除成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/user/cart.js",
    "groupTitle": "Cart",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/cart",
    "title": "购物车列表",
    "group": "Cart",
    "name": "getCart",
    "description": "<p>获取购物车内容</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/cart"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "goodsId",
            "description": "<p>商品ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>商品图片</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>商品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "goodsSum",
            "description": "<p>商品件数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>商品状态（1 在售，2 售磬，3 下架）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\"\n   \"data\": {\n     count: number,\n     goods: 商品列表\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/user/cart.js",
    "groupTitle": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageNum",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式:",
          "content": "?pageNum=1&pageSize=10",
          "type": "string"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/goods/:id",
    "title": "商品详情",
    "group": "Goods",
    "name": "getGoods",
    "description": "<p>获取商品详情</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/goods/:id"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>商品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hot_point",
            "description": "<p>商品热点描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "market_price",
            "description": "<p>市场价</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "discount",
            "description": "<p>折扣</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slider",
            "description": "<p>商品轮播图</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sales_no",
            "description": "<p>商品销量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "detail",
            "description": "<p>商品详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "inventory",
            "description": "<p>商品库存</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>商品状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\"\n   \"data\": {\n     商品\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/user/goods.js",
    "groupTitle": "Goods",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/goods",
    "title": "商品列表",
    "group": "Goods",
    "name": "getGoodsList",
    "description": "<p>获取商品列表</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/goods"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cate_1st",
            "description": "<p>一级分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cate_2nd",
            "description": "<p>二级分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cate_3rd",
            "description": "<p>三级分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"ASC\"",
              "\"DESC\""
            ],
            "optional": true,
            "field": "sortByPrice",
            "description": "<p>按照价格排序 从小到大-ASC，从大到小-DESC</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageNum",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式:",
          "content": "?pageNum=1&pageSize=10",
          "type": "string"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>商品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hot_point",
            "description": "<p>商品热点描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "market_price",
            "description": "<p>市场价</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "discount",
            "description": "<p>折扣</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slider",
            "description": "<p>商品轮播图</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sales_no",
            "description": "<p>商品销量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "detail",
            "description": "<p>商品详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "inventory",
            "description": "<p>商品库存</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>商品状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\"\n   \"data\": {\n     \"count\": 10,\n     \"goods\": []\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/user/goods.js",
    "groupTitle": "Goods",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/order",
    "title": "提交订单",
    "group": "Order",
    "name": "CreatOrder",
    "description": "<p>确认订单页面，提交订单按钮 将购物车中的商品转移到订单中，生成新的订单</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/order"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "goodsList",
            "description": "<p>欲购买的商品id和数量</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "addressId",
            "description": "<p>收货地址ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "payment",
            "description": "<p>支付价格</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式",
          "content": "{\n   \"goodsList\": [{\"id\":1, \"num\":2}, {\"id\":2, \"num\":1}],\n   \"addressId\": 1,\n   \"payment\": 499900\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "priceSum",
            "description": "<p>订单总价</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"查询成功\",\n   \"data\": {\n     address, goods\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/user/order.js",
    "groupTitle": "Order",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/order/check",
    "title": "确认订单",
    "group": "Order",
    "name": "SettleOrder",
    "description": "<p>点击结算之后传参至确认订单，此时api返回确认订单页面需要的数据，此时订单页面需要用户确认商品价格、数量、支付金额、收货地址</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/order/check"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "goods",
            "description": "<p>欲购买的商品id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式",
          "content": "{\n   \"goods\": [id1, id2, id3]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "priceSum",
            "description": "<p>订单总价</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"查询成功\",\n   \"data\": {\n     address, goods\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/user/order.js",
    "groupTitle": "Order",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/order/:id",
    "title": "订单详情",
    "group": "Order",
    "name": "getOrderInfo",
    "description": "<p>获取订单详情</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/order/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payment",
            "description": "<p>订单价格</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "pay_time",
            "description": "<p>支付时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ship_number",
            "description": "<p>快递单号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ship_name",
            "description": "<p>物流名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img_md",
            "description": "<p>商品图片</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>商品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "goods_num",
            "description": "<p>商品数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\"\n   \"data\": 订单内容\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/user/order.js",
    "groupTitle": "Order",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/order",
    "title": "订单列表",
    "group": "Order",
    "name": "getOrderList",
    "description": "<p>获取订单列表</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/order"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>订单状态：0-待付款，3-待发货，4-待收货，5-待评价</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageNum",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式:",
          "content": "?pageNum=1&pageSize=10",
          "type": "string"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img_md",
            "description": "<p>商品图片</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>商品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "goods_num",
            "description": "<p>商品数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\"\n   \"data\": {\n     \"count\": 10,\n     \"goods\": []\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/user/order.js",
    "groupTitle": "Order",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/order/pay",
    "title": "订单支付",
    "group": "Order",
    "name": "orderPay",
    "description": "<p>拉取支付参数</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/order/pay"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "orderId",
            "description": "<p>要支付的订单ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式",
          "content": "{\n   \"orderId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nonceStr",
            "description": "<p>订单总价</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "package",
            "description": "<p>订单总价</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "paySing",
            "description": "<p>订单总价</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "signType",
            "description": "<p>订单总价</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timeStamp",
            "description": "<p>订单总价</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"查询成功\",\n   \"data\": {\n     支付参数\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/user/order.js",
    "groupTitle": "Order",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/user/token",
    "title": "获取token",
    "group": "User",
    "name": "getToken",
    "description": "<p>微信小程序login后，获得临时登陆凭证code，再使用code换取登陆token,在请求header中携带token</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/user/token"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>微信临时登陆凭证code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n  \"code\": \"010101010\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用户token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\"\n   \"data\": {\n      \"token\": \"*****\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/user/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/user",
    "title": "更新用户信息",
    "group": "User",
    "name": "updateUserInfo",
    "description": "<p>更新用户信息 需携带token</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>微信头像url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickName",
            "description": "<p>微信昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>国家</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>省</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>市</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>生日</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pid",
            "description": "<p>推荐人OpenID</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "latitude",
            "description": "<p>维度</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "longitude",
            "description": "<p>经度</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n   \"avatar\": \"http://...\",\n   \"nickName\": \"微信用户\",\n   \"tel\": \"13*********\",\n   \"country\": \"中国\",\n   \"province\": \"浙江\",\n   \"city\": \"杭州\",\n   \"birthday\": \"2021-01-01\",\n   \"pid\": \"orDFKwH9tWT3GUexuxsPmfIUoKpw\",\n   \"latitude\": 1.000,\n   \"longitude\": 1.000\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n  \"code\": 200\n  \"message\": \"更新成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/user/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/admin/admin/login",
    "title": "管理员登陆",
    "group": "admin-Admin",
    "name": "adminLogin",
    "description": "<p>管理员登陆获取token</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/admin/login"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式",
          "content": "{\n   \"tel\": \"12345678\",\n   \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>token\\admin</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"登陆成功\",\n   \"data\": {\n     \"token\": token,\n     \"admin\": admin\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/admin.js",
    "groupTitle": "admin-Admin",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/admin/admin/register",
    "title": "管理员注册",
    "group": "admin-Admin",
    "name": "adminRegister",
    "description": "<p>管理员注册</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/admin/register"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式",
          "content": "{\n   \"tel\": \"12345678\",\n   \"password\": \"123456\",\n   \"username\": \"王小二\",\n   \"nickname\": \"二二\",\n   \"sex\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>token\\admin</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"注册成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/admin.js",
    "groupTitle": "admin-Admin",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/admin/admin/:id",
    "title": "删除管理员",
    "group": "admin-Admin",
    "name": "deleteAdmin",
    "description": "<p>删除管理员</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/admin/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>管理员id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"删除成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/admin.js",
    "groupTitle": "admin-Admin",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/admin/admin/:id",
    "title": "管理员详情",
    "group": "admin-Admin",
    "name": "getAdminInfo",
    "description": "<p>获取管理员详情</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/admin/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>管理员ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>管理员ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\"\n   \"data\": {\n     管理员\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/admin.js",
    "groupTitle": "admin-Admin",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/admin/admin",
    "title": "管理员列表",
    "group": "admin-Admin",
    "name": "getAdminList",
    "description": "<p>管理员列表</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role_name",
            "description": "<p>用户角色</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>账号状态（-1为禁用状态）</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "login_time",
            "description": "<p>登陆时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "login_count",
            "description": "<p>登陆次数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\"\n   \"data\": {\n     count: number,\n     goods: 管理员列表\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/admin.js",
    "groupTitle": "admin-Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageNum",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式:",
          "content": "?pageNum=1&pageSize=10",
          "type": "string"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/admin/admin/:id",
    "title": "修改管理员信息",
    "group": "admin-Admin",
    "name": "updateAdmin",
    "description": "<p>修改管理员信息</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/admin/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>管理员Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "roleid",
            "description": "<p>管理员角色id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式",
          "content": "{\n   \"username\": \"系统管理员\",\n   \"nickname\": \"jack\",\n   \"sex\": 1,\n   \"avatar\": \"111\",\n   \"tel\": \"123456789\",\n   \"roleid\": 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>角色</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"修改成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/admin.js",
    "groupTitle": "admin-Admin",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/admin/categories",
    "title": "创建子分类",
    "group": "admin-Categories",
    "name": "createCategories",
    "description": "<p>创建商品分类子分类</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/categories"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pid",
            "description": "<p>父级id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "level",
            "description": "<p>层级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>图标url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式:",
          "content": "{\n   \"name\": \"电脑\",\n   \"pid\": 2,\n   \"level\": 2,\n   \"img\": \"http://123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/categories.js",
    "groupTitle": "admin-Categories",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/admin/categories/:id",
    "title": "删除分类",
    "group": "admin-Categories",
    "name": "deleteCategories",
    "description": "<p>删除分类</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/categories/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>分类id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"删除成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/categories.js",
    "groupTitle": "admin-Categories",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/admin/categories",
    "title": "获取全部分类",
    "group": "admin-Categories",
    "name": "getCategories",
    "description": "<p>所有分类列表</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/categories"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pid",
            "description": "<p>父级id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>层级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>图标url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\"\n   \"data\": {\n     分类列表\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/categories.js",
    "groupTitle": "admin-Categories",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/admin/categories/sub/:id",
    "title": "获取子级分类",
    "group": "admin-Categories",
    "name": "getCategoriesSub",
    "description": "<p>根据父级id获取子级分类</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/categories/sub/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>父级id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pid",
            "description": "<p>父级id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>层级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>图标url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\"\n   \"data\": {\n     分类列表\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/categories.js",
    "groupTitle": "admin-Categories",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/admin/categories/:id",
    "title": "修改分类信息",
    "group": "admin-Categories",
    "name": "updateCategories",
    "description": "<p>修改分类信息</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/categories/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pid",
            "description": "<p>父级id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "level",
            "description": "<p>层级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>图标url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式:",
          "content": "{\n   \"name\": \"电脑\",\n   \"pid\": 2,\n   \"level\": 2,\n   \"img\": \"http://123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"修改成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/categories.js",
    "groupTitle": "admin-Categories",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/admin/goods",
    "title": "添加商品",
    "group": "admin-Goods",
    "name": "createGoods",
    "description": "<p>添加商品</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/goods"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cate_1st",
            "description": "<p>一级分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cate_2nd",
            "description": "<p>二级分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cate_3rd",
            "description": "<p>三级分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>商品价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hot_point",
            "description": "<p>商品热点描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "market_price",
            "description": "<p>市场价</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cost",
            "description": "<p>成本价格</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "discount",
            "description": "<p>折扣</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inventory",
            "description": "<p>商品库存</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "article_no",
            "description": "<p>商品货号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sales_no",
            "description": "<p>商品销量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img_lg",
            "description": "<p>商品大图</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img_md",
            "description": "<p>商品小图</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slider",
            "description": "<p>商品轮播图</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brand",
            "description": "<p>商品品牌</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "detail",
            "description": "<p>商品详情</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "freight",
            "description": "<p>商品运费</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "status",
            "description": "<p>商品状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式:",
          "content": "{\n   \"cate_1st\": null,\n   \"cate_2nd\": 2,\n   \"cate_3rd\": null,\n   \"name\": \"IKBC无线机械键盘\",\n   \"price\": 599,\n   \"hot_point\": \"新品首发IKBC机械键盘蓝牙6.0 多设备链接一键切换\",\n   \"market_price\": 699,\n   \"cost\": 399,\n   \"discount\": 0.8,\n   \"inventory\": 300,\n   \"article_no\": 683748245,\n   \"sales_no\": null,\n   \"img_lg\": \"http:img\",\n   \"img_md\": \"http:img\",\n   \"slider\": \"imgURL1,imgURL2,imgURL3\",\n   \"brand\": \"IKBC\",\n   \"detail\": \"<p><img src='111'></p>\",\n   \"freight\": 8,\n   \"status\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/goods.js",
    "groupTitle": "admin-Goods",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/admin/goods/:id",
    "title": "删除商品",
    "group": "admin-Goods",
    "name": "deleteGoods",
    "description": "<p>删除商品</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/goods/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"删除成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/goods.js",
    "groupTitle": "admin-Goods",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/admin/goods/:id",
    "title": "商品详情",
    "group": "admin-Goods",
    "name": "getGoodsInfo",
    "description": "<p>获取商品详情</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/goods/:id"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\"\n   \"data\": {\n     goods\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/goods.js",
    "groupTitle": "admin-Goods",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/admin/goods",
    "title": "商品列表",
    "group": "admin-Goods",
    "name": "getGoodsList",
    "description": "<p>获取商品列表</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/goods"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cate_1st",
            "description": "<p>一级分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cate_2nd",
            "description": "<p>二级分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cate_3rd",
            "description": "<p>三级分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"ASC\"",
              "\"DESC\""
            ],
            "optional": true,
            "field": "sortByPrice",
            "description": "<p>按照价格排序 从小到大-ASC，从大到小-DESC</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageNum",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式:",
          "content": "?pageNum=1&pageSize=10",
          "type": "string"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>商品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hot_point",
            "description": "<p>商品热点描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "market_price",
            "description": "<p>市场价</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "discount",
            "description": "<p>折扣</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slider",
            "description": "<p>商品轮播图</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sales_no",
            "description": "<p>商品销量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "detail",
            "description": "<p>商品详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "inventory",
            "description": "<p>商品库存</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>商品状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\"\n   \"data\": {\n     \"count\": 10,\n     \"goods\": []\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/goods.js",
    "groupTitle": "admin-Goods",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/admin/goods/:id",
    "title": "修改商品",
    "group": "admin-Goods",
    "name": "updateGoods",
    "description": "<p>修改商品</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/goods/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式:",
          "content": "{\n   \"cate_1st\": null,\n   \"cate_2nd\": 2,\n   \"cate_3rd\": null,\n   \"name\": \"IKBC无线机械键盘\",\n   \"price\": 599,\n   \"hot_point\": \"新品首发IKBC机械键盘蓝牙6.0 多设备链接一键切换\",\n   \"market_price\": 699,\n   \"cost\": 399,\n   \"discount\": 0.8,\n   \"inventory\": 300,\n   \"article_no\": 683748245,\n   \"sales_no\": null,\n   \"img_lg\": \"http:img\",\n   \"img_md\": \"http:img\",\n   \"slider\": \"imgURL1,imgURL2,imgURL3\",\n   \"brand\": \"IKBC\",\n   \"detail\": \"<p><img src='111'></p>\",\n   \"freight\": 8,\n   \"status\": 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"修改成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/goods.js",
    "groupTitle": "admin-Goods",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/admin/menu",
    "title": "添加子菜单",
    "group": "admin-Menu",
    "name": "createMenu",
    "description": "<p>添加子菜单（根菜单pid=0）</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/menu"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>分类名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pid",
            "description": "<p>父id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>菜单url地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>菜单显示顺序，按照数字从小到大排序</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式",
          "content": "{\n    \"name\": \"添加菜单\",\n    \"pid\": 1,\n    \"path\": \"/index/add\",\n    \"order\": 1001\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "menu",
            "description": "<p>菜单</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"查询成功\",\n   data\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/menu.js",
    "groupTitle": "admin-Menu",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/admin/menu/:id",
    "title": "删除子菜单",
    "group": "admin-Menu",
    "name": "deleteMenu",
    "description": "<p>删除子菜单</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/menu/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>菜单ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"删除成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/menu.js",
    "groupTitle": "admin-Menu",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/admin/menu/sub/:id",
    "title": "获取子级菜单",
    "group": "admin-Menu",
    "name": "getSubMenu",
    "description": "<p>获取子级菜单</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/menu/sub/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>父级菜单id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"删除成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/menu.js",
    "groupTitle": "admin-Menu",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/admin/menu/:id",
    "title": "更新菜单",
    "group": "admin-Menu",
    "name": "updateMenu",
    "description": "<p>更新菜单</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/menu/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>菜单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>分类名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pid",
            "description": "<p>父id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>菜单url地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>菜单显示顺序，按照数字从小到大排序</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式",
          "content": "{\n    \"name\": \"添加菜单\",\n    \"pid\": 1,\n    \"path\": \"/index/add\",\n    \"order\": 1001\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "menu",
            "description": "<p>菜单</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"查询成功\",\n   data\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/menu.js",
    "groupTitle": "admin-Menu",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/admin/order/:id",
    "title": "订单详情",
    "group": "admin-Order",
    "name": "getOrderInfo",
    "description": "<p>获取订单详情</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/order/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\",\n   \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/order.js",
    "groupTitle": "admin-Order",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/admin/order",
    "title": "订单列表",
    "group": "admin-Order",
    "name": "getOrderList",
    "description": "<p>获取订单列表</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/order"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "order_state",
            "description": "<p>订单状态</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "uid",
            "description": "<p>会员uid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageNum",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式:",
          "content": "?pageNum=1&pageSize=10",
          "type": "string"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>会员openId</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payment",
            "description": "<p>订单价格</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payment_type",
            "description": "<p>支付方式-1在线支付-2货到付款</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "pay_time",
            "description": "<p>支付时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ship_free",
            "description": "<p>邮费</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "ship_time",
            "description": "<p>发货时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ship_name",
            "description": "<p>快递公司</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ship_number",
            "description": "<p>快递单号</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "received_time",
            "description": "<p>收货时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "finish_time",
            "description": "<p>交易完成时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "close_time",
            "description": "<p>交易关闭时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "order_state",
            "description": "<p>订单状态字典id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>订单状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "refund_state",
            "description": "<p>退款状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "comment_state",
            "description": "<p>评论状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\"\n   \"data\": {\n     \"count\": 10,\n     \"goods\": []\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/order.js",
    "groupTitle": "admin-Order",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/admin/order/:id",
    "title": "修改订单",
    "group": "admin-Order",
    "name": "updateOrder",
    "description": "<p>修改订单</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/order/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ship_name",
            "description": "<p>快递公司</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ship_number",
            "description": "<p>快递单号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ship_time",
            "description": "<p>发货时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order_state",
            "description": "<p>订单状态字典id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式",
          "content": "{\n    \"ship_name\": \"顺丰\",\n    \"ship_number\": \"534645643\",\n    \"ship_time\": \"\",\n    \"order_state\": 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\",\n   \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/order.js",
    "groupTitle": "admin-Order",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/admin/rlogs",
    "title": "请求日志列表",
    "group": "admin-Rlogs",
    "name": "getRlogsList",
    "description": "<p>获取请求日志列表</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/rlogs"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ip",
            "description": "<p>请求ip</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "uid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageNum",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式:",
          "content": "?pageNum=1&pageSize=10",
          "type": "string"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>日志id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "uid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "method",
            "description": "<p>请求方法</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>请求PATH</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>请求参数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>ip地址</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\"\n   \"data\": {\n     \"count\": 10,\n     \"goods\": []\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/rlogs.js",
    "groupTitle": "admin-Rlogs",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/admin/role",
    "title": "添加角色",
    "group": "admin-Role",
    "name": "createRole",
    "description": "<p>添加角色</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/role"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>角色名称</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式",
          "content": "{\n    \"name\": \"系统管理员\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>角色</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"添加成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/role.js",
    "groupTitle": "admin-Role",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/admin/roleMenu",
    "title": "添加角色菜单",
    "group": "admin-Role",
    "name": "createRoleMenu",
    "description": "<p>添加角色菜单</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/roleMenu"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "menu_id",
            "description": "<p>菜单id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式",
          "content": "{\n    \"role_id\": 1,\n    \"menu_id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>角色</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"添加成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/role.js",
    "groupTitle": "admin-Role",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/admin/role/:id",
    "title": "删除角色",
    "group": "admin-Role",
    "name": "deleteRole",
    "description": "<p>删除角色</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/role/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>角色ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"删除成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/role.js",
    "groupTitle": "admin-Role",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/admin/roleMenu",
    "title": "删除角色菜单",
    "group": "admin-Role",
    "name": "deleteRoleMenu",
    "description": "<p>删除角色菜单</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/roleMenu"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "menu_id",
            "description": "<p>菜单id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式",
          "content": "{\n    \"role_id\": 1,\n    \"menu_id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"删除成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/role.js",
    "groupTitle": "admin-Role",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/admin/role",
    "title": "获取角色列表",
    "group": "admin-Role",
    "name": "getRoleList",
    "description": "<p>获取角色列表</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/role"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\",\n   \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/role.js",
    "groupTitle": "admin-Role",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/admin/roleMenu/:id",
    "title": "根据角色id获取菜单配置",
    "group": "admin-Role",
    "name": "getRoleMenu",
    "description": "<p>根据角色id获取菜单配置</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/roleMenu/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>角色id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\",\n   \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/role.js",
    "groupTitle": "admin-Role",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/admin/role/:id",
    "title": "修改角色",
    "group": "admin-Role",
    "name": "updateRole",
    "description": "<p>修改角色</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/role/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>角色id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>角色名称</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式",
          "content": "{\n    \"name\": \"系统管理员\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>角色</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"修改成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/role.js",
    "groupTitle": "admin-Role",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/admin/user/:id",
    "title": "获取用户详情",
    "group": "admin-User",
    "name": "getUserInfo",
    "description": "<p>获取用户详情</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/user/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户Id（非openid）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>推荐人信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\"\n   \"data\": {\n     user\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/user.js",
    "groupTitle": "admin-User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/admin/user",
    "title": "获取用户列表",
    "group": "admin-User",
    "name": "getUserList",
    "description": "<p>获取用户列表</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/admin/user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "openid",
            "description": "<p>用户OpenId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tel",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>国家</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>省</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>市</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "openid",
            "description": "<p>OpenId</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>生日</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>会员状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pid",
            "description": "<p>推荐人</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lever",
            "description": "<p>会员等级</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "integral",
            "description": "<p>会员积分</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>经度</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n   \"code\" : 200,\n   \"msg\": \"获取成功\",\n   \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/admin/user.js",
    "groupTitle": "admin-User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": -1\n  \"message\": \"错误提示\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
