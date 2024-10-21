import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '../components/providers/ThemeProvider/ThemeProvider';
import '../components/providers/ThemeProvider/themes.css';
//import { Logo } from 'src/components/Logo/Logo';
import { Header } from '../components/Header/Header';
//import { Layout } from 'src/components/Layout/Layout';
//import { ModalWindow } from 'src/components/ModalWindow/ModalWindow';
//import { CartButton } from 'src/components/CartButton/CartButton';
//import { Product } from 'src/components/Product/Product';
//import { ProductDescShort } from 'src/components/ProductDescShort/ProductDescShort';
//import { ProductDescFull } from 'src/components/ProductDescFull/ProductDescFull';

function App() {
  return (
    <ThemeProvider>
      {/* <ThemeProvider> */}
          <div className="App">
            <header className="App-header">
            <Header />
              {/* <Logo/> */}
              {/* <Layout /> */}
              {/* <ModalWindow visible='true' children='' /> */}
              {/* <CartButton count={0} /> */}
              {/* <Product /> */}
              {/* <ProductDescShort /> */}
              {/* <ProductDescFull  /> */}

              <img src={logo} className="App-logo" alt="logo" />
              <p>
                ���� ����� �������, � ������� �������-����������� � �������� ��� &quot;�������� ���������� 1520&quot; (<a>https://dt1520.ru</a>).
                <br/>
                � ����� 20 ��� ��������� ����������� ������������������ ������ ��� ��� &quot;���&quot;, �� &quot;���������������&quot; � ������ ��������� ���������� �� �.�. ���������� (���, ����� � ��.).
                <br/>
                �������� ��� �����������: �� �� (������� ������������ ������������ ������������ � ����������), ���-�-2 (������������������ ������� ���������� ���������� ��� �� �.�. ����������).
                <br/>
                ����������� � ���������� ����� � ����������: C#, VB.NET, Delphi, .NET Framework, .NET Core, JavaScript, ExtJS Framework, MSSQL, PostgreSQL, SVN.
                <br/>
                ��� �������� �� ������������� � ������������ ������������� � ������������ ����������, ����� ������ ������������� git, unit-������������ � �.�.
                <br/>
                ��� ��������: @sakharov_n_a
              </p>
            </header>
          </div>
      {/* </ThemeProvider> */}
    </ThemeProvider>
  );
}

export default App;
