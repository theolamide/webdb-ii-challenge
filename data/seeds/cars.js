
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: "8JDLKWKW83290",manufacturer:"Ford",model:"Focus",year:"2009",import:0},
        {VIN: "HWQKJ9101JWIJ",manufacturer:"Chevy",model:"Impala",year:"1899",import:0},
        {VIN: "QLKWNJQMDHK93",manufacturer:"Tesla",model:"model3",year:"2018",import:0}
      ]);
    });
};
