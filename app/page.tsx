import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Book, BookOpen, Quiz05Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-svh overflow-hidden p-6">
      <div className="flex flex-col gap-4 text-sm leading-loose w-full">
        <Header />

        <div className="relative size-full flex flex-col justify-between items-center gap-2 text-center">
          <div className="flex flex-col items-center gap-2 m-auto">
            <h1 className="relative text-9xl font-extrabold font-serif -m-6">
              SoftEduc
              <img
                src="/sparkle.svg"
                alt="Smiling face"
                className="w-16 top-0 -right-16 absolute"
              />
            </h1>
            <p className="text-lg text-balance text-muted-foreground">
              Conscientização e educação
            </p>
            <div className="flex flex-row gap-4">
              <a
                href="/historia"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "text-sm font-semibold rounded-full p-6 mt-4 border border-primary/30 bg-linear-to-b from-primary to-primary/60",
                )}
              >
                <HugeiconsIcon icon={BookOpen} strokeWidth={2} /> Histórias
                <span className="sr-only">Histórias</span>
              </a>
              <a
                href="/quiz"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "text-sm font-semibold rounded-full p-6 mt-4 border border-primary/30 bg-linear-to-b from-primary to-primary/60",
                )}
              >
                <HugeiconsIcon icon={Quiz05Icon} strokeWidth={2} /> Quizes
                <span className="sr-only">Quizes</span>
              </a>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
