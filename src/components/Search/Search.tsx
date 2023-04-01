import classNames from "classnames";

const BASE_CLASS = "articles-app__search";

export const Search = (): JSX.Element => (
  <div className={classNames(BASE_CLASS, `${BASE_CLASS}--test`)}>Hello</div>
);
