import { FC } from "react";
import { FileType } from "types/linkTypes";
import {
  getFileSize,
  getExpires,
  getCreatedAt,
  errorImageHandler,
} from "utils";

import * as S from "./styles";

interface DetailArticleProps {
  linkContent: string;
  download_count: number;
  thumbnailUrl: string;
  files: FileType[];
  count: number;
  created_at: number;
  expires_at: number;
}

const DetailArticle: FC<DetailArticleProps> = ({
  linkContent,
  download_count,
  files,
  count,
  created_at,
  expires_at,
}) => {
  const totalSize = files.reduce((acc, cur) => acc + cur.size, 0);
  const createdAt = getCreatedAt(created_at);
  const expiresAt = getExpires(expires_at);

  return (
    <S.Article>
      <S.Descrition>
        <S.Texts>
          <S.Top>링크 생성일</S.Top>
          <S.Bottom>{createdAt}</S.Bottom>
          <S.Top>메세지</S.Top>
          <S.Bottom>{linkContent}</S.Bottom>
          <S.Top>다운로드 횟수</S.Top>
          <S.Bottom>{download_count}</S.Bottom>
        </S.Texts>
        <S.LinkImage>
          <S.Image
            src={files[0].thumbnailUrl}
            alt="Link image"
            onError={errorImageHandler}
          />
        </S.LinkImage>
      </S.Descrition>
      <S.ListSummary>
        <div>총 {count}개의 파일</div>
        <div>{getFileSize(totalSize)}</div>
      </S.ListSummary>
      <S.FileList>
        {expiresAt === "만료됨"
          ? null
          : files.map((item, i) => (
              <S.FileListItem key={`item-${i}`}>
                <S.FileItemInfo>
                  <span />
                  <span>{item.name}</span>
                </S.FileItemInfo>
                <S.FileItemSize>{getFileSize(item.size)}</S.FileItemSize>
              </S.FileListItem>
            ))}
      </S.FileList>
    </S.Article>
  );
};

export default DetailArticle;
