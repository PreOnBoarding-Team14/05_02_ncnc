import Link from 'next/link';
import { useRouter } from 'next/router';
import gridStyles from '../styles/Grid.module.scss';

const Grid = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;
  const isCategory = router.pathname.includes('/categories');

  return (
    <section>
      <div className={gridStyles.div}>
        {/* 외부컨테이너 */}
        {data.map((e) => (
          <div key={e.id}>
            {/* 요소 컨테이너 */}
            <Link
              href={
                isCategory
                  ? {
                      pathname: `/brands/${e.id}`,
                      query: { current: id },
                    }
                  : `/categories/${e.id}`
              }
              as={isCategory ? `/brands/${e.id}` : `/categories/${e.id}`}
            >
              <a>
                <div>
                  <img src={e.imageUrl} />
                  <div>{e.name}</div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Grid;
