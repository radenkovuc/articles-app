import classNames from "classnames";

import useArticles from "@/state/hooks";
import { useStateContext } from "@/state";

const BASE_CLASS = "articles-app__header";

export const Header = (): JSX.Element => {
  const { refetch } = useArticles();
  const { setArticles } = useStateContext();

  const updateData = async () => {
    const { data } = await refetch();
    setArticles(data);
  };

  return (
    <div
      className={classNames(BASE_CLASS, `${BASE_CLASS}--test`)}
      onClick={updateData}
    >
      Hello
    </div>
  );
};
