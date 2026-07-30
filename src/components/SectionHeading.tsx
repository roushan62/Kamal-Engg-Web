import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  const centered = align === "center";

  return (
    <div className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className={dark ? "eyebrow-light" : "eyebrow"}>
            <span className={`h-px w-7 ${dark ? "bg-safety-400" : "bg-safety-600"}`} />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className={`h-section mt-4 ${dark ? "!text-white" : ""} balance`}>{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.15}>
          <p className={`lead mt-5 ${dark ? "!text-steel-400" : ""} ${centered ? "mx-auto" : ""} pretty`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
