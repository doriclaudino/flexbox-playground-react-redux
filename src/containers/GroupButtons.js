import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as action from "../actions";
import GroupButtons from "../components/GroupButtons";

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onRootClick: action.onRootClick,
      onAddChildClick: action.onAddChildClick,
      onDelChildClick: action.onDelChildClick,
      onUpdateCode: action.onUpdateCode
    },
    dispatch
  );
};

const mapStateToProps = state => ({
  disableRootButton: !state.ZOOM_ID,
  disableDelButton: !state.items.length || !state.CLICKED_ID,
  disableAddButton: state.items.length && !state.CLICKED_ID
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupButtons);
