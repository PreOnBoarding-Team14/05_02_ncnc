import { getContactsType, getContactsQas } from 'apis/contact';
import { ContactResponseProps, ContactsListResponseProps } from 'interfaces/contact';
import contactsStyle from 'styles/Contacts.module.scss';

interface ContactsTypeQasProps {
  qaTypes: ContactResponseProps;
  qasList: ContactsListResponseProps;
}

export default function Contacts({ qaTypes, qasList }: ContactsTypeQasProps) {
	const typeList = qaTypes;
	const buyQasList = qasList.buyQas;
	const sellQasList = qasList.sellQas;

  return (
		<div className={contactStyle.body}>
			<
		</div>
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
