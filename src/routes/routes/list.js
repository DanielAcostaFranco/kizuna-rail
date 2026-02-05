import { getAllRoutes, getListOfRegions, getListOfSeasons } from '../../models/model.js';

export default async (req, res) => {
  const regions = await getListOfRegions();
  const seasons = await getListOfSeasons();

  const selectedRegion = (req.query.region || '').trim().toLowerCase();
  const selectedSeason = (req.query.season || '').trim().toLowerCase();

  let routes = await getAllRoutes();

  if (selectedRegion) {
    routes = routes.filter(r => r.region === selectedRegion);
  }

  if (selectedSeason) {
    routes = routes.filter(r => r.bestSeason === selectedSeason);
  }

  res.render('routes/list', {
    title: 'Scenic Train Routes',
    regions,
    seasons,
    routes,
    selectedRegion,
    selectedSeason,
  });
};
