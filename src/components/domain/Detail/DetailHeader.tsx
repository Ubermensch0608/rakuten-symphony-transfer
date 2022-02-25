import { FC } from "react";
import { getExpires } from "utils";
import * as S from "./styles";

interface DetailHeaderProps {
  linkTitle: string;
  expires_at: number;
}

const DetailHeader: FC<DetailHeaderProps> = ({ linkTitle, expires_at }) => {
  const fileUrl = window.location.href.slice(7);
  const expiresAt = getExpires(expires_at);

  const popUpAlert = () => {
    if (expiresAt === "만료됨") return alert("만료된 링크입니다.");
    else return alert("다운로드 되었습니다.");
  };

  return (
    <S.Header>
      <S.LinkInfo>
        <S.Title>{linkTitle}</S.Title>
        <S.Url>{fileUrl}</S.Url>
      </S.LinkInfo>
      <S.DownloadButton onClick={popUpAlert}>
        <img
          referrerPolicy="no-referrer"
          src="/svgs/download.svg"
          alt="download"
        />
        받기
      </S.DownloadButton>
    </S.Header>
  );
};

export default DetailHeader;
