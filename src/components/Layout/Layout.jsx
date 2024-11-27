import s from './Layout.module.css'

export default function Layout({ children }) {
    return <main className={s.container}>{children}</main>
}