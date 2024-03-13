import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'capacitor5-sample-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
