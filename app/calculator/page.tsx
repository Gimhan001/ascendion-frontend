import { Calculator } from "@/components/(answer-01)/calculator";
import { Heading } from "@/components/main-title";
import { ADD_TITLE } from "@/lib/constant";

export default function CalculatorPage() {
  return (
    <div className="min-h-screen">
      <div className="mt-16 md:mt-28">
        <div className="flex justify-center mb-8">
          <Heading title={ADD_TITLE} fontSize="font-bold" size="3xl" />
        </div>
        <Calculator />
      </div>
    </div>
  );
}
