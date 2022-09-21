import { PropTypes } from "prop-types";

const user = {};

user.PropTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  date: PropTypes.date.isRequired,
  items: PropTypes.arrayOf,
};
export default user;
