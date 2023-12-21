interface Props {
  title: string;
}

function SectionTitle({title}: Props) {
  const titleString = `<${title} />`;

  return (
    <>
      <div className="pb-8 text-4xl font-suitBold text-highlight">
        <span className="">{titleString}</span>
      </div>
    </>
  );
}

export default SectionTitle;
