import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'geolocation-with-airplane-mode',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
