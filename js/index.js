(function(){
	var _banner = document.getElementById("banner");
	var _bannerUl = _banner.getElementsByTagName("ul")[0];
	var _bannerli = _bannerUl.getElementsByTagName("li");
	var _bannerOl = document.getElementsByClassName('banner-ol')[0];
	var _bannerOlLi = _bannerOl.getElementsByTagName('li');
	var startX = 0;
	var endX = 0;
	var num = 0;
	var str="";
	var target=_banner.offsetWidth;
	var timer = null;
	/*获取开始触摸屏幕的坐标*/
	_banner.addEventListener("touchstart",function(e){
		clearInterval(timer);
		startX = e.targetTouches[0].clientX;
	});
	
	/*获取手指移动的坐标*/
	_banner.addEventListener("touchmove",function(e){
		clearInterval(timer);
		endX = e.targetTouches[0].clientX;
	});
	
	/*触摸结束发生的事件*/
	_banner.addEventListener("touchend",function(){
		clearInterval(timer);
		timer = setInterval(autoPlay,3000);
		if(endX-startX>0){
			num--;
			if(num<0){
				num=_bannerli.length-1;
			}
			
		}
		if(endX-startX<0){
			num++;
			if(num>_bannerli.length-1){
				num=0;
			}
			
		}
		_bannerUl.style.left = -target*num+'px';
		
		for (var i=0;i<_bannerOlLi.length;i++) {
			_bannerOlLi[i].className = '';
			_bannerOlLi[num].className = 'active';
		}
	});
	
	timer = setInterval(autoPlay,3000);
	function autoPlay(){
		num++;
		if(num>_bannerli.length-1){
			num=0;
		}
		for (var i=0;i<_bannerOlLi.length;i++) {
			_bannerOlLi[i].className = '';
			_bannerOlLi[num].className = 'active';
		}
		_bannerUl.style.left = -target*num+'px';
	};
	
	
})();
