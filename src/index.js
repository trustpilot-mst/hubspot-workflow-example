const axios = require("axios")

exports.main = async (event, context) => {

  try {
    const { data } = await axios.post("https://teal-upward-crane.ngrok-free.app/workflows", {...event})
    console.log(data)
  } catch(e){
    console.log(e)
  }

  // callback function to return data to the next step in the worfklow
  callback({
    "data": {
      "myObjectId": event["object"]["objectId"],
      "myField": event["inputFields"]["widgetName"]
    }
  })
}