sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zproject1/test/integration/FirstJourney',
		'zproject1/test/integration/pages/zstudent_cdsList',
		'zproject1/test/integration/pages/zstudent_cdsObjectPage'
    ],
    function(JourneyRunner, opaJourney, zstudent_cdsList, zstudent_cdsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zproject1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThezstudent_cdsList: zstudent_cdsList,
					onThezstudent_cdsObjectPage: zstudent_cdsObjectPage
                }
            },
            opaJourney.run
        );
    }
);