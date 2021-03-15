import styles from './index.less';
import { IGetInitialProps } from 'umi';
import { Helmet } from 'umi';

const Home = (props: {data:{title:string}}) => {
  const { data } = props;
  return (
    <>
      <h1 className={styles.title}>{data.title}</h1>
    </>
)
}

// Home.getInitialProps = (async (ctx) => {
//   return Promise.resolve({
//     data: {
//       title: 'Hello World',
//     }
//   })
// }) as IGetInitialProps;
//
// export default Home

export default function IndexPage() {
  return (
    <>
      <Helmet encodeSpecialCharacters={false}>
        <html lang="en" data-direction="666" />
        <title>Hello Umi Bar Title</title>
      </Helmet>
      <div>
        <h1 className={styles.title}>Page index</h1>
      </div>
    </>
  );
}
