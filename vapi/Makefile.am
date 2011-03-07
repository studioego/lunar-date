vapidir = $(datarootdir)/vala/vapi
vapi_DATA = liblunar-1.0.vapi 

dist_vapi_DATA = liblunar-1.0.deps

BUILT_SOURCES = $(vapi_DATA)

pkgconfigdir = ${libdir}/pkgconfig

liblunar-1.0.vapi: $(top_builddir)/lunar/LunarDate-1.0.gir
	$(VAPIGEN_V)$(VAPIGEN) \
		--library liblunar-1.0 \
		--pkg gobject-2.0 \
		--pkg glib-2.0 \
		$< \
		$(NULL)
	@mv $@ liblunar-1.0.vapi.tmp1
	$(AM_V_GEN)sed -e \
                 's/LunarDate-1.0.h/lunar\/lunar.h/' \
                 < liblunar-1.0.vapi.tmp1 > liblunar-1.0.vapi.tmp2
	$(AM_V_GEN)sed -e \
                 's/int argc, string argv/[CCode (array_length_pos = 0.9)] ref unowned string[] argv/' \
                 < liblunar-1.0.vapi.tmp2 > $@
	@rm liblunar-1.0.vapi.tmp*

CLEANFILES = \
        $(BUILT_SOURCES) \
        $(NULL)


# set up the verbosity rules to avoid some build noise
VAPIGEN_V = $(VAPIGEN_V_$(V))
VAPIGEN_V_ = $(VAPIGEN_V_$(AM_DEFAULT_VERBOSITY))
VAPIGEN_V_0 = @echo "  VAPIG " $^;