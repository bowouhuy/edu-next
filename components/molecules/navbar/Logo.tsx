import Image from "next/image"
import Link from "next/link"
import logo from '../../../public/Images/logo.png'

export default function Logo (){
    return (
        <Link href={'/dashboard/profile'}>
            <Image src={logo} width={200} alt="test" />
        </Link>
    )
};
