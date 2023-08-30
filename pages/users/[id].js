import { useRouter } from 'next/router'
import styles from '../../styles/user.module.scss'
import MainContainer from '../../components/MainContainer'

export default function User({ user }) {
  const { query } = useRouter()

  return (
    <MainContainer
      keywords={
        <>
          <meta property='og:title' content={user.name} />
          <meta property='og:description' content={user.username} />
        </>
      }
    >
      <div className={styles.user}>
        <h1>Пользователь с id {query.id}</h1>
        <div>Имя пользователя - {user.name}</div>
      </div>
    </MainContainer>
  )
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await response.json()
  console.log(user)

  return {
    props: { user },
  }
}
