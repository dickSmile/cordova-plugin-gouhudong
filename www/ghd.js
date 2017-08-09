var exec = require('cordova/exec');

var ghd = function () {

}

ghd.prototype.showToast = function (msg) {
    exec(null, null, "ghd", "showToast", [msg]);
}

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
    window.plugins.ghd = new ghd()
}

module.exports = new ghd();