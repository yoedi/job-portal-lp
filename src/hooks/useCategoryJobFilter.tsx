"use client";

import { fetcher, parsingCategoriesToOptions } from "@/lib/utils";
import { filterFormType } from "@/types";
import { useMemo } from "react";
import useSWR from "swr";

const useCategoryJobFilter = () => {
  const { data, isLoading, error } = useSWR("/api/jobs/featured", fetcher);

  const categories = useMemo(
    () => parsingCategoriesToOptions(data, isLoading, error),
    [data, error, isLoading]
  );

  const filter = useMemo(() => {
    return [
      {
        name: "categories",
        label: "Categories",
        items: categories,
      },
    ] as filterFormType[];
  }, [categories]);

  return { filter };
};

export default useCategoryJobFilter;
