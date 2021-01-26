
exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
        project_name: 'Feed the Needy',
        project_description: 'find food',
        completed: 'false'
    },

    {
      project_name: 'Travel to the Moon',
      project_description: 'Find ways to travel',
      completed: 'true'
    }
  ]);
};
