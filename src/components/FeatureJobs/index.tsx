import React, { FC } from "react";
import TitleSection from "../atoms/TitleSection";
import JobItem from "./JobItem";

interface FeatureJobsProps {}

const FeatureJobs: FC<FeatureJobsProps> = ({}) => {
  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Featured" word2="jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {[0, 1, 2].map((item: number) => (
          <JobItem
            key={item}
            image="/images/company.png"
            jobType="Full Time"
            name="Email Marketing"
            type="Agency"
            location="Jakarta, Indonesia"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam adipisci velit facilis, quam, omnis facere quidem voluptates dolorem, quia explicabo sint pariatur asperiores laboriosam porro repellat nemo deleniti nihil rerum."
            categories={["Marketing", "Design"]}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureJobs;
