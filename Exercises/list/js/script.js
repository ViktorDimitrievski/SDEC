ShowHideReferentListItems();

function ShowHideReferentListItems(){
	
	$(".showMeMore").click(function(){
	$("#hideInList").attr("id","showInList");
	$("#hideInList").removeAttr("id","showInList");
	});


}




var firstListContent = '<li class="list-group-item" id="listCol">Изградба на ревизиони водоводни шахти  - Скопје 2012 и 2013 г</li>'+
						'<li class="list-group-item">Реконструкција и санација на ЈЗУ Општа болница – Струмица 2013 г</li>'+
						'<li class="list-group-item">Изградба на Болница ПЕТ Центар – Скопје 2013-2014</li>'+
						'<li class="list-group-item">Изведба на рехабилитација на 10(десет) основни училишта и 6(шест) средни училишта во Р.Македонија 2013-2014г</li>'+
						'<li class="list-group-item">Изведба на рехабилитација на 8(осум) училишта во Р.Македонија 2014 г</li>'+
						'<li class="list-group-item">Извведување на градежни и градежно-занаетчиски работи при реконструкција и адаптација на ЈЗУ Клиника за кардиологија Скопје 2014</li>';
var secondListContent = '<li class="list-group-item">Реконструкцја на 25 основни школи во Р.Македонија – Светска банка – 2010 година</li>'+
						'<li class="list-group-item">Хидроизолација на каптажа Рашче – ЈП Водовод и канализација – 2011 година</li>'+
						'<li class="list-group-item">Реконструкција на воени објекти – Министерство за одбрана –  2010 година</li>'+
						'<li class="list-group-item">Изградба на болница Неуромедика – Емил Угриновски - 2015 година</li>'+
						'<li class="list-group-item">Изведба на фасада на ул.Никола Вапцаров бр. 10 – Град Скопје – 2015 година</li>'+
						'<li class="list-group-item">Изградба на стамбен објект на ул. Ристо Равановски бр.11 –  Гибрис Холдинг – 2015 година </li>';