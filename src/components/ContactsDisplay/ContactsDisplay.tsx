import {
  AddressPhone,
  ContactBox,
  ContactPhone,
  ContactWraper,
  ContactsContainer,
} from './ContactsDisplay.styled';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { BiMailSend } from 'react-icons/bi';
import { theme } from '../../common/theme';
import { useTranslation } from 'react-i18next';

interface ContactsDisplayProps {
  displayName: 'visible' | 'none';
}

const ContactsDisplay: React.FC<ContactsDisplayProps> = ({ displayName }) => {
  const { t } = useTranslation();

  return (
    <ContactsContainer>
      <ContactBox>
        <ContactWraper displayName={displayName}>
          <ContactPhone href="tel:+48796387937">
            <BsFillTelephoneFill />
            {t('info.tel')}
          </ContactPhone>
        </ContactWraper>
      </ContactBox>
      <AddressPhone>
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <MdLocationOn size={22} style={{ color: theme.colors.lightGrey }} />
          <p
            style={{
              color: theme.colors.lightGrey,
              fontSize: '0.8rem',
            }}
          >
            Korunni 1208/74, 101 00, Praha 10 - Vinohrady
          </p>
        </div>
      </AddressPhone>
    </ContactsContainer>
  );
};

export default ContactsDisplay;
