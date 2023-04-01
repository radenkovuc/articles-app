import { useEffect } from "react";
import { GetServerSideProps } from "next";

import useArticles from "@/state/hooks";
import { useStateContext } from "@/state";

import Header from "@/components/Header";
import Search from "@/components/Search";
import Articles from "@/components/Articles";

interface Props {
  readonly search: string;
  readonly category: string | null;
}

const Home = ({ search, category }: Props): JSX.Element => {
  const { data, isLoading, isError } = useArticles();
  const { setArticles, setSearch, setCategory } = useStateContext();
  console.log(search, category);

  useEffect(() => {
    setSearch(search);
    setCategory(category);
  }, []);

  useEffect(() => {
    setArticles(data);
  }, [data]);

  if (isLoading) {
    //Loading page
    return <div>Loading...</div>;
  }

  if (isError) {
    //Error page
    return <div>Error...</div>;
  }

  return (
    <div>
      <Header />
      <Search />
      <Articles />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, filter } = context.query;

  return {
    props: {
      search: query || "",
      category: filter || null,
    },
  };
};

export default Home;
