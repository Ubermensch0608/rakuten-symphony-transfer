export const getCreatedAt = (creationDate: number) => {
  const createdAt = new Date(creationDate * 1000);
  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const date = createdAt.getDate();
  const hours = createdAt.getHours();
  const minutes = createdAt.getMinutes();
  const timeZone = createdAt.getTimezoneOffset() / -60;

  return `${year}년 ${month}월 ${date}일 ${
    hours < 10 ? "0" + hours : hours
  }:${minutes} +${timeZone < 10 ? "0" + timeZone : timeZone}:00`;
};
