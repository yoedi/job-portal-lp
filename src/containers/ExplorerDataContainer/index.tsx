import FormFilterDynamic from "@/components/organism/FormFilterDynamic";
import FormSearchDynamic from "@/components/organism/FormSearchDynamic";
import { filterFormType } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

interface ExploreDataContainerProps {
  formFilter?: any;
  onSubmitFilter?: (val: any) => Promise<void>;
  filterForm: filterFormType[];
}

const ExploreDataContainer: FC<ExploreDataContainerProps> = ({
  formFilter,
  onSubmitFilter,
  filterForm,
}) => {
  return (
    <>
      <div className="bg-gray-200 px-32 pt-16 pb-14">
        <div className="mb-10">
          <div className="mx-auto mb-11 text-center flex justify-center gap-2">
            <span className="text-5xl font-semibold">Find Your</span>
            <div className="relative">
              <span className="text-5xl font-semibold text-primary">
                dream job
              </span>
              <div className="absolute top-10 w-[220] h-10">
                <Image
                  src="/images/pattern2.png"
                  alt="/images/pattern2.png"
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500">
            Find your next career at companies like HubSpot, Bata, and Dropbox
          </div>
        </div>
        <div>
          <FormSearchDynamic />
        </div>
      </div>
      <div className="mt-20 mb-16 px-32 flex flex-row items-start gap-10">
        <div className="w-1/5">
          <FormFilterDynamic
            formFilter={formFilter}
            onSubmitFilter={onSubmitFilter}
            filterForms={filterForm}
          />
        </div>
        <div className="w-4/5">
          <div className="mb-8">
            <div className="text-3xl font-semibold">All Jobs</div>
            <div className="text-muted-foreground">Showing 73 Result</div>

            <div>Job Card</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreDataContainer;
