import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function BillingSettingsPage() {
  return (
    <div className="space-y-6">
      <Card className="lede-card-raised">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Pro plan</CardTitle>
              <CardDescription>$49/month · 5 seats</CardDescription>
            </div>
            <Badge variant="brand">Active</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={42000} max={100000} label="AI words this month" />
          <p className="text-sm text-muted">3 of 5 seats used · 24 of 100 articles</p>
          <Button variant="outline">Manage in Stripe</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upgrade</CardTitle>
          <CardDescription>Need more seats, words, or CMS integrations?</CardDescription>
        </CardHeader>
        <CardContent>
          <Button>View plans</Button>
        </CardContent>
      </Card>
    </div>
  );
}
