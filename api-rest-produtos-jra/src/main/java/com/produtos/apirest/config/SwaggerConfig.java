package com.produtos.apirest.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.service.VendorExtension;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;

import static springfox.documentation.builders.PathSelectors.regex;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket productApi(){
        return  new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.produtos.apirest"))
                .paths(regex("/api.*"))
                .build()
                .apiInfo(metaInfo());

    }

    private ApiInfo metaInfo() {
        ApiInfo apiInfo;
        apiInfo = new ApiInfo(
                "Produtos API RESTE",
                "API RESTE de Cadastro de Produtos",
                "1.0",
                "Termos of service",
                new Contact("Jose Roberto",
                        "joseroberto@dblsistemas.com.br",
                        "www.dblsistemas.com.br"),
                "Apache Licence Version 2.0",
                "https://www.apache.org/licensen.html", new ArrayList<VendorExtension>()
        );
        return apiInfo;
    }
}
