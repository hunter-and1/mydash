"use strict";

(function (win, $) {
    /*!
    * NexCode v0.1.2 (https://nexcoding.com)
    * Author : Abdellah Elkadiri  (abdellah.elkadiri.dev@gmail.com)
    * Copyright 2018-2019 
    */
    const _version = 0.12;
    const $dom = {
        window: $(win),
        body: $('body'),

        // Sidebars
        
        
        
        mainLoader: $('#main-loader'),
        mainContainer: $('#main-container'),

        sidebarListPrimary: $('#main-sidebar-primary'),
        sidebarListPrimaryTop: $('#main-sidebar-primary .list-menu-top'),

        sidebarListSecondary: $('#main-sidebar-secondary'),

        btnToggleSidebarSecondary: $('#btn-toggle-sidebar-secondary'),

        //sidebarBrand: $('.main-sidebar .brand-link'),
        //sidebarPanel: $('.main-sidebar .user-panel'),
        //sidebarLinkTree: $('.main-sidebar .nav-item.has-treeview .nav-link'),
        //sidebarControlRight: $('aside.control-sidebar'),
        //sidebarButtonMenu: $('a[data-widget=pushmenu]'),
        //sidebarButtonRightPanel: $('a[data-widget=control-sidebar]')
    };

    const $var = {
        isMobile: navigator.userAgent.match(/iPhone|iPod|Android|IEMobile/ig),
        isIpad: navigator.userAgent.match(/iPad/i),
        isIos7: navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i),
        mobileType: navigator.userAgent.toLowerCase(),
        
    };

    const $osInstance = {
        OverlayScrollbars: OverlayScrollbarsGlobal.OverlayScrollbars
    };
    
    const nexDash = {
        version: function() {
            return _version;
        },
        init: function() {
            this.compatibilityIE();

            this.initSideBar();
            this.initPopover();
            this.initTooltip();
            this.initLoader();
            this.events();

        },
        events: function() {
            /** 
             *  Global start
             * */

            $dom.btnToggleSidebarSecondary.on('click', this.whenClickToggleSidebarSecondary);

            // $dom.sidebarButtonMenu.on('click', this.whenClickPushMeunSidebar);
            // $dom.sidebarButtonRightPanel.on('click', this.whenClickRightPanelSidebar);
            // $dom.body.on(this.$var.config.triggerName.sidebarOpen, this.triggerSidebarOpen);
            // $dom.body.on(this.$var.config.triggerName.sidebarCollapse, this.triggerSidebarCollapse);

            /** 
             *  in Window Triggers
             * */

            $dom.window.on("resize", this.whenResize);
            $dom.window.on("orientationchange", this.whenOrientationChange);
        },
        initLoader: function () {
            setTimeout(() => {
                $dom.mainLoader.remove();
            }, 200);
        },
        initSideBar: function() {
            $osInstance.OverlayScrollbars($dom.sidebarListPrimaryTop.get(0), {overflow: {x: 'hidden'}});
            $osInstance.OverlayScrollbars($dom.sidebarListSecondary.get(0), {overflow: {x: 'hidden'}});
        },
        initPopover:function(){
            var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
            popoverTriggerList.map(function (popoverTriggerEl) {
              return new bootstrap.Popover(popoverTriggerEl)
            });
        },
        initTooltip:function(){
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
            })
        },
        whenClickToggleSidebarSecondary: function() {
            if($dom.btnToggleSidebarSecondary.attr('data-visible') == "true")
            {
                $dom.sidebarListSecondary.animate({
                        left: -1 * ($dom.sidebarListSecondary.outerWidth() + $dom.sidebarListPrimary.outerWidth()) ,
                    }, 300, function() {
                });
                $dom.btnToggleSidebarSecondary.animate({
                    left: ($dom.sidebarListPrimary.outerWidth() - 16),
                    }, 300, function() {
                });

                $dom.mainContainer.animate({
                    paddingLeft: $dom.sidebarListPrimary.outerWidth() ,
                }, 300, function() {

                });

                $dom.btnToggleSidebarSecondary.attr('data-visible',"false");
            }
            else
            {
                $dom.sidebarListSecondary.animate({
                        left: $dom.sidebarListPrimary.outerWidth(),
                    }, 300, function() {
                });
                $dom.btnToggleSidebarSecondary.animate({
                    left: ($dom.sidebarListSecondary.outerWidth() + $dom.sidebarListPrimary.outerWidth() - 16),
                    }, 300, function() {
                });
                $dom.mainContainer.animate({
                    paddingLeft: $dom.sidebarListPrimary.outerWidth() + $dom.sidebarListSecondary.outerWidth() ,
                }, 300, function() {

                });
                //$dom.mainContainer.removeClass('main-container-with-sidebar-primary').addClass('main-container-with-sidebars');

                $dom.btnToggleSidebarSecondary.attr('data-visible',"true");
            }
        },
        //Action
        triggerSidebarOpen: function() {
            $(this).removeClass(nexDash.$var.config.className.sidebarCollapse).addClass(nexDash.$var.config.className.sidebarOpen);
        },
        whenResize: function() {
            nexDash.initSideBar();

        },
        whenOrientationChange: function() {
            var orientation = win.orientation;
            if (orientation != 0) {
                if ($var.isMobile) {
                    $dom.body.addClass("landscape-mobile");
                }
            } else {
                $dom.body.removeClass("landscape-mobile");
            }
        },
        compatibilityIE: function() {
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
    };

    if (!win.nexDash) {
        win.nexDash = nexDash;
        $(function () {
            win.nexDash.init();
        });
    }
})(window, jQuery);