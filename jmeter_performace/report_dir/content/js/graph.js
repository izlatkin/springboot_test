/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 450.0, "minX": 0.0, "maxY": 2616.0, "series": [{"data": [[0.0, 450.0], [0.1, 450.0], [0.2, 450.0], [0.3, 450.0], [0.4, 450.0], [0.5, 450.0], [0.6, 450.0], [0.7, 450.0], [0.8, 450.0], [0.9, 450.0], [1.0, 454.0], [1.1, 454.0], [1.2, 454.0], [1.3, 454.0], [1.4, 454.0], [1.5, 454.0], [1.6, 454.0], [1.7, 454.0], [1.8, 454.0], [1.9, 454.0], [2.0, 481.0], [2.1, 481.0], [2.2, 481.0], [2.3, 481.0], [2.4, 481.0], [2.5, 481.0], [2.6, 481.0], [2.7, 481.0], [2.8, 481.0], [2.9, 481.0], [3.0, 485.0], [3.1, 485.0], [3.2, 485.0], [3.3, 485.0], [3.4, 485.0], [3.5, 485.0], [3.6, 485.0], [3.7, 485.0], [3.8, 485.0], [3.9, 485.0], [4.0, 487.0], [4.1, 487.0], [4.2, 487.0], [4.3, 487.0], [4.4, 487.0], [4.5, 487.0], [4.6, 487.0], [4.7, 487.0], [4.8, 487.0], [4.9, 487.0], [5.0, 517.0], [5.1, 517.0], [5.2, 517.0], [5.3, 517.0], [5.4, 517.0], [5.5, 517.0], [5.6, 517.0], [5.7, 517.0], [5.8, 517.0], [5.9, 517.0], [6.0, 519.0], [6.1, 519.0], [6.2, 519.0], [6.3, 519.0], [6.4, 519.0], [6.5, 519.0], [6.6, 519.0], [6.7, 519.0], [6.8, 519.0], [6.9, 519.0], [7.0, 532.0], [7.1, 532.0], [7.2, 532.0], [7.3, 532.0], [7.4, 532.0], [7.5, 532.0], [7.6, 532.0], [7.7, 532.0], [7.8, 532.0], [7.9, 532.0], [8.0, 548.0], [8.1, 548.0], [8.2, 548.0], [8.3, 548.0], [8.4, 548.0], [8.5, 548.0], [8.6, 548.0], [8.7, 548.0], [8.8, 548.0], [8.9, 548.0], [9.0, 556.0], [9.1, 556.0], [9.2, 556.0], [9.3, 556.0], [9.4, 556.0], [9.5, 556.0], [9.6, 556.0], [9.7, 556.0], [9.8, 556.0], [9.9, 556.0], [10.0, 561.0], [10.1, 561.0], [10.2, 561.0], [10.3, 561.0], [10.4, 561.0], [10.5, 561.0], [10.6, 561.0], [10.7, 561.0], [10.8, 561.0], [10.9, 561.0], [11.0, 564.0], [11.1, 564.0], [11.2, 564.0], [11.3, 564.0], [11.4, 564.0], [11.5, 564.0], [11.6, 564.0], [11.7, 564.0], [11.8, 564.0], [11.9, 564.0], [12.0, 567.0], [12.1, 567.0], [12.2, 567.0], [12.3, 567.0], [12.4, 567.0], [12.5, 567.0], [12.6, 567.0], [12.7, 567.0], [12.8, 567.0], [12.9, 567.0], [13.0, 577.0], [13.1, 577.0], [13.2, 577.0], [13.3, 577.0], [13.4, 577.0], [13.5, 577.0], [13.6, 577.0], [13.7, 577.0], [13.8, 577.0], [13.9, 577.0], [14.0, 587.0], [14.1, 587.0], [14.2, 587.0], [14.3, 587.0], [14.4, 587.0], [14.5, 587.0], [14.6, 587.0], [14.7, 587.0], [14.8, 587.0], [14.9, 587.0], [15.0, 589.0], [15.1, 589.0], [15.2, 589.0], [15.3, 589.0], [15.4, 589.0], [15.5, 589.0], [15.6, 589.0], [15.7, 589.0], [15.8, 589.0], [15.9, 589.0], [16.0, 589.0], [16.1, 589.0], [16.2, 589.0], [16.3, 589.0], [16.4, 589.0], [16.5, 589.0], [16.6, 589.0], [16.7, 589.0], [16.8, 589.0], [16.9, 589.0], [17.0, 590.0], [17.1, 590.0], [17.2, 590.0], [17.3, 590.0], [17.4, 590.0], [17.5, 590.0], [17.6, 590.0], [17.7, 590.0], [17.8, 590.0], [17.9, 590.0], [18.0, 593.0], [18.1, 593.0], [18.2, 593.0], [18.3, 593.0], [18.4, 593.0], [18.5, 593.0], [18.6, 593.0], [18.7, 593.0], [18.8, 593.0], [18.9, 593.0], [19.0, 600.0], [19.1, 600.0], [19.2, 600.0], [19.3, 600.0], [19.4, 600.0], [19.5, 600.0], [19.6, 600.0], [19.7, 600.0], [19.8, 600.0], [19.9, 600.0], [20.0, 601.0], [20.1, 601.0], [20.2, 601.0], [20.3, 601.0], [20.4, 601.0], [20.5, 601.0], [20.6, 601.0], [20.7, 601.0], [20.8, 601.0], [20.9, 601.0], [21.0, 603.0], [21.1, 603.0], [21.2, 603.0], [21.3, 603.0], [21.4, 603.0], [21.5, 603.0], [21.6, 603.0], [21.7, 603.0], [21.8, 603.0], [21.9, 603.0], [22.0, 604.0], [22.1, 604.0], [22.2, 604.0], [22.3, 604.0], [22.4, 604.0], [22.5, 604.0], [22.6, 604.0], [22.7, 604.0], [22.8, 604.0], [22.9, 604.0], [23.0, 606.0], [23.1, 606.0], [23.2, 606.0], [23.3, 606.0], [23.4, 606.0], [23.5, 606.0], [23.6, 606.0], [23.7, 606.0], [23.8, 606.0], [23.9, 606.0], [24.0, 607.0], [24.1, 607.0], [24.2, 607.0], [24.3, 607.0], [24.4, 607.0], [24.5, 607.0], [24.6, 607.0], [24.7, 607.0], [24.8, 607.0], [24.9, 607.0], [25.0, 609.0], [25.1, 609.0], [25.2, 609.0], [25.3, 609.0], [25.4, 609.0], [25.5, 609.0], [25.6, 609.0], [25.7, 609.0], [25.8, 609.0], [25.9, 609.0], [26.0, 611.0], [26.1, 611.0], [26.2, 611.0], [26.3, 611.0], [26.4, 611.0], [26.5, 611.0], [26.6, 611.0], [26.7, 611.0], [26.8, 611.0], [26.9, 611.0], [27.0, 612.0], [27.1, 612.0], [27.2, 612.0], [27.3, 612.0], [27.4, 612.0], [27.5, 612.0], [27.6, 612.0], [27.7, 612.0], [27.8, 612.0], [27.9, 612.0], [28.0, 622.0], [28.1, 622.0], [28.2, 622.0], [28.3, 622.0], [28.4, 622.0], [28.5, 622.0], [28.6, 622.0], [28.7, 622.0], [28.8, 622.0], [28.9, 622.0], [29.0, 622.0], [29.1, 622.0], [29.2, 622.0], [29.3, 622.0], [29.4, 622.0], [29.5, 622.0], [29.6, 622.0], [29.7, 622.0], [29.8, 622.0], [29.9, 622.0], [30.0, 623.0], [30.1, 623.0], [30.2, 623.0], [30.3, 623.0], [30.4, 623.0], [30.5, 623.0], [30.6, 623.0], [30.7, 623.0], [30.8, 623.0], [30.9, 623.0], [31.0, 626.0], [31.1, 626.0], [31.2, 626.0], [31.3, 626.0], [31.4, 626.0], [31.5, 626.0], [31.6, 626.0], [31.7, 626.0], [31.8, 626.0], [31.9, 626.0], [32.0, 628.0], [32.1, 628.0], [32.2, 628.0], [32.3, 628.0], [32.4, 628.0], [32.5, 628.0], [32.6, 628.0], [32.7, 628.0], [32.8, 628.0], [32.9, 628.0], [33.0, 630.0], [33.1, 630.0], [33.2, 630.0], [33.3, 630.0], [33.4, 630.0], [33.5, 630.0], [33.6, 630.0], [33.7, 630.0], [33.8, 630.0], [33.9, 630.0], [34.0, 630.0], [34.1, 630.0], [34.2, 630.0], [34.3, 630.0], [34.4, 630.0], [34.5, 630.0], [34.6, 630.0], [34.7, 630.0], [34.8, 630.0], [34.9, 630.0], [35.0, 638.0], [35.1, 638.0], [35.2, 638.0], [35.3, 638.0], [35.4, 638.0], [35.5, 638.0], [35.6, 638.0], [35.7, 638.0], [35.8, 638.0], [35.9, 638.0], [36.0, 639.0], [36.1, 639.0], [36.2, 639.0], [36.3, 639.0], [36.4, 639.0], [36.5, 639.0], [36.6, 639.0], [36.7, 639.0], [36.8, 639.0], [36.9, 639.0], [37.0, 646.0], [37.1, 646.0], [37.2, 646.0], [37.3, 646.0], [37.4, 646.0], [37.5, 646.0], [37.6, 646.0], [37.7, 646.0], [37.8, 646.0], [37.9, 646.0], [38.0, 671.0], [38.1, 671.0], [38.2, 671.0], [38.3, 671.0], [38.4, 671.0], [38.5, 671.0], [38.6, 671.0], [38.7, 671.0], [38.8, 671.0], [38.9, 671.0], [39.0, 677.0], [39.1, 677.0], [39.2, 677.0], [39.3, 677.0], [39.4, 677.0], [39.5, 677.0], [39.6, 677.0], [39.7, 677.0], [39.8, 677.0], [39.9, 677.0], [40.0, 679.0], [40.1, 679.0], [40.2, 679.0], [40.3, 679.0], [40.4, 679.0], [40.5, 679.0], [40.6, 679.0], [40.7, 679.0], [40.8, 679.0], [40.9, 679.0], [41.0, 685.0], [41.1, 685.0], [41.2, 685.0], [41.3, 685.0], [41.4, 685.0], [41.5, 685.0], [41.6, 685.0], [41.7, 685.0], [41.8, 685.0], [41.9, 685.0], [42.0, 688.0], [42.1, 688.0], [42.2, 688.0], [42.3, 688.0], [42.4, 688.0], [42.5, 688.0], [42.6, 688.0], [42.7, 688.0], [42.8, 688.0], [42.9, 688.0], [43.0, 691.0], [43.1, 691.0], [43.2, 691.0], [43.3, 691.0], [43.4, 691.0], [43.5, 691.0], [43.6, 691.0], [43.7, 691.0], [43.8, 691.0], [43.9, 691.0], [44.0, 697.0], [44.1, 697.0], [44.2, 697.0], [44.3, 697.0], [44.4, 697.0], [44.5, 697.0], [44.6, 697.0], [44.7, 697.0], [44.8, 697.0], [44.9, 697.0], [45.0, 706.0], [45.1, 706.0], [45.2, 706.0], [45.3, 706.0], [45.4, 706.0], [45.5, 706.0], [45.6, 706.0], [45.7, 706.0], [45.8, 706.0], [45.9, 706.0], [46.0, 708.0], [46.1, 708.0], [46.2, 708.0], [46.3, 708.0], [46.4, 708.0], [46.5, 708.0], [46.6, 708.0], [46.7, 708.0], [46.8, 708.0], [46.9, 708.0], [47.0, 711.0], [47.1, 711.0], [47.2, 711.0], [47.3, 711.0], [47.4, 711.0], [47.5, 711.0], [47.6, 711.0], [47.7, 711.0], [47.8, 711.0], [47.9, 711.0], [48.0, 712.0], [48.1, 712.0], [48.2, 712.0], [48.3, 712.0], [48.4, 712.0], [48.5, 712.0], [48.6, 712.0], [48.7, 712.0], [48.8, 712.0], [48.9, 712.0], [49.0, 712.0], [49.1, 712.0], [49.2, 712.0], [49.3, 712.0], [49.4, 712.0], [49.5, 712.0], [49.6, 712.0], [49.7, 712.0], [49.8, 712.0], [49.9, 712.0], [50.0, 715.0], [50.1, 715.0], [50.2, 715.0], [50.3, 715.0], [50.4, 715.0], [50.5, 715.0], [50.6, 715.0], [50.7, 715.0], [50.8, 715.0], [50.9, 715.0], [51.0, 720.0], [51.1, 720.0], [51.2, 720.0], [51.3, 720.0], [51.4, 720.0], [51.5, 720.0], [51.6, 720.0], [51.7, 720.0], [51.8, 720.0], [51.9, 720.0], [52.0, 722.0], [52.1, 722.0], [52.2, 722.0], [52.3, 722.0], [52.4, 722.0], [52.5, 722.0], [52.6, 722.0], [52.7, 722.0], [52.8, 722.0], [52.9, 722.0], [53.0, 723.0], [53.1, 723.0], [53.2, 723.0], [53.3, 723.0], [53.4, 723.0], [53.5, 723.0], [53.6, 723.0], [53.7, 723.0], [53.8, 723.0], [53.9, 723.0], [54.0, 725.0], [54.1, 725.0], [54.2, 725.0], [54.3, 725.0], [54.4, 725.0], [54.5, 725.0], [54.6, 725.0], [54.7, 725.0], [54.8, 725.0], [54.9, 725.0], [55.0, 732.0], [55.1, 732.0], [55.2, 732.0], [55.3, 732.0], [55.4, 732.0], [55.5, 732.0], [55.6, 732.0], [55.7, 732.0], [55.8, 732.0], [55.9, 732.0], [56.0, 736.0], [56.1, 736.0], [56.2, 736.0], [56.3, 736.0], [56.4, 736.0], [56.5, 736.0], [56.6, 736.0], [56.7, 736.0], [56.8, 736.0], [56.9, 736.0], [57.0, 740.0], [57.1, 740.0], [57.2, 740.0], [57.3, 740.0], [57.4, 740.0], [57.5, 740.0], [57.6, 740.0], [57.7, 740.0], [57.8, 740.0], [57.9, 740.0], [58.0, 742.0], [58.1, 742.0], [58.2, 742.0], [58.3, 742.0], [58.4, 742.0], [58.5, 742.0], [58.6, 742.0], [58.7, 742.0], [58.8, 742.0], [58.9, 742.0], [59.0, 742.0], [59.1, 742.0], [59.2, 742.0], [59.3, 742.0], [59.4, 742.0], [59.5, 742.0], [59.6, 742.0], [59.7, 742.0], [59.8, 742.0], [59.9, 742.0], [60.0, 743.0], [60.1, 743.0], [60.2, 743.0], [60.3, 743.0], [60.4, 743.0], [60.5, 743.0], [60.6, 743.0], [60.7, 743.0], [60.8, 743.0], [60.9, 743.0], [61.0, 745.0], [61.1, 745.0], [61.2, 745.0], [61.3, 745.0], [61.4, 745.0], [61.5, 745.0], [61.6, 745.0], [61.7, 745.0], [61.8, 745.0], [61.9, 745.0], [62.0, 746.0], [62.1, 746.0], [62.2, 746.0], [62.3, 746.0], [62.4, 746.0], [62.5, 746.0], [62.6, 746.0], [62.7, 746.0], [62.8, 746.0], [62.9, 746.0], [63.0, 751.0], [63.1, 751.0], [63.2, 751.0], [63.3, 751.0], [63.4, 751.0], [63.5, 751.0], [63.6, 751.0], [63.7, 751.0], [63.8, 751.0], [63.9, 751.0], [64.0, 752.0], [64.1, 752.0], [64.2, 752.0], [64.3, 752.0], [64.4, 752.0], [64.5, 752.0], [64.6, 752.0], [64.7, 752.0], [64.8, 752.0], [64.9, 752.0], [65.0, 754.0], [65.1, 754.0], [65.2, 754.0], [65.3, 754.0], [65.4, 754.0], [65.5, 754.0], [65.6, 754.0], [65.7, 754.0], [65.8, 754.0], [65.9, 754.0], [66.0, 760.0], [66.1, 760.0], [66.2, 760.0], [66.3, 760.0], [66.4, 760.0], [66.5, 760.0], [66.6, 760.0], [66.7, 760.0], [66.8, 760.0], [66.9, 760.0], [67.0, 761.0], [67.1, 761.0], [67.2, 761.0], [67.3, 761.0], [67.4, 761.0], [67.5, 761.0], [67.6, 761.0], [67.7, 761.0], [67.8, 761.0], [67.9, 761.0], [68.0, 762.0], [68.1, 762.0], [68.2, 762.0], [68.3, 762.0], [68.4, 762.0], [68.5, 762.0], [68.6, 762.0], [68.7, 762.0], [68.8, 762.0], [68.9, 762.0], [69.0, 762.0], [69.1, 762.0], [69.2, 762.0], [69.3, 762.0], [69.4, 762.0], [69.5, 762.0], [69.6, 762.0], [69.7, 762.0], [69.8, 762.0], [69.9, 762.0], [70.0, 765.0], [70.1, 765.0], [70.2, 765.0], [70.3, 765.0], [70.4, 765.0], [70.5, 765.0], [70.6, 765.0], [70.7, 765.0], [70.8, 765.0], [70.9, 765.0], [71.0, 767.0], [71.1, 767.0], [71.2, 767.0], [71.3, 767.0], [71.4, 767.0], [71.5, 767.0], [71.6, 767.0], [71.7, 767.0], [71.8, 767.0], [71.9, 767.0], [72.0, 769.0], [72.1, 769.0], [72.2, 769.0], [72.3, 769.0], [72.4, 769.0], [72.5, 769.0], [72.6, 769.0], [72.7, 769.0], [72.8, 769.0], [72.9, 769.0], [73.0, 774.0], [73.1, 774.0], [73.2, 774.0], [73.3, 774.0], [73.4, 774.0], [73.5, 774.0], [73.6, 774.0], [73.7, 774.0], [73.8, 774.0], [73.9, 774.0], [74.0, 778.0], [74.1, 778.0], [74.2, 778.0], [74.3, 778.0], [74.4, 778.0], [74.5, 778.0], [74.6, 778.0], [74.7, 778.0], [74.8, 778.0], [74.9, 778.0], [75.0, 782.0], [75.1, 782.0], [75.2, 782.0], [75.3, 782.0], [75.4, 782.0], [75.5, 782.0], [75.6, 782.0], [75.7, 782.0], [75.8, 782.0], [75.9, 782.0], [76.0, 789.0], [76.1, 789.0], [76.2, 789.0], [76.3, 789.0], [76.4, 789.0], [76.5, 789.0], [76.6, 789.0], [76.7, 789.0], [76.8, 789.0], [76.9, 789.0], [77.0, 795.0], [77.1, 795.0], [77.2, 795.0], [77.3, 795.0], [77.4, 795.0], [77.5, 795.0], [77.6, 795.0], [77.7, 795.0], [77.8, 795.0], [77.9, 795.0], [78.0, 802.0], [78.1, 802.0], [78.2, 802.0], [78.3, 802.0], [78.4, 802.0], [78.5, 802.0], [78.6, 802.0], [78.7, 802.0], [78.8, 802.0], [78.9, 802.0], [79.0, 805.0], [79.1, 805.0], [79.2, 805.0], [79.3, 805.0], [79.4, 805.0], [79.5, 805.0], [79.6, 805.0], [79.7, 805.0], [79.8, 805.0], [79.9, 805.0], [80.0, 806.0], [80.1, 806.0], [80.2, 806.0], [80.3, 806.0], [80.4, 806.0], [80.5, 806.0], [80.6, 806.0], [80.7, 806.0], [80.8, 806.0], [80.9, 806.0], [81.0, 825.0], [81.1, 825.0], [81.2, 825.0], [81.3, 825.0], [81.4, 825.0], [81.5, 825.0], [81.6, 825.0], [81.7, 825.0], [81.8, 825.0], [81.9, 825.0], [82.0, 829.0], [82.1, 829.0], [82.2, 829.0], [82.3, 829.0], [82.4, 829.0], [82.5, 829.0], [82.6, 829.0], [82.7, 829.0], [82.8, 829.0], [82.9, 829.0], [83.0, 830.0], [83.1, 830.0], [83.2, 830.0], [83.3, 830.0], [83.4, 830.0], [83.5, 830.0], [83.6, 830.0], [83.7, 830.0], [83.8, 830.0], [83.9, 830.0], [84.0, 849.0], [84.1, 849.0], [84.2, 849.0], [84.3, 849.0], [84.4, 849.0], [84.5, 849.0], [84.6, 849.0], [84.7, 849.0], [84.8, 849.0], [84.9, 849.0], [85.0, 854.0], [85.1, 854.0], [85.2, 854.0], [85.3, 854.0], [85.4, 854.0], [85.5, 854.0], [85.6, 854.0], [85.7, 854.0], [85.8, 854.0], [85.9, 854.0], [86.0, 970.0], [86.1, 970.0], [86.2, 970.0], [86.3, 970.0], [86.4, 970.0], [86.5, 970.0], [86.6, 970.0], [86.7, 970.0], [86.8, 970.0], [86.9, 970.0], [87.0, 1034.0], [87.1, 1034.0], [87.2, 1034.0], [87.3, 1034.0], [87.4, 1034.0], [87.5, 1034.0], [87.6, 1034.0], [87.7, 1034.0], [87.8, 1034.0], [87.9, 1034.0], [88.0, 1042.0], [88.1, 1042.0], [88.2, 1042.0], [88.3, 1042.0], [88.4, 1042.0], [88.5, 1042.0], [88.6, 1042.0], [88.7, 1042.0], [88.8, 1042.0], [88.9, 1042.0], [89.0, 1061.0], [89.1, 1061.0], [89.2, 1061.0], [89.3, 1061.0], [89.4, 1061.0], [89.5, 1061.0], [89.6, 1061.0], [89.7, 1061.0], [89.8, 1061.0], [89.9, 1061.0], [90.0, 1887.0], [90.1, 1887.0], [90.2, 1887.0], [90.3, 1887.0], [90.4, 1887.0], [90.5, 1887.0], [90.6, 1887.0], [90.7, 1887.0], [90.8, 1887.0], [90.9, 1887.0], [91.0, 1984.0], [91.1, 1984.0], [91.2, 1984.0], [91.3, 1984.0], [91.4, 1984.0], [91.5, 1984.0], [91.6, 1984.0], [91.7, 1984.0], [91.8, 1984.0], [91.9, 1984.0], [92.0, 2058.0], [92.1, 2058.0], [92.2, 2058.0], [92.3, 2058.0], [92.4, 2058.0], [92.5, 2058.0], [92.6, 2058.0], [92.7, 2058.0], [92.8, 2058.0], [92.9, 2058.0], [93.0, 2185.0], [93.1, 2185.0], [93.2, 2185.0], [93.3, 2185.0], [93.4, 2185.0], [93.5, 2185.0], [93.6, 2185.0], [93.7, 2185.0], [93.8, 2185.0], [93.9, 2185.0], [94.0, 2286.0], [94.1, 2286.0], [94.2, 2286.0], [94.3, 2286.0], [94.4, 2286.0], [94.5, 2286.0], [94.6, 2286.0], [94.7, 2286.0], [94.8, 2286.0], [94.9, 2286.0], [95.0, 2382.0], [95.1, 2382.0], [95.2, 2382.0], [95.3, 2382.0], [95.4, 2382.0], [95.5, 2382.0], [95.6, 2382.0], [95.7, 2382.0], [95.8, 2382.0], [95.9, 2382.0], [96.0, 2482.0], [96.1, 2482.0], [96.2, 2482.0], [96.3, 2482.0], [96.4, 2482.0], [96.5, 2482.0], [96.6, 2482.0], [96.7, 2482.0], [96.8, 2482.0], [96.9, 2482.0], [97.0, 2585.0], [97.1, 2585.0], [97.2, 2585.0], [97.3, 2585.0], [97.4, 2585.0], [97.5, 2585.0], [97.6, 2585.0], [97.7, 2585.0], [97.8, 2585.0], [97.9, 2585.0], [98.0, 2616.0], [98.1, 2616.0], [98.2, 2616.0], [98.3, 2616.0], [98.4, 2616.0], [98.5, 2616.0], [98.6, 2616.0], [98.7, 2616.0], [98.8, 2616.0], [98.9, 2616.0], [99.0, 2616.0], [99.1, 2616.0], [99.2, 2616.0], [99.3, 2616.0], [99.4, 2616.0], [99.5, 2616.0], [99.6, 2616.0], [99.7, 2616.0], [99.8, 2616.0], [99.9, 2616.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 33.0, "series": [{"data": [[2100.0, 1.0], [2200.0, 1.0], [2300.0, 1.0], [2400.0, 1.0], [600.0, 26.0], [2500.0, 1.0], [2600.0, 2.0], [700.0, 33.0], [800.0, 8.0], [900.0, 1.0], [1000.0, 3.0], [400.0, 5.0], [1800.0, 1.0], [1900.0, 1.0], [2000.0, 1.0], [500.0, 14.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 5.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 85.0, "series": [{"data": [[0.0, 5.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 85.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 10.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.54, "minX": 1.64452344E12, "maxY": 9.54, "series": [{"data": [[1.64452344E12, 9.54]], "isOverall": false, "label": "JMeteer_First", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64452344E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 570.25, "minX": 1.0, "maxY": 882.8651685393257, "series": [{"data": [[4.0, 639.0], [2.0, 646.0], [1.0, 577.0], [9.0, 570.25], [10.0, 882.8651685393257], [5.0, 623.0], [6.0, 587.0], [3.0, 622.0], [7.0, 630.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.54, 851.7999999999997]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 388.3333333333333, "minX": 1.64452344E12, "maxY": 2716.6666666666665, "series": [{"data": [[1.64452344E12, 2716.6666666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.64452344E12, 388.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64452344E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 851.7999999999997, "minX": 1.64452344E12, "maxY": 851.7999999999997, "series": [{"data": [[1.64452344E12, 851.7999999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64452344E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 850.88, "minX": 1.64452344E12, "maxY": 850.88, "series": [{"data": [[1.64452344E12, 850.88]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64452344E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 1.4099999999999995, "minX": 1.64452344E12, "maxY": 1.4099999999999995, "series": [{"data": [[1.64452344E12, 1.4099999999999995]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64452344E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 450.0, "minX": 1.64452344E12, "maxY": 2616.0, "series": [{"data": [[1.64452344E12, 2616.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.64452344E12, 1804.4000000000046]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.64452344E12, 2616.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.64452344E12, 2377.199999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.64452344E12, 450.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.64452344E12, 713.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64452344E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 587.0, "minX": 2.0, "maxY": 2334.0, "series": [{"data": [[2.0, 611.5], [19.0, 694.0], [10.0, 2334.0], [11.0, 756.0], [13.0, 723.0], [15.0, 587.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 587.0, "minX": 2.0, "maxY": 2329.5, "series": [{"data": [[2.0, 611.0], [19.0, 693.5], [10.0, 2329.5], [11.0, 754.5], [13.0, 723.0], [15.0, 587.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.64452344E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.64452344E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64452344E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.64452344E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.64452344E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64452344E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.64452344E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.64452344E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64452344E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.64452344E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.64452344E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64452344E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

