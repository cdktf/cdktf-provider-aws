// https://www.terraform.io/docs/providers/aws/d/subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet#availability_zone DataAwsSubnet#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet#availability_zone_id DataAwsSubnet#availability_zone_id}
  */
  readonly availabilityZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet#cidr_block DataAwsSubnet#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet#default_for_az DataAwsSubnet#default_for_az}
  */
  readonly defaultForAz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet#id DataAwsSubnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet#ipv6_cidr_block DataAwsSubnet#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet#state DataAwsSubnet#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet#tags DataAwsSubnet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet#vpc_id DataAwsSubnet#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet#filter DataAwsSubnet#filter}
  */
  readonly filter?: DataAwsSubnetFilter[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet#timeouts DataAwsSubnet#timeouts}
  */
  readonly timeouts?: DataAwsSubnetTimeouts;
}
export interface DataAwsSubnetFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet#name DataAwsSubnet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet#values DataAwsSubnet#values}
  */
  readonly values: string[];
}

export function dataAwsSubnetFilterToTerraform(struct?: DataAwsSubnetFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class DataAwsSubnetFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsSubnetFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSubnetFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataAwsSubnetFilterList extends cdktf.ComplexList {
  public internalValue? : DataAwsSubnetFilter[] | cdktf.IResolvable

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
  public get(index: number): DataAwsSubnetFilterOutputReference {
    return new DataAwsSubnetFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSubnetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet#read DataAwsSubnet#read}
  */
  readonly read?: string;
}

export function dataAwsSubnetTimeoutsToTerraform(struct?: DataAwsSubnetTimeoutsOutputReference | DataAwsSubnetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAwsSubnetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsSubnetTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSubnetTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/subnet aws_subnet}
*/
export class DataAwsSubnet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_subnet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/subnet aws_subnet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSubnetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsSubnetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_subnet',
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
    this._availabilityZone = config.availabilityZone;
    this._availabilityZoneId = config.availabilityZoneId;
    this._cidrBlock = config.cidrBlock;
    this._defaultForAz = config.defaultForAz;
    this._id = config.id;
    this._ipv6CidrBlock = config.ipv6CidrBlock;
    this._state = config.state;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._filter.internalValue = config.filter;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // assign_ipv6_address_on_creation - computed: true, optional: false, required: false
  public get assignIpv6AddressOnCreation() {
    return this.getBooleanAttribute('assign_ipv6_address_on_creation');
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // availability_zone_id - computed: true, optional: true, required: false
  private _availabilityZoneId?: string; 
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }
  public set availabilityZoneId(value: string) {
    this._availabilityZoneId = value;
  }
  public resetAvailabilityZoneId() {
    this._availabilityZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneIdInput() {
    return this._availabilityZoneId;
  }

  // available_ip_address_count - computed: true, optional: false, required: false
  public get availableIpAddressCount() {
    return this.getNumberAttribute('available_ip_address_count');
  }

  // cidr_block - computed: true, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // customer_owned_ipv4_pool - computed: true, optional: false, required: false
  public get customerOwnedIpv4Pool() {
    return this.getStringAttribute('customer_owned_ipv4_pool');
  }

  // default_for_az - computed: true, optional: true, required: false
  private _defaultForAz?: boolean | cdktf.IResolvable; 
  public get defaultForAz() {
    return this.getBooleanAttribute('default_for_az');
  }
  public set defaultForAz(value: boolean | cdktf.IResolvable) {
    this._defaultForAz = value;
  }
  public resetDefaultForAz() {
    this._defaultForAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultForAzInput() {
    return this._defaultForAz;
  }

  // enable_dns64 - computed: true, optional: false, required: false
  public get enableDns64() {
    return this.getBooleanAttribute('enable_dns64');
  }

  // enable_resource_name_dns_a_record_on_launch - computed: true, optional: false, required: false
  public get enableResourceNameDnsARecordOnLaunch() {
    return this.getBooleanAttribute('enable_resource_name_dns_a_record_on_launch');
  }

  // enable_resource_name_dns_aaaa_record_on_launch - computed: true, optional: false, required: false
  public get enableResourceNameDnsAaaaRecordOnLaunch() {
    return this.getBooleanAttribute('enable_resource_name_dns_aaaa_record_on_launch');
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

  // ipv6_cidr_block - computed: true, optional: true, required: false
  private _ipv6CidrBlock?: string; 
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }
  public set ipv6CidrBlock(value: string) {
    this._ipv6CidrBlock = value;
  }
  public resetIpv6CidrBlock() {
    this._ipv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockInput() {
    return this._ipv6CidrBlock;
  }

  // ipv6_cidr_block_association_id - computed: true, optional: false, required: false
  public get ipv6CidrBlockAssociationId() {
    return this.getStringAttribute('ipv6_cidr_block_association_id');
  }

  // ipv6_native - computed: true, optional: false, required: false
  public get ipv6Native() {
    return this.getBooleanAttribute('ipv6_native');
  }

  // map_customer_owned_ip_on_launch - computed: true, optional: false, required: false
  public get mapCustomerOwnedIpOnLaunch() {
    return this.getBooleanAttribute('map_customer_owned_ip_on_launch');
  }

  // map_public_ip_on_launch - computed: true, optional: false, required: false
  public get mapPublicIpOnLaunch() {
    return this.getBooleanAttribute('map_public_ip_on_launch');
  }

  // outpost_arn - computed: true, optional: false, required: false
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // private_dns_hostname_type_on_launch - computed: true, optional: false, required: false
  public get privateDnsHostnameTypeOnLaunch() {
    return this.getStringAttribute('private_dns_hostname_type_on_launch');
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tags - computed: true, optional: true, required: false
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

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataAwsSubnetFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataAwsSubnetFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAwsSubnetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAwsSubnetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      availability_zone_id: cdktf.stringToTerraform(this._availabilityZoneId),
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      default_for_az: cdktf.booleanToTerraform(this._defaultForAz),
      id: cdktf.stringToTerraform(this._id),
      ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
      state: cdktf.stringToTerraform(this._state),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      filter: cdktf.listMapper(dataAwsSubnetFilterToTerraform, true)(this._filter.internalValue),
      timeouts: dataAwsSubnetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
