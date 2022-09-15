import { Link } from 'react-router-dom'

type ButtonProps = {
  className?: string
  to?: string
  name: string
  onPress?: (ev: React.MouseEvent) => void
}

export const Button: React.FC<ButtonProps> = ({ className, to, name, onPress }) => {
  if (to)
    return (
      <Link className={className} to={to} onMouseDown={(ev) => ev.preventDefault()}>
        {name}
      </Link>
    )
  else
    return (
      <button
        className={className}
        onClick={onPress}
        onMouseDown={(ev) => ev.preventDefault()}
      ></button>
    )
}