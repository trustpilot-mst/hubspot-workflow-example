exports.main = function(event, callback) { 
  return callback(transformRequest(event)); 
}

function transformRequest(event) { 
  return { 
    webhookUrl: event.webhookUrl, 
    body: JSON.stringify({...event.object, portalId: event.origin.portalId}), 
    contentType: 'application/x-www-form-urlencoded', 
    accept: 'application/json', 
    httpMethod: 'POST' 
  }; 
}