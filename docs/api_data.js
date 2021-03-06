define({ "api": [
  {
    "type": "architecture",
    "url": "Architecture",
    "title": "High Level Architecture",
    "version": "1.0.0",
    "group": "API_Architecture",
    "name": "Architecture_API_Ecosystem",
    "description": "<p>This is the API in its ecosystem.</p> <p><img src=\"images/HLA-cnx-messaging-server.png\" alt=\"High Level Architecture\"></p>",
    "filename": "../cnx-messaging-server/routes.js",
    "groupTitle": "API_Architecture"
  },
  {
    "type": "post",
    "url": "/messages",
    "title": "Broadcasting messages",
    "version": "1.0.0",
    "group": "MESSAGES",
    "name": "messages",
    "description": "<p>Send a message through the API to one or multiple numbers by passing parameters to the body.</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Message's content.</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": false,
            "field": "numbers",
            "description": "<p>Receiver's numbers array.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "from",
            "description": "<p>Message's sender can be a number or if not given the apikey's label.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Message's type set to SMS by default.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "{\n  \"content\" : \"Hello there!\",\n  \"numbers\" : [\"0033123456789\"],\n  \"from\" : \"Stark\",\n  \"type\" : \"SMS\"\n}",
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
          "content": "{ \"error\": \"Incompatible format: [ $field + $reason, … ]\" }",
          "type": "json"
        },
        {
          "title": "Request time-out response:",
          "content": "{ \"error\": \"Request time-out\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "json",
            "optional": false,
            "field": "Message",
            "description": "<p>broadcasting success response structure:<BR/>{ &quot;uuid&quot;: &quot;$uuid&quot; }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Message broadcasting success response:",
          "content": "{ \"uuid\": \"01a23456-7890-12cd-34e5-678fghi90123\" }",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>Application/json</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/reports",
    "title": "Customer reports recovery",
    "group": "REPORTS",
    "name": "reports",
    "version": "1.0.0",
    "description": "<p>You can retrieve reports by entering specific paramters at any time (see below), a valid apikey, &quot;start_time&quot; and &quot;end_time&quot; being mandatory. But if you dont enter them you will retrieve all your reports from the last 30 days. <img src=\"images/HLA-cnx-messaging-server-reports.png\" alt=\"High Level Architecture\"></p>",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>Start of search range. The interval between each date have to be of 1 month or less</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "end_time",
            "description": "<p>End of search range. The interval between each date have to be of 1 month or less</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>Message batch identifier. To retrieve a message corresponding to a specific number, you must specify the latter.</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "called",
            "description": "<p>Message's receiver number.</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>Message's status. The available statuses are as follows:<BR/>Sending (Text messages sent to provider),<BR/>ErrorSending (Text messages didn't reach provider),<BR/>Accepted (Text messages' reports accepted by provider),<BR/>Delivered (Text messages' reports delivered by provider),<BR/>Rejected (Provider denied text messages' reports delivery),<BR/>Failed (Provider can't deliver text messages' reports),<BR/>Read (WhatsApp only status)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "count",
            "description": "<p>Amount of reports received.<BR/>If it isn't set, it will return all available reports that match other selected paramaters.</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Number of page set to 1.<BR/>If it isn't set, it will return all available reports that match other selected paramaters.</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "apikey_restricted",
            "defaultValue": "false",
            "description": "<p>Restrict reports viewed to your apikey project only, set to false.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example with all parameters:",
          "content": "GET /reports?uuid=01a23456-7890-12cd-34e5-678fghi90123&called=0033123456789&start_time=2020-05-21&end_time=2020-06-18&status=Accepted&count=100&page=1&apikey_restricted=false",
          "type": "json"
        },
        {
          "title": "Request Example on specific time range (The only mandatory parameters):",
          "content": "GET /reports?start_time=2020-05-21&end_time=2020-06-18",
          "type": "json"
        },
        {
          "title": "Request Example on specific time range for a specific message batch:",
          "content": "GET /reports?start_time=2020-05-21&end_time=2020-06-18&uuid=01a23456-7890-12cd-34e5-678fghi90123",
          "type": "json"
        },
        {
          "title": "Request Example on specific time range for a unique number on a specific message batch:",
          "content": "GET /reports?start_time=2020-05-21&end_time=2020-06-18&uuid=01a23456-7890-12cd-34e5-678fghi90123&called=0033123456789",
          "type": "json"
        },
        {
          "title": "Request Example on specific time range for a specific status on a message batch:",
          "content": "GET /reports?start_time=2020-05-21&end_time=2020-06-18&status=Accepted",
          "type": "json"
        },
        {
          "title": "Request Example on specific time range for 3 pages (will return all available reports on those pages):",
          "content": "GET /reports?start_time=2020-05-21&end_time=2020-06-18&page=3",
          "type": "json"
        },
        {
          "title": "Request Example on specific time range for 25 first reports:",
          "content": "GET /reports?start_time=2020-05-21&end_time=2020-06-18&count=25",
          "type": "json"
        },
        {
          "title": "Request Example on specific time range for a specific api key on a message batch (if not set, it will returned all customer's apikey related report batch):",
          "content": "GET /reports?start_time=2020-05-21&end_time=2020-06-18&apikey_restricted=true",
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
            "field": "404",
            "description": "<p>If the reports you're asking doesn't exist, you'll get a<BR/> &quot;Request not found&quot; response status</p>"
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
          "title": "Request not found response:",
          "content": "{}",
          "type": "json"
        },
        {
          "title": "Request time-out response:",
          "content": "{ \"error\": \"Request time-out\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Customer reports recovery response structure:",
          "content": "HTTP/1.1 200 OK\n{\n  \"count\": \"$count\",\n  \"rows\" : [{\n    \"uuid\": \"$uuid\",\n    \"called\": \"$called\",\n    \"ar_status\": \"$ar_status\",\n    \"ar_result\": \"$ar_result\",\n    \"ar_time\": \"$ar_time\",\n    \"send_time\": \"$send_time\",\n    \"status\": \"$status\"\n  }, ... ]\n =>  Available status:   \"Done\" (if reports is delivered to customer or if no webhook is provided ),\n                         \"Retrying\" (not transmitted and in the process of re-transmission (increment of nb_attemps)),\n                         \"Error\" (report never deliverd to customer, text message could have been delivered ... or not)\n}",
          "type": "json"
        },
        {
          "title": "Customer reports recovery response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"count\": 1,\n   \"rows\" : [{\n     \"uuid\": \"01a23456-7890-12cd-34e5-678fghi90123\",\n     \"called\": \"003312346789\",\n     \"ar_status\": \"Delivered\",\n     \"ar_result\": \"Delivered\",\n     \"ar_time\": \"2020-06-04T11:38:15.000Z\",\n     \"send_time\": \"2020-06-04T11:38:11.000Z\",\n     \"status\": \"Retrying\"\n   }]\n }",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>Application/json</p>"
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "http://$webhook_path",
    "title": "Broadcasting customer's reports",
    "version": "1.0.0",
    "group": "WEBHOOK",
    "name": "webhook",
    "description": "<p>Report broadcasting through the API to one or multiple numbers, implementation to receive reports is the responsibility of the customer. The webhook is hosted by the client. <img src=\"images/HLA-cnx-messaging-server.png\" alt=\"High Level Architecture\"></p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Report's apikey.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>Report batch's uuid.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "called",
            "description": "<p>Report message's receiver .</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "ar_status",
            "description": "<p>Report's status. The available statuses are as follows:<BR/>Sending (Text messages sent to provider),<BR/>ErrorSending (Text messages didn't reach provider),<BR/>Accepted (Text messages' reports accepted by provider),<BR/>Delivered (Text messages' reports delivered by provider),<BR/>Rejected (Provider denied text messages' reports delivery),<BR/>Failed (Provider can't deliver text messages' reports),<BR/>Read (WhatsApp only status)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "ar_result",
            "description": "<p>Report's result.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "ar_time",
            "description": "<p>Report's time.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "send_time",
            "description": "<p>The moment the text message was sent.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "nb_attempts",
            "description": "<p>The attempt number of a new delivery.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>The text message's status. Available status:<BR/>&quot;Done&quot; (if reports is delivered to customer or if no webhook is provided ),<BR/>&quot;Retrying&quot; (not transmitted and in the process of re-transmission (increment of nb_attemps)),<BR/>&quot;Error&quot; (report never deliverd to customer, text message could have been delivered ... or not)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "{\n   \"apikey\": \"$apikey\", \n   \"uuid\": \"$uuid\",\n   \"called\": \"$called\",\n   \"ar_status\": \"$ar_status\",\n   \"ar_result\":\"$ar_result\",\n   \"ar_time\": \"$ar_time\",\n   \"send_time\": \"$send_time\",\n   \"nb_attempts\": \"$nb_attempts\",\n   \"status\": \"$status\",\n}",
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
            "description": "<p>If this error occurs, the request will be launch at regular intervals.</p>"
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
          "title": "No sender provided response:",
          "content": "{ \"error\": \"Request time-out\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "json",
            "optional": false,
            "field": "Message",
            "description": "<p>broadcasting success response structure:<BR>{ uuid: &quot;$uuid&quot; }</p>"
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
    "groupTitle": "WEBHOOK"
  }
] });
