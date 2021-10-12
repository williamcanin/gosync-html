[Read in English](https://github.com/williamcanin/gosync-html/blob/master/README-en.md)

# Go!Sync HTML

[![NodeJS with Gulp](https://github.com/williamcanin/gosync-html/actions/workflows/npm-gulp.yml/badge.svg)](https://github.com/williamcanin/gosync-html/actions/workflows/npm-gulp.yml)

Simples boilerplate usando HTML puro com, [Gulp](http://gulpjs.com/), [Twitter Bootstrap](http://getbootstrap.com), e [Browser Sync](https://www.browsersync.io).

### Introdução

"Go!Sync HTML" facilita o desenvolver de projetos HTML's de uma forma em que o monitoramento de todas as alterações ocorridas em HTML's, Folhas de estilos e Javascripts são feitas automaticamente através de tarefas do [Gulp](http://gulpjs.com/), e [Browser Sync](https://www.browsersync.io). Uma facilidade pra esquecer o F5 do navegador e muitos mais. ;)


### *Como é o funcionamento do **Go!Sync HTML**?*

* Toda estrutura de arquivos HTML são minificadas por opção através do arquivo `config.json`. Você deve criar suas páginas dentro da pasta `src/templates`.

* Você cria as folhas de estilos com SASS que serão compiladas para CSS e minificadas automaticamente a cada alteração. Você deve criar suas folhas de estilos dentro de `src/scss`.

* Os JavaScripts são concatenados e minificados automaticamente a cada alteração também. Você deve criar seus scripts de Javascript dentro de `src/js`.


### Requerimentos

| Requerido       | Versão | Como verificar      | Como instalar  |
| --------------- | -------| ------------------- | -------------- |
| Git             | indiferente | `git --version`     | [Git](http://git-scm.com/) |
| Node            | >= 12.0 | `node -v`          | [Nodejs](http://nodejs.org/) |
| Npm             | indiferente | `npm --version`     | **Nodejs** contains **Npm** |
| Gulp            | >=4.0.0  | `gulp -v`           | [Gulp](http://gulpjs.com/) |

> Veja a documentação de cada requerimento para a instalação.

### Instalando

Após instalar todos requerimentos acima, faça os comando abaixo:

1 - Faz o clone do **Go!Sync HTML** e acesse a pasta:

```shell
$ git clone https://github.com/williamcanin/gosync-html.git "mysite"; cd mysite
```

* 2 - Instalando as dependências do **Go!Sync HTML**:

```shell
$ npm install
```

### Compilando

* Use o comando abaixo para compilar seu projeto:

```shell
$ gulp build
```

ou

```shell
$ $(npm bin)/gulp build
```

Nota: Seu site irá ser compilado na pasta `public` por padrão.

### Iniciando servidor local

* O comando abaixo você inicia um servidor local com o [Browser Sync](https://www.browsersync.io) (para desenvolvimento):

```shell
$ gulp serve
```

ou

```shell
$ $(npm bin)/gulp serve
```

> Nota 1: Para obter mais tarefas do gulp, use `gulp --tasks`.
> Nota 2: Não há necessidade de compilar e, em seguida, iniciar o servidor.

### Doação

Se você gostou do meu trabalho, me compre um café <3

[![paypal](https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=C4EEL62SFHZS4&source=url)

### Licença

[MIT License](https://github.com/williamcanin/gosync-html/blob/main/LICENSE) © William Canin
