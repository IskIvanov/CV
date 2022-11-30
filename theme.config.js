const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Ivanov Dev
      <span className=" ml-3">| KvK: 84439726 |</span>
      <span className=" ml-3">| BTW: NL 003963491 B 16 |</span>
      <span className=" ml-3">| Bank: NL61 ABNA 0877 0563 90 |</span>
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
          underline: none;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  darkMode: true,
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'nl', text: 'Dutch' },
    { locale: 'bg', text: 'Български' },
  ]
}
