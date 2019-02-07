[![Claw Studios](https://pbs.twimg.com/profile_images/1081702613823967233/SeXAgWwO_200x200.jpg)](https://twitter.com/ClawStudiosOk)

# Angular + Laravel API

This project is a boilerplate created by Claw Studios to agilize the set up of an Angular + Laravel API based architecture. 

# Requirements
You need to fulfill Angular and Laravel requirements.

#### Angular 
- Node and NPM installed. [Official Documentation](https://angular.io/guide/setup#install-prerequisites)

#### Laravel
[Official Documentation Requirements](https://laravel.com/docs/5.7/installation)
- PHP >= 7.1.3
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
- Ctype PHP Extension
- JSON PHP Extension
- BCMath PHP Extension
- Composer Installed [Official Documentation](https://getcomposer.org/doc/00-intro.md)
 
# Installation


#### Install Angular-Cli
[Official Angular-Cli Documentation](https://cli.angular.io/)

```sh
$ npm install -g @angular/cli
```

#### Setup UI Project
```sh
$ cd ui
$ npm install
```

#### Install Laravel
[Official Laravel Documentation](https://laravel.com/docs/5.7/installation)

```sh
$ composer global require laravel/installer
```

#### Setup BE Project
```sh
$ cd be
$ composer install
```


# Local Development

#### UI Project
You can use the npm script:

```sh
$ cd ui
$ npm start
```
Or you can do:

```sh
$ cd ui
$ ng serve --configuration=cli
```

#### BE Project
For laravel you can serve the project like this:

```sh
$ cd be
$ php artisan serve
```


# Production Deployment

#### UI Project
You can use the npm script:

```sh
$ cd ui
$ npm build
```
Or you can do:

```sh
$ cd ui
$ ng build --configuration=production && cp -rf dist/* ../be/public/
```
* NOTE: We do not recommend to change output path (dist/) to be/public because Angular-cli will delete output path folder and then build, if this folder gets delted you will be missing some laravel files. 

#### BE Project
For laravel production deployment we recommend reading [Official Laravel Deployment Documentation](https://laravel.com/docs/5.7/deployment) since configuration may change depending on the server you are using.
