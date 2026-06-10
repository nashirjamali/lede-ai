import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { plans } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export default function RegisterPage() {
  return (
    <Card className="border-border/80 shadow-elevated">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl">Create your workspace</CardTitle>
        <CardDescription>Start with a free Starter plan — upgrade anytime</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your name</Label>
            <Input id="name" placeholder="Sarah Kim" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="org">Organisation name</Label>
            <Input id="org" placeholder="Acme Content Co." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Work email</Label>
            <Input id="email" type="email" placeholder="you@company.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <div className="space-y-2">
            <Label>Choose a plan</Label>
            <div className="grid grid-cols-2 gap-2">
              {plans.map((plan) => (
                <label
                  key={plan.name}
                  className={cn(
                    'cursor-pointer rounded-md border border-border p-3 text-left transition-all hover:border-ink/20 has-[:checked]:border-accent has-[:checked]:bg-accent/5 has-[:checked]:shadow-card',
                  )}
                >
                  <input
                    type="radio"
                    name="plan"
                    value={plan.name}
                    defaultChecked={plan.name === 'Starter'}
                    className="sr-only"
                  />
                  <span className="font-display text-sm font-semibold">{plan.name}</span>
                  <span className="block font-mono text-[11px] text-muted">{plan.price}/mo</span>
                </label>
              ))}
            </div>
          </div>
          <Button className="w-full" type="submit">
            Create workspace
          </Button>
        </form>
        <p className="text-center text-sm text-muted">
          Already have an account?{' '}
          <Link href="/auth/login" className="font-medium text-ink transition-colors hover:text-accent">
            Sign in
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
