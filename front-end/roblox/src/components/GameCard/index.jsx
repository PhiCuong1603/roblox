import React from "react";
import "./style.css";
import ImgCard from "../../assets/roblox1.png";

const GameCard = () => {
  return (
    <div className="card-item">
      <div className="content">
        <div className="imgsrc">
          <img src={ImgCard} />
        </div>
        <div className="text">TÀI KHOẢN GAME ROBLOX</div>
      </div>
      <div className="btnbuy">
        <button class="custom-btn btn">
          <span>XEM NGAY</span>
        </button>
      </div>
    </div>
  );
};

export default GameCard;
