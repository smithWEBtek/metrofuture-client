### MetroFuture in Action
This is the repository for the frontend client of MetroFuture in Action. It is built with Backbone and Marionette. All other dependencies can be found in bower.json. You need Bower and NPM.


## Development
To start:
`npm install`
`bower install`
`grunt serve`


## Deploy
`grunt build`
`grunt s3:build`

To deploy to S3, you must configure both the `aws-credentials.json` file and the `Gruntfile.js`.

As of now, the develop branch uses fixture data. Staging and Master branches should use live data from the MFIA API endpoint.