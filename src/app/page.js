import NavbarBannar from "@/components/shared/Bannar";
import PopulerProduct from "@/components/shared/PopulerProduct";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavbarBannar></NavbarBannar>
      <PopulerProduct></PopulerProduct>
    </div>
  );
}
