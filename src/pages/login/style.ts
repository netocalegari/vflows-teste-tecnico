import styled from 'styled-components';

const Main = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;

  height: 26rem;
  width: 36rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  -webkit-box-shadow: 5px 5px 8px 1px #000000;
  box-shadow: 5px 5px 8px 1px #000000;

  figure {
    margin-top: 2rem;

    img {
      height: 5rem;
      width: 7rem;
    }
  }

  h2 {
    margin-top: 3rem;
  }

  #form-container {
    margin-top: 1rem;
    border: 1px solid #E7E7E7;
    border-radius: 3px;

    height: 10rem;
    width: 25rem;

    #login-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      #input-container {
        display: flex;
        flex-direction: column;

        label {
          margin-top: 1rem;
        }

        input {
          margin-top: 0.3rem;

          border-style: solid;
          border-color: #E7E7E7;
          border-radius: 4px;

          width: 19rem;
          height: 1.3rem;
        }
      }


      button {
        background-color: #33B76F;
        color: #ffffff;
        border-style: none;

        margin-left: 1rem;
        margin-top: 1rem;

        width: 15rem;
        height: 2rem;

        -webkit-box-shadow: 5px 5px 5px -1px #000000;
        box-shadow: 5px 5px 5px -1px #000000;
      }
    }
  }


`;

export { Main, LoginContainer };
