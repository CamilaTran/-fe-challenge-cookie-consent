"use client"

import { Modal as ModalAntd, ModalProps as ModalAntdProps} from 'antd'
import './styles.scss'

interface ModalProps extends ModalAntdProps {
  isModalOpen: boolean
  children: React.ReactNode

}
const Modal = ({ children, isModalOpen, ...props }: ModalProps) => {
  return (
    <ModalAntd open={isModalOpen} {...props} className='!w-[458px]'>
      {children}
    </ModalAntd>
  )
}

export default Modal