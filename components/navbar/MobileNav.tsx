import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import NavItems from "./NavItems";
import { MenuIcon } from "lucide-react";

const MobileNav = () => {
	return (
		<nav className="md:hidden">
			<Sheet>
				<SheetTrigger className="align-middle">
					<MenuIcon width={24} height={24} className="cursor-pointer" />
				</SheetTrigger>
				<SheetContent
					side={"left"}
					className="flex flex-col gap-6 bg-white dark:bg-gray-900 md:hidden">
					<Image src={"/logo.png"} alt="logo" width={100} height={100} />
					<Separator className="border border-gray-50" />
					<NavItems />
				</SheetContent>
			</Sheet>
		</nav>
	);
};

export default MobileNav;
