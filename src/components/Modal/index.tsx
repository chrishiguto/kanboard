import { useSpring, config, Transition } from 'react-spring'

import Button from 'components/Button'

import * as S from './styles'

export type ModalProps = {
  open: boolean
  children: React.ReactNode
  title?: string
  btnSuccessText?: string
  btnFailureText?: string
  onSuccessClick: () => void
  onFailureClick: () => void
}

const Modal = ({
  open,
  children,
  title,
  btnFailureText = 'Cancelar',
  btnSuccessText = 'Confirmar',
  onSuccessClick,
  onFailureClick
}: ModalProps) => (
  <Transition
    native
    items={open}
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    leave={{ opacity: 0 }}
    config={{ ...config.stiff }}
  >
    {(values, item) =>
      item && (
        <S.Wrapper style={values}>
          <Transition
            native
            items={open}
            from={{ transform: 'translateY(100px)', opacity: 0 }}
            enter={{ transform: 'translateY(0px)', opacity: 1 }}
            leave={{ transform: 'translateY(100px)', opacity: 0 }}
            config={{ ...config.stiff }}
          >
            {(values, item) =>
              item && (
                <S.Modal style={values}>
                  {!!title && (
                    <S.Header>
                      <S.Title>{title}</S.Title>
                    </S.Header>
                  )}
                  <S.Content>{children}</S.Content>
                  <S.Footer>
                    <Button
                      onClick={onFailureClick}
                      aria-label="Cancel button modal"
                    >
                      {btnFailureText}
                    </Button>
                    <Button
                      onClick={onSuccessClick}
                      aria-label="Confirm button modal"
                    >
                      {btnSuccessText}
                    </Button>
                  </S.Footer>
                </S.Modal>
              )
            }
          </Transition>
        </S.Wrapper>
      )
    }
  </Transition>
)

export default Modal
