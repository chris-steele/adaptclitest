var promise = require('promise');
var api = require('adapt-cli').api;

var renderer = {
  log:function(){console.log.apply(this, arguments)},
  error:function(){console.error.apply(this, arguments)}
};

/*
  ### install

  example usage:

    api.commands.install('adapt-devtools').then(renderer.log, renderer.error);
    api.commands.install().then(renderer.log, renderer.error);

  resolves:

    with an object of the form:
    {
      success:{
        'adapt-devtools': {
          installedVersion: '3.0.1',
          latestCompatibleVersion: '3.0.1'
        }
      },
      errored: {
        'adapt-hopeless': {
          errorMessage: '[Bower error or if one isn't provided then 'unknown error']'
        }
      },
      missing: [
        'adapt-assLearning',
        'adapt-notRegistered'
      ]
    }

  rejects:

    with an array of errors each an object of the form:
    {
      error: [one of the below errors]
      context: an array of plugin names that raised the associated error
    }

    ERROR_COURSE_DIR
    ERROR_INCOMPATIBLE_VALID_REQUEST
    ERROR_INCOMPATIBLE_BAD_REQUEST
    ERROR_INCOMPATIBLE
    ERROR_COMPATIBLE_INC_REQUEST
    ERROR_COMPATIBLE_BAD_REQUEST
*/

/*
  ### uninstall

  example usage:

    api.commands.uninstall('adapt-devtools').then(renderer.log, renderer.error);  

  resolves:

    with the name of the plugin that was uninstalled

  rejects:

    with an object of the form:
    {
      error: [one of the below errors]
    }

    ERROR_COURSE_DIR
    ERROR_UNINSTALL (e.g. file system busy or permission problem)
    ERROR_NOT_FOUND
*/

/*
  ### update

  example usage:

    api.commands.update('adapt-devtools').then(renderer.log, renderer.error);
    api.commands.update().then(renderer.log, renderer.error);

  resolves:

    with an array of objects each of the form:
    {
      name: adapt-bodacious
      status: fulfilled
      pluginData: [parsed bower.json]
    }

    or

    {
      name: adapt-bogus
      status: rejected
      reason: 'no update available' || 'no published releases' || 'not registered'
    }

  rejects:

    with an object of the form:
    {
      error: [one of the below errors]
    }

    ERROR_COURSE_DIR
    ERROR_NOTHING_TO_UPDATE
    ERROR_UPDATE_INCOMPATIBLE
*/

//api.commands.install('adapt-devtools#3.0.0', '../..').then(renderer.log, renderer.error);
//api.commands.update('adapt-devtools', '../..').then(renderer.log, renderer.error);
//api.commands.uninstall('adapt-devtools', '../..').then(renderer.log, renderer.error);