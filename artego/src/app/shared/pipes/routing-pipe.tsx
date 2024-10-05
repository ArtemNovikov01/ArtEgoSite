import Projects from "@/app/projects-page-component/projects-page-component";
import { TabsTypes } from "../enums/tabs-types";
import AboutCompany from "@/app/company-page-component/company-page-component";
import Blog from "@/app/blog-page-component/blog-page-component";
import Contacts from "@/app/contacts-page-component/contacts-page-component";
import Services from "@/app/services-page-component/services-page-component";

export default function RoutingPipe(tab:TabsTypes) {

    if(tab === TabsTypes.AboutCompany){
        return (<AboutCompany></AboutCompany>);
    }

    if(tab === TabsTypes.Blog){
        return (<Blog></Blog>);
    }

    if(tab === TabsTypes.Contacts){
        return (<Contacts></Contacts>);
    }

    if(tab === TabsTypes.Projects){
        return (<Projects></Projects>);
    }

    if(tab === TabsTypes.Services){
        return (<Services></Services>);
    }
}