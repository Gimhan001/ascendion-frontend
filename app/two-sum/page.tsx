import { TwoSum } from "@/components/(answer-03)/two-sum";
import { Heading } from "@/components/main-title";
import { TWO_SUM_TITLE } from "@/lib/constant";

export default function TwoSumPage() {
  return (
    <div className="min-h-screen">
      <div className="mt-16 md:mt-28">
        <div className="flex justify-center mb-8">
          <Heading title={TWO_SUM_TITLE} fontSize="font-bold" size="3xl" />
        </div>
        <TwoSum />
      </div>
    </div>
  );
}
