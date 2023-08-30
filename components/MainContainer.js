import Head from 'next/head'
import A from './A'

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        {keywords}
        <title>Главная страница</title>
      </Head>

      <div className='navbar'>
        <A text='Главная' href={'/'} />
        <A text='Пользователи' href={'/users'} />
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  )
}

export default MainContainer
