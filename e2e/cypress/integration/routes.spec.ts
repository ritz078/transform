describe("google search", () => {
  it("should work", () => {
    cy.visit("http://www.google.com");
    cy.get("#lst-ib").type("Hello world{enter}");
  });
});
