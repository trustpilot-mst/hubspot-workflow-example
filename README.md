# HubSpot Workflows example

This is a simple repo containing a set up for turning a JS file into the correct format and then uploading this into HubSpot.

# Notes
- You need to add in the HubSpot app ID & API key into `./uploader.sh` `.env` is not set up for this repo "yet"
- This is JS not TS
- the `update` script will run as sudo, keep or remove as needed to execute a `.sh`
- This creates a new workflow action each time rather than updating an existing one, that is possible by passing the workflow action ID you want to update in the URL

`npm run update` run `node ./src/convert.js && sudo ./uploader.sh`
`./src/convert.js` will take `./src/index/js` as an input file and format it into part of an object which is then converted to JSON at `./output.json`
`./uploader.sh` will then take this and upload it hubspot
