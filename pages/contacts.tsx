import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Layout from 'components/Layout';
import { getContactsType, getContactsQas } from 'apis/contact';
import { ContactsProps, ContactTypeProps } from 'interfaces/contact';
// 고객 센터 페이지

export default function Contacts(
  types: Array<ContactTypeProps>,
  contacts: Array<ContactsProps>,
) {
  // const [contactsType, setContactsType] = useState<Array<ContactTypeProps>>([]);
  // const [contactsList, setContactsList] = useState<Array<ContactsProps>>([]);
  // const router = useRouter();
  // const { qaTypeId } = router.query;

  console.log(types);

  return (
    <Layout>
      <div>
        <div></div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const contactsTypeRes = await getContactsType();
  console.log(contactsTypeRes);
  return {
    props: {
      contactsTypeRes,
    },
  };
};
