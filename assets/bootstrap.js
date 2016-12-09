
/**
 * ------------------------------------------------------------------------------
 * Default application configuration.
 *
 * This should include at least app name and api url
 * ------------------------------------------------------------------------------
 */
window.config = {
    appname: 'Laravue',
    api: 'http://api.laravue.dev/'
};

/**
 * ---------------------------------------------------------------------------
 * We ship Laravue with three default package to get you start quickly.
 *
 * 1. Lodash: Will help you to work faster with arrays or objects.
 * 2. Axios: Promise based HTTP client for the browser.
 * 3. jQuery: are you serious?
 * ---------------------------------------------------------------------------
 */
window._     = require('lodash');
window.axios = require('axios');
window.$     = window.jQuery = require('jquery');

require('bootstrap-sass');
