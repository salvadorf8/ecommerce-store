import styled, { css } from 'styled-components';

const largeSetup = css`
    height: 480px;
`;

const getAdditionalStyles = (props) => {
    if (props.size) {
        return largeSetup;
    }
};

export const ItemContainer = styled.div`
    min-width: 30%;
    height: 340px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }

    ${getAdditionalStyles}
`;

export const Img = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
`;

export const Button = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;

    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`;

export const Title = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`;

export const Subtitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;
