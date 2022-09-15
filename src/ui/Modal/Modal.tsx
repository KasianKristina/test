import { FC, PropsWithChildren, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import styles from './styles.module.scss'

const modalRoot = document.getElementById('modal-container')

type Props = {
  modalOpen: boolean
}

export const Modal: FC<PropsWithChildren<Props>> = ({ modalOpen, children }) => {

  const el = useRef(document.createElement('div'))

  useEffect(() => {
    const current = el.current

    modalRoot!.appendChild(current)
    return () => void modalRoot!.removeChild(current)
  }, [])

  if (!modalOpen) return null

  return createPortal(
    <div className={styles.Modal}>
      <div className={styles.Modal__card}>
        <div>{children}</div>
      </div>
    </div>,
    el.current
  )
}