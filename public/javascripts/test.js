Ext.onReady(function() {
	Ext.Ajax.request({
    url: '/test_load.js',
    params: {
        paramName: 'paramValue'
    },
    timeout: 3000,
    method: 'GET',
    success: function(xhr) {
        //alert('dsfsdf');
        //alert('Response is "' + xhr.responseText + '"');
    }
	});

	var data = [["xx", "aabb", "fff", "cco"]];
 
    var tpl = new Ext.XTemplate(
        '<tpl for=".">',
            '<div class="thumb-wrap" id="{name}">',
            '<img src="{url_im}" title="{name}">',
            '<span>Name: {name} {vorname}, {alter} Jahre',
            '<input type="button" name="addButton" value="Add"/></div>',
        '</tpl>'
    );
 
     var store = new Ext.data.SimpleStore({
        fields: [
           {name: 'name'},
           {name: 'url_im'},
           {name: 'vorname'},
           {name: 'alter'}
        ],
        data: data
    });
 
    var panel = new Ext.Panel({
        frame: true,
        width:535,
        autoHeight:true,
        collapsible:true,
        layout:'fit',
        title:'',
        //contentEI: Ext.get('xx'),
        items: new Ext.DataView({
            store: store,
            tpl: tpl,
            autoHeight:true,
            multiSelect: true,
            overClass:'x-view-over',
            itemSelector:'div.thumb-wrap',
            emptyText: 'No images to display',
            listeners:{
                click: function(dataView, index, node, e ){
                    var target = e.getTarget();
                    if(target.name == "addButton"){
                        alert("doStuff");
                    }
                }
            }
        })
 
    });
    panel.render('xx');
    
	Ext.get('okButton').on('click', function(){
		var msg = Ext.get('msg');
		msg.load({
			url: '/test_load.js',
			params: {
				textName: Ext.get('name').dom.value
			},
			text: 'Updating...'
		});
		msg.show();
	});
	
	var paragraphClicked = function(e) {
        var paragraph = Ext.get(e.target);
        paragraph.highlight();
 
        Ext.MessageBox.show({
            title: 'Paragraph Clicked',
            msg: paragraph.dom.innerHTML,
            width:400,
            buttons: Ext.MessageBox.OK,
            animEl: paragraph
        });
    }
  Ext.select('p').on('click', paragraphClicked);
    
	Ext.create('Ext.tab.Panel', {
    renderTo: Ext.getBody(),
    height: 100,
    width: 200,
    items: [
        {
            // Explicitly define the xtype of this Component configuration.
            // This tells the Container (the tab panel in this case)
            // to instantiate a <a href="#!/api/Ext.panel.Panel" rel="Ext.panel.Panel" class="docClass">Ext.panel.Panel</a> when it deems necessary
            xtype: 'panel',
            title: 'Tab One',
            html: 'sdf'	,
            listeners: {
                render: function() {
                    //Ext.MessageBox.alert('Rendered One', 'Tab One was rendered.');
                }
            }
        },
        {
            // this component configuration does not have an xtype since 'panel' is the default
            // xtype for all Component configurations in a Container
            title: 'Tab Two',
            html: 'The second tab',
            listeners: {
                render: function() {
                    Ext.MessageBox.alert('Rendered One', 'Tab Two was rendered.');
                }
            }
        }
    ]
	});
	
	Ext.create('Ext.panel.Panel', {
    title: 'Fit Layout',
    width: 300,
    height: 150,
    layout:'fit',
    items: {
        title: 'Inner Panel',
        html: 'This is the inner panel content',
        bodyPadding: 20,
        border: false
    },
    contentEl: Ext.get('xx')
	});
	//Ext.fly('xx').load({url: '/test_load.js', params: { textName: 'этот текст' } })
	//var vp = new Ext.Viewport({
  //  layout: 'border',
  //  applyTo: Ext.get('xx'),
  //  items: [{
  //     region: 'center',
  //      border: false
  //  }]
	//});
 
	//var region = vp.layout.center.panel;
});