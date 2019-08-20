/////// FAKE API ///////

const apiData = [
  {
    label: "Home",
    path: "/",
    hasChild: "false",
    children: []
  },
  {
    label: "Boilerplate",
    path: "/boilerplate",
    hasChild: "false",
    children: []
  },
  {
    label: "Reports",
    path: "/reports",
    hasChild: "true",
    children: [
      {
        label: "Crop Report",
        path: "/reports/crop-report",
        hasChild: "false",
        children: [],
      },
      {
        label: "Financial Report",
        path: "/reports/financial-report",
        hasChild: "false",
        children: [],
      },
      {
        label: "Producer Report",
        path: "/reports/producer-report",
        hasChild: "false",
        children: [],
      }
    ],
  },


];

export const navigationService = {

  getNavigation( callback ){
    setTimeout( () => callback( apiData ) ,50);
  }
  
};