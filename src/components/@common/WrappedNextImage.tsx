import Image, { ImageProps } from 'next/image';
import { Box, BoxProps } from '@chakra-ui/react';

type Omitted = 'src' | 'alt';
export type WrappedNextImageType = Omit<ImageProps, Omitted>;

interface WrappedNextImageProps extends BoxProps {
  src: string;
  alt: string;
  nextImageProps?: WrappedNextImageType;
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
  nextImageProps,
  ...props
}: WrappedNextImageProps) => {
  return (
    <Box
      pos={props.pos || props.position || 'relative'}
      w={props.width || props.w || '100%'}
      h={props.height || props.h || '150px'}
      {...props}
    >
      <Image src={src} alt={alt} fill {...nextImageProps} />
    </Box>
  );
};

export default WrappedNextImage;
