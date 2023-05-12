import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import TotalLikeOverviewItem from "./dashboardOverviewItems/totalLikeOverviewItem";
import TotalCustomerOverviewItem from "./dashboardOverviewItems/totalCustomerOverviewItem";
import TotalProductOverviewItem from "./dashboardOverviewItems/totalProductOverviewItem";
import TotalPlaceOverviewItem from "./dashboardOverviewItems/totalPlaceOverviewItem";
import ChatOverview from "./dashboardOverviewItems/chatOverview";
import ReviewOverview from "./dashboardOverviewItems/reviewOverview";

const Overview = ()=>{
  return(
    <>
    <Grid container spacing={3} flexWrap={'wrap'}>
      <Grid item xs={12}>
      <Grid container spacing={3} >
        <Grid item md={4} sm={6} xs={12}>
          <TotalLikeOverviewItem/>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <TotalCustomerOverviewItem/>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Grid container spacing={3} flexWrap='wrap'>
            <Grid item md={12}sm={6} xs={12}>
              <TotalProductOverviewItem/>
            </Grid>
            <Grid item md={12}sm={6} xs={12}>
              <TotalPlaceOverviewItem/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3} flexWrap={'wrap'}>
          <Grid item sm={8} xs={12}>
            <ReviewOverview/>
          </Grid>
          <Grid item sm={4} xs={12}>
            <ChatOverview/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
}

const OverviewCard = styled.div`
  background-color: white;
  height : 100%;
  padding: 18px;
`;


export default Overview;