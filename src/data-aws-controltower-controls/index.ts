// https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/controltower_controls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsControltowerControlsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/controltower_controls#id DataAwsControltowerControls#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/controltower_controls#target_identifier DataAwsControltowerControls#target_identifier}
  */
  readonly targetIdentifier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/controltower_controls aws_controltower_controls}
*/
export class DataAwsControltowerControls extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_controltower_controls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsControltowerControls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsControltowerControls to import
  * @param importFromId The id of the existing DataAwsControltowerControls that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/controltower_controls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsControltowerControls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_controltower_controls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/controltower_controls aws_controltower_controls} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsControltowerControlsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsControltowerControlsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_controltower_controls',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.36.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._targetIdentifier = config.targetIdentifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled_controls - computed: true, optional: false, required: false
  public get enabledControls() {
    return this.getListAttribute('enabled_controls');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // target_identifier - computed: false, optional: false, required: true
  private _targetIdentifier?: string; 
  public get targetIdentifier() {
    return this.getStringAttribute('target_identifier');
  }
  public set targetIdentifier(value: string) {
    this._targetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdentifierInput() {
    return this._targetIdentifier;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      target_identifier: cdktf.stringToTerraform(this._targetIdentifier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_identifier: {
        value: cdktf.stringToHclTerraform(this._targetIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
