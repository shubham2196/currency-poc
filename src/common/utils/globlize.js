// @flow
import _ from "lodash";

export default <ReturnType>(
  selector: (...args: any[]) => ReturnType,
  path: string
) => (globalState: Object) => {
  const state = _.get(globalState, path);
  return selector(state);
};
