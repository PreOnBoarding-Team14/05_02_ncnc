import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import itemListStyles from '../styles/ItemList.module.scss';

const ItemList = ({ data }) => {
  return (
    <div className={itemListStyles.div}>
      {data.map((e) => (
        <Link href={`/items/${e.id}`} key={e.id}>
          <a>
            <div>
              <div>
                <Image
                  className={itemListStyles.img}
                  src={e.imageUrl}
                  width="74px"
                  height="74px"
                />
                <div>
                  <div>{e.name}</div>
                  <div>
                    <span>
                      {e.discountRate
                        ? e.discountRate
                        : (
                            100 -
                            (e.minSellingPrice / e.originalPrice) * 100
                          ).toFixed(0)}
                      %
                    </span>
                    <span>
                      {e.ncSellingPrice
                        ? e.ncSellingPrice.toLocaleString()
                        : e.minSellingPrice.toLocaleString()}
                      원
                    </span>
                    <span>{e.originalPrice.toLocaleString()}원</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
