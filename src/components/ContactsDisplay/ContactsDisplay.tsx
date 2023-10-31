import {
  ContactBox,
  ContactPhone,
  ContactWraper,
  ContactsContainer,
} from './ContactsDisplay.styled';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BiMailSend } from 'react-icons/bi';
import { theme } from '../../common/theme';
import { useTranslation } from 'react-i18next';
import SocialMediaLink from '../SocialMediaLink/SocialMediaLink';

interface ContactsDisplayProps {
  displayName: 'visible' | 'none';
}

const ContactsDisplay: React.FC<ContactsDisplayProps> = ({ displayName }) => {
  const { t } = useTranslation();

  return (
    <ContactsContainer>
      <SocialMediaLink />
      <ContactBox>
        <ContactWraper displayName={displayName}>
          <ContactPhone href="tel:+48796387937">
            <BsFillTelephoneFill />
            {t('info.tel')}
          </ContactPhone>
        </ContactWraper>
      </ContactBox>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <BiMailSend size={22} style={{ color: theme.colors.lightGrey }} />
        <a
          href={`mailto:${t('info.email')}`}
          style={{
            color: theme.colors.lightGrey,
            fontSize: '0.8rem',
          }}
        >
          {t('info.email')}
        </a>
      </div>
    </ContactsContainer>
  );
};

export default ContactsDisplay;
