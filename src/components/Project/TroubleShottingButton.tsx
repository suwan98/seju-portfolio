
import Link from "next/link";

interface Props {
  filePath: string;
}


function TroubleShottingButton({filePath}: Props) {
  return (
    <>
      <Link
        href={`/trouble/${filePath}`}
        className="p-4 mt-8 hover:scale-105 delay-75 ease-linear transition-transform text-center font-jalnan text-xl  hover:text-rose-500">
        <span>🚨</span>
        <span>트러블 슈팅 보러가기</span>
      </Link>
    </>
  );
}

export default TroubleShottingButton;
