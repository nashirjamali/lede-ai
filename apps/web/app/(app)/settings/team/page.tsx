import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const members = [
  { name: 'Sarah Kim', email: 'sarah@acme.com', role: 'Owner' },
  { name: 'Marcus Lee', email: 'marcus@acme.com', role: 'Admin' },
  { name: 'Priya Nair', email: 'priya@acme.com', role: 'Reviewer' },
];

export default function TeamSettingsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Invite member</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-3">
          <div className="flex-1 space-y-2">
            <Label htmlFor="invite-email">Email</Label>
            <Input id="invite-email" type="email" placeholder="colleague@company.com" />
          </div>
          <div className="flex items-end">
            <Button>Send invite</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Members</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted">
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Email</th>
                <th className="pb-3 font-medium">Role</th>
                <th className="pb-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {members.map((m) => (
                <tr key={m.email} className="border-b border-border/50">
                  <td className="py-3 font-medium">{m.name}</td>
                  <td className="py-3 text-muted">{m.email}</td>
                  <td className="py-3">
                    <select className="lede-select h-9 w-32 text-xs">
                      <option>{m.role}</option>
                    </select>
                  </td>
                  <td className="py-3 text-right">
                    {m.role !== 'Owner' && (
                      <button type="button" className="text-xs text-danger hover:underline">
                        Remove
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
