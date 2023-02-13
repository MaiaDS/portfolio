import { rem, variables } from '@/styles/variables'
import styled from 'styled-components'

interface IButton {
    label: string
    color: string
    hoverBgColor: string
    icon?: string
    onClick: () => void
}

const StyledButton = styled.button<{ color: string; hoverBgColor: string; icon?: string }>`
    appearance: none;
    border-radius: ${variables.borderRadius};
    background-color: ${variables.colors.gray};
    color: ${(props) => props.color};
    padding: ${rem(10)};
    display: flex;
    align-items: center;

    span {
        background-color: ${(props) => props.color};
        border-radius: 60px;
        width: ${rem(30)};
        height: ${rem(30)};
        margin-right: ${rem(5)};
        div {
            background-color: ${variables.colors.gray};
            width: ${rem(30)};
            height: ${rem(30)};
            -webkit-mask: url(${(props) => props.icon}) no-repeat 50% 50%;
            mask: url(${(props) => props.icon}) no-repeat 50% 50%;
        }
    }

    &:hover {
        background-color: ${(props) => props.hoverBgColor};
        color: ${variables.colors.darkGray};
        span {
            background-color: ${variables.colors.darkGray};
            div {
                background-color: ${(props) => props.hoverBgColor};
            }
        }
    }
`

const Button = (props: IButton) => {
    return (
        <StyledButton
            color={props.color}
            hoverBgColor={props.hoverBgColor}
            icon={props.icon}
            onClick={props.onClick}>
            {props.icon && (
                <span>
                    <div></div>
                </span>
            )}
            {props.label}
        </StyledButton>
    )
}

export default Button
