// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface DataAwsEc2TransitGatewayPeeringAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html#tags DataAwsEc2TransitGatewayPeeringAttachment#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html#filter DataAwsEc2TransitGatewayPeeringAttachment#filter}
  */
  readonly filter?: DataAwsEc2TransitGatewayPeeringAttachmentFilter[];
}
export interface DataAwsEc2TransitGatewayPeeringAttachmentFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html#name DataAwsEc2TransitGatewayPeeringAttachment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html#values DataAwsEc2TransitGatewayPeeringAttachment#values}
  */
  readonly values: string[];
}

export function dataAwsEc2TransitGatewayPeeringAttachmentFilterToTerraform(struct?: DataAwsEc2TransitGatewayPeeringAttachmentFilter): any {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html aws_ec2_transit_gateway_peering_attachment}
*/
export class DataAwsEc2TransitGatewayPeeringAttachment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ec2_transit_gateway_peering_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html aws_ec2_transit_gateway_peering_attachment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEc2TransitGatewayPeeringAttachmentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayPeeringAttachmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_peering_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // peer_account_id - computed: true, optional: false, required: false
  public get peerAccountId() {
    return this.getStringAttribute('peer_account_id');
  }

  // peer_region - computed: true, optional: false, required: false
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }

  // peer_transit_gateway_id - computed: true, optional: false, required: false
  public get peerTransitGatewayId() {
    return this.getStringAttribute('peer_transit_gateway_id');
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

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2TransitGatewayPeeringAttachmentFilter[]; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsEc2TransitGatewayPeeringAttachmentFilter[]) {
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
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsEc2TransitGatewayPeeringAttachmentFilterToTerraform)(this._filter),
    };
  }
}
