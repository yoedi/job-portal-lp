"use client";

import ExploreDataContainer from "@/containers/ExplorerDataContainer";
import useCategoryJobFilter from "@/hooks/useCategoryJobFilter";
import useJobs from "@/hooks/useJobs";
import { formFilterSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function FindJobsPage() {
  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const { filter } = useCategoryJobFilter();

  const [categories, setCategories] = useState<string[]>([]);

  const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) =>
    setCategories(val.categories);

  useEffect(() => {
    mutate();
  }, [categories]);

  const { jobs, isLoading, mutate } = useJobs(categories);

  return (
    <ExploreDataContainer
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      filterForm={filter ?? []}
      loading={isLoading}
      title="dream job"
      subTitle="Find your next career at companies like HubSpot, Bata, and Dropbox"
      type="job"
      data={jobs}
    />
  );
}
