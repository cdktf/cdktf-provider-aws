// https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CodebuildReportGroupConfig extends TerraformMetaArguments {
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
export interface CodebuildReportGroupExportConfig {
  readonly type: string;
  /** s3_destination block */
  readonly s3Destination?: CodebuildReportGroupExportConfigS3Destination[];
}

// Resource

export class CodebuildReportGroup extends TerraformResource {

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
    this._name = config.name;
    this._tags = config.tags;
    this._type = config.type;
    this._exportConfig = config.exportConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created - computed: true, optional: false, required: true
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // export_config - computed: false, optional: false, required: true
  private _exportConfig: CodebuildReportGroupExportConfig[];
  public get exportConfig() {
    return this._exportConfig;
  }
  public set exportConfig(value: CodebuildReportGroupExportConfig[]) {
    this._exportConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      tags: this._tags,
      type: this._type,
      export_config: this._exportConfig,
    };
  }
}
