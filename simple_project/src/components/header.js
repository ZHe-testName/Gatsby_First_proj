import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

//в гетсби можно пользоваться статическими и постраничный запросами
//СТАТИЧЕСУИЙ ЗАПРОС - не может использовать переменные
                        //но зато его можно использовать в любых компонентах проекта
                        //включая страницы

//ПОСТРАНИЧНЫЙ ЗАПРОС - может использовать переменные
                        //и используется только в шаблонах и страницах

//гетсби хорошо оптимизирует работу с медиа (картинки и видео)
//для этого нкжно пропускать файлы через сам гетсби
//по этому в место стандартного подключения
//через путь мы импртим файл с помощю вебпака 

//чтобы отправлять статические запросы
//нужны еще некоторые составляющие
//сам граф кюл
//и хук для статических запросов
// import { graphql, useStaticQuery } from "gatsby";
// import gatsbyPng from '../images/gatsby-icon.png';

const Header = ({ siteTitle }) => {
  //способ отправки запроса
  // const {site} = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           author
  //           siteUrl
  //           title
  //           description
  //         }
  //       }
  //     }
  //   `
  // );

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
            {/* <img src={gatsbyPng} alt="gatsby icon"/> */}
          </Link>
        </h1>
      </div>
    </header>
  )
};
        
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
