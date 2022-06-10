import Header from '../Header/Header';
import styles from './Layout.module.scss';



const Layout = ({children, backgroundImage}) => {
  return (
    <div className={styles.Layout} style={{backgroundImage:`url("../../public/assets${backgroundImage}")`}}>
        {console.log(backgroundImage)}
        <Header />
        <main>{children}</main>
    </div>
    
  )
}

export default Layout