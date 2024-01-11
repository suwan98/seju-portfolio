const PROJECT_LIST = [
  {
    id: 1,
    filePath: "seju-blog",
    title: "기술 블로그",
    projectImageSource: [
      "/assets/image/projectSource/next-blog/image1.png",
      "/assets/image/projectSource/next-blog/image2.png",
      "/assets/image/projectSource/next-blog/image3.png",
    ],
    core: "nextjs의 useTheme을 통해 다크모드/라이트모드 기능 구현. Intersection Observer를 통해 게시글 내 목차기능을 구현. Google Analytics 연동을 통해 웹 데이터 분석. SEO 최적화. UI를 고려한 반응형 레이아웃을 구성",
    descrption:
      "Nextjs 13버전 부터 폴더 기반 라우팅을 제공하는 App-Router를 사용할 수 있음을 알게됬습니다. ➡️ 이를 통해 페이지들에 대한 특정 Params로 구성한 다이대믹 라우팅을 구성했습니다. 게시글 내 목차 기능을 제공하기 위해 Intersection Observer API를 학습했습니다. ➡️ 이를 Custom hook으로 만들어 다양한 경우에서 Intersection Observer를 사용할 수 있음을 경험했습니다. generateMetadata 함수를 통해 metadata를 제공할 수 있고, 이를 적용시켰던 경험이 있습니다. sitemap과 robots 파일을 구성해 SEO를 최적화할 수 있음을 알게되었습니다. 프로젝트 내 구글 애널리틱스를 연동함으로써 사용자의 통계를 체계적으로 분석할 수 있음을 알게되었습니다.",
    problem: [
      "프로젝트 내 게시글 페이지에서 contentlayer를 통해 mdx 파일들을 html로 변환 후 렌더링 하던 중 다음과 같은 문제가 발생하여, 트러블슈팅하였습니다.",
      "마크다운들이 html로 변환되는 과정에서 tailwindcss의 유틸리티 클래스(@tailwind utilities;)로 인해 내부 마크다운 컨텐츠의 스타일들이 전부 초기화되는 문제였습니다.",
    ],
    problemImageSource: ["/assets/image/projectSource/next-blog/problem1.png"],
    solution: [
      "해결을 위해 두가지 방식을 적용해봤었습니다.",
      "1. 태그선택자들을 일일히 잡아 초기화하기",
      "그러나 이 방식은 문제점이 존재했었습니다.",
      "재사용성 부재",
      "유지보수 하기 어려움 (만약 새로운 태그들이 컨텐츠 내에 생성된다면 해당 태그에 대한 style도 일일히 적용시켜야 하기 때문입니다.)",
      "따라서 첫번째 방식보다 더 나은 방식이 없을까 고민하며 tailwindCSS 공식문서를 확인하는 중에 좋은 방법을 확인할 수 있게됬습니다.",
      "2. @tailwindcss/typography",
      " tailwindCSS는 마크다운을 렌더링하거나 CMS에서 가져온 HTML등에 대한 스타일을 제공해주는 @tailwindcss/typography가 있었습니다.",
      "이를 통해, 현재 구현하고자하는 마크다운의 부모 태그에 prose 클래스를 추가만 해주면 내부에 있는 모든 태그들이 알아서 정해진 스타일시트에 맞출 수 있게 됬습니다.",
      "@tailwindcss/typography 플러그인을 통해 첫번째 방식이 아닌 좀더 유연하게 반응형 또한 추가적으로 대응가능한 블로그 컨텐츠 게시글들을 렌더링할 수 있게되었습니다.",
    ],

    baseURL: {
      깃허브: "https://github.com/suwan98/seju-devlog",
      배포페이지: "www.seju.blog",
    },
    techStack: ["TypeScript", "Nextjs", "ContentLayer", "FramerMotion"],
    isTeamProject: false,
  },
  {
    id: 2,
    filePath: "t-test",
    title: "너 T야? T력 테스트",
    projectImageSource: [
      "/assets/image/projectSource/t-test/image1.png",
      "/assets/image/projectSource/t-test/image2.png",
      "/assets/image/projectSource/t-test/image3.png",
    ],
    core: "state와 react-router를 조합한 질문 페이지 클라이언트 사이드 렌더링. 전역 상태 관리 라이브러리 Recoil을 통한 애플리케이션의 다크모드/라이트 모드 구현. Firebase를 통한 데이터 구축. 렌더링 사용자가 선택한 결과들을 저장하기 위해 localStorage를 통해, 선택한 결과를 기반으로 점수가 증가 및 감소 기능 구현. 최종 결과를 다른 사람들에게도 공유할 수 있도록 하기 위해서 소셜 미디어 공유 기능 구현",
    descrption:
      "백엔드솔루션 중 하나인 Firebase를 통해 데이터를 저장하고 데이터를 읽어오는 작업을 통해 NoSQL의 편리함을 경험했습니다. Firebase를 프로젝트에 적용시키기 위해 다양한 설정들을 학습하고 구축 할 수 있었습니다. 해당 프로젝트는 처음으로 TypeScript를 도입한 의미있는 프로젝트였습니다. ➡️ 이로 인해 많은 TypeError를 마주했고, 다양한 타입 설정 방법들에 대해서 학습할 수 있었습니다. ➡️ 추가적으로 ts.config.json 파일들이 다양한 옵션들이 존재하고, 이를 필요에 맞게 적용시킬 수 있는 점을 경험했습니다. 중복되는 로직이 존재하는 컴포넌트를 어떤 방식으로 하면 추출 및 분리해 효과적으로 컴포넌트를 어떻게 구축할 수 있을까에 대한 고민을 하고 학습했습니다.",
    baseURL: {
      깃허브: "https://github.com/suwan98/TT-est",
      배포페이지: "https://tt-est-u88s.vercel.app/",
    },
    techStack: ["TypeScript", "React", "Firebase", "Recoil", "FramerMotion"],
    isTeamProject: false,
  },
  {
    id: 3,
    filePath: "cafe-jijo",
    title: "JIJO-Cafe",
    projectImageSource: [
      "/assets/image/projectSource/jijo-cafe/image1.png",
      "/assets/image/projectSource/jijo-cafe/image2.png",
      "/assets/image/projectSource/jijo-cafe/image3.png",
    ],
    core: "Team Leader. 프로젝트 기획. 원활한 협업을 위해 Github issue, Milestone, organization, 컨벤션 구성. 매장 찾기 페이지 제작. 로그인/회원가입 페이지 제작 및 기능 구현 ",
    descrption:
      "멋쟁이사자처럼에서 1개월동안 진행했던 리액트 파이널프로젝트 지조카페입니다. Tanstack Query의 캐싱기능을 통해, 사용자에게 동일한 데이터를 렌더링할 시 중복요청 제거하고 최종적으로 캐싱된 데이터를 사용자에게 보여줌으로 써 웹 페이지 로딩 속도 향상을 경험했습니다. OAuth2에 대한 개념과 이해를 했으며 이를 통해 소셜 로그인 기능을 구현했습니다. ➡️ 이 과정에서 로그인 및 회원과입 과정이 간소화되었고, 기존 회원가입하는 과정의 뎁스를 2에서 1로 감소시켰습니다. 로그인 과정에서 Validation 시, input 이벤트에서 사용자 입력에 대한 검증함수 요청이 너무 많이 발생해 성능적으로 이슈가 발생했습니다. ➡️ inputEvent에 대해서 debounce를 적용 시켜 잦은 이벤트를 최적화 시킬 수 있음을 경험했었습니다. 사용자 정보를 zustand를 통해 전역 상태로 저장하는 중에 새로고침 시 상태가 초기화되는 이슈를 발견했습니다. ➡️ zustantd의 persist middleware를 통해 상태를 storage에 상태를 저장할 수 있음을 새롭게 알게됬습니다.  프로젝트 빌드 후 최종적인 UI가 사용자에게 전달되기 까지 시간이 너무 많이 소요됬습니다. ➡️ 따라서 프로젝트 내 성능최적화의 필요성을 느꼈고, 프로젝트 성능최적화를 진행했습니다. ➡️ 최종적으로 성능 최적화를 통해  Lighthouse 기반 성능점수 31점에서 98점까지의 성능개선 경험했습니다.",
    problem: [
      "Zustand로 store를 정의 후 전역적으로 Auth의 상태를 관리하던 중 로그인 단계에서 다음과 같은 오류가 발생하여, 트러블슈팅하였습니다.",
      "로그인 컴포넌트에서 로그인을 두번 클릭해야 로그인 되는 현상이였습니다.",
      "발생 이유는 로그인 시 처음 user 변수로 설정해두었던 Authr 상태가 로그인 함수를 호출 후 AuthStore에서 즉시 상태가 업데이트 되지않아 Cannot read properites of null(reading ‘username’)에러가 발생했습니다.",
    ],
    problemImageSource: ["/assets/image/projectSource/jijo-cafe/problem1.png"],
    solution: [
      "문제에 대한 원인을 분석하던 도중 리액트 공식문서에서 스냅샷같은 상태 문서가 떠올랐습니다.",
      "Zustand 라이브러리는 내부적으로 React의 useState 훅을 사용합니다. ",
      "그러므로 작동 방식은 동일하게 되는데, 사용자가 로그인 버튼을 눌러 실행되는 handleSignIn 함수의 처리 시점에서 user 상태는 스냅샷(snapshot)이 였습니다.",
      "그러므로 signIn 함수에 의해 인증되었다 하더라도 user 상태는 다음 번 렌더링 과정에서 업데이트 됩니다. 즉, 바로 값이 변경되지는 않았던 것이였습니다.",
      "따라서 user 상태 변경이 감지될 때 토스트를 화면에 띄운 후 홈 페이지로 이동시키는 로직으로 수정 후 문제를 해결했습니다.",
    ],
    solutionImageSource: [
      "/assets/image/projectSource/jijo-cafe/solution1.png",
    ],
    baseURL: {
      깃허브: "https://github.com/suwan98/JIJO-cafe",
      배포페이지: "https://cafe-jijo.vercel.app/",
    },
    techStack: ["JavaScript", "React", "ReactQuery", "Zustand", "FramerMotion"],
    isTeamProject: true,
  },
  {
    id: 4,
    filePath: "seju-portfolio",
    title: "포트폴리오",
    projectImageSource: [
      "/assets/image/projectSource/front-portfolio/image1.png",
      "/assets/image/projectSource/front-portfolio/image2.png",
      "/assets/image/projectSource/front-portfolio/image3.png",
    ],
    core: "framer-motion을 통한 다양한 애니메이션 구현. 재사용성이 가능한 컴포넌트 구축 및 설계. Github Action을 통한 CI/CD 파이프라인 구축. AWS EC2 인스턴스 생성 및 프로젝트 배포 경험. 컨텐츠 이미지 스와이퍼 기능",
    descrption:
      "AnimatePresence 컴포넌트를 통해 자식 컴포넌트가 언마운트 될 때 exit animation을 제공할 수 있음을 학습했고, 프로젝트에 활용했습니다. Variants를 학습해 DOM 전체 파생되는 애니메이션 등에 대해 애니메이션을 적용시킬 수 있었습니다. 이번 프로젝트에서 Swiper 라이브러리 없이 이미지 슬라이드를 구현하고싶었습니다. useState를 통해 이미지의 index의 상태를 정의했으며, 이미지가 슬라이드 될때마다 상태가 변경되 스와이퍼 기능을 동작할 수 있도록 구현했습니다. AWS에서 제공하는 다양한 기능들을 통해 프로젝트 배포를 경험할 수 있었습니다. ➡️ 인스턴스 내부에서 pm2로 foreground 앱을 background로 무중단 배포를 경험했습니다. ➡️ AWS IAM을 통해 특정 기능을 사용할 수 있는 권한을 부여받는 사용자를 생성했습니다. ➡️ AWS S3 버킷을 통해 빌드 후 빌드 된 프로젝트를 EC2 인스턴스 환경에 저장했습니다. nginx를 통해 서버 내 80포트를 8080포트로 리다이렉팅하는 포트포워딩을 경험했습니다. certbot을 통해 SSL 인증서를 발급받고, 웹 서버를 http에서 보안상으로 우수한 https 프로토콜로 리다이렉팅할 수 있음을 알게됬습니다. Github Actions와 AWS CodeDeploy를  조합하여 CI/CD 구축을 경험했습니다. ➡️ 이를 통해 프로젝트 내 소프트웨어 개발 워크플로우를 구성했습니다.",
    problem: [
      "프로젝트를 EC2 인스턴스와 AWS S3 버켓을 활용 해 CodeDeploy를 통해 배포를 진행하던 중, 첫번째 배포는 성공했으나, 두번째 배포부터 배포실패가 계속 됬습니다.",
    ],
    solution: [
      "먼저 CodeDeploy 콘솔 내부의 실패 한 이유에 대한 ViewEvents를 확인하고,",
      "추가적으로 EC2에서도 Codedeploy와 관련된 log를 확인결과, 문제점을 도출했습니다.",
      "두번째 배포부터 배포가 실패한 이유는 EC2 인스턴스로 할당되있던 용량이 꽉차 2차 배포가 이루어지지 않았던걸 확인했습니다.",
      "따라서 점진적으로 파일 depth를 좁혀가며 EC2 인스턴스 rinux 커널에서 가장 많은 용량을 차지하고 있는 폴더가 무엇인지 확인했습니다.",
      "확인결과,  opt/codedeploy-agent 폴더에서 인스턴스에서 할당받은 전체용량 29GB에서 17GB를 차지하고 있음을 알 수 있었습니다.",
      "즉, 문제의 원인은 opt/codedeploy-agent 폴더 내부에서 17GB를 차지하고 있었던 이유는 codedeploy의 로그들이 배포할 때마다 계속해서 쌓여 많은 용량을 차지하고 있던 것이였습니다.",
      "따라서, codedeploy-agent 폴더 내부 로그파일들을 제거 후 재배포를 시도해서 정상적으로 배포가 이루어졌습니다.",
    ],
    problemImageSource: [
      "/assets/image/projectSource/front-portfolio/problem1.png",
    ],
    solutionImageSource: [
      "/assets/image/projectSource/front-portfolio/solution1.png",
    ],
    baseURL: {
      깃허브: "https://github.com/suwan98/seju-portfolio",
      배포페이지: "https://seju-portfolio.com/",
    },
    techStack: ["TypeScript", "Nextjs", "Zustand", "AWS"],
    isTeamProject: false,
  },
];

export default PROJECT_LIST;
