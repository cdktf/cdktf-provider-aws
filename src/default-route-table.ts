// https://www.terraform.io/docs/providers/aws/r/default_route_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultRouteTableConfig extends cdktf.TerraformMetaArguments {
  readonly defaultRouteTableId: string;
  readonly propagatingVgws?: string[];
  readonly route?: DefaultRouteTableRoute[];
  readonly tags?: { [key: string]: string };
}
export interface DefaultRouteTableRoute {
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

function defaultRouteTableRouteToTerraform(struct?: DefaultRouteTableRoute): any {
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

export class DefaultRouteTable extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DefaultRouteTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_default_route_table',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultRouteTableId = config.defaultRouteTableId;
    this._propagatingVgws = config.propagatingVgws;
    this._route = config.route;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_route_table_id - computed: false, optional: false, required: true
  private _defaultRouteTableId: string;
  public get defaultRouteTableId() {
    return this.getStringAttribute('default_route_table_id');
  }
  public set defaultRouteTableId(value: string) {
    this._defaultRouteTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteTableIdInput() {
    return this._defaultRouteTableId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // propagating_vgws - computed: false, optional: true, required: false
  private _propagatingVgws?: string[];
  public get propagatingVgws() {
    return this.getListAttribute('propagating_vgws');
  }
  public set propagatingVgws(value: string[] ) {
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
  private _route?: DefaultRouteTableRoute[]
  public get route(): DefaultRouteTableRoute[] {
    return this.interpolationForAttribute('route') as any; // Getting the computed value is not yet implemented
  }
  public set route(value: DefaultRouteTableRoute[]) {
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

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_route_table_id: cdktf.stringToTerraform(this._defaultRouteTableId),
      propagating_vgws: cdktf.listMapper(cdktf.stringToTerraform)(this._propagatingVgws),
      route: cdktf.listMapper(defaultRouteTableRouteToTerraform)(this._route),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
