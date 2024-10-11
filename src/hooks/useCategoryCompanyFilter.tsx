import { fetcher, parsingCategoriesToOptions } from "@/lib/utils";
import { filterFormType } from "@/types";
import { useMemo } from "react";
import useSWR from "swr";

const useCategoryCompanyFilter = () => {
  const { data, isLoading, error } = useSWR("/api/company/categories", fetcher);

  console.log({ data });

  const categories = useMemo(
    () => parsingCategoriesToOptions(data, isLoading, error, true),
    [data, error, isLoading]
  );

  const filter = useMemo(() => {
    return [
      {
        name: "industry",
        label: "Industry",
        items: categories,
      },
    ] as filterFormType[];
  }, [categories]);

  return { filter };
};

export default useCategoryCompanyFilter;
