import CompetenciesLocator from "../Locators/CompetenciesLocator";

export default class CompetenciesPage {
    constructor () {
        this.comLocator = new CompetenciesLocator()
    }

    clickOnCompanyTab(){
        this.comLocator.getCompanyMenuTab().click()
        //this.comLocator.getCompanyMenuTab().trigger('mouseover').then(()=>{
         //   this.comLocator.getCompanySubMenu1Tab().should('be.visible').click({force:true})
            //this.comLocator.getCompanySubMenuTab().click({force:true})
            cy.get('[class=" menu sf-menu"]>li>a[href="https://www.qaoncloud.com/company/"]>span').last().click({force:true}).then(()=>{
            cy.wait(3000)    
            cy.get('[class=" menu sf-menu"]>li>a[href="https://www.qaoncloud.com/company/"]>span').last().trigger('mouseover').then(()=>{
                cy.wait(3000)            
            this.comLocator.getCompanySubMenu1Tab().click()
            this.comLocator.getCompanyMenuTab().click()
            this.comLocator.getCompanySubMenu2Tab().click()
                })
            })
            
            //this.comLocator.getCompanyMenuTab().click()
            // this.comLocator.getCompanySubMenu1Tab().click()
            // this.comLocator.getCompanyMenuTab().click()
            // this.comLocator.getCompanySubMenu2Tab().click()
     //   })
        //.trigger('mouseover')
       // this.comLocator.getCompanyMenuTab().click()
        
        //this.comLocator.getCompanySubMenuTab().click()
       
    }

    visitTheTab(tabName) {
        cy.visit(`https://www.qaoncloud.com/${tabName}`)
    }


}