define({ "api": [
  {
    "type": "post",
    "url": "/messages",
    "title": "Message broadcasting",
    "group": "MESSAGES",
    "name": "messages",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>service API key</p>"
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
    },
    "description": "<p>Send a message through the API to one or multiple numbers.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Mandatory message's content.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "numbers",
            "description": "<p>Mandatory receiver's numbers array.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>Mandatory message's UUID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "from",
            "description": "<p>Optionnal message's sender if not given use apikey's label.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Optionnal message's type for SMS.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "400",
            "description": "<p>Incompatible format</p>"
          },
          {
            "group": "Error 4xx",
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
            "description": "<p>Message broadcasting success response structure</p>"
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
    "groupTitle": "MESSAGES"
  },
  {
    "type": "GET",
    "url": "/cm_reports",
    "title": "Report recovery",
    "group": "REPORTS",
    "name": "cm_reports",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>service API key</p>"
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
    },
    "description": "<p>Send a message through the API to one or multiple numbers.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "GSM",
            "description": "<p>Mandatory message's content.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "REFERENCE",
            "description": "<p>Mandatory receiver's numbers array.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "STATUS",
            "description": "<p>Mandatory message's UUID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "STANDARDERRORTEXT",
            "description": "<p>Optionnal message's sender if not given use apikey's label.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "400",
            "description": "<p>Incompatible format</p>"
          },
          {
            "group": "Error 4xx",
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
            "description": "<p>Message broadcasting success response structure</p>"
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
    "groupTitle": "REPORTS"
  }
] });
