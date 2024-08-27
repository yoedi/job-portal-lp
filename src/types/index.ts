export type JobType = {
  image: string;
  jobType: string;
  name: string;
  type: string;
  location: string;
  desc: string;
  categories: string[];
};

export type OptionType = {
  id: string;
  label: string;
};

export type filterFormType = {
  label: string;
  name: string;
  items: OptionType[];
};
