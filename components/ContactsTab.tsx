import { useState } from 'react';
import { useRouter } from 'next/router';
import { getContactsList, getContactsQas } from 'apis/contact';
import { ContactsProps, ContactTypeProps } from 'interfaces/contact';

export default function ContactsTab() {
  const [contactsList, setContactsList] = useState<Array<ContactsProps>>([]);
  return <div></div>;
}

export const getStaticProps = async ({ query }) => {
  // const contactRes = await getContactsQas(typeData.id);

  // console.log(contactRes);

  return {
    props: {},
  };
};
