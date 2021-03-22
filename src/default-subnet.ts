// https://www.terraform.io/docs/providers/aws/r/default_subnet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultSubnetConfig extends cdktf.TerraformMetaArguments {
  readonly availabilityZone: string;
  readonly customerOwnedIpv4Pool?: string;
  readonly mapCustomerOwnedIpOnLaunch?: boolean;
  readonly mapPublicIpOnLaunch?: boolean;
  readonly outpostArn?: string;
  readonly tags?: { [key: string]: string };
  readonly tagsAll?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: DefaultSubnetTimeouts;
}
export interface DefaultSubnetTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function defaultSubnetTimeoutsToTerraform(struct?: DefaultSubnetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class DefaultSubnet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DefaultSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_default_subnet',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZone = config.availabilityZone;
    this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
    this._mapCustomerOwnedIpOnLaunch = config.mapCustomerOwnedIpOnLaunch;
    this._mapPublicIpOnLaunch = config.mapPublicIpOnLaunch;
    this._outpostArn = config.outpostArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeouts = config.timeouts;
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

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone: string;
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone
  }

  // availability_zone_id - computed: true, optional: false, required: false
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
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

  // ipv6_cidr_block - computed: true, optional: false, required: false
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }

  // ipv6_cidr_block_association_id - computed: true, optional: false, required: false
  public get ipv6CidrBlockAssociationId() {
    return this.getStringAttribute('ipv6_cidr_block_association_id');
  }

  // map_customer_owned_ip_on_launch - computed: false, optional: true, required: false
  private _mapCustomerOwnedIpOnLaunch?: boolean;
  public get mapCustomerOwnedIpOnLaunch() {
    return this.getBooleanAttribute('map_customer_owned_ip_on_launch');
  }
  public set mapCustomerOwnedIpOnLaunch(value: boolean ) {
    this._mapCustomerOwnedIpOnLaunch = value;
  }
  public resetMapCustomerOwnedIpOnLaunch() {
    this._mapCustomerOwnedIpOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapCustomerOwnedIpOnLaunchInput() {
    return this._mapCustomerOwnedIpOnLaunch
  }

  // map_public_ip_on_launch - computed: true, optional: true, required: false
  private _mapPublicIpOnLaunch?: boolean;
  public get mapPublicIpOnLaunch() {
    return this.getBooleanAttribute('map_public_ip_on_launch');
  }
  public set mapPublicIpOnLaunch(value: boolean) {
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }
  public get tagsAll(): { [key: string]: string } {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DefaultSubnetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DefaultSubnetTimeouts ) {
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
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      customer_owned_ipv4_pool: cdktf.stringToTerraform(this._customerOwnedIpv4Pool),
      map_customer_owned_ip_on_launch: cdktf.booleanToTerraform(this._mapCustomerOwnedIpOnLaunch),
      map_public_ip_on_launch: cdktf.booleanToTerraform(this._mapPublicIpOnLaunch),
      outpost_arn: cdktf.stringToTerraform(this._outpostArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      timeouts: defaultSubnetTimeoutsToTerraform(this._timeouts),
    };
  }
}
