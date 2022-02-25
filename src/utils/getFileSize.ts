export const getFileSize = (size: number) => {
  let times = 0;
  let bytes: string = "B";
  while (size > 1024) {
    size = size / 1024;
    times++;
  }
  bytes = getBytes(times);
  return `${size.toFixed(2)}${bytes}`;
};

const getBytes = (times: number) => {
  switch (times) {
    case 1:
      return "KB";
      break;
    case 2:
      return "MB";
      break;
    case 3:
      return "GB";
      break;
    case 4:
      return "TB";
      break;
    default:
    case 0:
      return "B";
      break;
  }
};
