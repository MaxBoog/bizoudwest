import styled from '@emotion/styled'

export default function Dot() {
    return (
        <DotStyled>
            <span>.</span>
        </DotStyled>
    )
}

const DotStyled = styled.span`
    span {
        color: ${props => props.theme.colors.secondary};
    }   
`