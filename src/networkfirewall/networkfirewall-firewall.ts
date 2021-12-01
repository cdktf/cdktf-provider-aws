// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Network Firewall
*/
export interface NetworkfirewallFirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#delete_protection NetworkfirewallFirewall#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#description NetworkfirewallFirewall#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#firewall_policy_arn NetworkfirewallFirewall#firewall_policy_arn}
  */
  readonly firewallPolicyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#firewall_policy_change_protection NetworkfirewallFirewall#firewall_policy_change_protection}
  */
  readonly firewallPolicyChangeProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#name NetworkfirewallFirewall#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#subnet_change_protection NetworkfirewallFirewall#subnet_change_protection}
  */
  readonly subnetChangeProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#tags NetworkfirewallFirewall#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#tags_all NetworkfirewallFirewall#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#vpc_id NetworkfirewallFirewall#vpc_id}
  */
  readonly vpcId: string;
  /**
  * subnet_mapping block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#subnet_mapping NetworkfirewallFirewall#subnet_mapping}
  */
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
    // Getting the computed value is not yet implemented
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
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sync_states') as any;
  }
}
export interface NetworkfirewallFirewallSubnetMapping {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#subnet_id NetworkfirewallFirewall#subnet_id}
  */
  readonly subnetId: string;
}

export function networkfirewallFirewallSubnetMappingToTerraform(struct?: NetworkfirewallFirewallSubnetMapping): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html aws_networkfirewall_firewall}
*/
export class NetworkfirewallFirewall extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_networkfirewall_firewall";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html aws_networkfirewall_firewall} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkfirewallFirewallConfig
  */
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
    this._tagsAll = config.tagsAll;
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
  private _deleteProtection?: boolean | cdktf.IResolvable; 
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection') as any;
  }
  public set deleteProtection(value: boolean | cdktf.IResolvable) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // firewall_policy_arn - computed: false, optional: false, required: true
  private _firewallPolicyArn?: string; 
  public get firewallPolicyArn() {
    return this.getStringAttribute('firewall_policy_arn');
  }
  public set firewallPolicyArn(value: string) {
    this._firewallPolicyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyArnInput() {
    return this._firewallPolicyArn;
  }

  // firewall_policy_change_protection - computed: false, optional: true, required: false
  private _firewallPolicyChangeProtection?: boolean | cdktf.IResolvable; 
  public get firewallPolicyChangeProtection() {
    return this.getBooleanAttribute('firewall_policy_change_protection') as any;
  }
  public set firewallPolicyChangeProtection(value: boolean | cdktf.IResolvable) {
    this._firewallPolicyChangeProtection = value;
  }
  public resetFirewallPolicyChangeProtection() {
    this._firewallPolicyChangeProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyChangeProtectionInput() {
    return this._firewallPolicyChangeProtection;
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

  // subnet_change_protection - computed: false, optional: true, required: false
  private _subnetChangeProtection?: boolean | cdktf.IResolvable; 
  public get subnetChangeProtection() {
    return this.getBooleanAttribute('subnet_change_protection') as any;
  }
  public set subnetChangeProtection(value: boolean | cdktf.IResolvable) {
    this._subnetChangeProtection = value;
  }
  public resetSubnetChangeProtection() {
    this._subnetChangeProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetChangeProtectionInput() {
    return this._subnetChangeProtection;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // update_token - computed: true, optional: false, required: false
  public get updateToken() {
    return this.getStringAttribute('update_token');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // subnet_mapping - computed: false, optional: false, required: true
  private _subnetMapping?: NetworkfirewallFirewallSubnetMapping[]; 
  public get subnetMapping() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('subnet_mapping') as any;
  }
  public set subnetMapping(value: NetworkfirewallFirewallSubnetMapping[]) {
    this._subnetMapping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMappingInput() {
    return this._subnetMapping;
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      subnet_mapping: cdktf.listMapper(networkfirewallFirewallSubnetMappingToTerraform)(this._subnetMapping),
    };
  }
}
