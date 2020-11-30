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
    }

    .btn-primary {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
        padding: 2rem;

        &:hover {
            background-color: ${props => props.theme.colors.primary_opaque};
        }
    }
    .btn-secondary {
        background-color: ${props => props.theme.colors.white};
        padding: 2rem;

        &:hover {
            background-color: ${props => props.theme.colors.grey};
        }
    }
    
`

export default Button