// https://www.terraform.io/docs/providers/aws/r/default_route_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultRouteTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#default_route_table_id DefaultRouteTable#default_route_table_id}
  */
  readonly defaultRouteTableId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#propagating_vgws DefaultRouteTable#propagating_vgws}
  */
  readonly propagatingVgws?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#route DefaultRouteTable#route}
  */
  readonly route?: DefaultRouteTableRoute[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#tags DefaultRouteTable#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#tags_all DefaultRouteTable#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#timeouts DefaultRouteTable#timeouts}
  */
  readonly timeouts?: DefaultRouteTableTimeouts;
}
export interface DefaultRouteTableRoute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#cidr_block DefaultRouteTable#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#destination_prefix_list_id DefaultRouteTable#destination_prefix_list_id}
  */
  readonly destinationPrefixListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#egress_only_gateway_id DefaultRouteTable#egress_only_gateway_id}
  */
  readonly egressOnlyGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#gateway_id DefaultRouteTable#gateway_id}
  */
  readonly gatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#instance_id DefaultRouteTable#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#ipv6_cidr_block DefaultRouteTable#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#nat_gateway_id DefaultRouteTable#nat_gateway_id}
  */
  readonly natGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#network_interface_id DefaultRouteTable#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#transit_gateway_id DefaultRouteTable#transit_gateway_id}
  */
  readonly transitGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#vpc_endpoint_id DefaultRouteTable#vpc_endpoint_id}
  */
  readonly vpcEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#vpc_peering_connection_id DefaultRouteTable#vpc_peering_connection_id}
  */
  readonly vpcPeeringConnectionId?: string;
}

function defaultRouteTableRouteToTerraform(struct?: DefaultRouteTableRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr_block: struct!.cidrBlock === undefined ? null : cdktf.stringToTerraform(struct!.cidrBlock),
    destination_prefix_list_id: struct!.destinationPrefixListId === undefined ? null : cdktf.stringToTerraform(struct!.destinationPrefixListId),
    egress_only_gateway_id: struct!.egressOnlyGatewayId === undefined ? null : cdktf.stringToTerraform(struct!.egressOnlyGatewayId),
    gateway_id: struct!.gatewayId === undefined ? null : cdktf.stringToTerraform(struct!.gatewayId),
    instance_id: struct!.instanceId === undefined ? null : cdktf.stringToTerraform(struct!.instanceId),
    ipv6_cidr_block: struct!.ipv6CidrBlock === undefined ? null : cdktf.stringToTerraform(struct!.ipv6CidrBlock),
    nat_gateway_id: struct!.natGatewayId === undefined ? null : cdktf.stringToTerraform(struct!.natGatewayId),
    network_interface_id: struct!.networkInterfaceId === undefined ? null : cdktf.stringToTerraform(struct!.networkInterfaceId),
    transit_gateway_id: struct!.transitGatewayId === undefined ? null : cdktf.stringToTerraform(struct!.transitGatewayId),
    vpc_endpoint_id: struct!.vpcEndpointId === undefined ? null : cdktf.stringToTerraform(struct!.vpcEndpointId),
    vpc_peering_connection_id: struct!.vpcPeeringConnectionId === undefined ? null : cdktf.stringToTerraform(struct!.vpcPeeringConnectionId),
  }
}

export interface DefaultRouteTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#create DefaultRouteTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#update DefaultRouteTable#update}
  */
  readonly update?: string;
}

function defaultRouteTableTimeoutsToTerraform(struct?: DefaultRouteTableTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html aws_default_route_table}
*/
export class DefaultRouteTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_default_route_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html aws_default_route_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultRouteTableConfig
  */
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

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DefaultRouteTableTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DefaultRouteTableTimeouts ) {
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
      default_route_table_id: cdktf.stringToTerraform(this._defaultRouteTableId),
      propagating_vgws: cdktf.listMapper(cdktf.stringToTerraform)(this._propagatingVgws),
      route: cdktf.listMapper(defaultRouteTableRouteToTerraform)(this._route),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      timeouts: defaultRouteTableTimeoutsToTerraform(this._timeouts),
    };
  }
}
