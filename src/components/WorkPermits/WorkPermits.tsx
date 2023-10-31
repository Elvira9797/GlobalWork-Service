import SectionContainer from '../SectionContainer/SectionContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import { ReactComponent as PolandSvg } from '../../assets/svg/poland.svg';
import { ReactComponent as CzechSvg } from '../../assets/svg/czech.svg';
import {
  DocsItemPrice,
  DocsItemTitle,
  DocsItems,
  DocsList,
  WorkPermitsSection,
  Bolt,
} from './WorkPermits.styled';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const WorkPermits: React.FC = () => {
  const { t } = useTranslation();

  return (
    <WorkPermitsSection>
      <SectionContainer>
        <SectionTitle>{t('main.workPermitsArr.title')}</SectionTitle>
        <Link to="contactUs" smooth={true} duration={1000}>
          <DocsList>
            <DocsItems>
              <PolandSvg
                style={{ margin: '0 auto', display: 'flex' }}
                width={70}
                height={70}
              />
              <DocsItemTitle>
                {t('main.workPermitsArr.workPermit1.title')}
              </DocsItemTitle>
              <Bolt> {t('main.workPermitsArr.workPermit1.name')}</Bolt>
              <p> {t('main.workPermitsArr.workPermit1.time')}</p>
              <DocsItemPrice>
                {' '}
                {t('main.workPermitsArr.workPermit1.price')}
              </DocsItemPrice>
            </DocsItems>

            <DocsItems>
              <PolandSvg
                style={{ margin: '0 auto', display: 'flex' }}
                width={70}
                height={70}
              />
              <DocsItemTitle>
                {t('main.workPermitsArr.workPermit2.title')}
              </DocsItemTitle>
              <Bolt> {t('main.workPermitsArr.workPermit2.name')}</Bolt>
              <p> {t('main.workPermitsArr.workPermit2.time')}</p>
              <DocsItemPrice>
                {t('main.workPermitsArr.workPermit2.price')}
              </DocsItemPrice>
            </DocsItems>

            <DocsItems>
              <CzechSvg
                style={{ margin: '0 auto', display: 'flex' }}
                width={70}
                height={70}
              />
              <DocsItemTitle>
                {t('main.workPermitsArr.workPermit3.title')}
              </DocsItemTitle>
              <Bolt> {t('main.workPermitsArr.workPermit3.name')}</Bolt>
              <p> {t('main.workPermitsArr.workPermit3.time')}</p>
              <DocsItemPrice>
                {t('main.workPermitsArr.workPermit3.price')}
              </DocsItemPrice>
            </DocsItems>
            <DocsItems>
              <CzechSvg
                style={{ margin: '0 auto', display: 'flex' }}
                width={70}
                height={70}
              />
              <DocsItemTitle>
                {t('main.workPermitsArr.workPermit4.title')}
              </DocsItemTitle>
              <Bolt> {t('main.workPermitsArr.workPermit4.name')}</Bolt>
              <p> {t('main.workPermitsArr.workPermit4.time')}</p>
              <DocsItemPrice>
                {t('main.workPermitsArr.workPermit4.price')}
              </DocsItemPrice>
            </DocsItems>
          </DocsList>
        </Link>
      </SectionContainer>
    </WorkPermitsSection>
  );
};

export default WorkPermits;
