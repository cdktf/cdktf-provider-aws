// https://www.terraform.io/docs/providers/aws/r/data_aws_route_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRouteTableConfig extends cdktf.TerraformMetaArguments {
  readonly gatewayId?: string;
  readonly routeTableId?: string;
  readonly subnetId?: string;
  readonly tags?: { [key: string]: string };
  readonly vpcId?: string;
  /** filter block */
  readonly filter?: DataAwsRouteTableFilter[];
}
export class DataAwsRouteTableAssociations extends cdktf.ComplexComputedList {

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // main - computed: true, optional: false, required: false
  public get main() {
    return this.getBooleanAttribute('main');
  }

  // route_table_association_id - computed: true, optional: false, required: false
  public get routeTableAssociationId() {
    return this.getStringAttribute('route_table_association_id');
  }

  // route_table_id - computed: true, optional: false, required: false
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataAwsRouteTableRoutes extends cdktf.ComplexComputedList {

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // egress_only_gateway_id - computed: true, optional: false, required: false
  public get egressOnlyGatewayId() {
    return this.getStringAttribute('egress_only_gateway_id');
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // ipv6_cidr_block - computed: true, optional: false, required: false
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }

  // nat_gateway_id - computed: true, optional: false, required: false
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // vpc_peering_connection_id - computed: true, optional: false, required: false
  public get vpcPeeringConnectionId() {
    return this.getStringAttribute('vpc_peering_connection_id');
  }
}
export interface DataAwsRouteTableFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsRouteTableFilterToTerraform(struct?: DataAwsRouteTableFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsRouteTable extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsRouteTableConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_route_table',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._gatewayId = config.gatewayId;
    this._routeTableId = config.routeTableId;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associations - computed: true, optional: false, required: false
  public associations(index: string) {
    return new DataAwsRouteTableAssociations(this, 'associations', index);
  }

  // gateway_id - computed: true, optional: true, required: false
  private _gatewayId?: string;
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  public resetGatewayId() {
    this._gatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // route_table_id - computed: true, optional: true, required: false
  private _routeTableId?: string;
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  public resetRouteTableId() {
    this._routeTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId
  }

  // routes - computed: true, optional: false, required: false
  public routes(index: string) {
    return new DataAwsRouteTableRoutes(this, 'routes', index);
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
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
    return this._vpcId
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsRouteTableFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsRouteTableFilter[] ) {
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
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      route_table_id: cdktf.stringToTerraform(this._routeTableId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      filter: cdktf.listMapper(dataAwsRouteTableFilterToTerraform)(this._filter),
    };
  }
}
