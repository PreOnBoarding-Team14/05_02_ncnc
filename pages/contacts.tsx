import { useState } from 'react';
import { getContactsType, getContactsQas } from 'apis/contact';
import {
  ContactResponseProps,
  ContactsListResponseProps,
} from 'interfaces/contact';
import ContactsItem from 'components/ContactsItem';
import contactsStyle from 'styles/Contacts.module.scss';
import NavBar from 'components/Navbar';

interface ContactsTypeQasProps {
  qaTypes: ContactResponseProps;
  qasList: ContactsListResponseProps;
}

export default function Contacts({ qaTypes, qasList }: ContactsTypeQasProps) {
  const [selectTab, setSelectTab] = useState(false);
  const typeList = qaTypes;
  const buyQasList = qasList.buyQas;
  const sellQasList = qasList.sellQas;

  function tabChange(e: React.MouseEvent<HTMLButtonElement>) {
    if (e.currentTarget.id === '구매') {
      setSelectTab(false);
    } else {
      setSelectTab(true);
    }
  }

  function getQasList() {
    if (selectTab) {
      return (
        <>
          {sellQasList.map((item) => (
            <ContactsItem key={item.id} contact={item} />
          ))}
        </>
      );
    } else {
      return (
        <>
          {buyQasList.map((item) => (
            <ContactsItem key={item.id} contact={item} />
          ))}
        </>
      );
    }
  }

  const contactsAttr = { name: '고객센터', path: '/contacts' };

  return (
    <>
      <NavBar attr={contactsAttr} />
      <div className={contactsStyle.bodyContainer}>
        <section className={contactsStyle.infoSection}>
          <div className={contactsStyle.contactTimeTitle}>상담시간 안내</div>
          <div className={contactsStyle.contactDay}>평일 10:00 ~ 18:00</div>
          <div className={contactsStyle.contactTimeInfo}>
            점심시간 12:30 - 13:30 / 토 ・ 일 ・ 공휴일 휴무
          </div>
        </section>
        <div className={contactsStyle.line} />
        <section className={contactsStyle.questionTabbox}>
          <div className={contactsStyle.questionTitle}>자주 묻는 질문</div>
          <div className={contactsStyle.tabbox}>
            <button
              id="구매"
              onClick={(e) => tabChange(e)}
              className={`${contactsStyle.tabBtn} ${
                selectTab ? 'selected' : ''
              }`}
              style={
                !selectTab
                  ? {
                      color: '#f75656',
                      borderBottom: '2px solid #f75656',
                    }
                  : {}
              }
            >
              구매
            </button>
            <button
              id="판매"
              onClick={(e) => tabChange(e)}
              className={`${contactsStyle.tabBtn} ${
                !selectTab ? 'selected' : ''
              }`}
              style={
                selectTab
                  ? {
                      color: '#f75656',
                      borderBottom: '2px solid #f75656',
                    }
                  : {}
              }
            >
              판매
            </button>
          </div>
        </section>
        <div className={contactsStyle.line} />
        <section>{getQasList()}</section>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const typeRes = await getContactsType();
  const { qaTypes } = typeRes;

  const buyResponse = await getContactsQas(1);
  const sellReponse = await getContactsQas(2);

  const getQas = (res) => {
    const { qas } = res;
    return qas;
  };

  return {
    props: {
      qaTypes,
      qasList: {
        buyQas: getQas(buyResponse),
        sellQas: getQas(sellReponse),
      },
    },
  };
};
