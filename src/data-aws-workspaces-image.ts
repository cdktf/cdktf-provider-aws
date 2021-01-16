// https://www.terraform.io/docs/providers/aws/r/data_aws_workspaces_image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsWorkspacesImageConfig extends TerraformMetaArguments {
  readonly imageId: string;
}

// Resource

export class DataAwsWorkspacesImage extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsWorkspacesImageConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_workspaces_image',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._imageId = config.imageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId: string;
  public get imageId() {
    return this._imageId;
  }
  public set imageId(value: string) {
    this._imageId = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // operating_system_type - computed: true, optional: false, required: true
  public get operatingSystemType() {
    return this.getStringAttribute('operating_system_type');
  }

  // required_tenancy - computed: true, optional: false, required: true
  public get requiredTenancy() {
    return this.getStringAttribute('required_tenancy');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      image_id: this._imageId,
    };
  }
}
