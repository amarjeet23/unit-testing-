import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";
describe("heroesComponent", () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;
  beforeEach(() => {
    HEROES = [
      { ia: 1, title: "test1", strength: 8 },
      { ia: 2, title: "test2", strength: 24 },
      { ia: 3, title: "test3", strength: 55 },
    ];
    mockHeroService = jasmine.createSpyObj([
      "getHeroes",
      "addHero",
      "deleteHero",
    ]);
    component = new HeroesComponent(mockHeroService);
  });

  describe("delete", () => {
    // use x before it method to ignore test case:
    // need to return observable as the delete method is returning observable
    xit("it should remove the passed heroes from the hero list", () => {
      mockHeroService.deleteHero.and.returnvalue(of(true));
      component.heroes = HEROES;
      component.delete(HEROES[2]);
      expect(component.heroes.length).toBe(2);
    });

    // ************************** Interaction Test ************************************
    it("it should have been called", () => {
      mockHeroService.deleteHero.and.returnvalue(of(true));
      component.heroes = HEROES;
      component.delete(HEROES[2]);

      // will test if button is clicked or not
      expect(mockHeroService.deleteHero).toHaveBeenCalled();

    //   test for correct parameter
    //   expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    });
  });
});
