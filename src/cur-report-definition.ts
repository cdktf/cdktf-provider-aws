// https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CurReportDefinitionConfig extends cdktf.TerraformMetaArguments {
  readonly additionalArtifacts?: string[];
  readonly additionalSchemaElements: string[];
  readonly compression: string;
  readonly format: string;
  readonly reportName: string;
  readonly s3Bucket: string;
  readonly s3Prefix?: string;
  readonly s3Region: string;
  readonly timeUnit: string;
}

// Resource

export class CurReportDefinition extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._reportName = config.reportName;
    this._s3Bucket = config.s3Bucket;
    this._s3Prefix = config.s3Prefix;
    this._s3Region = config.s3Region;
    this._timeUnit = config.timeUnit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_artifacts - computed: false, optional: true, required: false
  private _additionalArtifacts?: string[];
  public get additionalArtifacts() {
    return this.getListAttribute('additional_artifacts');
  }
  public set additionalArtifacts(value: string[] ) {
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
  private _additionalSchemaElements: string[];
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

  // compression - computed: false, optional: false, required: true
  private _compression: string;
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
  private _format: string;
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

  // report_name - computed: false, optional: false, required: true
  private _reportName: string;
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

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket: string;
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
  private _s3Prefix?: string;
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }
  public set s3Prefix(value: string ) {
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
  private _s3Region: string;
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
  private _timeUnit: string;
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
      report_name: cdktf.stringToTerraform(this._reportName),
      s3_bucket: cdktf.stringToTerraform(this._s3Bucket),
      s3_prefix: cdktf.stringToTerraform(this._s3Prefix),
      s3_region: cdktf.stringToTerraform(this._s3Region),
      time_unit: cdktf.stringToTerraform(this._timeUnit),
    };
  }
}
