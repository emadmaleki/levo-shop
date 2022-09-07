import styled from 'styled-components';


const btn = styled.button`
border-radius: 5px;
width: 160px;
height: 40px;
font-size: 14px;
font-weight: 600;
letter-spacing: .5px;
cursor: pointer;
`;

export const RedBtn = styled(btn)`
color: white;
background-color:var(--red);
border: 2px solid var(--red);
`;
export const RedBtnOutline = styled(btn)`
    background-color: transparent;
    color:var(--red);
    border: 2px solid var(--red);
`;