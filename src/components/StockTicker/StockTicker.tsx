import "./StockTicker.css";
import { HeadingElement } from "../HeadingElement/HeadingElement";

interface StockTickerProps {
  stockTickerTitle: string;
  elementType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  stockTickerPrice: string;
  stockTickerPriceChange: string;
  stockTickerTime: string;
  stockTickerDate: string;
}
const StockTicker: React.FC<StockTickerProps> = ({
  stockTickerTitle,
  elementType,
  stockTickerPrice,
  stockTickerPriceChange,
  stockTickerTime,
  stockTickerDate,
}) => {
  return (
    <div className="container">
      <div className="stockTicker--wrapper">
        <div className="stockTicker--item stockTicker--title">
          <HeadingElement title={stockTickerTitle} elementType={elementType} />
        </div>
        <div className="stockTicker--item stockTicker--data">
          <div className="stockTicker--price-change-group">
            <div className="stockTicker--price">
              <p>{stockTickerPrice}</p>
            </div>
            <div className="stockTicker--change">
              <p>
                <i></i>
                {stockTickerPriceChange}
              </p>
            </div>
          </div>

          <div className="stockTicker--time">
            <p className="info">
              <span className="stockTicker--meta-text">{stockTickerTime}</span>
              <span className="stockTicker--dot">.</span>
              <span className="stockTicker--meta-text">{stockTickerDate}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StockTicker;
