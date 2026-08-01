var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="">Map data &copy;2026 <a href="https://google.com">Google</a>, Maxar Technologies</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_VanZandtCounty_1 = new ol.format.GeoJSON();
var features_VanZandtCounty_1 = format_VanZandtCounty_1.readFeatures(json_VanZandtCounty_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VanZandtCounty_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VanZandtCounty_1.addFeatures(features_VanZandtCounty_1);
var lyr_VanZandtCounty_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VanZandtCounty_1, 
                style: style_VanZandtCounty_1,
                popuplayertitle: 'VanZandtCounty',
                interactive: false,
                title: '<img src="styles/legend/VanZandtCounty_1.png" /> VanZandtCounty'
            });
var format_VZC_ISD_2 = new ol.format.GeoJSON();
var features_VZC_ISD_2 = format_VZC_ISD_2.readFeatures(json_VZC_ISD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_ISD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_ISD_2.addFeatures(features_VZC_ISD_2);
var lyr_VZC_ISD_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_ISD_2, 
                style: style_VZC_ISD_2,
                popuplayertitle: 'VZC_ISD',
                interactive: true,
    title: 'VZC_ISD<br />\
    <img src="styles/legend/VZC_ISD_2_0.png" /> Athens ISD<br />\
    <img src="styles/legend/VZC_ISD_2_1.png" /> Brownsboro ISD<br />\
    <img src="styles/legend/VZC_ISD_2_2.png" /> Canton ISD<br />\
    <img src="styles/legend/VZC_ISD_2_3.png" /> Edgewood ISD<br />\
    <img src="styles/legend/VZC_ISD_2_4.png" /> Fruitvale ISD<br />\
    <img src="styles/legend/VZC_ISD_2_5.png" /> Grand Saline ISD<br />\
    <img src="styles/legend/VZC_ISD_2_6.png" /> Lindale ISD<br />\
    <img src="styles/legend/VZC_ISD_2_7.png" /> Mabank ISD<br />\
    <img src="styles/legend/VZC_ISD_2_8.png" /> Martins Mill ISD<br />\
    <img src="styles/legend/VZC_ISD_2_9.png" /> Van ISD<br />\
    <img src="styles/legend/VZC_ISD_2_10.png" /> Wills Point ISD<br />\
    <img src="styles/legend/VZC_ISD_2_11.png" /> Eustace ISD<br />\
    <img src="styles/legend/VZC_ISD_2_12.png" /> Other<br />' });
var format_VZC_Precincts_3 = new ol.format.GeoJSON();
var features_VZC_Precincts_3 = format_VZC_Precincts_3.readFeatures(json_VZC_Precincts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_Precincts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_Precincts_3.addFeatures(features_VZC_Precincts_3);
var lyr_VZC_Precincts_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_Precincts_3, 
                style: style_VZC_Precincts_3,
                popuplayertitle: 'VZC_Precincts',
                interactive: true,
    title: 'VZC_Precincts<br />\
    <img src="styles/legend/VZC_Precincts_3_0.png" /> 1A<br />\
    <img src="styles/legend/VZC_Precincts_3_1.png" /> 1B<br />\
    <img src="styles/legend/VZC_Precincts_3_2.png" /> 1C<br />\
    <img src="styles/legend/VZC_Precincts_3_3.png" /> 1D<br />\
    <img src="styles/legend/VZC_Precincts_3_4.png" /> 1E<br />\
    <img src="styles/legend/VZC_Precincts_3_5.png" /> 2A<br />\
    <img src="styles/legend/VZC_Precincts_3_6.png" /> 2B<br />\
    <img src="styles/legend/VZC_Precincts_3_7.png" /> 2C<br />\
    <img src="styles/legend/VZC_Precincts_3_8.png" /> 2D<br />\
    <img src="styles/legend/VZC_Precincts_3_9.png" /> 3A<br />\
    <img src="styles/legend/VZC_Precincts_3_10.png" /> 3B<br />\
    <img src="styles/legend/VZC_Precincts_3_11.png" /> 3C<br />\
    <img src="styles/legend/VZC_Precincts_3_12.png" /> 3D<br />\
    <img src="styles/legend/VZC_Precincts_3_13.png" /> 4A<br />\
    <img src="styles/legend/VZC_Precincts_3_14.png" /> 4B<br />\
    <img src="styles/legend/VZC_Precincts_3_15.png" /> 4C<br />\
    <img src="styles/legend/VZC_Precincts_3_16.png" /> 4D<br />\
    <img src="styles/legend/VZC_Precincts_3_17.png" /> 4E<br />' });
var format_VZC_ESD3_4 = new ol.format.GeoJSON();
var features_VZC_ESD3_4 = format_VZC_ESD3_4.readFeatures(json_VZC_ESD3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_ESD3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_ESD3_4.addFeatures(features_VZC_ESD3_4);
var lyr_VZC_ESD3_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_ESD3_4, 
                style: style_VZC_ESD3_4,
                popuplayertitle: 'VZC_ESD3',
                interactive: false,
                title: '<img src="styles/legend/VZC_ESD3_4.png" /> VZC_ESD3'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_VanZandtCounty_1.setVisible(true);lyr_VZC_ISD_2.setVisible(false);lyr_VZC_Precincts_3.setVisible(true);lyr_VZC_ESD3_4.setVisible(false);
var layersList = [lyr_GoogleMaps_0,lyr_VanZandtCounty_1,lyr_VZC_ISD_2,lyr_VZC_Precincts_3,lyr_VZC_ESD3_4];
lyr_VanZandtCounty_1.set('fieldAliases', {'CMPTRL_CNT': 'CMPTRL_CNT', 'DPS_CNTY_N': 'DPS_CNTY_N', 'FIPS_ST_CN': 'FIPS_ST_CN', 'TXDOT_CNTY': 'TXDOT_CNTY', 'TXDOT_DIST': 'TXDOT_DIST', 'CNTY_NM': 'CNTY_NM', 'GID': 'GID', });
lyr_VZC_ISD_2.set('fieldAliases', {'GEOID20': 'GEOID20', 'NAME20': 'NAME20', 'SDLEA': 'SDLEA', 'NAME': 'NAME', 'NAME2': 'NAME2', 'DISTRICT_N': 'DISTRICT_N', 'DISTRICT': 'DISTRICT', 'DISTRICT_C': 'DISTRICT_C', 'NCES_DISTR': 'NCES_DISTR', 'COLOR': 'COLOR', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'Web Site': 'Web Site', });
lyr_VZC_Precincts_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CNTY': 'CNTY', 'COLOR': 'COLOR', 'PREC': 'Voting Precinct', 'PCTKEY': 'PCTKEY', 'cntykey': 'cntykey', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'LOC': 'Voting Location', 'LINK': 'Address', });
lyr_VZC_ESD3_4.set('fieldAliases', {'Zone': 'Zone', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_VanZandtCounty_1.set('fieldImages', {'CMPTRL_CNT': 'TextEdit', 'DPS_CNTY_N': 'TextEdit', 'FIPS_ST_CN': 'TextEdit', 'TXDOT_CNTY': 'TextEdit', 'TXDOT_DIST': 'TextEdit', 'CNTY_NM': 'TextEdit', 'GID': 'TextEdit', });
lyr_VZC_ISD_2.set('fieldImages', {'GEOID20': 'TextEdit', 'NAME20': 'TextEdit', 'SDLEA': 'TextEdit', 'NAME': 'TextEdit', 'NAME2': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DISTRICT': 'TextEdit', 'DISTRICT_C': 'TextEdit', 'NCES_DISTR': 'TextEdit', 'COLOR': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_len': 'TextEdit', 'Web Site': '', });
lyr_VZC_Precincts_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'CNTY': 'TextEdit', 'COLOR': 'TextEdit', 'PREC': 'TextEdit', 'PCTKEY': 'TextEdit', 'cntykey': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_len': 'TextEdit', 'LOC': 'TextEdit', 'LINK': 'TextEdit', });
lyr_VZC_ESD3_4.set('fieldImages', {'Zone': '', 'Shape_STAr': '', 'Shape_STLe': '', });
lyr_VanZandtCounty_1.set('fieldLabels', {'CMPTRL_CNT': 'hidden field', 'DPS_CNTY_N': 'hidden field', 'FIPS_ST_CN': 'hidden field', 'TXDOT_CNTY': 'hidden field', 'TXDOT_DIST': 'hidden field', 'CNTY_NM': 'hidden field', 'GID': 'hidden field', });
lyr_VZC_ISD_2.set('fieldLabels', {'GEOID20': 'hidden field', 'NAME20': 'no label', 'SDLEA': 'hidden field', 'NAME': 'hidden field', 'NAME2': 'hidden field', 'DISTRICT_N': 'hidden field', 'DISTRICT': 'hidden field', 'DISTRICT_C': 'hidden field', 'NCES_DISTR': 'hidden field', 'COLOR': 'hidden field', 'Shape_area': 'hidden field', 'Shape_len': 'hidden field', 'Web Site': 'no label', });
lyr_VZC_Precincts_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'CNTY': 'hidden field', 'COLOR': 'hidden field', 'PREC': 'header label - visible with data', 'PCTKEY': 'hidden field', 'cntykey': 'hidden field', 'Shape_area': 'hidden field', 'Shape_len': 'hidden field', 'LOC': 'header label - visible with data', 'LINK': 'header label - visible with data', });
lyr_VZC_ESD3_4.set('fieldLabels', {'Zone': 'inline label - always visible', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', });
lyr_VZC_ESD3_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});