import { useEffect, useState, FC, Fragment } from "react";
import { useParams } from "react-router-dom";

import DetailHeader from "components/domain/Detail/DetailHeader";
import DetailArticle from "components/domain/Detail/DetailArticle";
import { LinkDataType } from "types/linkTypes";

const DetailPage: FC<{ linkData: LinkDataType[] | null }> = ({ linkData }) => {
  const { key } = useParams();
  const [link, setLink] = useState<LinkDataType>();

  useEffect(() => {
    if (linkData) {
      const selectedLink = linkData.find((data) => data.key === key);
      setLink(selectedLink);
    }
  }, [linkData]);

  if (!link) return <div>로딩 중</div>;

  return (
    <Fragment>
      <DetailHeader
        linkTitle={link.sent ? link.sent.subject : "무제"}
        expires_at={link.expires_at}
      />
      <DetailArticle
        linkContent={link.sent ? link.sent.content : ""}
        download_count={link.download_count}
        thumbnailUrl={link.thumbnailUrl}
        files={link.files}
        count={link.count}
        created_at={link.created_at}
        expires_at={link.expires_at}
      />
    </Fragment>
  );
};

export default DetailPage;
