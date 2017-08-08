var exec = require('cordova/exec');

exports.coolMethod = function(arg0, success, error) {
    exec(success, error, "ghd", "coolMethod", [arg0]);
};
exports.showToast = function(arg0, success, error) {
    exec(success, error, "ghd", "showToast", [arg0]);
};
