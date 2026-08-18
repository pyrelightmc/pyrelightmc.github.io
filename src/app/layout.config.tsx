import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpenIcon } from '@heroicons/react/24/solid';

/**
 * Shared layout configurations
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/pyrelight-logo.svg" alt="Pyrelight logo" className="w-7 h-7" />
        <span className="font-semibold">Pyrelight</span>
      </div>
    ),
  },
  links: [
    {
      icon: <BookOpenIcon className="w-4 h-4" />,
      text: 'Docs',
      url: '/docs/rlogin',
      active: 'nested-url',
    },
  ],
  githubUrl: 'https://github.com/pyrelightmc',
};
