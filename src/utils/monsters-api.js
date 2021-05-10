import request from 'superagent';

const URL = '/api/monsters';

export async function getAllMonsters(){
  const response = await request.get(URL);
  return response.body;
}

export async function getMonster(id){
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}