import { Bars3Icon} from "@heroicons/react/24/outline";
import { Button } from "../ui";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { pages } from ".";

export function Mobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon-lg" variant="ghost">
          <Bars3Icon className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className=" rounded-full  w-max mx-auto  flex font-semibold items-center">
              <img className="size-10 object-cover " src="icon.png" alt="logo" />
              Axis
            </div>
          </SheetTitle>
          <SheetDescription className="text-xs text-center">
            Axis is a modern <span className="text-primary font-semibold">Learning Platform</span> {" "}
            designed as the central hub for the academic community.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-4 px-4">
          {pages?.map((page) => {
            const Icon = page.icon;
            return (
              <a href={page?.link} className=" flex items-center gap-2">
                <Icon className="size-5 text-primary" />
                <p>
                  {page?.name}
                </p>
              </a>
            );
          })}
        </div>

        <SheetFooter className="flex flex-col">
          <p className="text-center uppercase text-sm text-neutral-500">Sign In</p>

          <Button>
            Learner
          </Button>
          <p className="text-center uppercase text-sm text-neutral-500">Or</p>
          <Button variant={"secondary"}>
            Instructor
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}