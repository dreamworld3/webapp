 <!--顶部的五个图标，-->
<template>
  <div class="m-header"> 
    <router-link to="/user" class="mine" tag="div">
     <i class="iconfont icon-list"></i>
    </router-link>
     <router-link to="/user" class="music" tag="div">
     <i class="music-icon icon-yinyue"></i>
    </router-link>
    <router-link to="/user" class="home" tag="div">
     <i class="music-icon icon-home"></i>
    </router-link>
    <router-link to="/mv" class="video" tag="div">
     <i class="music-icon icon-shipin"></i>
    </router-link>
    <router-link to="/search" class="search" tag="div">
      <i class="iconfont icon-search"></i>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable.scss";

.m-header {
  position: relative;
  height: 44px;
  width: 100%;
  text-align: center;
  background: $color-theme; 
  .mine {
    position: absolute;
    top: %50;
    left: 0;
    .iconfont {
        display: block;
        padding: 11px;
        font-size: 22px;
        color: $color-theme-l;
    }
  }

.music{
      position: absolute;
      text-align:center;
      left:33.3%;
      top:50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
     .music-icon {
        display: block;
        padding: 12px;
        font-size: 20px;
        color: $color-theme-l;
    }
  }

.home{
      position: absolute;
      text-align:center;
      left:50%;
      top:50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
     .music-icon {
        display: block;
        padding: 12px;
        font-size: 20px;
        color: $color-theme-l;
    }

  }

  .video{
      position: absolute;
      text-align:center;
      left:66%;
      top:50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);  
     .music-icon {
        display: block;
        padding: 12px;
        font-size: 20px;
        color: $color-theme-l;
    }

  }
  .search {
    position: absolute;
    top: %50;
    right: 0px;
    .iconfont {
        display: block;
        padding: 12px;
        font-size: 18px;
        color: $color-theme-l;
    }
  }

  /*router-link标签在选中的时候会自动给整个标签添加一个router-link-active的class，
    可以根据这个class设置它的样式
    以下样式设置了router-link标签里的<span>标签内容被选中时字体会加粗，颜色会变亮，底部会有条横线
    */
    &.router-link-active {
      span {
        font-weight: bold;
        color: $color-text-l;
        border-bottom: 2px solid $color-text-l
      }
    }
}
</style>
