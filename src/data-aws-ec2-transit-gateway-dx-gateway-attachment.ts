// https://www.terraform.io/docs/providers/aws/r/data_aws_ec2_transit_gateway_dx_gateway_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEc2TransitGatewayDxGatewayAttachmentConfig extends cdktf.TerraformMetaArguments {
  readonly dxGatewayId?: string;
  readonly tags?: { [key: string]: string };
  readonly transitGatewayId?: string;
  /** filter block */
  readonly filter?: DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[];
}
export interface DataAwsEc2TransitGatewayDxGatewayAttachmentFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsEc2TransitGatewayDxGatewayAttachmentFilterToTerraform(struct?: DataAwsEc2TransitGatewayDxGatewayAttachmentFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsEc2TransitGatewayDxGatewayAttachment extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayDxGatewayAttachmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_dx_gateway_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dxGatewayId = config.dxGatewayId;
    this._tags = config.tags;
    this._transitGatewayId = config.transitGatewayId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dx_gateway_id - computed: false, optional: true, required: false
  private _dxGatewayId?: string;
  public get dxGatewayId() {
    return this.getStringAttribute('dx_gateway_id');
  }
  public set dxGatewayId(value: string ) {
    this._dxGatewayId = value;
  }
  public resetDxGatewayId() {
    this._dxGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dxGatewayIdInput() {
    return this._dxGatewayId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // transit_gateway_id - computed: false, optional: true, required: false
  private _transitGatewayId?: string;
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string ) {
    this._transitGatewayId = value;
  }
  public resetTransitGatewayId() {
    this._transitGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[] ) {
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
      dx_gateway_id: cdktf.stringToTerraform(this._dxGatewayId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
      filter: cdktf.listMapper(dataAwsEc2TransitGatewayDxGatewayAttachmentFilterToTerraform)(this._filter),
    };
  }
}
