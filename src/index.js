exports.main = function(event, callback) { 
  return callback(transformRequest(event)); 
}

function transformRequest(event) { 
  return { 
    webhookUrl: event.webhookUrl, 
    body: JSON.stringify(event.object), 
    contentType: 'application/x-www-form-urlencoded', 
    accept: 'application/json', 
    httpMethod: 'POST' 
  }; 
}