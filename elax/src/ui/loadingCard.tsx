'use client';

import { useEffect, useState } from 'react';
import { Skeleton } from '@heroui/react';
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
  CardFooter
} from './card';

export default function LoadingCard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <Card className="w-[300px] space-y-5 p-4">
        <Skeleton className="rounded-lg">
          <div className="h-24 bg-default-300 rounded-lg" />
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 bg-default-200 rounded-lg" />
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 bg-default-200 rounded-lg" />
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 bg-default-300 rounded-lg" />
          </Skeleton>
        </div>
      </Card>
    );
  }

  return (
    <Card className="w-[300px] p-6 space-y-4">
      <CardHeader>
        <CardTitle>Welcome back 👋</CardTitle>
        <CardDescription>You're now logged in to Elax</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Here’s your dashboard preview after loading.
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">Powered by HeroUI + Elax ✨</p>
      </CardFooter>
    </Card>
  );
}
