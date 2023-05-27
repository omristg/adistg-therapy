import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import styled from "styled-components";
import type { GetStaticProps } from "next";

type Props = { post: any };

const PostsPage = ({ post }: Props) => {
  return (
    <Container>
      <h1>Post Page</h1>
    </Container>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const post = await client.fetch(groq`*[]`);

  return {
    props: { post },
  };
};

const Container = styled.main`
  background-color: lightblue;
  min-height: 100vh;
`;

export default PostsPage;
