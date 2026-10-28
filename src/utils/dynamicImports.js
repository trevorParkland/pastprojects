import loadable from '@loadable/component';

export const AsyncImport = loadable(
  ({ path, component }) => import(`${path}/${component}`),
  {
    cacheKey: ({ path, component }) => `${path}/${component}`,
  }
);
