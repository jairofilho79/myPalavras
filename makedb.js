(async () => {
    const knex = require('knex')({
        dialect: 'sqlite3',
        connection: {
          filename: './data.db',
        },
      });
    
    await knex.schema
      .createTable('User', function(table) {
        table.increments('id');
        table
            .string('username')
            .notNullable();
        table.unique('username');
      })
    
    await knex.schema
      .createTable('Syllable', function(table) {
        table.increments('id');
        table
            .string('name')
            .notNullable();
        table.unique('name');
      })
    
    await knex.schema
      .createTable('Word', function(table) {
        table.increments('id');
        table
            .string('name')
            .notNullable();
        table.unique('name');
      })
    
    await knex.schema
      .createTable('SyllableOfTheWord', function(table) {
        table.increments('id');

        table.integer('id_syllable')
            .unsigned()
            .notNullable();
        table.foreign('id_syllable').references('Syllable.id')

        table.integer('id_word')
            .unsigned()
            .notNullable();
        table.foreign('id_word').references('Word.id')
      })
    
    await knex.schema
      .createTable('History', function(table) {
        table.increments('id');
        table.boolean('is_correct').notNullable()
        table.integer('id_user')
            .unsigned()
            .notNullable();
        table.foreign('id_user').references('User.id')

        table.integer('id_word')
            .unsigned()
            .notNullable();
        table.foreign('id_word').references('Word.id')
      })

    await knex.schema
      .createTable('SyllableOfTheHistory', function(table) {
        table.increments('id');

        table.integer('id_history')
            .unsigned()
            .notNullable();
        table.foreign('id_history').references('History.id')

        table.integer('id_syllable')
            .unsigned()
            .notNullable();
        table.foreign('id_syllable').references('Syllable.id')
      })

    await knex('User').insert({
        username: 'jairofilho79'
    })

    await knex('Word').insert({
        name: 'patota'
    })

    await knex('Word').insert({
        name: 'patota'
    })
})()
