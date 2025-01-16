import Image from "next/image";
import React, { FC } from "react";
import { Card, CardContent, CardFooter } from "./ui/card";

interface CardComponentProps {
  id?: number;
  image: string;
  name: string;
  project_role: string;
}

const CardComponent: FC<CardComponentProps> = (props) => {
  const { id, image, name, project_role } = props;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="relative aspect-video">
          <Image src={image} alt="image" fill className="object-cover" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-1 px-2 py-1">
        <div className="font-semibold">{name}</div>
        <div className="text-sm  text-muted-foreground">{project_role}</div>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
