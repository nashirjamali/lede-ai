import { PageHeader } from '@/components/layout/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function NewArticlePage() {
  return (
    <>
      <PageHeader
        title="New article"
        description="Set up metadata and kick off your SEO brief"
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Article details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="How to scale content ops for B2B SaaS" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input id="slug" placeholder="scale-content-ops-b2b-saas" className="font-mono" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="assignee">Assignee</Label>
              <Input id="assignee" placeholder="Sarah K." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Target audience, angle, internal links..." />
            </div>
          </CardContent>
        </Card>
        <Card className="lede-card-raised">
          <CardHeader>
            <CardTitle>SEO brief kickoff</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="keyword">Seed keyword</Label>
              <Input id="keyword" placeholder="content marketing workflow" className="font-mono" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Target country</Label>
              <Input id="country" placeholder="US" className="font-mono w-24" />
            </div>
            <p className="text-sm text-muted">
              Lede will fetch SERP data and generate a full brief with keywords, competitor
              analysis, and a suggested outline.
            </p>
            <Button className="w-full">Create article & generate brief</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
