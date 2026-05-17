import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import PerspectiveBook from "@/components/perspective-book";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex flex-col gap-4 text-sm leading-loose w-full">
        <Header />

        <div className="relative size-full flex flex-col justify-between items-center gap-2 text-center">
          <div className="flex flex-col items-center gap-2 m-auto h-full w-full">
            <div className="flex flex-wrap gap-6 w-full"></div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
