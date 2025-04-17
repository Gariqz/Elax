/* Next.js login page using Hero UI, AOS, and Lenis */

'use client';

import { useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import Lenis from '@studio-freight/lenis';
import RevokeAccessDialog from '@/ui/alert';

export default function LoginPage() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-between p-8">
      {/* Left section with promo text and image */}
      <div
        className="md:w-1/2 text-center md:text-left space-y-6"
        data-aos="fade-right"
      >
        <h1 className="text-4xl font-bold text-gray-900">
          Get your fashion done with <span className="text-blue-600">Elax</span>
        </h1>
        <p className="text-gray-600 max-w-md">
          We provide you the best quality of clothes from around the world that suit the most recent trends.
        </p>
        <Button className="bg-black text-white hover:bg-gray-800 rounded-xl px-6 py-2">
          Shop now
        </Button>
      </div>

      {/* Right section with login card */}
      <div
        className="md:w-1/2 max-w-md w-full mt-10 md:mt-0"
        data-aos="fade-left"
      >
        <Card className="shadow-lg">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Login</h2>
            <Input placeholder="No. Handphone/Username/Email" type="text" />
            <Input placeholder="Password" type="password" />
            <div className="text-right">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Lupa Password?
              </a>
            </div>
            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
              Login
            </Button>
            <div className="text-center text-gray-500 text-sm">ATAU</div>
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-full">
                Facebook
              </Button>
              <Button variant="outline" className="w-full">
                Google
              </Button>
            </div>
            <p className="text-sm text-center text-gray-600">
              Baru di Elax? <a href="#" className="text-blue-600 hover:underline">Daftar</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
