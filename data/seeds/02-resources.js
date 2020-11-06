
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: 'Sink',
          description:''
        },
        {
          name: 'Sponge',
          description:'Microwave it first'
        },
        {
          name: 'Drill',
          description:'Borrow from Stephan'
        },
        {
          name: 'Bolts',
          description:''
        },
        {
          name: 'Boards',
          description:'Cedarwood, from Home Depot'
        },
        {
          name: 'Garage',
          description:''
        },
        {
          name: 'Containers',
          description:'6x2 clear boxes from amazon'
        },
        {
          name: 'Garbage Can',
          description:''
        },
        {
          name: 'Labels',
          description:'Check if labeling tape is full'
        },
        {
          name: 'Level',
          description:''
        },
        {
          name: 'Drying Rack',
          description:'Table Saw'
        },
        {
          name: 'Table Saw',
          description:''
        },
        {
          name: 'Soap',
          description:'dawn dish soap'
        },
      ]);
    });
};
