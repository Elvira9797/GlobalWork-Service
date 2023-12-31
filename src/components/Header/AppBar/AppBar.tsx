import LangSelect from '../../LangSelect/LangSelect';
import Navigation from '../../Navigation/Navigation';
import Logo from '../../Logo/Logo';

import { GiHamburgerMenu } from 'react-icons/gi';

import {
  BurgerButton,
  HeaderNav,
  StyledAppBar,
  StyledNavWraper,
} from './AppBar.styled';
import { useAppContext } from '../../../context/AppContext';
import { useMediaQuery } from 'react-responsive';

interface AppBarProps {
  theme: {
    colors: { accentColor: string };
  };
}

const AppBar: React.FC<AppBarProps> = ({ theme }) => {
  const { openModal, isOpenModal } = useAppContext();
  const isWideScreen = useMediaQuery({ minWidth: 769 });

  return (
    <StyledAppBar>
      <Logo loc="header" size={isWideScreen ? 'lg' : 'md'} />

      <StyledNavWraper>
        <HeaderNav>
          <Navigation flexDirection="row" />
        </HeaderNav>
        {!isOpenModal && <LangSelect />}
      </StyledNavWraper>

      <BurgerButton onClick={openModal} type="button">
        {!isOpenModal && (
          <GiHamburgerMenu
            size={30}
            style={{ color: theme.colors.accentColor }}
          />
        )}
      </BurgerButton>
    </StyledAppBar>
  );
};

export default AppBar;
