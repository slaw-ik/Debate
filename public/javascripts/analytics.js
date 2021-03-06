function Analytics(analytics_data) {
    $(function() {
        var data_name = [];
        var data_values = [];
        $.each(analytics_data, function (key, value) {
          data_name.push(key);
          data_values.push(value);
        });
        //var number_columns = Math.round(data_name.length / 13) + 1;
        $.jqplot.config.enablePlugins = true;
        //Create graphic
        var plot_for_debate_analytics = $.jqplot('placeholder_by_debate_analytics', data_values, {
            title: 'Votes',
            axes: {
                xaxis: {
                    renderer: $.jqplot.DateAxisRenderer,
                    numberTicks: 10,
                    tickOptions: {
                        formatString:'%b&nbsp;%#d,%Y'
                    }
                },
                yaxis: {
                    min:0,
                    tickOptions: {
                        show:false
                    }
                }
            },
            seriesDefaults: {
                neighborThreshold:0,
                showMarker:false
            },
            legend: {
                renderer: $.jqplot.EnhancedLegendRenderer,
                show:true,
                escapeHtml:true,
                labels:data_name,
                location: 'ne',
                rendererOptions: {
                    numberColumns: 1
                }
            },
            highlighter: {
                show:true,
                sizeAdjust:0,
                tooltipOffset: 0,
                tooltipLocation: 'e'
            },
            cursor: {
                show:false
            }
        });
        var overview_plot_by_debate_analytics = $.jqplot('overview_by_debate_analytics', data_values, {
            axesDefaults:{
                tickOptions: {
                    formatString:"%d",
                    show:false
                },
                autoscale:false,
                useSeriesColor:true
            },
            axes: {
                xaxis: {
                    renderer: $.jqplot.DateAxisRenderer,
                    numberTicks: 5,
                    tickOptions: {
                        formatString:'%b&nbsp;%#d'
                    }
                },
                yaxis: {
                    numberTicks: 1,
                    show:false
                }
            },
            seriesDefaults: {
                neighborThreshold:0,
                showMarker:false
            },
            highlighter: {
                show:false
            },
            cursor: {
                showTooltip: false,
                zoom:true,
                constrainZoomTo: 'x'
            }
        });
        $.jqplot.Cursor.zoomProxy(plot_for_debate_analytics, overview_plot_by_debate_analytics);
        //    End    //
    });
}