# openui5-OdataV2 Sample
> Stripped down version of the [OpenUI5 Sample App](https://github.com/UI5/sample-app) to showcase a possible Bug in the ODataV2 Model.

## Prerequisites
- The [UI5 CLI](https://github.com/UI5/cli).
    - For installation instructions please see: [Installation](https://ui5.github.io/cli/stable/pages/CLI/#installation).
 - For the example OData Endpoint: The [CDS CLI](https://cap.cloud.sap/docs/tools/cds-cli)
    - To install the CLI run `npm i -g @sap/cds-dk`.

## Running this sample
1. Clone this repository and navigate into it
2. Run `npm install` in the local repository
1. Run the `start` and `start-cds` npm scripts from the package.json
1. Go to the Sample Application in the Browser (http://localhost:8080/index.html)
1. After clicking on the `Execute OData V2 Function`-Button in the App, the Error should be displayed in the browser console.
