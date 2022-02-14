import axios from 'axios';

export default function Home({ conCategories }) {
  return (
    <div>
      <div>
        {conCategories.map((conCategory) => (
          <div key={conCategory.id}>
            <div>
              <img src={conCategory.imageUrl} alt={conCategory.name} />
              <div>{conCategory.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const res = await axios.get('https://api2.ncnc.app/con-category1s');
    if (res.status === 200) {
      const conCategories = res.data.conCategory1s;
      return { props: { conCategories } };
    }
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};
