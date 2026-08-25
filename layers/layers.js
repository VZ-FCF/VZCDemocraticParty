ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-10774404.189469, 3777578.776859, -10592183.247074, 3889805.613342]);
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
var format_VZC_Pct4_3 = new ol.format.GeoJSON();
var features_VZC_Pct4_3 = format_VZC_Pct4_3.readFeatures(json_VZC_Pct4_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_Pct4_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_Pct4_3.addFeatures(features_VZC_Pct4_3);
var lyr_VZC_Pct4_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_Pct4_3, 
                style: style_VZC_Pct4_3,
                popuplayertitle: 'VZC_Pct4',
                interactive: false,
                title: '<img src="styles/legend/VZC_Pct4_3.png" /> VZC_Pct4'
            });
var format_VZC_Pct3_4 = new ol.format.GeoJSON();
var features_VZC_Pct3_4 = format_VZC_Pct3_4.readFeatures(json_VZC_Pct3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_Pct3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_Pct3_4.addFeatures(features_VZC_Pct3_4);
var lyr_VZC_Pct3_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_Pct3_4, 
                style: style_VZC_Pct3_4,
                popuplayertitle: 'VZC_Pct3',
                interactive: false,
                title: '<img src="styles/legend/VZC_Pct3_4.png" /> VZC_Pct3'
            });
var format_VZC_Pct2_5 = new ol.format.GeoJSON();
var features_VZC_Pct2_5 = format_VZC_Pct2_5.readFeatures(json_VZC_Pct2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_Pct2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_Pct2_5.addFeatures(features_VZC_Pct2_5);
var lyr_VZC_Pct2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_Pct2_5, 
                style: style_VZC_Pct2_5,
                popuplayertitle: 'VZC_Pct2',
                interactive: false,
                title: '<img src="styles/legend/VZC_Pct2_5.png" /> VZC_Pct2'
            });
var format_VZC_Pct1_6 = new ol.format.GeoJSON();
var features_VZC_Pct1_6 = format_VZC_Pct1_6.readFeatures(json_VZC_Pct1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_Pct1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_Pct1_6.addFeatures(features_VZC_Pct1_6);
var lyr_VZC_Pct1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_Pct1_6, 
                style: style_VZC_Pct1_6,
                popuplayertitle: 'VZC_Pct1',
                interactive: false,
                title: '<img src="styles/legend/VZC_Pct1_6.png" /> VZC_Pct1'
            });
var format_VZC_Precincts_7 = new ol.format.GeoJSON();
var features_VZC_Precincts_7 = format_VZC_Precincts_7.readFeatures(json_VZC_Precincts_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_Precincts_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_Precincts_7.addFeatures(features_VZC_Precincts_7);
var lyr_VZC_Precincts_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_Precincts_7, 
                style: style_VZC_Precincts_7,
                popuplayertitle: 'VZC_Precincts',
                interactive: true,
    title: 'VZC_Precincts<br />\
    <img src="styles/legend/VZC_Precincts_7_0.png" /> 1A<br />\
    <img src="styles/legend/VZC_Precincts_7_1.png" /> 1B<br />\
    <img src="styles/legend/VZC_Precincts_7_2.png" /> 1C<br />\
    <img src="styles/legend/VZC_Precincts_7_3.png" /> 1D<br />\
    <img src="styles/legend/VZC_Precincts_7_4.png" /> 1E<br />\
    <img src="styles/legend/VZC_Precincts_7_5.png" /> 2A<br />\
    <img src="styles/legend/VZC_Precincts_7_6.png" /> 2B<br />\
    <img src="styles/legend/VZC_Precincts_7_7.png" /> 2C<br />\
    <img src="styles/legend/VZC_Precincts_7_8.png" /> 2D<br />\
    <img src="styles/legend/VZC_Precincts_7_9.png" /> 3A<br />\
    <img src="styles/legend/VZC_Precincts_7_10.png" /> 3B<br />\
    <img src="styles/legend/VZC_Precincts_7_11.png" /> 3C<br />\
    <img src="styles/legend/VZC_Precincts_7_12.png" /> 3D<br />\
    <img src="styles/legend/VZC_Precincts_7_13.png" /> 4A<br />\
    <img src="styles/legend/VZC_Precincts_7_14.png" /> 4B<br />\
    <img src="styles/legend/VZC_Precincts_7_15.png" /> 4C<br />\
    <img src="styles/legend/VZC_Precincts_7_16.png" /> 4D<br />\
    <img src="styles/legend/VZC_Precincts_7_17.png" /> 4E<br />' });
var format_VZC_ESD4_8 = new ol.format.GeoJSON();
var features_VZC_ESD4_8 = format_VZC_ESD4_8.readFeatures(json_VZC_ESD4_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_ESD4_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_ESD4_8.addFeatures(features_VZC_ESD4_8);
var lyr_VZC_ESD4_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_ESD4_8, 
                style: style_VZC_ESD4_8,
                popuplayertitle: 'VZC_ESD4',
                interactive: true,
                title: '<img src="styles/legend/VZC_ESD4_8.png" /> VZC_ESD4'
            });
var format_VZC_ESD3_9 = new ol.format.GeoJSON();
var features_VZC_ESD3_9 = format_VZC_ESD3_9.readFeatures(json_VZC_ESD3_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_ESD3_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_ESD3_9.addFeatures(features_VZC_ESD3_9);
var lyr_VZC_ESD3_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_ESD3_9, 
                style: style_VZC_ESD3_9,
                popuplayertitle: 'VZC_ESD3',
                interactive: true,
                title: '<img src="styles/legend/VZC_ESD3_9.png" /> VZC_ESD3'
            });
var format_VZC_ESD2_10 = new ol.format.GeoJSON();
var features_VZC_ESD2_10 = format_VZC_ESD2_10.readFeatures(json_VZC_ESD2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_ESD2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_ESD2_10.addFeatures(features_VZC_ESD2_10);
var lyr_VZC_ESD2_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_ESD2_10, 
                style: style_VZC_ESD2_10,
                popuplayertitle: 'VZC_ESD2',
                interactive: true,
                title: '<img src="styles/legend/VZC_ESD2_10.png" /> VZC_ESD2'
            });
var format_VZC_ESD1_11 = new ol.format.GeoJSON();
var features_VZC_ESD1_11 = format_VZC_ESD1_11.readFeatures(json_VZC_ESD1_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_ESD1_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_ESD1_11.addFeatures(features_VZC_ESD1_11);
var lyr_VZC_ESD1_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_ESD1_11, 
                style: style_VZC_ESD1_11,
                popuplayertitle: 'VZC_ESD1',
                interactive: true,
                title: '<img src="styles/legend/VZC_ESD1_11.png" /> VZC_ESD1'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_VanZandtCounty_1.setVisible(true);lyr_VZC_ISD_2.setVisible(false);lyr_VZC_Pct4_3.setVisible(false);lyr_VZC_Pct3_4.setVisible(false);lyr_VZC_Pct2_5.setVisible(false);lyr_VZC_Pct1_6.setVisible(false);lyr_VZC_Precincts_7.setVisible(true);lyr_VZC_ESD4_8.setVisible(false);lyr_VZC_ESD3_9.setVisible(false);lyr_VZC_ESD2_10.setVisible(false);lyr_VZC_ESD1_11.setVisible(false);
var layersList = [lyr_GoogleMaps_0,lyr_VanZandtCounty_1,lyr_VZC_ISD_2,lyr_VZC_Pct4_3,lyr_VZC_Pct3_4,lyr_VZC_Pct2_5,lyr_VZC_Pct1_6,lyr_VZC_Precincts_7,lyr_VZC_ESD4_8,lyr_VZC_ESD3_9,lyr_VZC_ESD2_10,lyr_VZC_ESD1_11];
lyr_VanZandtCounty_1.set('fieldAliases', {'CMPTRL_CNT': 'CMPTRL_CNT', 'DPS_CNTY_N': 'DPS_CNTY_N', 'FIPS_ST_CN': 'FIPS_ST_CN', 'TXDOT_CNTY': 'TXDOT_CNTY', 'TXDOT_DIST': 'TXDOT_DIST', 'CNTY_NM': 'CNTY_NM', 'GID': 'GID', });
lyr_VZC_ISD_2.set('fieldAliases', {'GEOID20': 'GEOID20', 'NAME20': 'NAME20', 'SDLEA': 'SDLEA', 'NAME': 'NAME', 'NAME2': 'NAME2', 'DISTRICT_N': 'DISTRICT_N', 'DISTRICT': 'DISTRICT', 'DISTRICT_C': 'DISTRICT_C', 'NCES_DISTR': 'NCES_DISTR', 'COLOR': 'COLOR', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'Web Site': 'Web Site', });
lyr_VZC_Pct4_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CNTY': 'CNTY', 'COLOR': 'COLOR', 'PREC': 'PREC', 'PCTKEY': 'PCTKEY', 'cntykey': 'cntykey', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'LOC': 'LOC', 'LINK': 'LINK', });
lyr_VZC_Pct3_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CNTY': 'CNTY', 'COLOR': 'COLOR', 'PREC': 'PREC', 'PCTKEY': 'PCTKEY', 'cntykey': 'cntykey', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'LOC': 'LOC', 'LINK': 'LINK', });
lyr_VZC_Pct2_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CNTY': 'CNTY', 'COLOR': 'COLOR', 'PREC': 'PREC', 'PCTKEY': 'PCTKEY', 'cntykey': 'cntykey', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'LOC': 'LOC', 'LINK': 'LINK', });
lyr_VZC_Pct1_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CNTY': 'CNTY', 'COLOR': 'COLOR', 'PREC': 'PREC', 'PCTKEY': 'PCTKEY', 'cntykey': 'cntykey', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'LOC': 'LOC', 'LINK': 'LINK', });
lyr_VZC_Precincts_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CNTY': 'CNTY', 'COLOR': 'COLOR', 'PREC': 'Voting Precinct', 'PCTKEY': 'PCTKEY', 'cntykey': 'cntykey', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'LOC': 'Voting Location', 'LINK': 'Address', });
lyr_VZC_ESD4_8.set('fieldAliases', {'DistrictNa': 'DistrictNa', 'Notes': 'Notes', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_VZC_ESD3_9.set('fieldAliases', {'Zone': 'Zone', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', 'DistrictNa': 'DistrictNa', });
lyr_VZC_ESD2_10.set('fieldAliases', {'DistrictNa': 'DistrictNa', 'Notes': 'Notes', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_VZC_ESD1_11.set('fieldAliases', {'DistrictNa': 'DistrictNa', 'Notes': 'Notes', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_VanZandtCounty_1.set('fieldImages', {'CMPTRL_CNT': 'TextEdit', 'DPS_CNTY_N': 'TextEdit', 'FIPS_ST_CN': 'TextEdit', 'TXDOT_CNTY': 'TextEdit', 'TXDOT_DIST': 'TextEdit', 'CNTY_NM': 'TextEdit', 'GID': 'TextEdit', });
lyr_VZC_ISD_2.set('fieldImages', {'GEOID20': 'TextEdit', 'NAME20': 'TextEdit', 'SDLEA': 'TextEdit', 'NAME': 'TextEdit', 'NAME2': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DISTRICT': 'TextEdit', 'DISTRICT_C': 'TextEdit', 'NCES_DISTR': 'TextEdit', 'COLOR': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_len': 'TextEdit', 'Web Site': '', });
lyr_VZC_Pct4_3.set('fieldImages', {'OBJECTID': '', 'CNTY': '', 'COLOR': '', 'PREC': '', 'PCTKEY': '', 'cntykey': '', 'Shape_area': '', 'Shape_len': '', 'LOC': '', 'LINK': '', });
lyr_VZC_Pct3_4.set('fieldImages', {'OBJECTID': '', 'CNTY': '', 'COLOR': '', 'PREC': '', 'PCTKEY': '', 'cntykey': '', 'Shape_area': '', 'Shape_len': '', 'LOC': '', 'LINK': '', });
lyr_VZC_Pct2_5.set('fieldImages', {'OBJECTID': '', 'CNTY': '', 'COLOR': '', 'PREC': '', 'PCTKEY': '', 'cntykey': '', 'Shape_area': '', 'Shape_len': '', 'LOC': '', 'LINK': '', });
lyr_VZC_Pct1_6.set('fieldImages', {'OBJECTID': '', 'CNTY': '', 'COLOR': '', 'PREC': '', 'PCTKEY': '', 'cntykey': '', 'Shape_area': '', 'Shape_len': '', 'LOC': '', 'LINK': '', });
lyr_VZC_Precincts_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'CNTY': 'TextEdit', 'COLOR': 'TextEdit', 'PREC': 'TextEdit', 'PCTKEY': 'TextEdit', 'cntykey': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_len': 'TextEdit', 'LOC': 'TextEdit', 'LINK': 'TextEdit', });
lyr_VZC_ESD4_8.set('fieldImages', {'DistrictNa': '', 'Notes': '', 'Shape_STAr': '', 'Shape_STLe': '', });
lyr_VZC_ESD3_9.set('fieldImages', {'Zone': '', 'Shape_STAr': '', 'Shape_STLe': '', 'DistrictNa': '', });
lyr_VZC_ESD2_10.set('fieldImages', {'DistrictNa': '', 'Notes': '', 'Shape_STAr': '', 'Shape_STLe': '', });
lyr_VZC_ESD1_11.set('fieldImages', {'DistrictNa': '', 'Notes': '', 'Shape_STAr': '', 'Shape_STLe': '', });
lyr_VanZandtCounty_1.set('fieldLabels', {'CMPTRL_CNT': 'hidden field', 'DPS_CNTY_N': 'hidden field', 'FIPS_ST_CN': 'hidden field', 'TXDOT_CNTY': 'hidden field', 'TXDOT_DIST': 'hidden field', 'CNTY_NM': 'hidden field', 'GID': 'hidden field', });
lyr_VZC_ISD_2.set('fieldLabels', {'GEOID20': 'hidden field', 'NAME20': 'no label', 'SDLEA': 'hidden field', 'NAME': 'hidden field', 'NAME2': 'hidden field', 'DISTRICT_N': 'hidden field', 'DISTRICT': 'hidden field', 'DISTRICT_C': 'hidden field', 'NCES_DISTR': 'hidden field', 'COLOR': 'hidden field', 'Shape_area': 'hidden field', 'Shape_len': 'hidden field', 'Web Site': 'no label', });
lyr_VZC_Pct4_3.set('fieldLabels', {'OBJECTID': 'no label', 'CNTY': 'no label', 'COLOR': 'no label', 'PREC': 'no label', 'PCTKEY': 'no label', 'cntykey': 'no label', 'Shape_area': 'no label', 'Shape_len': 'no label', 'LOC': 'no label', 'LINK': 'no label', });
lyr_VZC_Pct3_4.set('fieldLabels', {'OBJECTID': 'no label', 'CNTY': 'no label', 'COLOR': 'no label', 'PREC': 'no label', 'PCTKEY': 'no label', 'cntykey': 'no label', 'Shape_area': 'no label', 'Shape_len': 'no label', 'LOC': 'no label', 'LINK': 'no label', });
lyr_VZC_Pct2_5.set('fieldLabels', {'OBJECTID': 'no label', 'CNTY': 'no label', 'COLOR': 'no label', 'PREC': 'no label', 'PCTKEY': 'no label', 'cntykey': 'no label', 'Shape_area': 'no label', 'Shape_len': 'no label', 'LOC': 'no label', 'LINK': 'no label', });
lyr_VZC_Pct1_6.set('fieldLabels', {'OBJECTID': 'no label', 'CNTY': 'no label', 'COLOR': 'no label', 'PREC': 'no label', 'PCTKEY': 'no label', 'cntykey': 'no label', 'Shape_area': 'no label', 'Shape_len': 'no label', 'LOC': 'no label', 'LINK': 'no label', });
lyr_VZC_Precincts_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'CNTY': 'hidden field', 'COLOR': 'hidden field', 'PREC': 'header label - visible with data', 'PCTKEY': 'hidden field', 'cntykey': 'hidden field', 'Shape_area': 'hidden field', 'Shape_len': 'hidden field', 'LOC': 'header label - visible with data', 'LINK': 'header label - visible with data', });
lyr_VZC_ESD4_8.set('fieldLabels', {'DistrictNa': 'no label', 'Notes': 'hidden field', 'Shape_STAr': 'hidden field', 'Shape_STLe': 'hidden field', });
lyr_VZC_ESD3_9.set('fieldLabels', {'Zone': 'hidden field', 'Shape_STAr': 'hidden field', 'Shape_STLe': 'hidden field', 'DistrictNa': 'no label', });
lyr_VZC_ESD2_10.set('fieldLabels', {'DistrictNa': 'no label', 'Notes': 'hidden field', 'Shape_STAr': 'hidden field', 'Shape_STLe': 'hidden field', });
lyr_VZC_ESD1_11.set('fieldLabels', {'DistrictNa': 'no label', 'Notes': 'hidden field', 'Shape_STAr': 'hidden field', 'Shape_STLe': 'hidden field', });
lyr_VZC_ESD1_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});