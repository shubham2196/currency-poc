import React, { Component } from "react";
import {
  fetchCurrentPriceAction,
  fetchCurrentPriceChartAction,
  setSelectedCountryAction,
} from "./homeAction";
import { connect } from "react-redux";
import "./home.css";
import {
  getChartData,
  getCountries,
  getSelectedCountryPrice,
} from "./homeSelector";
import { Col, Container, Row } from "react-bootstrap";
import Chart from "react-google-charts";

class Home extends Component {
  componentDidMount() {
    this.props.dispatchCurrencyRequest();
  }

  onCountryChange = (e) => {
    this.props.dispatchSetSelectedCountry({ currency: e.target.value });
    this.props.dispatchCurrencyChartRequest();
  };

  makeChartData = (chartObj) => {
    const raw = Object.keys(chartObj.bpi).map((key) => [
      key,
      chartObj.bpi[key],
    ]);
    const chartData = [["Date", "Rate"], ...raw];
    return chartData;
  };

  render() {
    const { countries, selectedCountryPrice, chartData } = this.props;
    return (
      <Container>
        <Row className="border p-4">
          <Col md="4">
            <div>
              <small className="text-muted">1 Bitcoin Equals</small>
              <select
                className="form-control my-2"
                onChange={this.onCountryChange}
              >
                <option>Select Country</option>
                {countries &&
                  countries.map((country) => {
                    return (
                      <option key={country.value} value={country.value}>
                        {country.label}
                      </option>
                    );
                  })}
              </select>
              <div>
                {selectedCountryPrice && (
                  <h2>
                    {selectedCountryPrice.rate_float +
                      " " +
                      selectedCountryPrice.description}
                  </h2>
                )}
              </div>
            </div>
          </Col>
          <Col md="8">
            {chartData && (
              <Chart
                width={"600px"}
                height={"200px"}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={this.makeChartData(chartData)}
                options={{
                  chart: {
                    title: "Last 60 Days Trend",
                  },
                  hAxis: {
                    title: "Date",
                  },
                  vAxis: {
                    title: "Rate",
                  },
                }}
              />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    countries: getCountries(state),
    selectedCountryPrice: getSelectedCountryPrice(state),
    chartData: getChartData(state),
  };
};
const mapDispatchToProps = {
  dispatchCurrencyRequest: fetchCurrentPriceAction,
  dispatchSetSelectedCountry: setSelectedCountryAction,
  dispatchCurrencyChartRequest: fetchCurrentPriceChartAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
