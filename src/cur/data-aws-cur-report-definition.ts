// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Cost and Usage Report
*/
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
    return this._reportName;
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
