[Leia em Português do Brasil](https://github.com/williamcanin/gosync-html/blob/master/README.md)

# Go!Sync HTML

[![NodeJS with Gulp](https://github.com/williamcanin/gosync-html/actions/workflows/npm-gulp.yml/badge.svg)](https://github.com/williamcanin/gosync-html/actions/workflows/npm-gulp.yml)


Simple boilerplate using pure HTML with, [Gulp](http://gulpjs.com/), [Twitter Bootstrap](http://getbootstrap.com), e [Browser Sync](https://www.browsersync.io).

### Introduction

"Go!Sync HTML" facilitates the development of HTML's projects in a way that the monitoring of all changes made to HTML's, Style Sheets and Javascripts are done automatically through [Gulp](http://gulpjs.com/) tasks , and [Browser Sync](https://www.browsersync.io). An easy way to forget about the browser's F5 and many more. ;)

### How does **Go!Sync HTML** HTML work ?

* All HTML file structures are minified by option via the `config.json`. You must create your pages inside the folder `src/templates`.

* You create style sheets with SASS that will be compiled to CSS and automatically minified with every change. You must create your style sheets within `src/scss`.

* JavaScripts are automatically concatenated and minified with each change as well. You must create your Javascript scripts inside `src/js`.

### Requirements

| Required       | Version | How to check      | How to install  |
| --------------- | -------| ------------------- | -------------- |
| Git             | indifferent | `git --version`     | [Git](http://git-scm.com/) |
| Node            | >= 12.0 | `node -v`          | [Nodejs](http://nodejs.org/) |
| Npm             | indifferent | `npm --version`     | **Nodejs** contains **Npm** |
| Gulp            | >=4.0.0  | `gulp -v`           | [Gulp](http://gulpjs.com/) |

> Veja a documentação de cada requerimento para a instalação.

### Installing

After installing all the above requirements, do the following commands:

1 - Clone **Go!Sync HTML** and access the folder:

```shell
$ git clone https://github.com/williamcanin/gosync-html.git "mysite"; cd mysite
```

* 2 - Installing **Go!Sync HTML** dependencies :

```shell
$ npm install
```

### Building

* Use the command below to compile your project:

```shell
$ gulp build
```

or

```shell
$ $(npm bin)/gulp build
```

Note: Your website will be compiled into the folder `public` by default.

### Starting local server

* The command below you start a local server with [Browser Sync](https://www.browsersync.io) (for development):

```shell
$ gulp serve
```

or

```shell
$ $(npm bin)/gulp serve
```

> Note 1: For more gulp tasks, use `gulp --tasks`.
> Note 2: There is no need to compile and then start the server.

### Donation

If you liked my work, buy me a coffee <3

[![paypal](https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=C4EEL62SFHZS4&source=url)

### License

[MIT License](https://github.com/williamcanin/gosync-html/blob/main/LICENSE) © William Canin
