// https://www.terraform.io/docs/providers/aws/r/subnet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#assign_ipv6_address_on_creation Subnet#assign_ipv6_address_on_creation}
  */
  readonly assignIpv6AddressOnCreation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#availability_zone Subnet#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#availability_zone_id Subnet#availability_zone_id}
  */
  readonly availabilityZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#cidr_block Subnet#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#customer_owned_ipv4_pool Subnet#customer_owned_ipv4_pool}
  */
  readonly customerOwnedIpv4Pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#ipv6_cidr_block Subnet#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#map_customer_owned_ip_on_launch Subnet#map_customer_owned_ip_on_launch}
  */
  readonly mapCustomerOwnedIpOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#map_public_ip_on_launch Subnet#map_public_ip_on_launch}
  */
  readonly mapPublicIpOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#outpost_arn Subnet#outpost_arn}
  */
  readonly outpostArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#tags Subnet#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#tags_all Subnet#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#vpc_id Subnet#vpc_id}
  */
  readonly vpcId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#timeouts Subnet#timeouts}
  */
  readonly timeouts?: SubnetTimeouts;
}
export interface SubnetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#create Subnet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#delete Subnet#delete}
  */
  readonly delete?: string;
}

function subnetTimeoutsToTerraform(struct?: SubnetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/subnet.html aws_subnet}
*/
export class Subnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_subnet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/subnet.html aws_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubnetConfig
  */
  public constructor(scope: Construct, id: string, config: SubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_subnet',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._assignIpv6AddressOnCreation = config.assignIpv6AddressOnCreation;
    this._availabilityZone = config.availabilityZone;
    this._availabilityZoneId = config.availabilityZoneId;
    this._cidrBlock = config.cidrBlock;
    this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
    this._ipv6CidrBlock = config.ipv6CidrBlock;
    this._mapCustomerOwnedIpOnLaunch = config.mapCustomerOwnedIpOnLaunch;
    this._mapPublicIpOnLaunch = config.mapPublicIpOnLaunch;
    this._outpostArn = config.outpostArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vpcId = config.vpcId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // assign_ipv6_address_on_creation - computed: false, optional: true, required: false
  private _assignIpv6AddressOnCreation?: boolean | cdktf.IResolvable;
  public get assignIpv6AddressOnCreation() {
    return this.getBooleanAttribute('assign_ipv6_address_on_creation');
  }
  public set assignIpv6AddressOnCreation(value: boolean | cdktf.IResolvable ) {
    this._assignIpv6AddressOnCreation = value;
  }
  public resetAssignIpv6AddressOnCreation() {
    this._assignIpv6AddressOnCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpv6AddressOnCreationInput() {
    return this._assignIpv6AddressOnCreation
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
    return this._availabilityZone
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
    return this._availabilityZoneId
  }

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock: string;
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock
  }

  // customer_owned_ipv4_pool - computed: false, optional: true, required: false
  private _customerOwnedIpv4Pool?: string;
  public get customerOwnedIpv4Pool() {
    return this.getStringAttribute('customer_owned_ipv4_pool');
  }
  public set customerOwnedIpv4Pool(value: string ) {
    this._customerOwnedIpv4Pool = value;
  }
  public resetCustomerOwnedIpv4Pool() {
    this._customerOwnedIpv4Pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerOwnedIpv4PoolInput() {
    return this._customerOwnedIpv4Pool
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv6_cidr_block - computed: false, optional: true, required: false
  private _ipv6CidrBlock?: string;
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }
  public set ipv6CidrBlock(value: string ) {
    this._ipv6CidrBlock = value;
  }
  public resetIpv6CidrBlock() {
    this._ipv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockInput() {
    return this._ipv6CidrBlock
  }

  // ipv6_cidr_block_association_id - computed: true, optional: false, required: false
  public get ipv6CidrBlockAssociationId() {
    return this.getStringAttribute('ipv6_cidr_block_association_id');
  }

  // map_customer_owned_ip_on_launch - computed: false, optional: true, required: false
  private _mapCustomerOwnedIpOnLaunch?: boolean | cdktf.IResolvable;
  public get mapCustomerOwnedIpOnLaunch() {
    return this.getBooleanAttribute('map_customer_owned_ip_on_launch');
  }
  public set mapCustomerOwnedIpOnLaunch(value: boolean | cdktf.IResolvable ) {
    this._mapCustomerOwnedIpOnLaunch = value;
  }
  public resetMapCustomerOwnedIpOnLaunch() {
    this._mapCustomerOwnedIpOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapCustomerOwnedIpOnLaunchInput() {
    return this._mapCustomerOwnedIpOnLaunch
  }

  // map_public_ip_on_launch - computed: false, optional: true, required: false
  private _mapPublicIpOnLaunch?: boolean | cdktf.IResolvable;
  public get mapPublicIpOnLaunch() {
    return this.getBooleanAttribute('map_public_ip_on_launch');
  }
  public set mapPublicIpOnLaunch(value: boolean | cdktf.IResolvable ) {
    this._mapPublicIpOnLaunch = value;
  }
  public resetMapPublicIpOnLaunch() {
    this._mapPublicIpOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapPublicIpOnLaunchInput() {
    return this._mapPublicIpOnLaunch
  }

  // outpost_arn - computed: false, optional: true, required: false
  private _outpostArn?: string;
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }
  public set outpostArn(value: string ) {
    this._outpostArn = value;
  }
  public resetOutpostArn() {
    this._outpostArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostArnInput() {
    return this._outpostArn
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SubnetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SubnetTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assign_ipv6_address_on_creation: cdktf.booleanToTerraform(this._assignIpv6AddressOnCreation),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      availability_zone_id: cdktf.stringToTerraform(this._availabilityZoneId),
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      customer_owned_ipv4_pool: cdktf.stringToTerraform(this._customerOwnedIpv4Pool),
      ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
      map_customer_owned_ip_on_launch: cdktf.booleanToTerraform(this._mapCustomerOwnedIpOnLaunch),
      map_public_ip_on_launch: cdktf.booleanToTerraform(this._mapPublicIpOnLaunch),
      outpost_arn: cdktf.stringToTerraform(this._outpostArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: subnetTimeoutsToTerraform(this._timeouts),
    };
  }
}
