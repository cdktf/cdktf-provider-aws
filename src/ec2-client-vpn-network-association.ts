// https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Ec2ClientVpnNetworkAssociationConfig extends TerraformMetaArguments {
  readonly clientVpnEndpointId: string;
  readonly securityGroups?: string[];
  readonly subnetId: string;
}

// Resource

export class Ec2ClientVpnNetworkAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ec2ClientVpnNetworkAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_client_vpn_network_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clientVpnEndpointId = config.clientVpnEndpointId;
    this._securityGroups = config.securityGroups;
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association_id - computed: true, optional: false, required: true
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // client_vpn_endpoint_id - computed: false, optional: false, required: true
  private _clientVpnEndpointId: string;
  public get clientVpnEndpointId() {
    return this._clientVpnEndpointId;
  }
  public set clientVpnEndpointId(value: string) {
    this._clientVpnEndpointId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[];
  public get securityGroups() {
    return this._securityGroups ?? this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[] | undefined) {
    this._securityGroups = value;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_vpn_endpoint_id: this._clientVpnEndpointId,
      security_groups: this._securityGroups,
      subnet_id: this._subnetId,
    };
  }
}
