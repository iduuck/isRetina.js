## isRetina.js

isRetina.js is a very little snippet for bower and npm to check if the client is using a [retina display](http://www.webopedia.com/TERM/R/retina_display.html).

### Installation

You can either use bower or npm.js to install this little neat snippet (otherwise you could also just copy it into your folder and require or just include it in your browser file).

#### Using Bower

If you are using the snippet with bower you should be sure that bower is already installed on your device and then run this line of script.

```
bower install --save isRetina.js
```

#### Using NPM.js

If you are using the snippet with bower you should be sure that bower is already installed on your device and then run this line of script.

```
npm install --save isRetina.js
```

### Usage

If you already [installed](#installation) isRetina.js, be sure to use on of the following methods to include the library in your project (if you are using bower + browserify, please use the `debowerify` transform for browserify):

#### Using [Common.js](https://nodejs.org/docs/latest/api/modules.html)

```
var isRetina = require('isRetina');
```

#### Using [ECMAScript 6 Modules](http://www.2ality.com/2014/09/es6-modules-final.html)

```
import isRetina from 'isRetina';
```


### Contributing

Please fork this project and make a pull request. **Only work in `isRetina.babel.js` and then run `gulp minify` !!!**
