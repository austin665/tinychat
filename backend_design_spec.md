Here is where your spec/explanation to the tinychat backend developer goes.

Here are some of the RESTful URLs that can be consumed by this applicaiton.

### Get messages request

The GET messages request can be a single request with the entity name, the messages. The timestamp input is required to match the time with the last get messages call. So that we are sure the server is updated.

GET /get-message

Required-Params : last-update `unix timestamp`

Example: /api/get-message?last-update=1421953434028

Response: 200 -- Success with a JSON object similar to:
          `{
            "id": 7,
            "author": "Jane",
            "timestamp": 1421953502796,
            "content": "@Alex: Yeah, likely will get my bags after BART stops running. They're saying the ETA is 11:40pm now. Is that too late for you?",
            "last_edited": 1421953556411,
            "avatar": "female.png"
           }'
           
           500 -- Internal Server Error
           

### Send messages request

Request to add a new messages to the message database.

POST /message

Form contents:

Parameters : REQUIRED: author: `string`, timestamp `unix timestamp`, content `string`,
             OPTIONAL: avatar: `img` 
             
Response : 200 -- success; Return the id of the user created.
           500 -- Internal Server Error, 415 -- Unsupported Media Type

Example: `{
            author: "", 
            timestamp: 1421953648024, 
            content: "",
            avatar: "images/anon.png"
         }`



### Update message request

POST /message/{id}

Path Variable: REQUIRED: id `int` -- id of the message to be updated

From Contents: 

Parameters:  REQUIRED Parameters:  content `string`  -- the message to be updated with
                                   time  `unix timestamp`  -- the time of update

Response:  200 -- success; Return the id of the message successfully updated.
           500 -- Internal Server Error