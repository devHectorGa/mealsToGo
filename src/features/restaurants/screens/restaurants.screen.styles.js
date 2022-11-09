import {css} from 'styled-components';
import styled from 'styled-components/native';

export const MainContainer = styled.SafeAreaView`
  flex: 1;
`;

const fullHeight = css`
  flex: 1;
`;

export const ElementContainer = styled.View`
  padding: 16px;

  ${({full}) => full && fullHeight}
`;
