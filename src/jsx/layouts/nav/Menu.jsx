export const MenuList = [

    {
        title: 'Future',	
        classsChange: 'mm-collapse',		
        iconStyle: <i className="material-icons">grid_view</i>,
        content: [
            
            {
                title: 'XRPUSDT',
                to: 'Future',					
            },
        
            
        ],
    },
        //Pages
        {
            title:'Pages',
            classsChange: 'mm-collapse',
            iconStyle: <i className="material-icons">article</i>,
            content : [
                {
                    title:'Error',
                    hasMenu : true,
                    content : [
                        {
                            title: 'Error 400',
                            to : 'page-error-400',
                        },
                        {
                            title: 'Error 403',
                            to : 'page-error-403',
                        },
                        {
                            title: 'Error 404',
                            to : 'page-error-404',
                        },
                        {
                            title: 'Error 500',
                            to : 'page-error-500',
                        },
                        {
                            title: 'Error 503',
                            to : 'page-error-503',
                        },
                    ],
                },
                {
                    title:'Lock Screen',
                    to: 'page-lock-screen',
                },
    
            ]
        },
   
]