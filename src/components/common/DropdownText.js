
import { DropdownMenuWrap, LocalTextButton } from "@/styles/dropdownText.style";
import GenderSelector from "./GenderSelector";
import ReligionCategory from "./ReligionCategory";
import { useRouter } from "next/router";



const DropDownText = () => {
  const router = useRouter();
  const TextWrite = () => {
    router.push('/profile/form')
  }
  return (
    <>
      <DropdownMenuWrap>
        <ReligionCategory />
        <GenderSelector />
      </DropdownMenuWrap>
      <div></div>
      <DropdownMenuWrap>
        <LocalTextButton onClick={TextWrite}>글쓰기</LocalTextButton>
      </DropdownMenuWrap>
    </>
  )

}

export default DropDownText;