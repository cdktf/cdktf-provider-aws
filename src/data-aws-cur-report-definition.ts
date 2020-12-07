// https://www.terraform.io/docs/providers/aws/r/data_aws_cur_report_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsCurReportDefinitionConfig extends cdktf.TerraformMetaArguments {
  readonly reportName: string;
}

// Resource

export class DataAwsCurReportDefinition extends cdktf.TerraformDataSource {

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
