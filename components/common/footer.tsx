import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export function Footer() {
  return (
    <footer className="relative overflow-clip border mt-5 border-primary/30 h-fit w-full flex items-center justify-start px-5 py-6 bg-linear-to-b from-accent to-primary/60 bottom-0 rounded-3xl">
      <section
        className="flex flex-col flex-wrap items-start justify-center gap-0.5"
        style={{ maxHeight: "8rem" }}
      >
        {[
          "Política de privacidade",
          "Termos de uso",
          "Política de cookies",
          "Política de segurança",
          "Controle de consentimento",
          "Registro de tratamento de dados",
        ].map((label) => (
          <a
            href="#"
            key={label}
            className={cn(
              buttonVariants({ variant: "link", size: "sm" }),
              "font-medium leading-loose focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-transparent",
            )}
          >
            {label}
          </a>
        ))}
      </section>
      <img
        src="/bigflower.svg"
        alt="Big flower"
        className="absolute -bottom-8 -right-0 w-24"
      />
    </footer>
  );
}
