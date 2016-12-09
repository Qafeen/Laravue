const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 |  Configuring Elixir default path
 |--------------------------------------------------------------------------
 */

elixir.config.assetsPath = './assets';
elixir.config.js.folder  = './';
elixir.config.css.folder = './';
elixir.config.css.sass.folder = './sass';

/*
 |--------------------------------------------------------------------------
 |  Loading up application specific requirement
 |--------------------------------------------------------------------------
 */

elixir(function(mix) {
    mix

    .sass('app.scss', 'public/css/app.css')

    .webpack('main.js', 'public/js/app.js')

    .browserSync();
});