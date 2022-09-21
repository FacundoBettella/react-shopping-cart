import { PropTypes } from "prop-types";

const product = {};

product.PropTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  shortDescription: PropTypes.string,
  largDescription: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
};

export default product;
