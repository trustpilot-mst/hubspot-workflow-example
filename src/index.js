exports.main = async (event, context) => {
  callback({
    "data": {
      "myObjectId": event["object"]["objectId"],
      "myField": event["inputFields"]["widgetName"]
    }
  })
}