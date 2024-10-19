'use client'

import { useSelector } from "react-redux";
import { RootStore, store } from "@/store";
import { setActiveButtonsDetail } from "@/store/root-store";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ToggleButtonsProps {
  videos?: string[];
}

function ToggleButtons({ videos }: ToggleButtonsProps) {
  const { activeButtonsDetail } = useSelector((state: RootStore) => state.rootStore);

  const handleButtonsClick = (value: string) => {
    if (value) {
      store.dispatch(setActiveButtonsDetail(value));
    }
  }

  return (
    <Tabs value={activeButtonsDetail} onValueChange={handleButtonsClick}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger defaultValue={'image'} value="image">Image</TabsTrigger>
        <TabsTrigger disabled={videos && videos.length === 0 } value="video">Video</TabsTrigger>
      </TabsList>
    </Tabs>
   
  );
}

export default ToggleButtons;
