// import { Config } from '@stencil/core';

export const config = {
  namespace: 'stencil-with-angular',
  generateDistribution: true,
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
