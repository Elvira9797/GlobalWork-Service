// import ContactUs from '../components/ContactUs/ContactUs';
import Hero from '../components/Hero/Hero';
import VacanciesSlider from '../components/VacanciesSlider/VacanciesSlider';

import { useTranslation } from 'react-i18next';
import {
  ICardFields,
  IVacancieData,
  vacanciesImages,
} from '../common/vacanciesArr';
import WorkPermits from '../components/WorkPermits/WorkPermits';
import VacancieDetailsFormSection from '../components/VacancieDetailsForm/VacancieDetailsFormSection';
import WhyGlobalWork from '../components/WhyGlobalWork/WhyGlobalWork';

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
      <WhyGlobalWork />
      <VacancieDetailsFormSection />
    </>
  );
};

export default Home;
