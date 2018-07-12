var ObjectToXML = require('../');

exports["basic test"] = function (test) {
	var str = ObjectToXML({
		a : {
			b : {
				c : {
					"#" : { d : "asdf"}
				}
			}
			, e : {
				"@" : {
					foo : "bar"
				}
				, "#" : {
					"#" : "asdf"
				}
			}
			, f : {
				"@" : {
					prop : "value"
				}
				, "#" : "value"
			}
		}
		, g : "<![CDATA[ test & data ]]>"
		, h : "<!asdf&"
		, i : {
			"@" : {
				numeric : 42
			}
		}
		, j : {
			"@" : {
				numeric : 42
			}
			, "#" : "value"
		}
		, z : {
			"$": [{a: undefined}, {a: 1}, {b: 1}]
		}
		, k: {
			"#" : [{a: undefined}, {b: undefined}]
		}
	});

	var expect = ''
		+ '<a>\n'
		+ '  <b>\n'
		+ '    <c>\n'
		+ '      <d>asdf</d>\n'
		+ '    </c>\n'
		+ '  </b>\n'
		+ '  <e foo="bar">\n'
		+ '    <#>asdf</#>\n'
		+ '  </e>\n'
		+ '  <f prop="value">value</f>\n'
		+ '</a>\n'
		+ '<g><![CDATA[ test & data ]]></g>\n'
		+ '<h>&lt;!asdf&amp;</h>\n'
		+ '<i numeric="42" />\n'
		+ '<j numeric="42">value</j>\n'
		+ '<z><a />\n'
		+ '<a>1</a>\n'
		+ '<b>1</b>\n'
		+ '</z>\n'
		+ '<k>\n'
		+ '  <a />\n'
		+ '</k>\n'
		+ '<k>\n'
		+ '  <b />\n'
		+ '</k>\n'
		;
	test.equal(expect, str);
	test.done();
}
