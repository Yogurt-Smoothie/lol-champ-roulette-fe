function Footer() {
  return (
    <footer className="w-full py-8 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="text-lg font-semibold">개발자 정보</div>
        <div className="space-y-2 text-sm md:text-base">
          <p>E-mail: zoro94317@gmail.com</p>
          <p>이름: 차민재</p>
          <p className="break-words">
            GitHub:{" "}
            <a
              href="https://github.com/Yogurt-Smoothie/lol-champ-roulette-fe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              <span className="hidden md:inline">
                https://github.com/Yogurt-Smoothie/lol-champ-roulette-fe
              </span>
              <span className="md:hidden">github.com/Yogurt-Smoothie/...</span>
            </a>
          </p>
        </div>
        <div className="pt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <p>사이트의 기능 의뢰는 메일로 문의 부탁드립니다.</p>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <p className="whitespace-pre-line md:whitespace-normal">
              또한, 본 사이트는 오픈 소스 프로젝트입니다.
              <span className="hidden md:inline"> </span>
              자체적으로 기능 개선이나 개발을 하실 분들은 깃허브를 참고하시기
              바랍니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
