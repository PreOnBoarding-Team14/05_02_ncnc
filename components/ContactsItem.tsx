import { useState } from 'react';
import Image from 'next/image';
import { ContactsProps } from 'interfaces/contact';
import ItemStyle from 'styles/ContactItem.module.scss';
import Arrow from 'assets/Arrow.svg';

interface ContactItemProps {
  contact: ContactsProps;
}

export default function ContactsItem({ contact }: ContactItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  function onClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className={ItemStyle.qasItem}>
        <button className={ItemStyle.qasBtn} onClick={onClick}>
          <span className={ItemStyle.spanQ}>Q.</span>
          <span className={ItemStyle.spanQuestion}>{contact.question}</span>
          <span className={ItemStyle.spanArrow}>
            <Image src={Arrow} />
          </span>
        </button>
        <div className={`${ItemStyle.answerBox} ${isOpen ? 'open' : ''}`}>
          <div className={ItemStyle.answer}>
            <p>{contact.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
