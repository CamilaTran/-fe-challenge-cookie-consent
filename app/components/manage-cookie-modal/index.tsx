// component 
import Button from "../button"
import Modal from "../modal/client-modal"
import Toggle from "../toggle"
import { Content } from "./data";

interface ManageCookieModalProps {
    show: boolean;
    data: Array<Content>
    onClose: () => void
    onAcceptAll: () => void
    onDeclineAll: () => void
    onCustomCookie: (key: string, value: boolean) => void
}

const ManageCookieModal = ({ show, onClose, onAcceptAll, onCustomCookie, onDeclineAll, data, ...props }: ManageCookieModalProps) => {
    const onSave = () => {
        onClose()
    }

    return (
        <Modal
            isModalOpen={show}
            onOk={() => { }}
            onCancel={onClose}
            {...props}
            footer={
                <div className="flex flex-col gap-2">
                    <div className="flex gap-4">
                        <Button content="Accept all" styling="primary" className="flex-1" onClick={onAcceptAll} />
                        <Button content="Save" styling="secondary" className="flex-1" onClick={onSave} />
                    </div>
                    <Button content="Decline all" styling="tertiary" onClick={onDeclineAll} />
                </div>
            }
            closeIcon={false}
        >
            <div className="flex flex-col gap-4">
                {data.map((item) => (
                    <div key={item.key}>
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-base">{item.title}</span>
                            <Toggle
                                checked={item.value}
                                onChange={(value: boolean) => onCustomCookie(item.key, value)} />
                        </div>
                        <p className="text-sm text-neutral-600 mt-1">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </Modal>
    )
}

export default ManageCookieModal