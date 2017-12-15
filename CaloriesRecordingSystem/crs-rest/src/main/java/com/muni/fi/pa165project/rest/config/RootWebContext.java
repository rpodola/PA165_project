package com.muni.fi.pa165project.rest.config;

import com.muni.fi.pa165project.data.config.DataConfiguration;
import com.muni.fi.pa165project.rest.controllers.UsersController;
import com.muni.fi.pa165project.rest.security.AuthorizationHandlerInterceptor;
import com.muni.fi.pa165project.service.config.ServiceConfiguration;
import org.springframework.context.annotation.*;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.config.annotation.*;

/**
 * REST Configuration
 *
 * @author Radim Podola
 */
@EnableWebMvc
@Configuration
@Import({ServiceConfiguration.class})
@ComponentScan(basePackageClasses = {UsersController.class})
public class RootWebContext extends WebMvcConfigurerAdapter {
    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }

    @Override
    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
        configurer.defaultContentType(MediaType.APPLICATION_JSON);
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new AllowOriginInterceptor());
        registry.addInterceptor(new AuthorizationHandlerInterceptor());
    }
}