// https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2ClientVpnAuthorizationRuleConfig extends cdktf.TerraformMetaArguments {
  readonly accessGroupId?: string;
  readonly authorizeAllGroups?: boolean;
  readonly clientVpnEndpointId: string;
  readonly description?: string;
  readonly targetNetworkCidr: string;
}

// Resource

export class Ec2ClientVpnAuthorizationRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ec2ClientVpnAuthorizationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_client_vpn_authorization_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessGroupId = config.accessGroupId;
    this._authorizeAllGroups = config.authorizeAllGroups;
    this._clientVpnEndpointId = config.clientVpnEndpointId;
    this._description = config.description;
    this._targetNetworkCidr = config.targetNetworkCidr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_group_id - computed: false, optional: true, required: false
  private _accessGroupId?: string;
  public get accessGroupId() {
    return this.getStringAttribute('access_group_id');
  }
  public set accessGroupId(value: string ) {
    this._accessGroupId = value;
  }
  public resetAccessGroupId() {
    this._accessGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupIdInput() {
    return this._accessGroupId
  }

  // authorize_all_groups - computed: false, optional: true, required: false
  private _authorizeAllGroups?: boolean;
  public get authorizeAllGroups() {
    return this.getBooleanAttribute('authorize_all_groups');
  }
  public set authorizeAllGroups(value: boolean ) {
    this._authorizeAllGroups = value;
  }
  public resetAuthorizeAllGroups() {
    this._authorizeAllGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizeAllGroupsInput() {
    return this._authorizeAllGroups
  }

  // client_vpn_endpoint_id - computed: false, optional: false, required: true
  private _clientVpnEndpointId: string;
  public get clientVpnEndpointId() {
    return this.getStringAttribute('client_vpn_endpoint_id');
  }
  public set clientVpnEndpointId(value: string) {
    this._clientVpnEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientVpnEndpointIdInput() {
    return this._clientVpnEndpointId
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // target_network_cidr - computed: false, optional: false, required: true
  private _targetNetworkCidr: string;
  public get targetNetworkCidr() {
    return this.getStringAttribute('target_network_cidr');
  }
  public set targetNetworkCidr(value: string) {
    this._targetNetworkCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNetworkCidrInput() {
    return this._targetNetworkCidr
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_group_id: cdktf.stringToTerraform(this._accessGroupId),
      authorize_all_groups: cdktf.booleanToTerraform(this._authorizeAllGroups),
      client_vpn_endpoint_id: cdktf.stringToTerraform(this._clientVpnEndpointId),
      description: cdktf.stringToTerraform(this._description),
      target_network_cidr: cdktf.stringToTerraform(this._targetNetworkCidr),
    };
  }
}
