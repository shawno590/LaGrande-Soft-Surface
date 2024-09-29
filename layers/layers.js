var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_bore_pit_20240928180031_1 = new ol.format.GeoJSON();
var features_bore_pit_20240928180031_1 = format_bore_pit_20240928180031_1.readFeatures(json_bore_pit_20240928180031_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bore_pit_20240928180031_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bore_pit_20240928180031_1.addFeatures(features_bore_pit_20240928180031_1);
var lyr_bore_pit_20240928180031_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bore_pit_20240928180031_1, 
                style: style_bore_pit_20240928180031_1,
                popuplayertitle: "bore_pit_2024-09-28-18-00-31",
                interactive: true,
                title: '<img src="styles/legend/bore_pit_20240928180031_1.png" /> bore_pit_2024-09-28-18-00-31'
            });
var format_flowerpot__coil_20240928175840_2 = new ol.format.GeoJSON();
var features_flowerpot__coil_20240928175840_2 = format_flowerpot__coil_20240928175840_2.readFeatures(json_flowerpot__coil_20240928175840_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flowerpot__coil_20240928175840_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flowerpot__coil_20240928175840_2.addFeatures(features_flowerpot__coil_20240928175840_2);
var lyr_flowerpot__coil_20240928175840_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_flowerpot__coil_20240928175840_2, 
                style: style_flowerpot__coil_20240928175840_2,
                popuplayertitle: "flowerpot__coil_2024-09-28-17-58-40",
                interactive: true,
                title: '<img src="styles/legend/flowerpot__coil_20240928175840_2.png" /> flowerpot__coil_2024-09-28-17-58-40'
            });
var format_handhole_20240928175735_3 = new ol.format.GeoJSON();
var features_handhole_20240928175735_3 = format_handhole_20240928175735_3.readFeatures(json_handhole_20240928175735_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_handhole_20240928175735_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_handhole_20240928175735_3.addFeatures(features_handhole_20240928175735_3);
var lyr_handhole_20240928175735_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_handhole_20240928175735_3, 
                style: style_handhole_20240928175735_3,
                popuplayertitle: "handhole_2024-09-28-17-57-35",
                interactive: true,
                title: '<img src="styles/legend/handhole_20240928175735_3.png" /> handhole_2024-09-28-17-57-35'
            });
var format_HUB_20240928175859_4 = new ol.format.GeoJSON();
var features_HUB_20240928175859_4 = format_HUB_20240928175859_4.readFeatures(json_HUB_20240928175859_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HUB_20240928175859_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HUB_20240928175859_4.addFeatures(features_HUB_20240928175859_4);
var lyr_HUB_20240928175859_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HUB_20240928175859_4, 
                style: style_HUB_20240928175859_4,
                popuplayertitle: "HUB_2024-09-28-17-58-59",
                interactive: true,
                title: '<img src="styles/legend/HUB_20240928175859_4.png" /> HUB_2024-09-28-17-58-59'
            });
var format_PED_20240928180003_5 = new ol.format.GeoJSON();
var features_PED_20240928180003_5 = format_PED_20240928180003_5.readFeatures(json_PED_20240928180003_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PED_20240928180003_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PED_20240928180003_5.addFeatures(features_PED_20240928180003_5);
var lyr_PED_20240928180003_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PED_20240928180003_5, 
                style: style_PED_20240928180003_5,
                popuplayertitle: "PED_2024-09-28-18-00-03",
                interactive: true,
                title: '<img src="styles/legend/PED_20240928180003_5.png" /> PED_2024-09-28-18-00-03'
            });
var format_Poles_6 = new ol.format.GeoJSON();
var features_Poles_6 = format_Poles_6.readFeatures(json_Poles_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poles_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poles_6.addFeatures(features_Poles_6);
var lyr_Poles_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poles_6, 
                style: style_Poles_6,
                popuplayertitle: "Poles",
                interactive: true,
                title: '<img src="styles/legend/Poles_6.png" /> Poles'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_bore_pit_20240928180031_1.setVisible(true);lyr_flowerpot__coil_20240928175840_2.setVisible(true);lyr_handhole_20240928175735_3.setVisible(true);lyr_HUB_20240928175859_4.setVisible(true);lyr_PED_20240928180003_5.setVisible(true);lyr_Poles_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_bore_pit_20240928180031_1,lyr_flowerpot__coil_20240928175840_2,lyr_handhole_20240928175735_3,lyr_HUB_20240928175859_4,lyr_PED_20240928180003_5,lyr_Poles_6];
lyr_bore_pit_20240928180031_1.set('fieldAliases', {'name': 'name', 'descripti': 'descripti', 'pit_depth': 'pit_depth', 'notes': 'notes', 'changed': 'changed', 'pictureFo': 'pictureFo', 'pictureNa': 'pictureNa', 'picturePa': 'picturePa', 'created': 'created', 'altitude': 'altitude', 'accuracy': 'accuracy', });
lyr_flowerpot__coil_20240928175840_2.set('fieldAliases', {'name': 'name', 'descripti': 'descripti', 'notes': 'notes', 'changed': 'changed', 'pictureFo': 'pictureFo', 'pictureNa': 'pictureNa', 'picturePa': 'picturePa', 'created': 'created', 'altitude': 'altitude', 'accuracy': 'accuracy', });
lyr_handhole_20240928175735_3.set('fieldAliases', {'name': 'name', 'descripti': 'descripti', 'size': 'size', 'has_gravel': 'has_gravel', 'grounded': 'grounded', 'notes': 'notes', 'changed': 'changed', 'pictureFo': 'pictureFo', 'pictureNa': 'pictureNa', 'picturePa': 'picturePa', 'created': 'created', 'altitude': 'altitude', 'accuracy': 'accuracy', });
lyr_HUB_20240928175859_4.set('fieldAliases', {'name': 'name', 'descripti': 'descripti', 'grounded': 'grounded', 'gravel_ba': 'gravel_ba', 'changed': 'changed', 'pictureFo': 'pictureFo', 'pictureNa': 'pictureNa', 'picturePa': 'picturePa', 'created': 'created', 'altitude': 'altitude', 'accuracy': 'accuracy', });
lyr_PED_20240928180003_5.set('fieldAliases', {'name': 'name', 'descripti': 'descripti', 'labels': 'labels', 'size': 'size', 'changed': 'changed', 'pictureFo': 'pictureFo', 'pictureNa': 'pictureNa', 'picturePa': 'picturePa', 'created': 'created', 'altitude': 'altitude', 'accuracy': 'accuracy', });
lyr_Poles_6.set('fieldAliases', {'name': 'name', 'descripti': 'descripti', 'pole_owner': 'pole_owner', 'pole_heig': 'pole_heig', 'attachmen': 'attachmen', 'attachmen_1': 'attachmen_1', 'attachmen_2': 'attachmen_2', 'attachmen_3': 'attachmen_3', 'attachmen_4': 'attachmen_4', 'attachmen_5': 'attachmen_5', 'attachmen_6': 'attachmen_6', 'attachmen_7': 'attachmen_7', 'attachmen_8': 'attachmen_8', 'changed': 'changed', 'pictureFo': 'pictureFo', 'pictureNa': 'pictureNa', 'picturePa': 'picturePa', 'created': 'created', 'altitude': 'altitude', 'accuracy': 'accuracy', });
lyr_bore_pit_20240928180031_1.set('fieldImages', {'name': '', 'descripti': '', 'pit_depth': '', 'notes': '', 'changed': '', 'pictureFo': '', 'pictureNa': '', 'picturePa': '', 'created': '', 'altitude': '', 'accuracy': '', });
lyr_flowerpot__coil_20240928175840_2.set('fieldImages', {'name': '', 'descripti': '', 'notes': '', 'changed': '', 'pictureFo': '', 'pictureNa': '', 'picturePa': '', 'created': '', 'altitude': '', 'accuracy': '', });
lyr_handhole_20240928175735_3.set('fieldImages', {'name': '', 'descripti': '', 'size': '', 'has_gravel': '', 'grounded': '', 'notes': '', 'changed': '', 'pictureFo': '', 'pictureNa': '', 'picturePa': '', 'created': '', 'altitude': '', 'accuracy': '', });
lyr_HUB_20240928175859_4.set('fieldImages', {'name': 'TextEdit', 'descripti': 'TextEdit', 'grounded': 'TextEdit', 'gravel_ba': 'TextEdit', 'changed': 'TextEdit', 'pictureFo': 'TextEdit', 'pictureNa': 'TextEdit', 'picturePa': 'TextEdit', 'created': 'TextEdit', 'altitude': 'TextEdit', 'accuracy': 'TextEdit', });
lyr_PED_20240928180003_5.set('fieldImages', {'name': 'TextEdit', 'descripti': 'TextEdit', 'labels': 'TextEdit', 'size': 'TextEdit', 'changed': 'TextEdit', 'pictureFo': 'TextEdit', 'pictureNa': 'TextEdit', 'picturePa': 'TextEdit', 'created': 'TextEdit', 'altitude': 'TextEdit', 'accuracy': 'TextEdit', });
lyr_Poles_6.set('fieldImages', {'name': '', 'descripti': '', 'pole_owner': '', 'pole_heig': '', 'attachmen': '', 'attachmen_1': '', 'attachmen_2': '', 'attachmen_3': '', 'attachmen_4': '', 'attachmen_5': '', 'attachmen_6': '', 'attachmen_7': '', 'attachmen_8': '', 'changed': '', 'pictureFo': '', 'pictureNa': '', 'picturePa': '', 'created': '', 'altitude': '', 'accuracy': '', });
lyr_bore_pit_20240928180031_1.set('fieldLabels', {'name': 'no label', 'descripti': 'no label', 'pit_depth': 'no label', 'notes': 'no label', 'changed': 'no label', 'pictureFo': 'no label', 'pictureNa': 'no label', 'picturePa': 'no label', 'created': 'no label', 'altitude': 'no label', 'accuracy': 'no label', });
lyr_flowerpot__coil_20240928175840_2.set('fieldLabels', {'name': 'no label', 'descripti': 'no label', 'notes': 'no label', 'changed': 'no label', 'pictureFo': 'no label', 'pictureNa': 'no label', 'picturePa': 'no label', 'created': 'no label', 'altitude': 'no label', 'accuracy': 'no label', });
lyr_handhole_20240928175735_3.set('fieldLabels', {'name': 'no label', 'descripti': 'no label', 'size': 'no label', 'has_gravel': 'no label', 'grounded': 'no label', 'notes': 'no label', 'changed': 'no label', 'pictureFo': 'no label', 'pictureNa': 'no label', 'picturePa': 'no label', 'created': 'no label', 'altitude': 'no label', 'accuracy': 'no label', });
lyr_HUB_20240928175859_4.set('fieldLabels', {'name': 'no label', 'descripti': 'no label', 'grounded': 'no label', 'gravel_ba': 'no label', 'changed': 'no label', 'pictureFo': 'no label', 'pictureNa': 'no label', 'picturePa': 'no label', 'created': 'no label', 'altitude': 'no label', 'accuracy': 'no label', });
lyr_PED_20240928180003_5.set('fieldLabels', {'name': 'no label', 'descripti': 'no label', 'labels': 'no label', 'size': 'no label', 'changed': 'no label', 'pictureFo': 'no label', 'pictureNa': 'no label', 'picturePa': 'no label', 'created': 'no label', 'altitude': 'no label', 'accuracy': 'no label', });
lyr_Poles_6.set('fieldLabels', {'name': 'inline label - always visible', 'descripti': 'no label', 'pole_owner': 'inline label - always visible', 'pole_heig': 'no label', 'attachmen': 'no label', 'attachmen_1': 'no label', 'attachmen_2': 'no label', 'attachmen_3': 'no label', 'attachmen_4': 'no label', 'attachmen_5': 'no label', 'attachmen_6': 'no label', 'attachmen_7': 'no label', 'attachmen_8': 'no label', 'changed': 'no label', 'pictureFo': 'no label', 'pictureNa': 'no label', 'picturePa': 'no label', 'created': 'no label', 'altitude': 'no label', 'accuracy': 'no label', });
lyr_Poles_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});