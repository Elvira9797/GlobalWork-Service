import SectionContainer from '../SectionContainer/SectionContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import { ReactComponent as PolandSvg } from '../../assets/svg/poland.svg';
import { ReactComponent as CzechSvg } from '../../assets/svg/czech.svg';
import { ReactComponent as LithuaniaSvg } from '../../assets/svg/lithuania.svg';
import { ReactComponent as SerbiaSvg } from '../../assets/svg/Serbia.svg';
import { ReactComponent as AlbaniaSvg } from '../../assets/svg/Albania.svg';
import { ReactComponent as HungarySvg } from '../../assets/svg/Hungary.svg';
import { ReactComponent as CroatiaSvg } from '../../assets/svg/Croatia.svg';
import { ReactComponent as SloveniaSvg } from '../../assets/svg/Slovenia.svg';
import { ReactComponent as MontenegroSvg } from '../../assets/svg/Montenegro.svg';
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

            <DocsItems>
              <CzechSvg
                style={{ margin: '0 auto', display: 'flex' }}
                width={70}
                height={70}
              />
              <DocsItemTitle>
                {t('main.workPermitsArr.workPermit5.title')}
              </DocsItemTitle>
              <Bolt> {t('main.workPermitsArr.workPermit5.name')}</Bolt>
              <p> {t('main.workPermitsArr.workPermit5.time')}</p>
              <DocsItemPrice>
                {t('main.workPermitsArr.workPermit5.price')}
              </DocsItemPrice>
            </DocsItems>

            <DocsItems>
              <LithuaniaSvg
                style={{ margin: '0 auto', display: 'flex' }}
                width={70}
                height={70}
              />
              <DocsItemTitle>
                {t('main.workPermitsArr.workPermit6.title')}
              </DocsItemTitle>
              <Bolt> {t('main.workPermitsArr.workPermit6.name')}</Bolt>
              <p> {t('main.workPermitsArr.workPermit6.time')}</p>
              <DocsItemPrice>
                {t('main.workPermitsArr.workPermit6.price')}
              </DocsItemPrice>
            </DocsItems>
            <DocsItems>
              <SerbiaSvg
                style={{ margin: '0 auto', display: 'flex' }}
                width={70}
                height={70}
              />
              <DocsItemTitle>
                {t('main.workPermitsArr.workPermit7.title')}
              </DocsItemTitle>
              <Bolt> {t('main.workPermitsArr.workPermit7.name')}</Bolt>
              <p> {t('main.workPermitsArr.workPermit7.time')}</p>
              <DocsItemPrice>
                {t('main.workPermitsArr.workPermit7.price')}
              </DocsItemPrice>
            </DocsItems>
            <DocsItems>
              <AlbaniaSvg
                style={{ margin: '0 auto', display: 'flex' }}
                width={70}
                height={70}
              />
              <DocsItemTitle>
                {t('main.workPermitsArr.workPermit8.title')}
              </DocsItemTitle>
              <Bolt> {t('main.workPermitsArr.workPermit8.name')}</Bolt>
              <p> {t('main.workPermitsArr.workPermit8.time')}</p>
              <DocsItemPrice>
                {t('main.workPermitsArr.workPermit8.price')}
              </DocsItemPrice>
            </DocsItems>
            <DocsItems>
              <HungarySvg
                style={{ margin: '0 auto', display: 'flex' }}
                width={70}
                height={70}
              />
              <DocsItemTitle>
                {t('main.workPermitsArr.workPermit9.title')}
              </DocsItemTitle>
              <Bolt> {t('main.workPermitsArr.workPermit9.name')}</Bolt>
              <p> {t('main.workPermitsArr.workPermit9.time')}</p>
              <DocsItemPrice>
                {t('main.workPermitsArr.workPermit9.price')}
              </DocsItemPrice>
            </DocsItems>
            <DocsItems>
              <CroatiaSvg
                style={{ margin: '0 auto', display: 'flex' }}
                width={70}
                height={70}
              />
              <DocsItemTitle>
                {t('main.workPermitsArr.workPermit10.title')}
              </DocsItemTitle>
              <Bolt> {t('main.workPermitsArr.workPermit10.name')}</Bolt>
              <p> {t('main.workPermitsArr.workPermit10.time')}</p>
              <DocsItemPrice>
                {t('main.workPermitsArr.workPermit10.price')}
              </DocsItemPrice>
            </DocsItems>
            <DocsItems>
              <CroatiaSvg
                style={{ margin: '0 auto', display: 'flex' }}
                width={70}
                height={70}
              />
              <DocsItemTitle>
                {t('main.workPermitsArr.workPermit11.title')}
              </DocsItemTitle>
              <Bolt> {t('main.workPermitsArr.workPermit11.name')}</Bolt>
              <p> {t('main.workPermitsArr.workPermit11.time')}</p>
              <DocsItemPrice>
                {t('main.workPermitsArr.workPermit11.price')}
              </DocsItemPrice>
            </DocsItems>
            <DocsItems>
              <SloveniaSvg
                style={{ margin: '0 auto', display: 'flex' }}
                width={70}
                height={70}
              />
              <DocsItemTitle>
                {t('main.workPermitsArr.workPermit12.title')}
              </DocsItemTitle>
              <Bolt> {t('main.workPermitsArr.workPermit12.name')}</Bolt>
              <p> {t('main.workPermitsArr.workPermit12.time')}</p>
              <DocsItemPrice>
                {t('main.workPermitsArr.workPermit12.price')}
              </DocsItemPrice>
            </DocsItems>
            <DocsItems>
              <MontenegroSvg
                style={{ margin: '0 auto', display: 'flex' }}
                width={70}
                height={70}
              />
              <DocsItemTitle>
                {t('main.workPermitsArr.workPermit13.title')}
              </DocsItemTitle>
              <Bolt> {t('main.workPermitsArr.workPermit13.name')}</Bolt>
              <p> {t('main.workPermitsArr.workPermit13.time')}</p>
              <DocsItemPrice>
                {t('main.workPermitsArr.workPermit13.price')}
              </DocsItemPrice>
            </DocsItems>
          </DocsList>
        </Link>
      </SectionContainer>
    </WorkPermitsSection>
  );
};

export default WorkPermits;
