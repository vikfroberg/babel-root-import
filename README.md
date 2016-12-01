# Babel Root Import
Babel plugin to add the opportunity to use `import` and `require` with root based paths.

## Example
```javascript
// Usually
import SomeExample from '../../../some/example.js';
const OtherExample = require('../../../other/example.js');

// With Babel-Root-Importer
import SomeExample from '@appname/some/example.js';
const OtherExample = require('@appname/other/example.js');
```

## Install
```
npm install babel-root-import --save-dev
```

## Use
Add a `.babelrc` file and write:
```javascript
{
  "plugins": [
    ["babel-root-import"]
  ]
}

```
or pass the plugin with the plugins-flag on CLI
```
babel-node myfile.js --plugins babel-root-import
```

## Extras
### Custom root-path-suffix
If you want a custom root because for example all your files are in the src/js folder you can define this in your `.babelrc` file
```javascript
{
  "plugins": [
    ["babel-root-import", {
      "rootPathPrefix": "@appname",
      "rootPathSuffix": "./src"
    }]
  ]
}
```

### Multiple custom prefixes and suffixes
You can supply an array of the above. The plugin will try each prefix/suffix pair in the order they are defined.
```javascript
{
  "plugins": [
    ["babel-root-import", [{
      "rootPathPrefix": "@app",
      "rootPathSuffix": "./src/app"
    }, {
      "rootPathPrefix": "@lib",
      "rootPathSuffix": "./src/lib"
    }, {
      "rootPathPrefix": "@test",
      "rootPathSuffix": "./src/test"
    }]]
  ]
}
```

## FYI
Webpack delivers a similar feature, if you just want to prevent end-less import strings you can also define `aliases` in the `resolve` module, at the moment it doesn't support custom/different symbols and multiple/custom suffixes.
[READ MORE](http://xabikos.com/2015/10/03/Webpack-aliases-and-relative-paths/)
