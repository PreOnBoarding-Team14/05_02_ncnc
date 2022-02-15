import { getConCategories } from 'apis/main';
import Grid from 'components/Grid';

export default function Home({ conCategories }) {
  return (
    <div>
      <div>
        <Grid data={conCategories} />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await getConCategories();
  const conCategories = res.conCategory1s;
  return {
    props: {
      conCategories,
    },
  };
};
