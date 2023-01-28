import { ContentTitle } from "../../components/contentTitle/contentTitle";
import { Header } from "../../components/header/header";
import { UserData } from "../../components/userData/userData";
import { BackGroundDiv } from "./style";
import { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

function InvoicesPage() {
  return (
    <BackGroundDiv>
      <Header/>
      <UserData/>
      <ContentTitle/>

      <div>
        <form action="">

        </form>
      </div>
    </BackGroundDiv>
  )
}

export { InvoicesPage };
