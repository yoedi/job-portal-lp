"use client";

import ExploreDataContainer from "@/containers/ExplorerDataContainer";
import { formFilterSchema } from "@/lib/form-schema";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { filterFormType } from "@/types";
import { CATEGORIES_OPTIONS } from "@/constans";

const FILTER_FORMS: filterFormType[] = [
  {
    name: "categories",
    label: "Categories",
    items: CATEGORIES_OPTIONS,
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
    />
  );
}
