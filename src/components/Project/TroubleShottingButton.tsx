import Link from "next/link";

interface Props {
  filePath: string;
  title: string;
}

function TroubleShottingButton({filePath, title}: Props) {
  return (
    <>
      <Link
        href={`/trouble/${filePath}`}
        className="p-4 mt-8 hover:scale-105 delay-75 ease-linear transition-transform text-center font-jalnan text-xl  hover:text-rose-500">
        <span>👀 더 자세한 {title} 프로젝트의 트러블 슈팅은?</span>
      </Link>
    </>
  );
}

export default TroubleShottingButton;
