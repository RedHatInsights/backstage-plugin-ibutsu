import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { IbutsuPlugin, EntityIbutsuContent } from '../src/plugin';

createDevApp()
  .registerPlugin(IbutsuPlugin)
  .addPage({
    element: <EntityIbutsuContent />,
    title: 'Root Page',
    path: '/ibutsu',
  })
  .render();
