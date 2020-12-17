import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import { Home } from './routes/Home'
import { Catalog } from './routes/Catalog'
import { Product } from './routes/Product'

interface Props { }

export const App: React.FC<Props> = (props) => {
  return (
    <>
      <h2>Shop Wear</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/product">Dashboard</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/catalog" component={Catalog} />
        <Route path="/catalog" component={Product} />
      </Switch>
    </>
  )
}

App.displayName = 'App'
