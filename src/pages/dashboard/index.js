import DashLayout from "@/components/dashboard/layout";
import Overview from "@/components/dashboard/overview";
import SideNav from "@/components/dashboard/sideNav";
import TopNav from "@/components/dashboard/topNav";

const DashBoardPage =()=>{
  return(
    <DashLayout>
      <Overview/>
    </DashLayout>
  );
}

export default DashBoardPage;