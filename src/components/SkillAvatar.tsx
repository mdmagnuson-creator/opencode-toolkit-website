import type { Skill } from "@/data/types";

interface SkillAvatarProps {
  skill: Skill;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

// Skill type color schemes
const TYPE_STYLES = {
  regular: {
    bg: "bg-gradient-to-br from-teal-400 to-cyan-500 dark:from-teal-500 dark:to-cyan-600",
    text: "text-white",
    accent: "bg-teal-200/30 dark:bg-teal-400/20",
    icon: "🔧",
  },
  meta: {
    bg: "bg-gradient-to-br from-purple-400 to-fuchsia-500 dark:from-purple-500 dark:to-fuchsia-600",
    text: "text-white",
    accent: "bg-purple-200/30 dark:bg-purple-400/20",
    icon: "✨",
  },
};

// Size configurations
const SIZE_STYLES = {
  sm: {
    container: "h-10 w-10",
    text: "text-lg",
    icon: "text-base",
  },
  md: {
    container: "h-14 w-14",
    text: "text-xl",
    icon: "text-lg",
  },
  lg: {
    container: "h-20 w-20",
    text: "text-3xl",
    icon: "text-2xl",
  },
  xl: {
    container: "h-28 w-28",
    text: "text-4xl",
    icon: "text-3xl",
  },
};

// Get initials from skill name
function getInitials(name: string): string {
  // Remove common suffixes
  const cleanName = name
    .replace(/skill$/i, "")
    .replace(/generator$/i, "")
    .trim();
  
  const words = cleanName.split(/[\s-]+/);
  if (words.length === 1) {
    return words[0].substring(0, 2).toUpperCase();
  }
  return words
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

// Generate a deterministic pattern seed from the name
function getPatternSeed(name: string): number {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export function SkillAvatar({
  skill,
  size = "lg",
  className = "",
}: SkillAvatarProps) {
  const type = skill.isMeta ? "meta" : "regular";
  const style = TYPE_STYLES[type];
  const sizeStyle = SIZE_STYLES[size];
  const initials = getInitials(skill.name);
  const seed = getPatternSeed(skill.slug);

  // Generate pattern positions based on seed
  const patterns = [
    { x: (seed % 70) + 10, y: ((seed >> 4) % 70) + 10 },
    { x: ((seed >> 8) % 60) + 20, y: ((seed >> 12) % 60) + 20 },
  ];

  return (
    <div
      className={`relative flex items-center justify-center rounded-2xl ${style.bg} ${sizeStyle.container} ${className} shadow-lg overflow-hidden`}
    >
      {/* Decorative patterns */}
      <div
        className={`absolute rounded-full ${style.accent}`}
        style={{
          width: "60%",
          height: "60%",
          top: `${patterns[0].y}%`,
          left: `${patterns[0].x}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className={`absolute rounded-full ${style.accent}`}
        style={{
          width: "40%",
          height: "40%",
          top: `${patterns[1].y}%`,
          left: `${patterns[1].x}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Meta skill indicator */}
      {skill.isMeta && (
        <div className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-fuchsia-500 text-[10px] shadow-md ring-2 ring-white dark:ring-neutral-900">
          ✨
        </div>
      )}

      {/* Initials */}
      <span
        className={`relative z-10 font-bold ${style.text} ${sizeStyle.text} drop-shadow-sm`}
      >
        {initials}
      </span>
    </div>
  );
}

// Smaller inline badge version for lists
export function SkillAvatarBadge({
  skill,
  className = "",
}: {
  skill: Skill;
  className?: string;
}) {
  const type = skill.isMeta ? "meta" : "regular";
  const style = TYPE_STYLES[type];
  const initials = getInitials(skill.name);

  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-lg ${style.bg} text-xs font-bold ${style.text} shadow-sm ${className}`}
    >
      {initials}
    </div>
  );
}
