<template>
  <div class="container">
    <div class="follow-section">
      <header>关注我</header>
      <ul class="account-list">
        <li class="item">
          <a href="https://github.com/copoile" target="_blank">
            <img
              class="icon"
              style="background: #000000;border-radius: 3px;"
              src="https://poile-img.nos-eastchina1.126.net/icon/github.png"
            >
          </a>
        </li>

        <li class="item">
          <el-popover placement="bottom" trigger="hover">
            <img
              style="width:90px;height:90px;margin: 5px;"
              src="https://poile-img.nos-eastchina1.126.net/icon/qrcode.jpg"
            >
            <img slot="reference" class="icon" src="https://b-gold-cdn.xitu.io/v3/static/img/wechat.ce329e6.png">
          </el-popover>
        </li>

        <li class="item">
          <a href="https://www.zhihu.com/people/yaohw-53" target="_blank">
            <img class="icon" src="https://b-gold-cdn.xitu.io/v3/static/img/zhuanlan.18265c6.png">
          </a>
        </li>

        <li class="item">
          <a href="https://www.jianshu.com/u/d757e6e6c36d" target="_blank">
            <img class="icon" src="https://b-gold-cdn.xitu.io/v3/static/img/jianshu.80c1fdd.png">
          </a>
        </li>
      </ul>
      <section class="more-section">
        <ul class="more-list">
          <li class="solt-item">
            <router-link to="/about">关于</router-link>
          </li>
          <li class="solt-item">
            <router-link to="/terms">用户协议</router-link>
          </li>
          <li class="solt-item">
            <router-link to="/privacy">隐私政策</router-link>
          </li>
          <li class="item">
            <router-link to="/friend-link">友情链接</router-link>
          </li>
        </ul>
        <ul class="more-list">
<!--          <li class="item">-->
<!--            ©2020 个人阅读分享-->
<!--          </li>-->
<!--        </ul>-->
<!--        <ul class="more-list">-->
<!--          <li class="item">-->
<!--            Powered by Yaohw-->
<!--          </li>-->
<!--        </ul>-->
<!--        <ul class="more-list">-->
<!--          <li class="item">-->
<!--            备案号-->
<!--          </li>-->
<!--          <li class="item">-->
<!--            <a href="http://www.beian.miit.gov.cn/" target="_blank">-->
<!--              粤ICP备19083123号-->
<!--            </a>-->
<!--          </li>-->
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  text-align: center;
  margin: 20px 0;

  a:hover {
    color: #007fff;
  }

  .follow-section {
    font-size: 12px;

    .account-list {
      margin: 0;
      padding: 0;
      margin: 12px 0;
      display: flex;
      justify-content: center;

      .item {
        list-style: none;
        cursor: pointer;

        .icon {
          width: 24px;
          margin: 0 6px;
        }
      }
    }
  }

  .more-section {
    font-size: 13px;
    font-weight: 450;
    color: #909090;

    .more-list {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 8px;

      .item {
        list-style: none;
        margin-right: 2px;
      }

      .solt-item {
        list-style: none;

        &:after {
          content: "·";
          margin: 0 6px;
        }
      }
    }
  }

}
</style>
