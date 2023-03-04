// https://www.terraform.io/docs/providers/aws/r/network_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#description NetworkInterface#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#id NetworkInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#interface_type NetworkInterface#interface_type}
  */
  readonly interfaceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv4_prefix_count NetworkInterface#ipv4_prefix_count}
  */
  readonly ipv4PrefixCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv4_prefixes NetworkInterface#ipv4_prefixes}
  */
  readonly ipv4Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_count NetworkInterface#ipv6_address_count}
  */
  readonly ipv6AddressCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_list NetworkInterface#ipv6_address_list}
  */
  readonly ipv6AddressList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_list_enabled NetworkInterface#ipv6_address_list_enabled}
  */
  readonly ipv6AddressListEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_addresses NetworkInterface#ipv6_addresses}
  */
  readonly ipv6Addresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_prefix_count NetworkInterface#ipv6_prefix_count}
  */
  readonly ipv6PrefixCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_prefixes NetworkInterface#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip NetworkInterface#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip_list NetworkInterface#private_ip_list}
  */
  readonly privateIpList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip_list_enabled NetworkInterface#private_ip_list_enabled}
  */
  readonly privateIpListEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ips NetworkInterface#private_ips}
  */
  readonly privateIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ips_count NetworkInterface#private_ips_count}
  */
  readonly privateIpsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#security_groups NetworkInterface#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#source_dest_check NetworkInterface#source_dest_check}
  */
  readonly sourceDestCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#subnet_id NetworkInterface#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#tags NetworkInterface#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#tags_all NetworkInterface#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * attachment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#attachment NetworkInterface#attachment}
  */
  readonly attachment?: NetworkInterfaceAttachment[] | cdktf.IResolvable;
}
export interface NetworkInterfaceAttachment {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#device_index NetworkInterface#device_index}
  */
  readonly deviceIndex: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#instance NetworkInterface#instance}
  */
  readonly instance: string;
}

export function networkInterfaceAttachmentToTerraform(struct?: NetworkInterfaceAttachment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_index: cdktf.numberToTerraform(struct!.deviceIndex),
    instance: cdktf.stringToTerraform(struct!.instance),
  }
}

export class NetworkInterfaceAttachmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkInterfaceAttachment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIndex = this._deviceIndex;
    }
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkInterfaceAttachment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceIndex = undefined;
      this._instance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceIndex = value.deviceIndex;
      this._instance = value.instance;
    }
  }

  // attachment_id - computed: true, optional: false, required: false
  public get attachmentId() {
    return this.getStringAttribute('attachment_id');
  }

  // device_index - computed: false, optional: false, required: true
  private _deviceIndex?: number; 
  public get deviceIndex() {
    return this.getNumberAttribute('device_index');
  }
  public set deviceIndex(value: number) {
    this._deviceIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIndexInput() {
    return this._deviceIndex;
  }

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }
}

export class NetworkInterfaceAttachmentList extends cdktf.ComplexList {
  public internalValue? : NetworkInterfaceAttachment[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NetworkInterfaceAttachmentOutputReference {
    return new NetworkInterfaceAttachmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_interface aws_network_interface}
*/
export class NetworkInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_network_interface";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_interface aws_network_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_network_interface',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._interfaceType = config.interfaceType;
    this._ipv4PrefixCount = config.ipv4PrefixCount;
    this._ipv4Prefixes = config.ipv4Prefixes;
    this._ipv6AddressCount = config.ipv6AddressCount;
    this._ipv6AddressList = config.ipv6AddressList;
    this._ipv6AddressListEnabled = config.ipv6AddressListEnabled;
    this._ipv6Addresses = config.ipv6Addresses;
    this._ipv6PrefixCount = config.ipv6PrefixCount;
    this._ipv6Prefixes = config.ipv6Prefixes;
    this._privateIp = config.privateIp;
    this._privateIpList = config.privateIpList;
    this._privateIpListEnabled = config.privateIpListEnabled;
    this._privateIps = config.privateIps;
    this._privateIpsCount = config.privateIpsCount;
    this._securityGroups = config.securityGroups;
    this._sourceDestCheck = config.sourceDestCheck;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._attachment.internalValue = config.attachment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // interface_type - computed: true, optional: true, required: false
  private _interfaceType?: string; 
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }
  public set interfaceType(value: string) {
    this._interfaceType = value;
  }
  public resetInterfaceType() {
    this._interfaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTypeInput() {
    return this._interfaceType;
  }

  // ipv4_prefix_count - computed: true, optional: true, required: false
  private _ipv4PrefixCount?: number; 
  public get ipv4PrefixCount() {
    return this.getNumberAttribute('ipv4_prefix_count');
  }
  public set ipv4PrefixCount(value: number) {
    this._ipv4PrefixCount = value;
  }
  public resetIpv4PrefixCount() {
    this._ipv4PrefixCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixCountInput() {
    return this._ipv4PrefixCount;
  }

  // ipv4_prefixes - computed: true, optional: true, required: false
  private _ipv4Prefixes?: string[]; 
  public get ipv4Prefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_prefixes'));
  }
  public set ipv4Prefixes(value: string[]) {
    this._ipv4Prefixes = value;
  }
  public resetIpv4Prefixes() {
    this._ipv4Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixesInput() {
    return this._ipv4Prefixes;
  }

  // ipv6_address_count - computed: true, optional: true, required: false
  private _ipv6AddressCount?: number; 
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv6_address_count');
  }
  public set ipv6AddressCount(value: number) {
    this._ipv6AddressCount = value;
  }
  public resetIpv6AddressCount() {
    this._ipv6AddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressCountInput() {
    return this._ipv6AddressCount;
  }

  // ipv6_address_list - computed: true, optional: true, required: false
  private _ipv6AddressList?: string[]; 
  public get ipv6AddressList() {
    return this.getListAttribute('ipv6_address_list');
  }
  public set ipv6AddressList(value: string[]) {
    this._ipv6AddressList = value;
  }
  public resetIpv6AddressList() {
    this._ipv6AddressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressListInput() {
    return this._ipv6AddressList;
  }

  // ipv6_address_list_enabled - computed: false, optional: true, required: false
  private _ipv6AddressListEnabled?: boolean | cdktf.IResolvable; 
  public get ipv6AddressListEnabled() {
    return this.getBooleanAttribute('ipv6_address_list_enabled');
  }
  public set ipv6AddressListEnabled(value: boolean | cdktf.IResolvable) {
    this._ipv6AddressListEnabled = value;
  }
  public resetIpv6AddressListEnabled() {
    this._ipv6AddressListEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressListEnabledInput() {
    return this._ipv6AddressListEnabled;
  }

  // ipv6_addresses - computed: true, optional: true, required: false
  private _ipv6Addresses?: string[]; 
  public get ipv6Addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_addresses'));
  }
  public set ipv6Addresses(value: string[]) {
    this._ipv6Addresses = value;
  }
  public resetIpv6Addresses() {
    this._ipv6Addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses;
  }

  // ipv6_prefix_count - computed: true, optional: true, required: false
  private _ipv6PrefixCount?: number; 
  public get ipv6PrefixCount() {
    return this.getNumberAttribute('ipv6_prefix_count');
  }
  public set ipv6PrefixCount(value: number) {
    this._ipv6PrefixCount = value;
  }
  public resetIpv6PrefixCount() {
    this._ipv6PrefixCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixCountInput() {
    return this._ipv6PrefixCount;
  }

  // ipv6_prefixes - computed: true, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_prefixes'));
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // outpost_arn - computed: true, optional: false, required: false
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
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
    return this._privateIp;
  }

  // private_ip_list - computed: true, optional: true, required: false
  private _privateIpList?: string[]; 
  public get privateIpList() {
    return this.getListAttribute('private_ip_list');
  }
  public set privateIpList(value: string[]) {
    this._privateIpList = value;
  }
  public resetPrivateIpList() {
    this._privateIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpListInput() {
    return this._privateIpList;
  }

  // private_ip_list_enabled - computed: false, optional: true, required: false
  private _privateIpListEnabled?: boolean | cdktf.IResolvable; 
  public get privateIpListEnabled() {
    return this.getBooleanAttribute('private_ip_list_enabled');
  }
  public set privateIpListEnabled(value: boolean | cdktf.IResolvable) {
    this._privateIpListEnabled = value;
  }
  public resetPrivateIpListEnabled() {
    this._privateIpListEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpListEnabledInput() {
    return this._privateIpListEnabled;
  }

  // private_ips - computed: true, optional: true, required: false
  private _privateIps?: string[]; 
  public get privateIps() {
    return cdktf.Fn.tolist(this.getListAttribute('private_ips'));
  }
  public set privateIps(value: string[]) {
    this._privateIps = value;
  }
  public resetPrivateIps() {
    this._privateIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpsInput() {
    return this._privateIps;
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
    return this._privateIpsCount;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // source_dest_check - computed: false, optional: true, required: false
  private _sourceDestCheck?: boolean | cdktf.IResolvable; 
  public get sourceDestCheck() {
    return this.getBooleanAttribute('source_dest_check');
  }
  public set sourceDestCheck(value: boolean | cdktf.IResolvable) {
    this._sourceDestCheck = value;
  }
  public resetSourceDestCheck() {
    this._sourceDestCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDestCheckInput() {
    return this._sourceDestCheck;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // attachment - computed: false, optional: true, required: false
  private _attachment = new NetworkInterfaceAttachmentList(this, "attachment", true);
  public get attachment() {
    return this._attachment;
  }
  public putAttachment(value: NetworkInterfaceAttachment[] | cdktf.IResolvable) {
    this._attachment.internalValue = value;
  }
  public resetAttachment() {
    this._attachment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentInput() {
    return this._attachment.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      interface_type: cdktf.stringToTerraform(this._interfaceType),
      ipv4_prefix_count: cdktf.numberToTerraform(this._ipv4PrefixCount),
      ipv4_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4Prefixes),
      ipv6_address_count: cdktf.numberToTerraform(this._ipv6AddressCount),
      ipv6_address_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6AddressList),
      ipv6_address_list_enabled: cdktf.booleanToTerraform(this._ipv6AddressListEnabled),
      ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Addresses),
      ipv6_prefix_count: cdktf.numberToTerraform(this._ipv6PrefixCount),
      ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Prefixes),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      private_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateIpList),
      private_ip_list_enabled: cdktf.booleanToTerraform(this._privateIpListEnabled),
      private_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateIps),
      private_ips_count: cdktf.numberToTerraform(this._privateIpsCount),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      source_dest_check: cdktf.booleanToTerraform(this._sourceDestCheck),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      attachment: cdktf.listMapper(networkInterfaceAttachmentToTerraform, true)(this._attachment.internalValue),
    };
  }
}
