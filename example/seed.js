#!/usr/bin/env seed
Gettext = imports.gettext;
LunarDate = imports.gi.LunarDate;

Gettext.bindtextdomain("lunar-date", "/usr/share/locale");
Gettext.textdomain("lunar-date");

LunarDate.init(0, null);
var l = new LunarDate.Date();
l.set_solar_date(2010,4,2,18);
var out = l.strftime("%(NIAN)年%(YUE)月%(RI)日%(SHI)时");
l.free();
print(out);
