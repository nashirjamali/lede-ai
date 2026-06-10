import { mockBrief } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BriefPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <p className="mb-1 font-mono text-xs uppercase tracking-wider text-accent">SEO Brief</p>
        <h1 className="font-display text-2xl font-bold">{mockBrief.primaryKeyword}</h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-muted">Search volume</p>
            <p className="font-display text-xl font-bold">{mockBrief.searchVolume.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-muted">Difficulty</p>
            <p className="font-display text-xl font-bold">{mockBrief.keywordDifficulty}/100</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-muted">Target words</p>
            <p className="font-display text-xl font-bold">{mockBrief.targetWordCount.toLocaleString()}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Keywords</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-3 text-sm text-muted">
            Primary: <span className="font-mono text-foreground">{mockBrief.primaryKeyword}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {mockBrief.semanticKeywords.map((kw) => (
              <Badge key={kw} className="font-mono">
                {kw}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Suggested outline</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {mockBrief.headings.map((h, i) => (
            <p
              key={i}
              className="font-display text-foreground"
              style={{ paddingLeft: h.level === 3 ? '1.5rem' : 0 }}
            >
              {h.level === 2 ? 'H2' : 'H3'} · {h.text}
            </p>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top SERP competitors</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted">
                <th className="pb-2 font-medium">#</th>
                <th className="pb-2 font-medium">URL</th>
              </tr>
            </thead>
            <tbody>
              {mockBrief.competitors.map((c) => (
                <tr key={c.url} className="border-b border-border/50">
                  <td className="py-2 font-mono text-muted">{c.position}</td>
                  <td className="py-2 font-mono text-brand">{c.url}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
