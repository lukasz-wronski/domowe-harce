export default class PerformedModule {
  producePerformedService = () => {
    return {
      performAction: true,
      iterations: 2,
      allowLoseState: false,
      onEnd: () => {
        this.produceUserModel();
      },
    };
  };
}
