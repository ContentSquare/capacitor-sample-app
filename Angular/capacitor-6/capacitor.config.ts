import { CapacitorConfig } from '@capacitor/cli';
let config: CapacitorConfig;
const baseConfig: CapacitorConfig = {
  appId: 'com.contentsquare.capacitor.testapp',
  appName: 'testing-app-cap',
  webDir: 'www',
    server: {
    androidScheme: 'https'
  },
  loggingBehavior: 'debug',
};

const qaConfig: CapacitorConfig = {
  appId: 'com.contentsquare.capacitor.testapp.qa',
  appName: 'testing-app-cap-qa',
  webDir: 'www',
  loggingBehavior: 'debug',
};

switch (process.env['NODE_ENV']) {
  case 'qa':
    config = {
      ...qaConfig,
      ios: {
        scheme: 'App QA',
        contentInset: 'automatic',
        webContentsDebuggingEnabled: true,
      },
      android: {
        flavor: 'qa',
        webContentsDebuggingEnabled: true,
      },
    };
    break;
  default:
    config = {
      ...baseConfig,
      ios: {
        scheme: 'App',
        webContentsDebuggingEnabled: true,
      },
      android: {
        flavor: 'dev',
        webContentsDebuggingEnabled: true,
      },
    };
    break;
}

export default config;

