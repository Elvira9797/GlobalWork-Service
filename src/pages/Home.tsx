import Hero from '../components/Hero/Hero';
import VacanciesSlider from '../components/VacanciesSlider/VacanciesSlider';
import WhyAjSerwis from '../components/WhyAjSerwis/WhyAjSerwis';

import { useTranslation } from 'react-i18next';
import {
  ICardFields,
  IVacancieData,
  vacanciesImages,
} from '../common/vacanciesArr';
import WorkPermits from '../components/WorkPermits/WorkPermits';
import VacancieDetailsFormSection from '../components/VacancieDetailsForm/VacancieDetailsFormSection';

const Home = () => {
  const { t } = useTranslation();
  const jobListings: IVacancieData[] = t('main.vacancies.job_listing', {
    returnObjects: true,
  });
  const cardFields: ICardFields = t('main.vacancies.card_fields', {
    returnObjects: true,
  });

  return (
    <>
      <Hero />
      <WorkPermits />
      <VacanciesSlider
        title={t('main.vacancies.title')}
        vacancies={jobListings}
        cardFields={cardFields}
        vacanciesImages={vacanciesImages}
      />
      <WhyAjSerwis />
      <VacancieDetailsFormSection vacancyName="undefined" />
    </>
  );
};

export default Home;
