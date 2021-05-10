'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const titles = [
      'addictologue', 'allergologue', 'anatomiste',
      'andrologue', 'anesthésiste', 'biologiste',
      'cancérologue', 'cardiologue', 'dentiste',
      'dermatologue', 'endocrinologue', 'gynécologue',
      'hématologue', 'hépatologue', 'gastologue', 'entérologue',
      'homéopathe', 'immunologiste', 'infectiologue',
      'médecin généraliste', 'néphrologue', 'neurologue',
      'obstétricien', 'ophtalmologue', 'orthopédiste',
      'otologiste', 'rhinologiste', 'laryngologiste',
      'parasitologue', 'pathologiste', 'pédiatre',
      'pneumologue', 'proctologue', 'psychiatre',
      'radiologue', 'rhumatologue', 'sexologue',
      'toxicologue', 'urologue', 'vénérologue',
      'vétérinaire', 'virologue'];

    let data = [];
    let date = new Date();
    titles.forEach(function (entry) {
      data.push({
        name: entry,
        createdAt: date,
        updatedAt: date
      });
  });
  await queryInterface.bulkInsert('Titles', data, {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Titles', null, {});

  }
};
