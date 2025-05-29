import { ModeToggle } from "@/shared/components/mode-toggle";

function Header() {
  return (
    <div className="w-full h-[10vh] bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex-1" /> {/* 왼쪽 여백 */}
          <h1 className="text-lg md:text-xl font-bold">
            롤 챔피언 추첨기 cicd
          </h1>
          <div className="flex-1 flex justify-end">
            {" "}
            {/* 오른쪽 여백과 토글 버튼 */}
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
