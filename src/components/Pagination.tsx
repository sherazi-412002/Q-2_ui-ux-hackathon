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
      <PaginationContent className="flex gap-[38px]">
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
              className={`${pathname === page.route ? "bg-primary1  text-white h-[60px] w-[60px] text-center" : "h-[60px] w-[60px] bg-primary2 rounded-lg hover:text-white hover:bg-primary1 text-center"}`}
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
            }} className="h-[60px] w-[98px] text-center hover:text-white hover:bg-primary1 bg-primary2 rounded-lg"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}