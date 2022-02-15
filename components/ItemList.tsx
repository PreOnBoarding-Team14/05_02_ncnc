import { useRouter } from 'next/router';

import itemListStyles from '../styles/ItemList.module.scss';

const ItemList = ({ data }) => {
  const router = useRouter();
  const isCategory = router.pathname.includes('/categories');

  return (
    <div className={itemListStyles.div}>
      {data.map((e) => (
        <div key={e.id}>
          <div>
            <img src={e.imageUrl} />
            <div>
              <div>{e.name}</div>
              <div>
                <span>
                  {isCategory
                    ? e.discountRate
                    : 100 -
                      Number((e.minSellingPrice / e.originalPrice).toFixed(2)) *
                        100}
                  %
                </span>
                <span>
                  {isCategory
                    ? e.ncSellingPrice.toLocaleString()
                    : e.minSellingPrice.toLocaleString()}
                  원
                </span>
                <span>{e.originalPrice.toLocaleString()}원</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
