"use strict";

(function (win, $) {
  /*!
  * NexCode v0.1.2 (https://nexcoding.com)
  * Author : Abdellah Elkadiri  (abdellah.elkadiri.dev@gmail.com)
  * Copyright 2018-2019 
  */
  var _version = 0.12,
      showLogs = true;
  var $dom = {
    window: $(win),
    body: $('body'),
    // Sidebar Left
    sidebarSide: $('.main-sidebar > .sidebar'),
    sidebarBrand: $('.main-sidebar .brand-link'),
    sidebarPanel: $('.main-sidebar .user-panel'),
    sidebarLinkTree: $('.main-sidebar .nav-item.has-treeview .nav-link'),
    sidebarControlRight: $('aside.control-sidebar'),
    sidebarButtonMenu: $('a[data-widget=pushmenu]'),
    sidebarButtonRightPanel: $('a[data-widget=control-sidebar]')
  };

  function consoleLog(text) {
    if (showLogs) console.log(text);
  }

  var nexDash = {
    $var: {
      isMobile: navigator.userAgent.match(/iPhone|iPod|Android|IEMobile/ig),
      isIpad: navigator.userAgent.match(/iPad/i),
      isIos7: navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i),
      mobileType: navigator.userAgent.toLowerCase(),
      config: {
        selectorName: {
          bodyWrapper: '.wrapper',
          treeviewNav: '.nav-treeview',
          sidebarOverlay: '#sidebar-overlay'
        },
        className: {
          treeviewMenuOpen: 'menu-open',
          sidebarOpen: 'sidebar-open',
          sidebarCollapse: 'sidebar-collapse'
        },
        triggerName: {
          sidebarOpen: 'sidebar:open',
          sidebarCollapse: 'sidebar:collapse'
        },
        getHeights: function getHeights() {
          return {
            window: $dom.window.height(),
            sidebar: {
              brand: $dom.sidebarBrand.outerHeight(),
              side: $dom.sidebarSide.height(),
              upanel: $dom.sidebarPanel.outerHeight() + 16 // add padding

            }
          };
        }
      }
    },
    version: function version() {
      consoleLog('version');
      return _version;
    },
    init: function init() {
      consoleLog('init');
      this.compatibilityIE();
      this.initSideBar();
      this.initSideBarOverlay();
      this.events();
    },
    events: function events() {
      consoleLog('events');
      /** 
       *  Global start
       * */

      $dom.sidebarLinkTree.on('click', this.whenClickLinkTreeView);
      $dom.sidebarButtonMenu.on('click', this.whenClickPushMeunSidebar);
      $dom.sidebarButtonRightPanel.on('click', this.whenClickRightPanelSidebar);
      $dom.body.on(this.$var.config.triggerName.sidebarOpen, this.triggerSidebarOpen);
      $dom.body.on(this.$var.config.triggerName.sidebarCollapse, this.triggerSidebarCollapse);
      /** 
       *  in Window Triggers
       * */

      $dom.window.on("resize", this.whenResize);
      $dom.window.on("orientationchange", this.whenOrientationChange);
    },
    initSideBar: function initSideBar() {
      consoleLog('initSideBar');
      $dom.sidebarSide.scrollbar();
      $dom.sidebarSide.parent().css('max-height', this.$var.config.getHeights().window - this.$var.config.getHeights().sidebar.brand - this.$var.config.getHeights().sidebar.upanel);
      $dom.sidebarControlRight.find('> div').scrollbar();
      $dom.sidebarControlRight.css('top', this.$var.config.getHeights().sidebar.brand);
      $dom.sidebarControlRight.find('> div').css('max-height', this.$var.config.getHeights().window - this.$var.config.getHeights().sidebar.brand);
    },
    initSideBarOverlay: function initSideBarOverlay() {
      consoleLog('initSideBarOverlay');

      if (!$(nexDash.$var.config.selectorName.sidebarOverlay).length) {
        var overlay = $('<div />', {
          id: 'sidebar-overlay'
        });
        overlay.on('click', function () {
          $($dom.body).trigger(nexDash.$var.config.triggerName.sidebarCollapse);
        });
        $(nexDash.$var.config.selectorName.bodyWrapper).append(overlay);
      }
    },
    //Action
    triggerSidebarOpen: function triggerSidebarOpen() {
      consoleLog('triggerSidebarOpen');
      $(this).removeClass(nexDash.$var.config.className.sidebarCollapse).addClass(nexDash.$var.config.className.sidebarOpen);
    },
    triggerSidebarCollapse: function triggerSidebarCollapse() {
      consoleLog('triggerSidebarCollapse');
      $(this).removeClass(nexDash.$var.config.className.sidebarOpen).addClass(nexDash.$var.config.className.sidebarCollapse);
    },
    //Event handler
    whenClickRightPanelSidebar: function whenClickRightPanelSidebar() {
      consoleLog('whenClickRightPanelSidebar');
      $dom.body.toggleClass('control-sidebar-slide-open');
    },
    whenClickPushMeunSidebar: function whenClickPushMeunSidebar(event) {
      consoleLog('whenClickPushMeunSidebar');

      if ($dom.body.hasClass(nexDash.$var.config.className.sidebarCollapse)) {
        //$dom.body.removeClass(nexDash.$var.config.className.sidebarCollapse).addClass(nexDash.$var.config.className.sidebarOpen);
        $($dom.body).trigger(nexDash.$var.config.triggerName.sidebarOpen); //var e = $.Event('shown');
        //$(this).trigger(e);
      } else {
        $($dom.body).trigger(nexDash.$var.config.triggerName.sidebarCollapse); //$dom.body.removeClass(nexDash.$var.config.className.sidebarOpen).addClass(nexDash.$var.config.className.sidebarCollapse);
        //var e = $.Event('collapsed');
        //$(this).trigger(e);
      }
    },
    whenClickLinkTreeView: function whenClickLinkTreeView() {
      consoleLog('whenClickLinkTreeView');

      if (!$(this).parent().hasClass(nexDash.$var.config.className.treeviewMenuOpen)) {
        $(this).siblings(nexDash.$var.config.selectorName.treeviewNav).slideDown(250, function () {
          $(this).parent().addClass(nexDash.$var.config.className.treeviewMenuOpen);
        });
      } else {
        $(this).siblings(nexDash.$var.config.selectorName.treeviewNav).slideUp(250, function () {
          $(this).parent().removeClass(nexDash.$var.config.className.treeviewMenuOpen);
        });
      }
    },
    whenResize: function whenResize() {
      consoleLog('whenResize');
      nexDash.initSideBar();
    },
    whenOrientationChange: function whenOrientationChange() {
      consoleLog('whenOrientationChange');
      var orientation = win.orientation;

      if (orientation != 0) {
        if ($vars.isMobile) {
          $dom.body.addClass("landscape-mobile");
        }
      } else {
        $dom.body.removeClass("landscape-mobile");
      }
    },
    compatibilityIE: function compatibilityIE() {
      function IE() {
        var iev = 0;
        var ieold = /MSIE (\d+\.\d+);/.test(navigator.userAgent);
        var trident = !!navigator.userAgent.match(/Trident\/7.0/);
        var rv = navigator.userAgent.indexOf("rv:11.0");
        if (ieold) iev = new Number(RegExp.$1);
        if (navigator.appVersion.indexOf("MSIE 10") != -1) iev = 10;
        if (trident && rv != -1) iev = 11;
        return iev;
      }

      if (IE() == 11) {
        $dom.body.addClass("ie ie11");
      }
    }
  }; //$(function () {
  //nexDash.init();
  //});

  if (!win.nexDash) {
    win.nexDash = nexDash;
    $(function () {
      win.nexDash.init();
    });
  }
})(window, jQuery);