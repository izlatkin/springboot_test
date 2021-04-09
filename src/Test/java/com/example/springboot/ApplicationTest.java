package com.example.springboot;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.env.Environment;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.not;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;


@SpringBootTest
@AutoConfigureMockMvc
class ApplicationTest {
    @Autowired
    private MockMvc mockMvc;
    private Environment env;
/*
    @Test
    void testHistory() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api?post_input_text=testing")).andReturn();
        mockMvc.perform(MockMvcRequestBuilders.get("/history").contentType(MediaType.ALL)).andExpect(content().string(containsString("testing")));
    }

    @Test
    void testDelete() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/delete?post_text=stringToDelete"));
        mockMvc.perform(MockMvcRequestBuilders.post("/delete?post_text=stringToDelete").contentType(MediaType.ALL))
                .andExpect(content().string(containsString("does not exist")));

    }
*/

    @Test
    void testPostDeleteHistory() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api?post_input_text=testing")).andReturn();
        mockMvc.perform(MockMvcRequestBuilders.post("/delete?post_text=testing")).andReturn();
        mockMvc.perform(MockMvcRequestBuilders.post("/history").contentType(MediaType.ALL))
                .andExpect(content().string(not(containsString("testing"))));
    }

    @Test
    void testCase4Delete() throws Exception {
        // String pathToTestFile = env.getProperty("test.log.file");
        //PostLogger pl1 = new PostLogger(pathToTestFile);

        mockMvc.perform(MockMvcRequestBuilders.post("/api?post_input_text=testing")).andReturn();
        mockMvc.perform(MockMvcRequestBuilders.post("/delete?post_text=Testing").contentType(MediaType.ALL))
                .andExpect(content().string(not(containsString("does not exist"))));

        //pl1.writeLine("the delete functionality has passed Case sensitive testing");
    }





}
