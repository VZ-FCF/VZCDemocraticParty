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
var format_VZC_WP_VFD_5 = new ol.format.GeoJSON();
var features_VZC_WP_VFD_5 = format_VZC_WP_VFD_5.readFeatures(json_VZC_WP_VFD_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_WP_VFD_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_WP_VFD_5.addFeatures(features_VZC_WP_VFD_5);
var lyr_VZC_WP_VFD_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_WP_VFD_5, 
                style: style_VZC_WP_VFD_5,
                popuplayertitle: 'VZC_WP_VFD',
                interactive: false,
                title: '<img src="styles/legend/VZC_WP_VFD_5.png" /> VZC_WP_VFD'
            });
var format_VZC_Whitton_VFD_6 = new ol.format.GeoJSON();
var features_VZC_Whitton_VFD_6 = format_VZC_Whitton_VFD_6.readFeatures(json_VZC_Whitton_VFD_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_Whitton_VFD_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_Whitton_VFD_6.addFeatures(features_VZC_Whitton_VFD_6);
var lyr_VZC_Whitton_VFD_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_Whitton_VFD_6, 
                style: style_VZC_Whitton_VFD_6,
                popuplayertitle: 'VZC_Whitton_VFD',
                interactive: false,
                title: '<img src="styles/legend/VZC_Whitton_VFD_6.png" /> VZC_Whitton_VFD'
            });
var format_VZC_Van_VFD_7 = new ol.format.GeoJSON();
var features_VZC_Van_VFD_7 = format_VZC_Van_VFD_7.readFeatures(json_VZC_Van_VFD_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_Van_VFD_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_Van_VFD_7.addFeatures(features_VZC_Van_VFD_7);
var lyr_VZC_Van_VFD_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_Van_VFD_7, 
                style: style_VZC_Van_VFD_7,
                popuplayertitle: 'VZC_Van_VFD',
                interactive: false,
                title: '<img src="styles/legend/VZC_Van_VFD_7.png" /> VZC_Van_VFD'
            });
var format_VZC_S_VZ_VFD_8 = new ol.format.GeoJSON();
var features_VZC_S_VZ_VFD_8 = format_VZC_S_VZ_VFD_8.readFeatures(json_VZC_S_VZ_VFD_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_S_VZ_VFD_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_S_VZ_VFD_8.addFeatures(features_VZC_S_VZ_VFD_8);
var lyr_VZC_S_VZ_VFD_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_S_VZ_VFD_8, 
                style: style_VZC_S_VZ_VFD_8,
                popuplayertitle: 'VZC_S_VZ_VFD',
                interactive: false,
                title: '<img src="styles/legend/VZC_S_VZ_VFD_8.png" /> VZC_S_VZ_VFD'
            });
var format_VZC_RO_VFD_9 = new ol.format.GeoJSON();
var features_VZC_RO_VFD_9 = format_VZC_RO_VFD_9.readFeatures(json_VZC_RO_VFD_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_RO_VFD_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_RO_VFD_9.addFeatures(features_VZC_RO_VFD_9);
var lyr_VZC_RO_VFD_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_RO_VFD_9, 
                style: style_VZC_RO_VFD_9,
                popuplayertitle: 'VZC_RO_VFD',
                interactive: false,
                title: '<img src="styles/legend/VZC_RO_VFD_9.png" /> VZC_RO_VFD'
            });
var format_VZC_MS_VFD_10 = new ol.format.GeoJSON();
var features_VZC_MS_VFD_10 = format_VZC_MS_VFD_10.readFeatures(json_VZC_MS_VFD_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_MS_VFD_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_MS_VFD_10.addFeatures(features_VZC_MS_VFD_10);
var lyr_VZC_MS_VFD_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_MS_VFD_10, 
                style: style_VZC_MS_VFD_10,
                popuplayertitle: 'VZC_MS_VFD',
                interactive: false,
                title: '<img src="styles/legend/VZC_MS_VFD_10.png" /> VZC_MS_VFD'
            });
var format_VZC_Midway_VFD_11 = new ol.format.GeoJSON();
var features_VZC_Midway_VFD_11 = format_VZC_Midway_VFD_11.readFeatures(json_VZC_Midway_VFD_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_Midway_VFD_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_Midway_VFD_11.addFeatures(features_VZC_Midway_VFD_11);
var lyr_VZC_Midway_VFD_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_Midway_VFD_11, 
                style: style_VZC_Midway_VFD_11,
                popuplayertitle: 'VZC_Midway_VFD',
                interactive: false,
                title: '<img src="styles/legend/VZC_Midway_VFD_11.png" /> VZC_Midway_VFD'
            });
var format_VZC_Mabank_VFD_12 = new ol.format.GeoJSON();
var features_VZC_Mabank_VFD_12 = format_VZC_Mabank_VFD_12.readFeatures(json_VZC_Mabank_VFD_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_Mabank_VFD_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_Mabank_VFD_12.addFeatures(features_VZC_Mabank_VFD_12);
var lyr_VZC_Mabank_VFD_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_Mabank_VFD_12, 
                style: style_VZC_Mabank_VFD_12,
                popuplayertitle: 'VZC_Mabank_VFD',
                interactive: false,
                title: '<img src="styles/legend/VZC_Mabank_VFD_12.png" /> VZC_Mabank_VFD'
            });
var format_VZC_GS_VFD_13 = new ol.format.GeoJSON();
var features_VZC_GS_VFD_13 = format_VZC_GS_VFD_13.readFeatures(json_VZC_GS_VFD_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_GS_VFD_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_GS_VFD_13.addFeatures(features_VZC_GS_VFD_13);
var lyr_VZC_GS_VFD_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_GS_VFD_13, 
                style: style_VZC_GS_VFD_13,
                popuplayertitle: 'VZC_GS_VFD',
                interactive: false,
                title: '<img src="styles/legend/VZC_GS_VFD_13.png" /> VZC_GS_VFD'
            });
var format_VZC_Fruitvale_VFD_14 = new ol.format.GeoJSON();
var features_VZC_Fruitvale_VFD_14 = format_VZC_Fruitvale_VFD_14.readFeatures(json_VZC_Fruitvale_VFD_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_Fruitvale_VFD_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_Fruitvale_VFD_14.addFeatures(features_VZC_Fruitvale_VFD_14);
var lyr_VZC_Fruitvale_VFD_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_Fruitvale_VFD_14, 
                style: style_VZC_Fruitvale_VFD_14,
                popuplayertitle: 'VZC_Fruitvale_VFD',
                interactive: false,
                title: '<img src="styles/legend/VZC_Fruitvale_VFD_14.png" /> VZC_Fruitvale_VFD'
            });
var format_VZC_Edgewood_VFD_15 = new ol.format.GeoJSON();
var features_VZC_Edgewood_VFD_15 = format_VZC_Edgewood_VFD_15.readFeatures(json_VZC_Edgewood_VFD_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_Edgewood_VFD_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_Edgewood_VFD_15.addFeatures(features_VZC_Edgewood_VFD_15);
var lyr_VZC_Edgewood_VFD_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_Edgewood_VFD_15, 
                style: style_VZC_Edgewood_VFD_15,
                popuplayertitle: 'VZC_Edgewood_VFD',
                interactive: false,
                title: '<img src="styles/legend/VZC_Edgewood_VFD_15.png" /> VZC_Edgewood_VFD'
            });
var format_VZC_Canton_VFD_16 = new ol.format.GeoJSON();
var features_VZC_Canton_VFD_16 = format_VZC_Canton_VFD_16.readFeatures(json_VZC_Canton_VFD_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_Canton_VFD_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_Canton_VFD_16.addFeatures(features_VZC_Canton_VFD_16);
var lyr_VZC_Canton_VFD_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_Canton_VFD_16, 
                style: style_VZC_Canton_VFD_16,
                popuplayertitle: 'VZC_Canton_VFD',
                interactive: false,
                title: '<img src="styles/legend/VZC_Canton_VFD_16.png" /> VZC_Canton_VFD'
            });
var format_VZC_Edom_VFD_17 = new ol.format.GeoJSON();
var features_VZC_Edom_VFD_17 = format_VZC_Edom_VFD_17.readFeatures(json_VZC_Edom_VFD_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_Edom_VFD_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_Edom_VFD_17.addFeatures(features_VZC_Edom_VFD_17);
var lyr_VZC_Edom_VFD_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_Edom_VFD_17, 
                style: style_VZC_Edom_VFD_17,
                popuplayertitle: 'VZC_Edom_VFD',
                interactive: false,
                title: '<img src="styles/legend/VZC_Edom_VFD_17.png" /> VZC_Edom_VFD'
            });
var format_VZC_BW_VFD_18 = new ol.format.GeoJSON();
var features_VZC_BW_VFD_18 = format_VZC_BW_VFD_18.readFeatures(json_VZC_BW_VFD_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_BW_VFD_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_BW_VFD_18.addFeatures(features_VZC_BW_VFD_18);
var lyr_VZC_BW_VFD_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_BW_VFD_18, 
                style: style_VZC_BW_VFD_18,
                popuplayertitle: 'VZC_BW_VFD',
                interactive: false,
                title: '<img src="styles/legend/VZC_BW_VFD_18.png" /> VZC_BW_VFD'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_VanZandtCounty_1.setVisible(true);lyr_VZC_ISD_2.setVisible(false);lyr_VZC_Precincts_3.setVisible(true);lyr_VZC_ESD3_4.setVisible(false);lyr_VZC_WP_VFD_5.setVisible(false);lyr_VZC_Whitton_VFD_6.setVisible(false);lyr_VZC_Van_VFD_7.setVisible(false);lyr_VZC_S_VZ_VFD_8.setVisible(false);lyr_VZC_RO_VFD_9.setVisible(false);lyr_VZC_MS_VFD_10.setVisible(false);lyr_VZC_Midway_VFD_11.setVisible(false);lyr_VZC_Mabank_VFD_12.setVisible(false);lyr_VZC_GS_VFD_13.setVisible(false);lyr_VZC_Fruitvale_VFD_14.setVisible(false);lyr_VZC_Edgewood_VFD_15.setVisible(false);lyr_VZC_Canton_VFD_16.setVisible(false);lyr_VZC_Edom_VFD_17.setVisible(false);lyr_VZC_BW_VFD_18.setVisible(false);
var layersList = [lyr_GoogleMaps_0,lyr_VanZandtCounty_1,lyr_VZC_ISD_2,lyr_VZC_Precincts_3,lyr_VZC_ESD3_4,lyr_VZC_WP_VFD_5,lyr_VZC_Whitton_VFD_6,lyr_VZC_Van_VFD_7,lyr_VZC_S_VZ_VFD_8,lyr_VZC_RO_VFD_9,lyr_VZC_MS_VFD_10,lyr_VZC_Midway_VFD_11,lyr_VZC_Mabank_VFD_12,lyr_VZC_GS_VFD_13,lyr_VZC_Fruitvale_VFD_14,lyr_VZC_Edgewood_VFD_15,lyr_VZC_Canton_VFD_16,lyr_VZC_Edom_VFD_17,lyr_VZC_BW_VFD_18];
lyr_VanZandtCounty_1.set('fieldAliases', {'CMPTRL_CNT': 'CMPTRL_CNT', 'DPS_CNTY_N': 'DPS_CNTY_N', 'FIPS_ST_CN': 'FIPS_ST_CN', 'TXDOT_CNTY': 'TXDOT_CNTY', 'TXDOT_DIST': 'TXDOT_DIST', 'CNTY_NM': 'CNTY_NM', 'GID': 'GID', });
lyr_VZC_ISD_2.set('fieldAliases', {'GEOID20': 'GEOID20', 'NAME20': 'NAME20', 'SDLEA': 'SDLEA', 'NAME': 'NAME', 'NAME2': 'NAME2', 'DISTRICT_N': 'DISTRICT_N', 'DISTRICT': 'DISTRICT', 'DISTRICT_C': 'DISTRICT_C', 'NCES_DISTR': 'NCES_DISTR', 'COLOR': 'COLOR', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'Web Site': 'Web Site', });
lyr_VZC_Precincts_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CNTY': 'CNTY', 'COLOR': 'COLOR', 'PREC': 'Voting Precinct', 'PCTKEY': 'PCTKEY', 'cntykey': 'cntykey', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'LOC': 'Voting Location', 'LINK': 'Address', });
lyr_VZC_ESD3_4.set('fieldAliases', {'Zone': 'Zone', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_VZC_WP_VFD_5.set('fieldAliases', {'COUNTY_SUB': 'COUNTY_SUB', 'SOURCE': 'SOURCE', 'USER_ID': 'USER_ID', 'ESN_NUM': 'ESN_NUM', 'ESN_CITY': 'ESN_CITY', 'ESN_COUNTY': 'ESN_COUNTY', 'ESN_STATE': 'ESN_STATE', 'ESN_LAW': 'ESN_LAW', 'ESN_FIRE': 'ESN_FIRE', 'ESN_EMS': 'ESN_EMS', 'CREATION_U': 'CREATION_U', 'MODIFY_USE': 'MODIFY_USE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'C1_Excepti': 'C1_Excepti', 'TEST': 'TEST', 'DiscrpAgID': 'DiscrpAgID', 'DateUpdate': 'DateUpdate', 'Effective': 'Effective', 'Expire': 'Expire', 'ES_NGUID': 'ES_NGUID', 'State': 'State', 'Fire_Agenc': 'Fire_Agenc', 'Law_Agency': 'Law_Agency', 'EMS_Agency': 'EMS_Agency', 'Fire_Servi': 'Fire_Servi', 'Law_Servic': 'Law_Servic', 'EMS_Servic': 'EMS_Servic', 'Fire_Ser_1': 'Fire_Ser_1', 'Law_Serv_1': 'Law_Serv_1', 'EMS_Serv_1': 'EMS_Serv_1', 'Fire_AVcar': 'Fire_AVcar', 'Law_AVcard': 'Law_AVcard', 'EMS_AVcard': 'EMS_AVcard', 'GC_Excepti': 'GC_Excepti', 'Fire_Ser_2': 'Fire_Ser_2', 'Law_Serv_2': 'Law_Serv_2', 'EMS_Serv_2': 'EMS_Serv_2', 'GlobalID': 'GlobalID', 'last_edi_1': 'last_edi_1', 'PSAP_Servi': 'PSAP_Servi', });
lyr_VZC_Whitton_VFD_6.set('fieldAliases', {'COUNTY_SUB': 'COUNTY_SUB', 'SOURCE': 'SOURCE', 'USER_ID': 'USER_ID', 'ESN_NUM': 'ESN_NUM', 'ESN_CITY': 'ESN_CITY', 'ESN_COUNTY': 'ESN_COUNTY', 'ESN_STATE': 'ESN_STATE', 'ESN_LAW': 'ESN_LAW', 'ESN_FIRE': 'ESN_FIRE', 'ESN_EMS': 'ESN_EMS', 'CREATION_U': 'CREATION_U', 'MODIFY_USE': 'MODIFY_USE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'C1_Excepti': 'C1_Excepti', 'TEST': 'TEST', 'DiscrpAgID': 'DiscrpAgID', 'DateUpdate': 'DateUpdate', 'Effective': 'Effective', 'Expire': 'Expire', 'ES_NGUID': 'ES_NGUID', 'State': 'State', 'Fire_Agenc': 'Fire_Agenc', 'Law_Agency': 'Law_Agency', 'EMS_Agency': 'EMS_Agency', 'Fire_Servi': 'Fire_Servi', 'Law_Servic': 'Law_Servic', 'EMS_Servic': 'EMS_Servic', 'Fire_Ser_1': 'Fire_Ser_1', 'Law_Serv_1': 'Law_Serv_1', 'EMS_Serv_1': 'EMS_Serv_1', 'Fire_AVcar': 'Fire_AVcar', 'Law_AVcard': 'Law_AVcard', 'EMS_AVcard': 'EMS_AVcard', 'GC_Excepti': 'GC_Excepti', 'Fire_Ser_2': 'Fire_Ser_2', 'Law_Serv_2': 'Law_Serv_2', 'EMS_Serv_2': 'EMS_Serv_2', 'GlobalID': 'GlobalID', 'last_edi_1': 'last_edi_1', 'PSAP_Servi': 'PSAP_Servi', });
lyr_VZC_Van_VFD_7.set('fieldAliases', {'COUNTY_SUB': 'COUNTY_SUB', 'SOURCE': 'SOURCE', 'USER_ID': 'USER_ID', 'ESN_NUM': 'ESN_NUM', 'ESN_CITY': 'ESN_CITY', 'ESN_COUNTY': 'ESN_COUNTY', 'ESN_STATE': 'ESN_STATE', 'ESN_LAW': 'ESN_LAW', 'ESN_FIRE': 'ESN_FIRE', 'ESN_EMS': 'ESN_EMS', 'CREATION_U': 'CREATION_U', 'MODIFY_USE': 'MODIFY_USE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'C1_Excepti': 'C1_Excepti', 'TEST': 'TEST', 'DiscrpAgID': 'DiscrpAgID', 'DateUpdate': 'DateUpdate', 'Effective': 'Effective', 'Expire': 'Expire', 'ES_NGUID': 'ES_NGUID', 'State': 'State', 'Fire_Agenc': 'Fire_Agenc', 'Law_Agency': 'Law_Agency', 'EMS_Agency': 'EMS_Agency', 'Fire_Servi': 'Fire_Servi', 'Law_Servic': 'Law_Servic', 'EMS_Servic': 'EMS_Servic', 'Fire_Ser_1': 'Fire_Ser_1', 'Law_Serv_1': 'Law_Serv_1', 'EMS_Serv_1': 'EMS_Serv_1', 'Fire_AVcar': 'Fire_AVcar', 'Law_AVcard': 'Law_AVcard', 'EMS_AVcard': 'EMS_AVcard', 'GC_Excepti': 'GC_Excepti', 'Fire_Ser_2': 'Fire_Ser_2', 'Law_Serv_2': 'Law_Serv_2', 'EMS_Serv_2': 'EMS_Serv_2', 'GlobalID': 'GlobalID', 'last_edi_1': 'last_edi_1', 'PSAP_Servi': 'PSAP_Servi', });
lyr_VZC_S_VZ_VFD_8.set('fieldAliases', {'COUNTY_SUB': 'COUNTY_SUB', 'SOURCE': 'SOURCE', 'USER_ID': 'USER_ID', 'ESN_NUM': 'ESN_NUM', 'ESN_CITY': 'ESN_CITY', 'ESN_COUNTY': 'ESN_COUNTY', 'ESN_STATE': 'ESN_STATE', 'ESN_LAW': 'ESN_LAW', 'ESN_FIRE': 'ESN_FIRE', 'ESN_EMS': 'ESN_EMS', 'CREATION_U': 'CREATION_U', 'MODIFY_USE': 'MODIFY_USE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'C1_Excepti': 'C1_Excepti', 'TEST': 'TEST', 'DiscrpAgID': 'DiscrpAgID', 'DateUpdate': 'DateUpdate', 'Effective': 'Effective', 'Expire': 'Expire', 'ES_NGUID': 'ES_NGUID', 'State': 'State', 'Fire_Agenc': 'Fire_Agenc', 'Law_Agency': 'Law_Agency', 'EMS_Agency': 'EMS_Agency', 'Fire_Servi': 'Fire_Servi', 'Law_Servic': 'Law_Servic', 'EMS_Servic': 'EMS_Servic', 'Fire_Ser_1': 'Fire_Ser_1', 'Law_Serv_1': 'Law_Serv_1', 'EMS_Serv_1': 'EMS_Serv_1', 'Fire_AVcar': 'Fire_AVcar', 'Law_AVcard': 'Law_AVcard', 'EMS_AVcard': 'EMS_AVcard', 'GC_Excepti': 'GC_Excepti', 'Fire_Ser_2': 'Fire_Ser_2', 'Law_Serv_2': 'Law_Serv_2', 'EMS_Serv_2': 'EMS_Serv_2', 'GlobalID': 'GlobalID', 'last_edi_1': 'last_edi_1', 'PSAP_Servi': 'PSAP_Servi', });
lyr_VZC_RO_VFD_9.set('fieldAliases', {'COUNTY_SUB': 'COUNTY_SUB', 'SOURCE': 'SOURCE', 'USER_ID': 'USER_ID', 'ESN_NUM': 'ESN_NUM', 'ESN_CITY': 'ESN_CITY', 'ESN_COUNTY': 'ESN_COUNTY', 'ESN_STATE': 'ESN_STATE', 'ESN_LAW': 'ESN_LAW', 'ESN_FIRE': 'ESN_FIRE', 'ESN_EMS': 'ESN_EMS', 'CREATION_U': 'CREATION_U', 'MODIFY_USE': 'MODIFY_USE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'C1_Excepti': 'C1_Excepti', 'TEST': 'TEST', 'DiscrpAgID': 'DiscrpAgID', 'DateUpdate': 'DateUpdate', 'Effective': 'Effective', 'Expire': 'Expire', 'ES_NGUID': 'ES_NGUID', 'State': 'State', 'Fire_Agenc': 'Fire_Agenc', 'Law_Agency': 'Law_Agency', 'EMS_Agency': 'EMS_Agency', 'Fire_Servi': 'Fire_Servi', 'Law_Servic': 'Law_Servic', 'EMS_Servic': 'EMS_Servic', 'Fire_Ser_1': 'Fire_Ser_1', 'Law_Serv_1': 'Law_Serv_1', 'EMS_Serv_1': 'EMS_Serv_1', 'Fire_AVcar': 'Fire_AVcar', 'Law_AVcard': 'Law_AVcard', 'EMS_AVcard': 'EMS_AVcard', 'GC_Excepti': 'GC_Excepti', 'Fire_Ser_2': 'Fire_Ser_2', 'Law_Serv_2': 'Law_Serv_2', 'EMS_Serv_2': 'EMS_Serv_2', 'GlobalID': 'GlobalID', 'last_edi_1': 'last_edi_1', 'PSAP_Servi': 'PSAP_Servi', });
lyr_VZC_MS_VFD_10.set('fieldAliases', {'COUNTY_SUB': 'COUNTY_SUB', 'SOURCE': 'SOURCE', 'USER_ID': 'USER_ID', 'ESN_NUM': 'ESN_NUM', 'ESN_CITY': 'ESN_CITY', 'ESN_COUNTY': 'ESN_COUNTY', 'ESN_STATE': 'ESN_STATE', 'ESN_LAW': 'ESN_LAW', 'ESN_FIRE': 'ESN_FIRE', 'ESN_EMS': 'ESN_EMS', 'CREATION_U': 'CREATION_U', 'MODIFY_USE': 'MODIFY_USE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'C1_Excepti': 'C1_Excepti', 'TEST': 'TEST', 'DiscrpAgID': 'DiscrpAgID', 'DateUpdate': 'DateUpdate', 'Effective': 'Effective', 'Expire': 'Expire', 'ES_NGUID': 'ES_NGUID', 'State': 'State', 'Fire_Agenc': 'Fire_Agenc', 'Law_Agency': 'Law_Agency', 'EMS_Agency': 'EMS_Agency', 'Fire_Servi': 'Fire_Servi', 'Law_Servic': 'Law_Servic', 'EMS_Servic': 'EMS_Servic', 'Fire_Ser_1': 'Fire_Ser_1', 'Law_Serv_1': 'Law_Serv_1', 'EMS_Serv_1': 'EMS_Serv_1', 'Fire_AVcar': 'Fire_AVcar', 'Law_AVcard': 'Law_AVcard', 'EMS_AVcard': 'EMS_AVcard', 'GC_Excepti': 'GC_Excepti', 'Fire_Ser_2': 'Fire_Ser_2', 'Law_Serv_2': 'Law_Serv_2', 'EMS_Serv_2': 'EMS_Serv_2', 'GlobalID': 'GlobalID', 'last_edi_1': 'last_edi_1', 'PSAP_Servi': 'PSAP_Servi', });
lyr_VZC_Midway_VFD_11.set('fieldAliases', {'COUNTY_SUB': 'COUNTY_SUB', 'SOURCE': 'SOURCE', 'USER_ID': 'USER_ID', 'ESN_NUM': 'ESN_NUM', 'ESN_CITY': 'ESN_CITY', 'ESN_COUNTY': 'ESN_COUNTY', 'ESN_STATE': 'ESN_STATE', 'ESN_LAW': 'ESN_LAW', 'ESN_FIRE': 'ESN_FIRE', 'ESN_EMS': 'ESN_EMS', 'CREATION_U': 'CREATION_U', 'MODIFY_USE': 'MODIFY_USE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'C1_Excepti': 'C1_Excepti', 'TEST': 'TEST', 'DiscrpAgID': 'DiscrpAgID', 'DateUpdate': 'DateUpdate', 'Effective': 'Effective', 'Expire': 'Expire', 'ES_NGUID': 'ES_NGUID', 'State': 'State', 'Fire_Agenc': 'Fire_Agenc', 'Law_Agency': 'Law_Agency', 'EMS_Agency': 'EMS_Agency', 'Fire_Servi': 'Fire_Servi', 'Law_Servic': 'Law_Servic', 'EMS_Servic': 'EMS_Servic', 'Fire_Ser_1': 'Fire_Ser_1', 'Law_Serv_1': 'Law_Serv_1', 'EMS_Serv_1': 'EMS_Serv_1', 'Fire_AVcar': 'Fire_AVcar', 'Law_AVcard': 'Law_AVcard', 'EMS_AVcard': 'EMS_AVcard', 'GC_Excepti': 'GC_Excepti', 'Fire_Ser_2': 'Fire_Ser_2', 'Law_Serv_2': 'Law_Serv_2', 'EMS_Serv_2': 'EMS_Serv_2', 'GlobalID': 'GlobalID', 'last_edi_1': 'last_edi_1', 'PSAP_Servi': 'PSAP_Servi', });
lyr_VZC_Mabank_VFD_12.set('fieldAliases', {'COUNTY_SUB': 'COUNTY_SUB', 'SOURCE': 'SOURCE', 'USER_ID': 'USER_ID', 'ESN_NUM': 'ESN_NUM', 'ESN_CITY': 'ESN_CITY', 'ESN_COUNTY': 'ESN_COUNTY', 'ESN_STATE': 'ESN_STATE', 'ESN_LAW': 'ESN_LAW', 'ESN_FIRE': 'ESN_FIRE', 'ESN_EMS': 'ESN_EMS', 'CREATION_U': 'CREATION_U', 'MODIFY_USE': 'MODIFY_USE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'C1_Excepti': 'C1_Excepti', 'TEST': 'TEST', 'DiscrpAgID': 'DiscrpAgID', 'DateUpdate': 'DateUpdate', 'Effective': 'Effective', 'Expire': 'Expire', 'ES_NGUID': 'ES_NGUID', 'State': 'State', 'Fire_Agenc': 'Fire_Agenc', 'Law_Agency': 'Law_Agency', 'EMS_Agency': 'EMS_Agency', 'Fire_Servi': 'Fire_Servi', 'Law_Servic': 'Law_Servic', 'EMS_Servic': 'EMS_Servic', 'Fire_Ser_1': 'Fire_Ser_1', 'Law_Serv_1': 'Law_Serv_1', 'EMS_Serv_1': 'EMS_Serv_1', 'Fire_AVcar': 'Fire_AVcar', 'Law_AVcard': 'Law_AVcard', 'EMS_AVcard': 'EMS_AVcard', 'GC_Excepti': 'GC_Excepti', 'Fire_Ser_2': 'Fire_Ser_2', 'Law_Serv_2': 'Law_Serv_2', 'EMS_Serv_2': 'EMS_Serv_2', 'GlobalID': 'GlobalID', 'last_edi_1': 'last_edi_1', 'PSAP_Servi': 'PSAP_Servi', });
lyr_VZC_GS_VFD_13.set('fieldAliases', {'COUNTY_SUB': 'COUNTY_SUB', 'SOURCE': 'SOURCE', 'USER_ID': 'USER_ID', 'ESN_NUM': 'ESN_NUM', 'ESN_CITY': 'ESN_CITY', 'ESN_COUNTY': 'ESN_COUNTY', 'ESN_STATE': 'ESN_STATE', 'ESN_LAW': 'ESN_LAW', 'ESN_FIRE': 'ESN_FIRE', 'ESN_EMS': 'ESN_EMS', 'CREATION_U': 'CREATION_U', 'MODIFY_USE': 'MODIFY_USE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'C1_Excepti': 'C1_Excepti', 'TEST': 'TEST', 'DiscrpAgID': 'DiscrpAgID', 'DateUpdate': 'DateUpdate', 'Effective': 'Effective', 'Expire': 'Expire', 'ES_NGUID': 'ES_NGUID', 'State': 'State', 'Fire_Agenc': 'Fire_Agenc', 'Law_Agency': 'Law_Agency', 'EMS_Agency': 'EMS_Agency', 'Fire_Servi': 'Fire_Servi', 'Law_Servic': 'Law_Servic', 'EMS_Servic': 'EMS_Servic', 'Fire_Ser_1': 'Fire_Ser_1', 'Law_Serv_1': 'Law_Serv_1', 'EMS_Serv_1': 'EMS_Serv_1', 'Fire_AVcar': 'Fire_AVcar', 'Law_AVcard': 'Law_AVcard', 'EMS_AVcard': 'EMS_AVcard', 'GC_Excepti': 'GC_Excepti', 'Fire_Ser_2': 'Fire_Ser_2', 'Law_Serv_2': 'Law_Serv_2', 'EMS_Serv_2': 'EMS_Serv_2', 'GlobalID': 'GlobalID', 'last_edi_1': 'last_edi_1', 'PSAP_Servi': 'PSAP_Servi', });
lyr_VZC_Fruitvale_VFD_14.set('fieldAliases', {'COUNTY_SUB': 'COUNTY_SUB', 'SOURCE': 'SOURCE', 'USER_ID': 'USER_ID', 'ESN_NUM': 'ESN_NUM', 'ESN_CITY': 'ESN_CITY', 'ESN_COUNTY': 'ESN_COUNTY', 'ESN_STATE': 'ESN_STATE', 'ESN_LAW': 'ESN_LAW', 'ESN_FIRE': 'ESN_FIRE', 'ESN_EMS': 'ESN_EMS', 'CREATION_U': 'CREATION_U', 'MODIFY_USE': 'MODIFY_USE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'C1_Excepti': 'C1_Excepti', 'TEST': 'TEST', 'DiscrpAgID': 'DiscrpAgID', 'DateUpdate': 'DateUpdate', 'Effective': 'Effective', 'Expire': 'Expire', 'ES_NGUID': 'ES_NGUID', 'State': 'State', 'Fire_Agenc': 'Fire_Agenc', 'Law_Agency': 'Law_Agency', 'EMS_Agency': 'EMS_Agency', 'Fire_Servi': 'Fire_Servi', 'Law_Servic': 'Law_Servic', 'EMS_Servic': 'EMS_Servic', 'Fire_Ser_1': 'Fire_Ser_1', 'Law_Serv_1': 'Law_Serv_1', 'EMS_Serv_1': 'EMS_Serv_1', 'Fire_AVcar': 'Fire_AVcar', 'Law_AVcard': 'Law_AVcard', 'EMS_AVcard': 'EMS_AVcard', 'GC_Excepti': 'GC_Excepti', 'Fire_Ser_2': 'Fire_Ser_2', 'Law_Serv_2': 'Law_Serv_2', 'EMS_Serv_2': 'EMS_Serv_2', 'GlobalID': 'GlobalID', 'last_edi_1': 'last_edi_1', 'PSAP_Servi': 'PSAP_Servi', });
lyr_VZC_Edgewood_VFD_15.set('fieldAliases', {'COUNTY_SUB': 'COUNTY_SUB', 'SOURCE': 'SOURCE', 'USER_ID': 'USER_ID', 'ESN_NUM': 'ESN_NUM', 'ESN_CITY': 'ESN_CITY', 'ESN_COUNTY': 'ESN_COUNTY', 'ESN_STATE': 'ESN_STATE', 'ESN_LAW': 'ESN_LAW', 'ESN_FIRE': 'ESN_FIRE', 'ESN_EMS': 'ESN_EMS', 'CREATION_U': 'CREATION_U', 'MODIFY_USE': 'MODIFY_USE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'C1_Excepti': 'C1_Excepti', 'TEST': 'TEST', 'DiscrpAgID': 'DiscrpAgID', 'DateUpdate': 'DateUpdate', 'Effective': 'Effective', 'Expire': 'Expire', 'ES_NGUID': 'ES_NGUID', 'State': 'State', 'Fire_Agenc': 'Fire_Agenc', 'Law_Agency': 'Law_Agency', 'EMS_Agency': 'EMS_Agency', 'Fire_Servi': 'Fire_Servi', 'Law_Servic': 'Law_Servic', 'EMS_Servic': 'EMS_Servic', 'Fire_Ser_1': 'Fire_Ser_1', 'Law_Serv_1': 'Law_Serv_1', 'EMS_Serv_1': 'EMS_Serv_1', 'Fire_AVcar': 'Fire_AVcar', 'Law_AVcard': 'Law_AVcard', 'EMS_AVcard': 'EMS_AVcard', 'GC_Excepti': 'GC_Excepti', 'Fire_Ser_2': 'Fire_Ser_2', 'Law_Serv_2': 'Law_Serv_2', 'EMS_Serv_2': 'EMS_Serv_2', 'GlobalID': 'GlobalID', 'last_edi_1': 'last_edi_1', 'PSAP_Servi': 'PSAP_Servi', });
lyr_VZC_Canton_VFD_16.set('fieldAliases', {'COUNTY_SUB': 'COUNTY_SUB', 'SOURCE': 'SOURCE', 'USER_ID': 'USER_ID', 'ESN_NUM': 'ESN_NUM', 'ESN_CITY': 'ESN_CITY', 'ESN_COUNTY': 'ESN_COUNTY', 'ESN_STATE': 'ESN_STATE', 'ESN_LAW': 'ESN_LAW', 'ESN_FIRE': 'ESN_FIRE', 'ESN_EMS': 'ESN_EMS', 'CREATION_U': 'CREATION_U', 'MODIFY_USE': 'MODIFY_USE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'C1_Excepti': 'C1_Excepti', 'TEST': 'TEST', 'DiscrpAgID': 'DiscrpAgID', 'DateUpdate': 'DateUpdate', 'Effective': 'Effective', 'Expire': 'Expire', 'ES_NGUID': 'ES_NGUID', 'State': 'State', 'Fire_Agenc': 'Fire_Agenc', 'Law_Agency': 'Law_Agency', 'EMS_Agency': 'EMS_Agency', 'Fire_Servi': 'Fire_Servi', 'Law_Servic': 'Law_Servic', 'EMS_Servic': 'EMS_Servic', 'Fire_Ser_1': 'Fire_Ser_1', 'Law_Serv_1': 'Law_Serv_1', 'EMS_Serv_1': 'EMS_Serv_1', 'Fire_AVcar': 'Fire_AVcar', 'Law_AVcard': 'Law_AVcard', 'EMS_AVcard': 'EMS_AVcard', 'GC_Excepti': 'GC_Excepti', 'Fire_Ser_2': 'Fire_Ser_2', 'Law_Serv_2': 'Law_Serv_2', 'EMS_Serv_2': 'EMS_Serv_2', 'GlobalID': 'GlobalID', 'last_edi_1': 'last_edi_1', 'PSAP_Servi': 'PSAP_Servi', });
lyr_VZC_Edom_VFD_17.set('fieldAliases', {'COUNTY_SUB': 'COUNTY_SUB', 'SOURCE': 'SOURCE', 'USER_ID': 'USER_ID', 'ESN_NUM': 'ESN_NUM', 'ESN_CITY': 'ESN_CITY', 'ESN_COUNTY': 'ESN_COUNTY', 'ESN_STATE': 'ESN_STATE', 'ESN_LAW': 'ESN_LAW', 'ESN_FIRE': 'ESN_FIRE', 'ESN_EMS': 'ESN_EMS', 'CREATION_U': 'CREATION_U', 'MODIFY_USE': 'MODIFY_USE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'C1_Excepti': 'C1_Excepti', 'TEST': 'TEST', 'DiscrpAgID': 'DiscrpAgID', 'DateUpdate': 'DateUpdate', 'Effective': 'Effective', 'Expire': 'Expire', 'ES_NGUID': 'ES_NGUID', 'State': 'State', 'Fire_Agenc': 'Fire_Agenc', 'Law_Agency': 'Law_Agency', 'EMS_Agency': 'EMS_Agency', 'Fire_Servi': 'Fire_Servi', 'Law_Servic': 'Law_Servic', 'EMS_Servic': 'EMS_Servic', 'Fire_Ser_1': 'Fire_Ser_1', 'Law_Serv_1': 'Law_Serv_1', 'EMS_Serv_1': 'EMS_Serv_1', 'Fire_AVcar': 'Fire_AVcar', 'Law_AVcard': 'Law_AVcard', 'EMS_AVcard': 'EMS_AVcard', 'GC_Excepti': 'GC_Excepti', 'Fire_Ser_2': 'Fire_Ser_2', 'Law_Serv_2': 'Law_Serv_2', 'EMS_Serv_2': 'EMS_Serv_2', 'GlobalID': 'GlobalID', 'last_edi_1': 'last_edi_1', 'PSAP_Servi': 'PSAP_Servi', });
lyr_VZC_BW_VFD_18.set('fieldAliases', {'COUNTY_SUB': 'COUNTY_SUB', 'SOURCE': 'SOURCE', 'USER_ID': 'USER_ID', 'ESN_NUM': 'ESN_NUM', 'ESN_CITY': 'ESN_CITY', 'ESN_COUNTY': 'ESN_COUNTY', 'ESN_STATE': 'ESN_STATE', 'ESN_LAW': 'ESN_LAW', 'ESN_FIRE': 'ESN_FIRE', 'ESN_EMS': 'ESN_EMS', 'CREATION_U': 'CREATION_U', 'MODIFY_USE': 'MODIFY_USE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'C1_Excepti': 'C1_Excepti', 'TEST': 'TEST', 'DiscrpAgID': 'DiscrpAgID', 'DateUpdate': 'DateUpdate', 'Effective': 'Effective', 'Expire': 'Expire', 'ES_NGUID': 'ES_NGUID', 'State': 'State', 'Fire_Agenc': 'Fire_Agenc', 'Law_Agency': 'Law_Agency', 'EMS_Agency': 'EMS_Agency', 'Fire_Servi': 'Fire_Servi', 'Law_Servic': 'Law_Servic', 'EMS_Servic': 'EMS_Servic', 'Fire_Ser_1': 'Fire_Ser_1', 'Law_Serv_1': 'Law_Serv_1', 'EMS_Serv_1': 'EMS_Serv_1', 'Fire_AVcar': 'Fire_AVcar', 'Law_AVcard': 'Law_AVcard', 'EMS_AVcard': 'EMS_AVcard', 'GC_Excepti': 'GC_Excepti', 'Fire_Ser_2': 'Fire_Ser_2', 'Law_Serv_2': 'Law_Serv_2', 'EMS_Serv_2': 'EMS_Serv_2', 'GlobalID': 'GlobalID', 'last_edi_1': 'last_edi_1', 'PSAP_Servi': 'PSAP_Servi', });
lyr_VanZandtCounty_1.set('fieldImages', {'CMPTRL_CNT': 'TextEdit', 'DPS_CNTY_N': 'TextEdit', 'FIPS_ST_CN': 'TextEdit', 'TXDOT_CNTY': 'TextEdit', 'TXDOT_DIST': 'TextEdit', 'CNTY_NM': 'TextEdit', 'GID': 'TextEdit', });
lyr_VZC_ISD_2.set('fieldImages', {'GEOID20': 'TextEdit', 'NAME20': 'TextEdit', 'SDLEA': 'TextEdit', 'NAME': 'TextEdit', 'NAME2': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DISTRICT': 'TextEdit', 'DISTRICT_C': 'TextEdit', 'NCES_DISTR': 'TextEdit', 'COLOR': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_len': 'TextEdit', 'Web Site': '', });
lyr_VZC_Precincts_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'CNTY': 'TextEdit', 'COLOR': 'TextEdit', 'PREC': 'TextEdit', 'PCTKEY': 'TextEdit', 'cntykey': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_len': 'TextEdit', 'LOC': 'TextEdit', 'LINK': 'TextEdit', });
lyr_VZC_ESD3_4.set('fieldImages', {'Zone': '', 'Shape_STAr': '', 'Shape_STLe': '', });
lyr_VZC_WP_VFD_5.set('fieldImages', {'COUNTY_SUB': '', 'SOURCE': '', 'USER_ID': '', 'ESN_NUM': '', 'ESN_CITY': '', 'ESN_COUNTY': '', 'ESN_STATE': '', 'ESN_LAW': '', 'ESN_FIRE': '', 'ESN_EMS': '', 'CREATION_U': '', 'MODIFY_USE': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'C1_Excepti': '', 'TEST': '', 'DiscrpAgID': '', 'DateUpdate': '', 'Effective': '', 'Expire': '', 'ES_NGUID': '', 'State': '', 'Fire_Agenc': '', 'Law_Agency': '', 'EMS_Agency': '', 'Fire_Servi': '', 'Law_Servic': '', 'EMS_Servic': '', 'Fire_Ser_1': '', 'Law_Serv_1': '', 'EMS_Serv_1': '', 'Fire_AVcar': '', 'Law_AVcard': '', 'EMS_AVcard': '', 'GC_Excepti': '', 'Fire_Ser_2': '', 'Law_Serv_2': '', 'EMS_Serv_2': '', 'GlobalID': '', 'last_edi_1': '', 'PSAP_Servi': '', });
lyr_VZC_Whitton_VFD_6.set('fieldImages', {'COUNTY_SUB': '', 'SOURCE': '', 'USER_ID': '', 'ESN_NUM': '', 'ESN_CITY': '', 'ESN_COUNTY': '', 'ESN_STATE': '', 'ESN_LAW': '', 'ESN_FIRE': '', 'ESN_EMS': '', 'CREATION_U': '', 'MODIFY_USE': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'C1_Excepti': '', 'TEST': '', 'DiscrpAgID': '', 'DateUpdate': '', 'Effective': '', 'Expire': '', 'ES_NGUID': '', 'State': '', 'Fire_Agenc': '', 'Law_Agency': '', 'EMS_Agency': '', 'Fire_Servi': '', 'Law_Servic': '', 'EMS_Servic': '', 'Fire_Ser_1': '', 'Law_Serv_1': '', 'EMS_Serv_1': '', 'Fire_AVcar': '', 'Law_AVcard': '', 'EMS_AVcard': '', 'GC_Excepti': '', 'Fire_Ser_2': '', 'Law_Serv_2': '', 'EMS_Serv_2': '', 'GlobalID': '', 'last_edi_1': '', 'PSAP_Servi': '', });
lyr_VZC_Van_VFD_7.set('fieldImages', {'COUNTY_SUB': '', 'SOURCE': '', 'USER_ID': '', 'ESN_NUM': '', 'ESN_CITY': '', 'ESN_COUNTY': '', 'ESN_STATE': '', 'ESN_LAW': '', 'ESN_FIRE': '', 'ESN_EMS': '', 'CREATION_U': '', 'MODIFY_USE': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'C1_Excepti': '', 'TEST': '', 'DiscrpAgID': '', 'DateUpdate': '', 'Effective': '', 'Expire': '', 'ES_NGUID': '', 'State': '', 'Fire_Agenc': '', 'Law_Agency': '', 'EMS_Agency': '', 'Fire_Servi': '', 'Law_Servic': '', 'EMS_Servic': '', 'Fire_Ser_1': '', 'Law_Serv_1': '', 'EMS_Serv_1': '', 'Fire_AVcar': '', 'Law_AVcard': '', 'EMS_AVcard': '', 'GC_Excepti': '', 'Fire_Ser_2': '', 'Law_Serv_2': '', 'EMS_Serv_2': '', 'GlobalID': '', 'last_edi_1': '', 'PSAP_Servi': '', });
lyr_VZC_S_VZ_VFD_8.set('fieldImages', {'COUNTY_SUB': '', 'SOURCE': '', 'USER_ID': '', 'ESN_NUM': '', 'ESN_CITY': '', 'ESN_COUNTY': '', 'ESN_STATE': '', 'ESN_LAW': '', 'ESN_FIRE': '', 'ESN_EMS': '', 'CREATION_U': '', 'MODIFY_USE': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'C1_Excepti': '', 'TEST': '', 'DiscrpAgID': '', 'DateUpdate': '', 'Effective': '', 'Expire': '', 'ES_NGUID': '', 'State': '', 'Fire_Agenc': '', 'Law_Agency': '', 'EMS_Agency': '', 'Fire_Servi': '', 'Law_Servic': '', 'EMS_Servic': '', 'Fire_Ser_1': '', 'Law_Serv_1': '', 'EMS_Serv_1': '', 'Fire_AVcar': '', 'Law_AVcard': '', 'EMS_AVcard': '', 'GC_Excepti': '', 'Fire_Ser_2': '', 'Law_Serv_2': '', 'EMS_Serv_2': '', 'GlobalID': '', 'last_edi_1': '', 'PSAP_Servi': '', });
lyr_VZC_RO_VFD_9.set('fieldImages', {'COUNTY_SUB': '', 'SOURCE': '', 'USER_ID': '', 'ESN_NUM': '', 'ESN_CITY': '', 'ESN_COUNTY': '', 'ESN_STATE': '', 'ESN_LAW': '', 'ESN_FIRE': '', 'ESN_EMS': '', 'CREATION_U': '', 'MODIFY_USE': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'C1_Excepti': '', 'TEST': '', 'DiscrpAgID': '', 'DateUpdate': '', 'Effective': '', 'Expire': '', 'ES_NGUID': '', 'State': '', 'Fire_Agenc': '', 'Law_Agency': '', 'EMS_Agency': '', 'Fire_Servi': '', 'Law_Servic': '', 'EMS_Servic': '', 'Fire_Ser_1': '', 'Law_Serv_1': '', 'EMS_Serv_1': '', 'Fire_AVcar': '', 'Law_AVcard': '', 'EMS_AVcard': '', 'GC_Excepti': '', 'Fire_Ser_2': '', 'Law_Serv_2': '', 'EMS_Serv_2': '', 'GlobalID': '', 'last_edi_1': '', 'PSAP_Servi': '', });
lyr_VZC_MS_VFD_10.set('fieldImages', {'COUNTY_SUB': '', 'SOURCE': '', 'USER_ID': '', 'ESN_NUM': '', 'ESN_CITY': '', 'ESN_COUNTY': '', 'ESN_STATE': '', 'ESN_LAW': '', 'ESN_FIRE': '', 'ESN_EMS': '', 'CREATION_U': '', 'MODIFY_USE': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'C1_Excepti': '', 'TEST': '', 'DiscrpAgID': '', 'DateUpdate': '', 'Effective': '', 'Expire': '', 'ES_NGUID': '', 'State': '', 'Fire_Agenc': '', 'Law_Agency': '', 'EMS_Agency': '', 'Fire_Servi': '', 'Law_Servic': '', 'EMS_Servic': '', 'Fire_Ser_1': '', 'Law_Serv_1': '', 'EMS_Serv_1': '', 'Fire_AVcar': '', 'Law_AVcard': '', 'EMS_AVcard': '', 'GC_Excepti': '', 'Fire_Ser_2': '', 'Law_Serv_2': '', 'EMS_Serv_2': '', 'GlobalID': '', 'last_edi_1': '', 'PSAP_Servi': '', });
lyr_VZC_Midway_VFD_11.set('fieldImages', {'COUNTY_SUB': '', 'SOURCE': '', 'USER_ID': '', 'ESN_NUM': '', 'ESN_CITY': '', 'ESN_COUNTY': '', 'ESN_STATE': '', 'ESN_LAW': '', 'ESN_FIRE': '', 'ESN_EMS': '', 'CREATION_U': '', 'MODIFY_USE': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'C1_Excepti': '', 'TEST': '', 'DiscrpAgID': '', 'DateUpdate': '', 'Effective': '', 'Expire': '', 'ES_NGUID': '', 'State': '', 'Fire_Agenc': '', 'Law_Agency': '', 'EMS_Agency': '', 'Fire_Servi': '', 'Law_Servic': '', 'EMS_Servic': '', 'Fire_Ser_1': '', 'Law_Serv_1': '', 'EMS_Serv_1': '', 'Fire_AVcar': '', 'Law_AVcard': '', 'EMS_AVcard': '', 'GC_Excepti': '', 'Fire_Ser_2': '', 'Law_Serv_2': '', 'EMS_Serv_2': '', 'GlobalID': '', 'last_edi_1': '', 'PSAP_Servi': '', });
lyr_VZC_Mabank_VFD_12.set('fieldImages', {'COUNTY_SUB': '', 'SOURCE': '', 'USER_ID': '', 'ESN_NUM': '', 'ESN_CITY': '', 'ESN_COUNTY': '', 'ESN_STATE': '', 'ESN_LAW': '', 'ESN_FIRE': '', 'ESN_EMS': '', 'CREATION_U': '', 'MODIFY_USE': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'C1_Excepti': '', 'TEST': '', 'DiscrpAgID': '', 'DateUpdate': '', 'Effective': '', 'Expire': '', 'ES_NGUID': '', 'State': '', 'Fire_Agenc': '', 'Law_Agency': '', 'EMS_Agency': '', 'Fire_Servi': '', 'Law_Servic': '', 'EMS_Servic': '', 'Fire_Ser_1': '', 'Law_Serv_1': '', 'EMS_Serv_1': '', 'Fire_AVcar': '', 'Law_AVcard': '', 'EMS_AVcard': '', 'GC_Excepti': '', 'Fire_Ser_2': '', 'Law_Serv_2': '', 'EMS_Serv_2': '', 'GlobalID': '', 'last_edi_1': '', 'PSAP_Servi': '', });
lyr_VZC_GS_VFD_13.set('fieldImages', {'COUNTY_SUB': '', 'SOURCE': '', 'USER_ID': '', 'ESN_NUM': '', 'ESN_CITY': '', 'ESN_COUNTY': '', 'ESN_STATE': '', 'ESN_LAW': '', 'ESN_FIRE': '', 'ESN_EMS': '', 'CREATION_U': '', 'MODIFY_USE': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'C1_Excepti': '', 'TEST': '', 'DiscrpAgID': '', 'DateUpdate': '', 'Effective': '', 'Expire': '', 'ES_NGUID': '', 'State': '', 'Fire_Agenc': '', 'Law_Agency': '', 'EMS_Agency': '', 'Fire_Servi': '', 'Law_Servic': '', 'EMS_Servic': '', 'Fire_Ser_1': '', 'Law_Serv_1': '', 'EMS_Serv_1': '', 'Fire_AVcar': '', 'Law_AVcard': '', 'EMS_AVcard': '', 'GC_Excepti': '', 'Fire_Ser_2': '', 'Law_Serv_2': '', 'EMS_Serv_2': '', 'GlobalID': '', 'last_edi_1': '', 'PSAP_Servi': '', });
lyr_VZC_Fruitvale_VFD_14.set('fieldImages', {'COUNTY_SUB': '', 'SOURCE': '', 'USER_ID': '', 'ESN_NUM': '', 'ESN_CITY': '', 'ESN_COUNTY': '', 'ESN_STATE': '', 'ESN_LAW': '', 'ESN_FIRE': '', 'ESN_EMS': '', 'CREATION_U': '', 'MODIFY_USE': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'C1_Excepti': '', 'TEST': '', 'DiscrpAgID': '', 'DateUpdate': '', 'Effective': '', 'Expire': '', 'ES_NGUID': '', 'State': '', 'Fire_Agenc': '', 'Law_Agency': '', 'EMS_Agency': '', 'Fire_Servi': '', 'Law_Servic': '', 'EMS_Servic': '', 'Fire_Ser_1': '', 'Law_Serv_1': '', 'EMS_Serv_1': '', 'Fire_AVcar': '', 'Law_AVcard': '', 'EMS_AVcard': '', 'GC_Excepti': '', 'Fire_Ser_2': '', 'Law_Serv_2': '', 'EMS_Serv_2': '', 'GlobalID': '', 'last_edi_1': '', 'PSAP_Servi': '', });
lyr_VZC_Edgewood_VFD_15.set('fieldImages', {'COUNTY_SUB': '', 'SOURCE': '', 'USER_ID': '', 'ESN_NUM': '', 'ESN_CITY': '', 'ESN_COUNTY': '', 'ESN_STATE': '', 'ESN_LAW': '', 'ESN_FIRE': '', 'ESN_EMS': '', 'CREATION_U': '', 'MODIFY_USE': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'C1_Excepti': '', 'TEST': '', 'DiscrpAgID': '', 'DateUpdate': '', 'Effective': '', 'Expire': '', 'ES_NGUID': '', 'State': '', 'Fire_Agenc': '', 'Law_Agency': '', 'EMS_Agency': '', 'Fire_Servi': '', 'Law_Servic': '', 'EMS_Servic': '', 'Fire_Ser_1': '', 'Law_Serv_1': '', 'EMS_Serv_1': '', 'Fire_AVcar': '', 'Law_AVcard': '', 'EMS_AVcard': '', 'GC_Excepti': '', 'Fire_Ser_2': '', 'Law_Serv_2': '', 'EMS_Serv_2': '', 'GlobalID': '', 'last_edi_1': '', 'PSAP_Servi': '', });
lyr_VZC_Canton_VFD_16.set('fieldImages', {'COUNTY_SUB': '', 'SOURCE': '', 'USER_ID': '', 'ESN_NUM': '', 'ESN_CITY': '', 'ESN_COUNTY': '', 'ESN_STATE': '', 'ESN_LAW': '', 'ESN_FIRE': '', 'ESN_EMS': '', 'CREATION_U': '', 'MODIFY_USE': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'C1_Excepti': '', 'TEST': '', 'DiscrpAgID': '', 'DateUpdate': '', 'Effective': '', 'Expire': '', 'ES_NGUID': '', 'State': '', 'Fire_Agenc': '', 'Law_Agency': '', 'EMS_Agency': '', 'Fire_Servi': '', 'Law_Servic': '', 'EMS_Servic': '', 'Fire_Ser_1': '', 'Law_Serv_1': '', 'EMS_Serv_1': '', 'Fire_AVcar': '', 'Law_AVcard': '', 'EMS_AVcard': '', 'GC_Excepti': '', 'Fire_Ser_2': '', 'Law_Serv_2': '', 'EMS_Serv_2': '', 'GlobalID': '', 'last_edi_1': '', 'PSAP_Servi': '', });
lyr_VZC_Edom_VFD_17.set('fieldImages', {'COUNTY_SUB': '', 'SOURCE': '', 'USER_ID': '', 'ESN_NUM': '', 'ESN_CITY': '', 'ESN_COUNTY': '', 'ESN_STATE': '', 'ESN_LAW': '', 'ESN_FIRE': '', 'ESN_EMS': '', 'CREATION_U': '', 'MODIFY_USE': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'C1_Excepti': '', 'TEST': '', 'DiscrpAgID': '', 'DateUpdate': '', 'Effective': '', 'Expire': '', 'ES_NGUID': '', 'State': '', 'Fire_Agenc': '', 'Law_Agency': '', 'EMS_Agency': '', 'Fire_Servi': '', 'Law_Servic': '', 'EMS_Servic': '', 'Fire_Ser_1': '', 'Law_Serv_1': '', 'EMS_Serv_1': '', 'Fire_AVcar': '', 'Law_AVcard': '', 'EMS_AVcard': '', 'GC_Excepti': '', 'Fire_Ser_2': '', 'Law_Serv_2': '', 'EMS_Serv_2': '', 'GlobalID': '', 'last_edi_1': '', 'PSAP_Servi': '', });
lyr_VZC_BW_VFD_18.set('fieldImages', {'COUNTY_SUB': '', 'SOURCE': '', 'USER_ID': '', 'ESN_NUM': '', 'ESN_CITY': '', 'ESN_COUNTY': '', 'ESN_STATE': '', 'ESN_LAW': '', 'ESN_FIRE': '', 'ESN_EMS': '', 'CREATION_U': '', 'MODIFY_USE': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'C1_Excepti': '', 'TEST': '', 'DiscrpAgID': '', 'DateUpdate': '', 'Effective': '', 'Expire': '', 'ES_NGUID': '', 'State': '', 'Fire_Agenc': '', 'Law_Agency': '', 'EMS_Agency': '', 'Fire_Servi': '', 'Law_Servic': '', 'EMS_Servic': '', 'Fire_Ser_1': '', 'Law_Serv_1': '', 'EMS_Serv_1': '', 'Fire_AVcar': '', 'Law_AVcard': '', 'EMS_AVcard': '', 'GC_Excepti': '', 'Fire_Ser_2': '', 'Law_Serv_2': '', 'EMS_Serv_2': '', 'GlobalID': '', 'last_edi_1': '', 'PSAP_Servi': '', });
lyr_VanZandtCounty_1.set('fieldLabels', {'CMPTRL_CNT': 'hidden field', 'DPS_CNTY_N': 'hidden field', 'FIPS_ST_CN': 'hidden field', 'TXDOT_CNTY': 'hidden field', 'TXDOT_DIST': 'hidden field', 'CNTY_NM': 'hidden field', 'GID': 'hidden field', });
lyr_VZC_ISD_2.set('fieldLabels', {'GEOID20': 'hidden field', 'NAME20': 'no label', 'SDLEA': 'hidden field', 'NAME': 'hidden field', 'NAME2': 'hidden field', 'DISTRICT_N': 'hidden field', 'DISTRICT': 'hidden field', 'DISTRICT_C': 'hidden field', 'NCES_DISTR': 'hidden field', 'COLOR': 'hidden field', 'Shape_area': 'hidden field', 'Shape_len': 'hidden field', 'Web Site': 'no label', });
lyr_VZC_Precincts_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'CNTY': 'hidden field', 'COLOR': 'hidden field', 'PREC': 'header label - visible with data', 'PCTKEY': 'hidden field', 'cntykey': 'hidden field', 'Shape_area': 'hidden field', 'Shape_len': 'hidden field', 'LOC': 'header label - visible with data', 'LINK': 'header label - visible with data', });
lyr_VZC_ESD3_4.set('fieldLabels', {'Zone': 'inline label - always visible', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', });
lyr_VZC_WP_VFD_5.set('fieldLabels', {'COUNTY_SUB': 'no label', 'SOURCE': 'no label', 'USER_ID': 'no label', 'ESN_NUM': 'no label', 'ESN_CITY': 'no label', 'ESN_COUNTY': 'no label', 'ESN_STATE': 'no label', 'ESN_LAW': 'no label', 'ESN_FIRE': 'no label', 'ESN_EMS': 'no label', 'CREATION_U': 'no label', 'MODIFY_USE': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'C1_Excepti': 'no label', 'TEST': 'no label', 'DiscrpAgID': 'no label', 'DateUpdate': 'no label', 'Effective': 'no label', 'Expire': 'no label', 'ES_NGUID': 'no label', 'State': 'no label', 'Fire_Agenc': 'no label', 'Law_Agency': 'no label', 'EMS_Agency': 'no label', 'Fire_Servi': 'no label', 'Law_Servic': 'no label', 'EMS_Servic': 'no label', 'Fire_Ser_1': 'no label', 'Law_Serv_1': 'no label', 'EMS_Serv_1': 'no label', 'Fire_AVcar': 'no label', 'Law_AVcard': 'no label', 'EMS_AVcard': 'no label', 'GC_Excepti': 'no label', 'Fire_Ser_2': 'no label', 'Law_Serv_2': 'no label', 'EMS_Serv_2': 'no label', 'GlobalID': 'no label', 'last_edi_1': 'no label', 'PSAP_Servi': 'no label', });
lyr_VZC_Whitton_VFD_6.set('fieldLabels', {'COUNTY_SUB': 'no label', 'SOURCE': 'no label', 'USER_ID': 'no label', 'ESN_NUM': 'no label', 'ESN_CITY': 'no label', 'ESN_COUNTY': 'no label', 'ESN_STATE': 'no label', 'ESN_LAW': 'no label', 'ESN_FIRE': 'no label', 'ESN_EMS': 'no label', 'CREATION_U': 'no label', 'MODIFY_USE': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'C1_Excepti': 'no label', 'TEST': 'no label', 'DiscrpAgID': 'no label', 'DateUpdate': 'no label', 'Effective': 'no label', 'Expire': 'no label', 'ES_NGUID': 'no label', 'State': 'no label', 'Fire_Agenc': 'no label', 'Law_Agency': 'no label', 'EMS_Agency': 'no label', 'Fire_Servi': 'no label', 'Law_Servic': 'no label', 'EMS_Servic': 'no label', 'Fire_Ser_1': 'no label', 'Law_Serv_1': 'no label', 'EMS_Serv_1': 'no label', 'Fire_AVcar': 'no label', 'Law_AVcard': 'no label', 'EMS_AVcard': 'no label', 'GC_Excepti': 'no label', 'Fire_Ser_2': 'no label', 'Law_Serv_2': 'no label', 'EMS_Serv_2': 'no label', 'GlobalID': 'no label', 'last_edi_1': 'no label', 'PSAP_Servi': 'no label', });
lyr_VZC_Van_VFD_7.set('fieldLabels', {'COUNTY_SUB': 'no label', 'SOURCE': 'no label', 'USER_ID': 'no label', 'ESN_NUM': 'no label', 'ESN_CITY': 'no label', 'ESN_COUNTY': 'no label', 'ESN_STATE': 'no label', 'ESN_LAW': 'no label', 'ESN_FIRE': 'no label', 'ESN_EMS': 'no label', 'CREATION_U': 'no label', 'MODIFY_USE': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'C1_Excepti': 'no label', 'TEST': 'no label', 'DiscrpAgID': 'no label', 'DateUpdate': 'no label', 'Effective': 'no label', 'Expire': 'no label', 'ES_NGUID': 'no label', 'State': 'no label', 'Fire_Agenc': 'no label', 'Law_Agency': 'no label', 'EMS_Agency': 'no label', 'Fire_Servi': 'no label', 'Law_Servic': 'no label', 'EMS_Servic': 'no label', 'Fire_Ser_1': 'no label', 'Law_Serv_1': 'no label', 'EMS_Serv_1': 'no label', 'Fire_AVcar': 'no label', 'Law_AVcard': 'no label', 'EMS_AVcard': 'no label', 'GC_Excepti': 'no label', 'Fire_Ser_2': 'no label', 'Law_Serv_2': 'no label', 'EMS_Serv_2': 'no label', 'GlobalID': 'no label', 'last_edi_1': 'no label', 'PSAP_Servi': 'no label', });
lyr_VZC_S_VZ_VFD_8.set('fieldLabels', {'COUNTY_SUB': 'no label', 'SOURCE': 'no label', 'USER_ID': 'no label', 'ESN_NUM': 'no label', 'ESN_CITY': 'no label', 'ESN_COUNTY': 'no label', 'ESN_STATE': 'no label', 'ESN_LAW': 'no label', 'ESN_FIRE': 'no label', 'ESN_EMS': 'no label', 'CREATION_U': 'no label', 'MODIFY_USE': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'C1_Excepti': 'no label', 'TEST': 'no label', 'DiscrpAgID': 'no label', 'DateUpdate': 'no label', 'Effective': 'no label', 'Expire': 'no label', 'ES_NGUID': 'no label', 'State': 'no label', 'Fire_Agenc': 'no label', 'Law_Agency': 'no label', 'EMS_Agency': 'no label', 'Fire_Servi': 'no label', 'Law_Servic': 'no label', 'EMS_Servic': 'no label', 'Fire_Ser_1': 'no label', 'Law_Serv_1': 'no label', 'EMS_Serv_1': 'no label', 'Fire_AVcar': 'no label', 'Law_AVcard': 'no label', 'EMS_AVcard': 'no label', 'GC_Excepti': 'no label', 'Fire_Ser_2': 'no label', 'Law_Serv_2': 'no label', 'EMS_Serv_2': 'no label', 'GlobalID': 'no label', 'last_edi_1': 'no label', 'PSAP_Servi': 'no label', });
lyr_VZC_RO_VFD_9.set('fieldLabels', {'COUNTY_SUB': 'no label', 'SOURCE': 'no label', 'USER_ID': 'no label', 'ESN_NUM': 'no label', 'ESN_CITY': 'no label', 'ESN_COUNTY': 'no label', 'ESN_STATE': 'no label', 'ESN_LAW': 'no label', 'ESN_FIRE': 'no label', 'ESN_EMS': 'no label', 'CREATION_U': 'no label', 'MODIFY_USE': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'C1_Excepti': 'no label', 'TEST': 'no label', 'DiscrpAgID': 'no label', 'DateUpdate': 'no label', 'Effective': 'no label', 'Expire': 'no label', 'ES_NGUID': 'no label', 'State': 'no label', 'Fire_Agenc': 'no label', 'Law_Agency': 'no label', 'EMS_Agency': 'no label', 'Fire_Servi': 'no label', 'Law_Servic': 'no label', 'EMS_Servic': 'no label', 'Fire_Ser_1': 'no label', 'Law_Serv_1': 'no label', 'EMS_Serv_1': 'no label', 'Fire_AVcar': 'no label', 'Law_AVcard': 'no label', 'EMS_AVcard': 'no label', 'GC_Excepti': 'no label', 'Fire_Ser_2': 'no label', 'Law_Serv_2': 'no label', 'EMS_Serv_2': 'no label', 'GlobalID': 'no label', 'last_edi_1': 'no label', 'PSAP_Servi': 'no label', });
lyr_VZC_MS_VFD_10.set('fieldLabels', {'COUNTY_SUB': 'no label', 'SOURCE': 'no label', 'USER_ID': 'no label', 'ESN_NUM': 'no label', 'ESN_CITY': 'no label', 'ESN_COUNTY': 'no label', 'ESN_STATE': 'no label', 'ESN_LAW': 'no label', 'ESN_FIRE': 'no label', 'ESN_EMS': 'no label', 'CREATION_U': 'no label', 'MODIFY_USE': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'C1_Excepti': 'no label', 'TEST': 'no label', 'DiscrpAgID': 'no label', 'DateUpdate': 'no label', 'Effective': 'no label', 'Expire': 'no label', 'ES_NGUID': 'no label', 'State': 'no label', 'Fire_Agenc': 'no label', 'Law_Agency': 'no label', 'EMS_Agency': 'no label', 'Fire_Servi': 'no label', 'Law_Servic': 'no label', 'EMS_Servic': 'no label', 'Fire_Ser_1': 'no label', 'Law_Serv_1': 'no label', 'EMS_Serv_1': 'no label', 'Fire_AVcar': 'no label', 'Law_AVcard': 'no label', 'EMS_AVcard': 'no label', 'GC_Excepti': 'no label', 'Fire_Ser_2': 'no label', 'Law_Serv_2': 'no label', 'EMS_Serv_2': 'no label', 'GlobalID': 'no label', 'last_edi_1': 'no label', 'PSAP_Servi': 'no label', });
lyr_VZC_Midway_VFD_11.set('fieldLabels', {'COUNTY_SUB': 'no label', 'SOURCE': 'no label', 'USER_ID': 'no label', 'ESN_NUM': 'no label', 'ESN_CITY': 'no label', 'ESN_COUNTY': 'no label', 'ESN_STATE': 'no label', 'ESN_LAW': 'no label', 'ESN_FIRE': 'no label', 'ESN_EMS': 'no label', 'CREATION_U': 'no label', 'MODIFY_USE': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'C1_Excepti': 'no label', 'TEST': 'no label', 'DiscrpAgID': 'no label', 'DateUpdate': 'no label', 'Effective': 'no label', 'Expire': 'no label', 'ES_NGUID': 'no label', 'State': 'no label', 'Fire_Agenc': 'no label', 'Law_Agency': 'no label', 'EMS_Agency': 'no label', 'Fire_Servi': 'no label', 'Law_Servic': 'no label', 'EMS_Servic': 'no label', 'Fire_Ser_1': 'no label', 'Law_Serv_1': 'no label', 'EMS_Serv_1': 'no label', 'Fire_AVcar': 'no label', 'Law_AVcard': 'no label', 'EMS_AVcard': 'no label', 'GC_Excepti': 'no label', 'Fire_Ser_2': 'no label', 'Law_Serv_2': 'no label', 'EMS_Serv_2': 'no label', 'GlobalID': 'no label', 'last_edi_1': 'no label', 'PSAP_Servi': 'no label', });
lyr_VZC_Mabank_VFD_12.set('fieldLabels', {'COUNTY_SUB': 'no label', 'SOURCE': 'no label', 'USER_ID': 'no label', 'ESN_NUM': 'no label', 'ESN_CITY': 'no label', 'ESN_COUNTY': 'no label', 'ESN_STATE': 'no label', 'ESN_LAW': 'no label', 'ESN_FIRE': 'no label', 'ESN_EMS': 'no label', 'CREATION_U': 'no label', 'MODIFY_USE': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'C1_Excepti': 'no label', 'TEST': 'no label', 'DiscrpAgID': 'no label', 'DateUpdate': 'no label', 'Effective': 'no label', 'Expire': 'no label', 'ES_NGUID': 'no label', 'State': 'no label', 'Fire_Agenc': 'no label', 'Law_Agency': 'no label', 'EMS_Agency': 'no label', 'Fire_Servi': 'no label', 'Law_Servic': 'no label', 'EMS_Servic': 'no label', 'Fire_Ser_1': 'no label', 'Law_Serv_1': 'no label', 'EMS_Serv_1': 'no label', 'Fire_AVcar': 'no label', 'Law_AVcard': 'no label', 'EMS_AVcard': 'no label', 'GC_Excepti': 'no label', 'Fire_Ser_2': 'no label', 'Law_Serv_2': 'no label', 'EMS_Serv_2': 'no label', 'GlobalID': 'no label', 'last_edi_1': 'no label', 'PSAP_Servi': 'no label', });
lyr_VZC_GS_VFD_13.set('fieldLabels', {'COUNTY_SUB': 'inline label - visible with data', 'SOURCE': 'no label', 'USER_ID': 'no label', 'ESN_NUM': 'no label', 'ESN_CITY': 'no label', 'ESN_COUNTY': 'no label', 'ESN_STATE': 'no label', 'ESN_LAW': 'no label', 'ESN_FIRE': 'no label', 'ESN_EMS': 'no label', 'CREATION_U': 'no label', 'MODIFY_USE': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'C1_Excepti': 'no label', 'TEST': 'no label', 'DiscrpAgID': 'no label', 'DateUpdate': 'no label', 'Effective': 'no label', 'Expire': 'no label', 'ES_NGUID': 'no label', 'State': 'no label', 'Fire_Agenc': 'no label', 'Law_Agency': 'no label', 'EMS_Agency': 'no label', 'Fire_Servi': 'no label', 'Law_Servic': 'no label', 'EMS_Servic': 'no label', 'Fire_Ser_1': 'no label', 'Law_Serv_1': 'no label', 'EMS_Serv_1': 'no label', 'Fire_AVcar': 'no label', 'Law_AVcard': 'no label', 'EMS_AVcard': 'no label', 'GC_Excepti': 'no label', 'Fire_Ser_2': 'no label', 'Law_Serv_2': 'no label', 'EMS_Serv_2': 'no label', 'GlobalID': 'no label', 'last_edi_1': 'no label', 'PSAP_Servi': 'no label', });
lyr_VZC_Fruitvale_VFD_14.set('fieldLabels', {'COUNTY_SUB': 'no label', 'SOURCE': 'no label', 'USER_ID': 'no label', 'ESN_NUM': 'no label', 'ESN_CITY': 'no label', 'ESN_COUNTY': 'no label', 'ESN_STATE': 'no label', 'ESN_LAW': 'no label', 'ESN_FIRE': 'no label', 'ESN_EMS': 'no label', 'CREATION_U': 'no label', 'MODIFY_USE': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'C1_Excepti': 'no label', 'TEST': 'no label', 'DiscrpAgID': 'no label', 'DateUpdate': 'no label', 'Effective': 'no label', 'Expire': 'no label', 'ES_NGUID': 'no label', 'State': 'no label', 'Fire_Agenc': 'no label', 'Law_Agency': 'no label', 'EMS_Agency': 'no label', 'Fire_Servi': 'no label', 'Law_Servic': 'no label', 'EMS_Servic': 'no label', 'Fire_Ser_1': 'no label', 'Law_Serv_1': 'no label', 'EMS_Serv_1': 'no label', 'Fire_AVcar': 'no label', 'Law_AVcard': 'no label', 'EMS_AVcard': 'no label', 'GC_Excepti': 'no label', 'Fire_Ser_2': 'no label', 'Law_Serv_2': 'no label', 'EMS_Serv_2': 'no label', 'GlobalID': 'no label', 'last_edi_1': 'no label', 'PSAP_Servi': 'no label', });
lyr_VZC_Edgewood_VFD_15.set('fieldLabels', {'COUNTY_SUB': 'no label', 'SOURCE': 'no label', 'USER_ID': 'no label', 'ESN_NUM': 'no label', 'ESN_CITY': 'no label', 'ESN_COUNTY': 'no label', 'ESN_STATE': 'no label', 'ESN_LAW': 'no label', 'ESN_FIRE': 'no label', 'ESN_EMS': 'no label', 'CREATION_U': 'no label', 'MODIFY_USE': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'C1_Excepti': 'no label', 'TEST': 'no label', 'DiscrpAgID': 'no label', 'DateUpdate': 'no label', 'Effective': 'no label', 'Expire': 'no label', 'ES_NGUID': 'no label', 'State': 'no label', 'Fire_Agenc': 'no label', 'Law_Agency': 'no label', 'EMS_Agency': 'no label', 'Fire_Servi': 'no label', 'Law_Servic': 'no label', 'EMS_Servic': 'no label', 'Fire_Ser_1': 'no label', 'Law_Serv_1': 'no label', 'EMS_Serv_1': 'no label', 'Fire_AVcar': 'no label', 'Law_AVcard': 'no label', 'EMS_AVcard': 'no label', 'GC_Excepti': 'no label', 'Fire_Ser_2': 'no label', 'Law_Serv_2': 'no label', 'EMS_Serv_2': 'no label', 'GlobalID': 'no label', 'last_edi_1': 'no label', 'PSAP_Servi': 'no label', });
lyr_VZC_Canton_VFD_16.set('fieldLabels', {'COUNTY_SUB': 'no label', 'SOURCE': 'no label', 'USER_ID': 'no label', 'ESN_NUM': 'no label', 'ESN_CITY': 'no label', 'ESN_COUNTY': 'no label', 'ESN_STATE': 'no label', 'ESN_LAW': 'no label', 'ESN_FIRE': 'no label', 'ESN_EMS': 'no label', 'CREATION_U': 'no label', 'MODIFY_USE': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'C1_Excepti': 'no label', 'TEST': 'no label', 'DiscrpAgID': 'no label', 'DateUpdate': 'no label', 'Effective': 'no label', 'Expire': 'no label', 'ES_NGUID': 'no label', 'State': 'no label', 'Fire_Agenc': 'no label', 'Law_Agency': 'no label', 'EMS_Agency': 'no label', 'Fire_Servi': 'no label', 'Law_Servic': 'no label', 'EMS_Servic': 'no label', 'Fire_Ser_1': 'no label', 'Law_Serv_1': 'no label', 'EMS_Serv_1': 'no label', 'Fire_AVcar': 'no label', 'Law_AVcard': 'no label', 'EMS_AVcard': 'no label', 'GC_Excepti': 'no label', 'Fire_Ser_2': 'no label', 'Law_Serv_2': 'no label', 'EMS_Serv_2': 'no label', 'GlobalID': 'no label', 'last_edi_1': 'no label', 'PSAP_Servi': 'no label', });
lyr_VZC_Edom_VFD_17.set('fieldLabels', {'COUNTY_SUB': 'no label', 'SOURCE': 'no label', 'USER_ID': 'no label', 'ESN_NUM': 'no label', 'ESN_CITY': 'no label', 'ESN_COUNTY': 'no label', 'ESN_STATE': 'no label', 'ESN_LAW': 'no label', 'ESN_FIRE': 'no label', 'ESN_EMS': 'no label', 'CREATION_U': 'no label', 'MODIFY_USE': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'C1_Excepti': 'no label', 'TEST': 'no label', 'DiscrpAgID': 'no label', 'DateUpdate': 'no label', 'Effective': 'no label', 'Expire': 'no label', 'ES_NGUID': 'no label', 'State': 'no label', 'Fire_Agenc': 'no label', 'Law_Agency': 'no label', 'EMS_Agency': 'no label', 'Fire_Servi': 'no label', 'Law_Servic': 'no label', 'EMS_Servic': 'no label', 'Fire_Ser_1': 'no label', 'Law_Serv_1': 'no label', 'EMS_Serv_1': 'no label', 'Fire_AVcar': 'no label', 'Law_AVcard': 'no label', 'EMS_AVcard': 'no label', 'GC_Excepti': 'no label', 'Fire_Ser_2': 'no label', 'Law_Serv_2': 'no label', 'EMS_Serv_2': 'no label', 'GlobalID': 'no label', 'last_edi_1': 'no label', 'PSAP_Servi': 'no label', });
lyr_VZC_BW_VFD_18.set('fieldLabels', {'COUNTY_SUB': 'no label', 'SOURCE': 'no label', 'USER_ID': 'no label', 'ESN_NUM': 'no label', 'ESN_CITY': 'no label', 'ESN_COUNTY': 'no label', 'ESN_STATE': 'no label', 'ESN_LAW': 'no label', 'ESN_FIRE': 'no label', 'ESN_EMS': 'no label', 'CREATION_U': 'no label', 'MODIFY_USE': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'C1_Excepti': 'no label', 'TEST': 'no label', 'DiscrpAgID': 'no label', 'DateUpdate': 'no label', 'Effective': 'no label', 'Expire': 'no label', 'ES_NGUID': 'no label', 'State': 'no label', 'Fire_Agenc': 'no label', 'Law_Agency': 'no label', 'EMS_Agency': 'no label', 'Fire_Servi': 'no label', 'Law_Servic': 'no label', 'EMS_Servic': 'no label', 'Fire_Ser_1': 'no label', 'Law_Serv_1': 'no label', 'EMS_Serv_1': 'no label', 'Fire_AVcar': 'no label', 'Law_AVcard': 'no label', 'EMS_AVcard': 'no label', 'GC_Excepti': 'no label', 'Fire_Ser_2': 'no label', 'Law_Serv_2': 'no label', 'EMS_Serv_2': 'no label', 'GlobalID': 'no label', 'last_edi_1': 'no label', 'PSAP_Servi': 'no label', });
lyr_VZC_BW_VFD_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});