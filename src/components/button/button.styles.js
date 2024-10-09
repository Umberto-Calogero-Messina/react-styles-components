import styled from 'styled-components';
// FORMA DE ESCRIBIRLO CON PROPS SIN DESTRUCTURIZAR
// background-color: ${(props) => props.$color};
// border-radius: ${(props) => (props.$rounded ? '1rem' : 'none')};

// @media (hover: hover) {
//   ${(props) =>
//     props.$hover &&
//     `
//       &:hover {
//         color: white;
//       }
//     `}
// }
const StyledButton = styled.button`
  background-color: ${({ $color }) => $color};
  padding: ${({ $padding }) => $padding};
  border-radius: ${({ $rounded }) => ($rounded ? '1rem' : 'none')};
  border: none;

  @media (hover: hover) {
    ${({ $hover }) =>
      $hover &&
      `
        &:hover {
          color: white;
        }
      `}
  }

  @media screen and (width) {
  }
`;

export { StyledButton };
