var TrNgGrid;
(function (TrNgGrid) {
    var Constants;
    (function (Constants) {
        Constants.tableDirective = "trNgGrid";
        Constants.tableDirectiveAttribute = "data-tr-ng-grid";
        Constants.dataColumnIsAutoGeneratedAttribute = Constants.tableDirectiveAttribute + "-auto-generated";
        Constants.dataColumnIsAutoGeneratedField = Constants.tableDirective + "AutoGenerated";
        Constants.dataColumnIsCustomizedAttribute = Constants.tableDirectiveAttribute + "-customized";
        Constants.dataColumnIsCustomizedField = Constants.tableDirective + "Customized";
        Constants.sortFilter = Constants.tableDirective + "SortFilter";
        Constants.dataPagingFilter = Constants.tableDirective + "DataPagingFilter";
        Constants.translateFilter = Constants.tableDirective + "TranslateFilter";
        Constants.dataFormattingFilter = Constants.tableDirective + "DataFormatFilter";
        Constants.defaultTranslationLocale = "default";
        Constants.sectionDirective = Constants.tableDirective + "Section";
        Constants.sectionDirectiveAttribute = Constants.tableDirectiveAttribute + "-section";
        Constants.rowDirective = Constants.tableDirective + "Row";
        Constants.rowDirectiveAttribute = Constants.tableDirectiveAttribute + "-row";
        Constants.cellDirective = Constants.tableDirective + "Cell";
        Constants.cellDirectiveAttribute = Constants.tableDirectiveAttribute + "-cell";
        Constants.cellPlaceholderDirective = Constants.cellDirective + "Placeholder";
        Constants.cellPlaceholderDirectiveAttribute = Constants.cellDirectiveAttribute + "-placeholder";
        Constants.globalFilterDirective = Constants.tableDirective + "GlobalFilter";
        Constants.globalFilterDirectiveAttribute = Constants.tableDirectiveAttribute + "-global-filter";
        Constants.pagerDirective = Constants.tableDirective + "Pager";
        Constants.pagerDirectiveAttribute = Constants.tableDirectiveAttribute + "-pager";
        Constants.columnSortDirective = Constants.tableDirective + "ColumnSort";
        Constants.columnSortDirectiveAttribute = Constants.tableDirectiveAttribute + "-column-sort";
        Constants.columnFilterDirective = Constants.tableDirective + "ColumnFilter";
        Constants.columnFilterDirectiveAttribute = Constants.tableDirectiveAttribute + "-column-filter";
        Constants.gridConfigurationService = Constants.tableDirective + "Configuration";
        Constants.gridLoggingService = Constants.tableDirective + "Log";
        Constants.gridConfigurationProvider = Constants.gridConfigurationService + "Provider";
    })(Constants = TrNgGrid.Constants || (TrNgGrid.Constants = {}));
})(TrNgGrid || (TrNgGrid = {}));
