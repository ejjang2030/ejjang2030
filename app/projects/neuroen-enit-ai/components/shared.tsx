import classNames from "classnames";

export const contentWrap = "mx-auto w-full max-w-[1180px] px-10 max-md:px-5";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={classNames(
        "text-xs font-bold tracking-[.2em] text-accent",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        "rounded-xl border border-line bg-surface",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Arrow() {
  return (
    <span className="font-mono text-lg text-accent" aria-hidden="true">
      →
    </span>
  );
}

export function DetailBlock({
  title,
  children,
  highlighted = false,
}: {
  title: string;
  children: React.ReactNode;
  highlighted?: boolean;
}) {
  return (
    <div
      className={classNames(
        highlighted && "rounded-lg border border-line bg-background p-5",
      )}
    >
      <strong className={classNames("text-sm", !highlighted && "text-accent")}>
        {title}
      </strong>
      <div className="mt-2 text-sm leading-7 text-muted">{children}</div>
    </div>
  );
}
