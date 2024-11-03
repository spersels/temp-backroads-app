const Tour = (props, key) => {
  const {
    // eslint-disable-next-line
    id,
    mainimage,
    startdate,
    title,
    text,
    footerimage,
    locationtext,
    length,
    fromprice,
  } = props.props;
  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={mainimage} className='tour-img' alt='' />
        <p className='tour-date'>{startdate}</p>
      </div>
      <div className='tour-info'>
        <div className='tour-title'>
          <h4>{title}</h4>
        </div>
        <p> {text}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className={footerimage}></i>
            </span>{' '}
            {locationtext}
          </p>
          <p>{length}</p>
          <p>from {fromprice}</p>
        </div>
      </div>
    </article>
  );
};
export default Tour;
