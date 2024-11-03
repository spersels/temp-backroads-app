import { tourlist } from '../data/tourlist';
import Title from './Title';
import Tour from './Tour';
const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title first='featured' second='tours' />
      <div className='section-center featured-center'>
        {tourlist.map((tour) => {
          return <Tour props={tour} key={tour.id} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
