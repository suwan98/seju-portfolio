const PROJECT_LIST = [
  {
    id: 1,
        title: "기술 블로그",
    projectImageSource : ['/assets/image/projectSource/image1.jpg'],
    core: "nextjs의 useTheme을 사용 해 다크모드/라이트모드 기능을 구현했습니다. Intersection Observer를 통해 게시글 내 목차기능을 구현했습니다. Google Analytics 연동을 통해 웹 데이터를 분석할 수 있게됬습니다. 검색엔진 최적화를 통해 사용자에게 양질의 컨텐츠를 웹에서 확인할 수 있도록 노력습니다. UI를 고려한 반응형 레이아웃을 구성했습니다. ",
    descrption: "기존 블로그를 작성 시에 불편했던 점이 많아 이걸 개선해보고자 Nextjs를 활용 해 만든 개인 기술블로그입니다. nextjs를 실제 처음 사용해보는 개인프로젝트여서 여러가지 난관이 존재했지만, 제손으로 직접 커스텀이 가능한 블로그를 만들었다는 점에서 의미있습니다. 해당 프로젝트를 진행하며 공식문서로만 봐왔던 nextjs의 라우팅, CSR, SSR, SSG의 개념에 대해 더 이해할 수 있게되었고 그걸 실제로 활용가능했던 경험이라 더욱 뜻깊게 다가오는 프로젝트입니다 ",
    baseURL: "https://www.seju.blog/",
    techStack: [],
    isTeamProject: false,
  },
  {
    id: 2,
    title: "너 T야? T력 테스트",
    projectImageSource : [],
    core: "외부 API를 사용해 테스트 결과를 사용자가 공유할 수 있도록 만들었습니다. 전역 상태 관리 라이브러리 Recoil을 사용 해 애플리케이션의 다크모드/라이트 모드를 구현했습니다.",
    descrption: "요즘 유행하는 MBTI 밈 중 너 T야? 라는 아이디어에서 시작한 개인프로젝트입니다. 해당 웹애플리케이션을 통해 사용자의 T수치를 분석하고 결과를 공유할 수 있도록 개발했습니다. 또한 백엔드솔루션 중 하나인 Firebase를 통해 데이터를 저장하고 데이터를 읽어오는 작업을 통해 NoSQL의 편리함을 경험했습니다",
    baseURL: "https://tt-est-u88s.vercel.app/",
    techStack: [],
    isTeamProject: false,
  },
  {
    id: 3,
      title: "JIJO-Cafe",
      projectImageSource : [],
    core: " 로그인/회원가입 기능 구현, 로그인/회원가입 시 Validation, 카카오맵 API를 통한 맵 렌더링 및 검색 필터링",
    descrption: "멋쟁이사자처럼에서 1개월동안 진행했던 리액트 파이널프로젝트 지조카페입니다. 프로젝트 시 팀리드를 담당했고 카카오맵 API를 통해 사용자에게 매장정보를 찾고, 이를 화면에 렌더링해줄 수 있다는게 힘들었지만 값진 경험이였습니다. 또한 로그인/회원가입과정은 Zustand 전역상태 관리 라이브러리를 통해 구성했는데, 이과정을 통해 로그인/로그아웃 과정과 그 과정 내에선 어떤일이 일어나는지, 또 소셜로그인 기능을 개발하며 OAuth2에 대한 이해도도 향상되었던 프로젝트 였습니다. React-query를 통해 데이터를 패칭하고 또 패칭한 데이터를 캐싱하는 과정에 대해서도 학습했었던 프로젝트입니다.",
    baseURL: "https://cafe-jijo.vercel.app/findStore",
    techStack: [],
    isTeamProject: true,
  },
  {
    id: 4,
    title: "포트폴리오",
    projectImageSource : [],
    core: "framer-motion을 통한 다양한 애니메이션 구현, 재사용성이 가능한 컴포넌트 구축 및 설계, Github Action을 통한 CI/CD 파이프라인 구축, AWS EC2 인스턴스 생성 및 프로젝트 배포 경험",
    descrption: "Nextjs를 통해 정적인 포트폴리오 웹사이트를 구현했어요.",
    baseURL: "",
    techStack: [],
    isTeamProject: false,
  },
];

export default PROJECT_LIST;
