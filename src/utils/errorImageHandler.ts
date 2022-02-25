export const errorImageHandler: React.ReactEventHandler<HTMLImageElement> = (
  event
) => {
  event.currentTarget.src = "/svgs/default.svg";
};
