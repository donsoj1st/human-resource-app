"use client";
import React from "react";
import style from "./dashboard-card.module.css";
import Image from "next/image";
import { signIn } from "next-auth/react";

const DashboardCard = (props) => {
  const click = () => {
    signIn("credentials", {
      username: "",
      password: "",
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div className={style.container} onClick={click}>
      <div className={style.image}>
        <Image src={props.img || "/noavatar.png"} alt="" fill />
      </div>
      <div className={style.text}>{props.text}</div>
    </div>
  );
};

export default DashboardCard;
