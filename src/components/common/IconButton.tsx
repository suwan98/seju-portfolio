interface Props {
  icon: React.ReactNode;
  name: string;
}

function IconButton({icon, name}: Props) {
  return (
    <>
      <button className="flex items-center border rounded-2xl p-3 bg-highlight shadow-sm text-white">
        {icon}
        <span className="pl-2">{name}</span>
      </button>
    </>
  );
}

export default IconButton;
