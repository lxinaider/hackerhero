import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="relative flex items-center justify-between gap-4 mb-4">
      <Link href="/" className="flex relative items-center gap-2">
        <h1 className="relative text-4xl font-extrabold font-serif ml-14">
          SoftEduc
        </h1>
        <img
          src="/smile.svg"
          alt="Smiling face"
          className="absolute w-12 left-0"
        />
      </Link>

      <div className="w-full" />
      <Button className="text-sm font-semibold rounded-full p-6 border border-primary/30 bg-linear-to-b from-primary to-primary/60">
        Login
        <span className="sr-only">Login</span>
      </Button>
    </header>
  );
}
