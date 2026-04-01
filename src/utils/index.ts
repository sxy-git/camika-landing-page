export type ImageSize = 'small' | 'big' | 'compress';
export const IMAGE_PLACEHOLDER =
  "https://static-res.camika.ai/image/res/landing/1/"; //CDN
export const IMAGE_COMPRESS_BIG = "?image_process=resize,w_1024/format,webp";
export const IMAGE_COMPRESS = "?image_process=resize,w_500/format,webp";
export const IMAGE_COMPRESS_SMALL = "?image_process=resize,w_200/format,webp";

/**
 * @param image url
 * @param size small | big | compress
 */
export const handleLoadImage = (image: string, size: ImageSize = 'compress') => {
  return (
    IMAGE_PLACEHOLDER +
    image +
    (size === "small"
      ? IMAGE_COMPRESS_SMALL
      : size === "big"
        ? IMAGE_COMPRESS_BIG
        : IMAGE_COMPRESS)
  );
};
