<style lang="scss">
  h2 {
    font-size: 26px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 300 !important;
    font-family: 'Open Sans','Segoe UI';
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.navbar {
  padding: 0;
  margin: 0;
  border: none;
  height: 45px;
  min-height: 45px;
  z-index: 200;
}
.navbar .navbar-inner {
  border: 0;
  -webkit-border-radius: 0;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 0;
  -moz-background-clip: padding;
  border-radius: 0;
  background-clip: padding-box;
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  min-height: 45px;
  position: relative;
  background: #2dc3e8;
}
.navbar .navbar-inner {
  background: #03b3b2;
}
.navbar .navbar-inner .navbar-container {
  padding-left: 10px;
}
.navbar .navbar-brand {
  color: #fff;
  font-size: 24px;
  -webkit-text-shadow: none;
  text-shadow: none;
  padding: 2px 0 2px 0;
  font-weight: 200;
  height: 45px;
}
.navbar .navbar-brand small img {
  height: 40px;
  width: 177px;
}
.navbar .sidebar-collapse {
  text-align: center;
  padding: 0;
  position: absolute;
  left: 189px;
  top: 0;
  z-index: 2;
  width: 35px;
  height: 45px;
}
.navbar .sidebar-collapse .collapse-icon {
  display: inline-block;
  cursor: pointer;
  font-size: 18px;
  color: #fff;
  padding: 11px 5px;
  line-height: 22px;
  position: relative;
  -webkit-transition: background-color .218s ease;
  -moz-transition: background-color .218s ease;
  -o-transition: background-color .218s ease;
  transition: background-color .218s ease;
  -webkit-transition: -webkit-box-shadow .218s ease;
  -moz-transition: -moz-box-shadow .218s ease;
  -o-transition: box-shadow .218s ease;
  transition: box-shadow .218s ease;
  -webkit-transition: color .318s ease;
  -moz-transition: color .318s ease;
  -o-transition: color .318s ease;
  transition: color .318s ease;
}
.navbar .navbar-inner .navbar-header .navbar-account .account-area {
  position: absolute;
  top: 0;
  right: 50px;
  zoom: 1;
  filter: alpha(opacity=100);
  -webkit-opacity: 1;
  -moz-opacity: 1;
  opacity: 1;
  list-style: none;
  margin-bottom: 0;
  display: inline-block;
}
.navbar .navbar-inner .navbar-header .navbar-account {
  height: 45px;
}
.navbar .navbar-inner .navbar-header .navbar-account .account-area, .navbar .navbar-inner .navbar-header .navbar-account .setting-container, .navbar .navbar-inner .navbar-header .navbar-account .setting {
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: .9s;
  -moz-transition: .9s;
  -o-transition: .9s;
  transition: .9s;
}
.navbar .navbar-inner .navbar-header .navbar-account .account-area {
  position: absolute;
  top: 0;
  right: 50px;
  zoom: 1;
  filter: alpha(opacity=100);
  -webkit-opacity: 1;
  -moz-opacity: 1;
  opacity: 1;
  list-style: none;
  margin-bottom: 0;
  display: inline-block;
}
.navbar .navbar-inner .navbar-header .navbar-account .account-area>li {
  float: left;
  position: relative;
  height: 45px;
}
.navbar .navbar-inner .navbar-header .navbar-account .account-area>li>a {
  position: relative;
  min-width: 50px;
  height: 45px;
  display: inline-block;
}
.navbar .navbar-inner .navbar-header .navbar-account .account-area>li>a .icon {
  display: block;
  color: #fff;
  font-size: 16px;
  line-height: 48px;
  text-align: center;
  -webkit-transition: line-height .3s ease;
  -moz-transition: line-height .3s ease;
  -o-transition: line-height .3s ease;
  transition: line-height .3s ease;
}
.navbar .navbar-inner .navbar-header .navbar-account .account-area>li .dropdown-menu.dropdown-notifications {
  min-width: 300px;
  padding-top: 10px;
}
.navbar .navbar-inner .navbar-header .navbar-account .account-area>li .dropdown-menu.dropdown-notifications li {
  border-bottom: 1px solid #f3f3f3;
}
.navbar .navbar-inner .navbar-header .navbar-account .account-area>li .dropdown-menu li {
  background-color: #fff;
  border: 0;
  padding: 0 8px;
}
.navbar .navbar-inner .navbar-header .navbar-account .account-area>li .dropdown-menu li a {
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  padding: 10px 2px;
}
.dropdown-menu>li>a {
  font-size: 13px;
  padding-left: 11px;
  padding-right: 11px;
  margin-bottom: 1px;
  margin-top: 1px;
}
.navbar .navbar-inner .navbar-header .navbar-account .account-area>li .dropdown-menu.dropdown-notifications li .notification-icon {
  float: left;
}
.navbar .navbar-inner .navbar-header .navbar-account .account-area>li .dropdown-menu.dropdown-notifications li .notification-icon i {
  width: 32px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  margin-right: 10px;
  font-size: 15px;
  border-radius: 50%;
}
.navbar .navbar-inner .navbar-header .navbar-account .account-area>li .dropdown-menu.dropdown-notifications li .notification-body {
  float: left;
}
.navbar .navbar-inner .navbar-header .navbar-account .account-area>li .dropdown-menu.dropdown-notifications li .notification-body .title {
  display: block;
  font-size: 13px;
}
.navbar .navbar-inner .navbar-header .navbar-account .account-area>li .dropdown-menu.dropdown-notifications li .notification-body .description {
  display: block;
  font-size: 10px;
  color: #999;
}
.navbar .navbar-inner .navbar-header .navbar-account .account-area>li .dropdown-menu.dropdown-notifications li .notification-extra {
  float: right;
  text-align: right;
}
.navbar .navbar-inner .navbar-header .navbar-account .account-area .login-area section h2 span {
  display: block;
  color: #fff;
  overflow: hidden;
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  text-decoration: none;
  line-height: 25px;
}.navbar .navbar-inner .navbar-header .navbar-account .account-area .login-area section h2 {
   font-size: 14px;
   font-weight: 400;
   white-space: nowrap;
   margin: 0;
 }
  .navbar .navbar-inner .navbar-header .navbar-account .account-area .login-area section {
    width: auto;
    display: block;
    overflow: hidden;
    line-height: 25px;
    float: left;
  }
  .navbar .navbar-inner .navbar-header .navbar-account .account-area .login-area {
    padding: 8px 20px 10px 20px;
    height: 45px;
    opacity: 1;
    position: relative;
    cursor: pointer;
  }
  .navbar .navbar-inner .navbar-header .navbar-account .account-area>li>a .badge {
    position: absolute;
    top: 6px;
    left: 4px;
    padding: 2px;
    cursor: pointer;
    background-color: transparent !important;
    border: 1px solid #fff;
    width: 18px;
    height: 18px;
    box-shadow: 1px 1px 0 #2dc3e8;
    -webkit-transition: top .3s ease;
    -moz-transition: top .3s ease;
    -o-transition: top .3s ease;
    transition: top .3s ease;
  }
  .badge {
    font-size: 11px !important;
    font-weight: 300;
    text-align: center;
    background-color: #ccc;
    height: 18px;
    padding: 3px 6px 3px 6px;
    -webkit-border-radius: 12px !important;
    -webkit-background-clip: padding-box !important;
    -moz-border-radius: 12px !important;
    -moz-background-clip: padding !important;
    border-radius: 12px !important;
    background-clip: padding-box !important;
    -webkit-text-shadow: none !important;
    text-shadow: none !important;
    vertical-align: middle;
  }
  .label, .badge {
    display: inline-block;
    font-weight: 300;
    -webkit-text-shadow: none !important;
    text-shadow: none !important;
  }
  /*菜单*/
  .page-sidebar {
    position: absolute;
    top: 45px;
    bottom: 0;
    width: 224px;
    display: block;
  }
  @media (max-width: 880px){
    .page-sidebar{
      display: block !important;
    }
  }
    @media only screen and (max-width: 880px){
      .page-sidebar {
        display: none;
        float: none;
      }
    }
  .page-sidebar .sidebar-header-wrapper {
    margin-left: 5px;
    height: 40px;
    margin-bottom: 0;
    position: relative;
  }
  .page-sidebar .sidebar-header-wrapper .searchinput {
    height: 41px;
    z-index: 2;
    background-color: #fff;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #fff;
    padding-left: 40px;
    width: 100%;
  }
  textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"] {
    -webkit-border-radius: 0 !important;
    -webkit-background-clip: padding-box !important;
    -moz-border-radius: 0 !important;
    -moz-background-clip: padding !important;
    border-radius: 0 !important;
    background-clip: padding-box !important;
    color: #858585;
    background-color: #fbfbfb;
    border: 1px solid #d5d5d5;
    font-family: inherit;
    -webkit-transition: -webkit-box-shadow .45s,border-color .45s ease-in-out;
    -moz-transition: -moz-box-shadow .45s,border-color .45s ease-in-out;
    -o-transition: box-shadow .45s,border-color .45s ease-in-out;
    transition: box-shadow .45s,border-color .45s ease-in-out;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
  .page-sidebar .sidebar-header-wrapper .searchicon {
    cursor: pointer;
    display: inline-block;
    height: 12px;
    left: 20px;
    position: absolute;
    top: 14px;
    width: 12px;
    color: #2dc3e8;
    z-index: 124;
  }
  .page-sidebar .sidebar-header-wrapper .searchhelper {
    -webkit-box-shadow: 0 10px 40px rgba(0,0,0,.4);
    -moz-box-shadow: 0 10px 40px rgba(0,0,0,.4);
    box-shadow: 0 10px 40px rgba(0,0,0,.4);
    background-color: #fff;
    color: #999;
    display: none;
    opacity: 1;
    padding: 10px;
    position: absolute;
    right: 0;
    left: 0;
    top: 40px;
    z-index: 4;
  }
  .page-sidebar .sidebar-menu {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-left: 5px;
  }
  .page-sidebar .sidebar-menu li {
    display: block;
    padding: 0;
    margin: 0;
    border: 0;
    position: relative;
  }
  .page-sidebar .sidebar-menu li.active>a {
    display: block;
    content: "";
    color: #262626;
    background-color: #f5f5f5;
  }
  .page-sidebar .sidebar-menu>li>a {
    border-top: 1px solid #f3f3f3;
  }
  .page-sidebar .sidebar-menu a {
    display: block;
    height: 38px;
    line-height: 36px;
    margin: 0;
    padding: 0 16px 0 7px;
    -webkit-text-shadow: none !important;
    text-shadow: none !important;
    font-size: 13px;
    text-decoration: none;
    color: #737373;
    z-index: 123;
  }
  .page-sidebar .sidebar-menu a .menu-icon {
    display: inline-block;
    vertical-align: middle;
    min-width: 30px;
    text-align: center;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    margin-top: -3px;
  }
  .page-sidebar .sidebar-menu li.active>a {
    display: block;
    content: "";
    color: #262626;
    background-color: #f5f5f5;
  }
  .page-sidebar .sidebar-menu>li>.submenu {
    background-color: #fbfbfb;
    -webkit-box-shadow: inset 0 4px 4px -2px rgba(0,0,0,.15), inset 0 -4px 4px -2px rgba(0,0,0,.15);
    -moz-box-shadow: inset 0 4px 4px -2px rgba(0,0,0,.15),inset 0 -4px 4px -2px rgba(0,0,0,.15);
    box-shadow: inset 0 4px 4px -2px rgba(0,0,0,.15), inset 0 -4px 4px -2px rgba(0,0,0,.15);
  }
  .page-sidebar .sidebar-menu .submenu {
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    background-color: #fbfbfb;
    border-top: 0;
    z-index: 123;
  }
  .page-sidebar .sidebar-menu .submenu li {
    margin-left: 0;
    position: relative;
  }
  .page-sidebar .sidebar-menu li {
    display: block;
    padding: 0;
    margin: 0;
    border: 0;
    position: relative;
  }
  .page-sidebar .sidebar-menu .submenu>li>a {
    padding-left: 40px;
  }
  .page-sidebar .sidebar-menu li.open>.submenu {
    display: block !important;
  }
</style>
<template>
  <div>
    <!--头部-->
    <div class="navbar" data-ng-include=" 'views/partials/navbar.html' "><div class="navbar-inner ng-scope">
      <div class="navbar-container">
        <!-- Navbar Barnd -->
        <div class="navbar-header pull-left">
          <a href="#" class="navbar-brand">
            <small>
              <img src="../../../static/img/logo.png" ng-if="!settings.rtl" alt="" class="ng-scope">
            </small>
          </a>
        </div>
        <!-- /Navbar Barnd -->
        <!-- Sidebar Collapse -->
        <div class="sidebar-collapse" @click="handle()"><i class="collapse-icon fa fa-bars"></i></div>
        <!-- /Sidebar Collapse -->
        <!-- Account Area and Settings -->
        <div class="navbar-header pull-right">
          <div class="navbar-account">
            <ul class="account-area">
              <li>
                <a class=" dropdown-toggle" data-toggle="dropdown" title="Help" href="#">
                  <i class="icon fa fa-warning"></i>
                </a>
                <!--Notification Dropdown -->
                <ul class="pull-right dropdown-menu dropdown-arrow dropdown-notifications">
                  <li>
                    <a href="#">
                      <div class="clearfix">
                        <div class="notification-icon">
                          <i class="fa fa-phone bg-themeprimary white"></i>
                        </div>
                        <div class="notification-body">
                          <span class="title">Skype meeting with Patty</span>
                          <span class="description">01:00 pm</span>
                        </div>
                        <div class="notification-extra">
                          <i class="fa fa-clock-o themeprimary"></i>
                          <span class="description">office</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="clearfix">
                        <div class="notification-icon">
                          <i class="fa fa-check bg-darkorange white"></i>
                        </div>
                        <div class="notification-body">
                          <span class="title">Uncharted break</span>
                          <span class="description">03:30 pm - 05:15 pm</span>
                        </div>
                        <div class="notification-extra">
                          <i class="fa fa-clock-o darkorange"></i>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="clearfix">
                        <div class="notification-icon">
                          <i class="fa fa-gift bg-warning white"></i>
                        </div>
                        <div class="notification-body">
                          <span class="title">Kate birthday party</span>
                          <span class="description">08:30 pm</span>
                        </div>
                        <div class="notification-extra">
                          <i class="fa fa-calendar warning"></i>
                          <i class="fa fa-clock-o warning"></i>
                          <span class="description">at home</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="clearfix">
                        <div class="notification-icon">
                          <i class="fa fa-glass bg-success white"></i>
                        </div>
                        <div class="notification-body">
                          <span class="title">Dinner with friends</span>
                          <span class="description">10:30 pm</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="dropdown-footer ">
                                <span>
                                    Today, March 28
                                </span>
                    <span class="pull-right">
                                    10°c
                                    <i class="wi wi-cloudy"></i>
                                </span>
                  </li>
                </ul>
                <!--/Notification Dropdown-->
              </li>
              <li>
                <a class="dropdown-toggle" data-toggle="dropdown" title="Mails" href="#">
                  <i class="icon fa fa-envelope"></i>
                  <span class="badge">3</span>
                </a>
                <!--Messages Dropdown-->
                <ul class="pull-right dropdown-menu dropdown-arrow dropdown-messages">
                  <li>
                    <a href="#">
                      <img src="assets/img/avatars/divyia.jpg" class="message-avatar" alt="Divyia Austin">
                      <div class="message">
                                        <span class="message-sender">
                                            Divyia Austin
                                        </span>
                        <span class="message-time">
                                            2 minutes ago
                                        </span>
                        <span class="message-subject">
                                            Here's the recipe for apple pie
                                        </span>
                        <span class="message-body">
                                            to identify the sending application when the senders image is shown for the main icon
                                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/avatars/bing.png" class="message-avatar" alt="Microsoft Bing">
                      <div class="message">
                                        <span class="message-sender">
                                            Bing.com
                                        </span>
                        <span class="message-time">
                                            Yesterday
                                        </span>
                        <span class="message-subject">
                                            Bing Newsletter: The January Issue‏
                                        </span>
                        <span class="message-body">
                                            Discover new music just in time for the Grammy® Awards.
                                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/avatars/adam-jansen.jpg" class="message-avatar" alt="Divyia Austin">
                      <div class="message">
                                        <span class="message-sender">
                                            Nicolas
                                        </span>
                        <span class="message-time">
                                            Friday, September 22
                                        </span>
                        <span class="message-subject">
                                            New 4K Cameras
                                        </span>
                        <span class="message-body">
                                            The 4K revolution has come over the horizon and is reaching the general populous
                                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
                <!--/Messages Dropdown-->
              </li>

              <li>
                <a class="dropdown-toggle" data-toggle="dropdown" title="Tasks" href="#">
                  <i class="icon fa fa-tasks"></i>
                  <span class="badge">4</span>
                </a>
                <!--Tasks Dropdown-->
                <ul class="pull-right dropdown-menu dropdown-tasks dropdown-arrow ">
                  <li class="dropdown-header bordered-darkorange">
                    <i class="fa fa-tasks"></i>
                    4 Tasks In Progress
                  </li>
                  <li>
                    <a href="#">
                      <div class="clearfix">
                        <span class="pull-left">Account Creation</span>
                        <span class="pull-right">65%</span>
                      </div>
                      <div class="progress-xs progress ng-isolate-scope" value="65">
                        <div class="progress-bar" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" ng-style="{width: percent + '%'}" aria-valuetext="65%" ng-transclude="" style="width: 65%;"></div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="clearfix">
                        <span class="pull-left">Profile Data</span>
                        <span class="pull-right">35%</span>
                      </div>
                      <div class="progress-xs progress ng-isolate-scope" type="success" value="35">
                        <div class="progress-bar progress-bar-success" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" ng-style="{width: percent + '%'}" aria-valuetext="35%" ng-transclude="" style="width: 35%;"></div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="clearfix">
                        <span class="pull-left">Updating Resume</span>
                        <span class="pull-right">75%</span>
                      </div>
                      <div class="progress-xs progress ng-isolate-scope" type="darkorange" value="75">
                        <div class="progress-bar progress-bar-darkorange" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ng-style="{width: percent + '%'}" aria-valuetext="75%" ng-transclude="" style="width: 75%;"></div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="clearfix">
                        <span class="pull-left">Adding Contacts</span>
                        <span class="pull-right">10%</span>
                      </div>
                      <div class="progress-xs progress ng-isolate-scope" type="warning" value="10">
                        <div class="progress-bar progress-bar-warning" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" ng-style="{width: percent + '%'}" aria-valuetext="10%" ng-transclude="" style="width: 10%;"></div>
                      </div>
                    </a>
                  </li>
                  <li class="dropdown-footer">
                    <a href="#">
                      See All Tasks
                    </a>
                    <button class="btn btn-xs btn-default shiny darkorange icon-only pull-right"><i class="fa fa-check"></i></button>
                  </li>
                </ul>
                <!--/Tasks Dropdown-->
              </li>
              <li>
                <a chat-link="" class="wave in" title="Chat"><i class="icon glyphicon glyphicon-comment"></i></a>
              </li>
              <li>
                <a class="login-area dropdown-toggle" data-toggle="dropdown">
                  <section>
                    <h2><span class="profile"><span>mcipay</span></span></h2>
                  </section>
                </a>
                <!--Login Area Dropdown-->
                <ul class="pull-right dropdown-menu dropdown-arrow dropdown-login-area">
                  <!--Theme Selector Area-->
                  <li class="theme-area">
                    <ul class="colorpicker">
                      <li><a class="colorpick-btn" href="" style="background-color:#5DB2FF;" skin-changer="" rel="assets/css/skins/blue.min.css"></a></li>
                      <li><a class="colorpick-btn" href="" style="background-color:#2dc3e8;" skin-changer="" rel="assets/css/skins/azure.min.css"></a></li>
                      <li><a class="colorpick-btn" href="" style="background-color:#03B3B2;" skin-changer="" rel="assets/css/skins/teal.min.css"></a></li>
                      <li><a class="colorpick-btn" href="" style="background-color:#53a93f;" skin-changer="" rel="assets/css/skins/green.min.css"></a></li>
                      <li><a class="colorpick-btn" href="" style="background-color:#FF8F32;" skin-changer="" rel="assets/css/skins/orange.min.css"></a></li>
                      <li><a class="colorpick-btn" href="" style="background-color:#cc324b;" skin-changer="" rel="assets/css/skins/pink.min.css"></a></li>
                      <li><a class="colorpick-btn" href="" style="background-color:#AC193D;" skin-changer="" rel="assets/css/skins/darkred.min.css"></a></li>
                      <li><a class="colorpick-btn" href="" style="background-color:#8C0095;" skin-changer="" rel="assets/css/skins/purple.min.css"></a></li>
                      <li><a class="colorpick-btn" href="" style="background-color:#0072C6;" skin-changer="" rel="assets/css/skins/darkblue.min.css"></a></li>
                      <li><a class="colorpick-btn" href="" style="background-color:#585858;" skin-changer="" rel="assets/css/skins/gray.min.css"></a></li>
                      <li><a class="colorpick-btn" href="" style="background-color:#474544;" skin-changer="" rel="assets/css/skins/black.min.css"></a></li>
                      <li><a class="colorpick-btn" href="" style="background-color:#001940;" skin-changer="" rel="assets/css/skins/deepblue.min.css"></a></li>
                    </ul>
                  </li>
                  <!--/Theme Selector Area-->
                  <li class="dropdown-footer">
                    <a href="login.html">
                      <i class="fa fa-sign-out"></i>
                      <span>退出</span>
                    </a>
                  </li>
                </ul>
                <!--/Login Area Dropdown-->
              </li>
              <!-- /Account Area -->
            </ul>
          </div>
        </div>
        <!-- /Account Area and Settings -->
      </div>
    </div></div>
    <!--菜单-->
    <div class="page-sidebar" id="sidebar" data-ng-include=" 'views/partials/sidebar.html' ">    <!-- Page Sidebar Header-->
      <div class="sidebar-header-wrapper ng-scope">
        <input type="text" class="searchinput">
        <i class="searchicon fa fa-search"></i>
        <div class="searchhelper">搜索</div>
      </div>
      <!-- /Page Sidebar Header -->
      <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>-->
      <!--<el-menu class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect">
        <div v-for="(item, index) in list" :key="index">
          <el-submenu index="1" v-if="item.children && item.children.length>0">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.menuName}}</span>
            </template>
            <el-menu-item-group v-for="(liItem,idx) in item.children">
              <template slot="title"></template>
              <el-menu-item index="1-1">{{liItem.menuName}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item v-else>
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.menuName}}</span>
          </el-menu-item>
        </div>
      </el-menu>-->
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
               unique-opened router v-show="!collapsed">
        <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
          <el-submenu :index="index+''" v-if="!item.leaf">
            <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
            <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
          </el-submenu>
          <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
        </template>
      </el-menu>
      <!--<Row>
        <Col span="8">
        <Menu :theme="theme2" v-for="(item,index) in list">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper"></Icon>
              {{item.menuName}}
            </template>
            <MenuItem v-for="(liItem,idx) in item.children"@click="go(item)" name="1-1">{{liItem.menuName}}</MenuItem>

          </Submenu>
          &lt;!&ndash;<Submenu name="2">
            <template slot="title">
              <Icon type="ios-people"></Icon>
              用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="stats-bars"></Icon>
              统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>&ndash;&gt;
        </Menu>
        </Col>
      </Row>
      &lt;!&ndash; Sidebar Menu &ndash;&gt;
      <ul class="nav sidebar-menu ng-scope" v-for="(item,index) in list">
        &lt;!&ndash;客服管理&ndash;&gt;
        <li v-if="item.children && item.children.length>0"  @click="changeMenu(item)" >
          <a href="#" class="menu-dropdown">
            <i class="menu-icon fa fa-credit-card"></i>
            <span class="menu-text"> {{item.menuName}} </span>
            <i class="menu-expand"></i>
          </a>

          <ul class="submenu" v-for="(liItem,idx) in item.children">
            <li ui-sref-active="active">
              <a>
                <span class="menu-text">{{liItem.menuName}}</span>
              </a>
            </li>
          </ul>
        </li>
        &lt;!&ndash;后台首页&ndash;&gt;
        <li ui-sref-active="active" @click="go(item)" v-else :class="addClassopen(item)">
          <a>
            <i class="menu-icon glyphicon glyphicon-home"></i>
            <span class="menu-text"> {{item.menuName}} </span>
          </a>
        </li>
      </ul>-->
      <!--<ul class="nav sidebar-menu ng-scope">
        &lt;!&ndash;后台首页&ndash;&gt;
        <li ui-sref-active="active" class="active">
          <a  @click="goMain">
            <i class="menu-icon glyphicon glyphicon-home"></i>
            <span class="menu-text"> 首页 </span>
          </a>
        </li>
        &lt;!&ndash;客服管理&ndash;&gt;
        <li @click="addopen">
          <a href="#" class="menu-dropdown">
            <i class="menu-icon fa fa-search"></i>
            <span class="menu-text"> 交易管理 </span>
            <i class="menu-expand"></i>
          </a>

          <ul class="submenu">
            <li ui-sref-active="active">
              <a ui-sref="app.tradeDaily" href="#/app/tradeDaily">
                <span class="menu-text">交易日报</span>
              </a>
            </li>
            <li ui-sref-active="active">
              <a ui-sref="app.tradeQuery" href="#/app/tradeQuery">
                <span class="menu-text">交易查询</span>
              </a>
            </li>
            <li ui-sref-active="active">
              <a ui-sref="app.reFundRevocation" href="#/app/reFundRevocation">
                <span class="menu-text">退款/撤销查询</span>
              </a>
            </li>
            <li ui-sref-active="active">
              <a ui-sref="app.cardholderEmail" href="#/app/cardholderEmail">
                <span class="menu-text">持卡人邮件处理</span>
              </a>
            </li>
          </ul>
        </li>
        &lt;!&ndash;结算管理&ndash;&gt;
        <li>
          <a href="#" class="menu-dropdown">
            <i class="menu-icon fa fa-credit-card"></i>
            <span class="menu-text"> 结算管理 </span>
            <i class="menu-expand"></i>
          </a>
          <ul class="submenu">
            <li ui-sref-active="active">
              <a ui-sref="app.fundsAccountSummary" href="#/app/fundsAccountSummary">
                <span class="menu-text">资金账户汇总</span>
              </a>
            </li>
            <li ui-sref-active="active">
              <a ui-sref="app.fundsAccountDetailed" href="#/app/fundsAccountDetailed">
                <span class="menu-text">资金账户入账流水</span>
              </a>
            </li>
            <li ui-sref-active="active">
              <a ui-sref="app.cashAccountManagement" href="#/app/cashAccountManagement">
                <span class="menu-text">资金账户提现管理</span>
              </a>
            </li>
          </ul>
        </li>
        &lt;!&ndash;风控管理&ndash;&gt;
        <li>
          <a href="#" class="menu-dropdown">
            <i class="menu-icon fa fa-shield"></i>
            <span class="menu-text"> 风控管理 </span>
            <i class="menu-expand"></i>
          </a>

          <ul class="submenu">
            <li ui-sref-active="active">
              <a ui-sref="app.riskTradeQuery" href="#/app/riskTradeQuery">
                <span class="menu-text">风控交易查询</span>
              </a>
            </li>
            <li ui-sref-active="active">
              <a ui-sref="app.riskEmail" href="#/app/riskEmail">
                <span class="menu-text">邮箱黑名单管理</span>
              </a>
            </li>
          </ul>
        </li>
        &lt;!&ndash;网站管理&ndash;&gt;
        <li class="open">
          <a href="#" class="menu-dropdown">
            <i class="menu-icon fa fa-globe"></i>
            <span class="menu-text"> 网站管理 </span>
            <i class="menu-expand"></i>
          </a>

          <ul class="submenu">
            <li ui-sref-active="active">
              <a @click="goWebadd">
                <span class="menu-text">网站添加</span>
              </a>
            </li>
            <li ui-sref-active="active">
              <a  @click="goWebsea">
                <span class="menu-text">网站查询</span>
              </a>
            </li>
          </ul>
        </li>
        &lt;!&ndash;争议管理&ndash;&gt;
        <li>
          <a href="#" class="menu-dropdown">
            <i class="menu-icon fa fa-bug"></i>
            <span class="menu-text"> 争议管理 </span>
            <i class="menu-expand"></i>
          </a>
          <ul class="submenu">
            <li ui-sref-active="active">
              <a ui-sref="app.chargebackTrade" href="#/app/chargebackTrade">
                <span class="menu-text">拒付交易</span>
              </a>
            </li>
            <li ui-sref-active="active">
              <a ui-sref="app.accessToTrade" href="#/app/accessToTrade">
                <span class="menu-text">调阅交易</span>
              </a>
            </li>
          </ul>
        </li>
        &lt;!&ndash; 运单管理 &ndash;&gt;
        <li>
          <a href="#" class="menu-dropdown">
            <i class="menu-icon fa fa-truck"></i>
            <span class="menu-text">运单管理</span>
            <i class="menu-expand"></i>
          </a>
          <ul class="submenu">
            <li>
              <a ui-sref="app.waybillStatus" href="#/app/waybillStatus">
                <span class="menu-text">运单状态查询</span>
              </a>
            </li>
            <li ui-sref-active="active">
              <a ui-sref="app.waybillReports" href="#/app/waybillReports">
                <span class="menu-text">妥投表</span>
              </a>
            </li>
          </ul>
        </li>
        &lt;!&ndash;商业智能&ndash;&gt;
        <li>
          <a href="#" class="menu-dropdown">
            <i class="menu-icon fa fa-pie-chart"></i>
            <span class="menu-text"> 商业智能 </span>

            <i class="menu-expand"></i>
          </a>

          <ul class="submenu">
            <li ui-sref-active="active">
              <a ui-sref="app.businessIntelligenceAnalysis" href="#/app/businessIntelligenceAnalysis">
                <span class="menu-text">商业智能分析</span>
              </a>
            </li>
            <li ui-sref-active="active">
              <a ui-sref="app.websiteTradeStatistics" href="#/app/websiteTradeStatistics">
                <span class="menu-text">网站交易统计</span>
              </a>
            </li>
          </ul>
        </li>
        &lt;!&ndash;系统管理&ndash;&gt;
        <li>
          <a href="#" class="menu-dropdown">
            <i class="menu-icon fa fa-gear"></i>
            <span class="menu-text"> 系统管理 </span>
            <i class="menu-expand"></i>
          </a>

          <ul class="submenu">
            <li ui-sref-active="active">
              <a ui-sref="app.merchantInfo" href="#/app/merchantInfo">
                <span class="menu-text">商户基本信息</span>
              </a>
            </li>
            <li ui-sref-active="active">
              <a ui-sref="app.subAccountManagement" href="#/app/subAccountManagement">
                <span class="menu-text">子账户管理</span>
              </a>
            </li>
            <li ui-sref-active="active">
              <a ui-sref="app.noticeManagement" href="#/app/noticeManagement">
                <span class="menu-text">公告信息</span>
              </a>
            </li>
            <li ui-sref-active="active">
              <a ui-sref="app.changePassword" href="#/app/changePassword">
                <span class="menu-text">修改密码</span>
              </a>
            </li>
            <li ui-sref-active="active">
              <a ui-sref="app.viewLoginInformation" href="#/app/viewLoginInformation">
                <span class="menu-text">查看登录信息</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>-->
      <!-- /Sidebar Menu -->
    </div>
  </div>

</template>

<script>
  export default {
    name: "header",
    data() {
      list:""
      return {
        isCollapse: false
      };
    },
    methods: {
      handle(){
        this.isCollapse=!this.isCollapse
      },
      goMain(){
        this.$router.push("/admin");
      },
      goWebadd(){
        this.$router.push("/webadd");
      },
      goWebsea(){
        this.$router.push("/websea");
      },
      go(item){
        this.$router.push(item.path);
      },
      addClassopen(item){
        if(!item.menuShow){
          return ""
        }else{
          return "open"
        }
      },
      changeMenu(item){
        if(item.menuShow){
          item.menuShow = false
        }else{
          item.menuShow = true
        }
      }
    },
    created(){
      this.list=[{
      path:'/admin',
      menuName:'首页'
    },
      {
        path:'',
        menuName:'交易管理',
        menuShow:true,
        hasChild:true,
        children:[
        {
          path:'',
          menuName:'交易日报'
        },
        {
          path:'',
          menuName:'交易查询',
        }
      ]
      },
      {
        path:'',
        menuName:'网站管理',
        menuShow:true,
        hasChild:true,
        children:[
        {
          path:'/webadd',
          menuName:'网站添加'
        },
        {
          path:'/websea',
          menuName:'网站查询'
        }
      ]}
    ]}
  }
</script>
<!--<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>-->
