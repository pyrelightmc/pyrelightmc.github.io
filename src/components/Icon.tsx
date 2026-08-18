import { type ReactNode, createElement } from 'react';
import { icons } from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const iconKey = name
    .split(/[-/\s]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('') as keyof typeof icons;

  const LucideIcon = icons[iconKey];
  if (!LucideIcon) return null;

  return createElement(LucideIcon, { className }) as ReactNode;
}
