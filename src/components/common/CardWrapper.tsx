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
      border relative rounded-2xl bg-neutral-100 min-w-[60vw] max-w-[80vw] h-auto max-h-full flex flex-col items-center py-12 text-neutral-800 ${justify} ${className} 
      mobile:px-16`}
        {...props}>
        {children}
      </div>
    </>
  );
}

export default CardWrapper;
