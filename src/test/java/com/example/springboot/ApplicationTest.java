package com.example.springboot;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@AutoConfigureMockMvc

class ApplicationTest {
    private MockMvc mockMvc;

    @Test
    void missingString() throws Exception
    {
        mockMvc.perform(MockMvcRequestBuilders.post("/api?post_input_text=testing")).andReturn; //add string
        mockMvc.perform(MockMvcRequestBuilders.post("/delete?post_input_text=testing")).andReturn; //delete string
        mockMvc.perform(MockMvcRequestBuilders.get("/history")).contentType(MediaType.ALL).andExpect(content().string(containsString("does not exist"))); //make sure string is gone
    }

    @Test
    void testCasing() throws Exception
    {
        mockMvc.perform(MockMvcRequestBuilders.post("/api?post_input_text=TeStIng")).andReturn;
        mockMvc.perform(MockMvcRequestBuilders.post("/api?post_input_text=testing")).andReturn;             //add the word "testing" twice with different casing
        mockMvc.perform(MockMvcRequestBuilders.post("/delete?post_input_text=testing")).andReturn;          //delete normal case testing
        mockMvc.perform(MockMvcRequestBuilders.get("/history")).contentType(MediaType.ALL).andExpect(content().string(containsString("TeStInG"))); //so we should still have the cased one
    }
}