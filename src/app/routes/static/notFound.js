import React from "react";
import Page from "../../components/page";
import Breadcrumb from "../../components/common/breadcrumb";

export default () => (
  <Page
    id="not-found"
    title="Not Found"
    description="This is embarrassing."
    noCrawl
  >
    <Breadcrumb title={"404 Page"} />

    <section className="p-0">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="error-section">
              <h1>404</h1>
              <h2>page not found</h2>
              <a href="index.html" className="btn btn-solid">
                back to home
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Page>
);
