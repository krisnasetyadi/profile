"use client";

import { useState } from "react";
import Modal from "./modal-component";
import { RootStore, store } from "@/store";
import { useSelector } from "react-redux";
import { setOpenModal } from "@/store/root-store";
import { spinnerIcon } from "../../public/icons";
import Image from "next/image";
import { CVApi } from "@/services";
import swal from "sweetalert2";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
// import { ErrorProps, handleError } from '@/utils/helper'

function HomeButtonComponent() {
  const { openModal } = useSelector((state: RootStore) => state.rootStore);
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadCV = async () => {
    setIsLoading(true);
    try {
      await CVApi.download();
      swal.fire({
        toast: true,
        text: "Sucessfuly download.",
        icon: "success",
        position: "top",
        timer: 3000,
        showConfirmButton: false,
      });
      setIsLoading(false);
    } catch (error) {
      console.log("errorbuttoncomponent", error);
      swal.fire({
        toast: true,
        text: "Oops! Something went wrong",
        icon: "error",
        position: "top",
        timer: 3000,
        showConfirmButton: false,
      });
      // if(error) handleError(error)
      setIsLoading(false);
    }
  };

  const handleContactInfo = () => {
    store.dispatch(setOpenModal(!openModal));
  };

  return (
    <div className="flex items-center justify-center gap-4">
      {openModal && <Modal />}
      <Button
        size="lg"
        // className="px-5 py-1.5 border-2 border-solid border-blue-600 rounded-full mt-10 hover:bg-blue-100  text-blue-600"
        onClick={handleDownloadCV}
      >
        {isLoading ? (
          <div className="flex">
            <Image src={spinnerIcon} alt="spinner" className="animate-spin" />
            <p className="pl-2">Loading ...</p>
          </div>
        ) : (
          <>
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </>
        )}
      </Button>
      <Button
        onClick={handleContactInfo}
        size={"lg"}
        variant={"outline"}
        // className="px-5 py-2 bg-blue-600 rounded-full mt-10 hover:bg-blue-500 text-white ml-2"
      >
        Contact Info
      </Button>
    </div>
  );
}

export default HomeButtonComponent;
