"use client";

import { formFilterCompanySchema } from "@/lib/form-schema";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { filterFormType } from "@/types";
import { CATEGORIES_OPTIONS } from "@/constans";
import ExploreDataContainer from "@/containers/ExplorerDataContainer";

interface FindCompaniesProps {}

const FILTER_FORMS: filterFormType[] = [
  {
    name: "industry",
    label: "Industry",
    items: CATEGORIES_OPTIONS,
  },
];

const FindCompanies: FC<FindCompaniesProps> = ({}) => {
  const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
    resolver: zodResolver(formFilterCompanySchema),
    defaultValues: {
      industry: [],
    },
  });

  const onSubmitFormFilter = async (
    val: z.infer<typeof formFilterCompanySchema>
  ) => console.log(val);

  return (
    <ExploreDataContainer
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      filterForm={FILTER_FORMS}
      loading={false}
      title="dream companies"
      subTitle="Find the dream companies you dream work for"
      type="company"
      data={[]}
    />
  );
};

export default FindCompanies;