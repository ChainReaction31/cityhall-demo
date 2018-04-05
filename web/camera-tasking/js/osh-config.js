function init() {

    // var hostName = "botts-geo.com";
    // var hostName = "localhost";
    var hostName = "207.111.167.133";
    var portNum = 8282;

    var startTime = "now";
    var endTime = "2100-01-01T20:18:05.451Z";
    var sync = false;
    var dataStreamTimeOut = 4000;
    var useFFmpegWorkers = true;

    // menu ids
    var treeMenuId = "tree-menu-";
    var mapMenuId = "map-menu-";
    var menuGroupId = "allmenus";

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
    //----- DATA SOURCES CONTROLLER -----------------------------------------//
    var dataReceiverController = new OSH.DataReceiver.DataReceiverController({
        replayFactor: 1
    });
    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
    //------ MAP VIEW ----------------------------------------------//
    window.CESIUM_BASE_URL = 'vendor/all-in-one';
    var mapView = new OSH.UI.CesiumView("main-container", []);
    mapView.first = false; // disable zooming on first marker
    mapView.viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-86.586, 34.728, 1200.0)
    });
    mapView.viewer.geocoder = false;

    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
    //----- SENSOR ENTITIES ----------------------------------------//
    var treeItems = [];
    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
    //----- GPS TASKING SOURCES ---------------------------------------------------------------------------------------------//
    // var tasker01 = addGPSTaskSource("taskSrc1", "GPS Task Source 001", "GPS Target", "urn:osh:sim:gps01-sos", "GPS_Target.glb");
    // var tasker02 = addGPSTaskSource("taskSrc2", "GPS Task Source 002", "GPS Green", "urn:osh:sim:gps02-sos", "GPS_Green.glb");
    // var tasker03 = addGPSTaskSource("taskSrc3", "GPS Task Source 003", "GPS Red", "urn:osh:sim:gps03-sos", "GPS_Red.glb");
    // var tasker03 = addAndroidPhone("android01", "Mike's Nexus", "urn:android:device:89845ed469b7edc7-sos", null,0);

    ////// GeoHSV Demo  /////////////////////////////////////////////////////////////////////////////////////////////////
    var tasker01 = addAndroidPhone("mikeNexus5", "Officer Botts 2", "urn:android:device:89845ed469b7edc7-sos", null, 0);
    var tasker02 = addAndroidPhone("ianHtc10", "HTC 10 Cam", "urn:android:device:1aea89f8ebbd4b09-sos", null,0);
    var tasker03 = addAndroidPhone("ianM8", "HTC M8 Cam", "urn:android:device:bb26ea9abeb8d2c0-sos", null, 0);
    var tasker04 = addAndroidPhone("bluphone", "BLU Cam", "urn:android:device:c92f9ee08ad5a209-sos", null, 0);
    var tasker05 = addLRF("LRF", "LRF Target", "urn:lasertech:trupulse360:target");
    // var tasker06 = addGPSTaskSource('Sim GPS 1', 'Sim GPS 1', 'Sim GPS 1', 'urn:osh:sensor:simgps:ccd8d444', null);
    var tasker06 = addSimGPSTarget("Sim GPS 1", "Sim GPS 1","urn:osh:sensor:simgps:ccd8d444");
    //var tasker05 = addLRF("LRF", "LRF Target", "urn:lasertech:trupulse360:bb26ea9abeb8d2c0");
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
    //----- PTZ PRESETS ---------------------------------------------------------------------------------------------------------------------//
    // var dahua01Presets = ["Home","Pos1","Pos1Zoom1","Pos2","Pos2Zoom1","Pos2Zoom2","Pos3","Pos3Zoom1","Pos4","Pos4Zoom1","Pos5","Pos5Zoom 1"];
    var dahua01Presets = ["Home", "VBC_Arena", "Japanese_Bridge", "Art_Museum", "Parking_Deck", "Underpass", "PNC_Bank", "I-565_JCT", "Rocket"];
    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
    //----- TASKERS ----------------------------------------------------------------------------------//
    var dahua01Taskers = [tasker01.dataSources[1], tasker02.dataSources[1],tasker03.dataSources[1], tasker04.dataSources[1],
        tasker05.dataSources[0], tasker06.dataSources[0]];
    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
    //----- PTZ CAMS ------------------------------------------------------------------------------------------------------------------------------------//
    // addDahuaCam(entityID, entityName, offeringID, spsID, headingOffset, dahuaPresets, dahuaTaskers, rotDir)

    //addDahuaCam("dahua01", "Dahua PTZ 01", "urn:cityhall:dahua:01-sos", "urn:dahua:cam:WT1J033A7PAN00005", 24.0, dahua01Presets, dahua01Taskers, -1.0);
    // addDahuaCam("dahua02", "Dahua PTZ 02", "urn:office:dahua:02-sos", "urn:dahua:cam:1G0215CGAK00046", 24.0, dahua02Presets, dahua02Taskers, -1.0);
    addDahuaCam("dahua02", "Dahua PTZ 02", "urn:osh:cityhall", "urn:dahua:cam:WT1J033A7PAN00005", 24.0, dahua01Presets, dahua01Taskers, -1.0);
    // addAxisCam("axis01", "Axis PTZ 01", "urn:office:axis:01-sos", "urn:axis:cam:00408CB95A55", 0.0, axis01Presets, axis01Taskers)
    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
    //----- ANDROID PHONES ---------------------------------------------------------------------------------------//
    // addAndroidPhone(entityID, entityName, offeringID, flirOfferingID, headingOffset)

    // var tasker03 = addAndroidPhone("android01", "Mike's Nexus", "urn:android:device:89845ed469b7edc7-sos", null,0);
    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//


    // Setup Websocket to SOS-T Location Task Source
    // connectToWebSocket(hostname, uid, name)
    connectToWebSocket(hostName,portNum, "urn:osh:client:locationsource", "Location Task Source");

    // add tree and map context menus
    var menuItems = [];

    //--------------------------------------------------------------//
    //------------------------- Tree View  -------------------------//
    //--------------------------------------------------------------//
    var entityTreeDialog = new OSH.UI.DialogView(document.body.id, {
        css: "tree-dialog",
        name: "Entities",
        show: true,
        draggable: true,
        dockable: false,
        closeable: true
    });

    var entityTreeView = new OSH.UI.EntityTreeView(entityTreeDialog.popContentDiv.id, treeItems,
        {
            css: "tree-container"
        }
    );

    dataReceiverController.connectAll();

    function addGPSTaskSource(entityID, entityName, taskerName, offeringID, modelName) {
        console.log("Adding Task Source '" + entityName + "'");

        var gpsSource = new OSH.DataReceiver.LatLonAlt(taskerName, {
            protocol: "ws",
            service: "SOS",
            endpointUrl: hostName + ":" + portNum + "/sensorhub/sos",
            offeringID: offeringID,
            observedProperty: "http://www.opengis.net/def/property/OGC/0/SensorLocation",
            startTime: startTime,
            endTime: endTime,
            replaySpeed: 1.0,
            syncMasterTime: true
        });

        var entity = {
            id: entityID,
            name: entityName,
            dataSources: [gpsSource]
        };
        dataReceiverController.addEntity(entity);

        // add item to tree
        treeItems.push({
            entity: entity,
            path: "Task Sources",
            treeIcon: "images/gpsSrc24.png",
            contextMenuId: treeMenuId + entity.id
        })

        // add marker to map
        mapView.addViewItem({
            name: entityName,
            entityId: entity.id,
            styler: new OSH.UI.Styler.PointMarker({
                locationFunc: {
                    dataSourceIds: [gpsSource.getId()],
                    handler: function (rec) {
                        return {
                            x: rec.lon,
                            y: rec.lat,
                            z: rec.alt
                        };
                    }
                },
                icon: "./models/" + modelName,
                label: entityName
            }),
            contextMenuId: mapMenuId + entityID
        });
        return entity;
    }

    function addDahuaCam(entityID, entityName, offeringID, spsID, headingOffset, dahuaPresets, dahuaTaskers, rotDir) {
        console.log("Adding Dahua Cam '" + entityName + "'");

        // OSH connect
        var videoDataSource = new OSH.DataReceiver.VideoH264("H264 video", {
            protocol: "ws",
            service: "SOS",
            endpointUrl: hostName + ":" + portNum + "/sensorhub/sos",
            offeringID: offeringID,
            observedProperty: "http://sensorml.com/ont/swe/property/VideoFrame",
            startTime: startTime,
            endTime: endTime,
            syncMasterTime: sync,
            bufferingTime: 0
        });

        var videoDialog = new OSH.UI.MultiDialogView(document.body.id, {
            draggable: true,
            css: "dialog-multidialog",
            name: entityName,
            show: true,
            dockable: true,
            closeable: true,
            keepRatio: true,
            connectionIds: [videoDataSource.id]
        });

        var videoView = new OSH.UI.FFMPEGView(videoDialog.popContentDiv.id, {
            dataSourceId: videoDataSource.id,
            css: "video",
            cssSelected: "video-selected",
            name: "Dahua Video",
            useWorker: useFFmpegWorkers,
            width: 800,
            height: 600
        });

        var ptzTasking = new OSH.DataSender.PtzTasking("video-tasking", {
            protocol: "http",
            service: "SPS",
            version: "2.0",
            endpointUrl: hostName + ":" + portNum + "/sensorhub/sps",
            offeringID: spsID
        });

        var taskingView = new OSH.UI.PtzTaskingView(videoDialog.popContentDiv.id, {
            dataSenderId: ptzTasking.id,
            ptIncrement: 1,
            zIncrement: 0.05,
            presets: dahuaPresets,
            taskers: dahuaTaskers,
            panRotFactor: rotDir
        });

        var locationData = new OSH.DataReceiver.LatLonAlt("Location", {
            protocol: "ws",
            service: "SOS",
            endpointUrl: hostName + ":" + portNum + "/sensorhub/sos",
            offeringID: offeringID,
            observedProperty: "http://www.opengis.net/def/property/OGC/0/SensorLocation",
            startTime: startTime,
            endTime: endTime,
            replaySpeed: "1",
            syncMasterTime: sync,
            bufferingTime: 0,
            timeOut: dataStreamTimeOut
        });

        var headingData = new OSH.DataReceiver.EulerOrientation("Orientation", {
            protocol: "ws",
            service: "SOS",
            endpointUrl: hostName + ":" + portNum + "/sensorhub/sos",
            offeringID: offeringID,
            observedProperty: "http://sensorml.com/ont/swe/property/Pan",
            startTime: startTime,
            endTime: endTime,
            replaySpeed: "1",
            syncMasterTime: sync,
            bufferingTime: 0,
            timeOut: dataStreamTimeOut
        });

        var entity = {
            id: entityID,
            name: entityName,
            dataSources: [videoDataSource, locationData, headingData]
        };
        dataReceiverController.addEntity(entity);

        // add item to tree
        treeItems.push({
            entity: entity,
            path: "PTZ Cams",
            treeIcon: "images/cameralook.png",
            contextMenuId: treeMenuId + entity.id
        })

        // add marker to map
        mapView.addViewItem({
            name: entityName,
            entityId: entity.id,
            styler: new OSH.UI.Styler.PointMarker({
                locationFunc: {
                    dataSourceIds: [locationData.getId()],
                    handler: function (rec) {
                        return {
                            x: rec.lon,
                            y: rec.lat,
                            z: rec.alt
                        };
                    }
                },
                orientationFunc: {
                    dataSourceIds: [headingData.getId()],
                    handler: function (rec, timeStamp, options) {
                        return {
                            heading: headingOffset + (rotDir * rec.heading)
                            // heading: rec.heading + headingOffset
                        }
                    }
                },
                icon: "./models/PTZwithConeSmooth.glb",
                // icon : "./images/LookCone.png",
                label: entityName
            }),
            contextMenuId: mapMenuId + entityID
        });

        // add tree and map context menus
        var menuItems = [{
            name: "Show Video",
            viewId: videoDialog.getId(),
            css: "fa fa-video-camera",
            action: "show"
        }];

        // attach the video view to the dialog
        videoView.attachTo(videoDialog.popContentDiv.id);

        // append tasking view to dialog
        videoDialog.appendView(taskingView.divId);

        var treeMenu = new OSH.UI.ContextMenu.StackMenu({
            id: treeMenuId + entityID,
            groupId: menuGroupId,
            items: menuItems
        });

        return entity;
    }

    function addAndroidPhone(entityID, entityName, offeringID, flirOfferingID, headingOffset) {
        console.log("Adding Android  Phone " + entityName);

        // create data sources
        var videoData = new OSH.DataReceiver.VideoMjpeg("Video", {
            protocol: "ws",
            service: "SOS",
            endpointUrl: hostName + ":" + portNum + "/sensorhub/sos",
            // endpointUrl: "botts-geo.com" + ":"+ portNum + "/sensorhub/sos",
            offeringID: offeringID,
            observedProperty: "http://sensorml.com/ont/swe/property/VideoFrame",
            startTime: startTime,
            endTime: endTime,
            replaySpeed: "1",
            syncMasterTime: sync,
            bufferingTime: 500,
            timeOut: dataStreamTimeOut,
            connect: false
        });

        var locationData = new OSH.DataReceiver.LatLonAlt(entityName, {
            protocol: "ws",
            service: "SOS",
            endpointUrl: hostName + ":" + portNum + "/sensorhub/sos",
            // endpointUrl: "botts-geo.com" + ":" + portNum + "/sensorhub/sos",
            offeringID: offeringID,
            observedProperty: "http://sensorml.com/ont/swe/property/Location",
            startTime: startTime,
            endTime: endTime,
            replaySpeed: "1",
            syncMasterTime: sync,
            bufferingTime: 500,
            timeOut: dataStreamTimeOut
        });

        var attitudeData = new OSH.DataReceiver.OrientationQuaternion("Orientation", {
            protocol: "ws",
            service: "SOS",
            endpointUrl: hostName + ":" + portNum + "/sensorhub/sos",
            // endpointUrl: "botts-geo.com" + ":8181/sensorhub/sos",
            offeringID: offeringID,
            observedProperty: "http://sensorml.com/ont/swe/property/OrientationQuaternion",
            startTime: startTime,
            endTime: endTime,
            replaySpeed: "1",
            syncMasterTime: sync,
            bufferingTime: 500,
            timeOut: dataStreamTimeOut
        });

        var flirVideo = null;
        if (typeof(flirOfferingID) != "undefined" && flirOfferingID != null) {
            flirVideo = new OSH.DataReceiver.VideoMjpeg("FLIR Video", {
                protocol: "ws",
                service: "SOS",
                endpointUrl: hostName + ":" + portNum + "/sensorhub/sos",
                // endpointUrl: "botts-geo.com" + ":8181/sensorhub/sos",
                offeringID: flirOfferingID,
                observedProperty: "http://sensorml.com/ont/swe/property/VideoFrame",
                startTime: startTime,
                endTime: endTime,
                replaySpeed: "1",
                syncMasterTime: sync,
                bufferingTime: 500,
                timeOut: dataStreamTimeOut
            });
        }

        // create entity
        var entity = {
            id: entityID,
            name: entityName,
            dataSources: [videoData, locationData, attitudeData]
        };

        if (flirVideo != null)
            entity.dataSources.push(flirVideo);

        dataReceiverController.addEntity(entity);

        // add item to tree
        treeItems.push({
            entity: entity,
            path: "Body Cams",
            treeIcon: "images/cameralook.png",
            contextMenuId: treeMenuId + entity.id
        })

        // add marker to map
        //leafletMapView.addViewItem({
        mapView.addViewItem({
            name: entityName,
            entityId: entity.id,
            styler: new OSH.UI.Styler.PointMarker({
                locationFunc: {
                    dataSourceIds: [locationData.getId()],
                    handler: function (rec) {
                        return {
                            x: rec.lon,
                            y: rec.lat,
                            z: rec.alt
                        };
                    }
                },
                orientationFunc: {
                    dataSourceIds: [attitudeData.getId()],
                    handler: function (rec) {
                        return {
                            heading: rec.heading + headingOffset
                        };
                    }
                },
                icon: "./models/PTZwithConeSmooth.glb",
                label: entityName
                // iconFunc : {
                //     dataSourceIds: [locationData.getId()],
                //     handler : function(rec,timeStamp,options) {
                //         if(options.selected) {
                //             return 'images/cameralook-selected.png'
                //         } else {
                //             return 'images/cameralook.png';
                //         }
                //     }
                // }
            }),
            contextMenuId: mapMenuId + entityID
        });

        // video view
        var videoDialog = new OSH.UI.DialogView(document.body.id, {
            draggable: true,
            css: "video-dialog",
            name: entityName,
            show: false,
            dockable: true,
            closeable: true,
            canDisconnect: true,
            swapId: "main-container",
            connectionIds: [videoData.getId()]
        });

        var videoView = new OSH.UI.MjpegView(videoDialog.popContentDiv.id, {
            dataSourceId: videoData.getId(),
            entityId : entity.id,
            css: "video",
            cssSelected: "video-selected",
            keepRatio: true,
            width: 400,
            height: 300
        });

        /*var videoView = new OSH.UI.FFMPEGView(videoDialog.popContentDiv.id, {
            dataSourceId: videoData.getId(),
            entityId: entity.id,
            css: "video",
            cssSelected: "video-selected",
            useWorker: useFFmpegWorkers,
            width: 400,
            height: 300
        });*/

        var flirVideoDialog = null;
        if (flirVideo != null) {
            flirVideoDialog = new OSH.UI.DialogView(document.body.id, {
                draggable: true,
                css: "video-dialog",
                name: entityName + " - FLIR Cam",
                show: false,
                dockable: true,
                closeable: true,
                canDisconnect: true,
                swapId: "main-container",
                connectionIds: [flirVideo.getId()]
            });

            var flirVideoView = new OSH.UI.MjpegView(flirVideoDialog.popContentDiv.id, {
                dataSourceId: flirVideo.getId(),
                entityId: entity.id,
                css: "video",
                cssSelected: "video-selected",
                width: 320,
                height: 240
            });
        }

        // add tree and map context menus
        var menuItems = [];
        menuItems.push({
            name: "Show Video",
            viewId: videoDialog.getId(),
            css: "fa fa-video-camera",
            action: "show"
        });

        if (flirVideoDialog != null) {
            menuItems.push({
                name: "Show FLIR Video",
                viewId: flirVideoDialog.getId(),
                css: "fa fa-video-camera",
                action: "show"
            });
        }

        // var markerMenu = new OSH.UI.ContextMenu.CircularMenu({id:mapMenuId+entityID, groupId: menuGroupId, items: menuItems});
        var treeMenu = new OSH.UI.ContextMenu.StackMenu({
            id: treeMenuId + entityID,
            groupId: menuGroupId,
            items: menuItems
        });

        return entity;
    }

    function addLRF(entityID, entityName, offeringID) {
        console.log("Adding LRF " + entityName);

        // create data sources
        var locationData = new OSH.DataReceiver.LatLonAlt(entityName, {
            protocol: "ws",
            service: "SOS",
            endpointUrl: hostName + ":" + portNum + "/sensorhub/sos",
            // endpointUrl: "botts-geo.com" + ":8181/sensorhub/sos",
            offeringID: offeringID,
            observedProperty: "http://sensorml.com/ont/swe/property/TargetLocation",
            startTime: startTime,
            endTime: endTime,
            replaySpeed: "1",
            syncMasterTime: sync,
            bufferingTime: 500,
            timeOut: dataStreamTimeOut
        });

        // create entity
        var entity = {
            id: entityID,
            name: entityName,
            dataSources: [locationData]
        };

        dataReceiverController.addEntity(entity);

        // add item to tree
        treeItems.push({
            entity: entity,
            path: "LRF",
            treeIcon: "images/gpsSrc24.png",
            contextMenuId: treeMenuId + entity.id
        })

        // add marker to map
        //leafletMapView.addViewItem({
        mapView.addViewItem({
            name: entityName,
            entityId: entity.id,
            styler: new OSH.UI.Styler.PointMarker({
                locationFunc: {
                    dataSourceIds: [locationData.getId()],
                    handler: function (rec) {
                        return {
                            x: rec.lon,
                            y: rec.lat,
                            z: rec.alt
                        };
                    }
                },
                // icon: "images/gpsSrc24.png",
                icon: "models/GPS_Target.glb",
                label: entityName
            })
        });

        return entity;
    }

    function addSimGPSTarget(entityID, entityName, offeringID) {
        // create Data Sources
        var locationData = new OSH.DataReceiver.LatLonAlt(entityName, {
            protocol: "ws",
            service: "SOS",
            endpointUrl: hostName + ":" + portNum + "/sensorhub/sos",
            offeringID: offeringID,
            observedProperty: "http://www.opengis.net/def/property/OGC/0/SensorLocation",
            startTime: startTime,
            endTime: endTime,
            replaySpeed: 1.0,
            syncMasterTime: sync
        });

        // create entity
        var entity = {
            id: entityID,
            name: entityName,
            dataSources: [locationData]
        };

        dataReceiverController.addEntity(entity);

        // Add To Tree
        treeItems.push({
            entity: entity,
            path: "GPS Targets",
            treeIcon: "images/blue_key.png",
            contextMenuId: treeMenuId + entity.id
        });

        // add marker to map
        mapView.addViewItem({
            name: entityName,
            entityId: entity.id,
            styler: new OSH.UI.Styler.PointMarker({
                locationFunc: {
                    dataSourceIds: [locationData.getId()],
                    handler: function (rec) {
                        return {
                            x: rec.lon,
                            y: rec.lat,
                            z: rec.alt
                        };
                    }
                },
                // icon: "images/blue_key.png",
                icon: "models/GPS_Blue.glb",
                label: entityName
            }),
            contextMenuId: mapMenuId + entityID
        });

        return entity;
    }
}
