import Image, { ImageProps } from 'next/image';

import { Box, BoxProps } from '@chakra-ui/react';

type BoxOmitted = 'w' | 'width' | 'h' | 'height';
type NextImageOmitted = 'src' | 'alt';
interface WrappedNextImageProps extends Omit<BoxProps, BoxOmitted> {
  src: string;
  alt: string;
  width: string;
  height: string;
  nextImageProps?: Omit<ImageProps, NextImageOmitted>;
}
/**
 * @param width Image의 가로 크기를 넣으시면 됩니다.
 * @param height Image의 세로 크기를 넣으시면 됩니다.
 * @param src Image의 path를 넣으시면 됩니다.
 * @param alt Image의 부가설명을 넣으시면 됩니다.
 * @param nextImageProps next에서 제공하는 Image컴포넌트의 속성을 추가적으로 넣으려면 이 param을 이용하시면 됩니다. (optional param입니다.)
 *
 * @description imageSize를 통해 Image크기가 정해지는 Next의 Image컴포넌트 입니다.
 */
const WrappedNextImage = ({
  src,
  alt,
  width,
  height,
  nextImageProps,
  ...props
}: WrappedNextImageProps) => {
  return (
    <Box
      pos={props.pos || props.position || 'relative'}
      w={width}
      h={height}
      {...props}
    >
      <Image src={src} alt={alt} fill {...nextImageProps} />
    </Box>
  );
};

export default WrappedNextImage;

/**
 * @Description priority에 대해서
 * When true, the image will be considered high priority and preload.
 * Should only be used when the image is visible above the fold.
 * Defaults to false.
 *
 * true인 경우 이미지가 높은 우선 순위와 preload로 간주된다.
 * 이미지가 웹 사이트 상단부에 보여져야하는 경우에만 사용해야 한다.
 * (priority의 기본값은 false이다.)
 */

/**
 * @Description Next Image를 사용할때 상위 요소에 맞추는 방법:
 * Next Image에 fill옵션을 true로 주면 부모요소의 크기를 따라간다.
 * 단, 상위요소에는 position이 absolute나 relative가 걸려있어야 한다.
 * 그렇지 않으면 이미지가 전체화면에 다 덮여진다.
 *
 * Next Image에 fill옵션을 적용하면 width, height를 사용하지 못한다.
 * 쓸거면 둘 중 하나는 포기해야함.
 */
