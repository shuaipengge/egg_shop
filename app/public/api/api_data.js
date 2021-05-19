define({ "api": [
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
    "filename": "app/controller/user.js",
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
    "filename": "app/controller/user.js",
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
  }
] });
