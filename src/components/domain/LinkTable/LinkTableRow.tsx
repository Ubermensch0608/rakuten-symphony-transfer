import React, { Fragment, FC } from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "components/layout/Avatar";
import { LinkDataType } from "types/linkTypes";
import {
  getThreeComma,
  getFileSize,
  getExpires,
  errorImageHandler,
} from "utils";

import * as S from "./styles";

interface LinkTableRowProps extends LinkDataType {
  id: string;
}

const EXPIRED = "만료됨";
const LinkTableRow: FC<LinkTableRowProps> = ({
  summary,
  thumbnailUrl,
  id,
  expires_at,
  size,
  sent,
  count,
}) => {
  const hostLocation = window.location.href;

  const isExpired = getExpires(expires_at);

  const showFileUrl = () => {
    if (isExpired !== EXPIRED) {
      return `${hostLocation}${id}`;
    } else {
      return EXPIRED;
    }
  };

  const clipBoardHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    const clipBoard = navigator.clipboard;

    if (isExpired !== EXPIRED) {
      clipBoard
        .writeText(`${hostLocation}${id}`)
        .then(() => alert(`${hostLocation}${id} 주소가 복사 되었습니다.`));
    } else {
      return;
    }
  };

  const navigate = useNavigate();
  const goDetailPage = (event: React.MouseEvent) => {
    const clickedTag = event.target as HTMLElement;

    if (clickedTag.tagName === "A") {
      return;
    } else {
      navigate(`/${id}`);
    }
  };

  return (
    <Fragment>
      <S.TableRow onClick={goDetailPage}>
        <S.TableCell>
          <S.LinkInfo>
            <S.LinkImage>
              <img
                referrerPolicy="no-referrer"
                src={thumbnailUrl}
                alt=""
                onError={errorImageHandler}
              />
            </S.LinkImage>
            <S.LinkTexts>
              <S.LinkTitle>{summary}</S.LinkTitle>
              <S.LinkUrl onClick={clipBoardHandler}>{showFileUrl()}</S.LinkUrl>
            </S.LinkTexts>
          </S.LinkInfo>
          <span />
        </S.TableCell>
        <S.TableCell>
          <span>파일개수</span>
          <span>{getThreeComma(count)}</span>
        </S.TableCell>
        <S.TableCell>
          <span>파일사이즈</span>
          <span>{getFileSize(size)}</span>
        </S.TableCell>
        <S.TableCell>
          <span>유효기간</span>
          <span>{getExpires(expires_at)}</span>
        </S.TableCell>
        <S.TableCell>
          <span>받은사람</span>
          {sent && (
            <S.LinkReceivers>
              {sent.emails.map((email, index) => (
                <Avatar key={index} text={email} />
              ))}
            </S.LinkReceivers>
          )}
        </S.TableCell>
      </S.TableRow>
    </Fragment>
  );
};

export default LinkTableRow;
