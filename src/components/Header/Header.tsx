import classNames from "classnames";

const BASE_CLASS = "app__header";

export const Header = (): JSX.Element => (
  <div className={classNames(BASE_CLASS, `${BASE_CLASS}--test`)}>Hello</div>
);
