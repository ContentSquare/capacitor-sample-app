import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.contentsquare.capacitor.sampleapp",
  appName: "testing-app-cap",
  webDir: "www",
  server: {
    androidScheme: "https",
  },
  loggingBehavior: "debug",
  ios: {
    webContentsDebuggingEnabled: true,
  },
  android: {
    webContentsDebuggingEnabled: true,
  },
};

export default config;
