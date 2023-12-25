import Link from "next/link";

interface Props {
  title: string;
}

function TroubleShottingButton({title}: Props) {
  return (
    <>
      <Link
        href={`/trouble/${title}`}
        className="w-1/2 p-4 mt-8 hover:scale-105 delay-75 ease-linear transition-transform rounded-2xl shadow-sm text-center  bg-buttonHighlight text-lg font-suitSemiBold hover:bg-neutral-200">
        <button className=" text-neutral-700 ">트러블 슈팅 보러가기!</button>
      </Link>
    </>
  );
}

export default TroubleShottingButton;
