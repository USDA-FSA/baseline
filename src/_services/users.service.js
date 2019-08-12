/////// FAKE API ///////

const users = [
  { name: 'Def', email: 'def@def.com' },
  { name: 'Casey', email: 'casey@casey.com' }
];

export const service = {

  getAllUsers( callback ){
    setTimeout( () => callback( users ) ,50);
  }
  
};