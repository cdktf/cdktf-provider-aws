// https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/securityhub_invite_accepter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityhubInviteAccepterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/securityhub_invite_accepter#id SecurityhubInviteAccepter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/securityhub_invite_accepter#master_id SecurityhubInviteAccepter#master_id}
  */
  readonly masterId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/securityhub_invite_accepter aws_securityhub_invite_accepter}
*/
export class SecurityhubInviteAccepter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_invite_accepter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityhubInviteAccepter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityhubInviteAccepter to import
  * @param importFromId The id of the existing SecurityhubInviteAccepter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/securityhub_invite_accepter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityhubInviteAccepter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_securityhub_invite_accepter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/securityhub_invite_accepter aws_securityhub_invite_accepter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubInviteAccepterConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityhubInviteAccepterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_invite_accepter',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.43.0',
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
    this._masterId = config.masterId;
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

  // invitation_id - computed: true, optional: false, required: false
  public get invitationId() {
    return this.getStringAttribute('invitation_id');
  }

  // master_id - computed: false, optional: false, required: true
  private _masterId?: string; 
  public get masterId() {
    return this.getStringAttribute('master_id');
  }
  public set masterId(value: string) {
    this._masterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterIdInput() {
    return this._masterId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      master_id: cdktf.stringToTerraform(this._masterId),
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
      master_id: {
        value: cdktf.stringToHclTerraform(this._masterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
