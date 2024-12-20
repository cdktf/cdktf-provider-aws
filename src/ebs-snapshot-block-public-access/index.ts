// https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/ebs_snapshot_block_public_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EbsSnapshotBlockPublicAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/ebs_snapshot_block_public_access#id EbsSnapshotBlockPublicAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/ebs_snapshot_block_public_access#state EbsSnapshotBlockPublicAccess#state}
  */
  readonly state: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/ebs_snapshot_block_public_access aws_ebs_snapshot_block_public_access}
*/
export class EbsSnapshotBlockPublicAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ebs_snapshot_block_public_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EbsSnapshotBlockPublicAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EbsSnapshotBlockPublicAccess to import
  * @param importFromId The id of the existing EbsSnapshotBlockPublicAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/ebs_snapshot_block_public_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EbsSnapshotBlockPublicAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ebs_snapshot_block_public_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/ebs_snapshot_block_public_access aws_ebs_snapshot_block_public_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EbsSnapshotBlockPublicAccessConfig
  */
  public constructor(scope: Construct, id: string, config: EbsSnapshotBlockPublicAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ebs_snapshot_block_public_access',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.82.1',
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
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
