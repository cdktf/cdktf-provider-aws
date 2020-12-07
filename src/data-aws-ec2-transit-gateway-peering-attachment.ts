// https://www.terraform.io/docs/providers/aws/r/data_aws_ec2_transit_gateway_peering_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEc2TransitGatewayPeeringAttachmentConfig extends cdktf.TerraformMetaArguments {
  readonly id?: string;
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsEc2TransitGatewayPeeringAttachmentFilter[];
}
export interface DataAwsEc2TransitGatewayPeeringAttachmentFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsEc2TransitGatewayPeeringAttachmentFilterToTerraform(struct?: DataAwsEc2TransitGatewayPeeringAttachmentFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsEc2TransitGatewayPeeringAttachment extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._id = config.id;
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: true, required: false
  private _id?: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string ) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
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
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2TransitGatewayPeeringAttachmentFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsEc2TransitGatewayPeeringAttachmentFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsEc2TransitGatewayPeeringAttachmentFilterToTerraform)(this._filter),
    };
  }
}
