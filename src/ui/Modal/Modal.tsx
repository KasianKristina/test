import { FC, PropsWithChildren, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import styles from './styles.module.scss'

const modalRoot = document.getElementById('modal-container')

type Props = {
  modalOpen: boolean
}

export const Modal: FC<PropsWithChildren<Props>> = ({ modalOpen, children }) => {
  const element = useRef(document.createElement('div'))

  useEffect(() => {
    const current = element.current

    modalRoot!.appendChild(current)
    return () => void 
    modalRoot!.removeChild(current)
  }, [])

  if (!modalOpen) return null

  return createPortal(
    <div className={styles.Modal}>
      <div className={styles.Modal__card}>
        <div>{children}</div>
      </div>
    </div>,
    element.current
  )
}