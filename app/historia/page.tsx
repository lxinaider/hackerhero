import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import PerspectiveBook from "@/components/perspective-book";
import { cn } from "@/lib/utils";

const books = [
  {
    title: "História 1",
    className: "bg-[#4D4E41] text-yellow-300",
    image: "/background.jpg",
  },
  {
    title: "História 2",
    image: "/cat.svg",
    className: "bg-yellow-800 text-white",
  },
  {
    title: "História 3",
    className: "bg-blue-900 text-white",
  },
  {
    title: "História 1",
    className: "bg-[#4D4E41] text-yellow-300",
    image: "/background.jpg",
  },
  {
    title: "História 2",
    image: "/cat.svg",
    className: "bg-yellow-800 text-white",
  },
  {
    title: "História 3",
    className: "bg-blue-900 text-white",
  },
  {
    title: "História 1",
    className: "bg-[#4D4E41] text-yellow-300",
    image: "/background.jpg",
  },
  {
    title: "História 2",
    image: "/cat.svg",
    className: "bg-yellow-800 text-white",
  },
  {
    title: "História 3",
    className: "bg-blue-900 text-white",
  },
  {
    title: "História 1",
    className: "bg-[#4D4E41] text-yellow-300",
    image: "/background.jpg",
  },
  {
    title: "História 2",
    image: "/cat.svg",
    className: "bg-yellow-800 text-white",
  },
  {
    title: "História 3",
    className: "bg-indigo-900 text-white",
  },
];

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex flex-col gap-4 text-sm leading-loose w-full">
        <Header />

        <div className="relative size-full flex flex-col justify-between items-center gap-2 text-center">
          <div className="flex flex-col items-center gap-2 m-auto h-full w-full">
            <div className="flex flex-wrap gap-6 w-full">
              {books.map((book, index) => (
                <a href={`/historia/${index}`} key={index}>
                  <PerspectiveBook
                    className={cn(book.className, "justify-start h-full")}
                    textured
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div className="flex flex-col gap-4">
                        <h2 className="font-semibold leading-4">
                          {book.title}
                        </h2>
                      </div>
                      {book.image && (
                        <div className="relative w-full h-32 rounded-lg overflow-hidden">
                          <img
                            src={book.image}
                            alt={book.title}
                            className="w-full h-full bg-background object-cover"
                          />

                          <img
                            src="/cbimage.avif"
                            alt=""
                            className="absolute mix-blend-hard-light rotate-180 opacity-50 brightness-110 bg-no-repeat bg-cover pointer-events-none"
                          />
                        </div>
                      )}
                    </div>
                  </PerspectiveBook>
                </a>
              ))}
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
