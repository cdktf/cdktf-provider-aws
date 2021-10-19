// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Cost and Usage Report
*/
export namespace Cur {
  export interface CurReportDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#additional_artifacts CurReportDefinition#additional_artifacts}
    */
    readonly additionalArtifacts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#additional_schema_elements CurReportDefinition#additional_schema_elements}
    */
    readonly additionalSchemaElements: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#compression CurReportDefinition#compression}
    */
    readonly compression: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#format CurReportDefinition#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#refresh_closed_reports CurReportDefinition#refresh_closed_reports}
    */
    readonly refreshClosedReports?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#report_name CurReportDefinition#report_name}
    */
    readonly reportName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#report_versioning CurReportDefinition#report_versioning}
    */
    readonly reportVersioning?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#s3_bucket CurReportDefinition#s3_bucket}
    */
    readonly s3Bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#s3_prefix CurReportDefinition#s3_prefix}
    */
    readonly s3Prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#s3_region CurReportDefinition#s3_region}
    */
    readonly s3Region: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#time_unit CurReportDefinition#time_unit}
    */
    readonly timeUnit: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html aws_cur_report_definition}
  */
  export class CurReportDefinition extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cur_report_definition";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html aws_cur_report_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CurReportDefinitionConfig
    */
    public constructor(scope: Construct, id: string, config: CurReportDefinitionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cur_report_definition',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._additionalArtifacts = config.additionalArtifacts;
      this._additionalSchemaElements = config.additionalSchemaElements;
      this._compression = config.compression;
      this._format = config.format;
      this._refreshClosedReports = config.refreshClosedReports;
      this._reportName = config.reportName;
      this._reportVersioning = config.reportVersioning;
      this._s3Bucket = config.s3Bucket;
      this._s3Prefix = config.s3Prefix;
      this._s3Region = config.s3Region;
      this._timeUnit = config.timeUnit;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // additional_artifacts - computed: false, optional: true, required: false
    private _additionalArtifacts?: string[] | undefined; 
    public get additionalArtifacts() {
      return this.getListAttribute('additional_artifacts');
    }
    public set additionalArtifacts(value: string[] | undefined) {
      this._additionalArtifacts = value;
    }
    public resetAdditionalArtifacts() {
      this._additionalArtifacts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalArtifactsInput() {
      return this._additionalArtifacts
    }

    // additional_schema_elements - computed: false, optional: false, required: true
    private _additionalSchemaElements?: string[]; 
    public get additionalSchemaElements() {
      return this.getListAttribute('additional_schema_elements');
    }
    public set additionalSchemaElements(value: string[]) {
      this._additionalSchemaElements = value;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalSchemaElementsInput() {
      return this._additionalSchemaElements
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // compression - computed: false, optional: false, required: true
    private _compression?: string; 
    public get compression() {
      return this.getStringAttribute('compression');
    }
    public set compression(value: string) {
      this._compression = value;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionInput() {
      return this._compression
    }

    // format - computed: false, optional: false, required: true
    private _format?: string; 
    public get format() {
      return this.getStringAttribute('format');
    }
    public set format(value: string) {
      this._format = value;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
      return this._format
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // refresh_closed_reports - computed: false, optional: true, required: false
    private _refreshClosedReports?: boolean | cdktf.IResolvable | undefined; 
    public get refreshClosedReports() {
      return this.getBooleanAttribute('refresh_closed_reports') as any;
    }
    public set refreshClosedReports(value: boolean | cdktf.IResolvable | undefined) {
      this._refreshClosedReports = value;
    }
    public resetRefreshClosedReports() {
      this._refreshClosedReports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get refreshClosedReportsInput() {
      return this._refreshClosedReports
    }

    // report_name - computed: false, optional: false, required: true
    private _reportName?: string; 
    public get reportName() {
      return this.getStringAttribute('report_name');
    }
    public set reportName(value: string) {
      this._reportName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get reportNameInput() {
      return this._reportName
    }

    // report_versioning - computed: false, optional: true, required: false
    private _reportVersioning?: string | undefined; 
    public get reportVersioning() {
      return this.getStringAttribute('report_versioning');
    }
    public set reportVersioning(value: string | undefined) {
      this._reportVersioning = value;
    }
    public resetReportVersioning() {
      this._reportVersioning = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportVersioningInput() {
      return this._reportVersioning
    }

    // s3_bucket - computed: false, optional: false, required: true
    private _s3Bucket?: string; 
    public get s3Bucket() {
      return this.getStringAttribute('s3_bucket');
    }
    public set s3Bucket(value: string) {
      this._s3Bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketInput() {
      return this._s3Bucket
    }

    // s3_prefix - computed: false, optional: true, required: false
    private _s3Prefix?: string | undefined; 
    public get s3Prefix() {
      return this.getStringAttribute('s3_prefix');
    }
    public set s3Prefix(value: string | undefined) {
      this._s3Prefix = value;
    }
    public resetS3Prefix() {
      this._s3Prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3PrefixInput() {
      return this._s3Prefix
    }

    // s3_region - computed: false, optional: false, required: true
    private _s3Region?: string; 
    public get s3Region() {
      return this.getStringAttribute('s3_region');
    }
    public set s3Region(value: string) {
      this._s3Region = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3RegionInput() {
      return this._s3Region
    }

    // time_unit - computed: false, optional: false, required: true
    private _timeUnit?: string; 
    public get timeUnit() {
      return this.getStringAttribute('time_unit');
    }
    public set timeUnit(value: string) {
      this._timeUnit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get timeUnitInput() {
      return this._timeUnit
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        additional_artifacts: cdktf.listMapper(cdktf.stringToTerraform)(this._additionalArtifacts),
        additional_schema_elements: cdktf.listMapper(cdktf.stringToTerraform)(this._additionalSchemaElements),
        compression: cdktf.stringToTerraform(this._compression),
        format: cdktf.stringToTerraform(this._format),
        refresh_closed_reports: cdktf.booleanToTerraform(this._refreshClosedReports),
        report_name: cdktf.stringToTerraform(this._reportName),
        report_versioning: cdktf.stringToTerraform(this._reportVersioning),
        s3_bucket: cdktf.stringToTerraform(this._s3Bucket),
        s3_prefix: cdktf.stringToTerraform(this._s3Prefix),
        s3_region: cdktf.stringToTerraform(this._s3Region),
        time_unit: cdktf.stringToTerraform(this._timeUnit),
      };
    }
  }
  export interface DataAwsCurReportDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cur_report_definition.html#report_name DataAwsCurReportDefinition#report_name}
    */
    readonly reportName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cur_report_definition.html aws_cur_report_definition}
  */
  export class DataAwsCurReportDefinition extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cur_report_definition";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cur_report_definition.html aws_cur_report_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCurReportDefinitionConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsCurReportDefinitionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cur_report_definition',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._reportName = config.reportName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // additional_artifacts - computed: true, optional: false, required: false
    public get additionalArtifacts() {
      return this.getListAttribute('additional_artifacts');
    }

    // additional_schema_elements - computed: true, optional: false, required: false
    public get additionalSchemaElements() {
      return this.getListAttribute('additional_schema_elements');
    }

    // compression - computed: true, optional: false, required: false
    public get compression() {
      return this.getStringAttribute('compression');
    }

    // format - computed: true, optional: false, required: false
    public get format() {
      return this.getStringAttribute('format');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // refresh_closed_reports - computed: true, optional: false, required: false
    public get refreshClosedReports() {
      return this.getBooleanAttribute('refresh_closed_reports') as any;
    }

    // report_name - computed: false, optional: false, required: true
    private _reportName?: string; 
    public get reportName() {
      return this.getStringAttribute('report_name');
    }
    public set reportName(value: string) {
      this._reportName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get reportNameInput() {
      return this._reportName
    }

    // report_versioning - computed: true, optional: false, required: false
    public get reportVersioning() {
      return this.getStringAttribute('report_versioning');
    }

    // s3_bucket - computed: true, optional: false, required: false
    public get s3Bucket() {
      return this.getStringAttribute('s3_bucket');
    }

    // s3_prefix - computed: true, optional: false, required: false
    public get s3Prefix() {
      return this.getStringAttribute('s3_prefix');
    }

    // s3_region - computed: true, optional: false, required: false
    public get s3Region() {
      return this.getStringAttribute('s3_region');
    }

    // time_unit - computed: true, optional: false, required: false
    public get timeUnit() {
      return this.getStringAttribute('time_unit');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        report_name: cdktf.stringToTerraform(this._reportName),
      };
    }
  }
}
