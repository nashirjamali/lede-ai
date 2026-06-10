import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function AiSettingsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI persona</CardTitle>
        <CardDescription>
          Custom system prompt applied to all AI commands in this workspace
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="persona">System prompt</Label>
          <Textarea
            id="persona"
            rows={8}
            defaultValue="You are a senior content strategist writing for a B2B SaaS audience. Use clear, authoritative language. Prefer concrete examples over vague claims. Match The Economist's precision with a conversational edge."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="model">Default model</Label>
          <select id="model" className="lede-select w-full max-w-xs">
            <option>GPT-4o (quality)</option>
            <option>gpt-4o-mini (fast)</option>
          </select>
        </div>
        <Button>Save changes</Button>
      </CardContent>
    </Card>
  );
}
