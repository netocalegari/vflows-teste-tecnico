import { ButtonContainer } from './style';

interface PaginationButtonProps {
  previous: () => void;
  next: () => void;
}

function PaginationButtons({ previous, next }: PaginationButtonProps) {
  return (
    <ButtonContainer>
      <button type="button" onClick={previous} id="previous-button">
        Anterior
      </button>
      <button type="button" onClick={next} id="next-button">
        Próximo
      </button>
    </ButtonContainer>
  );
}

export { PaginationButtons };
