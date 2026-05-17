import Link from "next/link";

export function Header() {
  return (
    <div className="w-full h-24">
      <header className="fixed backdrop-blur-2xl rounded-full p-4 flex items-center justify-between gap-4 z-50">
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
      </header>
    </div>
  );
}
