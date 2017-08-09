package cordova-plugin-gouhudong;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class echoes a string called from JavaScript.
 */
public class ghd extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("coolMethod")) {
            String message = args.getString(0);
            this.coolMethod(message, callbackContext);
            return true;
        } else if (action.equals("showToast")) {
            this.showToast(args.getString(0), callbackContext)
        }
        return false;
    }

    private void showToast(String message, CallbackContext callbackContext) {
        Toast.makeText(activity, message, Toast.LENGTH_SHORT).show();
        return true;
    }

    private void coolMethod(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}
