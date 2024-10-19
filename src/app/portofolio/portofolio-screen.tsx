"use client";

import { useState, useEffect } from "react";
import CardComponent from "@/components/card-component";
import { useSelector } from "react-redux";
import { RootStore } from "@/store";
import Link from "next/link";
import { PortofolioApi } from "@/services";
import Swal from "sweetalert2";
import { Pagination } from "@/components/ui/pagination"; 

function PortofolioScreen() {
  const { isMobileDimension } = useSelector((state: RootStore) => state.rootStore);
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
    setIsLoading(true)
    PortofolioApi.get(filterAndPagination)
      .then(({ Data, Query }: any) => {
        setQueryData(Query);
        setData(Data);
        console.log("Data_PortofolioApi", Data);
        setIsLoading(false)
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
        setIsLoading(false)
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

  return  (
    <div className={`${isMobileDimension ? "h-screen" : ""} w-full pt-2`}>
      <div
        className={`${
          isMobileDimension ? "overflow-y-auto h-screen" : ""
        } grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2`}
      >
        {data?.map((i) => {
          return (
            <div className="flex items-center justify-center p-2" key={i.id}>
              <Link href={`portofolio/${i.id}`}>
                <CardComponent
                  id={i.id}
                  image={i.image_urls[0]}
                  name={i.name}
                  project_role={i.roles[0]}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePagination}
      />
    </div>
  );
}

export default PortofolioScreen;
