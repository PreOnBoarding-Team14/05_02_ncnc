import Image from 'next/image';
import Link from 'next/link';
import NavBar from './Navbar';
import enter from 'assets/enter.svg';
import ModalStyle from 'styles/Modal.module.scss';

interface ModalProps {
  isModal: boolean;
  onClick: () => void;
}

export default function Modal({ isModal, onClick }: ModalProps) {
  const myPageNavbarAttr = { name: '마이페이지', path: '', onClick };

  return (
    <>
      {isModal && (
        <div className={ModalStyle.menuContainer}>
          <NavBar attr={myPageNavbarAttr} />
          <div className={ModalStyle.bodyContainer}>
            <section>
              <div className={ModalStyle.line} />
              <Link href={`/contacts`} key={'contacts'}>
                <a>
                  <div className={ModalStyle.contactBtn}>
                    <span>고객센터</span>
                    <Image src={enter} />
                  </div>
                </a>
              </Link>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
