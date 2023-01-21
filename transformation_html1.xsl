<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h1 align="center">Автомобил</h1>
                <table border="3" align="center" >
                    <tr>
                        <th>Бранд</th>
                        <th>Модел</th>
                        <th>Конски сили</th>
                    </tr>
                    <xsl:for-each select="autoservice/automobile">
                        <tr>
                            <td><xsl:call-template name="brand"/></td>
                            <td><xsl:call-template name="model"/></td>
                            <td><xsl:call-template name="horsepower"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template name="brand">
        <xsl:value-of select="brand/."/>
    </xsl:template>

    <xsl:template name="model">
        <xsl:value-of select="model/."/>
    </xsl:template>

    <xsl:template name="horsepower">
        <xsl:value-of select="horsepower/."/>
    </xsl:template>

</xsl:stylesheet>