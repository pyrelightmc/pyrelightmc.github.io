import { type ReactNode } from 'react';

interface LatestReleaseProps {
  version: string;
  date: string;
  children: ReactNode;
}

export function LatestRelease({ version, date, children }: LatestReleaseProps) {
  return (
    <div className="not-prose rounded-lg border border-white/10 bg-white/[0.02] p-6 mb-8">
      <span className="inline-flex items-center gap-2 rounded-md bg-green-500/10 px-2.5 py-1 text-xs font-semibold text-green-400">
        Latest
      </span>
      <h3 className="mt-3 text-xl font-bold text-white">{version}</h3>
      <p className="mt-1 text-sm text-white/50">{date}</p>
      <div className="mt-4 prose prose-invert">{children}</div>
    </div>
  );
}
