
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
 * We ship Laravue with four default package to get you start quickly.
 *
 * 1. Lodash: Will help you to work faster with arrays or objects.
 * 2. Vue: Do it require introduction?
 * 3. Axios: Promise based HTTP client for the browser.
 * 4. jQuery: If you don't need it you can remove it.
 * ---------------------------------------------------------------------------
 */
window._     = require('lodash');
window.Vue 	 = require('vue');
window.axios = require('axios');
