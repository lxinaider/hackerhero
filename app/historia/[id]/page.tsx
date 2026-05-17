"use client";

import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const paragraphs = [
  {
    text: "Zael tinha um carrinho vermelho brilhante — seu favorito.",
    sub: "Todo dia no recreio, ele brincava feliz debaixo da árvore grande do pátio.",
  },
  {
    text: 'Um dia, Stef chegou e disse: "Me dá esse carrinho."',
    sub: 'Zael não queria, mas Stef olhou bem nos seus olhos e falou BAIXINHO: "Se não der, conto pra todo mundo que você chorou e todo mundo vai rir de você."',
    quote: true,
  },
  {
    text: "O coração de Zael apertou.",
    sub: "Com medo e com vergonha, ele entregou o carrinho. Stef saiu sorrindo. Zael ficou parado, olhando o chão.",
    image: "/image.png",
  },
  {
    text: "No resto do dia Zael ficou quieto e não contou pra ninguém.",
    sub: "Ele sentiu que tinha feito algo errado…",
  },
  {
    text: "…mas na verdade, quem errou foi Stef.",
    highlight: true,
  },
];

export default function StoryPage() {
  return (
    <div className="flex min-h-dvh p-6 overflow-clip">
      <div className="flex flex-col gap-4 text-sm leading-loose w-full">
        <Header />

        <div className="relative size-full flex flex-col justify-between items-center gap-2">
          <div className="flex flex-col gap-10 w-full max-w-lg mx-auto">
            {/* Back link + title */}
            <div className="flex flex-col gap-2">
              <Link
                href="/historia"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                <ArrowLeft size={14} />
                Voltar às histórias
              </Link>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  História
                </span>
                <h1 className="text-2xl font-extrabold font-serif leading-tight">
                  O Carrinho Vermelho
                </h1>
              </div>
            </div>

            {/* Story image */}
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <img
                src="/car.png"
                alt="Ilustração de um carrinho vermelho"
                className="object-scale-down w-full h-full bg-muted p-5"
              />
            </div>

            {/* Story paragraphs */}
            <div className="flex flex-col gap-12">
              {paragraphs.map((p, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex flex-col gap-2",
                    p.highlight && "items-center text-center py-6",
                  )}
                >
                  <p
                    className={cn(
                      "font-serif leading-relaxed",
                      p.highlight
                        ? "text-2xl font-extrabold"
                        : "text-lg font-semibold",
                    )}
                  >
                    {p.text}
                  </p>

                  {p.sub && (
                    <p
                      className={cn(
                        "text-base leading-relaxed text-muted-foreground",
                        p.quote &&
                          "border-l-2 border-muted-foreground/30 pl-4 italic",
                      )}
                    >
                      {p.sub}
                    </p>
                  )}

                  {p.image && (
                    <div className="relative w-full h-48 rounded-lg overflow-hidden">
                      <img
                        src={p.image}
                        alt="Ilustração relacionada ao parágrafo"
                        className="object-scale-down w-full h-full bg-muted p-5"
                      />
                    </div>
                  )}

                  {i < paragraphs.length - 1 && (
                    <div className="mt-4 w-8 h-px bg-muted-foreground/20" />
                  )}
                </div>
              ))}
            </div>

            {/* End CTA */}
            <div className="flex flex-col gap-3 py-8 items-center text-center border-t border-muted-foreground/10">
              <Link
                href="/quiz/1"
                className={cn(
                  buttonVariants(),
                  "flex items-center gap-2 rounded-full font-semibold",
                )}
              >
                Fazer o quiz sobre esta história
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
