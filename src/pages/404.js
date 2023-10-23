import * as React from "react"
import { Link } from "gatsby"
import Container from '../compoents/sections/elements/Container'

const pageStyles = {
  padding: "110px 0",
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <Container>
        <div>
        <h1>Page not found</h1>
        <p >
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Go home</Link>.
        </p>
        </div>
      </Container>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
