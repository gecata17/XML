<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="text"/>
<xsl:template match="/">
        <xsl:for-each select="/autoservice/automobile">

            Бранд:  <xsl:value-of select="brand"/>
            Модел:  <xsl:value-of select="model"/>
            Конски сили:  <xsl:value-of select="horsepower"/>
            Колата може ли да се вземе на лизинг? <xsl:value-of select="available_on_lising"/> <xsl:value-of select="available_on_lising/@isTrue"/>
            
        </xsl:for-each>
    </xsl:template>
    

</xsl:stylesheet>