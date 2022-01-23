'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">lethean-workstation documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-9d74c02b56b97b23ac015b6a314851f38eb695dbe3158e3c1f10cea685928c7d3e63ab911c242521f3a1e68c7f70e0669248f306c69079a5df45164f917ad965"' : 'data-target="#xs-components-links-module-AppModule-9d74c02b56b97b23ac015b6a314851f38eb695dbe3158e3c1f10cea685928c7d3e63ab911c242521f3a1e68c7f70e0669248f306c69079a5df45164f917ad965"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9d74c02b56b97b23ac015b6a314851f38eb695dbe3158e3c1f10cea685928c7d3e63ab911c242521f3a1e68c7f70e0669248f306c69079a5df45164f917ad965"' :
                                            'id="xs-components-links-module-AppModule-9d74c02b56b97b23ac015b6a314851f38eb695dbe3158e3c1f10cea685928c7d3e63ab911c242521f3a1e68c7f70e0669248f306c69079a5df45164f917ad965"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppServerModule.html" data-type="entity-link" >AppServerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppServerModule-98f400c85f2564f8e6e2fe35d2d7e8424b0839ca4be874f672eb566c5a6c3b38980195e5a9fed53f4a2ad2f8f8bce1fbb79ee4690250cf6db30bd793372cdcfe"' : 'data-target="#xs-components-links-module-AppServerModule-98f400c85f2564f8e6e2fe35d2d7e8424b0839ca4be874f672eb566c5a6c3b38980195e5a9fed53f4a2ad2f8f8bce1fbb79ee4690250cf6db30bd793372cdcfe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppServerModule-98f400c85f2564f8e6e2fe35d2d7e8424b0839ca4be874f672eb566c5a6c3b38980195e5a9fed53f4a2ad2f8f8bce1fbb79ee4690250cf6db30bd793372cdcfe"' :
                                            'id="xs-components-links-module-AppServerModule-98f400c85f2564f8e6e2fe35d2d7e8424b0839ca4be874f672eb566c5a6c3b38980195e5a9fed53f4a2ad2f8f8bce1fbb79ee4690250cf6db30bd793372cdcfe"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-cc94f7697ea636fbab32937794ea16853541788a9f8bbe29b3609ee4fb4539d641223d3d61710b833fd6f097d05c98a6c27222ab604521aa515c25464c2539cd"' : 'data-target="#xs-components-links-module-AuthModule-cc94f7697ea636fbab32937794ea16853541788a9f8bbe29b3609ee4fb4539d641223d3d61710b833fd6f097d05c98a6c27222ab604521aa515c25464c2539cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-cc94f7697ea636fbab32937794ea16853541788a9f8bbe29b3609ee4fb4539d641223d3d61710b833fd6f097d05c98a6c27222ab604521aa515c25464c2539cd"' :
                                            'id="xs-components-links-module-AuthModule-cc94f7697ea636fbab32937794ea16853541788a9f8bbe29b3609ee4fb4539d641223d3d61710b833fd6f097d05c98a6c27222ab604521aa515c25464c2539cd"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlockchainModule.html" data-type="entity-link" >BlockchainModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlockchainModule-0a65319aac8d2bedbe658c8a162a028343f7c75201e7c4080ba3d2962c63c5933829b0782d3e6b3f9e951fadab2c9cd7e8112df348499c90971fd08176251964"' : 'data-target="#xs-components-links-module-BlockchainModule-0a65319aac8d2bedbe658c8a162a028343f7c75201e7c4080ba3d2962c63c5933829b0782d3e6b3f9e951fadab2c9cd7e8112df348499c90971fd08176251964"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlockchainModule-0a65319aac8d2bedbe658c8a162a028343f7c75201e7c4080ba3d2962c63c5933829b0782d3e6b3f9e951fadab2c9cd7e8112df348499c90971fd08176251964"' :
                                            'id="xs-components-links-module-BlockchainModule-0a65319aac8d2bedbe658c8a162a028343f7c75201e7c4080ba3d2962c63c5933829b0782d3e6b3f9e951fadab2c9cd7e8112df348499c90971fd08176251964"' }>
                                            <li class="link">
                                                <a href="components/BlockchainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlockchainComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlockchainRoutingModule.html" data-type="entity-link" >BlockchainRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChartModule.html" data-type="entity-link" >ChartModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ChartModule-e2316919c4ee6b733704b74a34a6d2332942ed59435c7319c15bb2262dc02004f0bf1abfaf2a4106969aabc7e334e59036c64575bde627254cea1e7247288d8e"' : 'data-target="#xs-directives-links-module-ChartModule-e2316919c4ee6b733704b74a34a6d2332942ed59435c7319c15bb2262dc02004f0bf1abfaf2a4106969aabc7e334e59036c64575bde627254cea1e7247288d8e"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ChartModule-e2316919c4ee6b733704b74a34a6d2332942ed59435c7319c15bb2262dc02004f0bf1abfaf2a4106969aabc7e334e59036c64575bde627254cea1e7247288d8e"' :
                                        'id="xs-directives-links-module-ChartModule-e2316919c4ee6b733704b74a34a6d2332942ed59435c7319c15bb2262dc02004f0bf1abfaf2a4106969aabc7e334e59036c64575bde627254cea1e7247288d8e"' }>
                                        <li class="link">
                                            <a href="directives/ChartDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ChartModule-e2316919c4ee6b733704b74a34a6d2332942ed59435c7319c15bb2262dc02004f0bf1abfaf2a4106969aabc7e334e59036c64575bde627254cea1e7247288d8e"' : 'data-target="#xs-injectables-links-module-ChartModule-e2316919c4ee6b733704b74a34a6d2332942ed59435c7319c15bb2262dc02004f0bf1abfaf2a4106969aabc7e334e59036c64575bde627254cea1e7247288d8e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ChartModule-e2316919c4ee6b733704b74a34a6d2332942ed59435c7319c15bb2262dc02004f0bf1abfaf2a4106969aabc7e334e59036c64575bde627254cea1e7247288d8e"' :
                                        'id="xs-injectables-links-module-ChartModule-e2316919c4ee6b733704b74a34a6d2332942ed59435c7319c15bb2262dc02004f0bf1abfaf2a4106969aabc7e334e59036c64575bde627254cea1e7247288d8e"' }>
                                        <li class="link">
                                            <a href="injectables/ChartService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConsoleModule.html" data-type="entity-link" >ConsoleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConsoleModule-bb65c7f779db0c37e9d101b3fb2e2ab8233514a4822259bb8e3126611f4b6467e89fbbae760fe846ecc01f200c1720e21befdd6a64e036b5742768a0debb4bf2"' : 'data-target="#xs-components-links-module-ConsoleModule-bb65c7f779db0c37e9d101b3fb2e2ab8233514a4822259bb8e3126611f4b6467e89fbbae760fe846ecc01f200c1720e21befdd6a64e036b5742768a0debb4bf2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConsoleModule-bb65c7f779db0c37e9d101b3fb2e2ab8233514a4822259bb8e3126611f4b6467e89fbbae760fe846ecc01f200c1720e21befdd6a64e036b5742768a0debb4bf2"' :
                                            'id="xs-components-links-module-ConsoleModule-bb65c7f779db0c37e9d101b3fb2e2ab8233514a4822259bb8e3126611f4b6467e89fbbae760fe846ecc01f200c1720e21befdd6a64e036b5742768a0debb4bf2"' }>
                                            <li class="link">
                                                <a href="components/ConsoleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConsoleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataModule.html" data-type="entity-link" >DataModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LogsModule.html" data-type="entity-link" >LogsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LogsModule-5d21f88d60d3eb636b7293877c7a010a550d251c988c72adb32ab9e2aca446ab49b3d24c0d83bc5b68f701a6c6bd23cf0e78fd1f8c7cfd395e67eda2b07428d6"' : 'data-target="#xs-components-links-module-LogsModule-5d21f88d60d3eb636b7293877c7a010a550d251c988c72adb32ab9e2aca446ab49b3d24c0d83bc5b68f701a6c6bd23cf0e78fd1f8c7cfd395e67eda2b07428d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LogsModule-5d21f88d60d3eb636b7293877c7a010a550d251c988c72adb32ab9e2aca446ab49b3d24c0d83bc5b68f701a6c6bd23cf0e78fd1f8c7cfd395e67eda2b07428d6"' :
                                            'id="xs-components-links-module-LogsModule-5d21f88d60d3eb636b7293877c7a010a550d251c988c72adb32ab9e2aca446ab49b3d24c0d83bc5b68f701a6c6bd23cf0e78fd1f8c7cfd395e67eda2b07428d6"' }>
                                            <li class="link">
                                                <a href="components/LogsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PipesModule.html" data-type="entity-link" >PipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PipesModule-ed57741209e8cec83e77a42421bb627b1bbf122b3201a19969a7a3fe6677d2033b05befba9508a3d2428e4f5b3c9c940effce78d9a52efa3165e482ec7508739"' : 'data-target="#xs-pipes-links-module-PipesModule-ed57741209e8cec83e77a42421bb627b1bbf122b3201a19969a7a3fe6677d2033b05befba9508a3d2428e4f5b3c9c940effce78d9a52efa3165e482ec7508739"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-ed57741209e8cec83e77a42421bb627b1bbf122b3201a19969a7a3fe6677d2033b05befba9508a3d2428e4f5b3c9c940effce78d9a52efa3165e482ec7508739"' :
                                            'id="xs-pipes-links-module-PipesModule-ed57741209e8cec83e77a42421bb627b1bbf122b3201a19969a7a3fe6677d2033b05befba9508a3d2428e4f5b3c9c940effce78d9a52efa3165e482ec7508739"' }>
                                            <li class="link">
                                                <a href="pipes/EffortPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EffortPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/EscapeHtmlPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EscapeHtmlPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/HashLinkPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HashLinkPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/HashRatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HashRatePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/RemoveTrailingZerosPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemoveTrailingZerosPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ShruggiePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShruggiePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TimeAgoPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TimeAgoPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ToCoinPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToCoinPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PostModule-0560fd9441b019eefb4d8dfc9f794a6bfa9e4efbcb47d76f208115dad0e4e094526db7bf37c101bb49fffeb902e8dab1a00fcc57ffbf51ab2a0e82b1b9d6190b"' : 'data-target="#xs-components-links-module-PostModule-0560fd9441b019eefb4d8dfc9f794a6bfa9e4efbcb47d76f208115dad0e4e094526db7bf37c101bb49fffeb902e8dab1a00fcc57ffbf51ab2a0e82b1b9d6190b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PostModule-0560fd9441b019eefb4d8dfc9f794a6bfa9e4efbcb47d76f208115dad0e4e094526db7bf37c101bb49fffeb902e8dab1a00fcc57ffbf51ab2a0e82b1b9d6190b"' :
                                            'id="xs-components-links-module-PostModule-0560fd9441b019eefb4d8dfc9f794a6bfa9e4efbcb47d76f208115dad0e4e094526db7bf37c101bb49fffeb902e8dab1a00fcc57ffbf51ab2a0e82b1b9d6190b"' }>
                                            <li class="link">
                                                <a href="components/PostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostRoutingModule.html" data-type="entity-link" >PostRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RootModule.html" data-type="entity-link" >RootModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RootModule-5f605ca888291896382ecd9c19f885c4e0d9003139865dd9e1547bea86ebfd6c074f744da3ccb0d265af7e0619524cf2a5d6822f8702bb3c0b80c9add4776efe"' : 'data-target="#xs-components-links-module-RootModule-5f605ca888291896382ecd9c19f885c4e0d9003139865dd9e1547bea86ebfd6c074f744da3ccb0d265af7e0619524cf2a5d6822f8702bb3c0b80c9add4776efe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RootModule-5f605ca888291896382ecd9c19f885c4e0d9003139865dd9e1547bea86ebfd6c074f744da3ccb0d265af7e0619524cf2a5d6822f8702bb3c0b80c9add4776efe"' :
                                            'id="xs-components-links-module-RootModule-5f605ca888291896382ecd9c19f885c4e0d9003139865dd9e1547bea86ebfd6c074f744da3ccb0d265af7e0619524cf2a5d6822f8702bb3c0b80c9add4776efe"' }>
                                            <li class="link">
                                                <a href="components/RootComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RootComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RootRoutingModule.html" data-type="entity-link" >RootRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link" >SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsModule-a7318366188b36a9890b00f5eb7cc05a450d179df830807924bd82c2a8d034d752b71ce08abe18c8d9b94583f821073bf86b2847622ef4a5805edf818d4d035b"' : 'data-target="#xs-components-links-module-SettingsModule-a7318366188b36a9890b00f5eb7cc05a450d179df830807924bd82c2a8d034d752b71ce08abe18c8d9b94583f821073bf86b2847622ef4a5805edf818d4d035b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-a7318366188b36a9890b00f5eb7cc05a450d179df830807924bd82c2a8d034d752b71ce08abe18c8d9b94583f821073bf86b2847622ef4a5805edf818d4d035b"' :
                                            'id="xs-components-links-module-SettingsModule-a7318366188b36a9890b00f5eb7cc05a450d179df830807924bd82c2a8d034d752b71ce08abe18c8d9b94583f821073bf86b2847622ef4a5805edf818d4d035b"' }>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsRoutingModule.html" data-type="entity-link" >SettingsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StatusModule.html" data-type="entity-link" >StatusModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StatusModule-62054be6efd4a21abb8f7fc8726eb26c40b4a2556c5edfbac90644c76fb9295e78eed5058c81e3829b970fc3d9999c6526d3deafab3fcd483ed20e923c2b872e"' : 'data-target="#xs-components-links-module-StatusModule-62054be6efd4a21abb8f7fc8726eb26c40b4a2556c5edfbac90644c76fb9295e78eed5058c81e3829b970fc3d9999c6526d3deafab3fcd483ed20e923c2b872e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StatusModule-62054be6efd4a21abb8f7fc8726eb26c40b4a2556c5edfbac90644c76fb9295e78eed5058c81e3829b970fc3d9999c6526d3deafab3fcd483ed20e923c2b872e"' :
                                            'id="xs-components-links-module-StatusModule-62054be6efd4a21abb8f7fc8726eb26c40b4a2556c5edfbac90644c76fb9295e78eed5058c81e3829b970fc3d9999c6526d3deafab3fcd483ed20e923c2b872e"' }>
                                            <li class="link">
                                                <a href="components/NoDaemonRunningDialog.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoDaemonRunningDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatusComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TranslateModule.html" data-type="entity-link" >TranslateModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-54f11b95468b5065c75b60bfa4ad43edf40e6a42f847f70495cfd8a51e44e7c03d438e565f2232cdc5cb31e5c501f04e116f4a18a92756dd9297c698554c4871"' : 'data-target="#xs-components-links-module-UserModule-54f11b95468b5065c75b60bfa4ad43edf40e6a42f847f70495cfd8a51e44e7c03d438e565f2232cdc5cb31e5c501f04e116f4a18a92756dd9297c698554c4871"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-54f11b95468b5065c75b60bfa4ad43edf40e6a42f847f70495cfd8a51e44e7c03d438e565f2232cdc5cb31e5c501f04e116f4a18a92756dd9297c698554c4871"' :
                                            'id="xs-components-links-module-UserModule-54f11b95468b5065c75b60bfa4ad43edf40e6a42f847f70495cfd8a51e44e7c03d438e565f2232cdc5cb31e5c501f04e116f4a18a92756dd9297c698554c4871"' }>
                                            <li class="link">
                                                <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VpnModule.html" data-type="entity-link" >VpnModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VpnModule-4537fbfaab51ae57e9307e370fef25b802ac91a2c15ac4ec7d556d943827fa255e414ef2abf1c49ef6da055cfe8caf33f07b8a6c08867f632efdd11516623630"' : 'data-target="#xs-components-links-module-VpnModule-4537fbfaab51ae57e9307e370fef25b802ac91a2c15ac4ec7d556d943827fa255e414ef2abf1c49ef6da055cfe8caf33f07b8a6c08867f632efdd11516623630"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VpnModule-4537fbfaab51ae57e9307e370fef25b802ac91a2c15ac4ec7d556d943827fa255e414ef2abf1c49ef6da055cfe8caf33f07b8a6c08867f632efdd11516623630"' :
                                            'id="xs-components-links-module-VpnModule-4537fbfaab51ae57e9307e370fef25b802ac91a2c15ac4ec7d556d943827fa255e414ef2abf1c49ef6da055cfe8caf33f07b8a6c08867f632efdd11516623630"' }>
                                            <li class="link">
                                                <a href="components/VpnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VpnComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VpnRoutingModule.html" data-type="entity-link" >VpnRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WalletModule.html" data-type="entity-link" >WalletModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WalletModule-ba7540928d3ddbb4d30bc8cfe1cd1e370f5468435d8a15be5cf91de1ba2df7b19f68d164ab70c638b459dcef33aab5fe1e3083a22d225741b51ab45117de286c"' : 'data-target="#xs-components-links-module-WalletModule-ba7540928d3ddbb4d30bc8cfe1cd1e370f5468435d8a15be5cf91de1ba2df7b19f68d164ab70c638b459dcef33aab5fe1e3083a22d225741b51ab45117de286c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WalletModule-ba7540928d3ddbb4d30bc8cfe1cd1e370f5468435d8a15be5cf91de1ba2df7b19f68d164ab70c638b459dcef33aab5fe1e3083a22d225741b51ab45117de286c"' :
                                            'id="xs-components-links-module-WalletModule-ba7540928d3ddbb4d30bc8cfe1cd1e370f5468435d8a15be5cf91de1ba2df7b19f68d164ab70c638b459dcef33aab5fe1e3083a22d225741b51ab45117de286c"' }>
                                            <li class="link">
                                                <a href="components/AddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OpenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OpenComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RestoreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RestoreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TransactionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WalletComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WalletComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WalletRoutingModule.html" data-type="entity-link" >WalletRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/OpenComponent.html" data-type="entity-link" >OpenComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfileComponent.html" data-type="entity-link" >ProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SettingsComponent-1.html" data-type="entity-link" >SettingsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TransactionsComponent.html" data-type="entity-link" >TransactionsComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Atomic.html" data-type="entity-link" >Atomic</a>
                            </li>
                            <li class="link">
                                <a href="classes/LTHN.html" data-type="entity-link" >LTHN</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginatorOptions.html" data-type="entity-link" >PaginatorOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginatorOptionsInterface.html" data-type="entity-link" >PaginatorOptionsInterface</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletState.html" data-type="entity-link" >WalletState</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BaseChartConfigService.html" data-type="entity-link" >BaseChartConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlockchainService.html" data-type="entity-link" >BlockchainService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChartsEffects.html" data-type="entity-link" >ChartsEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CryptService.html" data-type="entity-link" >CryptService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Effects.html" data-type="entity-link" >Effects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Effects-1.html" data-type="entity-link" >Effects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileSystemService.html" data-type="entity-link" >FileSystemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileSystemWebService.html" data-type="entity-link" >FileSystemWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NetworkHashrateChart.html" data-type="entity-link" >NetworkHashrateChart</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SettingsEffects.html" data-type="entity-link" >SettingsEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WalletEffects.html" data-type="entity-link" >WalletEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WalletRpcService.html" data-type="entity-link" >WalletRpcService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WalletService.html" data-type="entity-link" >WalletService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WebsocketService.html" data-type="entity-link" >WebsocketService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WebStorageService.html" data-type="entity-link" >WebStorageService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AddAddressBook.html" data-type="entity-link" >AddAddressBook</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Address.html" data-type="entity-link" >Address</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link" >AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Balance.html" data-type="entity-link" >Balance</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BlockHeader.html" data-type="entity-link" >BlockHeader</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChainGetInfo.html" data-type="entity-link" >ChainGetInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartConfigInterface.html" data-type="entity-link" >ChartConfigInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartDifficulty.html" data-type="entity-link" >ChartDifficulty</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartsState.html" data-type="entity-link" >ChartsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateWallet.html" data-type="entity-link" >CreateWallet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Destination.html" data-type="entity-link" >Destination</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileSystemInterface.html" data-type="entity-link" >FileSystemInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetAddressBookOut.html" data-type="entity-link" >GetAddressBookOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetBulkPaymentsIn.html" data-type="entity-link" >GetBulkPaymentsIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetBulkPaymentsOut.html" data-type="entity-link" >GetBulkPaymentsOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetPaymentsIn.html" data-type="entity-link" >GetPaymentsIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetPaymentsOut.html" data-type="entity-link" >GetPaymentsOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetTransfersIn.html" data-type="entity-link" >GetTransfersIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetTransfersOut.html" data-type="entity-link" >GetTransfersOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Height.html" data-type="entity-link" >Height</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IncomingTransfersIn.html" data-type="entity-link" >IncomingTransfersIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IncomingTransfersOut.html" data-type="entity-link" >IncomingTransfersOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IntegratedAddress.html" data-type="entity-link" >IntegratedAddress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LogEntry.html" data-type="entity-link" >LogEntry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LogsState.html" data-type="entity-link" >LogsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MakeIntegratedAddressIn.html" data-type="entity-link" >MakeIntegratedAddressIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MakeUriIn.html" data-type="entity-link" >MakeUriIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OpenWallet.html" data-type="entity-link" >OpenWallet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ParseUri.html" data-type="entity-link" >ParseUri</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Payment.html" data-type="entity-link" >Payment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PluginDefinition.html" data-type="entity-link" >PluginDefinition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Plugins.html" data-type="entity-link" >Plugins</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProfileState.html" data-type="entity-link" >ProfileState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryKeyIn.html" data-type="entity-link" >QueryKeyIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryKeyOut.html" data-type="entity-link" >QueryKeyOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RestoreWallet.html" data-type="entity-link" >RestoreWallet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SettingsState.html" data-type="entity-link" >SettingsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SplitIntegratedAddressOut.html" data-type="entity-link" >SplitIntegratedAddressOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StoreOut.html" data-type="entity-link" >StoreOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SweepAllIn.html" data-type="entity-link" >SweepAllIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SweepAllOut.html" data-type="entity-link" >SweepAllOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SweepDustOut.html" data-type="entity-link" >SweepDustOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Task.html" data-type="entity-link" >Task</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Transactions.html" data-type="entity-link" >Transactions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Transfer.html" data-type="entity-link" >Transfer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TransferIn.html" data-type="entity-link" >TransferIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TransferOut.html" data-type="entity-link" >TransferOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TransferSplitIn.html" data-type="entity-link" >TransferSplitIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TransferSplitOut.html" data-type="entity-link" >TransferSplitOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Uri.html" data-type="entity-link" >Uri</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserMeta.html" data-type="entity-link" >UserMeta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserOptions.html" data-type="entity-link" >UserOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UsersState.html" data-type="entity-link" >UsersState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserState.html" data-type="entity-link" >UserState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WalletsState.html" data-type="entity-link" >WalletsState</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/EffortPipe.html" data-type="entity-link" >EffortPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/EscapeHtmlPipe.html" data-type="entity-link" >EscapeHtmlPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/HashLinkPipe.html" data-type="entity-link" >HashLinkPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/HashRatePipe.html" data-type="entity-link" >HashRatePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/RemoveTrailingZerosPipe.html" data-type="entity-link" >RemoveTrailingZerosPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/ShruggiePipe.html" data-type="entity-link" >ShruggiePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/TimeAgoPipe.html" data-type="entity-link" >TimeAgoPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/ToCoinPipe.html" data-type="entity-link" >ToCoinPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});