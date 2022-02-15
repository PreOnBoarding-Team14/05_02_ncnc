import Link from 'next/link';

import gridStyles from '../styles/Grid.module.scss';

const Grid = ({ data }) => {
  return (
    <section>
      <div className={gridStyles.div}>
        {/* 외부컨테이너 */}
        {data.map((e) => (
          <div key={e.id}>
            {/* 요소 컨테이너 */}
            <Link href={`/categories/${e.id}`}>
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
