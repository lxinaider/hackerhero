import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Clock,
  Cpu,
  Globe,
  Heart,
  Shield,
  Star,
  Zap,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const quizzes = [
  {
    id: 1,
    title: "Meu Corpo é Especial",
    description: "Aprenda sobre respeito e cuidado com você mesmo.",
    questions: 10,
    minutes: 6,
    tag: "Corpo",
    icon: Shield,
    className: "bg-[#2E4057] text-[#C8D8E8]",
    accentClassName: "bg-[#3a5070]",
    badgeClassName: "bg-[#C8D8E8]/20 text-[#C8D8E8]",
  },
  {
    id: 2,
    title: "Segredos que Pesam",
    description:
      "Alguns segredos ficam guardados demais. Veja quando contar ajuda.",
    questions: 8,
    minutes: 5,
    tag: "Sentimentos",
    icon: Heart,
    className: "bg-[#3D4F3A] text-[#C9DBC6]",
    accentClassName: "bg-[#4a6045]",
    badgeClassName: "bg-[#C9DBC6]/20 text-[#C9DBC6]",
  },
  {
    id: 3,
    title: "Pessoas de Confiança",
    description: "Quem são os adultos que podemos chamar quando precisamos?",
    questions: 10,
    minutes: 7,
    tag: "Confiança",
    icon: Star,
    className: "bg-[#4A3F5C] text-[#D4CCE8]",
    accentClassName: "bg-[#5a4d70]",
    badgeClassName: "bg-[#D4CCE8]/20 text-[#D4CCE8]",
  },
  {
    id: 4,
    title: "Quando Algo Parece Errado",
    description: "Confie no seu sentimento e saiba o que fazer.",
    questions: 12,
    minutes: 8,
    tag: "Limites",
    icon: Zap,
    className: "bg-[#4F3A3A] text-[#E8C8C8]",
    accentClassName: "bg-[#624848]",
    badgeClassName: "bg-[#E8C8C8]/20 text-[#E8C8C8]",
  },
  {
    id: 5,
    title: "Pedir Ajuda é Legal",
    description: "Falar com alguém de confiança é sempre uma boa ideia.",
    questions: 8,
    minutes: 5,
    tag: "Confiança",
    icon: Globe,
    className: "bg-[#4D4E41] text-[#E8E4C9]",
    accentClassName: "bg-[#5e5f50]",
    badgeClassName: "bg-[#E8E4C9]/20 text-[#E8E4C9]",
  },
  {
    id: 6,
    title: "Todo Mundo Tem Limites",
    description:
      "Respeitar o espaço do outro e o seu próprio é muito importante.",
    questions: 10,
    minutes: 7,
    tag: "Limites",
    icon: Cpu,
    className: "bg-[#5C4A2A] text-[#E8D9B5]",
    accentClassName: "bg-[#705c36]",
    badgeClassName: "bg-[#E8D9B5]/20 text-[#E8D9B5]",
  },
];

export default function Page() {
  return (
    <div className="flex min-h-dvh p-6 overflow-clip">
      <div className="flex flex-col gap-4 text-sm leading-loose w-full">
        <Header />

        <div className="relative size-full flex flex-col justify-between items-center gap-2">
          <div className="w-full flex flex-col gap-6">
            {/* Section header */}
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-1">
                  Escolha um tema
                </p>
                <h2 className="text-2xl font-extrabold font-serif leading-tight">
                  Quizzes disponíveis
                </h2>
              </div>
              <span className="text-xs text-muted-foreground">
                {quizzes.length} quizzes
              </span>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {quizzes.map((quiz) => {
                const Icon = quiz.icon;
                return (
                  <Link
                    href={`/quiz/${quiz.id}`}
                    key={quiz.id}
                    className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 rounded-2xl"
                  >
                    <div
                      className={cn(
                        "relative flex flex-col justify-between gap-4 rounded-3xl p-5 h-48 overflow-hidden",
                        "transition-all duration-300 ease-out",
                        "group-hover:scale-[1.025] group-hover:-translate-y-0.5",
                        "group-hover:shadow-xl",
                        quiz.className,
                      )}
                    >
                      {/* Texture overlay */}
                      <div
                        className="absolute inset-0 mix-blend-overlay opacity-30 bg-no-repeat bg-cover pointer-events-none"
                        style={{ backgroundImage: "url(/cbimage.avif)" }}
                      />

                      {/* Decorative circle */}
                      <div
                        className={cn(
                          "absolute -right-6 -top-6 w-28 h-28 rounded-full opacity-30",
                          quiz.accentClassName,
                        )}
                      />

                      {/* Top row */}
                      <div className="relative flex items-start justify-between">
                        <div
                          className={cn(
                            "flex items-center justify-center w-9 h-9 rounded-xl",
                            quiz.accentClassName,
                          )}
                        >
                          <HugeiconsIcon
                            icon={quiz.icon}
                            size={18}
                            strokeWidth={1.8}
                          />
                        </div>
                      </div>

                      {/* Bottom */}
                      <div className="relative flex flex-col gap-1">
                        <h3 className="font-bold text-lg leading-tight">
                          {quiz.title}
                        </h3>
                        <p className="text-sm opacity-70 leading-snug line-clamp-2">
                          {quiz.description}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center gap-3 mt-1 opacity-60 text-xs">
                          <span className="flex items-center gap-1">
                            <HugeiconsIcon
                              icon={BookOpen}
                              size={11}
                              strokeWidth={2.5}
                            />
                            {quiz.questions} perguntas
                          </span>
                          <span className="flex items-center gap-1">
                            <HugeiconsIcon
                              icon={Clock}
                              size={11}
                              strokeWidth={2.5}
                            />
                            {quiz.minutes} min
                          </span>
                        </div>
                      </div>

                      {/* Arrow hint on hover */}
                      <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-lg">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
