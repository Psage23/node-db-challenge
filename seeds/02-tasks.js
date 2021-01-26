
exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      project_id: 1,
      task_id: 1,
      task_notes: 'Step 1',
      task_description: "This project is to help feed the needy"
    }
  ])
    
};
