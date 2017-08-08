var exec = require('cordova/exec');

exports.coolMethod = function(arg0, success, error) {
    exec(success, error, "cordova-plugin-gouhudong", "coolMethod", [arg0]);
};

exports.showToast = function(arg0, success, error) {
    exec(success, error, "cordova-plugin-gouhudong", "showToast", [arg0]);
};
