type AttendeeBadgeProps = {
  label: string;
};

const dotCount = 4;

export function AttendeeBadge({ label }: AttendeeBadgeProps) {
  return (
    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/10 bg-primary/10 py-3 pr-4 pl-3 backdrop-blur-[10px]">
      <div className="flex items-center">
        {Array.from({ length: dotCount }).map((_, index) => (
          <span
            key={index}
            className="-ml-2 size-8 rounded-full border-2 border-black bg-gradient-to-br from-primary/70 to-primary/20 first:ml-0"
            style={{ zIndex: dotCount - index }}
          />
        ))}
      </div>
      <p className="font-button text-sm font-medium tracking-[-0.02em] text-accent-foreground uppercase">
        {label}
      </p>
    </div>
  );
}
