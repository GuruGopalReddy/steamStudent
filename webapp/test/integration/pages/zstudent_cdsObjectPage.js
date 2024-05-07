sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zproject1',
            componentId: 'zstudent_cdsObjectPage',
            contextPath: '/zstudent_cds'
        },
        CustomPageDefinitions
    );
});