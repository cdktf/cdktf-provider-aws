// https://www.terraform.io/docs/providers/aws/r/data_aws_cur_report_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsCurReportDefinitionConfig extends TerraformMetaArguments {
  readonly reportName: string;
}

// Resource

export class DataAwsCurReportDefinition extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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

  // additional_artifacts - computed: true, optional: false, required: true
  public get additionalArtifacts() {
    return this.getListAttribute('additional_artifacts');
  }

  // additional_schema_elements - computed: true, optional: false, required: true
  public get additionalSchemaElements() {
    return this.getListAttribute('additional_schema_elements');
  }

  // compression - computed: true, optional: false, required: true
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // format - computed: true, optional: false, required: true
  public get format() {
    return this.getStringAttribute('format');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // refresh_closed_reports - computed: true, optional: false, required: true
  public get refreshClosedReports() {
    return this.getBooleanAttribute('refresh_closed_reports');
  }

  // report_name - computed: false, optional: false, required: true
  private _reportName: string;
  public get reportName() {
    return this._reportName;
  }
  public set reportName(value: string) {
    this._reportName = value;
  }

  // report_versioning - computed: true, optional: false, required: true
  public get reportVersioning() {
    return this.getStringAttribute('report_versioning');
  }

  // s3_bucket - computed: true, optional: false, required: true
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_prefix - computed: true, optional: false, required: true
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }

  // s3_region - computed: true, optional: false, required: true
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }

  // time_unit - computed: true, optional: false, required: true
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      report_name: this._reportName,
    };
  }
}
