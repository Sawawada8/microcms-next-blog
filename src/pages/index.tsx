import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Card } from '@/components/containers/Card';
import { client } from '@/libs/client';

const Home: NextPage = ({ data, blogs }) => {
  return (
    <div>
      <Head>
        <title>mypage index</title>
      </Head>
      <div className="min-h-screen  py-8">
        <div className=" mx-auto w-3/4">
          <div className="">
            <h1 className="py-3 text-center text-2xl font-bold text-secondary">
              hello world
            </h1>
            <hr className="border-gray-600" />
            <div>
              <div className="my-10 flex justify-center">
                <img src={data.image.url} alt="" />
              </div>
              <p>{data.description}</p>
            </div>
            <hr className="border-gray-600" />
            {blogs.contents.map((v, i) => {
              return (
                <Card key={i}>
                  <div>
                    <div className="my-10 flex justify-center">
                      <img src={v.eyecatch.url} alt="" />
                    </div>
                    <h1 className="text-3xl font-bold">{v.title}</h1>
                    <p>{v.content}</p>
                  </div>
                </Card>
              );
            })}
            <hr className="border-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({
    endpoint: 'banner',
  });
  const blogs = await client.get({
    endpoint: 'blogs',
  });
  return {
    props: { data, blogs },
  };
};
