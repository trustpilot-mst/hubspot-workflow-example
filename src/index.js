exports.main = function(event, callback) { 
  return callback(transformRequest(event)); 
}

function transformRequest(event) { 
  return { 
    webhookUrl: event.webhookUrl, 
    body: JSON.stringify({...event.object, portalId: event.origin.portalId}), 
    accept: 'application/json', 
    httpMethod: 'POST' 
  }; 
}