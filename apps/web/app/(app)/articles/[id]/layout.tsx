import { ArticleSidebar } from '@/components/layout/article-sidebar';

export default async function ArticleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="-mx-6 -my-8 flex min-h-[calc(100vh-3.5rem)]">
      <ArticleSidebar
        articleId={id}
        title="How to scale content ops for B2B SaaS"
        status="DRAFT"
      />
      <div className="flex-1 overflow-auto p-8">{children}</div>
    </div>
  );
}
