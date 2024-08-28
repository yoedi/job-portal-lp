import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { JobType } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

interface JobCardProps extends JobType {}

const JobCard: FC<JobCardProps> = ({
  applicants,
  categories,
  desc,
  image,
  jobType,
  location,
  name,
  needs,
  type,
}) => {
  return (
    <div className="w-full border mb-5 p-6 border-border flex flex-row justify-between items-center">
      <div className="flex flex-row items-start gap-6">
        <div>
          <Image src={image} alt={image} width={64} height={64} />
        </div>
        <div>
          <div className="text-lg font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground mb-2">
            {type} . {location}
          </div>
          <div className="h-5 inline-flex gap-2 items-center">
            <Badge variant="secondary">{jobType}</Badge>
            <Separator orientation="vertical" />
            {categories.map((item: string, i: number) => (
              <Badge key={i}>{item}</Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[200px]">
        <Button className="w-full" size="lg">
          Apply
        </Button>
        <div className="w-full h-2 mt-2 relative bg-gray-300">
          <div className="w-full absolute h-2 bg-green-500"></div>
        </div>
        <div className="text-grey-500 text-sm text-center mt-2">
          <span className="text-black font-semibold">{applicants} applied</span>{" "}
          of {needs} capacity
        </div>
      </div>
    </div>
  );
};

export default JobCard;
