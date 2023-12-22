// interface Props {
//     icon :
// }

function IconButton({icon, name}) {
  return (
    <>
      <button className="flex items-center border rounded-2xl p-2 bg-neutral-100 shadow-md">
        {icon}
        <span className="pl-2">{name}</span>
      </button>
    </>
  );
}

export default IconButton;
