import {
  createPlugin,
  createComponentExtension,
} from '@backstage/core-plugin-api';

export const IbutsuPlugin = createPlugin({
  id: 'ibutsu',
});

export const EntityIbutsuContent = IbutsuPlugin.provide(
  createComponentExtension({
    name: 'EntityIbutsuContent',
    component: {
      lazy: () => import('./components/IbutsuComponent').then(m => m.IbutsuComponent),
    },
  }),
);
