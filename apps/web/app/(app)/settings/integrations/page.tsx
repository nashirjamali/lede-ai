import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const integrations = [
  { type: 'WordPress', label: 'Company blog', connected: true },
  { type: 'Webflow', label: 'Client portfolio', connected: true },
  { type: 'Ghost', label: null, connected: false },
  { type: 'Contentful', label: null, connected: false },
  { type: 'Webhook', label: null, connected: false },
];

export default function IntegrationsSettingsPage() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {integrations.map((int) => (
        <Card key={int.type}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{int.type}</CardTitle>
              {int.connected ? (
                <Badge variant="success">Connected</Badge>
              ) : (
                <Badge>Not connected</Badge>
              )}
            </div>
            {int.label && <CardDescription>{int.label}</CardDescription>}
          </CardHeader>
          <CardContent>
            <Button variant={int.connected ? 'outline' : 'default'} size="sm">
              {int.connected ? 'Disconnect' : 'Connect'}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
