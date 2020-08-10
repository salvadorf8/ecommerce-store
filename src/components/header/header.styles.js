import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 576px) {
        //anything below 800 will get style, anything above will not
    }
    @media screen and (max-width: 768px) {
        //anything below 800 will get style, anything above will not
        height: 60px;
        padding: 10px;
        margin-bottom: 25px;
    }
    @media screen and (max-width: 992px) {
        //anything below 800 will get style, anything above will not
    }
    @media screen and (max-width: 1200px) {
        //anything below 800 will get style, anything above will not
    }
`;

export const NavbarBrandLink = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;

    @media screen and (max-width: 576px) {
        //anything below 800 will get style, anything above will not
    }
    @media screen and (max-width: 768px) {
        //anything below 800 will get style, anything above will not
        width: 50px;
        padding: 0;
    }
    @media screen and (max-width: 992px) {
        //anything below 800 will get style, anything above will not
    }
    @media screen and (max-width: 1200px) {
        //anything below 800 will get style, anything above will not
    }
`;

export const NavbarNav = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 576px) {
        //anything below 800 will get style, anything above will not
    }
    @media screen and (max-width: 768px) {
        //anything below 800 will get style, anything above will not
        width: 80%;
    }
    @media screen and (max-width: 992px) {
        //anything below 800 will get style, anything above will not
    }
    @media screen and (max-width: 1200px) {
        //anything below 800 will get style, anything above will not
    }
`;

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;
