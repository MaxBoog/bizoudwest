import styled from '@emotion/styled';

const Button = ({
    children,
    onClick,
    className,
    }) => {
    return (
        <ButtonStyled>
            <button className={className} onClick={onClick}>
                {children}
            </button>
        </ButtonStyled>
    )
}

const ButtonStyled = styled.div`
    .btn {
        font-weight: bold;
        border-radius: 2px;
        transition: .2s ease-in-out;
        padding: 2rem 1rem;
        &:hover {
            box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
        }
    }

    .btn-primary {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
       

        &:hover {
            background-color: ${props => props.theme.colors.primary_opaque};
        }
    }
    .btn-secondary {
        background-color: ${props => props.theme.colors.white};
        

        &:hover {
            background-color: ${props => props.theme.colors.grey};
        }
    }
    
`

export default Button