export default class CompanyLocator{
    getCompanyMenuTab() {
        return cy.get('[class=" menu sf-menu"]>li>a[href="https://www.qaoncloud.com/company/"]', ({ timeout: 2000 })).last()
    }
    getCompanySubMenuTab() {
        return cy.get('[class="sub-menu"]>li>a[href="https://www.qaoncloud.com/company/"]', ({ timeout: 2000 })).last()
    }
    getCompanySubMenu1Tab(){
        return cy.get('["https://www.qaoncloud.com/how-it-works/"]', ({ timeout: 2000 })).last()
        //return cy.get('#menu-item-30109 > a',({ timeout: 5000 }))
    }
    getCompanyMenuTab() {
        return cy.get('[class=" menu sf-menu"]>li>a[href="https://www.qaoncloud.com/company/"]', ({ timeout: 2000 })).last()
    }
    getCompanySubMenu2Tab(){
        return cy.get('[class="a[href="https://www.qaoncloud.com/why-qaoncloud-quality-assurance-quality-control-services/"]', ({ timeout: 2000 })).last()
    }
   
}