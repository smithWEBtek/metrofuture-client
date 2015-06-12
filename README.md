### MetroFuture in Action

This is the repository for the frontend client of MetroFuture in Action. It is built with Backbone and Marionette. All other dependencies can be found in bower.json. You need Bower and NPM.

## Development

Before you start, you'll need:

- Node JS [Install page](https://nodejs.org/)
- NPM (installed with Node)
    - Bower (`npm install -g bower`)
    - Grunt (`npm install -g grunt-cli`)
- Ruby (you're on your own)
    - Compass (`gem install compass` and maybe `npm install grunt-contrib-compass`)

To start the app:

```sh
npm install
bower install
grunt serve
```

As of now, the develop branch uses fixture data. Staging and Master branches should use live data from the MFIA API endpoint.


## Troubleshooting

If Grunt or Compass aren't available, make sure to run the installation commands above.

If you need help, these StackOverflow articles might help:

- [Node package ( Grunt ) installed but not available](http://stackoverflow.com/questions/10667381/node-package-grunt-installed-but-not-available)
- ["command not found" after installation](http://stackoverflow.com/questions/15846076/command-not-found-after-installation)
- ["grunt: command not found when running from terminal"](http://stackoverflow.com/questions/16868924/grunt-command-not-found-when-running-from-terminal)