// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS WorkSpaces
*/
export interface DataAwsWorkspacesImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_image.html#image_id DataAwsWorkspacesImage#image_id}
  */
  readonly imageId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_image.html aws_workspaces_image}
*/
export class DataAwsWorkspacesImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_workspaces_image";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_image.html aws_workspaces_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsWorkspacesImageConfig
  */
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operating_system_type - computed: true, optional: false, required: false
  public get operatingSystemType() {
    return this.getStringAttribute('operating_system_type');
  }

  // required_tenancy - computed: true, optional: false, required: false
  public get requiredTenancy() {
    return this.getStringAttribute('required_tenancy');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      image_id: cdktf.stringToTerraform(this._imageId),
    };
  }
}
