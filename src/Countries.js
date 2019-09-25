import React, { useContext } from 'react';
import { CountryContext } from './Context';
import CountryList from './CountryList';
import Loading from './Loading';

export default function Countries() {
  const context = useContext(CountryContext);
  const { loading, handleInput } = context;

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 mx-auto">
          <section className="card md-5 mt-5">
            <header className="card-header border-0">
              <i className="fas fa-globe-americas"></i> Countries
            </header>

            <div>
              <div className="input-group my-2 ml-3">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-search"></i>
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    autoFocus="autofocus"
                    className="form-control p-3"
                    onChange={e => handleInput(e)}
                  />
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <div className="pre-scrollable">
                {loading ? <Loading /> : <CountryList />}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
