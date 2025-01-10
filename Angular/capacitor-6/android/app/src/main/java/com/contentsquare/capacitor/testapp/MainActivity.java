package com.contentsquare.capacitor.testapp;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Logger;

import java.io.File;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    this.createQAJavascriptBridge();
  }
  private void createQAJavascriptBridge(){
    this.getBridge().getWebView().addJavascriptInterface(new QAJavaScriptBridge(this), "QAJSBridge");

  }

  private class QAJavaScriptBridge {
    private Context mContext;
    private SharedPreferences sharedPreferences;
    private static final String TRACKING_TAG_FILE_NAME = "csd_tracking_tag.js";
    private static final String TAG_ID = "tagId";
    private static final String CAP_PLUGIN_PREFS = "CapPluginPrefs";

    public QAJavaScriptBridge(Context context) {
      mContext = context;
      sharedPreferences = mContext.getSharedPreferences(CAP_PLUGIN_PREFS, Context.MODE_PRIVATE);
    }

    @JavascriptInterface
    public void deleteLocalTagId() {
      if(sharedPreferences.getString(TAG_ID, null) != null){
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.remove(TAG_ID);
        editor.apply();
        Toast.makeText(mContext, "Local Tag Id removed", Toast.LENGTH_SHORT).show();
        Logger.debug("CSLIBCAP", "Local TagId Removed");
      } else {
        Toast.makeText(mContext, "No Local Tag Id found", Toast.LENGTH_SHORT).show();
        Logger.debug("CSLIBCAP", "No Local Tag Id found");
      }
    }

    @JavascriptInterface
    public void deleteLocalTrackingTag() {
      deleteLocalFile(TRACKING_TAG_FILE_NAME);
    }

    private void deleteLocalFile(String fileName) {
      File file = new File(mContext.getFilesDir(), fileName);
      if (file.exists()) {
        if (file.delete()) {
          Toast.makeText(mContext, "File deleted: " + fileName, Toast.LENGTH_SHORT).show();
          Logger.debug("CSLIBCAP", "File deleted: " + fileName);
        } else {
          Toast.makeText(mContext, "Failed to delete file: " + fileName, Toast.LENGTH_SHORT).show();
          Logger.error("CSLIBCAP", "Failed to delete file: " + fileName, new Throwable());
        }
      } else {
        Toast.makeText(mContext, "File does not exist: " + fileName, Toast.LENGTH_SHORT).show();
        Logger.debug("CSLIBCAP", "File does not exist: " + fileName);
      }
    }
  }


}
