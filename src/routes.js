import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import SellerDetails from './pages/SellerDetails';
import ClientDetails from './pages/ClientDetails';
import ClientRegister from './pages/ClientRegister';
import ProductDetails from './pages/ProductDetails';
import OrderOptions from './pages/OrderOptions';
import OrderDetails from './pages/OrderDetails';
import PaymentDetails from './pages/PaymentDetails';
import FreightDetails from './pages/FreightDetails';
import OtherDetails from './pages/OtherDetails';
import OrdersList from './pages/OrdersList';
import Confirm from './pages/Confirm';
import Success from './pages/Success';
import DifferentialRateCalculator from './pages/DifferentialRateCalculator';

import AsyncNoMatch from './pages/NoMatch';
import Page from './components/Page';

function App() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <Page title="Login | Pv AGF">
              <Login {...props} />
            </Page>
          )}
        />
        <Route
          exact
          path="/sellerdetails"
          render={props => (
            <Page title="Informações do Vendedor | Pv AGF">
              <SellerDetails {...props} />
            </Page>
          )}
        />
        <Route
          exact
          path="/clientdetails"
          render={props => (
            <Page title="Informações do Cliente | Pv AGF">
              <ClientDetails {...props} />
            </Page>
          )}
        />
        <Route
          exact
          path="/clientregister"
          render={props => (
            <Page title="Cadastro de Clientes | Pv AGF">
              <ClientRegister {...props} />
            </Page>
          )}
        />
        <Route
          exact
          path="/productdetails"
          render={props => (
            <Page title="Informações dos Produtos | Pv AGF">
              <ProductDetails {...props} />
            </Page>
          )}
        />
        <Route
          exact
          path="/orderoptions"
          render={props => (
            <Page title="Tipo de Pedido | Pv AGF">
              <OrderOptions {...props} />
            </Page>
          )}
        />
        <Route
          exact
          path="/orderdetails"
          render={props => (
            <Page title="Detalhes do Pedido | Pv AGF">
              <OrderDetails {...props} />
            </Page>
          )}
        />
        <Route
          exact
          path="/paymentdetails"
          render={props => (
            <Page title="Detalhes do Pagamento | Pv AGF">
              <PaymentDetails {...props} />
            </Page>
          )}
        />
        <Route
          exact
          path="/freightdetails"
          render={props => (
            <Page title="Informações do Frete | Pv AGF">
              <FreightDetails {...props} />
            </Page>
          )}
        />
        <Route
          exact
          path="/otherdetails"
          render={props => (
            <Page title="Outras informações | Pv AGF">
              <OtherDetails {...props} />
            </Page>
          )}
        />

        <Route
          exact
          path="/confirm"
          render={props => (
            <Page title="Confirme as informações | Pv AGF">
              <Confirm {...props} />
            </Page>
          )}
        />
        <Route
          exact
          path="/success"
          render={props => (
            <Page title="Gerar PDF | Pv AGF">
              <Success {...props} />
            </Page>
          )}
        />
        <Route
          exact
          path="/orderslist"
          render={props => (
            <Page title="Pedidos | Pv AGF">
              <OrdersList {...props} />
            </Page>
          )}
        />
        <Route
          exact
          path="/differential-rate-calculator"
          render={props => (
            <Page title="Diferencial de Alíquota | Pv AGF">
              <DifferentialRateCalculator {...props} />
            </Page>
          )}
        />
        <Route
          render={props => (
            <Page title="Página não encontrada | Pv AGF">
              <AsyncNoMatch {...props} />
            </Page>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
