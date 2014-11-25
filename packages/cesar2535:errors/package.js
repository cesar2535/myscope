Package.describe({
  name: 'cesar2535:errors',
  summary: 'A pattern to display application errors to the user',
  version: '1.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');

  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

  api.addFiles(['cesar2535:errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export)
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use('cesar2535:errors', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');

  api.addFiles('cesar2535:errors-tests.js', 'client');
});
