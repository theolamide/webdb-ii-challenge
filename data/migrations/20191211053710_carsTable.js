
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        // primary key, called "id", an integer, auto-increments
        tbl.increments();

        // .unique() is a constraint (rules we define to protect against invalid data)
        tbl.integer("VIN", 125)
            .notNullable()
            .unique();
            
        
        tbl.string("manufacturer", 255)
            .notNullable()
            .index();

        tbl.string("model", 255)
            .notNullable();

        tbl.integer("year", 4)
            .notNullable();

        tbl.boolean("import").defaultTo(false);
    });  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};
