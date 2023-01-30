import styled from "styled-components";

const BackGroundDiv = styled.div`
  background-color: #FFFFFF;

  margin-top: 2rem;
  margin-left: 2rem;

  height: 93vh;
  width: 97vw;

  section {
    border: 1px solid red;
    border-radius:8px;

    width: 93vw;
    height: 35rem;

    margin-left: 2rem;
    margin-top: 1rem;

    #form-container {
      margin-left: 1rem;

      input[type=checkbox] {
        transform: scale(2);
      }

      fieldset {
        border: 1px solid red;
        border-radius: 7px;
        margin-top: 1rem;

        width: 110rem;
        height: 6rem;

        display: flex;
        align-items: center;
        justify-content: space-around;

        legend {
          margin-left: 1rem;
          padding-left: 1rem;
          padding-right: 3rem;
        }

        .inside-fieldset {
          display: flex;
          flex-direction: column;

          input {
            height: 1.3rem;

            border-color: #B4B4B4;
            border-style: solid;
            border-radius: 3px;
          }
        }
      }

      #value-fieldset {
        input {
          width: 50rem;
          background-color: #B4B4B4;
        }
      }
    }

    #data-container {
      display: flex;
      align-items: center;

      margin-left: 1rem;
      margin-top: 1rem;

      #contract-code {
        display: flex;

        p {
          font-size: 1.2rem;
        }

        p:first-child {
          font-weight: bold;
        }

        p + p {
          margin-left: 1rem;
        }
      }

      #title-container {
        margin-left: 23rem;
        #contract-title {
          font-size: 1.3rem;
        }
      }
    }

    #form-container {
      margin-top: 1rem;
    }

    .upper-inputs-container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      gap: 14rem;

      .input-label-container {
        display: flex;
        flex-direction: column;

        input {
          border-color: #B4B4B4;
          border-style: solid;
          border-radius: 3px;

          height: 1.5rem;
          width: 15rem;
        }
      }
    }

    .checkbox-container {
      margin-top: 1rem;

      input {
        margin-left: 1.2rem;
      }

      label {
        margin-left: 1rem;
      }
    }

    #file-button-container {
      margin-top: 4rem;

      label {
        height: 2rem;
        background-color: blue;
      }
    }
  }
`;

export {BackGroundDiv};
