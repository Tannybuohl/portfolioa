import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Section({
  children,
  className,
  id,
  containerSize = "xl",
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

