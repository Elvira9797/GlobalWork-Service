import {
  SocialLink,
  SocialList,
  SocialListItem,
} from './SocialMediaLink.styled';
import {
  FaFacebookF,
  // FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from 'react-icons/fa';

interface SocialMediaProps {
  iconSize?: number;
  color?: string;
  style?: {};
}

const SocialMediaLink: React.FC<SocialMediaProps> = ({
  iconSize = 22,
  color = 'white',
}) => {
  return (
    <SocialList>
      <SocialListItem>
        <SocialLink
          href="https://www.facebook.com/profile.php?id=61551079270752"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={iconSize} color={color} />
        </SocialLink>
      </SocialListItem>
      <SocialListItem>
        <SocialLink href="" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane size={iconSize} color={color} />
        </SocialLink>
      </SocialListItem>
      <SocialListItem>
        <SocialLink
          href="https://wa.me/+48796387937"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={iconSize} color={color} />
        </SocialLink>
      </SocialListItem>
      {/* <SocialListItem>
        <SocialLink
          href="https://instagram.com/aj_serwis_sp_z_o_o?igshid=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={iconSize} color="white" />
        </SocialLink>
      </SocialListItem> */}
    </SocialList>
  );
};

export default SocialMediaLink;
