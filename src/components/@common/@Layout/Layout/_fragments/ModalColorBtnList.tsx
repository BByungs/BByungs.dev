import { ModalItemWrapper, ModalColorModeButton } from '.';

const colorModeList: ColorModeType[] = ['light', 'dark'];

const ModalColorBtnList = () => {
  return (
    <ModalItemWrapper title="Color Mode">
      {colorModeList.map((colorMode) => (
        <ModalColorModeButton mode={colorMode} key={`${colorMode}-colorMode`} />
      ))}
    </ModalItemWrapper>
  );
};

export default ModalColorBtnList;
