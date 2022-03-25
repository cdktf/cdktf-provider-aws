// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface DataAwsEc2TransitGatewayMulticastDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#tags DataAwsEc2TransitGatewayMulticastDomain#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#transit_gateway_multicast_domain_id DataAwsEc2TransitGatewayMulticastDomain#transit_gateway_multicast_domain_id}
  */
  readonly transitGatewayMulticastDomainId?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#filter DataAwsEc2TransitGatewayMulticastDomain#filter}
  */
  readonly filter?: DataAwsEc2TransitGatewayMulticastDomainFilter[] | cdktf.IResolvable;
}
export class DataAwsEc2TransitGatewayMulticastDomainAssociations extends cdktf.ComplexComputedList {

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // transit_gateway_attachment_id - computed: true, optional: false, required: false
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }
}
export class DataAwsEc2TransitGatewayMulticastDomainMembers extends cdktf.ComplexComputedList {

  // group_ip_address - computed: true, optional: false, required: false
  public get groupIpAddress() {
    return this.getStringAttribute('group_ip_address');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
}
export class DataAwsEc2TransitGatewayMulticastDomainSources extends cdktf.ComplexComputedList {

  // group_ip_address - computed: true, optional: false, required: false
  public get groupIpAddress() {
    return this.getStringAttribute('group_ip_address');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
}
export interface DataAwsEc2TransitGatewayMulticastDomainFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#name DataAwsEc2TransitGatewayMulticastDomain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#values DataAwsEc2TransitGatewayMulticastDomain#values}
  */
  readonly values: string[];
}

export function dataAwsEc2TransitGatewayMulticastDomainFilterToTerraform(struct?: DataAwsEc2TransitGatewayMulticastDomainFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain aws_ec2_transit_gateway_multicast_domain}
*/
export class DataAwsEc2TransitGatewayMulticastDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ec2_transit_gateway_multicast_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain aws_ec2_transit_gateway_multicast_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEc2TransitGatewayMulticastDomainConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayMulticastDomainConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_multicast_domain',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tags = config.tags;
    this._transitGatewayMulticastDomainId = config.transitGatewayMulticastDomainId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // associations - computed: true, optional: false, required: false
  public associations(index: string) {
    return new DataAwsEc2TransitGatewayMulticastDomainAssociations(this, 'associations', index, false);
  }

  // auto_accept_shared_associations - computed: true, optional: false, required: false
  public get autoAcceptSharedAssociations() {
    return this.getStringAttribute('auto_accept_shared_associations');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // igmpv2_support - computed: true, optional: false, required: false
  public get igmpv2Support() {
    return this.getStringAttribute('igmpv2_support');
  }

  // members - computed: true, optional: false, required: false
  public members(index: string) {
    return new DataAwsEc2TransitGatewayMulticastDomainMembers(this, 'members', index, false);
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // sources - computed: true, optional: false, required: false
  public sources(index: string) {
    return new DataAwsEc2TransitGatewayMulticastDomainSources(this, 'sources', index, false);
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // static_sources_support - computed: true, optional: false, required: false
  public get staticSourcesSupport() {
    return this.getStringAttribute('static_sources_support');
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

  // transit_gateway_attachment_id - computed: true, optional: false, required: false
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // transit_gateway_multicast_domain_id - computed: true, optional: true, required: false
  private _transitGatewayMulticastDomainId?: string; 
  public get transitGatewayMulticastDomainId() {
    return this.getStringAttribute('transit_gateway_multicast_domain_id');
  }
  public set transitGatewayMulticastDomainId(value: string) {
    this._transitGatewayMulticastDomainId = value;
  }
  public resetTransitGatewayMulticastDomainId() {
    this._transitGatewayMulticastDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayMulticastDomainIdInput() {
    return this._transitGatewayMulticastDomainId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2TransitGatewayMulticastDomainFilter[] | cdktf.IResolvable; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('filter')));
  }
  public set filter(value: DataAwsEc2TransitGatewayMulticastDomainFilter[] | cdktf.IResolvable) {
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
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      transit_gateway_multicast_domain_id: cdktf.stringToTerraform(this._transitGatewayMulticastDomainId),
      filter: cdktf.listMapper(dataAwsEc2TransitGatewayMulticastDomainFilterToTerraform)(this._filter),
    };
  }
}
