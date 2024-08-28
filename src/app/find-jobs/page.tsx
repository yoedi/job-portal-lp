"use client";

import ExploreDataContainer from "@/containers/ExplorerDataContainer";
import { formFilterSchema } from "@/lib/form-schema";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { filterFormType, JobType } from "@/types";
import { CATEGORIES_OPTIONS } from "@/constans";

const FILTER_FORMS: filterFormType[] = [
  {
    name: "categories",
    label: "Categories",
    items: CATEGORIES_OPTIONS,
  },
];

const dummyData: JobType[] = [
  {
    applicants: 5,
    categories: ["Marketing", "Design"],
    desc: "lorem ipsum",
    image: "/images/company2.png",
    jobType: "Full Time",
    location: "Jakarta, Indonesia",
    name: "Social Media Assistant",
    needs: 10,
    type: "Agency",
  },
];

export default function FindJobsPage() {
  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) =>
    console.log(val);

  return (
    <ExploreDataContainer
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      filterForm={FILTER_FORMS}
      loading={false}
      title="dream job"
      subTitle="Find your next career at companies like HubSpot, Bata, and Dropbox"
      type="job"
      data={dummyData}
    />
  );
}
