
"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const pages = [
  { label: "1", route: "/" },
  { label: "2", route: "/shop" },
  { label: "3", route: "/blog" },
  { label: "4", route: "/contact" },
];

export function PaginationOfPages() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Pagination>
      <PaginationContent className="flex gap-2 sm:gap-4 lg:gap-[38px] flex-wrap sm:flex-nowrap justify-center">
        {/* Dynamic Page Links */}
        {pages.map((page) => (
          <PaginationItem key={page.label}>
            <PaginationLink
              href={page.route}
              onClick={(e) => {
                e.preventDefault();
                router.push(page.route);
              }}
              isActive={pathname === page.route}
              className={`h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] lg:h-[60px] lg:w-[60px] text-center
                ${pathname === page.route
                  ? "bg-primary1 text-white"
                  : "bg-primary2 rounded-lg hover:text-white hover:bg-primary1"
                }`}
            >
              {page.label}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            onClick={() => {
              const currentIndex = pages.findIndex((page) => page.route === pathname);
              if (currentIndex < pages.length - 1) router.push(pages[currentIndex + 1].route);
            }}
            className="h-[40px] w-[80px] sm:h-[50px] sm:w-[90px] lg:h-[60px] lg:w-[98px] text-center
              hover:text-white hover:bg-primary1 bg-primary2 rounded-lg"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
