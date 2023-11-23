import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

//Importing needed elements.
import "./css/home.css";

function Home() {
  const [userName] = React.useState("Gonzu");
  const [chosenCategory, setChosenCategory] = React.useState("workout-tracker");

  return (
    <div className="flex flex-col gap-[100px] justify-start items-center w-[100dvw] h-screen box-border relative p-[25px] overflow-y-auto overflow-x-hidden">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width="1200px"
        id="blobSvg"
        style={{
          opacity: "1",
          position: "absolute",
          left: "-300px",
          top: "-350px",
        }}
        filter="blur(0px)"
        transform="rotate(0)"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "rgb(25, 25, 25)" }}></stop>
            <stop
              offset="100%"
              style={{ stopColor: "rgb(50, 59, 149)" }}
            ></stop>
          </linearGradient>
        </defs>
        <path id="blob" fill="url(#gradient)" style={{ opacity: "1" }}>
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z;M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,196.76266Q143.52532,143.52532,196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,176.75422Q423.07519,250,409.06419,322.5266Z;M405.0078,325.44624Q400.89248,400.89248,325.44624,434.97549Q250,469.0585,165.42535,444.1039Q80.8507,419.1493,84.75627,334.57465Q88.66184,250,94.44262,175.1117Q100.2234,100.2234,175.1117,82.29749Q250,64.37159,306.73538,100.45042Q363.47075,136.52925,386.29693,193.26462Q409.12312,250,405.0078,325.44624Z;M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M449.66467,329.57458Q409.14917,409.14917,329.57458,407.97733Q250,406.80549,191.3735,387.02924Q132.74701,367.25299,77.06026,308.6265Q21.3735,250,49.05191,163.36516Q76.73032,76.73032,163.36516,85.537Q250,94.34367,322.00775,100.16408Q394.01551,105.98449,442.09784,177.99225Q490.18018,250,449.66467,329.57458Z;M408.24461,332.63257Q415.26513,415.26513,332.63257,434.71568Q250,454.16622,179.33614,422.74697Q108.67228,391.32772,65.87585,320.66386Q23.07942,250,63.27221,176.73251Q103.46501,103.46501,176.73251,63.02288Q250,22.58075,311.86507,74.4253Q373.73015,126.26985,387.47712,188.13493Q401.22409,250,408.24461,332.63257Z;M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z"
          ></animate>
        </path>
      </svg>

      <ul className="flex flex-col items-start justify-start w-[80%] max-[410px]:w-[100%]">
        <li>
          <ul className="gap-[50px] flex flex-row items-start justify-start w-[100%] mt-[15px] box-border relative max-[1280px]:flex-col">
            <li className="w-[50%] max-[1280px]:w-[100%]">
              <ul className="gap-[25px] flex flex-col items-start justify-start w-[100%] mt-[15px] box-border relative">
                <li className="text-white w-[100%] text-[42px] self-start box-border relative">
                  Supercharge Fitness Goals: Plan & Track Effortlessly!
                </li>
                <li className="text-white w-[100%] text-[18px] self-start box-border relative">
                  Empower your fitness journey! Plan custom workouts and
                  effortlessly track progress. Our website simplifies
                  goal-driven fitness by allowing you to create your own custom
                  workout plans, and keep track of the progress you've made on
                  the workouts!
                </li>
              </ul>
            </li>
            <li className="w-[50%] max-[1280px]:w-[100%]">
              <Accordion type="multiple" className="text-white">
                <AccordionItem value="item-1">
                  <AccordionTrigger className=" text-start">
                    Does it have inbuilt excersises?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes it does! It has over 50+ excersises that you can choose!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className=" text-start">
                    Can I create my own excersises?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can easily add your own excersise that would only be
                    seen by you on your dashboard page.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className=" text-start">
                    Can I Track Performance for a Specific Lift?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely! Navigate to the dashboard and select the
                    specific lift you wish to examine performance metrics for.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className=" text-start">
                    Why should I use this?
                  </AccordionTrigger>
                  <AccordionContent>
                    Completely free and user-friendly! This page caters to gym
                    enthusiasts seeking enhanced performance. Effortlessly track
                    your progress and elevate your workout experience!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          </ul>
        </li>
      </ul>

      <div className="w-[80%] max-[410px]:w-[100%] min-h-[800px] h-[80%] rounded-lg border-[#2c2a2a] border-2 z-10 overflow-x-hidden overflow-y-auto bg-[#191919] box-border relative">
        <nav className="flex flex-row justify-between items-center w-[100%] border-b-2 border-b-[#2c2a2a]">
          <div className="flex flex-row gap-[5px] max-[768px]:hidden">
            <h1 className="text-xl border-r-2 border-r-[#2c2a2a] pr-[10px] cursor-pointer max-[768px]:border-none ">
              Dashboard
            </h1>
            <ul className="flex flex-row justify-start items-center gap-[10px] ">
              <li
                className="pl-[5px] text-md cursor-pointer"
                onClick={() => setChosenCategory("workout-tracker")}
              >
                Workout tracker
              </li>
              <li
                className="text-md cursor-pointer"
                onClick={() => setChosenCategory("workout-plan")}
              >
                Workout planner
              </li>
              <li
                className="text-md cursor-pointer"
                onClick={() => setChosenCategory("excersises")}
              >
                Excersises
              </li>
            </ul>
          </div>

          <div className="category-dashboard">
            <DropdownMenu>
              <DropdownMenuTrigger>Category</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => setChosenCategory("workout-tracker")}
                >
                  Workout Tracker
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setChosenCategory("workout-plan")}
                >
                  Workout planner
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setChosenCategory("excersises")}
                >
                  Excersises
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>Gonzu</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Gonzu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="p-[15px] text-white w-[100%] flex flex-col justify-start items-start gap-[25px]">
          {chosenCategory === "workout-tracker" ? (
            <>
              <h1 className="text-2xl font-bold cursor-pointer transtion ease hover:opacity-80 duration-300">
                Workout Tracker
              </h1>
            </>
          ) : (
            <>
              
            </>
          )}
          {chosenCategory === "workout-plan" ? (
            <>
              <h1 className="text-2xl font-bold cursor-pointer transtion ease hover:opacity-80 duration-300">
                Workout Planner
              </h1>
            </>
          ) : (
            <></>
          )}
          {chosenCategory === "excersises" ? (
            <>
              <h1 className="text-2xl font-bold cursor-pointer transtion ease hover:opacity-80 duration-300">
                Excersises
              </h1>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
