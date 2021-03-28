import styled from "styled-components";

console.log(require("@/assets/img/sprite_footer_02.png").default);

export const FooterWrapper = styled.div`
  height: 172px;
  background: #f2f2f2;
  border-top: 1px solid #d3d3d3;

  .wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 980px;
  }
`;

export const FooterLeft = styled.div`
  padding-top: 15px;

  .link {
    height: 24px;
    line-height: 24px;
    color: #999;

    .line {
      display: inline-block;
      margin: 0 8px 0 10px;
    }
  }

  .sep,
  .contact,
  .alink {
    height: 24px;
    line-height: 24px;
    color: #666;

    .sep-1 {
      margin-right: 14px;
    }

    .email {
      color: #333;
    }

    .logo {
      display: inline-block;
      margin-right: 2px;
      vertical-align: -2px;
      width: 14px;
      height: 14px;
      background: url("https://s2.music.126.net/style/web2/img/3rd/police.png?85dc4d26880878cbad8057184d78f34a")
        no-repeat;
      background-size: cover;
    }
  }
`;

export const FooterRight = styled.div`
  margin-top: 33px;
  width: 420px;

  .enter {
    display: flex;
    justify-content: space-between;

    .enter-link {
      a {
        display: flex;
        justify-content: center;

        .icon {
          display: inline-block;
          margin: 0 auto;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-image: url(${require("@/assets/img/sprite_footer_02.png")
            .default});
          background-size: 104px 444px;
        }
      }

      p {
        margin-top: 7px;
        text-align: center;
        color: #888;
      }

      :nth-child(1) .icon {
        background-position: -60px 0;
      }

      :nth-child(2) .icon {
        background-position: -60px -100px;
      }

      :nth-child(3) .icon {
        background-position: 0 0;
      }

      :nth-child(4) .icon {
        background-position: -60px -50px;
      }

      :nth-child(5) .icon {
        background-position: 0 -100px;
      }
    }
  }
`;
