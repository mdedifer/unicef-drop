import Link from "next/link";

interface GlowButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  color?: "cyan" | "violet" | "pink";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
}

const colorMap = {
  cyan: {
    bg: "bg-neon-cyan/10",
    border: "border-neon-cyan/50",
    text: "text-neon-cyan",
    hover: "hover:bg-neon-cyan/20 hover:border-neon-cyan",
    shadow: "hover:shadow-[0_0_25px_#00f5ff44]",
  },
  violet: {
    bg: "bg-neon-violet/10",
    border: "border-neon-violet/50",
    text: "text-neon-violet",
    hover: "hover:bg-neon-violet/20 hover:border-neon-violet",
    shadow: "hover:shadow-[0_0_25px_#a855f744]",
  },
  pink: {
    bg: "bg-neon-pink/10",
    border: "border-neon-pink/50",
    text: "text-neon-pink",
    hover: "hover:bg-neon-pink/20 hover:border-neon-pink",
    shadow: "hover:shadow-[0_0_25px_#ff008044]",
  },
};

const sizeMap = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function GlowButton({
  href,
  onClick,
  children,
  color = "cyan",
  size = "md",
  disabled = false,
  type = "button",
  className = "",
}: GlowButtonProps) {
  const c = colorMap[color];
  const s = sizeMap[size];
  const base = `inline-flex items-center justify-center font-display font-bold tracking-wider uppercase border rounded-md transition-all duration-300 ${c.bg} ${c.border} ${c.text} ${c.hover} ${c.shadow} ${s} ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  );
}
