// https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "access_group_id": {
        "type": "string",
        "optional": true
      },
      "authorize_all_groups": {
        "type": "bool",
        "optional": true
      },
      "client_vpn_endpoint_id": {
        "type": "string",
        "required": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "target_network_cidr": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Ec2ClientVpnAuthorizationRuleConfig extends TerraformMetaArguments {
  readonly accessGroupId?: string;
  readonly authorizeAllGroups?: boolean;
  readonly clientVpnEndpointId: string;
  readonly description?: string;
  readonly targetNetworkCidr: string;
}

// Resource

export class Ec2ClientVpnAuthorizationRule extends TerraformResource {

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
    return this._accessGroupId;
  }
  public set accessGroupId(value: string | undefined) {
    this._accessGroupId = value;
  }

  // authorize_all_groups - computed: false, optional: true, required: false
  private _authorizeAllGroups?: boolean;
  public get authorizeAllGroups() {
    return this._authorizeAllGroups;
  }
  public set authorizeAllGroups(value: boolean | undefined) {
    this._authorizeAllGroups = value;
  }

  // client_vpn_endpoint_id - computed: false, optional: false, required: true
  private _clientVpnEndpointId: string;
  public get clientVpnEndpointId() {
    return this._clientVpnEndpointId;
  }
  public set clientVpnEndpointId(value: string) {
    this._clientVpnEndpointId = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // target_network_cidr - computed: false, optional: false, required: true
  private _targetNetworkCidr: string;
  public get targetNetworkCidr() {
    return this._targetNetworkCidr;
  }
  public set targetNetworkCidr(value: string) {
    this._targetNetworkCidr = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      access_group_id: this._accessGroupId,
      authorize_all_groups: this._authorizeAllGroups,
      client_vpn_endpoint_id: this._clientVpnEndpointId,
      description: this._description,
      target_network_cidr: this._targetNetworkCidr,
    };
  }
}
