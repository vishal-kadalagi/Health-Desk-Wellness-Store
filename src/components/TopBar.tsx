import { Truck } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-gradient-teal py-2.5">
      <div className="container flex items-center justify-center gap-2">
        <Truck className="h-4 w-4 text-primary-foreground" />
        <p className="text-sm font-medium text-primary-foreground tracking-wide">
          Free Shipping Across India On All Orders
        </p>
      </div>
    </div>
  );
};

export default TopBar;
