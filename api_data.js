define({ "api": [
  {
    "type": "socket",
    "url": "http://meetingapi.ekantchawla.me/api/v1/notification",
    "title": "Socket URL",
    "version": "1.0.0",
    "group": "App_Socket_URL",
    "description": "<p>This is the url where the client must make a socket connection</p>",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "App_Socket_URL",
    "name": "SocketHttpMeetingapiEkantchawlaMeApiV1Notification"
  },
  {
    "type": "event",
    "url": "setUser",
    "title": "Set user",
    "version": "1.0.0",
    "group": "Emit",
    "description": "<p>This event should emitted by the client to register and set user detail to the socket connection. This works as a handshake.</p>",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EventSetuser"
  },
  {
    "type": "event",
    "url": "authError",
    "title": "Auth error",
    "version": "1.0.0",
    "group": "Listen",
    "description": "<p>This event is emitted by the server if it finds that the authToken is invalid or socket is missing user detail.</p>",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "EventAutherror"
  },
  {
    "type": "event",
    "url": "userId",
    "title": "Notification",
    "version": "1.0.0",
    "group": "Listen",
    "description": "<p>The client should listen to the event [userId] for notifications that are emitted for that user. Eg. to listen to notificaions for user with id 123abc the client must listen for the event '123abc'</p>",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "EventUserid"
  },
  {
    "type": "event",
    "url": "verifyUser",
    "title": "Verify user",
    "version": "1.0.0",
    "group": "Listen",
    "description": "<p>This event should be listened to by the client, after this the client can then emit setUser event.</p>",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "EventVerifyuser"
  }
] });
