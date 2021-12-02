// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface DataAwsVpnGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html#amazon_side_asn DataAwsVpnGateway#amazon_side_asn}
  */
  readonly amazonSideAsn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html#attached_vpc_id DataAwsVpnGateway#attached_vpc_id}
  */
  readonly attachedVpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html#availability_zone DataAwsVpnGateway#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html#state DataAwsVpnGateway#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html#tags DataAwsVpnGateway#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html#filter DataAwsVpnGateway#filter}
  */
  readonly filter?: DataAwsVpnGatewayFilter[];
}
export interface DataAwsVpnGatewayFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html#name DataAwsVpnGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html#values DataAwsVpnGateway#values}
  */
  readonly values: string[];
}

export function dataAwsVpnGatewayFilterToTerraform(struct?: DataAwsVpnGatewayFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html aws_vpn_gateway}
*/
export class DataAwsVpnGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_vpn_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html aws_vpn_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsVpnGatewayConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsVpnGatewayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_vpn_gateway',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._amazonSideAsn = config.amazonSideAsn;
    this._attachedVpcId = config.attachedVpcId;
    this._availabilityZone = config.availabilityZone;
    this._state = config.state;
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amazon_side_asn - computed: true, optional: true, required: false
  private _amazonSideAsn?: string; 
  public get amazonSideAsn() {
    return this.getStringAttribute('amazon_side_asn');
  }
  public set amazonSideAsn(value: string) {
    this._amazonSideAsn = value;
  }
  public resetAmazonSideAsn() {
    this._amazonSideAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonSideAsnInput() {
    return this._amazonSideAsn;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attached_vpc_id - computed: true, optional: true, required: false
  private _attachedVpcId?: string; 
  public get attachedVpcId() {
    return this.getStringAttribute('attached_vpc_id');
  }
  public set attachedVpcId(value: string) {
    this._attachedVpcId = value;
  }
  public resetAttachedVpcId() {
    this._attachedVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedVpcIdInput() {
    return this._attachedVpcId;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsVpnGatewayFilter[]; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsVpnGatewayFilter[]) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      amazon_side_asn: cdktf.stringToTerraform(this._amazonSideAsn),
      attached_vpc_id: cdktf.stringToTerraform(this._attachedVpcId),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      state: cdktf.stringToTerraform(this._state),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsVpnGatewayFilterToTerraform)(this._filter),
    };
  }
}
