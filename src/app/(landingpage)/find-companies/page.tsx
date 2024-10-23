"use client";

import ExploreDataContainer from "@/containers/ExplorerDataContainer";
import useCategoryCompanyFilter from "@/hooks/useCategoryCompanyFilter";
import useCompanies from "@/hooks/useCompanies";
import { formFilterCompanySchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface FindCompaniesProps {}

const FindCompanies: FC<FindCompaniesProps> = ({}) => {
  const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
    resolver: zodResolver(formFilterCompanySchema),
    defaultValues: {
      industry: [],
    },
  });

  const { filter } = useCategoryCompanyFilter();

  const { companies, isLoading, mutate } = useCompanies(categories);

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    mutate();
  }, [categories]);

  const onSubmitFormFilter = async (
    val: z.infer<typeof formFilterCompanySchema>
  ) => setCategories(val.industry);

  return (
    <ExploreDataContainer
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      filterForm={filter}
      loading={isLoading}
      title="dream companies"
      subTitle="Find the dream companies you dream work for"
      type="company"
      data={companies}
    />
  );
};

export default FindCompanies;
