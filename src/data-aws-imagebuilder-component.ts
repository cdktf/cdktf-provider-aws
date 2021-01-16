// https://www.terraform.io/docs/providers/aws/r/data_aws_imagebuilder_component.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsImagebuilderComponentConfig extends TerraformMetaArguments {
  readonly arn: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class DataAwsImagebuilderComponent extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsImagebuilderComponentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_imagebuilder_component',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._arn = config.arn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: false, required: true
  private _arn: string;
  public get arn() {
    return this._arn;
  }
  public set arn(value: string) {
    this._arn = value;
  }

  // change_description - computed: true, optional: false, required: true
  public get changeDescription() {
    return this.getStringAttribute('change_description');
  }

  // data - computed: true, optional: false, required: true
  public get data() {
    return this.getStringAttribute('data');
  }

  // date_created - computed: true, optional: false, required: true
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // encrypted - computed: true, optional: false, required: true
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: true
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // platform - computed: true, optional: false, required: true
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // supported_os_versions - computed: true, optional: false, required: true
  public get supportedOsVersions() {
    return this.getListAttribute('supported_os_versions');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: this._arn,
      tags: this._tags,
    };
  }
}
