import Pencil from '../assets/pencil.svg';
import selectBtnStyles from '../styles/SelectBtn.module.scss';
import Image from 'next/image';

const SelectBtn = ({
  options,
  isClicked,
  handleClick,
  originalPrice,
  option,
  handleOption,
}) => {
  const getDate = (expire) => {
    const date = new Date(expire);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day} 까지`;
  };

  return (
    <div className={selectBtnStyles.container}>
      {isClicked ? (
        <div>
          <div className={selectBtnStyles.select}>옵션 선택하기</div>
          {options.map((e, i) => {
            return (
              <div
                key={i}
                className={selectBtnStyles.mapContainer}
                onClick={() => {
                  handleOption(
                    `${getDate(e.expireAt)} / ${Number(
                      e.sellingPrice,
                    ).toLocaleString()}원`,
                  );
                  handleClick();
                }}
              >
                <div className={selectBtnStyles.title}>
                  <div>유효기간</div>
                  <div>할인가</div>
                </div>
                <div className={selectBtnStyles.contents}>
                  <div>{getDate(e.expireAt)}</div>
                  <div>{Number(e.sellingPrice).toLocaleString()}원</div>
                </div>
                <div className={selectBtnStyles.rate}>
                  {((1 - Number(e.sellingPrice) / originalPrice) * 100).toFixed(
                    0,
                  )}
                  %
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
      {option && (
        <div className={selectBtnStyles.option}>
          <div>
            <div>{option}</div>
            <div>
              <Image
                src={Pencil}
                onClick={
                  option
                    ? () => {
                        handleOption(null);
                        handleClick();
                      }
                    : null
                }
              />
            </div>
          </div>
        </div>
      )}
      <div
        className={
          isClicked
            ? selectBtnStyles.selectedBtnContainer
            : selectBtnStyles.btnContainer
        }
      >
        <button
          onClick={
            option
              ? null
              : () => {
                  handleOption(null);
                  handleClick();
                }
          }
        >
          {option ? '구매하기' : '옵션 선택하기'}
        </button>
      </div>
    </div>
  );
};

export default SelectBtn;
