import styled from 'styled-components';

export const CollectionsContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 576px) {
        //anything below 800 will get style, anything above will not
    }
    @media screen and (max-width: 768px) {
        //anything below 800 will get style, anything above will not
        align-items: center;
    }
    @media screen and (max-width: 992px) {
        //anything below 800 will get style, anything above will not
    }
    @media screen and (max-width: 1200px) {
        //anything below 800 will get style, anything above will not
    }
`;

export const CollectionsHeader = styled.div`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const CollectionsListGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    @media screen and (max-width: 576px) {
        //anything below 800 will get style, anything above will not
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
    }
    @media screen and (max-width: 992px) {
        //anything below 800 will get style, anything above will not
    }
    @media screen and (max-width: 1200px) {
        //anything below 800 will get style, anything above will not
    }
`;
