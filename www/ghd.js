var exec = require('cordova/exec');

var ghdPlugin = function () {

}

ghdPlugin.prototype.errorCallback = function (msg) {
    alert('ghdPlugin callback error:' + msg)
}

ghdPlugin.prototype.callNative = function (name, args, sCallback, eCallback) {
    if (eCallback) {
        exec(sCallback, this.errorCallback, 'ghd', name, args)
    } else {
        exec(sCallback, eCallback, 'ghd', name, args)
    }
}

ghdPlugin.prototype.showToast = function (msg, sCallback, eCallback) {
    this.callNative('showToast', [msg], sCallback, eCallback)
}


// ghdPlugin.prototype.showToast = function (msg, sCallback, eCallback) {
//     exec(sCallback, eCallback, "ghd", "showToast", [msg]);
// }
//
// ghdPlugin.prototype.coolMethod = function (msg, sCallback, eCallback) {
//     exec(sCallback, eCallback, "ghd", "coolMethod", [msg]);
// }

// exports.coolMethod = function(arg0, success, error) {
//     exec(success, error, "ghd", "coolMethod", [arg0]);
// };
// exports.showToast = function(arg0, success, error) {
//     exec(success, error, "ghd", "showToast", [arg0]);
// };

if (!window.plugins) {
    window.plugins = {}
}

if (!window.plugins.ghd) {
    window.plugins.ghd = new ghdPlugin();
}

module.exports = new ghdPlugin();