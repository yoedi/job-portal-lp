import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import bcrypt from "bcryptjs";
import { categoryJobType, JobType } from "@/types";
import { supabasePubliUrl } from "./supabase";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, 8);

  return hashedPassword;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);

  return isMatch;
};

export async function fetcher<JSON>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);

  return res.json() as Promise<JSON>;
}

export const parsingCategories = (
  data: any,
  isLoading: boolean,
  error: any
) => {
  if (!isLoading && !error && data) {
    return data.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        totalJobs: item._count.job,
      };
    }) as categoryJobType[];
  }

  return [];
};

export const parsingJobs = async (
  data: any,
  isLoading: boolean,
  error: any
) => {
  if (!isLoading && !error && data) {
    return await Promise.all(
      data.map(async (item: any) => {
        const imageName = item.Company?.CompanyOverview[0]?.image;
        let imageUrl;

        if (imageName) {
          imageUrl = await supabasePubliUrl(imageName, "company");
        } else {
          imageUrl = "/images/company.png";
        }

        const job: JobType = {
          id: item.id,
          image: imageUrl,
          jobType: item.jobType,
          name: item.roles,
          type: item.CategoryJob.name,
          location: item.Company?.CompanyOverview[0]?.location,
          desc: item.description,
          category: item.CategoryJob,
          needs: item.needs,
          applicants: item.applicants,
        };

        return job;
      })
    );
  }

  return [];
};
