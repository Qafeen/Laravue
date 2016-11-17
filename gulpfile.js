const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 |  Configuring Elixir default path
 |--------------------------------------------------------------------------
 */

elixir.config.assetsPath = './';
elixir.config.js.folder  = './';
elixir.config.css.folder = './';

/*
 |--------------------------------------------------------------------------
 |  Loading up application specific requirement
 |--------------------------------------------------------------------------
 */

elixir(function(mix) {
    mix.styles([
        'public/css/custom.css'
    ], 'public/css/compiled.css')
    .scripts([
        'public/js/custom.js'
    ], 'public/js/compiled.js')
    .webpack('app/main.js', 'public/js/app.js');
});
