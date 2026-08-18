import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { MarkdownCopyButton } from 'fumadocs-ui/layouts/docs/page';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import defaultMdxComponents, { createRelativeLink } from 'fumadocs-ui/mdx';
import { LatestRelease } from '@/components/LatestRelease';
import { Icon } from '@/components/Icon';
import { DiscordIcon } from '@/components/DiscordIcon';
import { ViewOptions } from '@/components/PageActions';
import { source } from '@/lib/source';
import pageActionsManifest from '@/lib/page-actions-manifest.json';

interface PageParams {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function Page({ params }: PageParams) {
  const { slug } = await params;
  const page = await source.getPage(slug);

  if (!page) {
    notFound();
  }

  const MDXContent = page.data.body;
  const actions = (pageActionsManifest as Record<string, { markdown: string; github: string }>)[page.url];

  return (
    <DocsPage
      toc={page.data.toc}
      tableOfContent={{
        enabled: true,
        style: 'clerk'
      }}
      full={page.data.full}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-2">{page.data.description}</DocsDescription>
      {actions && (
        <div className="flex flex-row flex-wrap items-center gap-2 border-b pb-6 mb-4">
          <MarkdownCopyButton markdownUrl={actions.markdown} />
          <ViewOptions
            markdownUrl={actions.markdown}
            githubUrl={`https://github.com/pyrelightmc/pyrelightmc.github.io/blob/main/${actions.github}`}
          />
        </div>
      )}
      <DocsBody>
        <MDXContent
          components={{
            ...defaultMdxComponents,
            a: createRelativeLink(source, page),
            Tabs,
            Tab,
            Card,
            Cards,
            Step,
            Steps,
            Accordion,
            Accordions,
            LatestRelease,
            Icon,
            DiscordIcon
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const page = await source.getPage(slug);

  if (!page) return {};

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
