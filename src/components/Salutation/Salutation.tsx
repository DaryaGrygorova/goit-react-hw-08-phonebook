import {
  StyledBox,
  StyledParagraph,
  StyledSpan,
  StyledTitle,
} from './Salutation.styled';

const Salutation: React.FC = () => {
  return (
    <StyledBox>
      <StyledTitle variant="h5" as={"h1"} mb={3}>
        Welcome to <br />
        <StyledSpan as={"span"} variant="h3">
          "My PhoneBook"
        </StyledSpan>
      </StyledTitle>

      <StyledParagraph paragraph variant="h5">
        With{' '}
        <StyledSpan as={"span"} variant="h5">
          "My PhoneBook"
        </StyledSpan>{' '}
        you can store your contacts in a safe and secure place. Now your
        contacts are available to you (and only you) at any time, anywhere, from
        any gadget with Internet access.
      </StyledParagraph>
    </StyledBox>
  );
};

export default Salutation;
