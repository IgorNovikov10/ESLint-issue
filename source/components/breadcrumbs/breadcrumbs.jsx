import PropTypes from 'prop-types';

const Breadcrumbs = ({}) => {
  return null;
};

Breadcrumbs.propTypes = {
  lang: PropTypes.shape({
    ariaLabel: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
};

Breadcrumbs.viewModelMeta = {
  className: 'ignore',
};

export default Breadcrumbs;
