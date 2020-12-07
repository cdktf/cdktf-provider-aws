// https://www.terraform.io/docs/providers/aws/r/network_interface.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly privateIp?: string;
  readonly privateIps?: string[];
  readonly privateIpsCount?: number;
  readonly securityGroups?: string[];
  readonly sourceDestCheck?: boolean;
  readonly subnetId: string;
  readonly tags?: { [key: string]: string };
  /** attachment block */
  readonly attachment?: NetworkInterfaceAttachment[];
}
export interface NetworkInterfaceAttachment {
  readonly deviceIndex: number;
  readonly instance: string;
}

function networkInterfaceAttachmentToTerraform(struct?: NetworkInterfaceAttachment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_index: cdktf.numberToTerraform(struct!.deviceIndex),
    instance: cdktf.stringToTerraform(struct!.instance),
  }
}


// Resource

export class NetworkInterface extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_network_interface',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._privateIp = config.privateIp;
    this._privateIps = config.privateIps;
    this._privateIpsCount = config.privateIpsCount;
    this._securityGroups = config.securityGroups;
    this._sourceDestCheck = config.sourceDestCheck;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._attachment = config.attachment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // outpost_arn - computed: true, optional: false, required: false
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }

  // private_dns_name - computed: true, optional: false, required: false
  public get privateDnsName() {
    return this.getStringAttribute('private_dns_name');
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string;
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp
  }

  // private_ips - computed: true, optional: true, required: false
  private _privateIps?: string[];
  public get privateIps() {
    return this.getListAttribute('private_ips');
  }
  public set privateIps(value: string[]) {
    this._privateIps = value;
  }
  public resetPrivateIps() {
    this._privateIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpsInput() {
    return this._privateIps
  }

  // private_ips_count - computed: true, optional: true, required: false
  private _privateIpsCount?: number;
  public get privateIpsCount() {
    return this.getNumberAttribute('private_ips_count');
  }
  public set privateIpsCount(value: number) {
    this._privateIpsCount = value;
  }
  public resetPrivateIpsCount() {
    this._privateIpsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpsCountInput() {
    return this._privateIpsCount
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[];
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups
  }

  // source_dest_check - computed: false, optional: true, required: false
  private _sourceDestCheck?: boolean;
  public get sourceDestCheck() {
    return this.getBooleanAttribute('source_dest_check');
  }
  public set sourceDestCheck(value: boolean ) {
    this._sourceDestCheck = value;
  }
  public resetSourceDestCheck() {
    this._sourceDestCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDestCheckInput() {
    return this._sourceDestCheck
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
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

  // attachment - computed: false, optional: true, required: false
  private _attachment?: NetworkInterfaceAttachment[];
  public get attachment() {
    return this.interpolationForAttribute('attachment') as any;
  }
  public set attachment(value: NetworkInterfaceAttachment[] ) {
    this._attachment = value;
  }
  public resetAttachment() {
    this._attachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentInput() {
    return this._attachment
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      private_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._privateIps),
      private_ips_count: cdktf.numberToTerraform(this._privateIpsCount),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
      source_dest_check: cdktf.booleanToTerraform(this._sourceDestCheck),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      attachment: cdktf.listMapper(networkInterfaceAttachmentToTerraform)(this._attachment),
    };
  }
}
