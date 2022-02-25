<h1 align="center"> 라쿠텐 심포니 코리아 과제 </h1>

<h3 align="center"> 서비스 링크: </h3>

<p align="center"><img width="800" src="https://user-images.githubusercontent.com/43867711/155720368-756e7b23-6d3e-49aa-8f55-81adc2a0dd21.gif" /></p>

## 🙋‍♀️🙋‍♂️ 팀원

|                                           프로필                                           |                    이름                     | 담당 기능                                       |
| :----------------------------------------------------------------------------------------: | :-----------------------------------------: | :---------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/Ubermensch0608" width="100" height="100"/> | [우종원](https://github.com/Ubermensch0608) | 링크 목록 화면(URL 표시, 클립보드), 라우터 설정 |
|  <img src="https://avatars.githubusercontent.com/crucial-sub" width="100" height="100"/>   |  [박중섭](https://github.com/crucial-sub)   | 링크 상세 화면, 라우터 설정                     |
|    <img src="https://avatars.githubusercontent.com/ttaerrim" width="100" height="100"/>    |    [이태림](https://github.com/ttaerrim)    | 링크 목록 화면(파일 크기, 유효 기간)            |
|                                                                                            |                    공통                     | API 연동, 초기 파일 컴포넌트 분리               |

## 🚀 스택

`React` `styled-components`

## ✨ 구현 사항

링크 목록 화면

- [x] 링크 목록 확인
- [x] 링크 아이템 클릭하면 상세 페이지로 이동
- [x] 제목 아래 URL 표시
  - 유효 기간 이내: 도메인 주소를 포함한 상세페이지로 이동하는 경로
  - 유효 기간 만료: 만료됨
- [x] URL 클릭 시 동작
  - 유효 기간 이내: URL을 클립보드에 복사, ${링크 제목} 주소가 복사 되었습니다 alert
  - 유효 기간 만료: 아무 동작 하지 않음
- [x] 파일 개수 숫자 3자리 단위마다 콤마 - utils
- [x] 파일 사이즈 표시 - utils
  - 소수점 둘째 자리까지
  - 단위는 B, KB, MB, GB, TB로 표기 (ex. 10.86KB)
- [x] 유효 기간 표시는 실시간 반영 - utils
  - 48시간 미만: XX시간 XX분
  - 48시간 이상: X일
  - 만료: 만료됨
- [x] 받은 사람 <Avatar /> 컴포넌트 이용해 표시

링크 상세 화면

- [x] 링크가 가지고 있는 파일 목록 확인, 공유
- [x] 링크 정보 표시
- [x] 받기 버튼 누르면 alert로 '다운로드 되었습니다.' 띄움
- [x] 유효 기간 이내일 경우만 파일 목록 표시

## ⚙ 설치

```
# clone the project
$ git clone https://github.com/console-lo9/rakuten-symphony-transfer.git

# install modules
$ cd rakuten-symphony-transfer
$ npm install || yarn

# start
$ npm start || yarn start

⠀
⠀  You can now view this project in the browser.
⠀  http://localhost:3000/
⠀
```

## 🔗 의존성

```
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.4.0",
    "@types/node": "^16.11.19",
    "@types/react": "^17.0.38",
    "@types/react-dom": "^17.0.11",
    "@types/react-router-dom": "^5.3.3",
    "axios": "^0.24.0",
    "date-fns": "^2.28.0",
    "filesize": "^8.0.6",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.2.1",
    "react-scripts": "5.0.0",
    "styled-components": "^5.3.3",
    "styled-normalize": "^8.0.7",
    "typescript": "^4.5.4",
    "web-vitals": "^2.1.3"
  },
```

## 📂 파일 구조

        ├── public
        │   └── svgs
        └── src
            ├── components
            │   ├── domain
            │   │   ├── Detail
            │   │   └── LinkTable
            │   └── layout
            ├── hooks
            ├── pages
            │   ├── DetailPage
            │   └── LinkPage
            ├── styles
            ├── types
            └── utils

## 💡 과제 후기

### **우종원** 🍀

### **박중섭** ✨

### **이태림** 🐯
