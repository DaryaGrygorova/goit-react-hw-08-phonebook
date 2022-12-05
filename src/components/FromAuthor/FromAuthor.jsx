import { useEffect, useState } from 'react';

import { StyledPaper, StyledParagraph } from './FromAuthor.styled';

import content from './data.json';

const FromAuthor = () => {
  const [currentInd, setCurrentInd] = useState(
    () => Math.floor(Math.random() * -9) + 10
  );

  useEffect(() => {
    const getRandomInd = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const intervalId = setInterval(() => {
      const newInd = getRandomInd(0, content.length - 1);
      setCurrentInd(newInd);
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <StyledPaper elevation={0}>
      <StyledParagraph paragraph variant="body1">
        "{content[currentInd].text}"
      </StyledParagraph>
      <StyledParagraph paragraph variant="body1">
        {content[currentInd].author}
      </StyledParagraph>
    </StyledPaper>
  );
};

export default FromAuthor;
