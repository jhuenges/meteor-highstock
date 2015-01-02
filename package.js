Package.describe({
  name: 'jhuenges:highstock',
  summary: 'Meteor wrapper for Highstock!',
  version: '0.0.9',
  git: 'https://github.com/jhuenges/meteor-highstock.git'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.2.1');
    api.use('jquery');

    // basic highstock
    api.addFiles('lib/highstock.js', 'client');
});