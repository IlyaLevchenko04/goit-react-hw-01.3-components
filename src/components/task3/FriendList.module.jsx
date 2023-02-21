import styled from '@emotion/styled';

export const IsOnline = styled.span`
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${(props) => {
            switch(props.isOnline){
                case(true): return "green";
                case(false): return "red";
            }
            
    }};
`;