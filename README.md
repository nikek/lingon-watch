# lingon-watch

A [Lingon](https://github.com/jpettersson/lingon) plugin that watches your source files and simply runs **lingon build** everytime you save!

## Usage

Include lingon-watch in your projects packets.json

```JSON
"dependencies": {
    "lingon": "<version>",
    "lingon-watch": "<version>",
    ...
}
```


 lingon.js.

```JavaScript
var lingon = require('lingon'),
    lingonWatch = require('lingon-watch');

lingonWatch(lingon);

```

## Contributions

Please do create issues for bugs and feature requests. If you also solve the issue yourself, please send a pull request. It's very welcomed!

## License

Licensed under the MIT license.