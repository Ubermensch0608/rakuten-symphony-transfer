import { FC } from "react";
import * as S from "./styles";
interface DetailHeaderProps {
  linkTitle: string;
}

const DetailHeader: FC<DetailHeaderProps> = ({ linkTitle }) => {
  const fileUrl = window.location.href.slice(7);

  const popUpAlert = () => {
    alert("다운로드 되었습니다.");
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
