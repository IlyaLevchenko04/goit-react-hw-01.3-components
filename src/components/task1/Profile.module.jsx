import styled from '@emotion/styled';

export const ContainerForProfile = styled.div`
    width: 200px;
    align-text: center;
    background-color: #808080;
    padding: 10px 5px;
    height: 150px;
`;

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    width: 40px;
`;

export const Text = styled.span`
    margin: 0;
    padding: 0;
    font-size: 15px;
`;

export const List = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 10px;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    width: calc((100% - 20px)/3);
    justify-content: center;
    align-items: center;
`;