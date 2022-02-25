import React from "react";
import type { FC } from "react";

import LinkTable from "components/domain/LinkTable/LinkTable";
import { LinkDataType } from "types/linkTypes";

const LinkPage: FC<{ linkData: LinkDataType[] | null }> = ({ linkData }) => {
  return (
    <>
      <LinkTable linkData={linkData} />
    </>
  );
};

export default LinkPage;
