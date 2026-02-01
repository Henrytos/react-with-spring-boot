import type { HtmlHTMLAttributes } from "react";

export function Title({ children }: HtmlHTMLAttributes<HTMLHeadingElement>) {
  return <h1 className="text-2xl font-bold">{children}</h1>;
}
