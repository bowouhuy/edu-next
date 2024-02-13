import styled from 'styled-components';
import { media } from '@/utils/media';

interface ParagraphProps {
  fontSize?: number;
}

const Paragraph = styled.p<ParagraphProps>`
  color: var(--text);
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '16px')};
  line-height: 1.5;
  margin-bottom: 0;
  padding: 0;

  ${media('<=smallPhone')} {
    font-size: ${(props) => (props.fontSize ? `${props.fontSize - 2}px` : '14px')};
  }
`;

export default Paragraph;
