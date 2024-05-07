sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zproject1',
            componentId: 'zstudent_cdsList',
            contextPath: '/zstudent_cds'
        },
        CustomPageDefinitions
    );
});