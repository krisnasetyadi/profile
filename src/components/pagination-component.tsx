"use client";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            // onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className={
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
        {[...Array(totalPages)].map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              //   onClick={() => setCurrentPage(i + 1)}
              isActive={currentPage === i + 1}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href="#"
            // onClick={() =>
            //   setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            // }
            className={
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

// <div className="flex justify-center gap-2 mt-8">
{
  /* {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index + 1}
          variant={currentPage === index + 1 ? "outline" : "default"} // Change "primary" to "outline" or "default"
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </Button>
      ))} */
}

export { Pagination };
// </div>
