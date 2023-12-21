interface Props {
  children: React.ReactNode;
  width?: string;
  height?: string;
  justify?: string;
  className?: string;
}

function CardWrapper({
  children,
  width,
  height,
  justify = `justify-center`,
  className = "",
  ...props
}: Props) {
  return (
    <>
      <div
        className={`
      border relative rounded-2xl bg-neutral-100 ${width} ${height} flex items-center ${justify} ${className}
      `}
        {...props}>
        {children}
      </div>
    </>
  );
}

export default CardWrapper;
