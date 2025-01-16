import MentorCard from './MentorCard';
import SliderWrapper from 'components/common/SliderWrapper';
import { mentors } from 'data/mentors';

const MonthlyMentors = () => {
  return <SliderWrapper title="Top Service Providers" SliderCard={MentorCard} data={mentors} />;
};

export default MonthlyMentors;
