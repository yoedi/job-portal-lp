import React, { FC } from "react";
import { IconType } from "react-icons/lib";

interface CompanyInformationProps {
  label: string;
  value: string;
  Icon: IconType;
}

const CompanyInformation: FC<CompanyInformationProps> = ({
  label,
  value,
  Icon,
}) => {
  return (
    <div className="inline-flex items-center gap-3">
      <div className="bg-white p-3 rounded-full">
        <Icon className="w-6 h-6 text-primary" />
      </div>

      <div>
        <div className="text-gray-500">{label}</div>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
};

export default CompanyInformation;
