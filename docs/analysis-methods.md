# Analysis Methods

## Wetlands
Derived from MOD12Q1, MODIS Land Cover Product, for the year 2012, provided by the National Aeronautics and Space Administration. This dataset has a nominal resolution of 500m, and consists of IGBP Land Cover Classes 0 (Water) and 11 (Wetlands). The geometry file available here has been converted to vector TopoJSON format and simplified by 40% using a modified visvalingam algorithm to preserve topology.

## Rangeland Change
This analysis was conducted with two sets of sequential-year, 500m MOD12Q1 data; 2001-2002 and 2011-2012. IGBP Rangeland classes (Grassland, Open Shrubland, Savanna and Woody Savanna) were merged within sequential-year pairs, then converted to vector format. A spatial difference calculation was performed on the two resulting datasets and the output "change dataset" was simplified using a modified visvalingam algorithm to preserve topology.

A more nuanced portrait of rangeland change over the past decade could conceivably be obtained by calculating changes within each of the parent IGBP rangeland classes (e.g. Grasslands), but such an analysis is beyond the scope of this study.

## Forest Cover Change
Produced by [Hansen et al.](http://www.sciencemag.org/content/342/6160/850), the Global Forest Cover Change dataset represents forest cover and forest cover change at a spatial resolution of 30m, though it has been degraded to 500m for use in the current study. The orginal forest cover change analysis was performed on thousands of images from the USGS Landsat program, acquired between 2000 and 2012. The final determination of forest cover change was made with a weighted supervised classification algorithm.

The subset of this data available here was clipped to the South Sudan ROI polygon, then converted to vector format and simplified using a modified visvalingam algorithm to preserve topology. 

For the current study, and attempt was made to adapt part of the Hansen methodology to identify patterns of desertification over the same time period in the Sahelian region of South Sudan. Specifically, this included the same imagery inputs in a Random Forests ensemble classification scheme trained with ancillary datsets such as Africover and high-resolution imagery. However, results were not promising with well under 60% accuracy assessed, and the approach was abandoned.