"use client";

import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import TitleSection from "../atoms/TitleSection";
import JobItem from "./JobItem";
import useSWR from "swr";
import { fetcher, parsingJobs } from "@/lib/utils";
import { JobType } from "@/types";

interface FeatureJobsProps {}

const FeatureJobs: FC<FeatureJobsProps> = ({}) => {
  const { data, isLoading, error } = useSWR("/api/jobs/featured", fetcher);

  const [jobs, setJobs] = useState<JobType[]>([]);

  const parseJobs = useCallback(async () => {
    const parseData = await parsingJobs(data, isLoading, error);
    setJobs(parseData);
  }, [data, isLoading, error]);

  useEffect(() => {
    parseJobs();
  }, [data, isLoading, error]);
  // const jobs = useMemo(
  //   () => parsingJobs(data, isLoading, error),
  //   [data, isLoading, error]
  // );
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
