(function() {

	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	
	var is_iPad = navigator.userAgent.toLowerCase().indexOf('ipad') > -1;
	
	/**
	 * Detect if the current device is a mobile one
	 */
	var mobile = function(){
		return {
			detect:function(){
				var uagent = navigator.userAgent.toLowerCase(); 
				var list = this.mobiles;
				var ismobile = false;
				for(var d=0;d<list.length;d+=1){
					if(uagent.indexOf(list[d])!=-1){
						ismobile = true;
					}
				}
				return ismobile;
			},
			mobiles:[
				"midp","240x320","blackberry","netfront","nokia","panasonic",
				"portalmmm","sharp","sie-","sonyericsson","symbian",
				"windows ce","benq","mda","mot-","opera mini",
				"philips","pocket pc","sagem","samsung","sda",
				"sgh-","vodafone","xda","palm","iphone",
				"ipod","android"
			]
		};
	}();
	
	function addCSS(url) {
	    var headID = document.getElementsByTagName("head")[0];
	    var cssNode = document.createElement('link');
	    cssNode.type = 'text/css';
	    cssNode.rel = 'stylesheet';
	    cssNode.href = url;
	    cssNode.media = 'screen';
	    headID.appendChild(cssNode);
	}
	
	function addScript(url) {
	    scscript=document.createElement('SCRIPT');
	    scscript.type='text/javascript';
	    scscript.src=url;
	    document.getElementsByTagName('head')[0].appendChild(scscript);
	}
	
	function showItem(id) {
	    try {
	        var item = document.getElementById(id);
	        if (item) {
	            item.style.display = "";
	        }
	        if (is_chrome) {
	            var embeds = document.getElementsByTagName("embed");
	            for (var i = 0; i < embeds.length; i++) {
	                embeds[i].style.visibility = "hidden";
	            }
	        }
	        
	        document.getElementById("iframeUnderDivToShowOverFlash").style.display = "block";
	    } catch (e) {
	
	    }
	}
	
	function toggleItem(id) {
	    var item = document.getElementById(id);
	    if (item) {
	        if (item.style.display == "none") {
	            item.style.display = "";
	            document.getElementById("iframeUnderDivToShowOverFlash").style.display = "block";
	            
	            if (is_chrome) {
	                var embeds = document.getElementsByTagName("embed");
	                for (var i = 0; i < embeds.length; i++) {
	                    embeds[i].style.visibility = "hidden";
	                }
	            }
	            
	        } else {
	            document.getElementById("iframeUnderDivToShowOverFlash").style.display = "none";
	            item.style.display = "none";
	            
	            if (is_chrome) {
	                var embeds = document.getElementsByTagName("embed");
	                for (var i = 0; i < embeds.length; i++) {
	                    embeds[i].style.visibility = "visible";
	                }
	            }
	        }
	    }
	}
	
	function hideBklet(id) {
	    var item = document.getElementById(id);
	    if (item) {
	        document.getElementById("iframeUnderDivToShowOverFlash").style.display = "none";
	        item.style.display = "none";
	        
	        if (is_chrome) {
	            var embeds = document.getElementsByTagName("embed");
	            for (var i = 0; i < embeds.length; i++) {
	                embeds[i].style.visibility = "visible";
	            }
	        }
	    }
	}
	
	function sleep(milliSeconds){
	    var startTime = new Date().getTime(); // get the current time
	    while (new Date().getTime() < startTime + milliSeconds); // hog cpu
	}
	
	function createDisplay() {
			    addCSS(sc_srvurl() + "/resources/bklet/bklet_external_scpWindow.css");
	    var div = document.createElement("div");
	    div.id = "sc_bookmarklet";
	    document.body.insertBefore(div, document.body.firstChild);
	    
	    var iframeUnderDivToShowOverFlash = document.createElement("iframe");
	    iframeUnderDivToShowOverFlash.id = "iframeUnderDivToShowOverFlash";
	    iframeUnderDivToShowOverFlash.setAttribute("frameborder", "0");
	    iframeUnderDivToShowOverFlash.setAttribute("allowTransparency", "true");
	    
	        	iframeUnderDivToShowOverFlash.className+=' scoopit-hulk'
	    document.body.insertBefore(iframeUnderDivToShowOverFlash, div);
	    
	    if (is_chrome) {
	        var embeds = document.getElementsByTagName("embed");
	        for (var i = 0; i < embeds.length; i++) {
	            embeds[i].setAttribute("wmode","transparent");
	        }
	    }
	}
	
	function sc_srvurl() {
		if (typeof document.sc_srvurl != 'undefined') {
			return document.sc_srvurl;
		}
		return document.body.getAttribute("sc_srvurl");
	}
	function sc_scpurl() {
		if (typeof document.sc_scpurl != 'undefined') {
			return document.sc_scpurl;
		}
		return document.body.getAttribute("sc_scpurl");
	}
	function bindEvent(object, eventName, listener){
		if (typeof object.addEventListener != 'undefined') {
		    object.addEventListener(eventName, listener, false);
		} else if (typeof window.attachEvent != 'undefined') {
		    object.attachEvent('on'+eventName, listener);
		}
	}
	function unbindEvent(object,eventName, listener) {
		if (typeof object.removeEventListener != 'undefined') {
		    object.removeEventListener(eventName, listener, false);
		} else if (typeof window.detachEvent != 'undefined') {
		    object.detachEvent('on'+eventName, listener);
		}
	}
if(typeof(_scit_bklet_window)=="undefined"){
		
	var iframe_url = sc_srvurl() + "/bookmarklet?url="+encodeURIComponent(document.location).replace(/\-/g, "%2D").replace(/\_/g, "%5F").replace(/\./g, "%2E").replace(/\!/g, "%21").replace(/\~/g, "%7E").replace(/\*/g, "%2A").replace(/\'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29");
    if(mobile.detect()) {
		window.location.href=iframe_url;
	} else {
	    var existing_iframe = document.getElementById('sc_bookmarklet');
	    var bindEvents = false;
	    if (!existing_iframe){
	    	bindEvents = true;
	        createDisplay();
	    }
	    showItem('sc_bookmarklet'); 
	    existing_iframe = document.getElementById('sc_bookmarklet');
	    
	    
	    var iframe_url = sc_srvurl() + "/bookmarklet?url="+encodeURIComponent(document.location).replace(/\-/g, "%2D").replace(/\_/g, "%5F").replace(/\./g, "%2E").replace(/\!/g, "%21").replace(/\~/g, "%7E").replace(/\*/g, "%2A").replace(/\'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29");
	    var url2scoop = sc_scpurl();
	    if (url2scoop && typeof url2scoop != 'undefined') {
	      	var iframe_url = sc_srvurl() + "/bookmarklet?url="+encodeURIComponent(url2scoop).replace(/\-/g, "%2D").replace(/\_/g, "%5F").replace(/\./g, "%2E").replace(/\!/g, "%21").replace(/\~/g, "%7E").replace(/\*/g, "%2A").replace(/\'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29");
	    }
	    // IT-6393
	    iframe_url += "&js_resolved=1";
	    
	    
	    var loadingUrl = sc_srvurl() + "/resources/img/popup/loader.gif"
	    
		existing_iframe.className="scoopit-hulk v4";

	var body = document.body,html = document.documentElement;
	var height = Math.max( body.scrollHeight, body.offsetHeight, 
	           html.clientHeight, html.scrollHeight, html.offsetHeight );
	iframeUnderDivToShowOverFlash = document.getElementById("iframeUnderDivToShowOverFlash");
	iframeUnderDivToShowOverFlash.style.height=height+"px";
	existing_iframe.style.height=height+"px";





	    var str = "";
	    str += "<div id='sc_main'>";
	    str += "    <iframe id='sc_iframe' frameborder='0' name='sc_bookmarklet_iframe' src='" + iframe_url + "'></iframe>"
	    str += "        &nbsp;";
	    str += "    </a>";
	    str += "</div>";
	
	    existing_iframe.innerHTML = str;

		sc_main = document.getElementById("sc_main");
		sc_main.style.top = ((typeof(window.pageYOffset)!="undefined"?window.pageYOffset : document.documentElement.scrollTop)+10)+"px";
	    
	    if(bindEvents){
			bindEvent(window,'message',onScoopItMessage);
	    }
	}
} else {
						if(_scit_bklet_bind_events){
		//console.log("bind event");
		_scit_bklet_bind_events = false;
		bindEvent(window,'message',onScoopItMessage);
	}
		
    var iframe_url = sc_srvurl() + "/bookmarklet?url="+encodeURIComponent(document.location).replace(/\-/g, "%2D").replace(/\_/g, "%5F").replace(/\./g, "%2E").replace(/\!/g, "%21").replace(/\~/g, "%7E").replace(/\*/g, "%2A").replace(/\'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29");
    var url2scoop = sc_scpurl();
    if (url2scoop && typeof url2scoop != 'undefined') {
      	var iframe_url = sc_srvurl() + "/bookmarklet?url="+encodeURIComponent(url2scoop).replace(/\-/g, "%2D").replace(/\_/g, "%5F").replace(/\./g, "%2E").replace(/\!/g, "%21").replace(/\~/g, "%7E").replace(/\*/g, "%2A").replace(/\'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29");
    }
    // IT-6393
    iframe_url += "&js_resolved=1";
    _scit_bklet_window.document.location=iframe_url;
}
   
    function getSelectionText() {
        var text = "";
        try {
	        if (window.getSelection) {
	            text = window.getSelection().toString();
	        } else if (document.selection && document.selection.type != "Control") {
	            text = document.selection.createRange().text;
	        }
        } catch(e) {}
        return text;
    }

    function onScoopItMessage(e) {
    	
    	if (e.data == "resize_to_small_size") {
    		 var sc_main = document.getElementById('sc_main');
    		 sc_main.className = sc_main.className + " scoopitWindowSuccessBookmarklet";
    		 jQuery.modal.update();
    	} else if (e.data == "close_scoopit") {
	        hideBklet("sc_bookmarklet");
	    } else if (e.data == "start_resolution") {
	    	var data = {};
	    	
                        data.chk="js-resolved-scoopit-bklet";

            data.selectedDescription = getSelectionText();

            data.title = document.title;
	    	data.url = "" + document.location;
	    	data.baseUrl = getBaseUrl();
	    	data.contentType = "text/html";
	    	data.plaintext = document.textContent;

	    	// keep the same order as the on in python
	    	analyzers.locale.analyse(document, data);
	        analyzers.link.analyse(document, data);
	        analyzers.metadata.analyse(document, data);
	        analyzers.itemprops.analyse(document, data);
            analyzers.images.analyse(document, data);
	        //analyzers.microdata.analyse(document, data);
	        analyzers.twitter.analyse(document, data);
	        analyzers.youtube.analyse(document, data);
	        analyzers.slideshare.analyse(document, data);
	        //analyzers.content.analyse(document, data);
	        analyzers.dates.analyse(document, data);
	        analyzers.rdf.analyse(document, data);

	    	// In browser resolution (hardcoded for now)
	    	if (typeof(_scit_bklet_window)=="undefined") {
	    		document.getElementById("sc_iframe").contentWindow.postMessage(JSON.stringify(data), "*");	
	    	} else {
	    		_scit_bklet_window.postMessage(JSON.stringify(data), "*");
	    	}
	    }
	}
	
    function getBaseUrl() {
    	// handle base elements such as:
    	// <base href="http://www.jsgp.us/"/>
    	var baseElts = document.getElementsByTagName("base");
    	if (baseElts.length > 0) {
    		var href = baseElts[0].getAttribute("href");
    		if (typeof(href)!="undefined" && href != null && href.length > 0) {
    			return href;
    		}
    	}
    	return "" + document.location;
    }

    /////////////////////////////////////////////////////////////////////
    // The following code should be the mirror of the implementation of the python WPIF. As much as possible.
    /////////////////////////////////////////////////////////////////////

    var utils = {
        getAttribute: function(element, name, value) {
            var v = element.getAttribute(name);
            if (v == null) {
                v = value;
            }
            return v;
        },

        getIntAttribute: function(element, name) {
            var v = element.getAttribute(name);
            if (v == null) {
                return null;
            }
            return parseInt(v);
        },

        oldestWebContent: new Date(1991, 8, 23).getTime(),
        monthsStrToIntMap: {
            "jan": 1,
            "feb": 2,
            "mar": 3,
            "apr": 4,
            "may": 5,
            "jun": 6,
            "jul": 7,
            "aug": 8,
            "sep": 9,
            "oct": 10,
            "nov": 11,
            "dec": 12
        },

        parentsHasClass: function(node, className) {
            for (var n = node; n !== document; n = n.parentNode){
                if (n.className.indexOf(className) >= 0) {
                    return true;
                }
            }
            return false;
        },

        createObjectIfNotExists: function(container, name) {
            if (!(name in container)) {
                container[name] = {};
            }
        },

        createArrayIfNotExists: function(container, name) {
            if (!(name in container)) {
                container[name] = [];
            }
        },

        setValue: function(data, path, value) {
            if (!value) {
                return;
            }
    
            if (path == "content") {
                value = value.replace(/\s+/, " ").trim();
            }
    
            var container = data;
            var name = path;
            if (path.indexOf(".") >= 0) {
                var properties = path.split(".");
                name = properties[properties.length - 1];
                for (var i = 0; i < properties.length; i++) {
                    var prop = properties[i];
                    if (prop != name) {
                        this.createObjectIfNotExists(container, prop);
                        container = container[prop];
                    }
                }
            }
            container[name] = value;
        },

        addImage: function(data, img) {
            if (!img || !("width" in img) || !("height" in img)) {
                return;
            }
            this.createArrayIfNotExists(data, "imgs")
            if (!("type" in img))�{
                img["type"] = "unknown";
            }
            for (var i = 0; i < data["imgs"].length; i++) {
                var image = data["imgs"][i];
                if (image["url"] == img["url"] && image["type"] == img["type"]) {
                    return;
                }
            }
            data["imgs"].push(img);
        },

        addDate: function(data, date) {
            if (!date) {
                return;
            }
            this.createArrayIfNotExists(data, "dates");
            data["dates"].push(date);
        },

        addVideo: function(data, vid) {
            if (!vid) {
                return;
            }

            this.createArrayIfNotExists(data, "videos");
            if (!("type" in vid)) {
                vid["type"] = "unknown";
            }
            for (var i = 0; i < data["videos"].length; i++) {
                var video = data["videos"][i];
                if (video["url"] == vid["url"] && video["type"] == vid["type"]) {
                    return;
                }
            }
            data["videos"].push(vid);
        },

        addKeyword: function(data, keyword) {
            if (!keyword) {
                return;
            }
            keyword = keyword.trim();
            this.createArrayIfNotExists(data, "keywords");
            if (!(keyword in data["keywords"])) {
                data["keywords"].push(keyword);
            }
        },

        findOneElement: function(element, target) {
            var elements = element.querySelectorAll(target);
            if (elements.length == 1) {
                return elements[0];
            } else {
                return null;
            }
        },

        findFirstElement: function(element, target) {
            var elements = element.querySelectorAll(target);
            if (elements.length > 0) {
                return elements[0];
            } else {
                return null;
            }
        },

        findLastElement: function(element, target) {
            var elements = element.querySelectorAll(target);
            if (elements.length > 0) {
                return elements[elements.length - 1];
            } else {
                return null;
            }
        }        
    }

    var analyzers = {
		locale: {
			analyse: function(document, data) {
				var html = document.querySelectorAll("html");
				if (html.length == 1) {
					lang = html[0].getAttribute("lang");
					if (lang != ""){
						 data.locale = lang;
					}
				}
			}
		},
        dates: {
            analyse: function(document, data) {
                data.dates = [];
                var dateCandidates = document.querySelectorAll(".post-time, p.submitted, article .date, .publication-date, .dateNumCateg, .post-date, .innerArticle_span_date, .published, .news-full .date, .published-date, .post-meta .date, .entry-meta.entry-header, .post-header .date, .entity__summary-date");
                for(var i = 0; i < dateCandidates.length; i++) {
                    data.dates.push({
                        "html" : dateCandidates[i].innerHTML,
                        "class" : dateCandidates[i].getAttribute("class"),
                        "source" : "class"
                    })
                }
                
                //look for other properties
                var dateCandidates = document.querySelectorAll("[itemprop='datePublished'], [property='dc:date dc:created'], [property='dc:date'], [property='dc:created'], [datatype='xsd:dateTime']");
                for(var i = 0; i < dateCandidates.length; i++) {
                    data.dates.push({
                        "html" : dateCandidates[i].innerHTML,
                        "text": utils.getAttribute(dateCandidates[i], "content", ""),
                        "class" : dateCandidates[i].getAttribute("class"),
                        "source" : "property"
                    })
                }
                
                //look after author tags - :)
                var authorElements = document.querySelectorAll(".byline, .author, #author_info, .author_info, .auteur-date");
                var stringToCheck = ["published"]
                for (var i=0; i<authorElements.length; i++) {
                	var authorElement = authorElements[i];
                	var nextSibling = authorElement.nextElementSibling;
                	if (nextSibling) {
                		var nextSiblingText = nextSibling.innerHTML;
                		for (var j=0; j<stringToCheck.length; j++) {
                			if (nextSiblingText.toLowerCase().indexOf(stringToCheck[j]) !== -1) {
                				data.dates.push({
                                    "html" : nextSiblingText,
                                    "class" : nextSibling.getAttribute("class"),
                                    "source" : "close_to_author_tag"
                                })
                				break;
                			}
                		}
                	}
                }
                
                //just after title element
                var titleElements = document.querySelectorAll(
                    ".hs-blog-post .post-header h2"     //when generated by hubspot (hs-blog-post)
                );
                for (var i=0; i<titleElements.length; i++) {
                    var titleElement = titleElements[i];
                    var nextSibling = titleElement.nextElementSibling
                    if (nextSibling) {
                        var nextSiblingText = nextSibling.innerHTML
                        if (nextSiblingText) {
                        	data.dates.push({
                        		"html": nextSiblingText,
                        		"class": nextSibling.getAttribute("class"),
                        		"source": "close_to_title"
                        	});
                        }
                    }
                }
                
                //look for date in author tag - I know, the web is a mess
                var dateCandidates = authorElements;
                for(var i = 0; i < dateCandidates.length; i++) {
                    data.dates.push({
                        "html" : dateCandidates[i].innerHTML,
                        "class" : dateCandidates[i].getAttribute("class"),
                        "source" : "author_tag"
                    })
                }
                
                // compute some prioritar elements
                var timeElements = document.querySelectorAll("article time, .content time, .article time, .hentry time, .post time");
                for(var i = 0; i < timeElements.length; i++) {
                    var timeElement = timeElements[i];
                    utils.addDate(data, {
                        "datetime": utils.getAttribute(timeElement, "datetime", ""),
                        "class": utils.getAttribute(timeElement, "class", ""),
                        "itemprop": utils.getAttribute(timeElement, "itemprop", ""),
                        "html": timeElement.innerHTML,
                        "source": "article_time_element"
                    });
                }

                // compute others time property
                var timeElements = document.querySelectorAll("time");
                for(var i = 0; i < timeElements.length; i++) {
                    var timeElement = timeElements[i];
                    utils.addDate(data, {
                        "datetime": utils.getAttribute(timeElement, "datetime", ""),
                        "class": utils.getAttribute(timeElement, "class", ""),
                        "itemprop": utils.getAttribute(timeElement, "itemprop", ""),
                        "html": timeElement.innerHTML,
                        "source": "time_element"
                    });
                }
            }            
        },
        images: {
            analyse: function(document, data) {
                data.imgs = [];
                var imageElements = document.querySelectorAll("img");
                for (var i = 0; i < imageElements.length; i++) {
                    var img = imageElements[i];
                    if (img.clientWidth <= 0 || img.clientHeight <= 0) {
                        continue;
                    }

                    var imgUrl = img.getAttribute("src");
                    if (!imgUrl || imgUrl == "") {
                        imgUrl = img.getAttribute("data-src");
                    }
                    if (!imgUrl || imgUrl == "") {
                        continue;
                    }

                    var description = img.getAttribute("title");
                    if (!description || description == "") {
                        description = img.getAttribute("alt");
                    }

                    data.imgs.push({
                        "url": imgUrl,
                        "type": "article",
                        "width": img.clientWidth,
                        "height": img.clientHeight,
                        "description": description
                    });
                }
            }
        },
        itemprops: {
            analyse: function(document, data) {
                var itempropElements = document.querySelectorAll("*[itemprop]");
                data["itemprops"] = [];
                for (var i = 0; i < itempropElements.length; i++) {
                    var itempropElement = itempropElements[i];
                    data["itemprops"].push({
                        "name": utils.getAttribute(itempropElement, "itemprop", ""),
                        "html": itempropElement.innerHTML
                    });
                }
            }
        },
        metadata: {
            analyse: function(document, data) {
                data["metadata"] = {};

                var elements = document.querySelectorAll("meta");
                for (var i = 0; i < elements.length; i++) {
                    var property = utils.getAttribute(elements[i], "property", "").toLowerCase();
                    var httpEquiv = utils.getAttribute(elements[i], "http-equiv", "").toLowerCase();
                    var content = utils.getAttribute(elements[i], "content", "");
                    var name = utils.getAttribute(elements[i], "name", "").toLowerCase();
                    var value = utils.getAttribute(elements[i], "value", "");
    
                    if (name == "") {
                        name = property;
                        if (name == "") {
                            name = httpEquiv;
                        }
                    }
                    if (value == "") {
                        value = content;
                    }
    
                    if (name == "" || value == "") {
                        continue;
                    }
    
                    data["metadata"][name] = value;
    
                    if (name == "description") {
                        data["description"] = value;
                    }
    
                    if (name == "generator") {
                        utils.setValue(data, "website.generator", value);
                    }
    
                    if (name == "author") {
                        utils.setValue(data, "author.name", value);
                    }
                }
            }
        },
        link: {
            analyse: function(document, data) {
                var elements = document.querySelectorAll("link");
                data["links"] = [];
                for (var i = 0; i < elements.length; i++) {
                    var link = {
                        "charset": utils.getAttribute(elements[i], "charset", "").toLowerCase(),
                        "href": utils.getAttribute(elements[i], "href", ""),
                        "hreflang": utils.getAttribute(elements[i], "hreflang", "").toLowerCase(),
                        "media": utils.getAttribute(elements[i], "media", "").toLowerCase(),
                        "rel": utils.getAttribute(elements[i], "rel", "").toLowerCase(),
                        "sizes": utils.getAttribute(elements[i], "sizes", "").toLowerCase(),
                        "target": utils.getAttribute(elements[i], "target", "").toLowerCase(),
                        "type": utils.getAttribute(elements[i], "type", "").toLowerCase(),
                        "title": utils.getAttribute(elements[i], "title", "")
                    };
                    data["links"].push(link);

                    if (link["rel"] == "icon" || link["rel"] == "apple-touch-icon" || link["rel"] == "shortcut icon") {
                        utils.setValue(data, "website.icon", link["href"]);
                    }

                    if (link["rel"] == "publisher" || link["rel"] == "author") {
                        utils.setValue(data, "author.url", link["href"]);
                    }
                }
            }
        },
        
        rdf: {
        	analyse: function(document, data) {
	        	var rdfElements = document.querySelectorAll("link[type='application/rdf+xml']");
	        	if (rdfElements.length > 0) {
	        		data["rdf"] = [];
		        	for (var i = 0; i < rdfElements.length; i++) {
		        		var url = rdfElements[i].href;
		        		//javascript does not resolve the url. Will be done on java side
		        		if (url) {
			        		data["rdf"].push({
			        			"url": url
			        		});
		        		}
		        	}
	        	}
        	}
        },

        twitter: {
            analyse: function(document, data) {

                function parseDate(content) {
                    try {
                        var m = /([0-9]?[0-9]):([0-9][0-9]) *(AM|PM)? *- *([0-9]?[0-9]) *([A-Za-z]+)\\.? *([0-9][0-9][0-9][0-9])/.exec(content);
                        if (!m) {
                            return null;
                        }
                        var hour = parseInt(m[1]);
                        var minute = parseInt(m[2]);
                        if (m[3] == "PM") {
                            hour += 12;
                        } else if (m[3] == "AM" && hour == 12) {
                            hour = 0;
                        }
                        var day = parseInt(m[4]);
                        var month = utils.monthsStrToIntMap[m[5].toLowerCase()];
                        var year = parseInt(m[6]);
                        var timestamp = new Date(year, month, day, hour, minute).getTime();
                        // dates in twitter are always printed in Pacific Time Zone. Let's simplify it as GMT-8
                        timestamp -= 8 * 60 * 60 * 1000;
                        return timestamp;
                    } catch (e) {
                        // parse fail, give up silently
                        return null;
                    }
                }

                var mobileTwitter;
                var avatarSelector;
                var authorSelector;
                if (data["url"].match(/https:\/\/mobile\.twitter.com\/.*\/status\/.*/)) {
                    mobileTwitter = true;
                    avatarSelector = ".avatar";
                    authorSelector = ".username";
                    data["url"] = data["url"].replace("https://mobile.twitter.com", "https://twitter.com");
                } else if (data["url"].match(/https:\/\/twitter.com\/.*\/status\/.*/)) {
                    mobileTwitter = false;
                    avatarSelector = ".js-action-profile-avatar";
                    authorSelector = ".js-action-profile-name";
                }�else {
                    return;
                }

                // website
                if (!("webiste" in data)) {
                    data["website"] = {};
                }
                data["website"]["url"] = "https://twitter.com";
                data["website"]["name"] = "Twitter";

                var tweetTextElements = document.querySelectorAll(".tweet-text");
                for (var i = 0; i < tweetTextElements.length; i++) {
                    var tweetText = tweetTextElements[i];
                    if (mobileTwitter && utils.parentsHasClass(tweetText, "main-tweet-container")
                            || (!mobileTwitter && (utils.parentsHasClass(tweetText, "permalink-tweet")
                                                       || utils.parentsHasClass(tweetText, "permalink")))) {
                        data["tweetTextHtml"] = tweetText.innerHTML;
                        utils.setValue(data, "content", tweetText.textContent);
                        // TODO seems redundant, to be removed once the backend handle descriptions and content properly
                        utils.setValue(data, "description", tweetText.textContent);
                        utils.setValue(data, "debug.contentResolveMethod", "adhoc");
                        break;
                    }
                }
                var authorIconElements = document.querySelectorAll(avatarSelector);
                for (var i = 0; i < authorIconElements.length; i++) {
                    var authorIcon = authorIconElements[i];
                    if (mobileTwitter && utils.parentsHasClass(authorIcon, "main-tweet-container")
                            || (!mobileTwitter && (utils.parentsHasClass(authorIcon, "permalink-tweet")
                                               || utils.parentsHasClass(authorIcon, "permalink")))) {
                        var src = authorIcon.getAttribute("src");
                        var pos = src.indexOf("_normal");
                        if (pos >= 0) {
                            src = src.substring(0, pos) + src.substring(pos + 7);
                        }
                        var authorIconUrl = src;
                        var image = {
                            "url": authorIconUrl,
                            "width": 92,
                            "height": 92,
                            "type": "twitter"
                        }
                        utils.addImage(data, image);
                        break;
                    }
                }

                var authorNameElements = document.querySelectorAll(authorSelector);
                for (var i = 0; i < authorNameElements.length; i++) {
                    var authorName = authorNameElements[i];
                    if (mobileTwitter && utils.parentsHasClass(authorName, "main-tweet-container")
                        || (!mobileTwitter && (utils.parentsHasClass(authorName, "permalink-tweet")
                                                   || utils.parentsHasClass(authorName, "permalink")))) {
                        data["title"] = "Tweet from " + authorName.textContent;
                        utils.setValue(data, "author.name", authorName.textContent);
                        utils.setValue(data, "author.url", "https://twitter.com/" + authorName.textContent);
                    }
                }

                var element = utils.findOneElement(document, ".time");
                if (element) {
                    var timeElt = utils.findFirstElement(element, "*[data-time-ms]");
                    if (timeElt) {
                        utils.addDate(data, {
                            "timestamp": parseInt(timeElt.attribute("data-time-ms")),
                            "source": "adhoc"
                        });
                    } else {
                        var element = utils.findOneElement(frame, ".permalink-footer .metadata");
                        if (element) {
                            utils.addDate(data, {
                                "timestamp": parseDate(element.textContent),
                                "source": "adhoc"
                            });
                        }
                    }
                }
            }
        },

        youtube: {
            analyse: function(document, data) {
                if (!(data["url"].match(/https?:\/\/([a-z]+\.)?youtube\.([a-z]+)\/.*/)
                        || data["url"].match(/https?:\/\/([a-z]+)\.youtu\.be\/.*/))) {
                    return;
                }

                function parseItemPropDate(content) {
                    if (content == null) {
                        return null;
                    }
                    try {
                        m = /([0-9][0-9][0-9][0-9])-([0-9]?[0-9])-([0-9]?[0-9])/.exec(content);
                        if (!m) {
                            return null;
                        }
                        var day = parseInt(m[3]);
                        var month = parseInt(m[2]);
                        var year = parseInt(m[1]);
                        var timestamp = new Date(year, month, day).getTime();
                        return timestamp;
                    } catch (e) {
                        // parse fail, give up silently
                        return null;
                    }
                }    

                function parseDate(content) {
                    if (content == null) {
                        return null;
                    }
                    try {
                        var m = /Published on ([A-Za-z]+) *([0-9]?[0-9]), *([0-9][0-9][0-9][0-9])/.exec(content);
                        if (!m) {
                            return null;
                        }
                        var day = parseInt(m[2]);
                        var month = utils.monthsStrToIntMap[m[1].toLowerCase()];
                        var year = parseInt(m[3]);
                        var timestamp = new Date(year, month, day).getTime();
                        return timestamp;
                    } catch (e) {
                        // parse fail, give up silently
                        return null;
                    }
                }

                // website
                utils.setValue(data, "website.url", "http://www.youtube.com");
                utils.setValue(data, "website.name", "Youtube");

                // author
                var element = utils.findLastElement(document, "*[itemprop='author']");
                if (element) {
                    var urlElt = utils.findFirstElement(element, "link[itemprop='url']");
                    if (urlElt) {
                        utils.setValue(data, "author.url", urlElt.getAttribute("href"));
                    }
                }

                // content
                var element = utils.findOneElement(document, "#watch-description-text");
                if (element) {
                    data["content"] = element.textContent;
                    utils.setValue(data, "debug.contentResolveMethod", "adhoc");
                }
                // title
                var element = utils.findOneElement(document, "*[itemprop='name']");
                if (element) {
                    data["title"] = utils.getAttribute(element, "content").trim();
                }
                // description
                var element = utils.findOneElement(document, "*[itemprop='description']");
                if (element) {
                    data["description"] = utils.getAttribute(element, "content").trim();
                }
                // date
                try {
                    var date = null;
                    var element = utils.findOneElement(document, "*[itemprop='datePublished']");
                    if (element) {
                        date = parseItemPropDate(element.getAttribute("content"));
                    } else {
                        element = utils.findOneElement(document, ".watch-time-text");
                        if (element) {
                            date = parseDate(element.textContent);
                        }
                    }
                    if (date) {
                        utils.addDate(data, {
                            "timestamp": date,
                            "source": "adhoc"
                        });
                    }
                } catch (e) {
                    // pass
                }
                // images
                var element = utils.findOneElement(document, "*[itemprop='thumbnail']");
                if (element) {
                    var urlElt = utils.findFirstElement(element, "link[itemprop='url']");
                    var widthElt = utils.findFirstElement(element, "*[itemprop='width']");
                    var heightElt = utils.findFirstElement(element, "*[itemprop='height']");
                    if (urlElt && widthElt && heightElt) {
                        var image = {
                            "url": urlElt.getAttribute("href"),
                            "width": utils.getIntAttribute(widthElt, "content"),
                            "height": utils.getIntAttribute(heightElt, "content"),
                            "type": "youtube"
                        };
                        utils.addImage(data, image);
                    }
                }
            }
        },
            
        slideshare: {
            analyse: function(document, data) {
                if (!data["url"].match(/http(s)?:\/\/(.*)\.slideshare\.net\/.*/)) {
                    return;
                }

                // website
                utils.setValue(data, "website.url", "http://www.slideshare.net/");
                utils.setValue(data, "website.name", "SlideShare");

                try {
                    document.getElementsByClassName("j-expand-text")[0].click();
                } catch (e) {
                    // probably already expanded
                }
                var el = utils.findLastElement(document, "#slideshow-description-paragraph");
                if (!el) {
                    el = utils.findLastElement(document, ".transcript");
                }
                if (el) {
                    var content = el.textContent;
                    utils.setValue(data, "content", content);
                }
            }
        }
    }

})();

