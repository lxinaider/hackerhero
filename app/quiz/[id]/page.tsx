"use client";

import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

const quiz = {
  title: "Quando Algo Parece Errado",
  tag: "Limites",
  questions: [
    {
      text: "Se uma situação faz você se sentir desconfortável, qual atitude é mais segura?",
      options: [
        { label: "Guardar segredo", correct: false },
        { label: "Ignorar o sentimento", correct: false },
        { label: "Conversar com um adulto de confiança", correct: true },
        { label: "Continuar a conversa", correct: false },
      ],
      feedback: {
        correct:
          "Muito bem! Falar com alguém de confiança é sempre a melhor escolha quando algo parece errado.",
        wrong:
          "Seus sentimentos são importantes. Quando algo incomoda, conversar com um adulto de confiança sempre ajuda.",
      },
    },
  ],
};

type State = "idle" | "correct" | "wrong";

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [state, setState] = useState<State>("idle");
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);

  const question = quiz.questions[current];
  const isLast = current === quiz.questions.length - 1;

  function handleSelect(index: number) {
    if (state !== "idle") return;
    const correct = question.options[index].correct;
    setSelected(index);
    setState(correct ? "correct" : "wrong");
    if (correct) setScore((s) => s + 1);
  }

  function handleNext() {
    if (isLast) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setState("idle");
    }
  }

  if (done) {
    return (
      <div className="flex min-h-dvh p-6 overflow-clip">
        <div className="flex flex-col gap-4 text-sm leading-loose w-full">
          <Header />
          <div className="relative size-full flex flex-col justify-between items-center gap-2">
            <div className="flex flex-col items-center justify-center gap-6 m-auto text-center max-w-sm">
              <div className="text-6xl">🎉</div>
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-extrabold font-serif">
                  Você terminou!
                </h2>
                <p className="text-muted-foreground text-balance">
                  Você acertou{" "}
                  <span className="font-bold text-foreground">
                    {score} de {quiz.questions.length}
                  </span>{" "}
                  {quiz.questions.length === 1 ? "pergunta" : "perguntas"}.
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Button
                  className="rounded-full font-semibold"
                  onClick={() => {
                    setCurrent(0);
                    setSelected(null);
                    setState("idle");
                    setScore(0);
                    setDone(false);
                  }}
                >
                  Tentar novamente
                </Button>
                <Link
                  href="/quiz"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "rounded-full flex items-center gap-2",
                  )}
                >
                  <ArrowLeft /> Voltar aos quizzes
                </Link>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh p-6 overflow-clip">
      <div className="flex flex-col gap-4 text-sm leading-loose w-full">
        <Header />

        <div className="relative size-full flex flex-col justify-between items-center gap-2">
          <div className="flex flex-col gap-6 w-full max-w-lg mx-auto m-auto">
            {/* Back + progress */}
            <div className="flex items-center gap-3">
              <Link
                href="/quiz"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={18} />
              </Link>
              <div className="flex-1 h-1.5 rounded-full bg-accent overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{
                    width: `${((current + (state !== "idle" ? 1 : 0)) / quiz.questions.length) * 100}%`,
                  }}
                />
              </div>
              <span className="text-xs text-muted-foreground tabular-nums">
                {current + 1}/{quiz.questions.length}
              </span>
            </div>

            {/* Tag + title */}
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {quiz.tag}
              </span>
              <h1 className="text-xl font-extrabold leading-snug">
                {question.text}
              </h1>
            </div>

            {/* Options */}
            <div className="flex flex-col gap-3">
              {question.options.map((option, i) => {
                const isSelected = selected === i;
                const revealed = state !== "idle";

                let optionStyle =
                  "bg-accent text-foreground border border-transparent hover:border-primary/30";
                if (revealed && isSelected && option.correct)
                  optionStyle =
                    "bg-green-600 border-green-600/50 text-green-900";
                else if (revealed && isSelected && !option.correct)
                  optionStyle = "bg-red-500 border-red-600/50 text-red-900";
                else if (revealed && option.correct)
                  optionStyle =
                    "bg-green-600 border-green-600/50 text-green-900";
                else if (revealed)
                  optionStyle =
                    "bg-accent/50 text-muted-foreground border border-transparent";

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    disabled={revealed}
                    className={cn(
                      "flex items-center justify-between gap-3 w-full text-left px-5 py-4 rounded-2xl border text-sm font-medium transition-all duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                      !revealed && "active:scale-[0.98] cursor-pointer",
                      revealed && "cursor-default",
                      optionStyle,
                    )}
                  >
                    <span>{option.label}</span>
                    {revealed && isSelected && option.correct && (
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-green-900"
                      />
                    )}
                    {revealed && isSelected && !option.correct && (
                      <XCircle size={18} className="shrink-0 text-red-900" />
                    )}
                    {revealed && !isSelected && option.correct && (
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-green-900 opacity-60"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback + next */}
            {state !== "idle" && (
              <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <p
                  className={cn(
                    "text-sm text-balance px-4 py-3 rounded-2xl",
                    state === "correct"
                      ? "bg-green-500 border-green-600/50 text-green-900"
                      : "bg-amber-600 text-amber-900",
                  )}
                >
                  {state === "correct"
                    ? question.feedback.correct
                    : question.feedback.wrong}
                </p>
                <Button
                  className="rounded-full font-semibold self-end"
                  onClick={handleNext}
                >
                  {isLast ? "Ver resultado" : "Próxima"}
                  <ArrowRight size={16} />
                </Button>
              </div>
            )}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
