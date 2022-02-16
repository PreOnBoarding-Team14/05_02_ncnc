export interface ContactTypeProps {
  id: number;
  key: string;
  name: string;
}

export interface ContactsProps {
  id: number;
  question: string;
  answer: string;
}

export interface ContactResponseProps {
  qaTypes: Array<ContactTypeProps>;
}

export interface ContactListProps {
  qas: Array<ContactsProps>;
}

export interface ContactsListResponseProps {
  buyQas: Array<ContactsProps>;
  sellQas: Array<ContactsProps>;
}
