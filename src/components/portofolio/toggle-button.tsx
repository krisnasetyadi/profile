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
        className={`px-2 rounded-md ${
            activeButtonsDetail === 'image'
            ? 'bg-gray-700 text-gray-200'
            : 'bg-gray-200'
        }`}
        onClick={() => handleButtonsClick('image')}
      >
        image
      </button>
      <button
        className={`px-2 rounded-md ${
            activeButtonsDetail === 'video' ? 'bg-gray-700 text-gray-200' : 'bg-gray-200'
        }`}
        onClick={() => handleButtonsClick('video')}
      >
        video
      </button>
    </div>
  );
}

export default ToggleButtons;
