describe( 'jPrefetch plugin' , function(){

	beforeEach(function() {
		jasmine.getFixtures().clearCache()
		spyOn(jasmine.Fixtures.prototype, 'loadFixtureIntoCache_').andCallFake(function(relativeUrl){
			this.fixturesCache_[relativeUrl] = ajaxData
		})
	})

	it("find all links with data attribute prefetch equals true", function() {
		toBe(jQuerySelector);
		//expect(a).toBe(1);
	})

});