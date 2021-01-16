// https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface NetworkfirewallFirewallConfig extends TerraformMetaArguments {
  readonly deleteProtection?: boolean;
  readonly description?: string;
  readonly firewallPolicyArn: string;
  readonly firewallPolicyChangeProtection?: boolean;
  readonly name: string;
  readonly subnetChangeProtection?: boolean;
  readonly tags?: { [key: string]: string };
  readonly vpcId: string;
  /** subnet_mapping block */
  readonly subnetMapping: NetworkfirewallFirewallSubnetMapping[];
}
export class NetworkfirewallFirewallFirewallStatusSyncStatesAttachment extends ComplexComputedList {

  // endpoint_id - computed: true, optional: false, required: true
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class NetworkfirewallFirewallFirewallStatusSyncStates extends ComplexComputedList {

  // attachment - computed: true, optional: false, required: true
  public get attachment() {
    return 'not implemented' as any;
  }

  // availability_zone - computed: true, optional: false, required: true
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
}
export class NetworkfirewallFirewallFirewallStatus extends ComplexComputedList {

  // sync_states - computed: true, optional: false, required: true
  public get syncStates() {
    return 'not implemented' as any;
  }
}
export interface NetworkfirewallFirewallSubnetMapping {
  readonly subnetId: string;
}

// Resource

export class NetworkfirewallFirewall extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkfirewallFirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networkfirewall_firewall',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deleteProtection = config.deleteProtection;
    this._description = config.description;
    this._firewallPolicyArn = config.firewallPolicyArn;
    this._firewallPolicyChangeProtection = config.firewallPolicyChangeProtection;
    this._name = config.name;
    this._subnetChangeProtection = config.subnetChangeProtection;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._subnetMapping = config.subnetMapping;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: boolean;
  public get deleteProtection() {
    return this._deleteProtection;
  }
  public set deleteProtection(value: boolean | undefined) {
    this._deleteProtection = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // firewall_policy_arn - computed: false, optional: false, required: true
  private _firewallPolicyArn: string;
  public get firewallPolicyArn() {
    return this._firewallPolicyArn;
  }
  public set firewallPolicyArn(value: string) {
    this._firewallPolicyArn = value;
  }

  // firewall_policy_change_protection - computed: false, optional: true, required: false
  private _firewallPolicyChangeProtection?: boolean;
  public get firewallPolicyChangeProtection() {
    return this._firewallPolicyChangeProtection;
  }
  public set firewallPolicyChangeProtection(value: boolean | undefined) {
    this._firewallPolicyChangeProtection = value;
  }

  // firewall_status - computed: true, optional: false, required: true
  public firewallStatus(index: string) {
    return new NetworkfirewallFirewallFirewallStatus(this, 'firewall_status', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // subnet_change_protection - computed: false, optional: true, required: false
  private _subnetChangeProtection?: boolean;
  public get subnetChangeProtection() {
    return this._subnetChangeProtection;
  }
  public set subnetChangeProtection(value: boolean | undefined) {
    this._subnetChangeProtection = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // update_token - computed: true, optional: false, required: true
  public get updateToken() {
    return this.getStringAttribute('update_token');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this._vpcId;
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }

  // subnet_mapping - computed: false, optional: false, required: true
  private _subnetMapping: NetworkfirewallFirewallSubnetMapping[];
  public get subnetMapping() {
    return this._subnetMapping;
  }
  public set subnetMapping(value: NetworkfirewallFirewallSubnetMapping[]) {
    this._subnetMapping = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_protection: this._deleteProtection,
      description: this._description,
      firewall_policy_arn: this._firewallPolicyArn,
      firewall_policy_change_protection: this._firewallPolicyChangeProtection,
      name: this._name,
      subnet_change_protection: this._subnetChangeProtection,
      tags: this._tags,
      vpc_id: this._vpcId,
      subnet_mapping: this._subnetMapping,
    };
  }
}
