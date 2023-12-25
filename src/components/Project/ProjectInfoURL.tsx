import ProjectInfoTitle from "./ProjectInfoTitle";

interface Props {
  url: {
    gtihub: string;
    demo: string;
  };
}

function ProjectInfoURL({url}: Props) {
  const mapedURL = Object.entries(url);

  return (
    <div>
      <ProjectInfoTitle emoji="🌏" descriptionText="프로젝트 URL" />
      <ul className="flex flex-col pl-8 gap-3 mobile:items-center mobile:justify-center mobile:pl-0">
        {mapedURL.map(([key, value], index) => (
          <a
            key={index}
            href={value}
            target="_blank"
            className="underline underline-offset-4 text-blue-500 decoration-blue-400 hover:scale-110 transition-all  ease-in-out hover:text-blue-600 w-fit hover:decoration-blue-500">
            {`${key} 바로가기`}
          </a>
        ))}
      </ul>
    </div>
  );
}

export default ProjectInfoURL;
