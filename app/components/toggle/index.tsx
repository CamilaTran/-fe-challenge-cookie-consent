import { Switch, SwitchProps } from 'antd'
import './styles.scss'

interface ToggleProps extends SwitchProps {
    checked?: boolean
}

const Toggle = (props: ToggleProps) => {
    return (
        <Switch
            defaultChecked
            className="!h-5 !min-w-9"
            {...props}
        />
    )
    // 
}

export default Toggle;