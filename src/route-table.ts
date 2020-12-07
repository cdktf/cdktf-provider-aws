// https://www.terraform.io/docs/providers/aws/r/route_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouteTableConfig extends cdktf.TerraformMetaArguments {
  readonly propagatingVgws?: string[];
  readonly route?: RouteTableRoute[];
  readonly tags?: { [key: string]: string };
  readonly vpcId: string;
}
export interface RouteTableRoute {
  readonly cidrBlock?: string;
  readonly egressOnlyGatewayId?: string;
  readonly gatewayId?: string;
  readonly instanceId?: string;
  readonly ipv6CidrBlock?: string;
  readonly natGatewayId?: string;
  readonly networkInterfaceId?: string;
  readonly transitGatewayId?: string;
  readonly vpcPeeringConnectionId?: string;
}

function routeTableRouteToTerraform(struct?: RouteTableRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    egress_only_gateway_id: cdktf.stringToTerraform(struct!.egressOnlyGatewayId),
    gateway_id: cdktf.stringToTerraform(struct!.gatewayId),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    ipv6_cidr_block: cdktf.stringToTerraform(struct!.ipv6CidrBlock),
    nat_gateway_id: cdktf.stringToTerraform(struct!.natGatewayId),
    network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
    transit_gateway_id: cdktf.stringToTerraform(struct!.transitGatewayId),
    vpc_peering_connection_id: cdktf.stringToTerraform(struct!.vpcPeeringConnectionId),
  }
}


// Resource

export class RouteTable extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RouteTableConfig) {
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
    this._propagatingVgws = config.propagatingVgws;
    this._route = config.route;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // propagating_vgws - computed: true, optional: true, required: false
  private _propagatingVgws?: string[];
  public get propagatingVgws() {
    return this.getListAttribute('propagating_vgws');
  }
  public set propagatingVgws(value: string[]) {
    this._propagatingVgws = value;
  }
  public resetPropagatingVgws() {
    this._propagatingVgws = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatingVgwsInput() {
    return this._propagatingVgws
  }

  // route - computed: true, optional: true, required: false
  private _route?: RouteTableRoute[]
  public get route(): RouteTableRoute[] {
    return this.interpolationForAttribute('route') as any; // Getting the computed value is not yet implemented
  }
  public set route(value: RouteTableRoute[]) {
    this._route = value;
  }
  public resetRoute() {
    this._route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      propagating_vgws: cdktf.listMapper(cdktf.stringToTerraform)(this._propagatingVgws),
      route: cdktf.listMapper(routeTableRouteToTerraform)(this._route),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
