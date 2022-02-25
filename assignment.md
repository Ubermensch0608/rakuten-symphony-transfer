# 라쿠텐심포니 코리아 Frontend Developer 기술 과제

| 이 문제의 저작권은 라쿠텐 심포니 코리아 있으며, 지원자는 오로지 채용을 위한 목적으로만 이 문제를 활용할 수 있습니다. 안내사항에 따라 과제를 완성해주세요. |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- |

.  
├─ <a name="#precautions">유의사항</a>  
├─ <a href="#questions">문제</a>  
│ 　 ├─ <a href="#question1">화면1: 링크 목록 화면</a>  
│ 　 └─ <a href="#question2">화면2: 링크 상세 화면</a>  
└─ <a href="#apidoc">API 명세</a>

---

<br/>

### <a name="precautions">유의사항</a>

- 문제를 꼼꼼히 살펴보고, 요구 사항을 충실히 구현해주세요.
- 필요한 라이브러리가 있다면 자유롭게 사용할 수 있습니다.

---

<br/>

### <a name="questions">문제</a>

#### <a name="question1">링크 목록 화면</a>

- 링크로 공유한 파일(들)을 다운로드 받을 수 있는 링크 목록을 확인할 수 있습니다.

1. ~~서버에서 제공한 링크 데이터를 화면에 표시합니다.~~
2. ~~링크 아이템을 클릭하여 상세페이지로 이동합니다.~~
3. ~~제목 아래 URL을 아래와 같이 표시합니다.~~
   3-1.유효기간 이내: 도메인 주소를 포함한 상세페이지로 이동하는 전체경로를 표시합니다.
   3-2.유효기간 만료: `만료됨`으로 표시합니다.
4. ~~URL을 클릭한 경우 아래와 같이 동작합니다.~~
   4-1. 유효기간 이내: URL를 클립보드에 복사하고 `${링크 제목} 주소가 복사 되었습니다.`를 내용을 가지는 브라우저 기본 Alert을 표시합니다.
   4-2. 유효기간 만료: 아무동작도 하지 않습니다.
5. 파일 개수의 숫자에 3자리 단위마다 콤마를 표시합니다.
6. 파일 사이즈를 읽을 수 있도록 표시해주세요.
   6-1. 소수점 둘째 자리까지 표기합니다.
   6-2. 단위는 숫자 뒤에 `B`, `KB`, `MB`, `GB`, `TB`로 표기 (ex. 10.86KB)
7. 유효기간을 아래와 같이 표시하되 실시간으로 반영합니다.
   7-1. 48시간 미만: `XX시간 XX분`
   7-2. 48시간 이상: `X일`
   7-3. 만료: `만료됨`
8. 받은 사람이 있을 경우 받은 사람 텍스트를 미리 주어진 코드베이스와 같이 `<Avatar />`컴포넌트를 이용합니다.

<br/>

#### <a name="question2">화면2: 링크 상세 화면</a>

- 링크가 가지고 있는 파일 목록을 확인하고 공유 받을 수 있습니다.
- App.tsx 에서 `<LinkPage />` 를 주석 처리하고, `<DetailPage />` 화면을 주석 해제하면 확인할 수 있습니다.

1. 링크 정보를 표시합니다.
2. 받기 버튼을 누르면 `다운로드 되었습니다.`를 내용으로 가지는 브라우저 기본 Alert을 표시합니다.
3. 링크의 유효기간이 만료 되지 않았을 경우에만 파일 목록을 표시합니다.

---

<br/>

### <a name="apidoc">API 명세</a>

- 링크 목록은 아래 API를 호출하여 가져올 수 있습니다.  
  **GET: https://storage-fe.fastraffic.io/homeworks/links**

```json
[
  {
    "created_at": 1641860565,
    "key": "15PMXQPE",
    "expires_at": 1642033365,
    "download_count": 0,
    "count": 1,
    "size": 11117,
    "summary": "logo.png",
    "thumbnailUrl": "https://storage-fe.fastraffic.io/homeworks/thumbnails/15PMXQPE/1641860565.jpg",
    "files": [
      {
        "key": "662f2b22920a10dbb4cbd819d6f0786937208.jpg",
        "thumbnailUrl": "https://storage-fe.fastraffic.io/homeworks/thumbnails/15PMXQPE/662f2b22920a10dbb4cbd819d6f0786937208.jpg",
        "name": "fab-lentz-mRMQwK513hY-unsplash.jpg",
        "size": 115916
      }
      /* ... */
    ],
    "sent": {
      "subject": "로고파일",
      "content": "로고파일 전달 드립니다.",
      "emails": ["recruit@estmob.com"]
    }
  }
  /* ... */
]
```

각 아이템이 프로퍼티로 가지는 값의 의미는 다음과 같습니다.

- `created_at`: 링크가 생성된 날짜 _(number)_
- `key`: 링크의 KEY _(string | undefined)_
- `expires_at`: 링크의 유효기간 _(number)_
- `download_count`: 링크의 다운로드 횟수 _(number)_
- `count`: 링크의 파일 개수 _(number)_
- `size`: 링크의 파일 사이즈 _(number)_
- `summary`: 링크의 첫번째 파일 이름 _(string)_
- `thumbnailUrl`: 링크의 썸네일 URL _(string)_
- `files`: 링크의 파일 목록 {
  - `key`: 파일의 KEY _(string)_
  - `thumbnailUrl`: 파일의 썸네일 URL _(string)_
  - `name`: 파일의 이름 _(string)_
  - `size`: 파일의 사이즈 _(number)_
    }[]
- `sent`: {
  - `subject`: 링크를 공유한 메일 제목 _(string)_
  - `content`: 링크를 공유한 메일 내용 _(string)_
  - `emails`: 링크를 공유한 메일 목록 _(string[])_
    }
