define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/user/login",
    "title": "登陆",
    "group": "User",
    "name": "login",
    "description": "<p>用户登陆接口</p>",
    "sampleRequest": [
      {
        "url": "/api/v1/user/login"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passWord",
            "description": "<p>用户密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n  \"userName\": \"test\",\n  \"passWord\": \"12345678\"\n}",
          "type": "json"
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
            "field": "message",
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
          "content": "{\n  \"code\": -1\n  \"message\": \"用户名或密码错误\"\n}",
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
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>城市</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n  \"userName\": \"test\",\n  \"id\": 1,\n  \"city\": \"test\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/home.js",
    "groupTitle": "User"
  }
] });
