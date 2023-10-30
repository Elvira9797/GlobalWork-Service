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

const WorkPermits: React.FC = () => {
  return (
    <WorkPermitsSection>
      <SectionContainer>
        <SectionTitle>Work permits</SectionTitle>

        <DocsList>
          <DocsItems>
            <PolandSvg
              style={{ margin: '0 auto', display: 'flex' }}
              width={70}
              height={70}
            />
            <DocsItemTitle>Poland</DocsItemTitle>
            <Bolt>Work permit for 1 or 2 years</Bolt>
            <p>(processing time: 1 month)</p>
            <DocsItemPrice>Price: 500€</DocsItemPrice>
          </DocsItems>

          <DocsItems>
            <PolandSvg
              style={{ margin: '0 auto', display: 'flex' }}
              width={70}
              height={70}
            />
            <DocsItemTitle>Poland</DocsItemTitle>
            <Bolt>Poland seasonal work permit</Bolt>
            <p>(processing time: 2 days)</p>
            <DocsItemPrice>Price: 300€</DocsItemPrice>
          </DocsItems>

          <DocsItems>
            <CzechSvg
              style={{ margin: '0 auto', display: 'flex' }}
              width={70}
              height={70}
            />
            <DocsItemTitle>Czech Republic</DocsItemTitle>
            <Bolt>Work permit for 90 days</Bolt>
            <p>(processing time: 20 days)</p>
            <DocsItemPrice>Price: 350€</DocsItemPrice>
          </DocsItems>
          <DocsItems>
            <CzechSvg
              style={{ margin: '0 auto', display: 'flex' }}
              width={70}
              height={70}
            />
            <DocsItemTitle>Czech Republic</DocsItemTitle>
            <Bolt>Work permit for 270 days</Bolt>
            <p>(processing time: 1 month)</p>
            <DocsItemPrice>Price: 650€</DocsItemPrice>
          </DocsItems>
        </DocsList>
      </SectionContainer>
    </WorkPermitsSection>
  );
};

export default WorkPermits;
