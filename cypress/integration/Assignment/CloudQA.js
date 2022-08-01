import CompanyPage from "../../UIHelper/Pages/ComapnyPage"
import ServicesPage from "../../UIHelper/Pages/ServicesPage"
import CompetenciesPage from "../../UIHelper/Pages/CompetenciesPage"

import { TIMEOUT } from "dns";
import { exists } from "fs";
"experimentalSourceRewriting".true;
Cypress.on('uncaught:exception', (err, runnable) => {
     // returning false here prevents Cypress from
     // failing the test
     // failing the test
     return false
});
describe('First Cypress', () => {
    const TabNames ={
        COMPANY:"company",
        HOWITWORKS:"how-it-works",
        WHYUS:"why-qaoncloud-quality-assurance-quality-control-services",
        CAREERS:"careers",
        BLOG:"blog",
        FAQS:"faqs",
        //Services
        CLIENTSERVICES:"client-services",
        FULLYMANAGEDQA:"fully-managed-qa",
        JOINTLYMANAGEDQA:"jointly-managed-qa",
        ONETIMEMANAGEMENT:"one-time-engagement",
        HELPFOUNDERS:"how-qaoncloud-helps-founders",
        HELPSPRODUCT:"how-qaoncloud-helps-product",
        HELPSQA:"how-qaoncloud-helps-qa",
        HELPSENGINEERING:"how-qaoncloud-helps-engineering",
        //Competencies
        ALLCOMPETENCIES:"what-we-do",
        FUNCTIONALTESTING:"functional-testing-services",
        AUTOMATIONTESTING:"automation-testing-services",
        SECURITYTESTING:"security-testing-services",
        REGRESSIONTESTING:"regression-testing-services",
        APITESTING:"api-testing-services",
        AGILETESTING:"agile-testing-services"

    }
    const compPage = new CompanyPage()
    const servicesPage = new ServicesPage()
    const competenciesPage = new CompetenciesPage()
    beforeEach(() => {
        // Visit code should be here
        cy.visit("https://www.qaoncloud.com/")
        
   })
    it('First It Block', () =>{
 //       // Actual Test should be here
       cy.log("qaoncloud website got opened")
       cy.on('uncaught:exception',(error)=>{return false})
       //cy.contains("Company").click({force:true})
       //cy.contains("About Us").click({force:true})
       cy.wait(5000)
      // cy.get('[class=" menu sf-menu"]>li>a[href="https://www.qaoncloud.com/company/"]').last().trigger('mouseover')
       //cy.get('[class="sub-menu"]>li>a[href="https://www.qaoncloud.com/company/"]').last().click({force:true})

        //compPage.clickOnCompanyTab()

        //Visit the Comapny Tab
        compPage.visitTheTab(TabNames.COMPANY)

        //Visit the How it works Tab
        compPage.visitTheTab(TabNames.HOWITWORKS)
        compPage.visitTheTab(TabNames.WHYUS)
        compPage.visitTheTab(TabNames.CAREERS)
        compPage.visitTheTab(TabNames.BLOG)
        compPage.visitTheTab(TabNames.FAQS)

        //Visit the Services Tab
        servicesPage.visitTheTab(TabNames.CLIENTSERVICES)
        servicesPage.visitTheTab(TabNames.FULLYMANAGEDQA)
        servicesPage.visitTheTab(TabNames.JOINTLYMANAGEDQA)
        servicesPage.visitTheTab(TabNames.ONETIMEMANAGEMENT)
        servicesPage.visitTheTab(TabNames.HELPFOUNDERS)
        servicesPage.visitTheTab(TabNames.HELPSPRODUCT)
        servicesPage.visitTheTab(TabNames.HELPSQA)
        servicesPage.visitTheTab(TabNames.HELPSENGINEERING)

        //Visit the Competencies Tab
        competenciesPage.visitTheTab(TabNames.ALLCOMPETENCIES)
        competenciesPage.visitTheTab(TabNames.FUNCTIONALTESTING)
        competenciesPage.visitTheTab(TabNames.AUTOMATIONTESTING)
        competenciesPage.visitTheTab(TabNames.SECURITYTESTING)
        competenciesPage.visitTheTab(TabNames.REGRESSIONTESTING)
        competenciesPage.visitTheTab(TabNames.APITESTING)
        competenciesPage.visitTheTab(TabNames.AGILETESTING)
    })
 //    it('First It Block', () =>{
 //     //       // Actual Test should be here
 //           cy.log("qaoncloud website got opened")
     
 //        })
    
 
 // describe('First Cypress', () => {
 //     it('First It Block', () =>{
 //               // Actual Test should be here
 //                cy.log("Google website got opened")
         
 //         })
 
 
 //     beforeEach(() => {
 //         // Visit code should be here
 //         cy.visit("https://www.gmail.com")
 //         cy.get('input[type^="email"]').type('kavithar1209')
 //         cy.get('span.VfPpkd-vQzf8d').click()
 //         cy.get('input[type^="password"]').type('N6547876)14&(')
 //         cy.get('span.VfPpkd-vQzf8d').click()
 //         cy.should('contain', 'My First Post')
 // })
 
 // beforeEach(() => {
 //     //         // Visit code should be here
 //             cy.visit("https://automationteststore.com/")
 
 // })
   })  