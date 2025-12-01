import { useState, useEffect } from "react";
import { getRandomHealthTip } from "@/lib/healthTips";
import { Lightbulb } from "lucide-react";

const HealthTips = () => {
  const [tip, setTip] = useState("");

  useEffect(() => {
    setTip(getRandomHealthTip());
    const interval = setInterval(() => {
      setTip(getRandomHealthTip());
    }, 30000); // Change tip every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg max-w-2xl mx-auto">
      <div className="flex items-start">
        <Lightbulb className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
        <div>
          <p className="text-sm font-medium text-blue-800">Health Tip</p>
          <p className="text-sm text-blue-700 mt-1">{tip}</p>
        </div>
      </div>
    </div>
  );
};

export default HealthTips;