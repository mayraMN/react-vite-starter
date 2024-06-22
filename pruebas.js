import ataques from './ataquesBulbasaur.json'with { type: "json" };

ataques.moves.filter(move => move.version_group_details?.[0].level_learned_at).forEach(move => {
  console.log(move.move.name, move.version_group_details?.map(group => group.level_learned_at))
})
