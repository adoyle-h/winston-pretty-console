# winston-pretty-console
![Node Version][Node Version Image]
[![Npm Package Version][Npm Package Version Image]][Npm Package Version LINK]
[![License][License Image]][License LINK]
![NodeJS Package Dependencies][NodeJS Package Dependencies Link]
[![Build Status][Build Status Image]][Build Status Link]
[![Code Climate][Code Climate Image]][Code Climate Link]
[![Test Coverage][Test Coverage Image]][Test Coverage Link]

A [winston][] transport based on cli-color, pretty-error for pretty console output


## TOC

<!-- MarkdownTOC -->

- [Installation](#installation)
- [Quick Start](#quick-start)
- [API](#api)
- [Versioning](#versioning)
- [Copyright and License](#copyright-and-license)

<!-- /MarkdownTOC -->


<a name="installation"></a>
## Installation

```bash
npm install --save winston-pretty-console
```

<a name="quick-start"></a>
## Quick Start

```js
var winston = require('winston');
var options = {};
winston.add(require('winston-pretty-console'), options);
```

or

```js
var winstonPrettyConsole = require('winston-pretty-console');
var options = {};
var logger = new(winston.Logger)({
    transports: [new(winstonPrettyConsole)(options)]
});
```

<a name="api"></a>
## API

see http://adoyle.me/winston-pretty-console/

<a name="versioning"></a>
## Versioning

The versioning follows the rules of SemVer 2.0.0.

**BUT**, anything may have **BREAKING CHANGES** at **ANY TIME** when major version is zero (0.y.z), which is for initial development and the public API should not be considered stable.

For more information on SemVer, please visit http://semver.org/.

<a name="copyright-and-license"></a>
## Copyright and License

Copyright (c) 2016 ADoyle. The project is licensed under the **Apache License Version 2.0**.

See the [LICENSE][] file for the specific language governing permissions and limitations under the License.

See the [NOTICE][] file distributed with this work for additional information regarding copyright ownership.


<!-- Links -->

[LICENSE]: ./LICENSE
[NOTICE]: ./NOTICE

[winston]: https://github.com/winstonjs/winston

<!-- Badges links -->

[Node Version Image]: https://img.shields.io/node/v/winston-pretty-console.svg
[Npm Package Version Image]: https://img.shields.io/npm/v/winston-pretty-console.svg
[Npm Package Version LINK]: https://www.npmjs.com/package/winston-pretty-console
[License Image]: https://img.shields.io/npm/l/winston-pretty-console.svg
[License LINK]: https://github.com/adoyle-h/winston-pretty-console/blob/master/LICENSE
[NodeJS Package Dependencies Link]: https://david-dm.org/adoyle-h/winston-pretty-console.svg
[Build Status Image]: https://travis-ci.org/adoyle-h/winston-pretty-console.svg?branch=master
[Build Status Link]: https://travis-ci.org/adoyle-h/winston-pretty-console
[Code Climate Image]: https://codeclimate.com/github/adoyle-h/winston-pretty-console/badges/gpa.svg
[Code Climate Link]: https://codeclimate.com/github/adoyle-h/winston-pretty-console
[Test Coverage Image]: https://codeclimate.com/github/adoyle-h/winston-pretty-console/badges/coverage.svg
[Test Coverage Link]: https://codeclimate.com/github/adoyle-h/winston-pretty-console/coverage
