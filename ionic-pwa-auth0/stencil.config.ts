import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  outputTargets: [ {
    // baseUrl: 'http://127.0.0.1:8080/',
    type: 'www',
    serviceWorker: null
  }],
};
