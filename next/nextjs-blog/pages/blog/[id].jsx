import Layout from "../../components/Layout";
import Date from "../../components/date";
import Head from 'next/head';
import { getAllBlogsIds, getBlogData } from "../../lib/post";

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1>{postData.title}</h1>
                <div>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllBlogsIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getBlogData(params.id);
    return {
        props: {
            postData
        }
    }
}