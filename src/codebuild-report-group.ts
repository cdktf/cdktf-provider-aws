// https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodebuildReportGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#delete_reports CodebuildReportGroup#delete_reports}
  */
  readonly deleteReports?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#name CodebuildReportGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#tags CodebuildReportGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#tags_all CodebuildReportGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#type CodebuildReportGroup#type}
  */
  readonly type: string;
  /**
  * export_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#export_config CodebuildReportGroup#export_config}
  */
  readonly exportConfig: CodebuildReportGroupExportConfig[];
}
export interface CodebuildReportGroupExportConfigS3Destination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#bucket CodebuildReportGroup#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#encryption_disabled CodebuildReportGroup#encryption_disabled}
  */
  readonly encryptionDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#encryption_key CodebuildReportGroup#encryption_key}
  */
  readonly encryptionKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#packaging CodebuildReportGroup#packaging}
  */
  readonly packaging?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#path CodebuildReportGroup#path}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#type CodebuildReportGroup#type}
  */
  readonly type: string;
  /**
  * s3_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#s3_destination CodebuildReportGroup#s3_destination}
  */
  readonly s3Destination?: CodebuildReportGroupExportConfigS3Destination[];
}

function codebuildReportGroupExportConfigToTerraform(struct?: CodebuildReportGroupExportConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    s3_destination: cdktf.listMapper(codebuildReportGroupExportConfigS3DestinationToTerraform)(struct!.s3Destination),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html aws_codebuild_report_group}
*/
export class CodebuildReportGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_codebuild_report_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html aws_codebuild_report_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodebuildReportGroupConfig
  */
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
    this._tagsAll = config.tagsAll;
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
  private _deleteReports?: boolean | cdktf.IResolvable;
  public get deleteReports() {
    return this.getBooleanAttribute('delete_reports');
  }
  public set deleteReports(value: boolean | cdktf.IResolvable ) {
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      export_config: cdktf.listMapper(codebuildReportGroupExportConfigToTerraform)(this._exportConfig),
    };
  }
}
