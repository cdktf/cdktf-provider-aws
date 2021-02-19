// https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodebuildReportGroupConfig extends cdktf.TerraformMetaArguments {
  readonly deleteReports?: boolean;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  readonly type: string;
  /** export_config block */
  readonly exportConfig: CodebuildReportGroupExportConfig[];
}
export interface CodebuildReportGroupExportConfigS3Destination {
  readonly bucket: string;
  readonly encryptionDisabled?: boolean;
  readonly encryptionKey: string;
  readonly packaging?: string;
  readonly path?: string;
}

function codebuildReportGroupExportConfigS3DestinationToTerraform(struct?: CodebuildReportGroupExportConfigS3Destination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    encryption_disabled: cdktf.booleanToTerraform(struct!.encryptionDisabled),
    encryption_key: cdktf.stringToTerraform(struct!.encryptionKey),
    packaging: cdktf.stringToTerraform(struct!.packaging),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface CodebuildReportGroupExportConfig {
  readonly type: string;
  /** s3_destination block */
  readonly s3Destination?: CodebuildReportGroupExportConfigS3Destination[];
}

function codebuildReportGroupExportConfigToTerraform(struct?: CodebuildReportGroupExportConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    s3_destination: cdktf.listMapper(codebuildReportGroupExportConfigS3DestinationToTerraform)(struct!.s3Destination),
  }
}


// Resource

export class CodebuildReportGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CodebuildReportGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codebuild_report_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deleteReports = config.deleteReports;
    this._name = config.name;
    this._tags = config.tags;
    this._type = config.type;
    this._exportConfig = config.exportConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // delete_reports - computed: false, optional: true, required: false
  private _deleteReports?: boolean;
  public get deleteReports() {
    return this.getBooleanAttribute('delete_reports');
  }
  public set deleteReports(value: boolean ) {
    this._deleteReports = value;
  }
  public resetDeleteReports() {
    this._deleteReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteReportsInput() {
    return this._deleteReports
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // export_config - computed: false, optional: false, required: true
  private _exportConfig: CodebuildReportGroupExportConfig[];
  public get exportConfig() {
    return this.interpolationForAttribute('export_config') as any;
  }
  public set exportConfig(value: CodebuildReportGroupExportConfig[]) {
    this._exportConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportConfigInput() {
    return this._exportConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_reports: cdktf.booleanToTerraform(this._deleteReports),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      export_config: cdktf.listMapper(codebuildReportGroupExportConfigToTerraform)(this._exportConfig),
    };
  }
}
