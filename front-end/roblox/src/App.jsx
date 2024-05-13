import "./App.css";
import { Col, Grid, Row } from "antd";
import GameCard from "./components/GameCard";

function App() {
  return (
    <div>
      <Row className="banner-container">
        <Col span={8} className="rank">
          fasdasfd
        </Col>
        <Col span={16} className="video">
          asdfasdfasdf
        </Col>
      </Row>
      <Row className="inform-container">
        <Col span={1} className="icon">
        </Col>
        <Col span={23} className="information">
          sdfsdfdsfd
        </Col>
      </Row>
      <div className="card-container">
        <div className="title">DANH MỤC ACC GAME</div>
        <Row gutter={[20, 20]} className="cards-container">
          <Col lg={6} sm={12} xs={24}>
            <GameCard />
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <GameCard />
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <GameCard />
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <GameCard />
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <GameCard />
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <GameCard />
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <GameCard />
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <GameCard />
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <GameCard />
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <GameCard />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
