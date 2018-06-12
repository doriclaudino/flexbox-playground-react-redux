import { connect } from "react-redux";
import ElementCode from "../components/ElementCode";
import { bindActionCreators } from "redux";
import { onUpdateCode } from "../actions";

const getStyleById = (items, id) => {
  var result;
  items.some(item => {
    if (item.id === id) {
      return (result = item.style);
    }
    if (item.items) {
      return (result = getStyleById(item.items, id));
    }
    return 0;
  });
  return result;
};

const mapStateToProps = state => ({
  code: getStyleById(state.items, state.CLICKED_ID),
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onUpdateCode
    },
    dispatch
  );
};

export default connect(
  (state) => ({
    code: getStyleById(state.items,
      state.CLICKED_ID),
    readOnly: false
  }),
  mapDispatchToProps
)(ElementCode);
