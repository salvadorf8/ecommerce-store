import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

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

export const Title = styled.div`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 576px) {
        //anything below 800 will get style, anything above will not
    }
    @media screen and (max-width: 768px) {
        //anything below 800 will get style, anything above will not
        display: grid;
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
