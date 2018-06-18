<style lang="scss">

</style>

<template>
  <div>
    <!-- Page 位置 -->
    <!-- ngInclude: 'views/partials/breadcrumbs.html' --><div class="page-breadcrumbs" data-ng-include=" 'views/partials/breadcrumbs.html' "><ul class="breadcrumb ng-scope ng-isolate-scope" ncy-breadcrumb=""><li><i class="fa fa-home"></i><a href="#">Home</a></li><!-- ngRepeat: step in steps --><li ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract" class="ng-scope active"><!-- ngSwitchWhen: false --><!-- ngSwitchWhen: true --><span ng-switch-when="true" class="ng-binding ng-scope">首页</span><!-- end ngSwitchWhen: --></li><!-- end ngRepeat: step in steps --></ul>
  </div>
    <!-- /Page 位置 -->
    <!-- Page Header -->
    <!-- ngInclude: 'views/partials/header.html' --><div class="page-header position-relative" data-ng-include=" 'views/partials/header.html' "><div class="header-title ng-scope">
    <h1 header-title="">
    </h1>
  </div>
    <!--Header Buttons-->
    <div class="header-buttons ng-scope">
      <a href="" class="sidebar-toggler"><i class="fa fa-arrows-h"></i></a>
      <a href="" class="refresh"><i class="glyphicon glyphicon-refresh"></i></a>
      <a href="" class="fullscreen"><i class="glyphicon glyphicon-fullscreen"></i></a>
    </div>
    <!--Header Buttons End-->
  </div>
    <!-- /Page Header -->
    <!-- Page Body -->
    <!-- uiView:  --><div class="page-body ng-scope" ui-view=""><div ng-controller="DashboardCtrl" class="ng-scope">
    <div class="row">
      <div class="col-md-9 col-sm-12 col-xs-12">
        <div class="widget">
          <div class="widget-body">
            <div class="account-grids">
              <div class="account-grids-5">
                <div class="account-content">
                  <i class="fa fa-cny"></i>
                  <span class="account-amount ng-binding" ng-bind="totalTrade">14076260.82</span>
                  <div class="account-title bg-gold">交易总金额</div>
                </div>
              </div>
              <div class="account-grids-5">
                <div class="account-content">
                  <i class="fa fa-cny"></i>
                  <span class="account-amount ng-binding" ng-bind="withdrawTotal">3455155.18</span>
                  <div class="account-title bg-pink">已提现金额</div>
                </div>
              </div>
              <div class="account-grids-5">
                <div class="account-content">
                  <i class="fa fa-cny"></i>
                  <span class="account-amount ng-binding" ng-bind="withdrawableTotal">-1984162.85</span>
                  <div class="account-title bg-blue">可提现金额</div>
                </div>
              </div>
              <div class="account-grids-5">
                <div class="account-content">
                  <i class="fa fa-cny"></i>
                  <span class="account-amount ng-binding" ng-bind="unsettledDeposit">1407627.15</span>
                  <div class="account-title bg-success">未结算保证金</div>
                </div>
              </div>
              <div class="account-grids-5">
                <div class="account-content">
                  <i class="fa fa-cny"></i>
                  <span class="account-amount ng-binding" ng-bind="unsettledMoney">8691011.58</span>
                  <div class="account-title bg-red">未结算总金额</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="widget">
          <div class="widget-header bordered-bottom bordered-themeprimary">
            <i class="widget-icon fa fa-tasks themeprimary"></i>
            <span class="widget-caption themeprimary">今日交易状况</span>
          </div>
          <div class="widget-body">
            <div class="table-scrollable">
              <table class="table table-hover table-striped table-bordered table-condensed">
                <thead>
                <tr>
                  <th> 卡类型 </th>
                  <th> 支付笔数 </th>
                  <th> 成功笔数 </th>
                  <th> 成功交易金额(RMB) </th>
                  <th> 拒付/调阅笔数 </th>
                  <th> 撤销笔数 </th>
                  <th> 退款笔数 </th>
                </tr>
                </thead>
                <tbody>
                <tr><td>VISA</td><td>389</td><td>201</td><td>26595.85</td><td>10</td>
                  <td>7</td><td>6</td></tr>
                <tr><td>MASTER</td><td>224</td><td>127</td><td>26595.85</td><td>10</td>
                  <td>7</td><td>1</td></tr>
                <tr><td>JCB</td><td>0</td><td>0</td><td>0</td><td>10</td>
                  <td>1</td><td>0</td></tr>
                <tr><td>总计</td><td>613</td><td>328</td><td>26595.85</td><td>10</td>
                  <td>15</td><td>7</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="widget">
          <div class="widget-header bordered-bottom bordered-themeprimary">
            <i class="widget-icon fa fa-tasks themeprimary"></i>
            <span class="widget-caption themeprimary">TOP10网站交易数据</span>
          </div>
          <div class="widget-body">
            <div class="table-scrollable">
              <table class="table table-hover table-striped table-bordered table-condensed">
                <thead>
                <tr>
                  <th> id </th>
                  <th> 交易网址 </th>
                  <th> 支付笔数 </th>
                  <th> 成功笔数 </th>
                  <th> 成功交易金额(RMB) </th>
                  <th> 成功率（%）</th>
                </tr>
                </thead>
                <tbody>
                <tr><td>1</td><td>www.bourseanalyse.fr</td><td>328</td><td>199</td><td>26595.85</td><td>67%</td></tr>
                <tr><td>2</td><td>www.die-grupfte-hiener.ch</td><td>328</td><td>139</td><td>26595.85</td><td>67%</td></tr>
                <tr><td>3</td><td>www.roux-horticulteur-pepinieriste.fr</td><td>328</td><td>99</td><td>26595.85</td><td>67%</td></tr>
                <tr><td>4</td><td>www.zpreinstal-24.pl</td><td>328</td><td>89</td><td>26595.85</td><td>67%</td></tr>
                <tr><td>5</td><td>www.aparteshop.dk</td><td>328</td><td>79</td><td>26595.85</td><td>67%</td></tr>
                <tr><td>6</td><td>www.meuorkut.com</td><td>328</td><td>69</td><td>26595.85</td><td>67%</td></tr>
                <tr><td>7</td><td>www.rlssuklottery.co.uk</td><td>328</td><td>99</td><td>26595.85</td><td>67%</td></tr>
                <tr><td>8</td><td>www.unibidauctions.com</td><td>328</td><td>99</td><td>26595.85</td><td>67%</td></tr>
                <tr><td>9</td><td>www.rbkus.co</td><td>328</td><td>99</td><td>26595.85</td><td>67%</td></tr>
                <tr><td>10</td><td>www.bestattungshaus-hempel.de</td><td>328</td><td>99</td><td>26595.85</td><td>67%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="widget">
          <div class="widget-header bordered-bottom bordered-themeprimary">
            <i class="widget-icon fa fa-bar-chart themeprimary"></i>
            <span class="widget-caption themeprimary">历史交易分析</span>
          </div>
          <div class="widget-body">
            <div class="box-tabbs">
              <div class="no-margin" id="container" style="width: 100%;height: 350px" data-highcharts-chart="0"><div id="highcharts-u2ly181-0" class="highcharts-container " style="position: relative; overflow: hidden; width: 512px; height: 350px; text-align: left; line-height: normal; z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><svg version="1.1" class="highcharts-root" style="font-family:&quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif;font-size:12px;" xmlns="http://www.w3.org/2000/svg" width="512" height="350" viewBox="0 0 512 350"><desc>Created with Highcharts 5.0.12</desc><defs><clipPath id="highcharts-u2ly181-1"><rect x="0" y="0" width="362" height="195" fill="none"></rect></clipPath></defs><rect fill="#ffffff" class="highcharts-background" x="0" y="0" width="512" height="350" rx="0" ry="0"></rect><rect fill="none" class="highcharts-plot-background" x="75" y="61" width="362" height="195"></rect><g class="highcharts-grid highcharts-xaxis-grid "><path fill="none" class="highcharts-grid-line" d="M 98.5 61 L 98.5 256" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 122.5 61 L 122.5 256" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 146.5 61 L 146.5 256" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 171.5 61 L 171.5 256" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 195.5 61 L 195.5 256" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 219.5 61 L 219.5 256" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 243.5 61 L 243.5 256" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 267.5 61 L 267.5 256" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 291.5 61 L 291.5 256" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 315.5 61 L 315.5 256" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 339.5 61 L 339.5 256" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 364.5 61 L 364.5 256" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 388.5 61 L 388.5 256" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 412.5 61 L 412.5 256" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 436.5 61 L 436.5 256" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 74.5 61 L 74.5 256" opacity="1"></path></g><g class="highcharts-grid highcharts-yaxis-grid "><path fill="none" stroke="#e6e6e6" stroke-width="1" class="highcharts-grid-line" d="M 75 256.5 L 437 256.5" opacity="1"></path><path fill="none" stroke="#e6e6e6" stroke-width="1" class="highcharts-grid-line" d="M 75 191.5 L 437 191.5" opacity="1"></path><path fill="none" stroke="#e6e6e6" stroke-width="1" class="highcharts-grid-line" d="M 75 126.5 L 437 126.5" opacity="1"></path><path fill="none" stroke="#e6e6e6" stroke-width="1" class="highcharts-grid-line" d="M 75 60.5 L 437 60.5" opacity="1"></path></g><g class="highcharts-grid highcharts-yaxis-grid "><path fill="none" stroke="#e6e6e6" stroke-width="1" class="highcharts-grid-line" d="M 75 256.5 L 437 256.5" opacity="1"></path><path fill="none" stroke="#e6e6e6" stroke-width="1" class="highcharts-grid-line" d="M 75 191.5 L 437 191.5" opacity="1"></path><path fill="none" stroke="#e6e6e6" stroke-width="1" class="highcharts-grid-line" d="M 75 126.5 L 437 126.5" opacity="1"></path><path fill="none" stroke="#e6e6e6" stroke-width="1" class="highcharts-grid-line" d="M 75 60.5 L 437 60.5" opacity="1"></path></g><rect fill="none" class="highcharts-plot-border" x="75" y="61" width="362" height="195"></rect><g class="highcharts-axis highcharts-xaxis "><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 98.5 256 L 98.5 266" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 122.5 256 L 122.5 266" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 146.5 256 L 146.5 266" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 171.5 256 L 171.5 266" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 195.5 256 L 195.5 266" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 219.5 256 L 219.5 266" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 243.5 256 L 243.5 266" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 267.5 256 L 267.5 266" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 291.5 256 L 291.5 266" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 315.5 256 L 315.5 266" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 339.5 256 L 339.5 266" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 364.5 256 L 364.5 266" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 388.5 256 L 388.5 266" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 412.5 256 L 412.5 266" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 437.5 256 L 437.5 266" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 74.5 256 L 74.5 266" opacity="1"></path><path fill="none" class="highcharts-axis-line" stroke="#ccd6eb" stroke-width="1" d="M 75 256.5 L 437 256.5"></path></g><g class="highcharts-axis highcharts-yaxis "><text x="25.09375" text-anchor="middle" transform="translate(0,0) rotate(270 25.09375 158.5)" class="highcharts-axis-title" style="color:#434348;fill:#434348;" y="158.5">交易金额（人民币）</text><path fill="none" class="highcharts-axis-line" d="M 75 61 L 75 256"></path></g><g class="highcharts-axis highcharts-yaxis "><text x="486.734375" text-anchor="middle" transform="translate(0,0) rotate(90 486.734375 158.5)" class="highcharts-axis-title" style="color:#7cb5ec;fill:#7cb5ec;" y="158.5">成功率（%）</text><path fill="none" class="highcharts-axis-line" d="M 437 61 L 437 256"></path></g><g class="highcharts-series-group"><g class="highcharts-series highcharts-series-0 highcharts-spline-series highcharts-color-undefined " transform="translate(75,61) scale(1 1)" clip-path="url(#highcharts-u2ly181-1)"><path fill="none" d="M 12.066666666667 130.54166666666669 C 12.066666666667 130.54166666666669 26.546666666666802 114.29166666666667 36.2 114.29166666666667 C 45.853333333333204 114.29166666666667 50.6799999999998 120.24999999999999 60.333333333333 120.24999999999999 C 69.9866666666666 120.24999999999999 74.8133333333334 99.66666666666666 84.466666666667 99.66666666666666 C 94.1200000000002 99.66666666666666 98.94666666666679 117.37916666666624 108.6 124.04166666666666 C 118.253333333332 130.70416666666623 123.079999999998 132.97916666666666 132.73333333333 132.97916666666666 C 142.386666666666 132.97916666666666 147.213333333334 128.26666666666733 156.86666666667 124.96249999999999 C 166.520000000002 121.65833333333401 171.346666666668 120.54249999999998 181 116.45833333333333 C 190.653333333332 112.37416666666667 195.479999999998 104.54166666666667 205.13333333333 104.54166666666667 C 214.786666666666 104.54166666666667 219.613333333334 108.51749999999858 229.26666666667 115.375 C 238.92000000000198 122.23249999999857 243.74666666666798 138.82916666666665 253.4 138.82916666666665 C 263.05333333333203 138.82916666666665 267.879999999998 130.57416666666546 277.53333333333 124.8 C 287.186666666666 119.02583333333213 292.013333333334 111.475 301.66666666667 109.95833333333333 C 311.320000000002 108.44166666666666 316.146666666668 108.44166666666666 325.8 108.44166666666666 C 335.453333333332 108.44166666666666 349.93333333333 174.74166666666667 349.93333333333 174.74166666666667" class="highcharts-graph" stroke="#000" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path><path fill="none" d="M 2.0666666666670004 130.54166666666669 L 12.066666666667 130.54166666666669 C 12.066666666667 130.54166666666669 26.546666666666802 114.29166666666667 36.2 114.29166666666667 C 45.853333333333204 114.29166666666667 50.6799999999998 120.24999999999999 60.333333333333 120.24999999999999 C 69.9866666666666 120.24999999999999 74.8133333333334 99.66666666666666 84.466666666667 99.66666666666666 C 94.1200000000002 99.66666666666666 98.94666666666679 117.37916666666624 108.6 124.04166666666666 C 118.253333333332 130.70416666666623 123.079999999998 132.97916666666666 132.73333333333 132.97916666666666 C 142.386666666666 132.97916666666666 147.213333333334 128.26666666666733 156.86666666667 124.96249999999999 C 166.520000000002 121.65833333333401 171.346666666668 120.54249999999998 181 116.45833333333333 C 190.653333333332 112.37416666666667 195.479999999998 104.54166666666667 205.13333333333 104.54166666666667 C 214.786666666666 104.54166666666667 219.613333333334 108.51749999999858 229.26666666667 115.375 C 238.92000000000198 122.23249999999857 243.74666666666798 138.82916666666665 253.4 138.82916666666665 C 263.05333333333203 138.82916666666665 267.879999999998 130.57416666666546 277.53333333333 124.8 C 287.186666666666 119.02583333333213 292.013333333334 111.475 301.66666666667 109.95833333333333 C 311.320000000002 108.44166666666666 316.146666666668 108.44166666666666 325.8 108.44166666666666 C 335.453333333332 108.44166666666666 349.93333333333 174.74166666666667 349.93333333333 174.74166666666667 L 359.93333333333 174.74166666666667" stroke-linejoin="round" visibility="visible" stroke="rgba(192,192,192,0.0001)" stroke-width="22" class="highcharts-tracker"></path></g><g class="highcharts-markers highcharts-series-0 highcharts-spline-series highcharts-color-undefined highcharts-tracker" transform="translate(75,61) scale(1 1)"><path fill="#000" d="M 16 130.54166666666669 A 4 4 0 1 1 15.999998000000167 130.53766666733335 Z" class="highcharts-point"></path><path fill="#000" d="M 40 114.29166666666667 A 4 4 0 1 1 39.99999800000017 114.28766666733334 Z" class="highcharts-point"></path><path fill="#000" d="M 64 120.24999999999999 A 4 4 0 1 1 63.99999800000017 120.24600000066665 Z" class="highcharts-point"></path><path fill="#000" d="M 88 99.66666666666666 A 4 4 0 1 1 87.99999800000016 99.66266666733333 Z" class="highcharts-point"></path><path fill="#000" d="M 112 124.04166666666666 A 4 4 0 1 1 111.99999800000016 124.03766666733333 Z" class="highcharts-point"></path><path fill="#000" d="M 136 132.97916666666666 A 4 4 0 1 1 135.99999800000018 132.97516666733333 Z" class="highcharts-point"></path><path fill="#000" d="M 160 124.96249999999999 A 4 4 0 1 1 159.99999800000018 124.95850000066666 Z" class="highcharts-point"></path><path fill="#000" d="M 185 116.45833333333333 A 4 4 0 1 1 184.99999800000018 116.454333334 Z" class="highcharts-point"></path><path fill="#000" d="M 209 104.54166666666667 A 4 4 0 1 1 208.99999800000018 104.53766666733334 Z" class="highcharts-point"></path><path fill="#000" d="M 233 115.375 A 4 4 0 1 1 232.99999800000018 115.37100000066667 Z" class="highcharts-point"></path><path fill="#000" d="M 257 138.82916666666665 A 4 4 0 1 1 256.9999980000002 138.82516666733332 Z" class="highcharts-point"></path><path fill="#000" d="M 281 124.8 A 4 4 0 1 1 280.9999980000002 124.79600000066667 Z" class="highcharts-point"></path><path fill="#000" d="M 305 109.95833333333333 A 4 4 0 1 1 304.9999980000002 109.954333334 Z" class="highcharts-point"></path><path fill="#000" d="M 329 108.44166666666666 A 4 4 0 1 1 328.9999980000002 108.43766666733333 Z" class="highcharts-point"></path><path fill="#000" d="M 353 174.74166666666667 A 4 4 0 1 1 352.9999980000002 174.73766666733334 Z" class="highcharts-point"></path></g><g class="highcharts-series highcharts-series-1 highcharts-spline-series highcharts-color-undefined " transform="translate(75,61) scale(1 1)" clip-path="url(#highcharts-u2ly181-1)"><path fill="none" d="M 12.066666666667 150.71875 C 12.066666666667 150.71875 26.546666666666802 150.71875 36.2 147.46875 C 45.853333333333204 144.21875 50.6799999999998 126.34374999999986 60.333333333333 118.62500000000001 C 69.9866666666666 110.90624999999986 74.8133333333334 108.87499999999999 84.466666666667 108.87499999999999 C 94.1200000000002 108.87499999999999 98.94666666666679 134.0625 108.6 134.0625 C 118.253333333332 134.0625 123.079999999998 132.92499999999853 132.73333333333 125.9375 C 142.386666666666 118.94999999999855 147.213333333334 107.6562500000018 156.86666666667 99.12500000000003 C 166.520000000002 90.5937500000018 171.346666666668 83.28125 181 83.28125 C 190.653333333332 83.28125 195.479999999998 97.17500000000223 205.13333333333 108.06249999999997 C 214.786666666666 118.95000000000223 219.613333333334 126.34374999999763 229.26666666667 137.71875 C 238.92000000000198 149.0937499999976 243.74666666666798 164.9375 253.4 164.9375 C 263.05333333333203 164.9375 267.879999999998 130.89374999999768 277.53333333333 119.43750000000003 C 287.186666666666 107.98124999999767 292.013333333334 107.65625 301.66666666667 107.65625 C 311.320000000002 107.65625 316.146666666668 111.79999999999997 325.8 116.18749999999997 C 335.453333333332 120.57499999999999 349.93333333333 129.59375000000003 349.93333333333 129.59375000000003" class="highcharts-graph" stroke="#FF0000" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path><path fill="none" d="M 2.0666666666670004 150.71875 L 12.066666666667 150.71875 C 12.066666666667 150.71875 26.546666666666802 150.71875 36.2 147.46875 C 45.853333333333204 144.21875 50.6799999999998 126.34374999999986 60.333333333333 118.62500000000001 C 69.9866666666666 110.90624999999986 74.8133333333334 108.87499999999999 84.466666666667 108.87499999999999 C 94.1200000000002 108.87499999999999 98.94666666666679 134.0625 108.6 134.0625 C 118.253333333332 134.0625 123.079999999998 132.92499999999853 132.73333333333 125.9375 C 142.386666666666 118.94999999999855 147.213333333334 107.6562500000018 156.86666666667 99.12500000000003 C 166.520000000002 90.5937500000018 171.346666666668 83.28125 181 83.28125 C 190.653333333332 83.28125 195.479999999998 97.17500000000223 205.13333333333 108.06249999999997 C 214.786666666666 118.95000000000223 219.613333333334 126.34374999999763 229.26666666667 137.71875 C 238.92000000000198 149.0937499999976 243.74666666666798 164.9375 253.4 164.9375 C 263.05333333333203 164.9375 267.879999999998 130.89374999999768 277.53333333333 119.43750000000003 C 287.186666666666 107.98124999999767 292.013333333334 107.65625 301.66666666667 107.65625 C 311.320000000002 107.65625 316.146666666668 111.79999999999997 325.8 116.18749999999997 C 335.453333333332 120.57499999999999 349.93333333333 129.59375000000003 349.93333333333 129.59375000000003 L 359.93333333333 129.59375000000003" stroke-linejoin="round" visibility="visible" stroke="rgba(192,192,192,0.0001)" stroke-width="22" class="highcharts-tracker"></path></g><g class="highcharts-markers highcharts-series-1 highcharts-spline-series highcharts-color-undefined highcharts-tracker" transform="translate(75,61) scale(1 1)"><path fill="#FF0000" d="M 12 146.71875 L 16 150.71875 12 154.71875 8 150.71875 Z" class="highcharts-point"></path><path fill="#FF0000" d="M 36 143.46875 L 40 147.46875 36 151.46875 32 147.46875 Z" class="highcharts-point"></path><path fill="#FF0000" d="M 60 114.62500000000001 L 64 118.62500000000001 60 122.62500000000001 56 118.62500000000001 Z" class="highcharts-point"></path><path fill="#FF0000" d="M 84 104.87499999999999 L 88 108.87499999999999 84 112.87499999999999 80 108.87499999999999 Z" class="highcharts-point"></path><path fill="#FF0000" d="M 108 130.0625 L 112 134.0625 108 138.0625 104 134.0625 Z" class="highcharts-point"></path><path fill="#FF0000" d="M 132 121.9375 L 136 125.9375 132 129.9375 128 125.9375 Z" class="highcharts-point"></path><path fill="#FF0000" d="M 156 95.12500000000003 L 160 99.12500000000003 156 103.12500000000003 152 99.12500000000003 Z" class="highcharts-point"></path><path fill="#FF0000" d="M 181 79.28125 L 185 83.28125 181 87.28125 177 83.28125 Z" class="highcharts-point"></path><path fill="#FF0000" d="M 205 104.06249999999997 L 209 108.06249999999997 205 112.06249999999997 201 108.06249999999997 Z" class="highcharts-point"></path><path fill="#FF0000" d="M 229 133.71875 L 233 137.71875 229 141.71875 225 137.71875 Z" class="highcharts-point"></path><path fill="#FF0000" d="M 253 160.9375 L 257 164.9375 253 168.9375 249 164.9375 Z" class="highcharts-point"></path><path fill="#FF0000" d="M 277 115.43750000000003 L 281 119.43750000000003 277 123.43750000000003 273 119.43750000000003 Z" class="highcharts-point"></path><path fill="#FF0000" d="M 301 103.65625 L 305 107.65625 301 111.65625 297 107.65625 Z" class="highcharts-point"></path><path fill="#FF0000" d="M 325 112.18749999999997 L 329 116.18749999999997 325 120.18749999999997 321 116.18749999999997 Z" class="highcharts-point"></path><path fill="#FF0000" d="M 349 125.59375000000003 L 353 129.59375000000003 349 133.59375000000003 345 129.59375000000003 Z" class="highcharts-point"></path></g></g><text x="256" text-anchor="middle" class="highcharts-title" style="color:#333333;font-size:18px;fill:#333333;" y="24"><tspan>历史交易分析</tspan></text><text x="256" text-anchor="middle" class="highcharts-subtitle" style="color:#666666;fill:#666666;" y="45"><tspan>2017-06-27至2017-07-11</tspan></text><g class="highcharts-legend" transform="translate(175,309)"><rect fill="#FFF" class="highcharts-legend-box" rx="0" ry="0" stroke="#999999" stroke-width="1" x="0.5" y="0.5" width="161" height="25" visibility="visible"></rect><g><g><g class="highcharts-legend-item highcharts-spline-series highcharts-color-undefined highcharts-series-0" transform="translate(8,3)"><path fill="none" d="M 0 11 L 16 11" class="highcharts-graph" stroke="#000" stroke-width="2"></path><path fill="#000" d="M 12 11 A 4 4 0 1 1 11.999998000000167 10.996000000666664 Z" class="highcharts-point"></path><text x="21" style="color:#333333;font-size:12px;font-weight:bold;cursor:pointer;fill:#333333;" text-anchor="start" y="15"><tspan>交易金额</tspan></text></g><g class="highcharts-legend-item highcharts-spline-series highcharts-color-undefined highcharts-series-1" transform="translate(97,3)"><path fill="none" d="M 0 11 L 16 11" class="highcharts-graph" stroke="#FF0000" stroke-width="2"></path><path fill="#FF0000" d="M 8 7 L 12 11 8 15 4 11 Z" class="highcharts-point"></path><text x="21" y="15" style="color:#333333;font-size:12px;font-weight:bold;cursor:pointer;fill:#333333;" text-anchor="start"><tspan>成功率</tspan></text></g></g></g></g><g class="highcharts-axis-labels highcharts-xaxis-labels "><text x="89.65939153101733" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 89.65939153101733 272)" y="272" opacity="1"><tspan>06-27</tspan></text><text x="113.79272486435067" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 113.79272486435067 272)" y="272" opacity="1"><tspan>06-28</tspan></text><text x="137.926058197684" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 137.926058197684 272)" y="272" opacity="1"><tspan>06-29</tspan></text><text x="162.05939153101735" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 162.05939153101735 272)" y="272" opacity="1"><tspan>06-30</tspan></text><text x="186.19272486435068" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 186.19272486435068 272)" y="272" opacity="1"><tspan>07-01</tspan></text><text x="210.326058197684" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 210.326058197684 272)" y="272" opacity="1"><tspan>07-02</tspan></text><text x="234.45939153101736" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 234.45939153101736 272)" y="272" opacity="1"><tspan>07-03</tspan></text><text x="258.59272486435066" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 258.59272486435066 272)" y="272" opacity="1"><tspan>07-04</tspan></text><text x="282.726058197684" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 282.726058197684 272)" y="272" opacity="1"><tspan>07-05</tspan></text><text x="306.8593915310173" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 306.8593915310173 272)" y="272" opacity="1"><tspan>07-06</tspan></text><text x="330.9927248643507" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 330.9927248643507 272)" y="272" opacity="1"><tspan>07-07</tspan></text><text x="355.12605819768396" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 355.12605819768396 272)" y="272" opacity="1"><tspan>07-08</tspan></text><text x="379.25939153101734" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 379.25939153101734 272)" y="272" opacity="1"><tspan>07-09</tspan></text><text x="403.39272486435067" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 403.39272486435067 272)" y="272" opacity="1"><tspan>07-10</tspan></text><text x="427.526058197684" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 427.526058197684 272)" y="272" opacity="1"><tspan>07-11</tspan></text></g><g class="highcharts-axis-labels highcharts-yaxis-labels "><text x="60" style="color:#434348;cursor:default;font-size:11px;fill:#434348;" text-anchor="end" transform="translate(0,0)" y="261" opacity="1"><tspan>12万</tspan></text><text x="60" style="color:#434348;cursor:default;font-size:11px;fill:#434348;" text-anchor="end" transform="translate(0,0)" y="196" opacity="1"><tspan>24万</tspan></text><text x="60" style="color:#434348;cursor:default;font-size:11px;fill:#434348;" text-anchor="end" transform="translate(0,0)" y="131" opacity="1"><tspan>36万</tspan></text><text x="60" style="color:#434348;cursor:default;font-size:11px;fill:#434348;" text-anchor="end" transform="translate(0,0)" y="66" opacity="1"><tspan>48万</tspan></text></g><g class="highcharts-axis-labels highcharts-yaxis-labels "><text x="452" style="color:#7cb5ec;cursor:default;font-size:11px;fill:#7cb5ec;" text-anchor="start" transform="translate(0,0)" y="261" opacity="1"><tspan>48 %</tspan></text><text x="452" style="color:#7cb5ec;cursor:default;font-size:11px;fill:#7cb5ec;" text-anchor="start" transform="translate(0,0)" y="196" opacity="1"><tspan>64 %</tspan></text><text x="452" style="color:#7cb5ec;cursor:default;font-size:11px;fill:#7cb5ec;" text-anchor="start" transform="translate(0,0)" y="131" opacity="1"><tspan>80 %</tspan></text><text x="452" style="color:#7cb5ec;cursor:default;font-size:11px;fill:#7cb5ec;" text-anchor="start" transform="translate(0,0)" y="66" opacity="1"><tspan>96 %</tspan></text></g></svg></div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-12 col-xs-12">
        <div class="widget">
          <div class="widget-header bordered-bottom bordered-themeprimary">
            <dl class="widget-header-title"><dt>公告信息</dt><dd><a href="">更多&gt;&gt;</a></dd></dl>
          </div>
          <div class="widget-body">
            <dl class="widget-news">
              <dd><span><a href="#">关于red bulls列为违禁产品和域名的通知</a></span><i>20170714</i></dd>
            </dl>
            <dl class="widget-news">
              <dd><span><a href="#">关于商户网站禁止销售Birkenstock等勃……</a></span><i>2017-08-02</i></dd>
            </dl>
            <dl class="widget-news">
              <dd><span><a href="#">亚马逊收款平台重磅上线</a></span><i>2017-08-02</i></dd>
            </dl>
            <dl class="widget-news">
              <dd><span><a href="#">我司客服和接口技术人员上班时间公告</a></span><i>2017-08-02</i></dd>
            </dl>
            <dl class="widget-news">
              <dd><span><a href="#">关于网站禁止销售celine品牌通知</a></span><i>2017-08-02</i></dd>
            </dl>
          </div>
        </div>
        <div class="widget">
          <div class="widget-header bordered-bottom bordered-themeprimary">
            <dl class="widget-header-title"><dt>商户基本信息</dt><dd></dd></dl>
          </div>
          <div class="widget-body">
            <dl class="widget-info">
              <dd><span>商户名称：</span><code ng-bind="registeName" class="ng-binding">钱诚汇</code></dd>
              <dd><span>手续费：</span><code ng-bind="feeRate" class="ng-binding">Visa-5%,Master-6%,JCB-5%</code></dd>
              <dd><span>保证金：</span><code ng-bind="depositRate" class="ng-binding">10%</code></dd>
              <dd><span>结算周期：</span><code ng-bind="settleDay" class="ng-binding">180</code><code>(天)</code></dd>
              <dd><span>单笔限额：</span><code ng-bind="perLimit" class="ng-binding">10000</code><code>(RMB)</code></dd>
              <dd><span>单日限笔：</span><code ng-bind="daySumLimit" class="ng-binding">10000</code></dd>
            </dl>
          </div>
        </div>
        <div class="widget">
          <div class="widget-header bordered-bottom bordered-themeprimary">
            <dl class="widget-header-title"><dt>账户信息</dt><dd></dd></dl>
          </div>
          <div class="widget-body">
            <dl class="widget-info">
              <dt>注意:如下信息关系到您的资金安全,每次登录请商户务必确认</dt>
              <dd><span>联系姓名：</span><code ng-bind="sellPerson" class="ng-binding">钱诚汇</code></dd>
              <dd><span>联系手机：</span><code ng-bind="sellMobile" class="ng-binding">18650930216</code></dd>
              <dd><span>持卡人姓名：</span><code ng-bind="accountName" class="ng-binding">张三</code></dd>
              <dd><span>所属银行：</span><code ng-bind="cardBank" class="ng-binding">中国建设银行福州五一路支行</code></dd>
              <dd><span>银行卡号：</span><code ng-bind="cardNo" class="ng-binding">621700******2687</code></dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div></div>
    <!-- /Page Body -->
  </div>
</template>

<script>
export default {

}
</script>
