import { Header } from "../../components/header/header";
import { BackGroundDiv } from "./style";
import { UserData } from "../../components/userData/userData";

function ContractsPage() {
  return (
    <>
      <BackGroundDiv>
        <Header/>
        <UserData/>

      </BackGroundDiv>
    </>
  )
}

export { ContractsPage }
