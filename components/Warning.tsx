import WarningStyles from '../styles/Warning.module.scss';

const Warning = ({ isClicked }: any) => {
  return (
    <>
      <div className={WarningStyles.container}>
        <div className={isClicked ? WarningStyles.black : null}>
          <div className={WarningStyles.title}>유의사항</div>
          <div className={WarningStyles.contents}>
            <div>· 쿠폰 사용처에서 유효기간 내 사용이 가능합니다.</div>
            <div>
              · 포인트 적립 및 제휴카드 할인 등은 교환처의 정책에 따릅니다.
            </div>
            <div>
              · 바코드 인식이 안 될 경우, 바코드 번호를 입력하여 결제 할 수
              있습니다.
            </div>
          </div>
          <div className={WarningStyles.title}>환불규정</div>
          <div className={WarningStyles.contents}>
            <div>· 본 쿠폰은 환불 및 유효기간 연장이 불가합니다.</div>
            <div>
              · 쿠폰 사용이 불가할 경우, 카카오톡 플러스친구 @니콘내콘으로
              문의해주시기 바랍니다.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Warning;
