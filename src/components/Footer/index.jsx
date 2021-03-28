import React from "react";
import { FooterWrapper, FooterLeft, FooterRight } from "./styled";

const ATFooter = () => {
  const link = [
    { id: 1, name: "服务条款", href: "" },
    { id: 2, name: "隐私政策", href: "" },
    { id: 3, name: "儿童隐私政策", href: "" },
    { id: 4, name: "版权投诉指引", href: "" },
    { id: 5, name: "意见反馈", href: "" },
  ];

  const enter = [
    {
      id: 1,
      name: "Amped Studio",
      href: "https://web-amped.music.163.com/",
      size: "110px 552px",
    },
    {
      id: 2,
      name: "用户认证",
      href: "https://music.163.com/st/userbasic#/auth",
      size: "110px 552px",
    },
    {
      id: 3,
      name: "独立音乐人",
      href: "https://music.163.com/st/musician",
      size: "110px 552px",
    },
    {
      id: 4,
      name: "赞赏",
      href: "https://music.163.com/web/reward",
      size: "110px 552px",
    },
    {
      id: 5,
      name: "视频奖励",
      href:
        "https://music.163.com/#/login?targetUrl=https%3A%2F%2Fmusic.163.com%2Fuservideo%23%2Fplan",
      size: "110px 552px",
    },
  ];

  return (
    <FooterWrapper>
      <div className="wrapper">
        <FooterLeft>
          <p className="link">
            {link.map((item) => {
              return (
                <React.Fragment key={item.name}>
                  <a href={item.href}>{item.name}</a>
                  <span className="line ">|</span>
                </React.Fragment>
              );
            })}
          </p>
          <p className="sep">
            <span className="sep-1">网易公司版权所有©1997-2021</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png">
              浙网文[2018]3506-263号
            </a>
          </p>
          <p className="contact">
            <span className="sep-1">违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：</span>
            <a className="email" href="mailto:ncm5990@163.com">
              ncm5990@163.com
            </a>
          </p>
          <p className="alink">
            <a
              className="sep-1"
              href="https://beian.miit.gov.cn/#/Integrated/index"
            >
              粤B2-20090191-18 工业和信息化部备案管理系统网站
            </a>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564">
              <span className="logo" />
              <span>浙公网安备 33010902002564号</span>
            </a>
          </p>
        </FooterLeft>
        <FooterRight>
          <ul className="enter">
            {enter.map((item) => {
              return (
                <li className="enter-link" key={item.name}>
                  <a href={item.href}>
                    <span className="icon" />
                  </a>
                  <p>{item.name}</p>
                </li>
              );
            })}
          </ul>
        </FooterRight>
      </div>
    </FooterWrapper>
  );
};

export default ATFooter;
