import { Prisma } from "@prisma/client";
import prisma from "../../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const filterCategories =
    searchParams.get("categories") !== ""
      ? searchParams.get("categories")?.split("|")
      : [];

  const categoryQuery: Prisma.JobWhereInput =
    filterCategories && filterCategories.length > 0
      ? {
          CategoryJob: {
            id: {
              in: filterCategories,
            },
          },
        }
      : {};

  const jobs = await prisma.job.findMany({
    where: { ...categoryQuery },
    include: {
      CategoryJob: true,
      Company: {
        include: { CompanyOverview: true },
      },
    },
  });

  return NextResponse.json(jobs);
}
