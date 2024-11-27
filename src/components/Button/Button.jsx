import s from './Button.module.css'
import clsx from 'clsx'

export default function Button({
    selected = false,
    type = 'button',
    children,
    ...otherProps
}) {
    return (
        <button className={clsx(s.btn, {
            [s.isSelected]: selected,
        })}
                type={type}
                {...otherProps}>
{children}
        </button>
    )
    
}