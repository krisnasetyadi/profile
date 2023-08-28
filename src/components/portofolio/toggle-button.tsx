'use client'

import { RootStore, store } from "@/store";
import { setActiveButtonsDetail } from "@/store/root-store";
import { useSelector } from "react-redux";

function ToggleButtons() {
  const { activeButtonsDetail } = useSelector((state: RootStore) => state.rootStore)
  const handleButtonsClick = (type: string) => {
    store.dispatch(setActiveButtonsDetail(type))
  }
  
  return (
    <div className="bg-[#e3e3e3] border-2 border-solid border-gray-500 rounded-lg">
      <button
        className={` rounded-md ${
            activeButtonsDetail === 'image'
            ? 'bg-gray-700 text-gray-200 px-2'
            : 'bg-gray-200 px-1'
        }`}
        onClick={() => handleButtonsClick('image')}
      >
        image
      </button>
      <button
        className={`rounded-md ${
            activeButtonsDetail === 'video' ? 'bg-gray-700 text-gray-200 px-2' : 'bg-gray-200 px-1'
        }`}
        onClick={() => handleButtonsClick('video')}
      >
        video
      </button>
    </div>
  );
}

export default ToggleButtons;
