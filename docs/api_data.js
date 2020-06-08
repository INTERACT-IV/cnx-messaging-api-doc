define({ "api": [
  {
    "type": "architecture",
    "url": "Architecture",
    "title": "Main View",
    "version": "0.0.1",
    "group": "API_Architecture",
    "description": "<p>This the API in its ecosystem</p> <p><img src=\"images/SMS-API-GBL.png\" alt=\"Diagramme de composants\" title=\"Architecture main view\"></p>",
    "filename": "../cnx-messaging-server/routes.js",
    "groupTitle": "API_Architecture",
    "name": "ArchitectureArchitecture"
  },
  {
    "type": "architecture",
    "url": "Architecture",
    "title": "Sequence Chart",
    "version": "0.0.1",
    "group": "API_Architecture",
    "description": "<p>This the API main sequences</p> <p><img src=\"images/API_SMS_SERVER.png\" alt=\"Diagramme de sequences\" title=\"Architecture sequences\"></p>",
    "filename": "../cnx-messaging-server/routes.js",
    "groupTitle": "API_Architecture",
    "name": "ArchitectureArchitecture"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "../cnx-messaging-server/docs/main.js",
    "group": "C:\\workspace\\CNX\\cnx-messaging-server\\docs\\main.js",
    "groupTitle": "C:\\workspace\\CNX\\cnx-messaging-server\\docs\\main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/messages",
    "title": "Broadcasting messages",
    "version": "0.0.1",
    "group": "MESSAGES",
    "name": "messages",
    "description": "<p>Send a message through the API to one or multiple numbers by passing parameters to the body.</p> <p><img src=\"images/SendMessage.png\" alt=\"Organigramme SendMessages\" title=\"SendMessages\"></p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Mandatory message's content.</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": false,
            "field": "numbers",
            "description": "<p>Mandatory receiver's numbers array.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "from",
            "description": "<p>Optionnal message's sender if not given use apikey's label.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Optionnal message's type for SMS.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "{\n  \"content\" : \"$content\",\n  \"numbers\" : \"$numbers\",\n  \"from\" : \"$from\",\n  \"type\" : \"$type\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error Response": [
          {
            "group": "Error Response",
            "type": "json",
            "optional": false,
            "field": "400",
            "description": "<p>Incompatible format</p>"
          },
          {
            "group": "Error Response",
            "type": "json",
            "optional": false,
            "field": "408",
            "description": "<p>Request time-out</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Incompatible format response:",
          "content": "{ error: \"Incompatible format: [ $field + $reason, … ]\" }",
          "type": "json"
        },
        {
          "title": "No sender provided response:",
          "content": "{ error: \"Request time-out\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "200",
            "description": "<p>Message broadcasting success response structure:<BR/>{ uuid: &quot;$uuid&quot; }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Message broadcasting success response:",
          "content": "{ uuid: \"32e52276-7416-41fc-98a1-636ffbb94671\" }",
          "type": "json"
        }
      ]
    },
    "filename": "../cnx-messaging-server/routes.js",
    "groupTitle": "MESSAGES",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Service API key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Api example:",
          "content": "{ \"apikey\":\"012345\" }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/customer_reports",
    "title": "Broadcasting customer's reports",
    "version": "0.0.1",
    "group": "REPORTS",
    "name": "customer_reports",
    "description": "<p>Report broadcasting through the API to one or multiple numbers.</p> <p><img src=\"images/WebhookReports.png\" alt=\"Organigramme Webhook reports\" title=\"Architecture sequences\"></p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Service API key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Api example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Mandatory report's apikey.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>Mandatory report's uuid.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "called",
            "description": "<p>Mandatory report message's receiver .</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "ar_status",
            "description": "<p>Mandatory report's status.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "ar_result",
            "description": "<p>Mandatory report's result.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "ar_time",
            "description": "<p>Mandatory report's time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "{\n   apikey: '$apikey', \n   uuid: '$uuid',\n   called: '$called',\n   ar_status: '$ar_status',\n   ar_result: '$ar_result',\n   ar_time: '$ar_time'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "ErrorResponse": [
          {
            "group": "ErrorResponse",
            "type": "json",
            "optional": false,
            "field": "400",
            "description": "<p>Incompatible format</p>"
          },
          {
            "group": "ErrorResponse",
            "type": "json",
            "optional": false,
            "field": "408",
            "description": "<p>Request time-out</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Incompatible format response:",
          "content": "{ error: \"Incompatible format: [ $field + $reason, … ]\" }",
          "type": "json"
        },
        {
          "title": "No sender provided response:",
          "content": "{ error: \"Request time-out\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "200",
            "description": "<p>Message broadcasting success response structure:<BR>{ uuid: &quot;$uuid&quot; }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Message broadcasting success response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "filename": "../cnx-messaging-server/routes.js",
    "groupTitle": "REPORTS"
  },
  {
    "type": "get",
    "url": "/reports",
    "title": "Customer reports recovery",
    "group": "REPORTS",
    "name": "reports",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "start_time",
            "description": "<p>Mandatory start of search range. The interval between each date have to be of 1 month or less</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "end_time",
            "description": "<p>Mandatory end of search range. The interval between each date have to be of 1 month or less</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "called",
            "description": "<p>Optionnal message's receiver number.</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>Optionnal message's status.</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "count",
            "defaultValue": "100",
            "description": "<p>Optionnal maximum amount of reports received. Must be less than 100 .</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Optionnal number of page set to 1 .</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "apikey_restricted",
            "defaultValue": "false",
            "description": "<p>Optionnal restrict reports viewed to your apikey project only, set to false.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "GET /reports?uuid=9075c582-368e-4efe-867b-48bf76d2007a&called=0033629020559&start_time=2020-05-21&end_time=2020-06-18&status=null&count=100&page=1&apikey_restricted=false HTTP/1.1",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error Response": [
          {
            "group": "Error Response",
            "type": "json",
            "optional": false,
            "field": "408",
            "description": "<p>Request time-out</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No sender provided response:",
          "content": "{ error: \"Request time-out\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "200",
            "description": "<p>Customer reports recovery response structure:<BR/> {<BR/> count,<BR/> rows : [{<BR/> &quot;uuid&quot;: &quot;$uuid&quot;,<BR/> &quot;called&quot;: &quot;$called&quot;,<BR/> &quot;ar_status&quot;: &quot;$ar_status&quot;,<BR/> &quot;ar_result&quot;: &quot;$ar_result&quot;,<BR/> &quot;ar_time&quot;: &quot;$ar_time&quot;,<BR/> &quot;send_time&quot;: &quot;$send_time&quot;,<BR/> &quot;status&quot;: &quot;$status&quot;<BR/> }, ... ]<BR/> }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Customer reports recovery response:",
          "content": "{\n  count,\n  rows : [{\n    \"uuid\": \"32e52276-7486-41fc-98a1-638ffbb94671\",\n    \"called\": \"003312346789\",\n    \"ar_status\": \"1\",\n    \"ar_result\": \"Delivered\",\n    \"ar_time\": \"2020-06-04T11:38:15.000Z\",\n    \"send_time\": \"2020-06-04T11:38:11.000Z\",\n    \"status\": \"Retrying\"\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../cnx-messaging-server/routes.js",
    "groupTitle": "REPORTS",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Service API key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Api example:",
          "content": "{ \"apikey\":\"012345\" }",
          "type": "json"
        }
      ]
    }
  }
] });
