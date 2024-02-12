export default class SideBarComponent {

    clickSideBar = () => cy.get('.Sidebar_sidebarContainer__FIKcV').click({ force: true });

    scrollToBottomSideBar = () => cy.get('.Sidebar_sidebarContainer__FIKcV').scrollTo('bottom')

}