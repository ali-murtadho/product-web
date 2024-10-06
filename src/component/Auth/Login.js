'use client';

import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

export function LoginComponent() {
  return (
    <Card className="max-w-sm mr-auto ml-auto mt-10">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Link to="/" className="text-blue-500 font-serif text-sm font-bold">
            Sudah Punya akun
          </Link>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
}
