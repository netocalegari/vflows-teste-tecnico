import { ContentTitle } from "../../components/contentTitle/contentTitle";
import { Header } from "../../components/header/header";
import { UserData } from "../../components/userData/userData";
import { BackGroundDiv } from "./style";
import { Form } from "@unform/web";
import { Input } from "../../components/form/input";
import { PaginationButtons } from "../../components/paginationButtons/paginationButtons";
import logo from "../../assets/logo.png";
import { Footer } from "../../components/footer/footer";

function InvoicesPage() {
  function handleSubmit(data: any) {
    console.log(data);
  }

  return (
    <BackGroundDiv>
      <Header/>
      <UserData/>
      <ContentTitle/>

    <section>
      <div id="data-container">
        <div id="contract-code">
          <p>Código do Contrato: </p>
          <p>11002200-01</p>
        </div>

        <div id="title-container">
          <p id="contract-title">Título do segundo contrato de exemplo</p>
        </div>
      </div>

      <div id="form-container">
        <Form onSubmit={handleSubmit}>
          <div className="upper-inputs-container">
            <div className="input-label-container">
              <label htmlFor="contract-number">Número da nota</label>
              <Input id='contract-number' name={'contractNumber'} type='number'/>
            </div>
            <div className="input-label-container">
              <label htmlFor="issue-date">Data de emissão</label>
              <Input id='issue-date' name={'issueDate'} type='date'/>
            </div>
            <div className="input-label-container">
              <label htmlFor="due-date">Data de vencimento</label>
              <Input id='due-date' name={'dueDate'} type='date'/>
            </div>
            <div className="input-label-container">
              <label htmlFor="contract-value">Valor</label>
              <Input id='contract-value' name={'contract-value'} type='number'/>
            </div>
          </div>

          <div className="checkbox-container">
            <Input id='taxes-retention' name={'taxesRetention'} type='checkbox'/>
            <label htmlFor="taxes-retention">Rentenção de impostos</label>
          </div>

          <fieldset>
            <legend>Dados</legend>
            <div className="inside-fieldset">
              <label htmlFor="issqn">ISSQN</label>
              <Input id='issqn' name={'issqn'} type='number'/>
          </div>
          <div className="inside-fieldset">
            <label htmlFor="irrf">IRRF</label>
            <Input id='irrf' name={'irrf'} type='number'/>
          </div>
          <div className="inside-fieldset">
            <label htmlFor="csll">CSLL</label>
            <Input id='csll' name={'csll'} type='number'/>
          </div>
          <div className="inside-fieldset">
            <label htmlFor="cofins">COFINS</label>
            <Input id='cofins' name={'cofins'} type='number'/>
          </div>
          <div className="inside-fieldset">
            <label htmlFor="inss">INSS</label>
            <Input id='inss' name={'inss'} type='number'/>
          </div>
          <div className="inside-fieldset">
            <label htmlFor="pis">PIS</label>
            <Input id='pis' name={'pis'} type='number'/>
          </div>
          </fieldset>

          <div className="checkbox-container">
            <Input id='technical-retention' name={'technicalRetention'} type='checkbox'/>
            <label htmlFor="technical-retention">Rentenção técnica</label>
          </div>

          <fieldset id="value-fieldset">
            <legend>Dados</legend>
            <div className="inside-fieldset">
              <label htmlFor="value">Valor</label>
              <Input id='value' name={'value'} type='number'/>
            </div>
            <div className="inside-fieldset">
              <label htmlFor="percentage">Percentual</label>
              <Input id='percentage' name={'percentage'} type='number'/>
            </div>
          </fieldset>

          <div id="file-button-container">
            <Input name={'file-button'} type='file'/>
          </div>
        </Form>
        <PaginationButtons/>
      </div>
    </section>
    </BackGroundDiv>
  )
}

export { InvoicesPage };
