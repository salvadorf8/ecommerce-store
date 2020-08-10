import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

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

    @media screen and (max-width: 576px) {
        //anything below 800 will get style, anything above will not
    }
    @media screen and (max-width: 768px) {
        //anything below 800 will get style, anything above will not
        width: 40vw;
        &:hover {
            .image {
                opacity: unset;
            }
            button {
                opacity: unset;
            }
        }
    }
    @media screen and (max-width: 992px) {
        //anything below 800 will get style, anything above will not
    }
    @media screen and (max-width: 1200px) {
        //anything below 800 will get style, anything above will not
    }
`;

export const AddButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        opacity: 0.9;
        min-width: unset;
        padding: 0 10px;
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
