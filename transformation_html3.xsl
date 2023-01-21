<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h1 align="center">Производител</h1>
                <table border="3" align="center" >
                    <tr>
                        <th>Град</th>
                        <th>Държава</th>
                        <th>Тип</th>
                    </tr>
                    <xsl:for-each select="autoservice/automobile/manifacturer/headquarters">
                        <tr>
                            <td><xsl:call-template name="city"/></td>
                            <td><xsl:call-template name="country"/></td>
                            <td><xsl:call-template name="type"/></td>

                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>

   
    <xsl:template name="city">
        <xsl:value-of select="city/."/>
    </xsl:template>

    <xsl:template name="country">
        <xsl:value-of select="country/."/>
    </xsl:template>

    <xsl:template name="type">
        <xsl:value-of select="type/."/>
    </xsl:template>


</xsl:stylesheet>