"use client";

import { useState, useEffect } from "react";
import CardComponent from "@/components/card-component";
import { useSelector } from "react-redux";
import { RootStore } from "@/store";
import Link from "next/link";
import { PortofolioApi } from "@/services";
import Swal from "sweetalert2";
import { PaginationComponent } from "@/components/pagination-component";
import { Label } from "@/components/ui/label/label";
import { Input } from "@/components/ui/input/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function PortofolioScreen() {
  const { isMobileDimension } = useSelector(
    (state: RootStore) => state.rootStore
  );
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [queryData, setQueryData] = useState<any>({});
  const [maxItemPerPage, setMaxItemPerPage] = useState<number>(6);
  const [filterAndPagination, setFilterAndPagination] = useState({
    offset: 0,
    limit: maxItemPerPage,
  });

  useEffect(() => {
    setIsLoading(true);
    PortofolioApi.get(filterAndPagination)
      .then(({ Data, Query }: any) => {
        setQueryData(Query);
        setData(Data);
        console.log("Data_PortofolioApi", Data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error_portofolio", error);
        Swal.fire({
          toast: true,
          text: error?.message || "Something went wrong",
          icon: "error",
          position: "top",
          timer: 3000,
          showConfirmButton: false,
        });
        setIsLoading(false);
      });
  }, [filterAndPagination]);

  useEffect(() => {
    setMaxItemPerPage(isMobileDimension ? 2 : 6);
  }, [isMobileDimension]);

  useEffect(() => {
    setTotalPages(Math.ceil(queryData.Total / maxItemPerPage));
  }, [queryData, maxItemPerPage]);

  useEffect(() => {
    setFilterAndPagination((prev) => ({ ...prev, limit: maxItemPerPage }));
  }, [maxItemPerPage]);

  const handlePagination = (page: number) => {
    const offset = page === 1 ? 0 : (page - 1) * maxItemPerPage;
    setFilterAndPagination({ offset, limit: maxItemPerPage });
    setCurrentPage(page);
  };

  return (
    <div
      className={`${
        isMobileDimension ? "h-screen" : ""
      } max-w-7xl mx-auto px-4 py-12`}
    >
      {/* <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Label htmlFor="search">Search</Label>
            <Input
              id="search"
              placeholder="Search projects..."
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="role-filter">Filter by Role</Label>
            value={roleFilter} onValueChange={setRoleFilter}
            <Select>
              <SelectTrigger id="role-filter">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="Frontend">Frontend</SelectItem>
                <SelectItem value="Backend">Backend</SelectItem>
                <SelectItem value="Fullstack">Fullstack</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="sort-order">Sort Order</Label>
            value={sortOrder} onValueChange={setSortOrder}
            <Select>
              <SelectTrigger id="sort-order">
                <SelectValue placeholder="Sort order" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc">A-Z</SelectItem>
                <SelectItem value="desc">Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div> */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
        {data?.map((i) => {
          return (
            // <div className="flex items-center justify-center p-2">
            <Link key={i.id} href={`portofolio/${i.id}`}>
              <CardComponent
                id={i.id}
                image={i.image_urls[0]}
                name={i.name}
                project_role={i.roles[0]}
              />
            </Link>
            // </div>
          );
        })}
      </div>
      {/* <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePagination}
      /> */}
    </div>
  );
}

export default PortofolioScreen;
