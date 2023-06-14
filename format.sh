CONTENT="## 🚀 Features

           - #423 #422: Added apse2 to allowed environments @PabloBarrenechea-Reflektion

           ## 🐛 Fixes

           - #416 Fixes circular dependencies @InakiAbete-Reflektion
           - #415 Reset offset and page in search result widget @NuriaSuarez-Reflektion
           - #418 Fixes un-listened query context @InakiAbete-Reflektion
           "

sed -E ':a;N;$!ba;s/\r{0,1}\n/\\n/g' $CONTENT
