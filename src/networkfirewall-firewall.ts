// https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkfirewallFirewallConfig extends cdktf.TerraformMetaArguments {
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
export class NetworkfirewallFirewallFirewallStatusSyncStatesAttachment extends cdktf.ComplexComputedList {

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class NetworkfirewallFirewallFirewallStatusSyncStates extends cdktf.ComplexComputedList {

  // attachment - computed: true, optional: false, required: false
  public get attachment() {
    return this.interpolationForAttribute('attachment') as any;
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
}
export class NetworkfirewallFirewallFirewallStatus extends cdktf.ComplexComputedList {

  // sync_states - computed: true, optional: false, required: false
  public get syncStates() {
    return this.interpolationForAttribute('sync_states') as any;
  }
}
export interface NetworkfirewallFirewallSubnetMapping {
  readonly subnetId: string;
}

function networkfirewallFirewallSubnetMappingToTerraform(struct?: NetworkfirewallFirewallSubnetMapping): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


// Resource

export class NetworkfirewallFirewall extends cdktf.TerraformResource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: boolean;
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }
  public set deleteProtection(value: boolean ) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection
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

  // firewall_policy_arn - computed: false, optional: false, required: true
  private _firewallPolicyArn: string;
  public get firewallPolicyArn() {
    return this.getStringAttribute('firewall_policy_arn');
  }
  public set firewallPolicyArn(value: string) {
    this._firewallPolicyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyArnInput() {
    return this._firewallPolicyArn
  }

  // firewall_policy_change_protection - computed: false, optional: true, required: false
  private _firewallPolicyChangeProtection?: boolean;
  public get firewallPolicyChangeProtection() {
    return this.getBooleanAttribute('firewall_policy_change_protection');
  }
  public set firewallPolicyChangeProtection(value: boolean ) {
    this._firewallPolicyChangeProtection = value;
  }
  public resetFirewallPolicyChangeProtection() {
    this._firewallPolicyChangeProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyChangeProtectionInput() {
    return this._firewallPolicyChangeProtection
  }

  // firewall_status - computed: true, optional: false, required: false
  public firewallStatus(index: string) {
    return new NetworkfirewallFirewallFirewallStatus(this, 'firewall_status', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // subnet_change_protection - computed: false, optional: true, required: false
  private _subnetChangeProtection?: boolean;
  public get subnetChangeProtection() {
    return this.getBooleanAttribute('subnet_change_protection');
  }
  public set subnetChangeProtection(value: boolean ) {
    this._subnetChangeProtection = value;
  }
  public resetSubnetChangeProtection() {
    this._subnetChangeProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetChangeProtectionInput() {
    return this._subnetChangeProtection
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // update_token - computed: true, optional: false, required: false
  public get updateToken() {
    return this.getStringAttribute('update_token');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // subnet_mapping - computed: false, optional: false, required: true
  private _subnetMapping: NetworkfirewallFirewallSubnetMapping[];
  public get subnetMapping() {
    return this.interpolationForAttribute('subnet_mapping') as any;
  }
  public set subnetMapping(value: NetworkfirewallFirewallSubnetMapping[]) {
    this._subnetMapping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMappingInput() {
    return this._subnetMapping
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_protection: cdktf.booleanToTerraform(this._deleteProtection),
      description: cdktf.stringToTerraform(this._description),
      firewall_policy_arn: cdktf.stringToTerraform(this._firewallPolicyArn),
      firewall_policy_change_protection: cdktf.booleanToTerraform(this._firewallPolicyChangeProtection),
      name: cdktf.stringToTerraform(this._name),
      subnet_change_protection: cdktf.booleanToTerraform(this._subnetChangeProtection),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      subnet_mapping: cdktf.listMapper(networkfirewallFirewallSubnetMappingToTerraform)(this._subnetMapping),
    };
  }
}
