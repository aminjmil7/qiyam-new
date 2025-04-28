import React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Yaneahlogo from "../assets/images/new-design/girls-happy.png";
import Logodecoration from "../assets/images/new-design/Group 30544.png";
import Childrenvolunteers from "../assets/images/new-design/Group-1.png";
import bgImg from "../assets/images/new-design/backgroundmask.png"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg  bg-card text-card-foreground ", className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

export const HomeSectionOne = (): JSX.Element => {
  return (
    <Card className="relative w-full   h-auto border-none m-auto" 
    style={{
      backgroundImage: `url(${bgImg})`,
      backgroundSize: "contain",
      
      backgroundRepeat: "no-repeat",
    }}
    >
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Quote section */}
          <div className="w-full md:w-[410px] text-center md:text-right order-2 md:order-1 mt-6 md:mt-0">
            <div className="flex justify-center md:justify-end mt-4">
              <img
                className="w-[141px] h-[67px]"
                alt="Yaneah logo"
                src={Childrenvolunteers}
              />
            </div>
            <h1 className="font-display-xl-semibold   text-[#006173] ">
              &#34; تطوع يبني جيلا.. ويصنع مستقبلا &#34;
            </h1>
          </div>

          {/* Image section */}
          <div className="relative w-full md:w-[642px] order-1 md:order-2">
            <div className="relative">
              <img
                className="w-full max-w-[642px] h-auto"
                alt="Children volunteers"
                src={Yaneahlogo}
              />

              <img
                className="absolute w-[142px] h-[136px] top-[-67px] left-1/2 transform -translate-x-1/2"
                alt="Logo decoration"
                src={Logodecoration}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HomeSectionOne;
