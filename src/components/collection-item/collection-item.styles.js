import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    margin-bottom: 30px;

    &:hover {
        .image {
            opacity: 0.8;
        }
        button {
            opacity: 0.85;
            display: flex;
        }
    }
`;

export const Img = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: url(${({ src }) => src});
`;

export const Content = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
        width: 90%;
        margin-bottom: 15px;
    }

    .price {
        width: 10%;
        margin-bottom: 15px;
    }
`;

export const Name = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const Price = styled.span`
    width: 10%;
    margin-bottom: 15px;
`;
