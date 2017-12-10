package com.muni.fi.pa165project.data;

import java.io.IOException;

/**
 * Populates database with sample data.
 *
 * @author Radim Podola
 */
public interface SampleDataLoader {

    void loadData() throws IOException;
}