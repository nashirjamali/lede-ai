import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  return (
    <Card className="border-border/80 shadow-elevated">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl">Welcome back</CardTitle>
        <CardDescription>Sign in to your Lede workspace</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <Button variant="outline" className="w-full" type="button">
          Continue with Google
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-3 font-mono text-[10px] uppercase tracking-widest text-muted">
              or
            </span>
          </div>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@company.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button className="w-full" type="submit">
            Sign in
          </Button>
        </form>
        <div className="text-center text-sm">
          <button type="button" className="text-accent transition-colors hover:text-ink">
            Send magic link instead
          </button>
        </div>
        <p className="text-center text-sm text-muted">
          No account?{' '}
          <Link href="/auth/register" className="font-medium text-ink transition-colors hover:text-accent">
            Create one
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
