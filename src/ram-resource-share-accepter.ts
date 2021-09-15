// https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RamResourceShareAccepterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html#share_arn RamResourceShareAccepter#share_arn}
  */
  readonly shareArn: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html#timeouts RamResourceShareAccepter#timeouts}
  */
  readonly timeouts?: RamResourceShareAccepterTimeouts;
}
export interface RamResourceShareAccepterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html#create RamResourceShareAccepter#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html#delete RamResourceShareAccepter#delete}
  */
  readonly delete?: string;
}

function ramResourceShareAccepterTimeoutsToTerraform(struct?: RamResourceShareAccepterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html aws_ram_resource_share_accepter}
*/
export class RamResourceShareAccepter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ram_resource_share_accepter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html aws_ram_resource_share_accepter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RamResourceShareAccepterConfig
  */
  public constructor(scope: Construct, id: string, config: RamResourceShareAccepterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ram_resource_share_accepter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._shareArn = config.shareArn;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invitation_arn - computed: true, optional: false, required: false
  public get invitationArn() {
    return this.getStringAttribute('invitation_arn');
  }

  // receiver_account_id - computed: true, optional: false, required: false
  public get receiverAccountId() {
    return this.getStringAttribute('receiver_account_id');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getListAttribute('resources');
  }

  // sender_account_id - computed: true, optional: false, required: false
  public get senderAccountId() {
    return this.getStringAttribute('sender_account_id');
  }

  // share_arn - computed: false, optional: false, required: true
  private _shareArn: string;
  public get shareArn() {
    return this.getStringAttribute('share_arn');
  }
  public set shareArn(value: string) {
    this._shareArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareArnInput() {
    return this._shareArn
  }

  // share_id - computed: true, optional: false, required: false
  public get shareId() {
    return this.getStringAttribute('share_id');
  }

  // share_name - computed: true, optional: false, required: false
  public get shareName() {
    return this.getStringAttribute('share_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RamResourceShareAccepterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: RamResourceShareAccepterTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      share_arn: cdktf.stringToTerraform(this._shareArn),
      timeouts: ramResourceShareAccepterTimeoutsToTerraform(this._timeouts),
    };
  }
}
