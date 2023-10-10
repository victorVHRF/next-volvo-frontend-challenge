import { Flex, IconButton } from "vcc-ui";
import styles from "../../public/css/components/paginationDesktop.module.css"

interface PaginationDesktopProps {
  onClickLeft: () => void
  onClickRight: () => void
}

export function PaginationDesktop({ onClickLeft, onClickRight }: PaginationDesktopProps) {
  return (
    <div className={styles.btnWrapper}>
      <IconButton
        aria-label="esquerda"
        iconName="navigation-chevronback"
        variant="outline"
        onClick={onClickLeft}
      />

      <IconButton
        aria-label="direita"
        iconName="navigation-chevronforward"
        variant="outline"
        onClick={onClickRight}
      />

    </div>
  )
}