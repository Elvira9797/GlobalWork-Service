import { useEffect, useState } from 'react';
import { ContactPhone, StyledNavWraper, StyledTopBar } from './TopBar.styled';
import { IoMdMail } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { BsFillTelephoneFill } from 'react-icons/bs';
import SocialMediaLink from '../../SocialMediaLink/SocialMediaLink';

const TopBar: React.FC = () => {
  const [isTop, setIsTop] = useState(true);
  const [visible, setVisible] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY === 0 ? setIsTop(true) : setIsTop(false);

    window.scrollY > 100 ? setVisible(false) : setVisible(true);

    const cleanScroll = () => {
      window.removeEventListener('scroll', handleScroll);
    };
    window.addEventListener('scroll', handleScroll);

    return cleanScroll;
  }, [visible]);

  return (
    <StyledTopBar isVisible={isTop}>
      <StyledNavWraper>
        <IoMdMail />
        <a href={`mailto:${t('info.email')}`}>{t('info.email')}</a>
      </StyledNavWraper>
      <div style={{ display: 'flex', gap: '8px' }}>
        <SocialMediaLink iconSize={18} color={'rgb(116, 123, 142)'} />

        <ContactPhone href="tel:+48796387937">
          <BsFillTelephoneFill />
        </ContactPhone>
      </div>
    </StyledTopBar>
  );
};

export default TopBar;
