import React from 'react';
import { ModalStyled, ButtonStyled } from './ModalComp.styled';
type Props = {
  open: boolean;
  handleOk: Function;
  setOpen: Function;
  title?: string;
  content?: string;
  submitLabel?: string;
};

const ModalComp: React.FC<Props> = ({
  open,
  handleOk,
  setOpen,
  title,
  content,
  submitLabel = 'Submit',
}) => {
  return (
    <ModalStyled
      open={open}
      title={title}
      onOk={() => handleOk()}
      onCancel={() => setOpen(false)}
      footer={[
        <ButtonStyled key="back" onClick={() => setOpen(false)}>
          Return
        </ButtonStyled>,
        <ButtonStyled key="submit" type="primary" onClick={() => handleOk()}>
          {submitLabel}
        </ButtonStyled>,
      ]}
    >
      <p>{content}</p>
    </ModalStyled>
  );
};

export default ModalComp;
