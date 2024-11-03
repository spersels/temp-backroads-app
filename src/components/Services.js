import { servicelist } from '../data/servicelist';
import Service from './Service';
import Title from './Title';
const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title first='our' second='services' />
      <div className='section-center services-center'>
        {servicelist.map(({ id, title, icon, text }) => {
          return <Service icon={icon} title={title} text={text} key={id} />;
        })}
      </div>
    </section>
  );
};
export default Services;
