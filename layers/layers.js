ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-10774404.189469, 3777578.776859, -10592183.247074, 3889805.613342]);
var wms_layers = [];

var format_VanZandtCounty_0 = new ol.format.GeoJSON();
var features_VanZandtCounty_0 = format_VanZandtCounty_0.readFeatures(json_VanZandtCounty_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VanZandtCounty_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VanZandtCounty_0.addFeatures(features_VanZandtCounty_0);
var lyr_VanZandtCounty_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VanZandtCounty_0, 
                style: style_VanZandtCounty_0,
                popuplayertitle: 'VanZandtCounty',
                interactive: false,
                title: '<img src="styles/legend/VanZandtCounty_0.png" /> VanZandtCounty'
            });
var format_VZC_ISD_1 = new ol.format.GeoJSON();
var features_VZC_ISD_1 = format_VZC_ISD_1.readFeatures(json_VZC_ISD_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_ISD_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_ISD_1.addFeatures(features_VZC_ISD_1);
var lyr_VZC_ISD_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_ISD_1, 
                style: style_VZC_ISD_1,
                popuplayertitle: 'VZC_ISD',
                interactive: true,
    title: 'VZC_ISD<br />\
    <img src="styles/legend/VZC_ISD_1_0.png" /> Athens ISD<br />\
    <img src="styles/legend/VZC_ISD_1_1.png" /> Brownsboro ISD<br />\
    <img src="styles/legend/VZC_ISD_1_2.png" /> Canton ISD<br />\
    <img src="styles/legend/VZC_ISD_1_3.png" /> Edgewood ISD<br />\
    <img src="styles/legend/VZC_ISD_1_4.png" /> Fruitvale ISD<br />\
    <img src="styles/legend/VZC_ISD_1_5.png" /> Grand Saline ISD<br />\
    <img src="styles/legend/VZC_ISD_1_6.png" /> Lindale ISD<br />\
    <img src="styles/legend/VZC_ISD_1_7.png" /> Mabank ISD<br />\
    <img src="styles/legend/VZC_ISD_1_8.png" /> Martins Mill ISD<br />\
    <img src="styles/legend/VZC_ISD_1_9.png" /> Van ISD<br />\
    <img src="styles/legend/VZC_ISD_1_10.png" /> Wills Point ISD<br />\
    <img src="styles/legend/VZC_ISD_1_11.png" /> Eustace ISD<br />\
    <img src="styles/legend/VZC_ISD_1_12.png" /> Other<br />' });
var format_VZC_Pct3_2 = new ol.format.GeoJSON();
var features_VZC_Pct3_2 = format_VZC_Pct3_2.readFeatures(json_VZC_Pct3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_Pct3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_Pct3_2.addFeatures(features_VZC_Pct3_2);
var lyr_VZC_Pct3_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_Pct3_2, 
                style: style_VZC_Pct3_2,
                popuplayertitle: 'VZC_Pct3',
                interactive: false,
                title: '<img src="styles/legend/VZC_Pct3_2.png" /> VZC_Pct3'
            });
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
var format_VZC_Pct1_4 = new ol.format.GeoJSON();
var features_VZC_Pct1_4 = format_VZC_Pct1_4.readFeatures(json_VZC_Pct1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_Pct1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_Pct1_4.addFeatures(features_VZC_Pct1_4);
var lyr_VZC_Pct1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_Pct1_4, 
                style: style_VZC_Pct1_4,
                popuplayertitle: 'VZC_Pct1',
                interactive: false,
                title: '<img src="styles/legend/VZC_Pct1_4.png" /> VZC_Pct1'
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
var format_VZC_Precincts_6 = new ol.format.GeoJSON();
var features_VZC_Precincts_6 = format_VZC_Precincts_6.readFeatures(json_VZC_Precincts_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_Precincts_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_Precincts_6.addFeatures(features_VZC_Precincts_6);
var lyr_VZC_Precincts_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_Precincts_6, 
                style: style_VZC_Precincts_6,
                popuplayertitle: 'VZC_Precincts',
                interactive: true,
    title: 'VZC_Precincts<br />\
    <img src="styles/legend/VZC_Precincts_6_0.png" /> 1A<br />\
    <img src="styles/legend/VZC_Precincts_6_1.png" /> 1B<br />\
    <img src="styles/legend/VZC_Precincts_6_2.png" /> 1C<br />\
    <img src="styles/legend/VZC_Precincts_6_3.png" /> 1D<br />\
    <img src="styles/legend/VZC_Precincts_6_4.png" /> 1E<br />\
    <img src="styles/legend/VZC_Precincts_6_5.png" /> 2A<br />\
    <img src="styles/legend/VZC_Precincts_6_6.png" /> 2B<br />\
    <img src="styles/legend/VZC_Precincts_6_7.png" /> 2C<br />\
    <img src="styles/legend/VZC_Precincts_6_8.png" /> 2D<br />\
    <img src="styles/legend/VZC_Precincts_6_9.png" /> 3A<br />\
    <img src="styles/legend/VZC_Precincts_6_10.png" /> 3B<br />\
    <img src="styles/legend/VZC_Precincts_6_11.png" /> 3C<br />\
    <img src="styles/legend/VZC_Precincts_6_12.png" /> 3D<br />\
    <img src="styles/legend/VZC_Precincts_6_13.png" /> 4A<br />\
    <img src="styles/legend/VZC_Precincts_6_14.png" /> 4B<br />\
    <img src="styles/legend/VZC_Precincts_6_15.png" /> 4C<br />\
    <img src="styles/legend/VZC_Precincts_6_16.png" /> 4D<br />\
    <img src="styles/legend/VZC_Precincts_6_17.png" /> 4E<br />' });
var format_VZC_ESD4_WP_VFD_7 = new ol.format.GeoJSON();
var features_VZC_ESD4_WP_VFD_7 = format_VZC_ESD4_WP_VFD_7.readFeatures(json_VZC_ESD4_WP_VFD_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_ESD4_WP_VFD_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_ESD4_WP_VFD_7.addFeatures(features_VZC_ESD4_WP_VFD_7);
var lyr_VZC_ESD4_WP_VFD_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_ESD4_WP_VFD_7, 
                style: style_VZC_ESD4_WP_VFD_7,
                popuplayertitle: 'VZC_ESD4_WP_VFD',
                interactive: false,
                title: '<img src="styles/legend/VZC_ESD4_WP_VFD_7.png" /> VZC_ESD4_WP_VFD'
            });
var format_VZC_ESD3_S_VZ_VFD_8 = new ol.format.GeoJSON();
var features_VZC_ESD3_S_VZ_VFD_8 = format_VZC_ESD3_S_VZ_VFD_8.readFeatures(json_VZC_ESD3_S_VZ_VFD_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_ESD3_S_VZ_VFD_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_ESD3_S_VZ_VFD_8.addFeatures(features_VZC_ESD3_S_VZ_VFD_8);
var lyr_VZC_ESD3_S_VZ_VFD_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_ESD3_S_VZ_VFD_8, 
                style: style_VZC_ESD3_S_VZ_VFD_8,
                popuplayertitle: 'VZC_ESD3_S_VZ_VFD',
                interactive: false,
                title: '<img src="styles/legend/VZC_ESD3_S_VZ_VFD_8.png" /> VZC_ESD3_S_VZ_VFD'
            });
var format_VZC_ESD1_Mabank_VFD_9 = new ol.format.GeoJSON();
var features_VZC_ESD1_Mabank_VFD_9 = format_VZC_ESD1_Mabank_VFD_9.readFeatures(json_VZC_ESD1_Mabank_VFD_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_ESD1_Mabank_VFD_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_ESD1_Mabank_VFD_9.addFeatures(features_VZC_ESD1_Mabank_VFD_9);
var lyr_VZC_ESD1_Mabank_VFD_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_ESD1_Mabank_VFD_9, 
                style: style_VZC_ESD1_Mabank_VFD_9,
                popuplayertitle: 'VZC_ESD1_Mabank_VFD',
                interactive: false,
                title: '<img src="styles/legend/VZC_ESD1_Mabank_VFD_9.png" /> VZC_ESD1_Mabank_VFD'
            });
var format_VZC_ESD2_GS_VFD_10 = new ol.format.GeoJSON();
var features_VZC_ESD2_GS_VFD_10 = format_VZC_ESD2_GS_VFD_10.readFeatures(json_VZC_ESD2_GS_VFD_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_ESD2_GS_VFD_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_ESD2_GS_VFD_10.addFeatures(features_VZC_ESD2_GS_VFD_10);
var lyr_VZC_ESD2_GS_VFD_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_ESD2_GS_VFD_10, 
                style: style_VZC_ESD2_GS_VFD_10,
                popuplayertitle: 'VZC_ESD2_GS_VFD',
                interactive: false,
                title: '<img src="styles/legend/VZC_ESD2_GS_VFD_10.png" /> VZC_ESD2_GS_VFD'
            });

lyr_VanZandtCounty_0.setVisible(true);lyr_VZC_ISD_1.setVisible(false);lyr_VZC_Pct3_2.setVisible(false);lyr_VZC_Pct4_3.setVisible(false);lyr_VZC_Pct1_4.setVisible(false);lyr_VZC_Pct2_5.setVisible(false);lyr_VZC_Precincts_6.setVisible(true);lyr_VZC_ESD4_WP_VFD_7.setVisible(false);lyr_VZC_ESD3_S_VZ_VFD_8.setVisible(false);lyr_VZC_ESD1_Mabank_VFD_9.setVisible(false);lyr_VZC_ESD2_GS_VFD_10.setVisible(false);
var layersList = [lyr_VanZandtCounty_0,lyr_VZC_ISD_1,lyr_VZC_Pct3_2,lyr_VZC_Pct4_3,lyr_VZC_Pct1_4,lyr_VZC_Pct2_5,lyr_VZC_Precincts_6,lyr_VZC_ESD4_WP_VFD_7,lyr_VZC_ESD3_S_VZ_VFD_8,lyr_VZC_ESD1_Mabank_VFD_9,lyr_VZC_ESD2_GS_VFD_10];
lyr_VanZandtCounty_0.set('fieldAliases', {'CMPTRL_CNT': 'CMPTRL_CNT', 'DPS_CNTY_N': 'DPS_CNTY_N', 'FIPS_ST_CN': 'FIPS_ST_CN', 'TXDOT_CNTY': 'TXDOT_CNTY', 'TXDOT_DIST': 'TXDOT_DIST', 'CNTY_NM': 'CNTY_NM', 'GID': 'GID', });
lyr_VZC_ISD_1.set('fieldAliases', {'GEOID20': 'GEOID20', 'NAME20': 'NAME20', 'SDLEA': 'SDLEA', 'NAME': 'NAME', 'NAME2': 'NAME2', 'DISTRICT_N': 'DISTRICT_N', 'DISTRICT': 'DISTRICT', 'DISTRICT_C': 'DISTRICT_C', 'NCES_DISTR': 'NCES_DISTR', 'COLOR': 'COLOR', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'Web Site': 'Web Site', });
lyr_VZC_Pct3_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CNTY': 'CNTY', 'COLOR': 'COLOR', 'PREC': 'PREC', 'PCTKEY': 'PCTKEY', 'cntykey': 'cntykey', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'LOC': 'LOC', 'LINK': 'LINK', });
lyr_VZC_Pct4_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CNTY': 'CNTY', 'COLOR': 'COLOR', 'PREC': 'PREC', 'PCTKEY': 'PCTKEY', 'cntykey': 'cntykey', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'LOC': 'LOC', 'LINK': 'LINK', });
lyr_VZC_Pct1_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CNTY': 'CNTY', 'COLOR': 'COLOR', 'PREC': 'PREC', 'PCTKEY': 'PCTKEY', 'cntykey': 'cntykey', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'LOC': 'LOC', 'LINK': 'LINK', });
lyr_VZC_Pct2_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CNTY': 'CNTY', 'COLOR': 'COLOR', 'PREC': 'PREC', 'PCTKEY': 'PCTKEY', 'cntykey': 'cntykey', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'LOC': 'LOC', 'LINK': 'LINK', });
lyr_VZC_Precincts_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CNTY': 'CNTY', 'COLOR': 'COLOR', 'PREC': 'Voting Precinct', 'PCTKEY': 'PCTKEY', 'cntykey': 'cntykey', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'LOC': 'Voting Location', 'LINK': 'Address', });
lyr_VZC_ESD4_WP_VFD_7.set('fieldAliases', {'COUNTY_SUB': 'COUNTY_SUB', 'SOURCE': 'SOURCE', 'USER_ID': 'USER_ID', 'ESN_NUM': 'ESN_NUM', 'ESN_CITY': 'ESN_CITY', 'ESN_COUNTY': 'ESN_COUNTY', 'ESN_STATE': 'ESN_STATE', 'ESN_LAW': 'ESN_LAW', 'ESN_FIRE': 'ESN_FIRE', 'ESN_EMS': 'ESN_EMS', 'CREATION_U': 'CREATION_U', 'MODIFY_USE': 'MODIFY_USE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'C1_Excepti': 'C1_Excepti', 'TEST': 'TEST', 'DiscrpAgID': 'DiscrpAgID', 'DateUpdate': 'DateUpdate', 'Effective': 'Effective', 'Expire': 'Expire', 'ES_NGUID': 'ES_NGUID', 'State': 'State', 'Fire_Agenc': 'Fire_Agenc', 'Law_Agency': 'Law_Agency', 'EMS_Agency': 'EMS_Agency', 'Fire_Servi': 'Fire_Servi', 'Law_Servic': 'Law_Servic', 'EMS_Servic': 'EMS_Servic', 'Fire_Ser_1': 'Fire_Ser_1', 'Law_Serv_1': 'Law_Serv_1', 'EMS_Serv_1': 'EMS_Serv_1', 'Fire_AVcar': 'Fire_AVcar', 'Law_AVcard': 'Law_AVcard', 'EMS_AVcard': 'EMS_AVcard', 'GC_Excepti': 'GC_Excepti', 'Fire_Ser_2': 'Fire_Ser_2', 'Law_Serv_2': 'Law_Serv_2', 'EMS_Serv_2': 'EMS_Serv_2', 'GlobalID': 'GlobalID', 'last_edi_1': 'last_edi_1', 'PSAP_Servi': 'PSAP_Servi', });
lyr_VZC_ESD3_S_VZ_VFD_8.set('fieldAliases', {'COUNTY_SUB': 'COUNTY_SUB', 'SOURCE': 'SOURCE', 'USER_ID': 'USER_ID', 'ESN_NUM': 'ESN_NUM', 'ESN_CITY': 'ESN_CITY', 'ESN_COUNTY': 'ESN_COUNTY', 'ESN_STATE': 'ESN_STATE', 'ESN_LAW': 'ESN_LAW', 'ESN_FIRE': 'ESN_FIRE', 'ESN_EMS': 'ESN_EMS', 'CREATION_U': 'CREATION_U', 'MODIFY_USE': 'MODIFY_USE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'C1_Excepti': 'C1_Excepti', 'TEST': 'TEST', 'DiscrpAgID': 'DiscrpAgID', 'DateUpdate': 'DateUpdate', 'Effective': 'Effective', 'Expire': 'Expire', 'ES_NGUID': 'ES_NGUID', 'State': 'State', 'Fire_Agenc': 'Fire_Agenc', 'Law_Agency': 'Law_Agency', 'EMS_Agency': 'EMS_Agency', 'Fire_Servi': 'Fire_Servi', 'Law_Servic': 'Law_Servic', 'EMS_Servic': 'EMS_Servic', 'Fire_Ser_1': 'Fire_Ser_1', 'Law_Serv_1': 'Law_Serv_1', 'EMS_Serv_1': 'EMS_Serv_1', 'Fire_AVcar': 'Fire_AVcar', 'Law_AVcard': 'Law_AVcard', 'EMS_AVcard': 'EMS_AVcard', 'GC_Excepti': 'GC_Excepti', 'Fire_Ser_2': 'Fire_Ser_2', 'Law_Serv_2': 'Law_Serv_2', 'EMS_Serv_2': 'EMS_Serv_2', 'GlobalID': 'GlobalID', 'last_edi_1': 'last_edi_1', 'PSAP_Servi': 'PSAP_Servi', });
lyr_VZC_ESD1_Mabank_VFD_9.set('fieldAliases', {'COUNTY_SUB': 'COUNTY_SUB', 'SOURCE': 'SOURCE', 'USER_ID': 'USER_ID', 'ESN_NUM': 'ESN_NUM', 'ESN_CITY': 'ESN_CITY', 'ESN_COUNTY': 'ESN_COUNTY', 'ESN_STATE': 'ESN_STATE', 'ESN_LAW': 'ESN_LAW', 'ESN_FIRE': 'ESN_FIRE', 'ESN_EMS': 'ESN_EMS', 'CREATION_U': 'CREATION_U', 'MODIFY_USE': 'MODIFY_USE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'C1_Excepti': 'C1_Excepti', 'TEST': 'TEST', 'DiscrpAgID': 'DiscrpAgID', 'DateUpdate': 'DateUpdate', 'Effective': 'Effective', 'Expire': 'Expire', 'ES_NGUID': 'ES_NGUID', 'State': 'State', 'Fire_Agenc': 'Fire_Agenc', 'Law_Agency': 'Law_Agency', 'EMS_Agency': 'EMS_Agency', 'Fire_Servi': 'Fire_Servi', 'Law_Servic': 'Law_Servic', 'EMS_Servic': 'EMS_Servic', 'Fire_Ser_1': 'Fire_Ser_1', 'Law_Serv_1': 'Law_Serv_1', 'EMS_Serv_1': 'EMS_Serv_1', 'Fire_AVcar': 'Fire_AVcar', 'Law_AVcard': 'Law_AVcard', 'EMS_AVcard': 'EMS_AVcard', 'GC_Excepti': 'GC_Excepti', 'Fire_Ser_2': 'Fire_Ser_2', 'Law_Serv_2': 'Law_Serv_2', 'EMS_Serv_2': 'EMS_Serv_2', 'GlobalID': 'GlobalID', 'last_edi_1': 'last_edi_1', 'PSAP_Servi': 'PSAP_Servi', });
lyr_VZC_ESD2_GS_VFD_10.set('fieldAliases', {'COUNTY_SUB': 'COUNTY_SUB', 'SOURCE': 'SOURCE', 'USER_ID': 'USER_ID', 'ESN_NUM': 'ESN_NUM', 'ESN_CITY': 'ESN_CITY', 'ESN_COUNTY': 'ESN_COUNTY', 'ESN_STATE': 'ESN_STATE', 'ESN_LAW': 'ESN_LAW', 'ESN_FIRE': 'ESN_FIRE', 'ESN_EMS': 'ESN_EMS', 'CREATION_U': 'CREATION_U', 'MODIFY_USE': 'MODIFY_USE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'C1_Excepti': 'C1_Excepti', 'TEST': 'TEST', 'DiscrpAgID': 'DiscrpAgID', 'DateUpdate': 'DateUpdate', 'Effective': 'Effective', 'Expire': 'Expire', 'ES_NGUID': 'ES_NGUID', 'State': 'State', 'Fire_Agenc': 'Fire_Agenc', 'Law_Agency': 'Law_Agency', 'EMS_Agency': 'EMS_Agency', 'Fire_Servi': 'Fire_Servi', 'Law_Servic': 'Law_Servic', 'EMS_Servic': 'EMS_Servic', 'Fire_Ser_1': 'Fire_Ser_1', 'Law_Serv_1': 'Law_Serv_1', 'EMS_Serv_1': 'EMS_Serv_1', 'Fire_AVcar': 'Fire_AVcar', 'Law_AVcard': 'Law_AVcard', 'EMS_AVcard': 'EMS_AVcard', 'GC_Excepti': 'GC_Excepti', 'Fire_Ser_2': 'Fire_Ser_2', 'Law_Serv_2': 'Law_Serv_2', 'EMS_Serv_2': 'EMS_Serv_2', 'GlobalID': 'GlobalID', 'last_edi_1': 'last_edi_1', 'PSAP_Servi': 'PSAP_Servi', });
lyr_VanZandtCounty_0.set('fieldImages', {'CMPTRL_CNT': 'TextEdit', 'DPS_CNTY_N': 'TextEdit', 'FIPS_ST_CN': 'TextEdit', 'TXDOT_CNTY': 'TextEdit', 'TXDOT_DIST': 'TextEdit', 'CNTY_NM': 'TextEdit', 'GID': 'TextEdit', });
lyr_VZC_ISD_1.set('fieldImages', {'GEOID20': 'TextEdit', 'NAME20': 'TextEdit', 'SDLEA': 'TextEdit', 'NAME': 'TextEdit', 'NAME2': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DISTRICT': 'TextEdit', 'DISTRICT_C': 'TextEdit', 'NCES_DISTR': 'TextEdit', 'COLOR': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_len': 'TextEdit', 'Web Site': '', });
lyr_VZC_Pct3_2.set('fieldImages', {'OBJECTID': '', 'CNTY': '', 'COLOR': '', 'PREC': '', 'PCTKEY': '', 'cntykey': '', 'Shape_area': '', 'Shape_len': '', 'LOC': '', 'LINK': '', });
lyr_VZC_Pct4_3.set('fieldImages', {'OBJECTID': '', 'CNTY': '', 'COLOR': '', 'PREC': '', 'PCTKEY': '', 'cntykey': '', 'Shape_area': '', 'Shape_len': '', 'LOC': '', 'LINK': '', });
lyr_VZC_Pct1_4.set('fieldImages', {'OBJECTID': '', 'CNTY': '', 'COLOR': '', 'PREC': '', 'PCTKEY': '', 'cntykey': '', 'Shape_area': '', 'Shape_len': '', 'LOC': '', 'LINK': '', });
lyr_VZC_Pct2_5.set('fieldImages', {'OBJECTID': '', 'CNTY': '', 'COLOR': '', 'PREC': '', 'PCTKEY': '', 'cntykey': '', 'Shape_area': '', 'Shape_len': '', 'LOC': '', 'LINK': '', });
lyr_VZC_Precincts_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'CNTY': 'TextEdit', 'COLOR': 'TextEdit', 'PREC': 'TextEdit', 'PCTKEY': 'TextEdit', 'cntykey': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_len': 'TextEdit', 'LOC': 'TextEdit', 'LINK': 'TextEdit', });
lyr_VZC_ESD4_WP_VFD_7.set('fieldImages', {'COUNTY_SUB': '', 'SOURCE': '', 'USER_ID': '', 'ESN_NUM': '', 'ESN_CITY': '', 'ESN_COUNTY': '', 'ESN_STATE': '', 'ESN_LAW': '', 'ESN_FIRE': '', 'ESN_EMS': '', 'CREATION_U': '', 'MODIFY_USE': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'C1_Excepti': '', 'TEST': '', 'DiscrpAgID': '', 'DateUpdate': '', 'Effective': '', 'Expire': '', 'ES_NGUID': '', 'State': '', 'Fire_Agenc': '', 'Law_Agency': '', 'EMS_Agency': '', 'Fire_Servi': '', 'Law_Servic': '', 'EMS_Servic': '', 'Fire_Ser_1': '', 'Law_Serv_1': '', 'EMS_Serv_1': '', 'Fire_AVcar': '', 'Law_AVcard': '', 'EMS_AVcard': '', 'GC_Excepti': '', 'Fire_Ser_2': '', 'Law_Serv_2': '', 'EMS_Serv_2': '', 'GlobalID': '', 'last_edi_1': '', 'PSAP_Servi': '', });
lyr_VZC_ESD3_S_VZ_VFD_8.set('fieldImages', {'COUNTY_SUB': '', 'SOURCE': '', 'USER_ID': '', 'ESN_NUM': '', 'ESN_CITY': '', 'ESN_COUNTY': '', 'ESN_STATE': '', 'ESN_LAW': '', 'ESN_FIRE': '', 'ESN_EMS': '', 'CREATION_U': '', 'MODIFY_USE': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'C1_Excepti': '', 'TEST': '', 'DiscrpAgID': '', 'DateUpdate': '', 'Effective': '', 'Expire': '', 'ES_NGUID': '', 'State': '', 'Fire_Agenc': '', 'Law_Agency': '', 'EMS_Agency': '', 'Fire_Servi': '', 'Law_Servic': '', 'EMS_Servic': '', 'Fire_Ser_1': '', 'Law_Serv_1': '', 'EMS_Serv_1': '', 'Fire_AVcar': '', 'Law_AVcard': '', 'EMS_AVcard': '', 'GC_Excepti': '', 'Fire_Ser_2': '', 'Law_Serv_2': '', 'EMS_Serv_2': '', 'GlobalID': '', 'last_edi_1': '', 'PSAP_Servi': '', });
lyr_VZC_ESD1_Mabank_VFD_9.set('fieldImages', {'COUNTY_SUB': '', 'SOURCE': '', 'USER_ID': '', 'ESN_NUM': '', 'ESN_CITY': '', 'ESN_COUNTY': '', 'ESN_STATE': '', 'ESN_LAW': '', 'ESN_FIRE': '', 'ESN_EMS': '', 'CREATION_U': '', 'MODIFY_USE': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'C1_Excepti': '', 'TEST': '', 'DiscrpAgID': '', 'DateUpdate': '', 'Effective': '', 'Expire': '', 'ES_NGUID': '', 'State': '', 'Fire_Agenc': '', 'Law_Agency': '', 'EMS_Agency': '', 'Fire_Servi': '', 'Law_Servic': '', 'EMS_Servic': '', 'Fire_Ser_1': '', 'Law_Serv_1': '', 'EMS_Serv_1': '', 'Fire_AVcar': '', 'Law_AVcard': '', 'EMS_AVcard': '', 'GC_Excepti': '', 'Fire_Ser_2': '', 'Law_Serv_2': '', 'EMS_Serv_2': '', 'GlobalID': '', 'last_edi_1': '', 'PSAP_Servi': '', });
lyr_VZC_ESD2_GS_VFD_10.set('fieldImages', {'COUNTY_SUB': '', 'SOURCE': '', 'USER_ID': '', 'ESN_NUM': '', 'ESN_CITY': '', 'ESN_COUNTY': '', 'ESN_STATE': '', 'ESN_LAW': '', 'ESN_FIRE': '', 'ESN_EMS': '', 'CREATION_U': '', 'MODIFY_USE': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'C1_Excepti': '', 'TEST': '', 'DiscrpAgID': '', 'DateUpdate': '', 'Effective': '', 'Expire': '', 'ES_NGUID': '', 'State': '', 'Fire_Agenc': '', 'Law_Agency': '', 'EMS_Agency': '', 'Fire_Servi': '', 'Law_Servic': '', 'EMS_Servic': '', 'Fire_Ser_1': '', 'Law_Serv_1': '', 'EMS_Serv_1': '', 'Fire_AVcar': '', 'Law_AVcard': '', 'EMS_AVcard': '', 'GC_Excepti': '', 'Fire_Ser_2': '', 'Law_Serv_2': '', 'EMS_Serv_2': '', 'GlobalID': '', 'last_edi_1': '', 'PSAP_Servi': '', });
lyr_VanZandtCounty_0.set('fieldLabels', {'CMPTRL_CNT': 'hidden field', 'DPS_CNTY_N': 'hidden field', 'FIPS_ST_CN': 'hidden field', 'TXDOT_CNTY': 'hidden field', 'TXDOT_DIST': 'hidden field', 'CNTY_NM': 'hidden field', 'GID': 'hidden field', });
lyr_VZC_ISD_1.set('fieldLabels', {'GEOID20': 'hidden field', 'NAME20': 'no label', 'SDLEA': 'hidden field', 'NAME': 'hidden field', 'NAME2': 'hidden field', 'DISTRICT_N': 'hidden field', 'DISTRICT': 'hidden field', 'DISTRICT_C': 'hidden field', 'NCES_DISTR': 'hidden field', 'COLOR': 'hidden field', 'Shape_area': 'hidden field', 'Shape_len': 'hidden field', 'Web Site': 'no label', });
lyr_VZC_Pct3_2.set('fieldLabels', {'OBJECTID': 'no label', 'CNTY': 'no label', 'COLOR': 'no label', 'PREC': 'no label', 'PCTKEY': 'no label', 'cntykey': 'no label', 'Shape_area': 'no label', 'Shape_len': 'no label', 'LOC': 'no label', 'LINK': 'no label', });
lyr_VZC_Pct4_3.set('fieldLabels', {'OBJECTID': 'no label', 'CNTY': 'no label', 'COLOR': 'no label', 'PREC': 'no label', 'PCTKEY': 'no label', 'cntykey': 'no label', 'Shape_area': 'no label', 'Shape_len': 'no label', 'LOC': 'no label', 'LINK': 'no label', });
lyr_VZC_Pct1_4.set('fieldLabels', {'OBJECTID': 'no label', 'CNTY': 'no label', 'COLOR': 'no label', 'PREC': 'no label', 'PCTKEY': 'no label', 'cntykey': 'no label', 'Shape_area': 'no label', 'Shape_len': 'no label', 'LOC': 'no label', 'LINK': 'no label', });
lyr_VZC_Pct2_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'CNTY': 'inline label - always visible', 'COLOR': 'inline label - always visible', 'PREC': 'no label', 'PCTKEY': 'no label', 'cntykey': 'no label', 'Shape_area': 'no label', 'Shape_len': 'no label', 'LOC': 'no label', 'LINK': 'no label', });
lyr_VZC_Precincts_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'CNTY': 'hidden field', 'COLOR': 'hidden field', 'PREC': 'header label - visible with data', 'PCTKEY': 'hidden field', 'cntykey': 'hidden field', 'Shape_area': 'hidden field', 'Shape_len': 'hidden field', 'LOC': 'header label - visible with data', 'LINK': 'header label - visible with data', });
lyr_VZC_ESD4_WP_VFD_7.set('fieldLabels', {'COUNTY_SUB': 'no label', 'SOURCE': 'no label', 'USER_ID': 'no label', 'ESN_NUM': 'no label', 'ESN_CITY': 'no label', 'ESN_COUNTY': 'no label', 'ESN_STATE': 'no label', 'ESN_LAW': 'no label', 'ESN_FIRE': 'no label', 'ESN_EMS': 'no label', 'CREATION_U': 'no label', 'MODIFY_USE': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'C1_Excepti': 'no label', 'TEST': 'no label', 'DiscrpAgID': 'no label', 'DateUpdate': 'no label', 'Effective': 'no label', 'Expire': 'no label', 'ES_NGUID': 'no label', 'State': 'no label', 'Fire_Agenc': 'no label', 'Law_Agency': 'no label', 'EMS_Agency': 'no label', 'Fire_Servi': 'no label', 'Law_Servic': 'no label', 'EMS_Servic': 'no label', 'Fire_Ser_1': 'no label', 'Law_Serv_1': 'no label', 'EMS_Serv_1': 'no label', 'Fire_AVcar': 'no label', 'Law_AVcard': 'no label', 'EMS_AVcard': 'no label', 'GC_Excepti': 'no label', 'Fire_Ser_2': 'no label', 'Law_Serv_2': 'no label', 'EMS_Serv_2': 'no label', 'GlobalID': 'no label', 'last_edi_1': 'no label', 'PSAP_Servi': 'no label', });
lyr_VZC_ESD3_S_VZ_VFD_8.set('fieldLabels', {'COUNTY_SUB': 'no label', 'SOURCE': 'no label', 'USER_ID': 'no label', 'ESN_NUM': 'no label', 'ESN_CITY': 'no label', 'ESN_COUNTY': 'no label', 'ESN_STATE': 'no label', 'ESN_LAW': 'no label', 'ESN_FIRE': 'no label', 'ESN_EMS': 'no label', 'CREATION_U': 'no label', 'MODIFY_USE': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'C1_Excepti': 'no label', 'TEST': 'no label', 'DiscrpAgID': 'no label', 'DateUpdate': 'no label', 'Effective': 'no label', 'Expire': 'no label', 'ES_NGUID': 'no label', 'State': 'no label', 'Fire_Agenc': 'no label', 'Law_Agency': 'no label', 'EMS_Agency': 'no label', 'Fire_Servi': 'no label', 'Law_Servic': 'no label', 'EMS_Servic': 'no label', 'Fire_Ser_1': 'no label', 'Law_Serv_1': 'no label', 'EMS_Serv_1': 'no label', 'Fire_AVcar': 'no label', 'Law_AVcard': 'no label', 'EMS_AVcard': 'no label', 'GC_Excepti': 'no label', 'Fire_Ser_2': 'no label', 'Law_Serv_2': 'no label', 'EMS_Serv_2': 'no label', 'GlobalID': 'no label', 'last_edi_1': 'no label', 'PSAP_Servi': 'no label', });
lyr_VZC_ESD1_Mabank_VFD_9.set('fieldLabels', {'COUNTY_SUB': 'no label', 'SOURCE': 'no label', 'USER_ID': 'no label', 'ESN_NUM': 'no label', 'ESN_CITY': 'no label', 'ESN_COUNTY': 'no label', 'ESN_STATE': 'no label', 'ESN_LAW': 'no label', 'ESN_FIRE': 'no label', 'ESN_EMS': 'no label', 'CREATION_U': 'no label', 'MODIFY_USE': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'C1_Excepti': 'no label', 'TEST': 'no label', 'DiscrpAgID': 'no label', 'DateUpdate': 'no label', 'Effective': 'no label', 'Expire': 'no label', 'ES_NGUID': 'no label', 'State': 'no label', 'Fire_Agenc': 'no label', 'Law_Agency': 'no label', 'EMS_Agency': 'no label', 'Fire_Servi': 'no label', 'Law_Servic': 'no label', 'EMS_Servic': 'no label', 'Fire_Ser_1': 'no label', 'Law_Serv_1': 'no label', 'EMS_Serv_1': 'no label', 'Fire_AVcar': 'no label', 'Law_AVcard': 'no label', 'EMS_AVcard': 'no label', 'GC_Excepti': 'no label', 'Fire_Ser_2': 'no label', 'Law_Serv_2': 'no label', 'EMS_Serv_2': 'no label', 'GlobalID': 'no label', 'last_edi_1': 'no label', 'PSAP_Servi': 'no label', });
lyr_VZC_ESD2_GS_VFD_10.set('fieldLabels', {'COUNTY_SUB': 'inline label - visible with data', 'SOURCE': 'no label', 'USER_ID': 'no label', 'ESN_NUM': 'no label', 'ESN_CITY': 'no label', 'ESN_COUNTY': 'no label', 'ESN_STATE': 'no label', 'ESN_LAW': 'no label', 'ESN_FIRE': 'no label', 'ESN_EMS': 'no label', 'CREATION_U': 'no label', 'MODIFY_USE': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'C1_Excepti': 'no label', 'TEST': 'no label', 'DiscrpAgID': 'no label', 'DateUpdate': 'no label', 'Effective': 'no label', 'Expire': 'no label', 'ES_NGUID': 'no label', 'State': 'no label', 'Fire_Agenc': 'no label', 'Law_Agency': 'no label', 'EMS_Agency': 'no label', 'Fire_Servi': 'no label', 'Law_Servic': 'no label', 'EMS_Servic': 'no label', 'Fire_Ser_1': 'no label', 'Law_Serv_1': 'no label', 'EMS_Serv_1': 'no label', 'Fire_AVcar': 'no label', 'Law_AVcard': 'no label', 'EMS_AVcard': 'no label', 'GC_Excepti': 'no label', 'Fire_Ser_2': 'no label', 'Law_Serv_2': 'no label', 'EMS_Serv_2': 'no label', 'GlobalID': 'no label', 'last_edi_1': 'no label', 'PSAP_Servi': 'no label', });
lyr_VZC_ESD2_GS_VFD_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});