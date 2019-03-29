/**
 * Created by Administrator on 2015/2/3.
 */
(function () {
    $(function () {
    			/*****************导航滑过背景****************************/
		$(".dh_li").mouseover(function(){
			$(this).addClass("daohangNow");
			});
		$(".dh_li").mouseout(function(){
			$(this).removeClass("daohangNow");
			});
		jQuery("#nav").slide({ type:"menu", titCell:".dh_li", targetCell:".Xiala",effect:"slideDown",delayTime:200,triggerTime:0,returnDefault:true});
		

			
		/*****************包商研究所鼠标滑过****************************/
		
		$(".bodycontent274_linkBox").mouseover(function(){
			$(this).addClass("bodycontent274_linkBoxHover");
			});
		$(".bodycontent274_linkBox").mouseout(function(){
			$(this).removeClass("bodycontent274_linkBoxHover");
			});
		/*****************小马bank****************************/	
		$(".Content200_content").mouseover(function(){
			$(this).addClass("Content200_contentHover");
			});
		$(".Content200_content").mouseout(function(){
			$(this).removeClass("Content200_contentHover");
			});


        /*****************广告图片轮播****************************/
        jQuery(".tpDaohang").slide( {
            titCell:"#btnLunbo li",
            mainCell:".lbPictures",
            effect:"fold",
            autoPlay:false,
            interTime:4500,
            delayTime:1000,
            scroll:1,
            titOnClassName:"lb_liClass",
            vis:1
        });
        /***************************Content778图片轮播********************************/
        jQuery(".Content778").slide( {
            titCell:".Content778_ul li",
            mainCell:".Content778_img",
            effect:"fold",
            autoPlay:false,
            interTime:4500,
            delayTime:1000,
            scroll:1,
            vis:1
        });
        /***************************样式却换方法***********************/
        var stylequehuan = function (objLi, spanClass1, spanClass2) {
            objLi.hover(function () {
                $(this).find('span').css("color", "#000");
                $(this).siblings().find('span').css("color", "#A6A6A6");
				var index=$(this).index();
				if(index==1){
					$(spanClass1).hide();
					$(spanClass2).show();
					$("#list_1").hide();
					$("#list_2").show();
				}else{
					$(spanClass2).hide();
					$(spanClass1).show();
					$("#list_2").hide();
					$("#list_1").show();
				}
            });
        };
        /***************************contentOne350_tile样式却换***********************/
        var contentOne350_tile = $(".content350_tile li");
        stylequehuan(contentOne350_tile, ".iconSpan1", ".iconSpan2");
        /**************************productPicList_title样式却换**********************************/
		$("#gsjr span").hover(function() {
			$("#gsjr span").removeClass().addClass("font18TitleNone");
			$(this).removeClass("font18TitleNone").addClass("font18Title");
		});
		
		
        /**********************便捷服务滚动******************************/
        jQuery(".content618_content").slide( {
            titCell:"",
            mainCell:".bjfw_list ul",
            effect:"leftLoop",
            autoPlay:false,
            interTime:2500,
            scroll:1,
            prevCell:".pev_bjfw",
            nextCell:".next_bjfw",
            vis:7
        });
        /*******************我要理财展开****************/
        var moveOver = function (imgObj, zkClass) {
            imgObj.mouseover(function () {
                $(zkClass).show();
            });
            imgObj.mouseout(function () {
                $(zkClass).hide();
            });
            $(zkClass).mouseover(function () {
                $(zkClass).show();
            });
            $(zkClass).mouseout(function () {
                $(zkClass).hide();
            });
        };
        var lcImg = $("#lcImg");
        moveOver(lcImg, ".zkClass_lc");
        var lcImg = $("#dkImg");
        moveOver(lcImg, ".zkClass_dk");
        var lcImg = $("#bkImg");
        moveOver(lcImg, ".zkClass_bk");
        /*************************** 公司金融服务滚动*********************************/
        /*jQuery(".productPicList").slide( {
            titCell:"",
            mainCell:".productPicListContent ul",
            effect:"leftLoop",
            autoPlay:false,
            interTime:2500,
            scroll:1,
            prevCell:".productPicList_pev",
            nextCell:".productPicList_next",
            vis:5
        });*/
        /*******************公司金融服务下拉显示显示信息**********************/
        $(".prodoctPicList_infoImg").each(function () {
            $(this).mouseover(function () {
                $(this).next().show();
            });
			$(this).mouseout(function () {
                $(this).next().hide();
            });
        });
        $("#prodoctPicListUl li .prodoctPicList_liInfo").each(function () {
            $(this).mouseover(function () {
                $(this).show();
            });
            $(this).mouseout(function () {
                $(this).hide();
            });
        });

		jQuery(".Cardwybklog-detail").slide( {
            mainCell:".Cardwybklog-cotent",
            effect:"leftLoop",
            autoPlay:true,
            interTime:2500,
            scroll:1,
            prevCell:".Cardwybklog-fyprev",
            nextCell:".Cardwybklog-fynext",
            vis:1
        });


    })
})();
function openWindow(){
    window.open('http://14.16.9.30:8089/','newwindow','height=710,width=1024,top=30,left=50,toolbar=no,menubar=no,scrollbars=no,location=no,status=no');
}

