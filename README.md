### MetroFuture in Action

The client-side app for MetroFuture in Action.


## Prepare for development

Before setting up, make sure you have the following installed:

- Ruby >= 2.1.0
- Node and NPM
- Bower

To install the project's dependencies:

```sh
# In the project directory:
$ bundle install  # Installs Ruby dependencies
$ npm install     # Installs Node dependencies
$ bower install   # Installs web client dependencies
```

To configure:

Copy `aws-credentials.json.template` to `aws-credentials.json`.

```sh
$ mv aws-credentials.json.template aws-credentials.json
```

You don't have to fill in your credientials in order to run the server.



## Serve

To start the local server:

```sh
$ grunt serve
```



## Deploy to Amazon AWS S3

```sh
$ grunt build
$ grunt s3:build
```

To deploy to S3, you must configure the `aws-credentials.json` file with your credentials: fill in the values with your AWS Access Key ID and Secret Access Key, available through the Amazon AWS management console.

Then, fill in `bucketName` with the name of the S3 bucket to which you plan to deploy the client-side application.