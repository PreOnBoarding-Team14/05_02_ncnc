import TopCountStyles from '../styles/TopCount.module.scss';

const TopCount = ({ count }) => {
  return (
    <div className={TopCountStyles.div}>
      <div>{count}개의 상품</div>
    </div>
  );
};

export default TopCount;
