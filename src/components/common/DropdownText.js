
import { DropdownMenuWrap, LocalTextButton } from "@/styles/dropdownText.style";
import GenderSelector from "./GenderSelector";
import ReligionCategory from "./ReligionCategory";



const DropDownText = () => {

  return (
    <>
      <DropdownMenuWrap>
        <ReligionCategory />
        <GenderSelector />
      </DropdownMenuWrap>
      <div></div>
      <DropdownMenuWrap>
        <LocalTextButton>글쓰기</LocalTextButton>
      </DropdownMenuWrap>
    </>
  )

}

export default DropDownText;