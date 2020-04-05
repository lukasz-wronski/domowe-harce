import EfectorModule from './EfectorModule';
import GameModule from './GameModule';
import PerformedModule from './PerformerModule';
import QuestionsModule from './QuestionsModule';
import UserModule from './UserModule';

const container = {
  modules: [
    UserModule,
    GameModule,
    QuestionsModule,
    PerformedModule,
    EfectorModule,
  ],
};

export default container;
