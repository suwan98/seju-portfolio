interface Props {
  title: string;
}

function SectionTitle({title}: Props) {
  const titleString = `<${title} />`;

  return (
    <>
      <div className="pb-4 text-3xl font-suitSemiBold text-highlight">
        {titleString}
      </div>
    </>
  );
}

export default SectionTitle;