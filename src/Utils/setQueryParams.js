export const setQueryParams = (filtro, estado) => {
  const queries = {
    queryFiltro: `?filtro=${filtro}`,
    queryFiltroAndEstado: `?filtro${filtro}&estado=${estado}`,
    queryEstado: `?estado=${estado}`,
  };

  return filtro && estado
    ? queries.queryFiltroAndEstado
    : filtro
    ? queries.queryFiltro
    : estado
    ? queries.queryEstado
    : "";
};
