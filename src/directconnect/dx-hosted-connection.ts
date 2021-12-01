// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Direct Connect
*/
export interface DxHostedConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html#bandwidth DxHostedConnection#bandwidth}
  */
  readonly bandwidth: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html#connection_id DxHostedConnection#connection_id}
  */
  readonly connectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html#name DxHostedConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html#owner_account_id DxHostedConnection#owner_account_id}
  */
  readonly ownerAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html#vlan DxHostedConnection#vlan}
  */
  readonly vlan: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html aws_dx_hosted_connection}
*/
export class DxHostedConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_dx_hosted_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html aws_dx_hosted_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DxHostedConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DxHostedConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_hosted_connection',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bandwidth = config.bandwidth;
    this._connectionId = config.connectionId;
    this._name = config.name;
    this._ownerAccountId = config.ownerAccountId;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_device - computed: true, optional: false, required: false
  public get awsDevice() {
    return this.getStringAttribute('aws_device');
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // has_logical_redundancy - computed: true, optional: false, required: false
  public get hasLogicalRedundancy() {
    return this.getStringAttribute('has_logical_redundancy');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jumbo_frame_capable - computed: true, optional: false, required: false
  public get jumboFrameCapable() {
    return this.getBooleanAttribute('jumbo_frame_capable') as any;
  }

  // lag_id - computed: true, optional: false, required: false
  public get lagId() {
    return this.getStringAttribute('lag_id');
  }

  // loa_issue_time - computed: true, optional: false, required: false
  public get loaIssueTime() {
    return this.getStringAttribute('loa_issue_time');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owner_account_id - computed: false, optional: false, required: true
  private _ownerAccountId?: string; 
  public get ownerAccountId() {
    return this.getStringAttribute('owner_account_id');
  }
  public set ownerAccountId(value: string) {
    this._ownerAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerAccountIdInput() {
    return this._ownerAccountId;
  }

  // partner_name - computed: true, optional: false, required: false
  public get partnerName() {
    return this.getStringAttribute('partner_name');
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      name: cdktf.stringToTerraform(this._name),
      owner_account_id: cdktf.stringToTerraform(this._ownerAccountId),
      vlan: cdktf.numberToTerraform(this._vlan),
    };
  }
}
