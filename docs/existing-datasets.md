# Assessment of existing, environmentally-focused spatial data infrastructure for South Sudan. 

## Overview

The relatively-young Republic of South Sudan has abundant resources. While mineral resources in the form of oil and gas have been the focus of international interest, geopolitical conflict and some internal division, the country's natural resources are of similar - arguably greater - importance. Since gaining autonomy in 2005 and independence in 2011, the government of South Sudan has enacted varying measures to protect these resources, which include dramatic wildlife migration routes in Bandingilo National Park and essential ecosystem services from the massive Sudd wetland complex:

<img src="http://api.tiles.mapbox.com/v3/landplanner.hbogn16k/29.866,7.896,5/500x300.png"/>
>[South Sudan Overview - click for interactive map](https://a.tiles.mapbox.com/v3/landplanner.hbogn16k/page.html?secure=1#7/7.896/29.866)

Though South Sudan is [better positioned economically than many of its neighbors](http://blogs.worldbank.org/africacan/south-sudan-launches-its-first-gdp-estimate), it still grapples with extreme poverty. It is under such conditions that great pressure can be brought to bear on natural resources, and it is imperitive that they be governed with the right balance of empowerment and sustainability. Enabling this balance is a clear and regular assessment of the country's biodiversity and forest resources. Following up on [a 2007 report on environmental threats and opportunities in South (then 'Southern') Sudan](http://pdf.usaid.gov/pdf_docs/PNADL108.pdf), USAID is undertaking a post-independence analysis of the same resources, policies and features.

A major component of this study is an audit of existing geospatial resources that describe some portion of South Sudan's ecological spectrum. Too often - particularly in the realm of international development - mapping efforts are duplicated and results missed; it is our hope to build on established work for the present initiative, as well as to be able to pass on the resources we find. Subsequent phases of this study include remote sensing analyses of forest type and desertification patterns, as well as a geospatial investigation of the human footprint on the country's natural resources. But below is an accounting of the datasets available now that relate to the ecological landscape of South Sudan.

### Note on Edits & Contributions

This catalog is not static, and it is only possible to keep it updated with support from community stakeholders. As such, all contructive [pull requests](https://help.github.com/articles/using-pull-requests) will be honored, with the hope that valuable contributions will keep this resource current.

## Dataset Categories

This catalog places an emphasis on national-scale datasets. Though many useful studies and maps are focused on regions and localities in South Sudan (here is [an excellent example](http://www.sciencedirect.com/science/article/pii/S0143622812001622) from Gorsevski et al.), for the purposes of this study we are interested in patterns and processes that can be assessed at national scale and moderate resolution. 

Datasets are categorized by broad theme below. Some are hosted in this repository and others (due to file size restrictions) are linked to external resources. Wherever possible, global- and continental-scale datasets have been clipped to the [South Sudan area of interest](../geodata/osm/south_sudan_osm_roi20km.geojson), which includes disputed areas and a 20km buffer beyond the national border.

### Land Use & Land Cover

|Name|Source|Type|Format|Notes|
| ------ | ------ | ------ | ------ | ------ |
|[OSM - Land Use](../geodata/osm/ss_landuse_polygon.geojson)|Openstreetmap|LULC|GeoJSON|Extracted February 2014 - Access more recent versions [here](http://osm.org)|
|[UMD - Global Forest Cover Change 2000-2012](http://earthenginepartners.appspot.com/science-2013-global-forest/download.html)|University of Maryland/Google|LULC|GeoTIFF|Available in Tiled Format|
|[Africover - Land Cover Datasets](http://www.fao.org/geonetwork/srv/en/main.search?title=africover%20landcover%20sudan)|FAO/GLCN - Africover|LULC|GeoTIFF|Outdated - imagery vintage is 1994-1999|
|[National LULC 2010](http://www.glcn.org/downs/prj/ssud/ssud_lc_poster.pdf)|FAO/GLCN - Africover|LULC|PDF|Unfortunately not available here in portable format - imagery vintage is 2010|
|[MODIS Land Cover](https://lpdaac.usgs.gov/products/modis_products_table/mcd12q1)|Boston University/NASA|LULC|HDF/GeoTIFF|Coarse resolution w/ high category detail|


### Built Infrastructure

|Name|Source|Type|Format|Notes|
| ------ | ------ | ------ | ------ | ------ |
|[OSM - Roads](../geodata/osm/highway_line.geojson)|Openstreetmap|Built Infrastructure|GeoJSON|Extracted February 2014 - Access more recent versions [here](http://osm.org)|
|[OSM - Airfields](../geodata/osm/ss_aeroway_point.geojson)|Openstreetmap|Built Infrastructure|GeoJSON|Extracted February 2014 - Access more recent versions [here](http://osm.org)|
|[OSM - Walls/Barriers](../geodata/osm/ss_barrier_line.geojson)|Openstreetmap|Built Infrastructure|GeoJSON|Extracted February 2014 - Access more recent versions [here](http://osm.org)|
|[OSM - Railway](../geodata/osm/ss_railway_line.geojson)|Openstreetmap|Built Infrastructure|GeoJSON|Extracted February 2014 - Access more recent versions [here](http://osm.org)|
|[UNDP - Airfields](../geodata/unitar/undp_airfields.geojson)|UNITAR|Built Infrastructure|GeoJSON|Authoritative|
|[UNDP - Roads](../geodata/unitar/undp_roads.geojson)|UNITAR|Built Infrastructure|GeoJSON|Not as extensive as OSM|


### Political Boundaries & Places

|Name|Source|Type|Format|Notes|
| ------ | ------ | ------ | ------ | ------ |
|[Africover - Major Towns](../geodata/africover/africvr_sd_towns_major.geojson)|FAO - Africover|Places|GeoJSON|Data fro pre-independence|
|[Africover - Minor Towns](../geodata/africover/africvr_sd_towns_other.geojson)|FAO - Africover|Places|GeoJSON|Data fro pre-independence|
|[Natural Earth - Disputed Areas](../geodata/natural_earth/ne_disputed_areas.geojson)|Natural Earth|Political Boundaries|GeoJSON|Moderate resolution|
|[Natural Earth - Populated Places](../geodata/natural_earth/ne_populated_places.geojson)|Natural Earth|Places|GeoJSON||
|[Natural Earth - National Boundary](../geodata/natural_earth/south_sudan_ne.geojson)|Natural Earth|Political Boundaries|GeoJSON|Does not conform exactly with other datasets|
|[OSM - National Boundary](../geodata/osm/south_sudan_osm.geojson)|Openstreetmap|Political Boundaries|GeoJSON|Matches GAUL, encompasses disputed areas|
|[OSM - National AOI](../geodata/osm/south_sudan_osm_roi20km.geojson)|Openstreetmap|Political Boundaries|GeoJSON|Used as the clip boundary for all other datasets|
|[OSM - States](../geodata/osm/ss_place_polygon.geojson)|Openstreetmap|Political Boundaries|GeoJSON|County designation in Upper Nile State Unclear|
|[OSM - Populated Places](../geodata/osm/ss_place_point.geojson)|Openstreetmap|Places|GeoJSON|Not as extensive as UNITAR or Africover|
|[UNDP - Counties](../geodata/unitar/undp_ss_county.geojson)|UNITAR|Political Boundaries|GeoJSON|Covers all but a small disputed section of Kafia Kingi|
|[UNDP - States](../geodata/unitar/undp_states.geojson)|UNITAR|Political Boundaries|GeoJSON|Authoritative|
|[UNITAR - Polling Stations](../geodata/unitar/unitar_pollingstations.geojson)|UNITAR|Places|GeoJSON|Used for independence referendum|
|[UNITAR - Populated Places](../geodata/unitar/unitar_settlements.geojson)|UNITAR|Places|GeoJSON|Authoritative|


### Hydrology

|Name|Source|Type|Format|Notes|
| ------ | ------ | ------ | ------ | ------ |
|[Africover-Rivers](../geodata/africover/africvr_sd_rivers.geojson)|FAO - Africover|Hydrology|GeoJSON|Outdated - Imagery ca. 1995-1999|
|[Africover-Surface Water](../geodata/africover/africvr_surface_water.geojson)|FAO - Africover|Hydrology|GeoJSON|Outdated - Imagery ca. 1995-1999|
|[OSM - Waterway Polygon](../geodata/osm/ss_waterway_polygon.geojson)|OpenStreetmap|Hydrology|GeoJSON|Extracted February 2014 - Access more recent versions [here](http://osm.org)|
|[OSM - Waterway Point](../geodata/osm/ss_waterway_point.geojson)|OpenStreetmap|Hydrology|GeoJSON|Extracted February 2014 - Access more recent versions [here](http://osm.org)|
|[OSM - Waterway Line](../geodata/osm/ss_waterway_line.geojson)|OpenStreetmap|Hydrology|GeoJSON|Extracted February 2014 - Access more recent versions [here](http://osm.org)|
|[OSM - Wetland Polygons](../geodata/osm/ss_natural_polygon.geojson)|OpenStreetmap|Hydrology|GeoJSON|Extracted February 2014 - Access more recent versions [here](http://osm.org)|


### Protected/Habitat Areas

|Name|Source|Type|Format|Notes|
| ------ | ------ | ------ | ------ | ------ |
|[IUCN - Elephant Range](../geodata/iucn/iucn_elephant_range_2007.geojson)|International Union for the Conservation of Nature|Habitat|GeoJSON|2007 Vintage - Currently being updated|
|[OSM - Conservation Areas](../geodata/osm/ss_conservation_areas.geojson)|Openstreetmap|Protected Areas|GeoJSON|Extracted February 2014 - Access more recent versions [here](http://osm.org)|
|[WDPA - Protected Areas](../geodata/wdpa/wdpa_ssudan.geojson)|World Database of Protected Areas|Protected Areas|GeoJSON|Poor data availability in South Sudan|


### Mineral Resources

|Name|Source|Type|Format|Notes|
| ------ | ------ | ------ | ------ | ------ |
|[ECOS - Oil Concessions](../geodata/ecos/ecos_oil_concessions_2007.geojson)|European Coalition on Oil in Sudan|Mineral|GeoJSON|2007 Vintage - Provided on [ECOS Homepage](http://www.ecosonline.org/oilmap/) with notes about planned subdivision of concession block B |
|[ECOS - Oil Fields of Abyei](http://www.ecosonline.org/news/2010/Abyei_nearby_oil_fields.pdf)|European Coalition on Oil in Sudan|Mineral|PDF|2006 Vintage - Oil production in a disputed area.|


## Data Providers

* [FAO/GLCN (Africover)](http://www.glcn.org/activities/ssud_lc_en.jsp) - Global Land Cover Network
* [ECOS](http://www.ecosonline.org/oilmap/) - European Coalition on Oil in Sudan
* [IUCN](http://www.iucn.org/about/work/programmes/species/who_we_are/ssc_specialist_groups_and_red_list_authorities_directory/mammals/african_elephant/) - International Union for the Conservation of Nature
* [Natural Earth Data](http://www.naturalearthdata.com/downloads/)
* [OpenStreetmap](http://www.openstreetmap.org/#map=15/9.5382/31.6575&layers=HD)
* [UNITAR](http://www.unitar.org/unosat/sudan) - United Nations Institute for Training and Research
* [WDPA](http://www.wdpa.org/) - World Database of Prottected Areas
* [Google](https://services.google.com/fb/forms/mapmakerdatadownload/) - Compiled via directed Map Maker initiative

## Tools for Working With Geospatial Data

* [OGRE](http://ogre.adc4gis.com/) - Online conversion to/from GeoJSON and Shapefile formats
* [Quantum GIS](http://qgis.org/en/site/) - Full-features Open-Source desktop GIS platform
* [geojson.io](http://geojson.io) - Online GIS editing application; GeoJSON-native
* [GDAL/OGR](http://www.gdal.org/) - The Geographic Data Abstraction Library; meant for programmatic dataset manipulation
