import React from 'react'

interface IButton {
    name: string,
    onClick?: () => void
}

const Button: React.FC<IButton> = ({name, onClick}) => {
    return <button onClick={onClick}>{name}</button>
}
export default Button