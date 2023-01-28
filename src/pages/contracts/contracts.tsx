import { Header } from "../../components/header/header";
import { BackGroundDiv } from "./style";
import { UserData } from "../../components/userData/userData";
import { ContentTitle } from "../../components/contentTitle/contentTitle";
import { ContractsTable } from "../../components/contractsTable/contractsTable";
import { PaginationButtons } from "../../components/paginationButtons/paginationButtons";
import { Footer } from "../../components/footer/footer";

function ContractsPage() {
  return (
    <>
      <BackGroundDiv>
        <Header/>
        <UserData/>
        <ContentTitle/>
        <ContractsTable/>
        <PaginationButtons/>
        <Footer/>

      </BackGroundDiv>
    </>
  )
}

export { ContractsPage }