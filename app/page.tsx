import { Heading } from "@/components/main-title";
import { MAIN_TITLE } from "@/lib/constant";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center mt-16 md:mt-28">
        <Heading fontSize={"font-bold"} title={MAIN_TITLE} size="3xl" />
      </div>
    </div>
  );
}
