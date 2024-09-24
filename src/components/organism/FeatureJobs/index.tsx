"use client";

import useFeaturedJobs from "@/hooks/useFeaturedJobs";
import { JobType } from "@/types";
import { FC } from "react";
import TitleSection from "../../atoms/TitleSection";
import JobItem from "./JobItem";

interface FeatureJobsProps {}

const FeatureJobs: FC<FeatureJobsProps> = ({}) => {
  const { jobs, isLoading, error } = useFeaturedJobs();

  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Featured" word2="jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {jobs.map((job: JobType) => (
          <JobItem key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
};

export default FeatureJobs;
