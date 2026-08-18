import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createElement } from 'react';
// `lucide-react`'s own named `icons` export is a legacy lookup map that only
// covers ~1600 of its ~5400 icons (e.g. it's missing `CircleHelp`) — importing
// the full namespace instead means every icon the package ships resolves here.
// The namespace also carries a few non-component exports (e.g.
// `createLucideIcon`), so the indexed value is cast to `LucideIcon` rather
// than trusting the union TypeScript infers from every key.
import * as icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// `loader()` also assign a URL to your pages
// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) {
      return
    }

    if (icon in icons) {
      return createElement(icons[icon as keyof typeof icons] as LucideIcon);
    }
  },
});

