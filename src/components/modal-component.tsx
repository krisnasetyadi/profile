import Image from "next/image";
import { envelopeIcon, whatsAppIcon } from "../../public/icons";
import { RootStore, store } from "@/store";
import { setOpenModal } from "@/store/root-store";
import { useSelector } from "react-redux";
import Link from "next/link";

function Modal() {
    const { openModal } = useSelector((state:RootStore) => state.rootStore)
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-gray-500 opacity-50" onClick={()=> store.dispatch(setOpenModal(!openModal))} />
          <div className="flex z-10 bg-white p-6 rounded-lg">
            <Link href={'https://wa.me/081313218350'} target="blank">
                <Image src={whatsAppIcon} alt='whatsapp icon' height={20} width={20} />
            </Link>
            <button disabled className="opacity-20 ml-10">
                <Image src={envelopeIcon} alt='whatsapp icon' height={20} width={20} />
            </button>
          </div>
        </div>
    );
}

export default Modal;
