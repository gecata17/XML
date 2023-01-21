<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:output method="xml" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <autoservice>
            <xsl:for-each select="autoservice/automobile">
                <automobile>
                    <brand><xsl:call-template name="brand"/></brand>
                    <model><xsl:call-template name="model"/></model>
                    <horsepower><xsl:call-template name="type"/></horsepower>
                </automobile>
            </xsl:for-each>
        </autoservice>
    </xsl:template>

    <xsl:template name="brand">
        <xsl:value-of select="brand"/>
    </xsl:template>

    <xsl:template name="model">
        <xsl:value-of select="model"/>
    </xsl:template>

    <xsl:template name="horsepower">
        <xsl:value-of select="horsepower"/>
    </xsl:template>

</xsl:stylesheet>