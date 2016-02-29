'use strict';

var winston = require('winston');
var vsprintf = require('sprintf-js').vsprintf;
var sprintf = require('sprintf-js').sprintf;
var utilColors = require('cli-color');
var nodeUtil = require('util');
var util = require('./util');
var createPE = require('./pe').createPE;

var Transport = winston.Transport;

/**
 * @param  {Object}  opts
 * @param  {Object}  [opts.level='info']
 * @param  {Object}  [opts.colorize=true]
 * @param  {Object}  [opts.timestamp=true]
 * @param  {String}  [opts.stderrLevel='warn']
 * @param  {Object<String, Number>}  opts.colors
 * @param  {Object<String, String>}  opts.levels
 * @param  {Object}  opts.pe  the config of pretty-error
 * @param  {String}  opts.pe.projectDir  The root path of this project
 * @param  {String}  [opts.pe.themeColor='red']  Optional value: 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'
 * @param  {Boolean}  [opts.pe.colorize=true]  whether output colorfully in terminal
 * @method Console
 */
function Console(opts) {
    var self = this;

    opts = util.defaults({}, opts, {
        level: 'info',
        colorize: true,
        timestamp: true,
        stderrLevel: 'warn',
        indentation: 4,
    });
    opts.pe = util.defaults(opts.pe, {
        themeColor: 'red',
        colorize: opts.colorize,
    });

    Transport.call(self, opts);

    self.pe = createPE(opts.pe);
    self.opts = opts;
}
nodeUtil.inherits(Console, Transport);

Console.prototype.name = 'Pretty-Console';

Console.prototype.prettyErrorStack = function(error) {
    return this.pe.render(error);
};

Console.prototype.log = function(level, msg, meta, callback) {
    var self = this;
    var opts = self.opts;

    var args = [level, msg];
    var format = '[%s] %s';
    var output, errorStack, d, localeTimeString;

    if (util.isPlainObject(meta)) {
        errorStack = meta.errorStack;
        if (errorStack) {
            meta = util.omit(meta, 'errorStack');
        }
        format = format + ' with meta: %s';
        meta = JSON.stringify(meta, null, opts.indentation);
        args.push(meta);

        if (errorStack) {
            errorStack = self.prettyErrorStack({
                message: msg,
                stack: errorStack,
            });
            format = format + ' with ErrorStack:\n%s';
            args.push(errorStack);
        }
    }

    if (opts.timestamp) {
        format = '[%s] ' + format;
        d = new Date();
        localeTimeString = sprintf(
            '%d-%02d-%02d %02d:%02d:%02d.%03d',
            d.getFullYear(), d.getMonth() + 1, d.getDate(),
            d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()
        );
        args.unshift(localeTimeString);
    }

    if (opts.colorize) {
        format = utilColors[opts.colors[level]](format);
    }

    output = vsprintf(format, args);

    var levels = opts.levels;
    if (levels[level] <= levels[opts.stderrLevel]) {
        process.stderr.write(output + '\n');
    } else {
        process.stdout.write(output + '\n');
    }

    // Emit the `logged` event immediately because the event loop
    // will not exit until `process.stdout` has drained anyway.
    self.emit('logged');
    callback(null, true);
};

module.exports = Console;