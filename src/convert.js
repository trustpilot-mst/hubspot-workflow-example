const fs = require('fs');

// Read the index.js file
fs.readFile('src/index.js', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    // Convert the file content to a JSON string
    const objToSave = {
      actionUrl: "https://teal-upward-crane.ngrok-free.app/workflows", // where the action will be sent
      published: true, // whether the action can be used in a workflow
      inputFields: [ // Not needed in POC, docs: https://developers.hubspot.com/docs/guides/api/automation/custom-workflow-actions#input-fields
        {
          "typeDefinition": { 
            "name": "widgetName", 
            "type": "string", 
            "fieldType": "text" 
          },
          "supportedValueTypes": ["STATIC_VALUE"],  
          "isRequired": true
        }
      ],
      labels: {
        en: {
          actionName: "Workflow Test 2.17 /workflows", // action name
          actionCardContent: "Hello there my friend", // action description
          inputFieldLabels: { // input field labels for customers, not needed in PoC
            "widgetName": "Widget Name"
          }
        }
      },
      functions: [ // the function that will be executed when the action is triggered
        {
          functionType: "PRE_ACTION_EXECUTION",
          functionSource: data,
        }
      ]
    }

    // Save the JSON string to a json file
    fs.writeFile('./output.json', JSON.stringify(objToSave), 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('File converted and saved successfully!');
    });
  } catch (err) {
    console.error('Error converting file to JSON:', err);
  }
});