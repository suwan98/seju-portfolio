interface Props {
  descrption: string;
  core: string;
  isTeamProject: boolean;
  baseURL: string;
}

function ProjectDescrption({descrption, core, isTeamProject, baseURL}: Props) {
  return (
    <>
      <div>{descrption}</div>
    </>
  );
}

export default ProjectDescrption;
