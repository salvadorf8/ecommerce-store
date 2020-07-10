import styled from 'styled-components';

export const CollectionsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CollectionsHeader = styled.div`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const CollectionsListGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
`;
