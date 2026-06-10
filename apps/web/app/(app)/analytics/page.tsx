import { PageHeader } from '@/components/layout/page-header';
import { StatCard } from '@/components/layout/stat-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const articles = [
  { title: 'Customer story: Acme Corp', clicks: 1240, impressions: 18400, position: 4.2, score: 88 },
  { title: 'Publishing calendar playbook', clicks: 890, impressions: 12200, position: 6.1, score: 84 },
  { title: 'SEO brief template guide', clicks: 2100, impressions: 28900, position: 3.8, score: 91 },
];

const leaderboard = [
  { name: 'Priya N.', words: 42800, score: 87 },
  { name: 'Sarah K.', words: 38200, score: 82 },
  { name: 'Marcus L.', words: 31500, score: 79 },
];

export default function AnalyticsPage() {
  return (
    <>
      <PageHeader
        title="Analytics"
        description="GSC + GA4 performance per article"
      />

      <div className="mb-8 grid gap-4 sm:grid-cols-4">
        <StatCard label="Total clicks" value="12.4k" sub="Last 28 days" />
        <StatCard label="Impressions" value="186k" sub="Google Search Console" />
        <StatCard label="Avg position" value="5.2" sub="Across tracked URLs" />
        <StatCard label="Lede score" value="84" sub="Composite weekly metric" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Article performance</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted">
                  <th className="pb-3 font-medium">Article</th>
                  <th className="pb-3 font-medium">Clicks</th>
                  <th className="pb-3 font-medium">Impressions</th>
                  <th className="pb-3 font-medium">Position</th>
                  <th className="pb-3 font-medium">Score</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((a) => (
                  <tr key={a.title} className="border-b border-border/50">
                    <td className="py-3 font-medium">{a.title}</td>
                    <td className="py-3 font-mono">{a.clicks.toLocaleString()}</td>
                    <td className="py-3 font-mono">{a.impressions.toLocaleString()}</td>
                    <td className="py-3 font-mono">{a.position}</td>
                    <td className="py-3 font-mono text-accent">{a.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team leaderboard</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {leaderboard.map((w, i) => (
              <div key={w.name} className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/10 font-mono text-sm font-bold text-accent">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <p className="font-medium">{w.name}</p>
                  <p className="text-xs text-muted">{w.words.toLocaleString()} words published</p>
                </div>
                <span className="font-mono text-sm text-accent">{w.score}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
