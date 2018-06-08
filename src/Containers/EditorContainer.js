import React from "react";
import { connect } from "react-redux";
import { onChildClick } from "../Actions";
import Editor from "../Components/Editor";
import Child from "../Components/Child";

const mapChildren = (children = [], dispatch, onclick) => {
  /*combined destructuring, JSX Spread */
  return children.map(({ id, ...child }) => {
    return (
      <Child
        key={id}
        id={id}
        {...child}
        /**if statment
         * children={child.children && mapChildren(child.children)}
         */
        onClick={e => onclick(id, e, dispatch)}
        children={mapChildren(child.children, dispatch, onclick)}
      />
    );
  });
};

const mapStateToProps = (state, ownProp) => ({
  children: mapChildren(
    state.children,
    ownProp.store.dispatch,
    onChildClickHandler
  )
});

/**
 * (id) for save the id
 * (e) for stop propagation
 * (dispatch) reference to callBack
 */
const onChildClickHandler = (id, e, dispatchRef) => {
  dispatchRef(onChildClick(id, e));
};

const EditorContainer = connect(mapStateToProps, null)(Editor);

export default EditorContainer;
