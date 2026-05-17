import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import PerspectiveBook from "@/components/perspective-book";
import { cn } from "@/lib/utils";

const books = [
  {
    title: "O Carrinho Vermelho",
    className: "bg-[#4F3A3A] text-[#E8C8C8]",
    image: "/car.png",
  },
  {
    title: "Falar Sempre Ajuda",
    className: "bg-[#4D4E41] text-[#E8E4C9]",
    image: "",
  },
  {
    title: "Quem Posso Chamar?",
    className: "bg-[#5C4033] text-[#E8D5C4]",
  },
  {
    title: "Segredos que Ficam Pesados",
    className: "bg-[#2E4057] text-[#C8D8E8]",
  },
  {
    title: "Não Precisa Guardar Sozinho",
    className: "bg-[#3D4F3A] text-[#C9DBC6]",
  },
  {
    title: "Minha Voz Importa",
    className: "bg-[#4A3F5C] text-[#D4CCE8]",
  },
  {
    title: "Pedir Ajuda é Ser Forte",
    className: "bg-[#5C4A2A] text-[#E8D9B5]",
  },
  {
    title: "Todo Mundo Tem um Espaço",
    className: "bg-[#2A4A4A] text-[#B5D9D9]",
  },
  /* {
    title: "História 8",
    className: "bg-[#4F3A3A] text-[#E8C8C8]",
  },
  { title: "História 9", className: "bg-[#3A4A2E] text-[#D0E0C0]" },
  {
    title: "História 10",
    className: "bg-[#2E3A50] text-[#BCC8DC]",
  },
  {
    title: "História 11",
    className: "bg-[#503A2E] text-[#DCCCC0]",
  },
  { title: "História 12", className: "bg-[#404040] text-[#D0D0D0]" }, */
];

const stickers = [
  "/hello.svg",
  "/kindness.svg",
  "/happy.svg",
  "/smile_sticker.svg",
];

const stickersPositions = [
  { bottom: "35px", right: "35px" },
  { bottom: "35px", left: "35px" },
];

const bookStickers = books.map(() => Math.random() < 0.5);

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex flex-col gap-4 text-sm leading-loose w-full">
        <Header />

        <div className="relative size-full flex flex-col justify-between items-center gap-2">
          <div className="w-full flex flex-col gap-6">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-1">
                  Escolha um tema
                </p>
                <h2 className="text-2xl font-extrabold font-serif leading-tight">
                  Histórias disponíveis
                </h2>
              </div>
              <span className="text-xs text-muted-foreground">
                {books.length} quizzes
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 m-auto h-full w-full">
              <div className="flex flex-wrap gap-6 w-full md:justify-start justify-center">
                {books.map((book, index) => (
                  <div key={index}>
                    <a href={`/historia/${index}`} key={index}>
                      <PerspectiveBook
                        className={cn(book.className, "justify-start h-full")}
                        textured
                      >
                        <div className="flex flex-col h-full justify-between">
                          <div className="flex flex-col gap-4">
                            <h2 className="font-semibold text-xl font-serif leading-6">
                              {book.title}
                            </h2>
                          </div>
                          {book.image && (
                            <div className="relative w-full h-32 rounded-lg overflow-hidden">
                              <img
                                src={book.image}
                                alt={book.title}
                                className="w-full h-full object-scale-down"
                              />

                              <img
                                src="/cbimage.avif"
                                alt=""
                                className="absolute mix-blend-hard-light rotate-180 opacity-90 brightness-110 bg-no-repeat bg-cover pointer-events-none"
                              />
                            </div>
                          )}

                          {bookStickers[index] && (
                            <img
                              src={stickers[index % stickers.length]}
                              alt="Smiling face"
                              className="w-12 -mb-6 -mr-6 absolute"
                              style={
                                stickersPositions[
                                  index % stickersPositions.length
                                ]
                              }
                            />
                          )}
                        </div>
                      </PerspectiveBook>
                    </a>
                    <h1 className="text-center mt-2 text-sm font-medium text-muted-foreground">
                      {book.title}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
