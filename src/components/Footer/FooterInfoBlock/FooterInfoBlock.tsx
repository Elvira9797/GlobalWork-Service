import Logo from '../../Logo/Logo';

import { StyledFooterInfoBlock } from './FooterInfoBlock.styled';

const FooterInfoBlock: React.FC = () => {
  return (
    <StyledFooterInfoBlock>
      <Logo loc="footer" size="lg" />
    </StyledFooterInfoBlock>
  );
};

export default FooterInfoBlock;
