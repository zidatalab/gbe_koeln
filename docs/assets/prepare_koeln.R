library(tidyverse)
library(readr)
library(jsonlite)
library(stringr)
library(sf)

client_name ="2021_06_gbe_koeln"
options(scipen=999)

df  <- read_csv("Downloads/daten_fin5_praev1_fin_fin.csv") %>%
  rename(level=Raumgliederung,levelid=Raum_ID_Name,
         "sg.Raumgliederung_sort"="Raumgliederung_sort",
         "sg.Raum_ID"= "Raum_ID",
         "sg.Geschlecht_num"="Geschlecht_num"  ,
         "sg.Geschlecht"="Geschlecht"      ,
         "sg.Altersgruppe_ID"="Altersgruppe_ID" ,
         "sg.Altersgruppe_num"="Altersgruppe_num" ,
         "sg.Altersgruppe"="Altersgruppe"    
         ) %>% mutate(client_id=client_name) %>%
  mutate_at(vars(contains('Prävalenz')),.funs=as.numeric) %>%
  mutate_at(vars(contains('Anteil von')),.funs=as.numeric) %>%
  relocate(client_id,level,levelid,contains("sg."))

write_csv(df,path = "~/Downloads/export_ramona.csv",na = "")

df <- read_csv("~/Downloads/export_ramona.csv",na = "")

metadf <- tibble(varname=colnames(df),
                  topic="outcomes",
                  type="rate",
                  allforlevel="",
                  description="",
                  public=FALSE
                  ) %>%
  filter(varname!="client_id") %>%
  mutate(
    client_id=client_name,
    topic= ifelse(varname %in% c("level","levelid"),"ordering",topic),
    type= ifelse(varname %in% c("level","levelid"),varname,type),
    topic= ifelse(stringr::str_detect(varname,"sg."),"subgroup",topic),
    type= ifelse(str_detect(varname,"sg."),"group",type),
    type= ifelse(str_detect(tolower(varname),"zahl"),"number",type),
    topic = ifelse(varname %in% c('PATZAHL','Transferleistungsdichte'),'demography',topic)
  ) 

metadf <- bind_rows(metadf,metadf %>% filter(topic=="subgroup") %>%  tail(1) %>% mutate(varname="sg", topic="metasubgroup"))

write_csv(metadf,path = "~/Downloads/meta_export_ramona.csv",na = "")



# check levels
levels_koeln_quartier <- read_sf("/Users/lekroll/git/geodatarepo/cities/koeln/Statistisches_Quartier_simp.geojson")  %>% 
  rename(levelid=NAME) %>% group_by(levelid) %>% count()

levels_koeln_quartier_df<- df %>% filter(level=="Statistische Quartiere") %>% 
  group_by(level,levelid) %>% summarise(match="OK")

