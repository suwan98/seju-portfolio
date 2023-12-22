interface Props {
  children: React.ReactNode;
  justify?: string;
  className?: string;
}

function CardWrapper({
  children,
  justify = `justify-center`,
  className = "",
  ...props
}: Props) {
  return (
    <>
      <div
        className={`
      border relative rounded-2xl bg-neutral-100 min-w-[75vw] min-h-[25vh] flex items-center py-12 text-neutral-800  ${justify} ${className}
      `}
        {...props}>
        {children}
      </div>
    </>
  );
}

export default CardWrapper;
