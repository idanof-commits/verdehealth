import * as React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
};

export function Button({ className = "", variant = "solid", ...props }: Props) {
  const base = "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-colors";
  const solid = "bg-[#4CAF50] text-white hover:bg-[#43A047] border border-transparent";
  const outline = "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200";
  const cls = `${base} ${variant === "outline" ? outline : solid} ${className}`;
  return <button className={cls} {...props} />;
}
export default Button;
