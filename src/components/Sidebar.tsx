import styles from './styles/Sidebar.module.css'
import Info from './Info'
import Description from './Description'

export default function Sidebar() {
  return (
    <div className={styles.sidebar_box}>
        <Info />
        <Description />
    </div>
  )
}