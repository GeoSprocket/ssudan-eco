# Analysis Methods

## Wetlands
Derived from MOD12Q1 - MODIS Land Cover Product - for the year 2012, provided by the National Aeronautics and Space Administration. This dataset has a nominal resolution of 500m, and consists of [IGBP Land Cover Classes](https://lpdaac.usgs.gov/products/modis_products_table/mcd12q1) 0 (Water) and 11 (Wetlands). The geometry file available here has been converted to vector TopoJSON format and simplified by 40% using a modified visvalingam algorithm to preserve topology.

## Rangeland Change
This analysis was conducted with two sets of sequential-year MODIS reflectance (Nadir BRDF-Adjusted Reflectance - NBAR) data; 2001-2003 and 2011-2013. Mean Normalized Difference Vegetation Index (NDVI - a commonly-used measure of vegetation health) was calculated per pixel for each 3-year set, then the newer dataset was subtracted from the older. Changes in NDVI of greater than 0.1 were extracted and intersected with IGBP Rangeland classes (Grassland, Open Shrubland and Savanna) derived from MOD12Q1 data. The resulting "Rangeland Change" dataset was then converted to vector format for inclusion in this study.

A more nuanced portrait of rangeland change over the past decade could conceivably be obtained by calculating changes within each of the parent IGBP rangeland classes (e.g. Grasslands), but such an analysis is beyond the scope of this study.

## Travel Time
Derived from a study by [Nelson et al (2008)](http://bioval.jrc.ec.europa.eu/products/gam/index.htm), this dataset was converted from raster by a simple contour extraction at an interval of 360 minutes. This produced isobars representing 6-hour intervals of travel required to reach the nearest city of 50,000 or more by land. Data latency is a potential source of error in this dataset; it represents conditions in the year 2000, and transit network datasets have greatly improved in availability over that time period.

## Forest Cover Change
Produced by [Hansen et al.](http://www.sciencemag.org/content/342/6160/850), the Global Forest Cover Change dataset represents forest cover and forest cover change at a spatial resolution of 30m, though it has been degraded to 500m for use in the current study. The orginal forest cover change analysis was performed on thousands of images from the USGS Landsat program, acquired between 2000 and 2012. The final determination of forest cover change was made with a weighted supervised classification algorithm.

The subset of this data available here was clipped to the South Sudan ROI polygon, then converted to vector format and simplified using a modified visvalingam algorithm to preserve topology. 

For the current study, an attempt was made to adapt part of the Hansen methodology to identify patterns of desertification over the same time period in the Sahelian region of South Sudan. Specifically, this included the same imagery inputs in a Random Forests ensemble classification scheme trained with ancillary datsets such as Africover and high-resolution imagery. However, results were not promising with well under 60% accuracy assessed, and the approach was abandoned.

__Note: the static version of the forest cover change map includes barely-perceptible instances of forest cover loss over the past decade; these are mostly concentrated in the vicinity of Bor and Yei. This is partially an artifact of the spatial scale of the imagery, but may also be an indicator of reasonably-stable forest cover.__
