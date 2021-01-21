	/*
	FOB 25000 to 50000 -> 1 ton to 5 ton truck (50000 pcs to 2.5 lakh pcs).
	sticker both side per bag 50 paisa.
	azo free one color for print on bag 7 BDT / 4 color 25 BDT. No need plate cost, if print cost more then 10,000 BDT
	
	Tag for labeling : 70 paisa.
	pater suta to hang tag :10 paisa.
		
	*/
	
	function calculate(){
		
		var bagstype = document.getElementById("bags");
		
		var vol = parseInt(document.getElementById("volume").value);
		
		var groceryjute_bagcost=20/12.5;
		
		var fob=0;
		var freight=0;
		var cnf=0;
		
		//azo free color+tag cost=8
		var bag_onecolor=8/12.5;
		
		//sticker print + adding (both side) to tag cost/bag 50øre. Not added in calculation yet

		var sticker=0.50;
		
		if(vol<6000){
			fob=25000/12.5;
		}
		
		if(vol>6000 && vol<120000){
			fob=25000/12.5;
		}
		
		if(vol>3000 && vol<7000){
			freight=250*7;
		}
		
	/*	if(bagstype="Grocery Jute"){
			var fob = 25000;
		}*/
		if((vol>7000) && (vol<15001)) {
			freight=500*7;
		}

		if((vol>15000) && (vol<30001)) {
			freight=1000*7;
		}

		if((vol>30000) && (vol<50001)) {
			freight=2000*7;
		}
		if((vol>50000) && (vol<120001)) {
			freight = (2000*7)*(vol/50000);
		}
			
		if((vol>120000) && (vol<250001)){
			fob = 50000/12.5;
			freight = (2000*7)*(vol/50000);
		}
		if((vol>250000) && (vol<1000001)){
			cnf=25000;
			truck=25000*(vol/250000);
			fob = (cnf+truck)/12.5;
			freight = (2000*7)*(vol/50000);
		}
		
		
//https://skat.dk/skat.aspx?oid=2244292
//https://tulli.fi/en/customs-duty-calculator?current=calculation&goods-id=44&region-id=3&currency-id=1&goods-price=2100&shipping-price=550
		//custom duty probably 5% to 14% of product value + shipping cost ??? I have calculated 2.5%
		var customduty = (vol*(groceryjute_bagcost+bag_onecolor)+ fob + freight)*0.025;		
		//var customduty = (fob + freight)*0.025;		
		var cphtooff = 2000;
		var revisor = 1500;
		var misc = 1000;
		
		var bagprice = vol*(groceryjute_bagcost+bag_onecolor) + fob + freight + customduty + cphtooff + revisor + misc;
		
		//bag cost with 50% profit
		var bagcost=bagprice + bagprice*.5;
		
		//added 25% moms with bagcost
		var vat=bagcost*.25;
		
		//bagprice with moms
		var bagpriceW_Vat=bagcost + vat;
		
		//cost per bag after moms
		var perbagCost= bagpriceW_Vat/vol;
		
		document.getElementById("bdprice").value = (bagprice/vol)+0.5;    
		document.getElementById("price").value = bagcost/vol;    
		document.getElementById("perbag").value = perbagCost;    
		
	}