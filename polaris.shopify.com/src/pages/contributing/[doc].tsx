import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import fs from "fs";
import path from "path";
import glob from "glob";
import Head from "next/head";

import Container from "../../components/Container";
import Layout from "../../components/Layout";
import Longform from "../../components/Longform";
import Markdown from "../../components/Markdown";
import PageMeta from "../../components/PageMeta";
import { contributingNavItems } from "../../data/navItems";
import { parseMarkdown } from "../../utils/markdown.mjs";
import { MarkdownFile, QuickGuide } from "../../types";

interface Props {
  readme: MarkdownFile["readme"];
  title: string;
  quickGuide?: QuickGuide[];
}

const contributingDirectory = path.join(process.cwd(), "content/contributing");

const Contributing: NextPage<Props> = ({
  readme,
  title,
  quickGuide,
}: Props) => {
  return (
    <Container>
      <Layout navItems={contributingNavItems}>
        <PageMeta title={title} />

        <Longform>
          <Markdown text={readme} frontMatter={{ quickGuide }} />
        </Longform>
      </Layout>
    </Container>
  );
};

export const getStaticProps: GetStaticProps<Props, { doc: string }> = async ({
  params,
}) => {
  const mdFilePath = path.resolve(
    process.cwd(),
    `${contributingDirectory}/${params?.doc || ""}.md`
  );

  if (fs.existsSync(mdFilePath)) {
    const markdown = fs.readFileSync(mdFilePath, "utf-8");
    const { readme, frontMatter }: MarkdownFile = parseMarkdown(markdown);

    const { quickGuide = "", name: title = "" } = frontMatter;

    const props: Props = {
      title,
      readme,
      quickGuide,
    };

    return { props };
  } else {
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const basePath = path.resolve(process.cwd(), "content/contributing");
  const paths = glob
    .sync(path.join(basePath, "*.md"))
    .map((fileName: string) => {
      return fileName
        .replace(`${process.cwd()}/content`, "")
        .replace(".md", "");
    });

  return {
    paths,
    fallback: false,
  };
};

export default Contributing;
