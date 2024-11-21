const fs = require('fs');

// Read the index.js file
fs.readFile('src/index.js', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    // Convert the file content to a JSON string
    const jsonString = JSON.stringify(data);
    const objToSave = {
      actionUrl: "https://teal-upward-crane.ngrok-free.app/workflows",
      published: true,
      inputFields: [
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
          actionName: "Workflow Test 2.17 /workflows",
          actionCardContent: "Hello there my friend",
          inputFieldLabels: {
            "widgetName": "Widget Name"
          }
        }
      },
      functions: [
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