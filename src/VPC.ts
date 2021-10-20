// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export namespace VPC {
  export interface CustomerGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/customer_gateway.html#bgp_asn CustomerGateway#bgp_asn}
    */
    readonly bgpAsn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/customer_gateway.html#device_name CustomerGateway#device_name}
    */
    readonly deviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/customer_gateway.html#ip_address CustomerGateway#ip_address}
    */
    readonly ipAddress: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/customer_gateway.html#tags CustomerGateway#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/customer_gateway.html#tags_all CustomerGateway#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/customer_gateway.html#type CustomerGateway#type}
    */
    readonly type: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/customer_gateway.html aws_customer_gateway}
  */
  export class CustomerGateway extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_customer_gateway";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/customer_gateway.html aws_customer_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CustomerGatewayConfig
    */
    public constructor(scope: Construct, id: string, config: CustomerGatewayConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_customer_gateway',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bgpAsn = config.bgpAsn;
      this._deviceName = config.deviceName;
      this._ipAddress = config.ipAddress;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // bgp_asn - computed: false, optional: false, required: true
    private _bgpAsn?: string; 
    public get bgpAsn() {
      return this.getStringAttribute('bgp_asn');
    }
    public set bgpAsn(value: string) {
      this._bgpAsn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpAsnInput() {
      return this._bgpAsn
    }

    // device_name - computed: false, optional: true, required: false
    private _deviceName?: string | undefined; 
    public get deviceName() {
      return this.getStringAttribute('device_name');
    }
    public set deviceName(value: string | undefined) {
      this._deviceName = value;
    }
    public resetDeviceName() {
      this._deviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceNameInput() {
      return this._deviceName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ip_address - computed: false, optional: false, required: true
    private _ipAddress?: string; 
    public get ipAddress() {
      return this.getStringAttribute('ip_address');
    }
    public set ipAddress(value: string) {
      this._ipAddress = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressInput() {
      return this._ipAddress
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bgp_asn: cdktf.stringToTerraform(this._bgpAsn),
        device_name: cdktf.stringToTerraform(this._deviceName),
        ip_address: cdktf.stringToTerraform(this._ipAddress),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        type: cdktf.stringToTerraform(this._type),
      };
    }
  }
  export interface DefaultNetworkAclConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#default_network_acl_id DefaultNetworkAcl#default_network_acl_id}
    */
    readonly defaultNetworkAclId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#subnet_ids DefaultNetworkAcl#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#tags DefaultNetworkAcl#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#tags_all DefaultNetworkAcl#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * egress block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#egress DefaultNetworkAcl#egress}
    */
    readonly egress?: DefaultNetworkAclEgress[];
    /**
    * ingress block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#ingress DefaultNetworkAcl#ingress}
    */
    readonly ingress?: DefaultNetworkAclIngress[];
  }
  export interface DefaultNetworkAclEgress {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#action DefaultNetworkAcl#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#cidr_block DefaultNetworkAcl#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#from_port DefaultNetworkAcl#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#icmp_code DefaultNetworkAcl#icmp_code}
    */
    readonly icmpCode?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#icmp_type DefaultNetworkAcl#icmp_type}
    */
    readonly icmpType?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#protocol DefaultNetworkAcl#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#rule_no DefaultNetworkAcl#rule_no}
    */
    readonly ruleNo: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#to_port DefaultNetworkAcl#to_port}
    */
    readonly toPort: number;
  }

  function defaultNetworkAclEgressToTerraform(struct?: DefaultNetworkAclEgress): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      action: cdktf.stringToTerraform(struct!.action),
      cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
      from_port: cdktf.numberToTerraform(struct!.fromPort),
      icmp_code: cdktf.numberToTerraform(struct!.icmpCode),
      icmp_type: cdktf.numberToTerraform(struct!.icmpType),
      ipv6_cidr_block: cdktf.stringToTerraform(struct!.ipv6CidrBlock),
      protocol: cdktf.stringToTerraform(struct!.protocol),
      rule_no: cdktf.numberToTerraform(struct!.ruleNo),
      to_port: cdktf.numberToTerraform(struct!.toPort),
    }
  }

  export interface DefaultNetworkAclIngress {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#action DefaultNetworkAcl#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#cidr_block DefaultNetworkAcl#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#from_port DefaultNetworkAcl#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#icmp_code DefaultNetworkAcl#icmp_code}
    */
    readonly icmpCode?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#icmp_type DefaultNetworkAcl#icmp_type}
    */
    readonly icmpType?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#protocol DefaultNetworkAcl#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#rule_no DefaultNetworkAcl#rule_no}
    */
    readonly ruleNo: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#to_port DefaultNetworkAcl#to_port}
    */
    readonly toPort: number;
  }

  function defaultNetworkAclIngressToTerraform(struct?: DefaultNetworkAclIngress): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      action: cdktf.stringToTerraform(struct!.action),
      cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
      from_port: cdktf.numberToTerraform(struct!.fromPort),
      icmp_code: cdktf.numberToTerraform(struct!.icmpCode),
      icmp_type: cdktf.numberToTerraform(struct!.icmpType),
      ipv6_cidr_block: cdktf.stringToTerraform(struct!.ipv6CidrBlock),
      protocol: cdktf.stringToTerraform(struct!.protocol),
      rule_no: cdktf.numberToTerraform(struct!.ruleNo),
      to_port: cdktf.numberToTerraform(struct!.toPort),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html aws_default_network_acl}
  */
  export class DefaultNetworkAcl extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_default_network_acl";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html aws_default_network_acl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultNetworkAclConfig
    */
    public constructor(scope: Construct, id: string, config: DefaultNetworkAclConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_default_network_acl',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._defaultNetworkAclId = config.defaultNetworkAclId;
      this._subnetIds = config.subnetIds;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._egress = config.egress;
      this._ingress = config.ingress;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // default_network_acl_id - computed: false, optional: false, required: true
    private _defaultNetworkAclId?: string; 
    public get defaultNetworkAclId() {
      return this.getStringAttribute('default_network_acl_id');
    }
    public set defaultNetworkAclId(value: string) {
      this._defaultNetworkAclId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultNetworkAclIdInput() {
      return this._defaultNetworkAclId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // subnet_ids - computed: false, optional: true, required: false
    private _subnetIds?: string[] | undefined; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[] | undefined) {
      this._subnetIds = value;
    }
    public resetSubnetIds() {
      this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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

    // egress - computed: false, optional: true, required: false
    private _egress?: DefaultNetworkAclEgress[] | undefined; 
    public get egress() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('egress') as any;
    }
    public set egress(value: DefaultNetworkAclEgress[] | undefined) {
      this._egress = value;
    }
    public resetEgress() {
      this._egress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressInput() {
      return this._egress
    }

    // ingress - computed: false, optional: true, required: false
    private _ingress?: DefaultNetworkAclIngress[] | undefined; 
    public get ingress() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ingress') as any;
    }
    public set ingress(value: DefaultNetworkAclIngress[] | undefined) {
      this._ingress = value;
    }
    public resetIngress() {
      this._ingress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ingressInput() {
      return this._ingress
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        default_network_acl_id: cdktf.stringToTerraform(this._defaultNetworkAclId),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        egress: cdktf.listMapper(defaultNetworkAclEgressToTerraform)(this._egress),
        ingress: cdktf.listMapper(defaultNetworkAclIngressToTerraform)(this._ingress),
      };
    }
  }
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function defaultRouteTableTimeoutsToTerraform(struct?: DefaultRouteTableTimeoutsOutputReference | DefaultRouteTableTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class DefaultRouteTableTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
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
    private _defaultRouteTableId?: string; 
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
    private _propagatingVgws?: string[] | undefined; 
    public get propagatingVgws() {
      return this.getListAttribute('propagating_vgws');
    }
    public set propagatingVgws(value: string[] | undefined) {
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
    private _route?: DefaultRouteTableRoute[] | undefined; 
    public get route() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('route') as any;
    }
    public set route(value: DefaultRouteTableRoute[] | undefined) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _timeouts?: DefaultRouteTableTimeouts | undefined; 
    private __timeoutsOutput = new DefaultRouteTableTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DefaultRouteTableTimeouts | undefined) {
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
  export interface DefaultSecurityGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#egress DefaultSecurityGroup#egress}
    */
    readonly egress?: DefaultSecurityGroupEgress[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#ingress DefaultSecurityGroup#ingress}
    */
    readonly ingress?: DefaultSecurityGroupIngress[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#revoke_rules_on_delete DefaultSecurityGroup#revoke_rules_on_delete}
    */
    readonly revokeRulesOnDelete?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#tags DefaultSecurityGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#tags_all DefaultSecurityGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#vpc_id DefaultSecurityGroup#vpc_id}
    */
    readonly vpcId?: string;
  }
  export interface DefaultSecurityGroupEgress {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#cidr_blocks DefaultSecurityGroup#cidr_blocks}
    */
    readonly cidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#description DefaultSecurityGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#from_port DefaultSecurityGroup#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}
    */
    readonly ipv6CidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}
    */
    readonly prefixListIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#protocol DefaultSecurityGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#security_groups DefaultSecurityGroup#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#self DefaultSecurityGroup#self}
    */
    readonly selfAttribute?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#to_port DefaultSecurityGroup#to_port}
    */
    readonly toPort?: number;
  }

  function defaultSecurityGroupEgressToTerraform(struct?: DefaultSecurityGroupEgress): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cidr_blocks: struct!.cidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrBlocks),
      description: struct!.description === undefined ? null : cdktf.stringToTerraform(struct!.description),
      from_port: struct!.fromPort === undefined ? null : cdktf.numberToTerraform(struct!.fromPort),
      ipv6_cidr_blocks: struct!.ipv6CidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipv6CidrBlocks),
      prefix_list_ids: struct!.prefixListIds === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.prefixListIds),
      protocol: struct!.protocol === undefined ? null : cdktf.stringToTerraform(struct!.protocol),
      security_groups: struct!.securityGroups === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
      self: struct!.selfAttribute === undefined ? null : cdktf.booleanToTerraform(struct!.selfAttribute),
      to_port: struct!.toPort === undefined ? null : cdktf.numberToTerraform(struct!.toPort),
    }
  }

  export interface DefaultSecurityGroupIngress {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#cidr_blocks DefaultSecurityGroup#cidr_blocks}
    */
    readonly cidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#description DefaultSecurityGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#from_port DefaultSecurityGroup#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}
    */
    readonly ipv6CidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}
    */
    readonly prefixListIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#protocol DefaultSecurityGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#security_groups DefaultSecurityGroup#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#self DefaultSecurityGroup#self}
    */
    readonly selfAttribute?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#to_port DefaultSecurityGroup#to_port}
    */
    readonly toPort?: number;
  }

  function defaultSecurityGroupIngressToTerraform(struct?: DefaultSecurityGroupIngress): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cidr_blocks: struct!.cidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrBlocks),
      description: struct!.description === undefined ? null : cdktf.stringToTerraform(struct!.description),
      from_port: struct!.fromPort === undefined ? null : cdktf.numberToTerraform(struct!.fromPort),
      ipv6_cidr_blocks: struct!.ipv6CidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipv6CidrBlocks),
      prefix_list_ids: struct!.prefixListIds === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.prefixListIds),
      protocol: struct!.protocol === undefined ? null : cdktf.stringToTerraform(struct!.protocol),
      security_groups: struct!.securityGroups === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
      self: struct!.selfAttribute === undefined ? null : cdktf.booleanToTerraform(struct!.selfAttribute),
      to_port: struct!.toPort === undefined ? null : cdktf.numberToTerraform(struct!.toPort),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html aws_default_security_group}
  */
  export class DefaultSecurityGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_default_security_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html aws_default_security_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultSecurityGroupConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DefaultSecurityGroupConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_default_security_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._egress = config.egress;
      this._ingress = config.ingress;
      this._revokeRulesOnDelete = config.revokeRulesOnDelete;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // egress - computed: true, optional: true, required: false
    private _egress?: DefaultSecurityGroupEgress[] | undefined; 
    public get egress() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('egress') as any;
    }
    public set egress(value: DefaultSecurityGroupEgress[] | undefined) {
      this._egress = value;
    }
    public resetEgress() {
      this._egress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressInput() {
      return this._egress
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ingress - computed: true, optional: true, required: false
    private _ingress?: DefaultSecurityGroupIngress[] | undefined; 
    public get ingress() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ingress') as any;
    }
    public set ingress(value: DefaultSecurityGroupIngress[] | undefined) {
      this._ingress = value;
    }
    public resetIngress() {
      this._ingress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ingressInput() {
      return this._ingress
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // revoke_rules_on_delete - computed: false, optional: true, required: false
    private _revokeRulesOnDelete?: boolean | cdktf.IResolvable | undefined; 
    public get revokeRulesOnDelete() {
      return this.getBooleanAttribute('revoke_rules_on_delete') as any;
    }
    public set revokeRulesOnDelete(value: boolean | cdktf.IResolvable | undefined) {
      this._revokeRulesOnDelete = value;
    }
    public resetRevokeRulesOnDelete() {
      this._revokeRulesOnDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get revokeRulesOnDeleteInput() {
      return this._revokeRulesOnDelete
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vpc_id - computed: true, optional: true, required: false
    private _vpcId?: string | undefined; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string | undefined) {
      this._vpcId = value;
    }
    public resetVpcId() {
      this._vpcId = undefined;
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
        egress: cdktf.listMapper(defaultSecurityGroupEgressToTerraform)(this._egress),
        ingress: cdktf.listMapper(defaultSecurityGroupIngressToTerraform)(this._ingress),
        revoke_rules_on_delete: cdktf.booleanToTerraform(this._revokeRulesOnDelete),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
      };
    }
  }
  export interface DefaultSubnetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#availability_zone DefaultSubnet#availability_zone}
    */
    readonly availabilityZone: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#customer_owned_ipv4_pool DefaultSubnet#customer_owned_ipv4_pool}
    */
    readonly customerOwnedIpv4Pool?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#map_customer_owned_ip_on_launch DefaultSubnet#map_customer_owned_ip_on_launch}
    */
    readonly mapCustomerOwnedIpOnLaunch?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#map_public_ip_on_launch DefaultSubnet#map_public_ip_on_launch}
    */
    readonly mapPublicIpOnLaunch?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#outpost_arn DefaultSubnet#outpost_arn}
    */
    readonly outpostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#tags DefaultSubnet#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#tags_all DefaultSubnet#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#timeouts DefaultSubnet#timeouts}
    */
    readonly timeouts?: DefaultSubnetTimeouts;
  }
  export interface DefaultSubnetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#create DefaultSubnet#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#delete DefaultSubnet#delete}
    */
    readonly delete?: string;
  }

  function defaultSubnetTimeoutsToTerraform(struct?: DefaultSubnetTimeoutsOutputReference | DefaultSubnetTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class DefaultSubnetTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html aws_default_subnet}
  */
  export class DefaultSubnet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_default_subnet";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html aws_default_subnet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultSubnetConfig
    */
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
      return this.getBooleanAttribute('assign_ipv6_address_on_creation') as any;
    }

    // availability_zone - computed: false, optional: false, required: true
    private _availabilityZone?: string; 
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
    private _customerOwnedIpv4Pool?: string | undefined; 
    public get customerOwnedIpv4Pool() {
      return this.getStringAttribute('customer_owned_ipv4_pool');
    }
    public set customerOwnedIpv4Pool(value: string | undefined) {
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
    private _mapCustomerOwnedIpOnLaunch?: boolean | cdktf.IResolvable | undefined; 
    public get mapCustomerOwnedIpOnLaunch() {
      return this.getBooleanAttribute('map_customer_owned_ip_on_launch') as any;
    }
    public set mapCustomerOwnedIpOnLaunch(value: boolean | cdktf.IResolvable | undefined) {
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
    private _mapPublicIpOnLaunch?: boolean | cdktf.IResolvable | undefined; 
    public get mapPublicIpOnLaunch() {
      return this.getBooleanAttribute('map_public_ip_on_launch') as any;
    }
    public set mapPublicIpOnLaunch(value: boolean | cdktf.IResolvable | undefined) {
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
    private _outpostArn?: string | undefined; 
    public get outpostArn() {
      return this.getStringAttribute('outpost_arn');
    }
    public set outpostArn(value: string | undefined) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _timeouts?: DefaultSubnetTimeouts | undefined; 
    private __timeoutsOutput = new DefaultSubnetTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DefaultSubnetTimeouts | undefined) {
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
  export interface DefaultVpcConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#enable_classiclink DefaultVpc#enable_classiclink}
    */
    readonly enableClassiclink?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#enable_classiclink_dns_support DefaultVpc#enable_classiclink_dns_support}
    */
    readonly enableClassiclinkDnsSupport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#enable_dns_hostnames DefaultVpc#enable_dns_hostnames}
    */
    readonly enableDnsHostnames?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#enable_dns_support DefaultVpc#enable_dns_support}
    */
    readonly enableDnsSupport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#tags DefaultVpc#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#tags_all DefaultVpc#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html aws_default_vpc}
  */
  export class DefaultVpc extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_default_vpc";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html aws_default_vpc} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultVpcConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DefaultVpcConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_default_vpc',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._enableClassiclink = config.enableClassiclink;
      this._enableClassiclinkDnsSupport = config.enableClassiclinkDnsSupport;
      this._enableDnsHostnames = config.enableDnsHostnames;
      this._enableDnsSupport = config.enableDnsSupport;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // assign_generated_ipv6_cidr_block - computed: true, optional: false, required: false
    public get assignGeneratedIpv6CidrBlock() {
      return this.getBooleanAttribute('assign_generated_ipv6_cidr_block') as any;
    }

    // cidr_block - computed: true, optional: false, required: false
    public get cidrBlock() {
      return this.getStringAttribute('cidr_block');
    }

    // default_network_acl_id - computed: true, optional: false, required: false
    public get defaultNetworkAclId() {
      return this.getStringAttribute('default_network_acl_id');
    }

    // default_route_table_id - computed: true, optional: false, required: false
    public get defaultRouteTableId() {
      return this.getStringAttribute('default_route_table_id');
    }

    // default_security_group_id - computed: true, optional: false, required: false
    public get defaultSecurityGroupId() {
      return this.getStringAttribute('default_security_group_id');
    }

    // dhcp_options_id - computed: true, optional: false, required: false
    public get dhcpOptionsId() {
      return this.getStringAttribute('dhcp_options_id');
    }

    // enable_classiclink - computed: true, optional: true, required: false
    private _enableClassiclink?: boolean | cdktf.IResolvable | undefined; 
    public get enableClassiclink() {
      return this.getBooleanAttribute('enable_classiclink') as any;
    }
    public set enableClassiclink(value: boolean | cdktf.IResolvable | undefined) {
      this._enableClassiclink = value;
    }
    public resetEnableClassiclink() {
      this._enableClassiclink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableClassiclinkInput() {
      return this._enableClassiclink
    }

    // enable_classiclink_dns_support - computed: true, optional: true, required: false
    private _enableClassiclinkDnsSupport?: boolean | cdktf.IResolvable | undefined; 
    public get enableClassiclinkDnsSupport() {
      return this.getBooleanAttribute('enable_classiclink_dns_support') as any;
    }
    public set enableClassiclinkDnsSupport(value: boolean | cdktf.IResolvable | undefined) {
      this._enableClassiclinkDnsSupport = value;
    }
    public resetEnableClassiclinkDnsSupport() {
      this._enableClassiclinkDnsSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableClassiclinkDnsSupportInput() {
      return this._enableClassiclinkDnsSupport
    }

    // enable_dns_hostnames - computed: true, optional: true, required: false
    private _enableDnsHostnames?: boolean | cdktf.IResolvable | undefined; 
    public get enableDnsHostnames() {
      return this.getBooleanAttribute('enable_dns_hostnames') as any;
    }
    public set enableDnsHostnames(value: boolean | cdktf.IResolvable | undefined) {
      this._enableDnsHostnames = value;
    }
    public resetEnableDnsHostnames() {
      this._enableDnsHostnames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableDnsHostnamesInput() {
      return this._enableDnsHostnames
    }

    // enable_dns_support - computed: false, optional: true, required: false
    private _enableDnsSupport?: boolean | cdktf.IResolvable | undefined; 
    public get enableDnsSupport() {
      return this.getBooleanAttribute('enable_dns_support') as any;
    }
    public set enableDnsSupport(value: boolean | cdktf.IResolvable | undefined) {
      this._enableDnsSupport = value;
    }
    public resetEnableDnsSupport() {
      this._enableDnsSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableDnsSupportInput() {
      return this._enableDnsSupport
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_tenancy - computed: true, optional: false, required: false
    public get instanceTenancy() {
      return this.getStringAttribute('instance_tenancy');
    }

    // ipv6_association_id - computed: true, optional: false, required: false
    public get ipv6AssociationId() {
      return this.getStringAttribute('ipv6_association_id');
    }

    // ipv6_cidr_block - computed: true, optional: false, required: false
    public get ipv6CidrBlock() {
      return this.getStringAttribute('ipv6_cidr_block');
    }

    // main_route_table_id - computed: true, optional: false, required: false
    public get mainRouteTableId() {
      return this.getStringAttribute('main_route_table_id');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        enable_classiclink: cdktf.booleanToTerraform(this._enableClassiclink),
        enable_classiclink_dns_support: cdktf.booleanToTerraform(this._enableClassiclinkDnsSupport),
        enable_dns_hostnames: cdktf.booleanToTerraform(this._enableDnsHostnames),
        enable_dns_support: cdktf.booleanToTerraform(this._enableDnsSupport),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface DefaultVpcDhcpOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html#netbios_name_servers DefaultVpcDhcpOptions#netbios_name_servers}
    */
    readonly netbiosNameServers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html#netbios_node_type DefaultVpcDhcpOptions#netbios_node_type}
    */
    readonly netbiosNodeType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html#owner_id DefaultVpcDhcpOptions#owner_id}
    */
    readonly ownerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html#tags DefaultVpcDhcpOptions#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html#tags_all DefaultVpcDhcpOptions#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html aws_default_vpc_dhcp_options}
  */
  export class DefaultVpcDhcpOptions extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_default_vpc_dhcp_options";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html aws_default_vpc_dhcp_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultVpcDhcpOptionsConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DefaultVpcDhcpOptionsConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_default_vpc_dhcp_options',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._netbiosNameServers = config.netbiosNameServers;
      this._netbiosNodeType = config.netbiosNodeType;
      this._ownerId = config.ownerId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // domain_name - computed: true, optional: false, required: false
    public get domainName() {
      return this.getStringAttribute('domain_name');
    }

    // domain_name_servers - computed: true, optional: false, required: false
    public get domainNameServers() {
      return this.getStringAttribute('domain_name_servers');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // netbios_name_servers - computed: false, optional: true, required: false
    private _netbiosNameServers?: string[] | undefined; 
    public get netbiosNameServers() {
      return this.getListAttribute('netbios_name_servers');
    }
    public set netbiosNameServers(value: string[] | undefined) {
      this._netbiosNameServers = value;
    }
    public resetNetbiosNameServers() {
      this._netbiosNameServers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get netbiosNameServersInput() {
      return this._netbiosNameServers
    }

    // netbios_node_type - computed: false, optional: true, required: false
    private _netbiosNodeType?: string | undefined; 
    public get netbiosNodeType() {
      return this.getStringAttribute('netbios_node_type');
    }
    public set netbiosNodeType(value: string | undefined) {
      this._netbiosNodeType = value;
    }
    public resetNetbiosNodeType() {
      this._netbiosNodeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get netbiosNodeTypeInput() {
      return this._netbiosNodeType
    }

    // ntp_servers - computed: true, optional: false, required: false
    public get ntpServers() {
      return this.getStringAttribute('ntp_servers');
    }

    // owner_id - computed: true, optional: true, required: false
    private _ownerId?: string | undefined; 
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }
    public set ownerId(value: string | undefined) {
      this._ownerId = value;
    }
    public resetOwnerId() {
      this._ownerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerIdInput() {
      return this._ownerId
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        netbios_name_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._netbiosNameServers),
        netbios_node_type: cdktf.stringToTerraform(this._netbiosNodeType),
        owner_id: cdktf.stringToTerraform(this._ownerId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface EgressOnlyInternetGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/egress_only_internet_gateway.html#tags EgressOnlyInternetGateway#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/egress_only_internet_gateway.html#tags_all EgressOnlyInternetGateway#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/egress_only_internet_gateway.html#vpc_id EgressOnlyInternetGateway#vpc_id}
    */
    readonly vpcId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/egress_only_internet_gateway.html aws_egress_only_internet_gateway}
  */
  export class EgressOnlyInternetGateway extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_egress_only_internet_gateway";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/egress_only_internet_gateway.html aws_egress_only_internet_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EgressOnlyInternetGatewayConfig
    */
    public constructor(scope: Construct, id: string, config: EgressOnlyInternetGatewayConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_egress_only_internet_gateway',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
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
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
      };
    }
  }
  export interface FlowLogConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#eni_id FlowLog#eni_id}
    */
    readonly eniId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#iam_role_arn FlowLog#iam_role_arn}
    */
    readonly iamRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#log_destination FlowLog#log_destination}
    */
    readonly logDestination?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#log_destination_type FlowLog#log_destination_type}
    */
    readonly logDestinationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#log_format FlowLog#log_format}
    */
    readonly logFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#log_group_name FlowLog#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#max_aggregation_interval FlowLog#max_aggregation_interval}
    */
    readonly maxAggregationInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#subnet_id FlowLog#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#tags FlowLog#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#tags_all FlowLog#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#traffic_type FlowLog#traffic_type}
    */
    readonly trafficType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#vpc_id FlowLog#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * destination_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#destination_options FlowLog#destination_options}
    */
    readonly destinationOptions?: FlowLogDestinationOptions;
  }
  export interface FlowLogDestinationOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#file_format FlowLog#file_format}
    */
    readonly fileFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#hive_compatible_partitions FlowLog#hive_compatible_partitions}
    */
    readonly hiveCompatiblePartitions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#per_hour_partition FlowLog#per_hour_partition}
    */
    readonly perHourPartition?: boolean | cdktf.IResolvable;
  }

  function flowLogDestinationOptionsToTerraform(struct?: FlowLogDestinationOptionsOutputReference | FlowLogDestinationOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      file_format: cdktf.stringToTerraform(struct!.fileFormat),
      hive_compatible_partitions: cdktf.booleanToTerraform(struct!.hiveCompatiblePartitions),
      per_hour_partition: cdktf.booleanToTerraform(struct!.perHourPartition),
    }
  }

  export class FlowLogDestinationOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // file_format - computed: false, optional: true, required: false
    private _fileFormat?: string | undefined; 
    public get fileFormat() {
      return this.getStringAttribute('file_format');
    }
    public set fileFormat(value: string | undefined) {
      this._fileFormat = value;
    }
    public resetFileFormat() {
      this._fileFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileFormatInput() {
      return this._fileFormat
    }

    // hive_compatible_partitions - computed: false, optional: true, required: false
    private _hiveCompatiblePartitions?: boolean | cdktf.IResolvable | undefined; 
    public get hiveCompatiblePartitions() {
      return this.getBooleanAttribute('hive_compatible_partitions') as any;
    }
    public set hiveCompatiblePartitions(value: boolean | cdktf.IResolvable | undefined) {
      this._hiveCompatiblePartitions = value;
    }
    public resetHiveCompatiblePartitions() {
      this._hiveCompatiblePartitions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hiveCompatiblePartitionsInput() {
      return this._hiveCompatiblePartitions
    }

    // per_hour_partition - computed: false, optional: true, required: false
    private _perHourPartition?: boolean | cdktf.IResolvable | undefined; 
    public get perHourPartition() {
      return this.getBooleanAttribute('per_hour_partition') as any;
    }
    public set perHourPartition(value: boolean | cdktf.IResolvable | undefined) {
      this._perHourPartition = value;
    }
    public resetPerHourPartition() {
      this._perHourPartition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get perHourPartitionInput() {
      return this._perHourPartition
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html aws_flow_log}
  */
  export class FlowLog extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_flow_log";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html aws_flow_log} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FlowLogConfig
    */
    public constructor(scope: Construct, id: string, config: FlowLogConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_flow_log',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._eniId = config.eniId;
      this._iamRoleArn = config.iamRoleArn;
      this._logDestination = config.logDestination;
      this._logDestinationType = config.logDestinationType;
      this._logFormat = config.logFormat;
      this._logGroupName = config.logGroupName;
      this._maxAggregationInterval = config.maxAggregationInterval;
      this._subnetId = config.subnetId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._trafficType = config.trafficType;
      this._vpcId = config.vpcId;
      this._destinationOptions = config.destinationOptions;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // eni_id - computed: false, optional: true, required: false
    private _eniId?: string | undefined; 
    public get eniId() {
      return this.getStringAttribute('eni_id');
    }
    public set eniId(value: string | undefined) {
      this._eniId = value;
    }
    public resetEniId() {
      this._eniId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eniIdInput() {
      return this._eniId
    }

    // iam_role_arn - computed: false, optional: true, required: false
    private _iamRoleArn?: string | undefined; 
    public get iamRoleArn() {
      return this.getStringAttribute('iam_role_arn');
    }
    public set iamRoleArn(value: string | undefined) {
      this._iamRoleArn = value;
    }
    public resetIamRoleArn() {
      this._iamRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRoleArnInput() {
      return this._iamRoleArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // log_destination - computed: true, optional: true, required: false
    private _logDestination?: string | undefined; 
    public get logDestination() {
      return this.getStringAttribute('log_destination');
    }
    public set logDestination(value: string | undefined) {
      this._logDestination = value;
    }
    public resetLogDestination() {
      this._logDestination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logDestinationInput() {
      return this._logDestination
    }

    // log_destination_type - computed: false, optional: true, required: false
    private _logDestinationType?: string | undefined; 
    public get logDestinationType() {
      return this.getStringAttribute('log_destination_type');
    }
    public set logDestinationType(value: string | undefined) {
      this._logDestinationType = value;
    }
    public resetLogDestinationType() {
      this._logDestinationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logDestinationTypeInput() {
      return this._logDestinationType
    }

    // log_format - computed: true, optional: true, required: false
    private _logFormat?: string | undefined; 
    public get logFormat() {
      return this.getStringAttribute('log_format');
    }
    public set logFormat(value: string | undefined) {
      this._logFormat = value;
    }
    public resetLogFormat() {
      this._logFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logFormatInput() {
      return this._logFormat
    }

    // log_group_name - computed: true, optional: true, required: false
    private _logGroupName?: string | undefined; 
    public get logGroupName() {
      return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string | undefined) {
      this._logGroupName = value;
    }
    public resetLogGroupName() {
      this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
      return this._logGroupName
    }

    // max_aggregation_interval - computed: false, optional: true, required: false
    private _maxAggregationInterval?: number | undefined; 
    public get maxAggregationInterval() {
      return this.getNumberAttribute('max_aggregation_interval');
    }
    public set maxAggregationInterval(value: number | undefined) {
      this._maxAggregationInterval = value;
    }
    public resetMaxAggregationInterval() {
      this._maxAggregationInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxAggregationIntervalInput() {
      return this._maxAggregationInterval
    }

    // subnet_id - computed: false, optional: true, required: false
    private _subnetId?: string | undefined; 
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string | undefined) {
      this._subnetId = value;
    }
    public resetSubnetId() {
      this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
      return this._subnetId
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // traffic_type - computed: false, optional: false, required: true
    private _trafficType?: string; 
    public get trafficType() {
      return this.getStringAttribute('traffic_type');
    }
    public set trafficType(value: string) {
      this._trafficType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficTypeInput() {
      return this._trafficType
    }

    // vpc_id - computed: false, optional: true, required: false
    private _vpcId?: string | undefined; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string | undefined) {
      this._vpcId = value;
    }
    public resetVpcId() {
      this._vpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
      return this._vpcId
    }

    // destination_options - computed: false, optional: true, required: false
    private _destinationOptions?: FlowLogDestinationOptions | undefined; 
    private __destinationOptionsOutput = new FlowLogDestinationOptionsOutputReference(this as any, "destination_options", true);
    public get destinationOptions() {
      return this.__destinationOptionsOutput;
    }
    public putDestinationOptions(value: FlowLogDestinationOptions | undefined) {
      this._destinationOptions = value;
    }
    public resetDestinationOptions() {
      this._destinationOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationOptionsInput() {
      return this._destinationOptions
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        eni_id: cdktf.stringToTerraform(this._eniId),
        iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
        log_destination: cdktf.stringToTerraform(this._logDestination),
        log_destination_type: cdktf.stringToTerraform(this._logDestinationType),
        log_format: cdktf.stringToTerraform(this._logFormat),
        log_group_name: cdktf.stringToTerraform(this._logGroupName),
        max_aggregation_interval: cdktf.numberToTerraform(this._maxAggregationInterval),
        subnet_id: cdktf.stringToTerraform(this._subnetId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        traffic_type: cdktf.stringToTerraform(this._trafficType),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        destination_options: flowLogDestinationOptionsToTerraform(this._destinationOptions),
      };
    }
  }
  export interface InternetGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/internet_gateway.html#tags InternetGateway#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/internet_gateway.html#tags_all InternetGateway#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/internet_gateway.html#vpc_id InternetGateway#vpc_id}
    */
    readonly vpcId?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/internet_gateway.html aws_internet_gateway}
  */
  export class InternetGateway extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_internet_gateway";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/internet_gateway.html aws_internet_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options InternetGatewayConfig = {}
    */
    public constructor(scope: Construct, id: string, config: InternetGatewayConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_internet_gateway',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vpc_id - computed: false, optional: true, required: false
    private _vpcId?: string | undefined; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string | undefined) {
      this._vpcId = value;
    }
    public resetVpcId() {
      this._vpcId = undefined;
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
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
      };
    }
  }
  export interface MainRouteTableAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/main_route_table_association.html#route_table_id MainRouteTableAssociation#route_table_id}
    */
    readonly routeTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/main_route_table_association.html#vpc_id MainRouteTableAssociation#vpc_id}
    */
    readonly vpcId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/main_route_table_association.html aws_main_route_table_association}
  */
  export class MainRouteTableAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_main_route_table_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/main_route_table_association.html aws_main_route_table_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MainRouteTableAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: MainRouteTableAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_main_route_table_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._routeTableId = config.routeTableId;
      this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // original_route_table_id - computed: true, optional: false, required: false
    public get originalRouteTableId() {
      return this.getStringAttribute('original_route_table_id');
    }

    // route_table_id - computed: false, optional: false, required: true
    private _routeTableId?: string; 
    public get routeTableId() {
      return this.getStringAttribute('route_table_id');
    }
    public set routeTableId(value: string) {
      this._routeTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routeTableIdInput() {
      return this._routeTableId
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
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
        route_table_id: cdktf.stringToTerraform(this._routeTableId),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
      };
    }
  }
  export interface NatGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/nat_gateway.html#allocation_id NatGateway#allocation_id}
    */
    readonly allocationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/nat_gateway.html#connectivity_type NatGateway#connectivity_type}
    */
    readonly connectivityType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/nat_gateway.html#subnet_id NatGateway#subnet_id}
    */
    readonly subnetId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/nat_gateway.html#tags NatGateway#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/nat_gateway.html#tags_all NatGateway#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/nat_gateway.html aws_nat_gateway}
  */
  export class NatGateway extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_nat_gateway";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/nat_gateway.html aws_nat_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NatGatewayConfig
    */
    public constructor(scope: Construct, id: string, config: NatGatewayConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_nat_gateway',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._allocationId = config.allocationId;
      this._connectivityType = config.connectivityType;
      this._subnetId = config.subnetId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allocation_id - computed: false, optional: true, required: false
    private _allocationId?: string | undefined; 
    public get allocationId() {
      return this.getStringAttribute('allocation_id');
    }
    public set allocationId(value: string | undefined) {
      this._allocationId = value;
    }
    public resetAllocationId() {
      this._allocationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocationIdInput() {
      return this._allocationId
    }

    // connectivity_type - computed: false, optional: true, required: false
    private _connectivityType?: string | undefined; 
    public get connectivityType() {
      return this.getStringAttribute('connectivity_type');
    }
    public set connectivityType(value: string | undefined) {
      this._connectivityType = value;
    }
    public resetConnectivityType() {
      this._connectivityType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectivityTypeInput() {
      return this._connectivityType
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // network_interface_id - computed: true, optional: false, required: false
    public get networkInterfaceId() {
      return this.getStringAttribute('network_interface_id');
    }

    // private_ip - computed: true, optional: false, required: false
    public get privateIp() {
      return this.getStringAttribute('private_ip');
    }

    // public_ip - computed: true, optional: false, required: false
    public get publicIp() {
      return this.getStringAttribute('public_ip');
    }

    // subnet_id - computed: false, optional: false, required: true
    private _subnetId?: string; 
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
      this._subnetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
      return this._subnetId
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        allocation_id: cdktf.stringToTerraform(this._allocationId),
        connectivity_type: cdktf.stringToTerraform(this._connectivityType),
        subnet_id: cdktf.stringToTerraform(this._subnetId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface NetworkAclConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#egress NetworkAcl#egress}
    */
    readonly egress?: NetworkAclEgress[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#ingress NetworkAcl#ingress}
    */
    readonly ingress?: NetworkAclIngress[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#subnet_ids NetworkAcl#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#tags NetworkAcl#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#tags_all NetworkAcl#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#vpc_id NetworkAcl#vpc_id}
    */
    readonly vpcId: string;
  }
  export interface NetworkAclEgress {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#action NetworkAcl#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#cidr_block NetworkAcl#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#from_port NetworkAcl#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#icmp_code NetworkAcl#icmp_code}
    */
    readonly icmpCode?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#icmp_type NetworkAcl#icmp_type}
    */
    readonly icmpType?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#ipv6_cidr_block NetworkAcl#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#protocol NetworkAcl#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#rule_no NetworkAcl#rule_no}
    */
    readonly ruleNo?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#to_port NetworkAcl#to_port}
    */
    readonly toPort?: number;
  }

  function networkAclEgressToTerraform(struct?: NetworkAclEgress): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      action: struct!.action === undefined ? null : cdktf.stringToTerraform(struct!.action),
      cidr_block: struct!.cidrBlock === undefined ? null : cdktf.stringToTerraform(struct!.cidrBlock),
      from_port: struct!.fromPort === undefined ? null : cdktf.numberToTerraform(struct!.fromPort),
      icmp_code: struct!.icmpCode === undefined ? null : cdktf.numberToTerraform(struct!.icmpCode),
      icmp_type: struct!.icmpType === undefined ? null : cdktf.numberToTerraform(struct!.icmpType),
      ipv6_cidr_block: struct!.ipv6CidrBlock === undefined ? null : cdktf.stringToTerraform(struct!.ipv6CidrBlock),
      protocol: struct!.protocol === undefined ? null : cdktf.stringToTerraform(struct!.protocol),
      rule_no: struct!.ruleNo === undefined ? null : cdktf.numberToTerraform(struct!.ruleNo),
      to_port: struct!.toPort === undefined ? null : cdktf.numberToTerraform(struct!.toPort),
    }
  }

  export interface NetworkAclIngress {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#action NetworkAcl#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#cidr_block NetworkAcl#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#from_port NetworkAcl#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#icmp_code NetworkAcl#icmp_code}
    */
    readonly icmpCode?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#icmp_type NetworkAcl#icmp_type}
    */
    readonly icmpType?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#ipv6_cidr_block NetworkAcl#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#protocol NetworkAcl#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#rule_no NetworkAcl#rule_no}
    */
    readonly ruleNo?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#to_port NetworkAcl#to_port}
    */
    readonly toPort?: number;
  }

  function networkAclIngressToTerraform(struct?: NetworkAclIngress): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      action: struct!.action === undefined ? null : cdktf.stringToTerraform(struct!.action),
      cidr_block: struct!.cidrBlock === undefined ? null : cdktf.stringToTerraform(struct!.cidrBlock),
      from_port: struct!.fromPort === undefined ? null : cdktf.numberToTerraform(struct!.fromPort),
      icmp_code: struct!.icmpCode === undefined ? null : cdktf.numberToTerraform(struct!.icmpCode),
      icmp_type: struct!.icmpType === undefined ? null : cdktf.numberToTerraform(struct!.icmpType),
      ipv6_cidr_block: struct!.ipv6CidrBlock === undefined ? null : cdktf.stringToTerraform(struct!.ipv6CidrBlock),
      protocol: struct!.protocol === undefined ? null : cdktf.stringToTerraform(struct!.protocol),
      rule_no: struct!.ruleNo === undefined ? null : cdktf.numberToTerraform(struct!.ruleNo),
      to_port: struct!.toPort === undefined ? null : cdktf.numberToTerraform(struct!.toPort),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html aws_network_acl}
  */
  export class NetworkAcl extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_network_acl";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html aws_network_acl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkAclConfig
    */
    public constructor(scope: Construct, id: string, config: NetworkAclConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_network_acl',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._egress = config.egress;
      this._ingress = config.ingress;
      this._subnetIds = config.subnetIds;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // egress - computed: true, optional: true, required: false
    private _egress?: NetworkAclEgress[] | undefined; 
    public get egress() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('egress') as any;
    }
    public set egress(value: NetworkAclEgress[] | undefined) {
      this._egress = value;
    }
    public resetEgress() {
      this._egress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressInput() {
      return this._egress
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ingress - computed: true, optional: true, required: false
    private _ingress?: NetworkAclIngress[] | undefined; 
    public get ingress() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ingress') as any;
    }
    public set ingress(value: NetworkAclIngress[] | undefined) {
      this._ingress = value;
    }
    public resetIngress() {
      this._ingress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ingressInput() {
      return this._ingress
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[] | undefined; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[] | undefined) {
      this._subnetIds = value;
    }
    public resetSubnetIds() {
      this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
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
        egress: cdktf.listMapper(networkAclEgressToTerraform)(this._egress),
        ingress: cdktf.listMapper(networkAclIngressToTerraform)(this._ingress),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
      };
    }
  }
  export interface NetworkAclRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#cidr_block NetworkAclRule#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#egress NetworkAclRule#egress}
    */
    readonly egress?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#from_port NetworkAclRule#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#icmp_code NetworkAclRule#icmp_code}
    */
    readonly icmpCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#icmp_type NetworkAclRule#icmp_type}
    */
    readonly icmpType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#ipv6_cidr_block NetworkAclRule#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#network_acl_id NetworkAclRule#network_acl_id}
    */
    readonly networkAclId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#protocol NetworkAclRule#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#rule_action NetworkAclRule#rule_action}
    */
    readonly ruleAction: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#rule_number NetworkAclRule#rule_number}
    */
    readonly ruleNumber: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#to_port NetworkAclRule#to_port}
    */
    readonly toPort?: number;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html aws_network_acl_rule}
  */
  export class NetworkAclRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_network_acl_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html aws_network_acl_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkAclRuleConfig
    */
    public constructor(scope: Construct, id: string, config: NetworkAclRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_network_acl_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._cidrBlock = config.cidrBlock;
      this._egress = config.egress;
      this._fromPort = config.fromPort;
      this._icmpCode = config.icmpCode;
      this._icmpType = config.icmpType;
      this._ipv6CidrBlock = config.ipv6CidrBlock;
      this._networkAclId = config.networkAclId;
      this._protocol = config.protocol;
      this._ruleAction = config.ruleAction;
      this._ruleNumber = config.ruleNumber;
      this._toPort = config.toPort;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cidr_block - computed: false, optional: true, required: false
    private _cidrBlock?: string | undefined; 
    public get cidrBlock() {
      return this.getStringAttribute('cidr_block');
    }
    public set cidrBlock(value: string | undefined) {
      this._cidrBlock = value;
    }
    public resetCidrBlock() {
      this._cidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrBlockInput() {
      return this._cidrBlock
    }

    // egress - computed: false, optional: true, required: false
    private _egress?: boolean | cdktf.IResolvable | undefined; 
    public get egress() {
      return this.getBooleanAttribute('egress') as any;
    }
    public set egress(value: boolean | cdktf.IResolvable | undefined) {
      this._egress = value;
    }
    public resetEgress() {
      this._egress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressInput() {
      return this._egress
    }

    // from_port - computed: false, optional: true, required: false
    private _fromPort?: number | undefined; 
    public get fromPort() {
      return this.getNumberAttribute('from_port');
    }
    public set fromPort(value: number | undefined) {
      this._fromPort = value;
    }
    public resetFromPort() {
      this._fromPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromPortInput() {
      return this._fromPort
    }

    // icmp_code - computed: false, optional: true, required: false
    private _icmpCode?: string | undefined; 
    public get icmpCode() {
      return this.getStringAttribute('icmp_code');
    }
    public set icmpCode(value: string | undefined) {
      this._icmpCode = value;
    }
    public resetIcmpCode() {
      this._icmpCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get icmpCodeInput() {
      return this._icmpCode
    }

    // icmp_type - computed: false, optional: true, required: false
    private _icmpType?: string | undefined; 
    public get icmpType() {
      return this.getStringAttribute('icmp_type');
    }
    public set icmpType(value: string | undefined) {
      this._icmpType = value;
    }
    public resetIcmpType() {
      this._icmpType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get icmpTypeInput() {
      return this._icmpType
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ipv6_cidr_block - computed: false, optional: true, required: false
    private _ipv6CidrBlock?: string | undefined; 
    public get ipv6CidrBlock() {
      return this.getStringAttribute('ipv6_cidr_block');
    }
    public set ipv6CidrBlock(value: string | undefined) {
      this._ipv6CidrBlock = value;
    }
    public resetIpv6CidrBlock() {
      this._ipv6CidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6CidrBlockInput() {
      return this._ipv6CidrBlock
    }

    // network_acl_id - computed: false, optional: false, required: true
    private _networkAclId?: string; 
    public get networkAclId() {
      return this.getStringAttribute('network_acl_id');
    }
    public set networkAclId(value: string) {
      this._networkAclId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get networkAclIdInput() {
      return this._networkAclId
    }

    // protocol - computed: false, optional: false, required: true
    private _protocol?: string; 
    public get protocol() {
      return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
      this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
      return this._protocol
    }

    // rule_action - computed: false, optional: false, required: true
    private _ruleAction?: string; 
    public get ruleAction() {
      return this.getStringAttribute('rule_action');
    }
    public set ruleAction(value: string) {
      this._ruleAction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleActionInput() {
      return this._ruleAction
    }

    // rule_number - computed: false, optional: false, required: true
    private _ruleNumber?: number; 
    public get ruleNumber() {
      return this.getNumberAttribute('rule_number');
    }
    public set ruleNumber(value: number) {
      this._ruleNumber = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleNumberInput() {
      return this._ruleNumber
    }

    // to_port - computed: false, optional: true, required: false
    private _toPort?: number | undefined; 
    public get toPort() {
      return this.getNumberAttribute('to_port');
    }
    public set toPort(value: number | undefined) {
      this._toPort = value;
    }
    public resetToPort() {
      this._toPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toPortInput() {
      return this._toPort
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cidr_block: cdktf.stringToTerraform(this._cidrBlock),
        egress: cdktf.booleanToTerraform(this._egress),
        from_port: cdktf.numberToTerraform(this._fromPort),
        icmp_code: cdktf.stringToTerraform(this._icmpCode),
        icmp_type: cdktf.stringToTerraform(this._icmpType),
        ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
        network_acl_id: cdktf.stringToTerraform(this._networkAclId),
        protocol: cdktf.stringToTerraform(this._protocol),
        rule_action: cdktf.stringToTerraform(this._ruleAction),
        rule_number: cdktf.numberToTerraform(this._ruleNumber),
        to_port: cdktf.numberToTerraform(this._toPort),
      };
    }
  }
  export interface NetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#description NetworkInterface#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#interface_type NetworkInterface#interface_type}
    */
    readonly interfaceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#ipv6_address_count NetworkInterface#ipv6_address_count}
    */
    readonly ipv6AddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#ipv6_addresses NetworkInterface#ipv6_addresses}
    */
    readonly ipv6Addresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#private_ip NetworkInterface#private_ip}
    */
    readonly privateIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#private_ips NetworkInterface#private_ips}
    */
    readonly privateIps?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#private_ips_count NetworkInterface#private_ips_count}
    */
    readonly privateIpsCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#security_groups NetworkInterface#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#source_dest_check NetworkInterface#source_dest_check}
    */
    readonly sourceDestCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#subnet_id NetworkInterface#subnet_id}
    */
    readonly subnetId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#tags NetworkInterface#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#tags_all NetworkInterface#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * attachment block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#attachment NetworkInterface#attachment}
    */
    readonly attachment?: NetworkInterfaceAttachment[];
  }
  export interface NetworkInterfaceAttachment {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#device_index NetworkInterface#device_index}
    */
    readonly deviceIndex: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#instance NetworkInterface#instance}
    */
    readonly instance: string;
  }

  function networkInterfaceAttachmentToTerraform(struct?: NetworkInterfaceAttachment): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      device_index: cdktf.numberToTerraform(struct!.deviceIndex),
      instance: cdktf.stringToTerraform(struct!.instance),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html aws_network_interface}
  */
  export class NetworkInterface extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_network_interface";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html aws_network_interface} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkInterfaceConfig
    */
    public constructor(scope: Construct, id: string, config: NetworkInterfaceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_network_interface',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._interfaceType = config.interfaceType;
      this._ipv6AddressCount = config.ipv6AddressCount;
      this._ipv6Addresses = config.ipv6Addresses;
      this._privateIp = config.privateIp;
      this._privateIps = config.privateIps;
      this._privateIpsCount = config.privateIpsCount;
      this._securityGroups = config.securityGroups;
      this._sourceDestCheck = config.sourceDestCheck;
      this._subnetId = config.subnetId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._attachment = config.attachment;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // interface_type - computed: true, optional: true, required: false
    private _interfaceType?: string | undefined; 
    public get interfaceType() {
      return this.getStringAttribute('interface_type');
    }
    public set interfaceType(value: string | undefined) {
      this._interfaceType = value;
    }
    public resetInterfaceType() {
      this._interfaceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get interfaceTypeInput() {
      return this._interfaceType
    }

    // ipv6_address_count - computed: true, optional: true, required: false
    private _ipv6AddressCount?: number | undefined; 
    public get ipv6AddressCount() {
      return this.getNumberAttribute('ipv6_address_count');
    }
    public set ipv6AddressCount(value: number | undefined) {
      this._ipv6AddressCount = value;
    }
    public resetIpv6AddressCount() {
      this._ipv6AddressCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6AddressCountInput() {
      return this._ipv6AddressCount
    }

    // ipv6_addresses - computed: true, optional: true, required: false
    private _ipv6Addresses?: string[] | undefined; 
    public get ipv6Addresses() {
      return this.getListAttribute('ipv6_addresses');
    }
    public set ipv6Addresses(value: string[] | undefined) {
      this._ipv6Addresses = value;
    }
    public resetIpv6Addresses() {
      this._ipv6Addresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6AddressesInput() {
      return this._ipv6Addresses
    }

    // mac_address - computed: true, optional: false, required: false
    public get macAddress() {
      return this.getStringAttribute('mac_address');
    }

    // outpost_arn - computed: true, optional: false, required: false
    public get outpostArn() {
      return this.getStringAttribute('outpost_arn');
    }

    // private_dns_name - computed: true, optional: false, required: false
    public get privateDnsName() {
      return this.getStringAttribute('private_dns_name');
    }

    // private_ip - computed: true, optional: true, required: false
    private _privateIp?: string | undefined; 
    public get privateIp() {
      return this.getStringAttribute('private_ip');
    }
    public set privateIp(value: string | undefined) {
      this._privateIp = value;
    }
    public resetPrivateIp() {
      this._privateIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateIpInput() {
      return this._privateIp
    }

    // private_ips - computed: true, optional: true, required: false
    private _privateIps?: string[] | undefined; 
    public get privateIps() {
      return this.getListAttribute('private_ips');
    }
    public set privateIps(value: string[] | undefined) {
      this._privateIps = value;
    }
    public resetPrivateIps() {
      this._privateIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateIpsInput() {
      return this._privateIps
    }

    // private_ips_count - computed: true, optional: true, required: false
    private _privateIpsCount?: number | undefined; 
    public get privateIpsCount() {
      return this.getNumberAttribute('private_ips_count');
    }
    public set privateIpsCount(value: number | undefined) {
      this._privateIpsCount = value;
    }
    public resetPrivateIpsCount() {
      this._privateIpsCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateIpsCountInput() {
      return this._privateIpsCount
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups?: string[] | undefined; 
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[] | undefined) {
      this._securityGroups = value;
    }
    public resetSecurityGroups() {
      this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
      return this._securityGroups
    }

    // source_dest_check - computed: false, optional: true, required: false
    private _sourceDestCheck?: boolean | cdktf.IResolvable | undefined; 
    public get sourceDestCheck() {
      return this.getBooleanAttribute('source_dest_check') as any;
    }
    public set sourceDestCheck(value: boolean | cdktf.IResolvable | undefined) {
      this._sourceDestCheck = value;
    }
    public resetSourceDestCheck() {
      this._sourceDestCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceDestCheckInput() {
      return this._sourceDestCheck
    }

    // subnet_id - computed: false, optional: false, required: true
    private _subnetId?: string; 
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
      this._subnetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
      return this._subnetId
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // attachment - computed: false, optional: true, required: false
    private _attachment?: NetworkInterfaceAttachment[] | undefined; 
    public get attachment() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('attachment') as any;
    }
    public set attachment(value: NetworkInterfaceAttachment[] | undefined) {
      this._attachment = value;
    }
    public resetAttachment() {
      this._attachment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attachmentInput() {
      return this._attachment
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        interface_type: cdktf.stringToTerraform(this._interfaceType),
        ipv6_address_count: cdktf.numberToTerraform(this._ipv6AddressCount),
        ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._ipv6Addresses),
        private_ip: cdktf.stringToTerraform(this._privateIp),
        private_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._privateIps),
        private_ips_count: cdktf.numberToTerraform(this._privateIpsCount),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
        source_dest_check: cdktf.booleanToTerraform(this._sourceDestCheck),
        subnet_id: cdktf.stringToTerraform(this._subnetId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        attachment: cdktf.listMapper(networkInterfaceAttachmentToTerraform)(this._attachment),
      };
    }
  }
  export interface NetworkInterfaceAttachmentAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface_attachment.html#device_index NetworkInterfaceAttachmentA#device_index}
    */
    readonly deviceIndex: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface_attachment.html#instance_id NetworkInterfaceAttachmentA#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface_attachment.html#network_interface_id NetworkInterfaceAttachmentA#network_interface_id}
    */
    readonly networkInterfaceId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_interface_attachment.html aws_network_interface_attachment}
  */
  export class NetworkInterfaceAttachmentA extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_network_interface_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_interface_attachment.html aws_network_interface_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkInterfaceAttachmentAConfig
    */
    public constructor(scope: Construct, id: string, config: NetworkInterfaceAttachmentAConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_network_interface_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._deviceIndex = config.deviceIndex;
      this._instanceId = config.instanceId;
      this._networkInterfaceId = config.networkInterfaceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // attachment_id - computed: true, optional: false, required: false
    public get attachmentId() {
      return this.getStringAttribute('attachment_id');
    }

    // device_index - computed: false, optional: false, required: true
    private _deviceIndex?: number; 
    public get deviceIndex() {
      return this.getNumberAttribute('device_index');
    }
    public set deviceIndex(value: number) {
      this._deviceIndex = value;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceIndexInput() {
      return this._deviceIndex
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_id - computed: false, optional: false, required: true
    private _instanceId?: string; 
    public get instanceId() {
      return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string) {
      this._instanceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
      return this._instanceId
    }

    // network_interface_id - computed: false, optional: false, required: true
    private _networkInterfaceId?: string; 
    public get networkInterfaceId() {
      return this.getStringAttribute('network_interface_id');
    }
    public set networkInterfaceId(value: string) {
      this._networkInterfaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceIdInput() {
      return this._networkInterfaceId
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        device_index: cdktf.numberToTerraform(this._deviceIndex),
        instance_id: cdktf.stringToTerraform(this._instanceId),
        network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      };
    }
  }
  export interface NetworkInterfaceSgAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface_sg_attachment.html#network_interface_id NetworkInterfaceSgAttachment#network_interface_id}
    */
    readonly networkInterfaceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface_sg_attachment.html#security_group_id NetworkInterfaceSgAttachment#security_group_id}
    */
    readonly securityGroupId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_interface_sg_attachment.html aws_network_interface_sg_attachment}
  */
  export class NetworkInterfaceSgAttachment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_network_interface_sg_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_interface_sg_attachment.html aws_network_interface_sg_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkInterfaceSgAttachmentConfig
    */
    public constructor(scope: Construct, id: string, config: NetworkInterfaceSgAttachmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_network_interface_sg_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._networkInterfaceId = config.networkInterfaceId;
      this._securityGroupId = config.securityGroupId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // network_interface_id - computed: false, optional: false, required: true
    private _networkInterfaceId?: string; 
    public get networkInterfaceId() {
      return this.getStringAttribute('network_interface_id');
    }
    public set networkInterfaceId(value: string) {
      this._networkInterfaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceIdInput() {
      return this._networkInterfaceId
    }

    // security_group_id - computed: false, optional: false, required: true
    private _securityGroupId?: string; 
    public get securityGroupId() {
      return this.getStringAttribute('security_group_id');
    }
    public set securityGroupId(value: string) {
      this._securityGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdInput() {
      return this._securityGroupId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
        security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      };
    }
  }
  export interface RouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#carrier_gateway_id Route#carrier_gateway_id}
    */
    readonly carrierGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#destination_cidr_block Route#destination_cidr_block}
    */
    readonly destinationCidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#destination_ipv6_cidr_block Route#destination_ipv6_cidr_block}
    */
    readonly destinationIpv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#destination_prefix_list_id Route#destination_prefix_list_id}
    */
    readonly destinationPrefixListId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#egress_only_gateway_id Route#egress_only_gateway_id}
    */
    readonly egressOnlyGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#gateway_id Route#gateway_id}
    */
    readonly gatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#instance_id Route#instance_id}
    */
    readonly instanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#local_gateway_id Route#local_gateway_id}
    */
    readonly localGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#nat_gateway_id Route#nat_gateway_id}
    */
    readonly natGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#network_interface_id Route#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#route_table_id Route#route_table_id}
    */
    readonly routeTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#transit_gateway_id Route#transit_gateway_id}
    */
    readonly transitGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#vpc_endpoint_id Route#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#vpc_peering_connection_id Route#vpc_peering_connection_id}
    */
    readonly vpcPeeringConnectionId?: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#timeouts Route#timeouts}
    */
    readonly timeouts?: RouteTimeouts;
  }
  export interface RouteTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#create Route#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#delete Route#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route.html#update Route#update}
    */
    readonly update?: string;
  }

  function routeTimeoutsToTerraform(struct?: RouteTimeoutsOutputReference | RouteTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class RouteTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route.html aws_route}
  */
  export class Route extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route.html aws_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RouteConfig
    */
    public constructor(scope: Construct, id: string, config: RouteConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._carrierGatewayId = config.carrierGatewayId;
      this._destinationCidrBlock = config.destinationCidrBlock;
      this._destinationIpv6CidrBlock = config.destinationIpv6CidrBlock;
      this._destinationPrefixListId = config.destinationPrefixListId;
      this._egressOnlyGatewayId = config.egressOnlyGatewayId;
      this._gatewayId = config.gatewayId;
      this._instanceId = config.instanceId;
      this._localGatewayId = config.localGatewayId;
      this._natGatewayId = config.natGatewayId;
      this._networkInterfaceId = config.networkInterfaceId;
      this._routeTableId = config.routeTableId;
      this._transitGatewayId = config.transitGatewayId;
      this._vpcEndpointId = config.vpcEndpointId;
      this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // carrier_gateway_id - computed: false, optional: true, required: false
    private _carrierGatewayId?: string | undefined; 
    public get carrierGatewayId() {
      return this.getStringAttribute('carrier_gateway_id');
    }
    public set carrierGatewayId(value: string | undefined) {
      this._carrierGatewayId = value;
    }
    public resetCarrierGatewayId() {
      this._carrierGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get carrierGatewayIdInput() {
      return this._carrierGatewayId
    }

    // destination_cidr_block - computed: false, optional: true, required: false
    private _destinationCidrBlock?: string | undefined; 
    public get destinationCidrBlock() {
      return this.getStringAttribute('destination_cidr_block');
    }
    public set destinationCidrBlock(value: string | undefined) {
      this._destinationCidrBlock = value;
    }
    public resetDestinationCidrBlock() {
      this._destinationCidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationCidrBlockInput() {
      return this._destinationCidrBlock
    }

    // destination_ipv6_cidr_block - computed: false, optional: true, required: false
    private _destinationIpv6CidrBlock?: string | undefined; 
    public get destinationIpv6CidrBlock() {
      return this.getStringAttribute('destination_ipv6_cidr_block');
    }
    public set destinationIpv6CidrBlock(value: string | undefined) {
      this._destinationIpv6CidrBlock = value;
    }
    public resetDestinationIpv6CidrBlock() {
      this._destinationIpv6CidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationIpv6CidrBlockInput() {
      return this._destinationIpv6CidrBlock
    }

    // destination_prefix_list_id - computed: false, optional: true, required: false
    private _destinationPrefixListId?: string | undefined; 
    public get destinationPrefixListId() {
      return this.getStringAttribute('destination_prefix_list_id');
    }
    public set destinationPrefixListId(value: string | undefined) {
      this._destinationPrefixListId = value;
    }
    public resetDestinationPrefixListId() {
      this._destinationPrefixListId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPrefixListIdInput() {
      return this._destinationPrefixListId
    }

    // egress_only_gateway_id - computed: false, optional: true, required: false
    private _egressOnlyGatewayId?: string | undefined; 
    public get egressOnlyGatewayId() {
      return this.getStringAttribute('egress_only_gateway_id');
    }
    public set egressOnlyGatewayId(value: string | undefined) {
      this._egressOnlyGatewayId = value;
    }
    public resetEgressOnlyGatewayId() {
      this._egressOnlyGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressOnlyGatewayIdInput() {
      return this._egressOnlyGatewayId
    }

    // gateway_id - computed: false, optional: true, required: false
    private _gatewayId?: string | undefined; 
    public get gatewayId() {
      return this.getStringAttribute('gateway_id');
    }
    public set gatewayId(value: string | undefined) {
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

    // instance_id - computed: true, optional: true, required: false
    private _instanceId?: string | undefined; 
    public get instanceId() {
      return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string | undefined) {
      this._instanceId = value;
    }
    public resetInstanceId() {
      this._instanceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
      return this._instanceId
    }

    // instance_owner_id - computed: true, optional: false, required: false
    public get instanceOwnerId() {
      return this.getStringAttribute('instance_owner_id');
    }

    // local_gateway_id - computed: false, optional: true, required: false
    private _localGatewayId?: string | undefined; 
    public get localGatewayId() {
      return this.getStringAttribute('local_gateway_id');
    }
    public set localGatewayId(value: string | undefined) {
      this._localGatewayId = value;
    }
    public resetLocalGatewayId() {
      this._localGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localGatewayIdInput() {
      return this._localGatewayId
    }

    // nat_gateway_id - computed: false, optional: true, required: false
    private _natGatewayId?: string | undefined; 
    public get natGatewayId() {
      return this.getStringAttribute('nat_gateway_id');
    }
    public set natGatewayId(value: string | undefined) {
      this._natGatewayId = value;
    }
    public resetNatGatewayId() {
      this._natGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get natGatewayIdInput() {
      return this._natGatewayId
    }

    // network_interface_id - computed: true, optional: true, required: false
    private _networkInterfaceId?: string | undefined; 
    public get networkInterfaceId() {
      return this.getStringAttribute('network_interface_id');
    }
    public set networkInterfaceId(value: string | undefined) {
      this._networkInterfaceId = value;
    }
    public resetNetworkInterfaceId() {
      this._networkInterfaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceIdInput() {
      return this._networkInterfaceId
    }

    // origin - computed: true, optional: false, required: false
    public get origin() {
      return this.getStringAttribute('origin');
    }

    // route_table_id - computed: false, optional: false, required: true
    private _routeTableId?: string; 
    public get routeTableId() {
      return this.getStringAttribute('route_table_id');
    }
    public set routeTableId(value: string) {
      this._routeTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routeTableIdInput() {
      return this._routeTableId
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }

    // transit_gateway_id - computed: false, optional: true, required: false
    private _transitGatewayId?: string | undefined; 
    public get transitGatewayId() {
      return this.getStringAttribute('transit_gateway_id');
    }
    public set transitGatewayId(value: string | undefined) {
      this._transitGatewayId = value;
    }
    public resetTransitGatewayId() {
      this._transitGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayIdInput() {
      return this._transitGatewayId
    }

    // vpc_endpoint_id - computed: false, optional: true, required: false
    private _vpcEndpointId?: string | undefined; 
    public get vpcEndpointId() {
      return this.getStringAttribute('vpc_endpoint_id');
    }
    public set vpcEndpointId(value: string | undefined) {
      this._vpcEndpointId = value;
    }
    public resetVpcEndpointId() {
      this._vpcEndpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointIdInput() {
      return this._vpcEndpointId
    }

    // vpc_peering_connection_id - computed: false, optional: true, required: false
    private _vpcPeeringConnectionId?: string | undefined; 
    public get vpcPeeringConnectionId() {
      return this.getStringAttribute('vpc_peering_connection_id');
    }
    public set vpcPeeringConnectionId(value: string | undefined) {
      this._vpcPeeringConnectionId = value;
    }
    public resetVpcPeeringConnectionId() {
      this._vpcPeeringConnectionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcPeeringConnectionIdInput() {
      return this._vpcPeeringConnectionId
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: RouteTimeouts | undefined; 
    private __timeoutsOutput = new RouteTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: RouteTimeouts | undefined) {
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
        carrier_gateway_id: cdktf.stringToTerraform(this._carrierGatewayId),
        destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
        destination_ipv6_cidr_block: cdktf.stringToTerraform(this._destinationIpv6CidrBlock),
        destination_prefix_list_id: cdktf.stringToTerraform(this._destinationPrefixListId),
        egress_only_gateway_id: cdktf.stringToTerraform(this._egressOnlyGatewayId),
        gateway_id: cdktf.stringToTerraform(this._gatewayId),
        instance_id: cdktf.stringToTerraform(this._instanceId),
        local_gateway_id: cdktf.stringToTerraform(this._localGatewayId),
        nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
        network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
        route_table_id: cdktf.stringToTerraform(this._routeTableId),
        transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
        vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
        vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
        timeouts: routeTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface RouteTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#propagating_vgws RouteTable#propagating_vgws}
    */
    readonly propagatingVgws?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#route RouteTable#route}
    */
    readonly route?: RouteTableRoute[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#tags RouteTable#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#tags_all RouteTable#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#vpc_id RouteTable#vpc_id}
    */
    readonly vpcId: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#timeouts RouteTable#timeouts}
    */
    readonly timeouts?: RouteTableTimeouts;
  }
  export interface RouteTableRoute {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#carrier_gateway_id RouteTable#carrier_gateway_id}
    */
    readonly carrierGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#cidr_block RouteTable#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#destination_prefix_list_id RouteTable#destination_prefix_list_id}
    */
    readonly destinationPrefixListId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#egress_only_gateway_id RouteTable#egress_only_gateway_id}
    */
    readonly egressOnlyGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#gateway_id RouteTable#gateway_id}
    */
    readonly gatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#instance_id RouteTable#instance_id}
    */
    readonly instanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#ipv6_cidr_block RouteTable#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#local_gateway_id RouteTable#local_gateway_id}
    */
    readonly localGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#nat_gateway_id RouteTable#nat_gateway_id}
    */
    readonly natGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#network_interface_id RouteTable#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#transit_gateway_id RouteTable#transit_gateway_id}
    */
    readonly transitGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#vpc_endpoint_id RouteTable#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#vpc_peering_connection_id RouteTable#vpc_peering_connection_id}
    */
    readonly vpcPeeringConnectionId?: string;
  }

  function routeTableRouteToTerraform(struct?: RouteTableRoute): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      carrier_gateway_id: struct!.carrierGatewayId === undefined ? null : cdktf.stringToTerraform(struct!.carrierGatewayId),
      cidr_block: struct!.cidrBlock === undefined ? null : cdktf.stringToTerraform(struct!.cidrBlock),
      destination_prefix_list_id: struct!.destinationPrefixListId === undefined ? null : cdktf.stringToTerraform(struct!.destinationPrefixListId),
      egress_only_gateway_id: struct!.egressOnlyGatewayId === undefined ? null : cdktf.stringToTerraform(struct!.egressOnlyGatewayId),
      gateway_id: struct!.gatewayId === undefined ? null : cdktf.stringToTerraform(struct!.gatewayId),
      instance_id: struct!.instanceId === undefined ? null : cdktf.stringToTerraform(struct!.instanceId),
      ipv6_cidr_block: struct!.ipv6CidrBlock === undefined ? null : cdktf.stringToTerraform(struct!.ipv6CidrBlock),
      local_gateway_id: struct!.localGatewayId === undefined ? null : cdktf.stringToTerraform(struct!.localGatewayId),
      nat_gateway_id: struct!.natGatewayId === undefined ? null : cdktf.stringToTerraform(struct!.natGatewayId),
      network_interface_id: struct!.networkInterfaceId === undefined ? null : cdktf.stringToTerraform(struct!.networkInterfaceId),
      transit_gateway_id: struct!.transitGatewayId === undefined ? null : cdktf.stringToTerraform(struct!.transitGatewayId),
      vpc_endpoint_id: struct!.vpcEndpointId === undefined ? null : cdktf.stringToTerraform(struct!.vpcEndpointId),
      vpc_peering_connection_id: struct!.vpcPeeringConnectionId === undefined ? null : cdktf.stringToTerraform(struct!.vpcPeeringConnectionId),
    }
  }

  export interface RouteTableTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#create RouteTable#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#delete RouteTable#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#update RouteTable#update}
    */
    readonly update?: string;
  }

  function routeTableTimeoutsToTerraform(struct?: RouteTableTimeoutsOutputReference | RouteTableTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class RouteTableTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route_table.html aws_route_table}
  */
  export class RouteTable extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route_table";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route_table.html aws_route_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RouteTableConfig
    */
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
      this._tagsAll = config.tagsAll;
      this._vpcId = config.vpcId;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // propagating_vgws - computed: true, optional: true, required: false
    private _propagatingVgws?: string[] | undefined; 
    public get propagatingVgws() {
      return this.getListAttribute('propagating_vgws');
    }
    public set propagatingVgws(value: string[] | undefined) {
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
    private _route?: RouteTableRoute[] | undefined; 
    public get route() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('route') as any;
    }
    public set route(value: RouteTableRoute[] | undefined) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
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

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: RouteTableTimeouts | undefined; 
    private __timeoutsOutput = new RouteTableTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: RouteTableTimeouts | undefined) {
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
        propagating_vgws: cdktf.listMapper(cdktf.stringToTerraform)(this._propagatingVgws),
        route: cdktf.listMapper(routeTableRouteToTerraform)(this._route),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        timeouts: routeTableTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface RouteTableAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table_association.html#gateway_id RouteTableAssociation#gateway_id}
    */
    readonly gatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table_association.html#route_table_id RouteTableAssociation#route_table_id}
    */
    readonly routeTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table_association.html#subnet_id RouteTableAssociation#subnet_id}
    */
    readonly subnetId?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route_table_association.html aws_route_table_association}
  */
  export class RouteTableAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route_table_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route_table_association.html aws_route_table_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RouteTableAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: RouteTableAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route_table_association',
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
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // gateway_id - computed: false, optional: true, required: false
    private _gatewayId?: string | undefined; 
    public get gatewayId() {
      return this.getStringAttribute('gateway_id');
    }
    public set gatewayId(value: string | undefined) {
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

    // route_table_id - computed: false, optional: false, required: true
    private _routeTableId?: string; 
    public get routeTableId() {
      return this.getStringAttribute('route_table_id');
    }
    public set routeTableId(value: string) {
      this._routeTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routeTableIdInput() {
      return this._routeTableId
    }

    // subnet_id - computed: false, optional: true, required: false
    private _subnetId?: string | undefined; 
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string | undefined) {
      this._subnetId = value;
    }
    public resetSubnetId() {
      this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
      return this._subnetId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        gateway_id: cdktf.stringToTerraform(this._gatewayId),
        route_table_id: cdktf.stringToTerraform(this._routeTableId),
        subnet_id: cdktf.stringToTerraform(this._subnetId),
      };
    }
  }
  export interface SecurityGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#description SecurityGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#egress SecurityGroup#egress}
    */
    readonly egress?: SecurityGroupEgress[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#ingress SecurityGroup#ingress}
    */
    readonly ingress?: SecurityGroupIngress[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#name SecurityGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#name_prefix SecurityGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#revoke_rules_on_delete SecurityGroup#revoke_rules_on_delete}
    */
    readonly revokeRulesOnDelete?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#tags SecurityGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#tags_all SecurityGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#vpc_id SecurityGroup#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#timeouts SecurityGroup#timeouts}
    */
    readonly timeouts?: SecurityGroupTimeouts;
  }
  export interface SecurityGroupEgress {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#cidr_blocks SecurityGroup#cidr_blocks}
    */
    readonly cidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#description SecurityGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#from_port SecurityGroup#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}
    */
    readonly ipv6CidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#prefix_list_ids SecurityGroup#prefix_list_ids}
    */
    readonly prefixListIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#protocol SecurityGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#security_groups SecurityGroup#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#self SecurityGroup#self}
    */
    readonly selfAttribute?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#to_port SecurityGroup#to_port}
    */
    readonly toPort?: number;
  }

  function securityGroupEgressToTerraform(struct?: SecurityGroupEgress): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cidr_blocks: struct!.cidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrBlocks),
      description: struct!.description === undefined ? null : cdktf.stringToTerraform(struct!.description),
      from_port: struct!.fromPort === undefined ? null : cdktf.numberToTerraform(struct!.fromPort),
      ipv6_cidr_blocks: struct!.ipv6CidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipv6CidrBlocks),
      prefix_list_ids: struct!.prefixListIds === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.prefixListIds),
      protocol: struct!.protocol === undefined ? null : cdktf.stringToTerraform(struct!.protocol),
      security_groups: struct!.securityGroups === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
      self: struct!.selfAttribute === undefined ? null : cdktf.booleanToTerraform(struct!.selfAttribute),
      to_port: struct!.toPort === undefined ? null : cdktf.numberToTerraform(struct!.toPort),
    }
  }

  export interface SecurityGroupIngress {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#cidr_blocks SecurityGroup#cidr_blocks}
    */
    readonly cidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#description SecurityGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#from_port SecurityGroup#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}
    */
    readonly ipv6CidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#prefix_list_ids SecurityGroup#prefix_list_ids}
    */
    readonly prefixListIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#protocol SecurityGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#security_groups SecurityGroup#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#self SecurityGroup#self}
    */
    readonly selfAttribute?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#to_port SecurityGroup#to_port}
    */
    readonly toPort?: number;
  }

  function securityGroupIngressToTerraform(struct?: SecurityGroupIngress): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cidr_blocks: struct!.cidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrBlocks),
      description: struct!.description === undefined ? null : cdktf.stringToTerraform(struct!.description),
      from_port: struct!.fromPort === undefined ? null : cdktf.numberToTerraform(struct!.fromPort),
      ipv6_cidr_blocks: struct!.ipv6CidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipv6CidrBlocks),
      prefix_list_ids: struct!.prefixListIds === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.prefixListIds),
      protocol: struct!.protocol === undefined ? null : cdktf.stringToTerraform(struct!.protocol),
      security_groups: struct!.securityGroups === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
      self: struct!.selfAttribute === undefined ? null : cdktf.booleanToTerraform(struct!.selfAttribute),
      to_port: struct!.toPort === undefined ? null : cdktf.numberToTerraform(struct!.toPort),
    }
  }

  export interface SecurityGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#create SecurityGroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#delete SecurityGroup#delete}
    */
    readonly delete?: string;
  }

  function securityGroupTimeoutsToTerraform(struct?: SecurityGroupTimeoutsOutputReference | SecurityGroupTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class SecurityGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/security_group.html aws_security_group}
  */
  export class SecurityGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_security_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/security_group.html aws_security_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityGroupConfig = {}
    */
    public constructor(scope: Construct, id: string, config: SecurityGroupConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_security_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._egress = config.egress;
      this._ingress = config.ingress;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._revokeRulesOnDelete = config.revokeRulesOnDelete;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpcId = config.vpcId;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // egress - computed: true, optional: true, required: false
    private _egress?: SecurityGroupEgress[] | undefined; 
    public get egress() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('egress') as any;
    }
    public set egress(value: SecurityGroupEgress[] | undefined) {
      this._egress = value;
    }
    public resetEgress() {
      this._egress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressInput() {
      return this._egress
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ingress - computed: true, optional: true, required: false
    private _ingress?: SecurityGroupIngress[] | undefined; 
    public get ingress() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ingress') as any;
    }
    public set ingress(value: SecurityGroupIngress[] | undefined) {
      this._ingress = value;
    }
    public resetIngress() {
      this._ingress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ingressInput() {
      return this._ingress
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // revoke_rules_on_delete - computed: false, optional: true, required: false
    private _revokeRulesOnDelete?: boolean | cdktf.IResolvable | undefined; 
    public get revokeRulesOnDelete() {
      return this.getBooleanAttribute('revoke_rules_on_delete') as any;
    }
    public set revokeRulesOnDelete(value: boolean | cdktf.IResolvable | undefined) {
      this._revokeRulesOnDelete = value;
    }
    public resetRevokeRulesOnDelete() {
      this._revokeRulesOnDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get revokeRulesOnDeleteInput() {
      return this._revokeRulesOnDelete
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vpc_id - computed: true, optional: true, required: false
    private _vpcId?: string | undefined; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string | undefined) {
      this._vpcId = value;
    }
    public resetVpcId() {
      this._vpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
      return this._vpcId
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: SecurityGroupTimeouts | undefined; 
    private __timeoutsOutput = new SecurityGroupTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: SecurityGroupTimeouts | undefined) {
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
        description: cdktf.stringToTerraform(this._description),
        egress: cdktf.listMapper(securityGroupEgressToTerraform)(this._egress),
        ingress: cdktf.listMapper(securityGroupIngressToTerraform)(this._ingress),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        revoke_rules_on_delete: cdktf.booleanToTerraform(this._revokeRulesOnDelete),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        timeouts: securityGroupTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface SecurityGroupRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#cidr_blocks SecurityGroupRule#cidr_blocks}
    */
    readonly cidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#description SecurityGroupRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#from_port SecurityGroupRule#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#ipv6_cidr_blocks SecurityGroupRule#ipv6_cidr_blocks}
    */
    readonly ipv6CidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#prefix_list_ids SecurityGroupRule#prefix_list_ids}
    */
    readonly prefixListIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#protocol SecurityGroupRule#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#security_group_id SecurityGroupRule#security_group_id}
    */
    readonly securityGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#self SecurityGroupRule#self}
    */
    readonly selfAttribute?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#source_security_group_id SecurityGroupRule#source_security_group_id}
    */
    readonly sourceSecurityGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#to_port SecurityGroupRule#to_port}
    */
    readonly toPort: number;
    /**
    * Type of rule, ingress (inbound) or egress (outbound).
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#type SecurityGroupRule#type}
    */
    readonly type: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html aws_security_group_rule}
  */
  export class SecurityGroupRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_security_group_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html aws_security_group_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityGroupRuleConfig
    */
    public constructor(scope: Construct, id: string, config: SecurityGroupRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_security_group_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._cidrBlocks = config.cidrBlocks;
      this._description = config.description;
      this._fromPort = config.fromPort;
      this._ipv6CidrBlocks = config.ipv6CidrBlocks;
      this._prefixListIds = config.prefixListIds;
      this._protocol = config.protocol;
      this._securityGroupId = config.securityGroupId;
      this._self = config.selfAttribute;
      this._sourceSecurityGroupId = config.sourceSecurityGroupId;
      this._toPort = config.toPort;
      this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cidr_blocks - computed: false, optional: true, required: false
    private _cidrBlocks?: string[] | undefined; 
    public get cidrBlocks() {
      return this.getListAttribute('cidr_blocks');
    }
    public set cidrBlocks(value: string[] | undefined) {
      this._cidrBlocks = value;
    }
    public resetCidrBlocks() {
      this._cidrBlocks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrBlocksInput() {
      return this._cidrBlocks
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // from_port - computed: false, optional: false, required: true
    private _fromPort?: number; 
    public get fromPort() {
      return this.getNumberAttribute('from_port');
    }
    public set fromPort(value: number) {
      this._fromPort = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fromPortInput() {
      return this._fromPort
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ipv6_cidr_blocks - computed: false, optional: true, required: false
    private _ipv6CidrBlocks?: string[] | undefined; 
    public get ipv6CidrBlocks() {
      return this.getListAttribute('ipv6_cidr_blocks');
    }
    public set ipv6CidrBlocks(value: string[] | undefined) {
      this._ipv6CidrBlocks = value;
    }
    public resetIpv6CidrBlocks() {
      this._ipv6CidrBlocks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6CidrBlocksInput() {
      return this._ipv6CidrBlocks
    }

    // prefix_list_ids - computed: false, optional: true, required: false
    private _prefixListIds?: string[] | undefined; 
    public get prefixListIds() {
      return this.getListAttribute('prefix_list_ids');
    }
    public set prefixListIds(value: string[] | undefined) {
      this._prefixListIds = value;
    }
    public resetPrefixListIds() {
      this._prefixListIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixListIdsInput() {
      return this._prefixListIds
    }

    // protocol - computed: false, optional: false, required: true
    private _protocol?: string; 
    public get protocol() {
      return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
      this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
      return this._protocol
    }

    // security_group_id - computed: false, optional: false, required: true
    private _securityGroupId?: string; 
    public get securityGroupId() {
      return this.getStringAttribute('security_group_id');
    }
    public set securityGroupId(value: string) {
      this._securityGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdInput() {
      return this._securityGroupId
    }

    // self - computed: false, optional: true, required: false
    private _self?: boolean | cdktf.IResolvable | undefined; 
    public get selfAttribute() {
      return this.getBooleanAttribute('self') as any;
    }
    public set selfAttribute(value: boolean | cdktf.IResolvable | undefined) {
      this._self = value;
    }
    public resetSelfAttribute() {
      this._self = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfAttributeInput() {
      return this._self
    }

    // source_security_group_id - computed: true, optional: true, required: false
    private _sourceSecurityGroupId?: string | undefined; 
    public get sourceSecurityGroupId() {
      return this.getStringAttribute('source_security_group_id');
    }
    public set sourceSecurityGroupId(value: string | undefined) {
      this._sourceSecurityGroupId = value;
    }
    public resetSourceSecurityGroupId() {
      this._sourceSecurityGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceSecurityGroupIdInput() {
      return this._sourceSecurityGroupId
    }

    // to_port - computed: false, optional: false, required: true
    private _toPort?: number; 
    public get toPort() {
      return this.getNumberAttribute('to_port');
    }
    public set toPort(value: number) {
      this._toPort = value;
    }
    // Temporarily expose input value. Use with caution.
    public get toPortInput() {
      return this._toPort
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(this._cidrBlocks),
        description: cdktf.stringToTerraform(this._description),
        from_port: cdktf.numberToTerraform(this._fromPort),
        ipv6_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(this._ipv6CidrBlocks),
        prefix_list_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._prefixListIds),
        protocol: cdktf.stringToTerraform(this._protocol),
        security_group_id: cdktf.stringToTerraform(this._securityGroupId),
        self: cdktf.booleanToTerraform(this._self),
        source_security_group_id: cdktf.stringToTerraform(this._sourceSecurityGroupId),
        to_port: cdktf.numberToTerraform(this._toPort),
        type: cdktf.stringToTerraform(this._type),
      };
    }
  }
  export interface SubnetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#assign_ipv6_address_on_creation Subnet#assign_ipv6_address_on_creation}
    */
    readonly assignIpv6AddressOnCreation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#availability_zone Subnet#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#availability_zone_id Subnet#availability_zone_id}
    */
    readonly availabilityZoneId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#cidr_block Subnet#cidr_block}
    */
    readonly cidrBlock: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#customer_owned_ipv4_pool Subnet#customer_owned_ipv4_pool}
    */
    readonly customerOwnedIpv4Pool?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#ipv6_cidr_block Subnet#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#map_customer_owned_ip_on_launch Subnet#map_customer_owned_ip_on_launch}
    */
    readonly mapCustomerOwnedIpOnLaunch?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#map_public_ip_on_launch Subnet#map_public_ip_on_launch}
    */
    readonly mapPublicIpOnLaunch?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#outpost_arn Subnet#outpost_arn}
    */
    readonly outpostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#tags Subnet#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#tags_all Subnet#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#vpc_id Subnet#vpc_id}
    */
    readonly vpcId: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#timeouts Subnet#timeouts}
    */
    readonly timeouts?: SubnetTimeouts;
  }
  export interface SubnetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#create Subnet#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#delete Subnet#delete}
    */
    readonly delete?: string;
  }

  function subnetTimeoutsToTerraform(struct?: SubnetTimeoutsOutputReference | SubnetTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class SubnetTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/subnet.html aws_subnet}
  */
  export class Subnet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_subnet";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/subnet.html aws_subnet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SubnetConfig
    */
    public constructor(scope: Construct, id: string, config: SubnetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_subnet',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._assignIpv6AddressOnCreation = config.assignIpv6AddressOnCreation;
      this._availabilityZone = config.availabilityZone;
      this._availabilityZoneId = config.availabilityZoneId;
      this._cidrBlock = config.cidrBlock;
      this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
      this._ipv6CidrBlock = config.ipv6CidrBlock;
      this._mapCustomerOwnedIpOnLaunch = config.mapCustomerOwnedIpOnLaunch;
      this._mapPublicIpOnLaunch = config.mapPublicIpOnLaunch;
      this._outpostArn = config.outpostArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpcId = config.vpcId;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // assign_ipv6_address_on_creation - computed: false, optional: true, required: false
    private _assignIpv6AddressOnCreation?: boolean | cdktf.IResolvable | undefined; 
    public get assignIpv6AddressOnCreation() {
      return this.getBooleanAttribute('assign_ipv6_address_on_creation') as any;
    }
    public set assignIpv6AddressOnCreation(value: boolean | cdktf.IResolvable | undefined) {
      this._assignIpv6AddressOnCreation = value;
    }
    public resetAssignIpv6AddressOnCreation() {
      this._assignIpv6AddressOnCreation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assignIpv6AddressOnCreationInput() {
      return this._assignIpv6AddressOnCreation
    }

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string | undefined; 
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string | undefined) {
      this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
      this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
      return this._availabilityZone
    }

    // availability_zone_id - computed: true, optional: true, required: false
    private _availabilityZoneId?: string | undefined; 
    public get availabilityZoneId() {
      return this.getStringAttribute('availability_zone_id');
    }
    public set availabilityZoneId(value: string | undefined) {
      this._availabilityZoneId = value;
    }
    public resetAvailabilityZoneId() {
      this._availabilityZoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneIdInput() {
      return this._availabilityZoneId
    }

    // cidr_block - computed: false, optional: false, required: true
    private _cidrBlock?: string; 
    public get cidrBlock() {
      return this.getStringAttribute('cidr_block');
    }
    public set cidrBlock(value: string) {
      this._cidrBlock = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrBlockInput() {
      return this._cidrBlock
    }

    // customer_owned_ipv4_pool - computed: false, optional: true, required: false
    private _customerOwnedIpv4Pool?: string | undefined; 
    public get customerOwnedIpv4Pool() {
      return this.getStringAttribute('customer_owned_ipv4_pool');
    }
    public set customerOwnedIpv4Pool(value: string | undefined) {
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

    // ipv6_cidr_block - computed: false, optional: true, required: false
    private _ipv6CidrBlock?: string | undefined; 
    public get ipv6CidrBlock() {
      return this.getStringAttribute('ipv6_cidr_block');
    }
    public set ipv6CidrBlock(value: string | undefined) {
      this._ipv6CidrBlock = value;
    }
    public resetIpv6CidrBlock() {
      this._ipv6CidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6CidrBlockInput() {
      return this._ipv6CidrBlock
    }

    // ipv6_cidr_block_association_id - computed: true, optional: false, required: false
    public get ipv6CidrBlockAssociationId() {
      return this.getStringAttribute('ipv6_cidr_block_association_id');
    }

    // map_customer_owned_ip_on_launch - computed: false, optional: true, required: false
    private _mapCustomerOwnedIpOnLaunch?: boolean | cdktf.IResolvable | undefined; 
    public get mapCustomerOwnedIpOnLaunch() {
      return this.getBooleanAttribute('map_customer_owned_ip_on_launch') as any;
    }
    public set mapCustomerOwnedIpOnLaunch(value: boolean | cdktf.IResolvable | undefined) {
      this._mapCustomerOwnedIpOnLaunch = value;
    }
    public resetMapCustomerOwnedIpOnLaunch() {
      this._mapCustomerOwnedIpOnLaunch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mapCustomerOwnedIpOnLaunchInput() {
      return this._mapCustomerOwnedIpOnLaunch
    }

    // map_public_ip_on_launch - computed: false, optional: true, required: false
    private _mapPublicIpOnLaunch?: boolean | cdktf.IResolvable | undefined; 
    public get mapPublicIpOnLaunch() {
      return this.getBooleanAttribute('map_public_ip_on_launch') as any;
    }
    public set mapPublicIpOnLaunch(value: boolean | cdktf.IResolvable | undefined) {
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
    private _outpostArn?: string | undefined; 
    public get outpostArn() {
      return this.getStringAttribute('outpost_arn');
    }
    public set outpostArn(value: string | undefined) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
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

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: SubnetTimeouts | undefined; 
    private __timeoutsOutput = new SubnetTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: SubnetTimeouts | undefined) {
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
        assign_ipv6_address_on_creation: cdktf.booleanToTerraform(this._assignIpv6AddressOnCreation),
        availability_zone: cdktf.stringToTerraform(this._availabilityZone),
        availability_zone_id: cdktf.stringToTerraform(this._availabilityZoneId),
        cidr_block: cdktf.stringToTerraform(this._cidrBlock),
        customer_owned_ipv4_pool: cdktf.stringToTerraform(this._customerOwnedIpv4Pool),
        ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
        map_customer_owned_ip_on_launch: cdktf.booleanToTerraform(this._mapCustomerOwnedIpOnLaunch),
        map_public_ip_on_launch: cdktf.booleanToTerraform(this._mapPublicIpOnLaunch),
        outpost_arn: cdktf.stringToTerraform(this._outpostArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        timeouts: subnetTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface VpcConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#assign_generated_ipv6_cidr_block Vpc#assign_generated_ipv6_cidr_block}
    */
    readonly assignGeneratedIpv6CidrBlock?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#cidr_block Vpc#cidr_block}
    */
    readonly cidrBlock: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#enable_classiclink Vpc#enable_classiclink}
    */
    readonly enableClassiclink?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#enable_classiclink_dns_support Vpc#enable_classiclink_dns_support}
    */
    readonly enableClassiclinkDnsSupport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#enable_dns_hostnames Vpc#enable_dns_hostnames}
    */
    readonly enableDnsHostnames?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#enable_dns_support Vpc#enable_dns_support}
    */
    readonly enableDnsSupport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#instance_tenancy Vpc#instance_tenancy}
    */
    readonly instanceTenancy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#tags Vpc#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#tags_all Vpc#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc.html aws_vpc}
  */
  export class Vpc extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpc";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc.html aws_vpc} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcConfig
    */
    public constructor(scope: Construct, id: string, config: VpcConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_vpc',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._assignGeneratedIpv6CidrBlock = config.assignGeneratedIpv6CidrBlock;
      this._cidrBlock = config.cidrBlock;
      this._enableClassiclink = config.enableClassiclink;
      this._enableClassiclinkDnsSupport = config.enableClassiclinkDnsSupport;
      this._enableDnsHostnames = config.enableDnsHostnames;
      this._enableDnsSupport = config.enableDnsSupport;
      this._instanceTenancy = config.instanceTenancy;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // assign_generated_ipv6_cidr_block - computed: false, optional: true, required: false
    private _assignGeneratedIpv6CidrBlock?: boolean | cdktf.IResolvable | undefined; 
    public get assignGeneratedIpv6CidrBlock() {
      return this.getBooleanAttribute('assign_generated_ipv6_cidr_block') as any;
    }
    public set assignGeneratedIpv6CidrBlock(value: boolean | cdktf.IResolvable | undefined) {
      this._assignGeneratedIpv6CidrBlock = value;
    }
    public resetAssignGeneratedIpv6CidrBlock() {
      this._assignGeneratedIpv6CidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assignGeneratedIpv6CidrBlockInput() {
      return this._assignGeneratedIpv6CidrBlock
    }

    // cidr_block - computed: false, optional: false, required: true
    private _cidrBlock?: string; 
    public get cidrBlock() {
      return this.getStringAttribute('cidr_block');
    }
    public set cidrBlock(value: string) {
      this._cidrBlock = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrBlockInput() {
      return this._cidrBlock
    }

    // default_network_acl_id - computed: true, optional: false, required: false
    public get defaultNetworkAclId() {
      return this.getStringAttribute('default_network_acl_id');
    }

    // default_route_table_id - computed: true, optional: false, required: false
    public get defaultRouteTableId() {
      return this.getStringAttribute('default_route_table_id');
    }

    // default_security_group_id - computed: true, optional: false, required: false
    public get defaultSecurityGroupId() {
      return this.getStringAttribute('default_security_group_id');
    }

    // dhcp_options_id - computed: true, optional: false, required: false
    public get dhcpOptionsId() {
      return this.getStringAttribute('dhcp_options_id');
    }

    // enable_classiclink - computed: true, optional: true, required: false
    private _enableClassiclink?: boolean | cdktf.IResolvable | undefined; 
    public get enableClassiclink() {
      return this.getBooleanAttribute('enable_classiclink') as any;
    }
    public set enableClassiclink(value: boolean | cdktf.IResolvable | undefined) {
      this._enableClassiclink = value;
    }
    public resetEnableClassiclink() {
      this._enableClassiclink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableClassiclinkInput() {
      return this._enableClassiclink
    }

    // enable_classiclink_dns_support - computed: true, optional: true, required: false
    private _enableClassiclinkDnsSupport?: boolean | cdktf.IResolvable | undefined; 
    public get enableClassiclinkDnsSupport() {
      return this.getBooleanAttribute('enable_classiclink_dns_support') as any;
    }
    public set enableClassiclinkDnsSupport(value: boolean | cdktf.IResolvable | undefined) {
      this._enableClassiclinkDnsSupport = value;
    }
    public resetEnableClassiclinkDnsSupport() {
      this._enableClassiclinkDnsSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableClassiclinkDnsSupportInput() {
      return this._enableClassiclinkDnsSupport
    }

    // enable_dns_hostnames - computed: true, optional: true, required: false
    private _enableDnsHostnames?: boolean | cdktf.IResolvable | undefined; 
    public get enableDnsHostnames() {
      return this.getBooleanAttribute('enable_dns_hostnames') as any;
    }
    public set enableDnsHostnames(value: boolean | cdktf.IResolvable | undefined) {
      this._enableDnsHostnames = value;
    }
    public resetEnableDnsHostnames() {
      this._enableDnsHostnames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableDnsHostnamesInput() {
      return this._enableDnsHostnames
    }

    // enable_dns_support - computed: false, optional: true, required: false
    private _enableDnsSupport?: boolean | cdktf.IResolvable | undefined; 
    public get enableDnsSupport() {
      return this.getBooleanAttribute('enable_dns_support') as any;
    }
    public set enableDnsSupport(value: boolean | cdktf.IResolvable | undefined) {
      this._enableDnsSupport = value;
    }
    public resetEnableDnsSupport() {
      this._enableDnsSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableDnsSupportInput() {
      return this._enableDnsSupport
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_tenancy - computed: false, optional: true, required: false
    private _instanceTenancy?: string | undefined; 
    public get instanceTenancy() {
      return this.getStringAttribute('instance_tenancy');
    }
    public set instanceTenancy(value: string | undefined) {
      this._instanceTenancy = value;
    }
    public resetInstanceTenancy() {
      this._instanceTenancy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTenancyInput() {
      return this._instanceTenancy
    }

    // ipv6_association_id - computed: true, optional: false, required: false
    public get ipv6AssociationId() {
      return this.getStringAttribute('ipv6_association_id');
    }

    // ipv6_cidr_block - computed: true, optional: false, required: false
    public get ipv6CidrBlock() {
      return this.getStringAttribute('ipv6_cidr_block');
    }

    // main_route_table_id - computed: true, optional: false, required: false
    public get mainRouteTableId() {
      return this.getStringAttribute('main_route_table_id');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        assign_generated_ipv6_cidr_block: cdktf.booleanToTerraform(this._assignGeneratedIpv6CidrBlock),
        cidr_block: cdktf.stringToTerraform(this._cidrBlock),
        enable_classiclink: cdktf.booleanToTerraform(this._enableClassiclink),
        enable_classiclink_dns_support: cdktf.booleanToTerraform(this._enableClassiclinkDnsSupport),
        enable_dns_hostnames: cdktf.booleanToTerraform(this._enableDnsHostnames),
        enable_dns_support: cdktf.booleanToTerraform(this._enableDnsSupport),
        instance_tenancy: cdktf.stringToTerraform(this._instanceTenancy),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface VpcDhcpOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html#domain_name VpcDhcpOptions#domain_name}
    */
    readonly domainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html#domain_name_servers VpcDhcpOptions#domain_name_servers}
    */
    readonly domainNameServers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html#netbios_name_servers VpcDhcpOptions#netbios_name_servers}
    */
    readonly netbiosNameServers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html#netbios_node_type VpcDhcpOptions#netbios_node_type}
    */
    readonly netbiosNodeType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html#ntp_servers VpcDhcpOptions#ntp_servers}
    */
    readonly ntpServers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html#tags VpcDhcpOptions#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html#tags_all VpcDhcpOptions#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html aws_vpc_dhcp_options}
  */
  export class VpcDhcpOptions extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpc_dhcp_options";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html aws_vpc_dhcp_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcDhcpOptionsConfig = {}
    */
    public constructor(scope: Construct, id: string, config: VpcDhcpOptionsConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_vpc_dhcp_options',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._domainName = config.domainName;
      this._domainNameServers = config.domainNameServers;
      this._netbiosNameServers = config.netbiosNameServers;
      this._netbiosNodeType = config.netbiosNodeType;
      this._ntpServers = config.ntpServers;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // domain_name - computed: false, optional: true, required: false
    private _domainName?: string | undefined; 
    public get domainName() {
      return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string | undefined) {
      this._domainName = value;
    }
    public resetDomainName() {
      this._domainName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
      return this._domainName
    }

    // domain_name_servers - computed: false, optional: true, required: false
    private _domainNameServers?: string[] | undefined; 
    public get domainNameServers() {
      return this.getListAttribute('domain_name_servers');
    }
    public set domainNameServers(value: string[] | undefined) {
      this._domainNameServers = value;
    }
    public resetDomainNameServers() {
      this._domainNameServers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameServersInput() {
      return this._domainNameServers
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // netbios_name_servers - computed: false, optional: true, required: false
    private _netbiosNameServers?: string[] | undefined; 
    public get netbiosNameServers() {
      return this.getListAttribute('netbios_name_servers');
    }
    public set netbiosNameServers(value: string[] | undefined) {
      this._netbiosNameServers = value;
    }
    public resetNetbiosNameServers() {
      this._netbiosNameServers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get netbiosNameServersInput() {
      return this._netbiosNameServers
    }

    // netbios_node_type - computed: false, optional: true, required: false
    private _netbiosNodeType?: string | undefined; 
    public get netbiosNodeType() {
      return this.getStringAttribute('netbios_node_type');
    }
    public set netbiosNodeType(value: string | undefined) {
      this._netbiosNodeType = value;
    }
    public resetNetbiosNodeType() {
      this._netbiosNodeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get netbiosNodeTypeInput() {
      return this._netbiosNodeType
    }

    // ntp_servers - computed: false, optional: true, required: false
    private _ntpServers?: string[] | undefined; 
    public get ntpServers() {
      return this.getListAttribute('ntp_servers');
    }
    public set ntpServers(value: string[] | undefined) {
      this._ntpServers = value;
    }
    public resetNtpServers() {
      this._ntpServers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ntpServersInput() {
      return this._ntpServers
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        domain_name: cdktf.stringToTerraform(this._domainName),
        domain_name_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._domainNameServers),
        netbios_name_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._netbiosNameServers),
        netbios_node_type: cdktf.stringToTerraform(this._netbiosNodeType),
        ntp_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._ntpServers),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface VpcDhcpOptionsAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html#dhcp_options_id VpcDhcpOptionsAssociation#dhcp_options_id}
    */
    readonly dhcpOptionsId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html#vpc_id VpcDhcpOptionsAssociation#vpc_id}
    */
    readonly vpcId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html aws_vpc_dhcp_options_association}
  */
  export class VpcDhcpOptionsAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpc_dhcp_options_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html aws_vpc_dhcp_options_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcDhcpOptionsAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: VpcDhcpOptionsAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_vpc_dhcp_options_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dhcpOptionsId = config.dhcpOptionsId;
      this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // dhcp_options_id - computed: false, optional: false, required: true
    private _dhcpOptionsId?: string; 
    public get dhcpOptionsId() {
      return this.getStringAttribute('dhcp_options_id');
    }
    public set dhcpOptionsId(value: string) {
      this._dhcpOptionsId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dhcpOptionsIdInput() {
      return this._dhcpOptionsId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
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
        dhcp_options_id: cdktf.stringToTerraform(this._dhcpOptionsId),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
      };
    }
  }
  export interface VpcEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#auto_accept VpcEndpoint#auto_accept}
    */
    readonly autoAccept?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#policy VpcEndpoint#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#private_dns_enabled VpcEndpoint#private_dns_enabled}
    */
    readonly privateDnsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#route_table_ids VpcEndpoint#route_table_ids}
    */
    readonly routeTableIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#security_group_ids VpcEndpoint#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#service_name VpcEndpoint#service_name}
    */
    readonly serviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#subnet_ids VpcEndpoint#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#tags VpcEndpoint#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#tags_all VpcEndpoint#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#vpc_endpoint_type VpcEndpoint#vpc_endpoint_type}
    */
    readonly vpcEndpointType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#vpc_id VpcEndpoint#vpc_id}
    */
    readonly vpcId: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#timeouts VpcEndpoint#timeouts}
    */
    readonly timeouts?: VpcEndpointTimeouts;
  }
  export class VpcEndpointDnsEntry extends cdktf.ComplexComputedList {

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
      return this.getStringAttribute('dns_name');
    }

    // hosted_zone_id - computed: true, optional: false, required: false
    public get hostedZoneId() {
      return this.getStringAttribute('hosted_zone_id');
    }
  }
  export interface VpcEndpointTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#create VpcEndpoint#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#delete VpcEndpoint#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#update VpcEndpoint#update}
    */
    readonly update?: string;
  }

  function vpcEndpointTimeoutsToTerraform(struct?: VpcEndpointTimeoutsOutputReference | VpcEndpointTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class VpcEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html aws_vpc_endpoint}
  */
  export class VpcEndpoint extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpc_endpoint";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html aws_vpc_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointConfig
    */
    public constructor(scope: Construct, id: string, config: VpcEndpointConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_vpc_endpoint',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._autoAccept = config.autoAccept;
      this._policy = config.policy;
      this._privateDnsEnabled = config.privateDnsEnabled;
      this._routeTableIds = config.routeTableIds;
      this._securityGroupIds = config.securityGroupIds;
      this._serviceName = config.serviceName;
      this._subnetIds = config.subnetIds;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpcEndpointType = config.vpcEndpointType;
      this._vpcId = config.vpcId;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auto_accept - computed: false, optional: true, required: false
    private _autoAccept?: boolean | cdktf.IResolvable | undefined; 
    public get autoAccept() {
      return this.getBooleanAttribute('auto_accept') as any;
    }
    public set autoAccept(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAccept = value;
    }
    public resetAutoAccept() {
      this._autoAccept = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAcceptInput() {
      return this._autoAccept
    }

    // cidr_blocks - computed: true, optional: false, required: false
    public get cidrBlocks() {
      return this.getListAttribute('cidr_blocks');
    }

    // dns_entry - computed: true, optional: false, required: false
    public dnsEntry(index: string) {
      return new VpcEndpointDnsEntry(this, 'dns_entry', index);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // network_interface_ids - computed: true, optional: false, required: false
    public get networkInterfaceIds() {
      return this.getListAttribute('network_interface_ids');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // policy - computed: true, optional: true, required: false
    private _policy?: string | undefined; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string | undefined) {
      this._policy = value;
    }
    public resetPolicy() {
      this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // prefix_list_id - computed: true, optional: false, required: false
    public get prefixListId() {
      return this.getStringAttribute('prefix_list_id');
    }

    // private_dns_enabled - computed: false, optional: true, required: false
    private _privateDnsEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get privateDnsEnabled() {
      return this.getBooleanAttribute('private_dns_enabled') as any;
    }
    public set privateDnsEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._privateDnsEnabled = value;
    }
    public resetPrivateDnsEnabled() {
      this._privateDnsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateDnsEnabledInput() {
      return this._privateDnsEnabled
    }

    // requester_managed - computed: true, optional: false, required: false
    public get requesterManaged() {
      return this.getBooleanAttribute('requester_managed') as any;
    }

    // route_table_ids - computed: true, optional: true, required: false
    private _routeTableIds?: string[] | undefined; 
    public get routeTableIds() {
      return this.getListAttribute('route_table_ids');
    }
    public set routeTableIds(value: string[] | undefined) {
      this._routeTableIds = value;
    }
    public resetRouteTableIds() {
      this._routeTableIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routeTableIdsInput() {
      return this._routeTableIds
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[] | undefined; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[] | undefined) {
      this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
      this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
    }

    // service_name - computed: false, optional: false, required: true
    private _serviceName?: string; 
    public get serviceName() {
      return this.getStringAttribute('service_name');
    }
    public set serviceName(value: string) {
      this._serviceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNameInput() {
      return this._serviceName
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[] | undefined; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[] | undefined) {
      this._subnetIds = value;
    }
    public resetSubnetIds() {
      this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vpc_endpoint_type - computed: false, optional: true, required: false
    private _vpcEndpointType?: string | undefined; 
    public get vpcEndpointType() {
      return this.getStringAttribute('vpc_endpoint_type');
    }
    public set vpcEndpointType(value: string | undefined) {
      this._vpcEndpointType = value;
    }
    public resetVpcEndpointType() {
      this._vpcEndpointType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointTypeInput() {
      return this._vpcEndpointType
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
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

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: VpcEndpointTimeouts | undefined; 
    private __timeoutsOutput = new VpcEndpointTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: VpcEndpointTimeouts | undefined) {
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
        auto_accept: cdktf.booleanToTerraform(this._autoAccept),
        policy: cdktf.stringToTerraform(this._policy),
        private_dns_enabled: cdktf.booleanToTerraform(this._privateDnsEnabled),
        route_table_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._routeTableIds),
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
        service_name: cdktf.stringToTerraform(this._serviceName),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_endpoint_type: cdktf.stringToTerraform(this._vpcEndpointType),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        timeouts: vpcEndpointTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface VpcEndpointConnectionNotificationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html#connection_events VpcEndpointConnectionNotification#connection_events}
    */
    readonly connectionEvents: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html#connection_notification_arn VpcEndpointConnectionNotification#connection_notification_arn}
    */
    readonly connectionNotificationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html#vpc_endpoint_id VpcEndpointConnectionNotification#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html#vpc_endpoint_service_id VpcEndpointConnectionNotification#vpc_endpoint_service_id}
    */
    readonly vpcEndpointServiceId?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html aws_vpc_endpoint_connection_notification}
  */
  export class VpcEndpointConnectionNotification extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpc_endpoint_connection_notification";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html aws_vpc_endpoint_connection_notification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointConnectionNotificationConfig
    */
    public constructor(scope: Construct, id: string, config: VpcEndpointConnectionNotificationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_vpc_endpoint_connection_notification',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._connectionEvents = config.connectionEvents;
      this._connectionNotificationArn = config.connectionNotificationArn;
      this._vpcEndpointId = config.vpcEndpointId;
      this._vpcEndpointServiceId = config.vpcEndpointServiceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // connection_events - computed: false, optional: false, required: true
    private _connectionEvents?: string[]; 
    public get connectionEvents() {
      return this.getListAttribute('connection_events');
    }
    public set connectionEvents(value: string[]) {
      this._connectionEvents = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionEventsInput() {
      return this._connectionEvents
    }

    // connection_notification_arn - computed: false, optional: false, required: true
    private _connectionNotificationArn?: string; 
    public get connectionNotificationArn() {
      return this.getStringAttribute('connection_notification_arn');
    }
    public set connectionNotificationArn(value: string) {
      this._connectionNotificationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionNotificationArnInput() {
      return this._connectionNotificationArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // notification_type - computed: true, optional: false, required: false
    public get notificationType() {
      return this.getStringAttribute('notification_type');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }

    // vpc_endpoint_id - computed: false, optional: true, required: false
    private _vpcEndpointId?: string | undefined; 
    public get vpcEndpointId() {
      return this.getStringAttribute('vpc_endpoint_id');
    }
    public set vpcEndpointId(value: string | undefined) {
      this._vpcEndpointId = value;
    }
    public resetVpcEndpointId() {
      this._vpcEndpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointIdInput() {
      return this._vpcEndpointId
    }

    // vpc_endpoint_service_id - computed: false, optional: true, required: false
    private _vpcEndpointServiceId?: string | undefined; 
    public get vpcEndpointServiceId() {
      return this.getStringAttribute('vpc_endpoint_service_id');
    }
    public set vpcEndpointServiceId(value: string | undefined) {
      this._vpcEndpointServiceId = value;
    }
    public resetVpcEndpointServiceId() {
      this._vpcEndpointServiceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointServiceIdInput() {
      return this._vpcEndpointServiceId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        connection_events: cdktf.listMapper(cdktf.stringToTerraform)(this._connectionEvents),
        connection_notification_arn: cdktf.stringToTerraform(this._connectionNotificationArn),
        vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
        vpc_endpoint_service_id: cdktf.stringToTerraform(this._vpcEndpointServiceId),
      };
    }
  }
  export interface VpcEndpointRouteTableAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_route_table_association.html#route_table_id VpcEndpointRouteTableAssociation#route_table_id}
    */
    readonly routeTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_route_table_association.html#vpc_endpoint_id VpcEndpointRouteTableAssociation#vpc_endpoint_id}
    */
    readonly vpcEndpointId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_route_table_association.html aws_vpc_endpoint_route_table_association}
  */
  export class VpcEndpointRouteTableAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpc_endpoint_route_table_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_route_table_association.html aws_vpc_endpoint_route_table_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointRouteTableAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: VpcEndpointRouteTableAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_vpc_endpoint_route_table_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._routeTableId = config.routeTableId;
      this._vpcEndpointId = config.vpcEndpointId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // route_table_id - computed: false, optional: false, required: true
    private _routeTableId?: string; 
    public get routeTableId() {
      return this.getStringAttribute('route_table_id');
    }
    public set routeTableId(value: string) {
      this._routeTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routeTableIdInput() {
      return this._routeTableId
    }

    // vpc_endpoint_id - computed: false, optional: false, required: true
    private _vpcEndpointId?: string; 
    public get vpcEndpointId() {
      return this.getStringAttribute('vpc_endpoint_id');
    }
    public set vpcEndpointId(value: string) {
      this._vpcEndpointId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointIdInput() {
      return this._vpcEndpointId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        route_table_id: cdktf.stringToTerraform(this._routeTableId),
        vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
      };
    }
  }
  export interface VpcEndpointServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#acceptance_required VpcEndpointService#acceptance_required}
    */
    readonly acceptanceRequired: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#allowed_principals VpcEndpointService#allowed_principals}
    */
    readonly allowedPrincipals?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#gateway_load_balancer_arns VpcEndpointService#gateway_load_balancer_arns}
    */
    readonly gatewayLoadBalancerArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#network_load_balancer_arns VpcEndpointService#network_load_balancer_arns}
    */
    readonly networkLoadBalancerArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#private_dns_name VpcEndpointService#private_dns_name}
    */
    readonly privateDnsName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#tags VpcEndpointService#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#tags_all VpcEndpointService#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class VpcEndpointServicePrivateDnsNameConfiguration extends cdktf.ComplexComputedList {

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }

    // value - computed: true, optional: false, required: false
    public get value() {
      return this.getStringAttribute('value');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html aws_vpc_endpoint_service}
  */
  export class VpcEndpointService extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpc_endpoint_service";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html aws_vpc_endpoint_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointServiceConfig
    */
    public constructor(scope: Construct, id: string, config: VpcEndpointServiceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_vpc_endpoint_service',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._acceptanceRequired = config.acceptanceRequired;
      this._allowedPrincipals = config.allowedPrincipals;
      this._gatewayLoadBalancerArns = config.gatewayLoadBalancerArns;
      this._networkLoadBalancerArns = config.networkLoadBalancerArns;
      this._privateDnsName = config.privateDnsName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // acceptance_required - computed: false, optional: false, required: true
    private _acceptanceRequired?: boolean | cdktf.IResolvable; 
    public get acceptanceRequired() {
      return this.getBooleanAttribute('acceptance_required') as any;
    }
    public set acceptanceRequired(value: boolean | cdktf.IResolvable) {
      this._acceptanceRequired = value;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptanceRequiredInput() {
      return this._acceptanceRequired
    }

    // allowed_principals - computed: true, optional: true, required: false
    private _allowedPrincipals?: string[] | undefined; 
    public get allowedPrincipals() {
      return this.getListAttribute('allowed_principals');
    }
    public set allowedPrincipals(value: string[] | undefined) {
      this._allowedPrincipals = value;
    }
    public resetAllowedPrincipals() {
      this._allowedPrincipals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedPrincipalsInput() {
      return this._allowedPrincipals
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // availability_zones - computed: true, optional: false, required: false
    public get availabilityZones() {
      return this.getListAttribute('availability_zones');
    }

    // base_endpoint_dns_names - computed: true, optional: false, required: false
    public get baseEndpointDnsNames() {
      return this.getListAttribute('base_endpoint_dns_names');
    }

    // gateway_load_balancer_arns - computed: false, optional: true, required: false
    private _gatewayLoadBalancerArns?: string[] | undefined; 
    public get gatewayLoadBalancerArns() {
      return this.getListAttribute('gateway_load_balancer_arns');
    }
    public set gatewayLoadBalancerArns(value: string[] | undefined) {
      this._gatewayLoadBalancerArns = value;
    }
    public resetGatewayLoadBalancerArns() {
      this._gatewayLoadBalancerArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayLoadBalancerArnsInput() {
      return this._gatewayLoadBalancerArns
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // manages_vpc_endpoints - computed: true, optional: false, required: false
    public get managesVpcEndpoints() {
      return this.getBooleanAttribute('manages_vpc_endpoints') as any;
    }

    // network_load_balancer_arns - computed: false, optional: true, required: false
    private _networkLoadBalancerArns?: string[] | undefined; 
    public get networkLoadBalancerArns() {
      return this.getListAttribute('network_load_balancer_arns');
    }
    public set networkLoadBalancerArns(value: string[] | undefined) {
      this._networkLoadBalancerArns = value;
    }
    public resetNetworkLoadBalancerArns() {
      this._networkLoadBalancerArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkLoadBalancerArnsInput() {
      return this._networkLoadBalancerArns
    }

    // private_dns_name - computed: true, optional: true, required: false
    private _privateDnsName?: string | undefined; 
    public get privateDnsName() {
      return this.getStringAttribute('private_dns_name');
    }
    public set privateDnsName(value: string | undefined) {
      this._privateDnsName = value;
    }
    public resetPrivateDnsName() {
      this._privateDnsName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateDnsNameInput() {
      return this._privateDnsName
    }

    // private_dns_name_configuration - computed: true, optional: false, required: false
    public privateDnsNameConfiguration(index: string) {
      return new VpcEndpointServicePrivateDnsNameConfiguration(this, 'private_dns_name_configuration', index);
    }

    // service_name - computed: true, optional: false, required: false
    public get serviceName() {
      return this.getStringAttribute('service_name');
    }

    // service_type - computed: true, optional: false, required: false
    public get serviceType() {
      return this.getStringAttribute('service_type');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        acceptance_required: cdktf.booleanToTerraform(this._acceptanceRequired),
        allowed_principals: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedPrincipals),
        gateway_load_balancer_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._gatewayLoadBalancerArns),
        network_load_balancer_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._networkLoadBalancerArns),
        private_dns_name: cdktf.stringToTerraform(this._privateDnsName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface VpcEndpointServiceAllowedPrincipalConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal.html#principal_arn VpcEndpointServiceAllowedPrincipal#principal_arn}
    */
    readonly principalArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal.html#vpc_endpoint_service_id VpcEndpointServiceAllowedPrincipal#vpc_endpoint_service_id}
    */
    readonly vpcEndpointServiceId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal.html aws_vpc_endpoint_service_allowed_principal}
  */
  export class VpcEndpointServiceAllowedPrincipal extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpc_endpoint_service_allowed_principal";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal.html aws_vpc_endpoint_service_allowed_principal} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointServiceAllowedPrincipalConfig
    */
    public constructor(scope: Construct, id: string, config: VpcEndpointServiceAllowedPrincipalConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_vpc_endpoint_service_allowed_principal',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._principalArn = config.principalArn;
      this._vpcEndpointServiceId = config.vpcEndpointServiceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // principal_arn - computed: false, optional: false, required: true
    private _principalArn?: string; 
    public get principalArn() {
      return this.getStringAttribute('principal_arn');
    }
    public set principalArn(value: string) {
      this._principalArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalArnInput() {
      return this._principalArn
    }

    // vpc_endpoint_service_id - computed: false, optional: false, required: true
    private _vpcEndpointServiceId?: string; 
    public get vpcEndpointServiceId() {
      return this.getStringAttribute('vpc_endpoint_service_id');
    }
    public set vpcEndpointServiceId(value: string) {
      this._vpcEndpointServiceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointServiceIdInput() {
      return this._vpcEndpointServiceId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        principal_arn: cdktf.stringToTerraform(this._principalArn),
        vpc_endpoint_service_id: cdktf.stringToTerraform(this._vpcEndpointServiceId),
      };
    }
  }
  export interface VpcEndpointSubnetAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html#subnet_id VpcEndpointSubnetAssociation#subnet_id}
    */
    readonly subnetId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html#vpc_endpoint_id VpcEndpointSubnetAssociation#vpc_endpoint_id}
    */
    readonly vpcEndpointId: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html#timeouts VpcEndpointSubnetAssociation#timeouts}
    */
    readonly timeouts?: VpcEndpointSubnetAssociationTimeouts;
  }
  export interface VpcEndpointSubnetAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html#create VpcEndpointSubnetAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html#delete VpcEndpointSubnetAssociation#delete}
    */
    readonly delete?: string;
  }

  function vpcEndpointSubnetAssociationTimeoutsToTerraform(struct?: VpcEndpointSubnetAssociationTimeoutsOutputReference | VpcEndpointSubnetAssociationTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class VpcEndpointSubnetAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html aws_vpc_endpoint_subnet_association}
  */
  export class VpcEndpointSubnetAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpc_endpoint_subnet_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html aws_vpc_endpoint_subnet_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointSubnetAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: VpcEndpointSubnetAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_vpc_endpoint_subnet_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._subnetId = config.subnetId;
      this._vpcEndpointId = config.vpcEndpointId;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // subnet_id - computed: false, optional: false, required: true
    private _subnetId?: string; 
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
      this._subnetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
      return this._subnetId
    }

    // vpc_endpoint_id - computed: false, optional: false, required: true
    private _vpcEndpointId?: string; 
    public get vpcEndpointId() {
      return this.getStringAttribute('vpc_endpoint_id');
    }
    public set vpcEndpointId(value: string) {
      this._vpcEndpointId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointIdInput() {
      return this._vpcEndpointId
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: VpcEndpointSubnetAssociationTimeouts | undefined; 
    private __timeoutsOutput = new VpcEndpointSubnetAssociationTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: VpcEndpointSubnetAssociationTimeouts | undefined) {
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
        subnet_id: cdktf.stringToTerraform(this._subnetId),
        vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
        timeouts: vpcEndpointSubnetAssociationTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface VpcIpv4CidrBlockAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html#cidr_block VpcIpv4CidrBlockAssociation#cidr_block}
    */
    readonly cidrBlock: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html#vpc_id VpcIpv4CidrBlockAssociation#vpc_id}
    */
    readonly vpcId: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html#timeouts VpcIpv4CidrBlockAssociation#timeouts}
    */
    readonly timeouts?: VpcIpv4CidrBlockAssociationTimeouts;
  }
  export interface VpcIpv4CidrBlockAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html#create VpcIpv4CidrBlockAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html#delete VpcIpv4CidrBlockAssociation#delete}
    */
    readonly delete?: string;
  }

  function vpcIpv4CidrBlockAssociationTimeoutsToTerraform(struct?: VpcIpv4CidrBlockAssociationTimeoutsOutputReference | VpcIpv4CidrBlockAssociationTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class VpcIpv4CidrBlockAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html aws_vpc_ipv4_cidr_block_association}
  */
  export class VpcIpv4CidrBlockAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpc_ipv4_cidr_block_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html aws_vpc_ipv4_cidr_block_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcIpv4CidrBlockAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: VpcIpv4CidrBlockAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_vpc_ipv4_cidr_block_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._cidrBlock = config.cidrBlock;
      this._vpcId = config.vpcId;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cidr_block - computed: false, optional: false, required: true
    private _cidrBlock?: string; 
    public get cidrBlock() {
      return this.getStringAttribute('cidr_block');
    }
    public set cidrBlock(value: string) {
      this._cidrBlock = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrBlockInput() {
      return this._cidrBlock
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
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

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: VpcIpv4CidrBlockAssociationTimeouts | undefined; 
    private __timeoutsOutput = new VpcIpv4CidrBlockAssociationTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: VpcIpv4CidrBlockAssociationTimeouts | undefined) {
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
        cidr_block: cdktf.stringToTerraform(this._cidrBlock),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        timeouts: vpcIpv4CidrBlockAssociationTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface VpcPeeringConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#auto_accept VpcPeeringConnection#auto_accept}
    */
    readonly autoAccept?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#peer_owner_id VpcPeeringConnection#peer_owner_id}
    */
    readonly peerOwnerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#peer_region VpcPeeringConnection#peer_region}
    */
    readonly peerRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#peer_vpc_id VpcPeeringConnection#peer_vpc_id}
    */
    readonly peerVpcId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#tags VpcPeeringConnection#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#tags_all VpcPeeringConnection#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#vpc_id VpcPeeringConnection#vpc_id}
    */
    readonly vpcId: string;
    /**
    * accepter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#accepter VpcPeeringConnection#accepter}
    */
    readonly accepter?: VpcPeeringConnectionAccepter;
    /**
    * requester block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#requester VpcPeeringConnection#requester}
    */
    readonly requester?: VpcPeeringConnectionRequester;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#timeouts VpcPeeringConnection#timeouts}
    */
    readonly timeouts?: VpcPeeringConnectionTimeouts;
  }
  export interface VpcPeeringConnectionAccepter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}
    */
    readonly allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}
    */
    readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}
    */
    readonly allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable;
  }

  function vpcPeeringConnectionAccepterToTerraform(struct?: VpcPeeringConnectionAccepterOutputReference | VpcPeeringConnectionAccepter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct!.allowClassicLinkToRemoteVpc),
      allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct!.allowRemoteVpcDnsResolution),
      allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct!.allowVpcToRemoteClassicLink),
    }
  }

  export class VpcPeeringConnectionAccepterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // allow_classic_link_to_remote_vpc - computed: false, optional: true, required: false
    private _allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable | undefined; 
    public get allowClassicLinkToRemoteVpc() {
      return this.getBooleanAttribute('allow_classic_link_to_remote_vpc') as any;
    }
    public set allowClassicLinkToRemoteVpc(value: boolean | cdktf.IResolvable | undefined) {
      this._allowClassicLinkToRemoteVpc = value;
    }
    public resetAllowClassicLinkToRemoteVpc() {
      this._allowClassicLinkToRemoteVpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowClassicLinkToRemoteVpcInput() {
      return this._allowClassicLinkToRemoteVpc
    }

    // allow_remote_vpc_dns_resolution - computed: false, optional: true, required: false
    private _allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable | undefined; 
    public get allowRemoteVpcDnsResolution() {
      return this.getBooleanAttribute('allow_remote_vpc_dns_resolution') as any;
    }
    public set allowRemoteVpcDnsResolution(value: boolean | cdktf.IResolvable | undefined) {
      this._allowRemoteVpcDnsResolution = value;
    }
    public resetAllowRemoteVpcDnsResolution() {
      this._allowRemoteVpcDnsResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowRemoteVpcDnsResolutionInput() {
      return this._allowRemoteVpcDnsResolution
    }

    // allow_vpc_to_remote_classic_link - computed: false, optional: true, required: false
    private _allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable | undefined; 
    public get allowVpcToRemoteClassicLink() {
      return this.getBooleanAttribute('allow_vpc_to_remote_classic_link') as any;
    }
    public set allowVpcToRemoteClassicLink(value: boolean | cdktf.IResolvable | undefined) {
      this._allowVpcToRemoteClassicLink = value;
    }
    public resetAllowVpcToRemoteClassicLink() {
      this._allowVpcToRemoteClassicLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowVpcToRemoteClassicLinkInput() {
      return this._allowVpcToRemoteClassicLink
    }
  }
  export interface VpcPeeringConnectionRequester {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}
    */
    readonly allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}
    */
    readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}
    */
    readonly allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable;
  }

  function vpcPeeringConnectionRequesterToTerraform(struct?: VpcPeeringConnectionRequesterOutputReference | VpcPeeringConnectionRequester): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct!.allowClassicLinkToRemoteVpc),
      allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct!.allowRemoteVpcDnsResolution),
      allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct!.allowVpcToRemoteClassicLink),
    }
  }

  export class VpcPeeringConnectionRequesterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // allow_classic_link_to_remote_vpc - computed: false, optional: true, required: false
    private _allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable | undefined; 
    public get allowClassicLinkToRemoteVpc() {
      return this.getBooleanAttribute('allow_classic_link_to_remote_vpc') as any;
    }
    public set allowClassicLinkToRemoteVpc(value: boolean | cdktf.IResolvable | undefined) {
      this._allowClassicLinkToRemoteVpc = value;
    }
    public resetAllowClassicLinkToRemoteVpc() {
      this._allowClassicLinkToRemoteVpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowClassicLinkToRemoteVpcInput() {
      return this._allowClassicLinkToRemoteVpc
    }

    // allow_remote_vpc_dns_resolution - computed: false, optional: true, required: false
    private _allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable | undefined; 
    public get allowRemoteVpcDnsResolution() {
      return this.getBooleanAttribute('allow_remote_vpc_dns_resolution') as any;
    }
    public set allowRemoteVpcDnsResolution(value: boolean | cdktf.IResolvable | undefined) {
      this._allowRemoteVpcDnsResolution = value;
    }
    public resetAllowRemoteVpcDnsResolution() {
      this._allowRemoteVpcDnsResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowRemoteVpcDnsResolutionInput() {
      return this._allowRemoteVpcDnsResolution
    }

    // allow_vpc_to_remote_classic_link - computed: false, optional: true, required: false
    private _allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable | undefined; 
    public get allowVpcToRemoteClassicLink() {
      return this.getBooleanAttribute('allow_vpc_to_remote_classic_link') as any;
    }
    public set allowVpcToRemoteClassicLink(value: boolean | cdktf.IResolvable | undefined) {
      this._allowVpcToRemoteClassicLink = value;
    }
    public resetAllowVpcToRemoteClassicLink() {
      this._allowVpcToRemoteClassicLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowVpcToRemoteClassicLinkInput() {
      return this._allowVpcToRemoteClassicLink
    }
  }
  export interface VpcPeeringConnectionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#create VpcPeeringConnection#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#delete VpcPeeringConnection#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#update VpcPeeringConnection#update}
    */
    readonly update?: string;
  }

  function vpcPeeringConnectionTimeoutsToTerraform(struct?: VpcPeeringConnectionTimeoutsOutputReference | VpcPeeringConnectionTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class VpcPeeringConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html aws_vpc_peering_connection}
  */
  export class VpcPeeringConnection extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpc_peering_connection";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html aws_vpc_peering_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcPeeringConnectionConfig
    */
    public constructor(scope: Construct, id: string, config: VpcPeeringConnectionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_vpc_peering_connection',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._autoAccept = config.autoAccept;
      this._peerOwnerId = config.peerOwnerId;
      this._peerRegion = config.peerRegion;
      this._peerVpcId = config.peerVpcId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpcId = config.vpcId;
      this._accepter = config.accepter;
      this._requester = config.requester;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accept_status - computed: true, optional: false, required: false
    public get acceptStatus() {
      return this.getStringAttribute('accept_status');
    }

    // auto_accept - computed: false, optional: true, required: false
    private _autoAccept?: boolean | cdktf.IResolvable | undefined; 
    public get autoAccept() {
      return this.getBooleanAttribute('auto_accept') as any;
    }
    public set autoAccept(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAccept = value;
    }
    public resetAutoAccept() {
      this._autoAccept = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAcceptInput() {
      return this._autoAccept
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // peer_owner_id - computed: true, optional: true, required: false
    private _peerOwnerId?: string | undefined; 
    public get peerOwnerId() {
      return this.getStringAttribute('peer_owner_id');
    }
    public set peerOwnerId(value: string | undefined) {
      this._peerOwnerId = value;
    }
    public resetPeerOwnerId() {
      this._peerOwnerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get peerOwnerIdInput() {
      return this._peerOwnerId
    }

    // peer_region - computed: true, optional: true, required: false
    private _peerRegion?: string | undefined; 
    public get peerRegion() {
      return this.getStringAttribute('peer_region');
    }
    public set peerRegion(value: string | undefined) {
      this._peerRegion = value;
    }
    public resetPeerRegion() {
      this._peerRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get peerRegionInput() {
      return this._peerRegion
    }

    // peer_vpc_id - computed: false, optional: false, required: true
    private _peerVpcId?: string; 
    public get peerVpcId() {
      return this.getStringAttribute('peer_vpc_id');
    }
    public set peerVpcId(value: string) {
      this._peerVpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get peerVpcIdInput() {
      return this._peerVpcId
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
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

    // accepter - computed: false, optional: true, required: false
    private _accepter?: VpcPeeringConnectionAccepter | undefined; 
    private __accepterOutput = new VpcPeeringConnectionAccepterOutputReference(this as any, "accepter", true);
    public get accepter() {
      return this.__accepterOutput;
    }
    public putAccepter(value: VpcPeeringConnectionAccepter | undefined) {
      this._accepter = value;
    }
    public resetAccepter() {
      this._accepter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accepterInput() {
      return this._accepter
    }

    // requester - computed: false, optional: true, required: false
    private _requester?: VpcPeeringConnectionRequester | undefined; 
    private __requesterOutput = new VpcPeeringConnectionRequesterOutputReference(this as any, "requester", true);
    public get requester() {
      return this.__requesterOutput;
    }
    public putRequester(value: VpcPeeringConnectionRequester | undefined) {
      this._requester = value;
    }
    public resetRequester() {
      this._requester = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requesterInput() {
      return this._requester
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: VpcPeeringConnectionTimeouts | undefined; 
    private __timeoutsOutput = new VpcPeeringConnectionTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: VpcPeeringConnectionTimeouts | undefined) {
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
        auto_accept: cdktf.booleanToTerraform(this._autoAccept),
        peer_owner_id: cdktf.stringToTerraform(this._peerOwnerId),
        peer_region: cdktf.stringToTerraform(this._peerRegion),
        peer_vpc_id: cdktf.stringToTerraform(this._peerVpcId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        accepter: vpcPeeringConnectionAccepterToTerraform(this._accepter),
        requester: vpcPeeringConnectionRequesterToTerraform(this._requester),
        timeouts: vpcPeeringConnectionTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface VpcPeeringConnectionAccepterAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#auto_accept VpcPeeringConnectionAccepterA#auto_accept}
    */
    readonly autoAccept?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#tags VpcPeeringConnectionAccepterA#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#tags_all VpcPeeringConnectionAccepterA#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#vpc_peering_connection_id VpcPeeringConnectionAccepterA#vpc_peering_connection_id}
    */
    readonly vpcPeeringConnectionId: string;
    /**
    * accepter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#accepter VpcPeeringConnectionAccepterA#accepter}
    */
    readonly accepter?: VpcPeeringConnectionAccepterAccepter;
    /**
    * requester block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#requester VpcPeeringConnectionAccepterA#requester}
    */
    readonly requester?: VpcPeeringConnectionAccepterRequester;
  }
  export interface VpcPeeringConnectionAccepterAccepter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}
    */
    readonly allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}
    */
    readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}
    */
    readonly allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable;
  }

  function vpcPeeringConnectionAccepterAccepterToTerraform(struct?: VpcPeeringConnectionAccepterAccepterOutputReference | VpcPeeringConnectionAccepterAccepter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct!.allowClassicLinkToRemoteVpc),
      allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct!.allowRemoteVpcDnsResolution),
      allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct!.allowVpcToRemoteClassicLink),
    }
  }

  export class VpcPeeringConnectionAccepterAccepterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // allow_classic_link_to_remote_vpc - computed: false, optional: true, required: false
    private _allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable | undefined; 
    public get allowClassicLinkToRemoteVpc() {
      return this.getBooleanAttribute('allow_classic_link_to_remote_vpc') as any;
    }
    public set allowClassicLinkToRemoteVpc(value: boolean | cdktf.IResolvable | undefined) {
      this._allowClassicLinkToRemoteVpc = value;
    }
    public resetAllowClassicLinkToRemoteVpc() {
      this._allowClassicLinkToRemoteVpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowClassicLinkToRemoteVpcInput() {
      return this._allowClassicLinkToRemoteVpc
    }

    // allow_remote_vpc_dns_resolution - computed: false, optional: true, required: false
    private _allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable | undefined; 
    public get allowRemoteVpcDnsResolution() {
      return this.getBooleanAttribute('allow_remote_vpc_dns_resolution') as any;
    }
    public set allowRemoteVpcDnsResolution(value: boolean | cdktf.IResolvable | undefined) {
      this._allowRemoteVpcDnsResolution = value;
    }
    public resetAllowRemoteVpcDnsResolution() {
      this._allowRemoteVpcDnsResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowRemoteVpcDnsResolutionInput() {
      return this._allowRemoteVpcDnsResolution
    }

    // allow_vpc_to_remote_classic_link - computed: false, optional: true, required: false
    private _allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable | undefined; 
    public get allowVpcToRemoteClassicLink() {
      return this.getBooleanAttribute('allow_vpc_to_remote_classic_link') as any;
    }
    public set allowVpcToRemoteClassicLink(value: boolean | cdktf.IResolvable | undefined) {
      this._allowVpcToRemoteClassicLink = value;
    }
    public resetAllowVpcToRemoteClassicLink() {
      this._allowVpcToRemoteClassicLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowVpcToRemoteClassicLinkInput() {
      return this._allowVpcToRemoteClassicLink
    }
  }
  export interface VpcPeeringConnectionAccepterRequester {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}
    */
    readonly allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}
    */
    readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}
    */
    readonly allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable;
  }

  function vpcPeeringConnectionAccepterRequesterToTerraform(struct?: VpcPeeringConnectionAccepterRequesterOutputReference | VpcPeeringConnectionAccepterRequester): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct!.allowClassicLinkToRemoteVpc),
      allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct!.allowRemoteVpcDnsResolution),
      allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct!.allowVpcToRemoteClassicLink),
    }
  }

  export class VpcPeeringConnectionAccepterRequesterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // allow_classic_link_to_remote_vpc - computed: false, optional: true, required: false
    private _allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable | undefined; 
    public get allowClassicLinkToRemoteVpc() {
      return this.getBooleanAttribute('allow_classic_link_to_remote_vpc') as any;
    }
    public set allowClassicLinkToRemoteVpc(value: boolean | cdktf.IResolvable | undefined) {
      this._allowClassicLinkToRemoteVpc = value;
    }
    public resetAllowClassicLinkToRemoteVpc() {
      this._allowClassicLinkToRemoteVpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowClassicLinkToRemoteVpcInput() {
      return this._allowClassicLinkToRemoteVpc
    }

    // allow_remote_vpc_dns_resolution - computed: false, optional: true, required: false
    private _allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable | undefined; 
    public get allowRemoteVpcDnsResolution() {
      return this.getBooleanAttribute('allow_remote_vpc_dns_resolution') as any;
    }
    public set allowRemoteVpcDnsResolution(value: boolean | cdktf.IResolvable | undefined) {
      this._allowRemoteVpcDnsResolution = value;
    }
    public resetAllowRemoteVpcDnsResolution() {
      this._allowRemoteVpcDnsResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowRemoteVpcDnsResolutionInput() {
      return this._allowRemoteVpcDnsResolution
    }

    // allow_vpc_to_remote_classic_link - computed: false, optional: true, required: false
    private _allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable | undefined; 
    public get allowVpcToRemoteClassicLink() {
      return this.getBooleanAttribute('allow_vpc_to_remote_classic_link') as any;
    }
    public set allowVpcToRemoteClassicLink(value: boolean | cdktf.IResolvable | undefined) {
      this._allowVpcToRemoteClassicLink = value;
    }
    public resetAllowVpcToRemoteClassicLink() {
      this._allowVpcToRemoteClassicLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowVpcToRemoteClassicLinkInput() {
      return this._allowVpcToRemoteClassicLink
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html aws_vpc_peering_connection_accepter}
  */
  export class VpcPeeringConnectionAccepterA extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpc_peering_connection_accepter";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html aws_vpc_peering_connection_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcPeeringConnectionAccepterAConfig
    */
    public constructor(scope: Construct, id: string, config: VpcPeeringConnectionAccepterAConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_vpc_peering_connection_accepter',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._autoAccept = config.autoAccept;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
      this._accepter = config.accepter;
      this._requester = config.requester;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accept_status - computed: true, optional: false, required: false
    public get acceptStatus() {
      return this.getStringAttribute('accept_status');
    }

    // auto_accept - computed: false, optional: true, required: false
    private _autoAccept?: boolean | cdktf.IResolvable | undefined; 
    public get autoAccept() {
      return this.getBooleanAttribute('auto_accept') as any;
    }
    public set autoAccept(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAccept = value;
    }
    public resetAutoAccept() {
      this._autoAccept = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAcceptInput() {
      return this._autoAccept
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // peer_owner_id - computed: true, optional: false, required: false
    public get peerOwnerId() {
      return this.getStringAttribute('peer_owner_id');
    }

    // peer_region - computed: true, optional: false, required: false
    public get peerRegion() {
      return this.getStringAttribute('peer_region');
    }

    // peer_vpc_id - computed: true, optional: false, required: false
    public get peerVpcId() {
      return this.getStringAttribute('peer_vpc_id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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

    // vpc_peering_connection_id - computed: false, optional: false, required: true
    private _vpcPeeringConnectionId?: string; 
    public get vpcPeeringConnectionId() {
      return this.getStringAttribute('vpc_peering_connection_id');
    }
    public set vpcPeeringConnectionId(value: string) {
      this._vpcPeeringConnectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcPeeringConnectionIdInput() {
      return this._vpcPeeringConnectionId
    }

    // accepter - computed: false, optional: true, required: false
    private _accepter?: VpcPeeringConnectionAccepterAccepter | undefined; 
    private __accepterOutput = new VpcPeeringConnectionAccepterAccepterOutputReference(this as any, "accepter", true);
    public get accepter() {
      return this.__accepterOutput;
    }
    public putAccepter(value: VpcPeeringConnectionAccepterAccepter | undefined) {
      this._accepter = value;
    }
    public resetAccepter() {
      this._accepter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accepterInput() {
      return this._accepter
    }

    // requester - computed: false, optional: true, required: false
    private _requester?: VpcPeeringConnectionAccepterRequester | undefined; 
    private __requesterOutput = new VpcPeeringConnectionAccepterRequesterOutputReference(this as any, "requester", true);
    public get requester() {
      return this.__requesterOutput;
    }
    public putRequester(value: VpcPeeringConnectionAccepterRequester | undefined) {
      this._requester = value;
    }
    public resetRequester() {
      this._requester = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requesterInput() {
      return this._requester
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        auto_accept: cdktf.booleanToTerraform(this._autoAccept),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
        accepter: vpcPeeringConnectionAccepterAccepterToTerraform(this._accepter),
        requester: vpcPeeringConnectionAccepterRequesterToTerraform(this._requester),
      };
    }
  }
  export interface VpcPeeringConnectionOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#vpc_peering_connection_id VpcPeeringConnectionOptions#vpc_peering_connection_id}
    */
    readonly vpcPeeringConnectionId: string;
    /**
    * accepter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#accepter VpcPeeringConnectionOptions#accepter}
    */
    readonly accepter?: VpcPeeringConnectionOptionsAccepter;
    /**
    * requester block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#requester VpcPeeringConnectionOptions#requester}
    */
    readonly requester?: VpcPeeringConnectionOptionsRequester;
  }
  export interface VpcPeeringConnectionOptionsAccepter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}
    */
    readonly allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}
    */
    readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}
    */
    readonly allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable;
  }

  function vpcPeeringConnectionOptionsAccepterToTerraform(struct?: VpcPeeringConnectionOptionsAccepterOutputReference | VpcPeeringConnectionOptionsAccepter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct!.allowClassicLinkToRemoteVpc),
      allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct!.allowRemoteVpcDnsResolution),
      allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct!.allowVpcToRemoteClassicLink),
    }
  }

  export class VpcPeeringConnectionOptionsAccepterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // allow_classic_link_to_remote_vpc - computed: false, optional: true, required: false
    private _allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable | undefined; 
    public get allowClassicLinkToRemoteVpc() {
      return this.getBooleanAttribute('allow_classic_link_to_remote_vpc') as any;
    }
    public set allowClassicLinkToRemoteVpc(value: boolean | cdktf.IResolvable | undefined) {
      this._allowClassicLinkToRemoteVpc = value;
    }
    public resetAllowClassicLinkToRemoteVpc() {
      this._allowClassicLinkToRemoteVpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowClassicLinkToRemoteVpcInput() {
      return this._allowClassicLinkToRemoteVpc
    }

    // allow_remote_vpc_dns_resolution - computed: false, optional: true, required: false
    private _allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable | undefined; 
    public get allowRemoteVpcDnsResolution() {
      return this.getBooleanAttribute('allow_remote_vpc_dns_resolution') as any;
    }
    public set allowRemoteVpcDnsResolution(value: boolean | cdktf.IResolvable | undefined) {
      this._allowRemoteVpcDnsResolution = value;
    }
    public resetAllowRemoteVpcDnsResolution() {
      this._allowRemoteVpcDnsResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowRemoteVpcDnsResolutionInput() {
      return this._allowRemoteVpcDnsResolution
    }

    // allow_vpc_to_remote_classic_link - computed: false, optional: true, required: false
    private _allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable | undefined; 
    public get allowVpcToRemoteClassicLink() {
      return this.getBooleanAttribute('allow_vpc_to_remote_classic_link') as any;
    }
    public set allowVpcToRemoteClassicLink(value: boolean | cdktf.IResolvable | undefined) {
      this._allowVpcToRemoteClassicLink = value;
    }
    public resetAllowVpcToRemoteClassicLink() {
      this._allowVpcToRemoteClassicLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowVpcToRemoteClassicLinkInput() {
      return this._allowVpcToRemoteClassicLink
    }
  }
  export interface VpcPeeringConnectionOptionsRequester {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}
    */
    readonly allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}
    */
    readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}
    */
    readonly allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable;
  }

  function vpcPeeringConnectionOptionsRequesterToTerraform(struct?: VpcPeeringConnectionOptionsRequesterOutputReference | VpcPeeringConnectionOptionsRequester): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct!.allowClassicLinkToRemoteVpc),
      allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct!.allowRemoteVpcDnsResolution),
      allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct!.allowVpcToRemoteClassicLink),
    }
  }

  export class VpcPeeringConnectionOptionsRequesterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // allow_classic_link_to_remote_vpc - computed: false, optional: true, required: false
    private _allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable | undefined; 
    public get allowClassicLinkToRemoteVpc() {
      return this.getBooleanAttribute('allow_classic_link_to_remote_vpc') as any;
    }
    public set allowClassicLinkToRemoteVpc(value: boolean | cdktf.IResolvable | undefined) {
      this._allowClassicLinkToRemoteVpc = value;
    }
    public resetAllowClassicLinkToRemoteVpc() {
      this._allowClassicLinkToRemoteVpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowClassicLinkToRemoteVpcInput() {
      return this._allowClassicLinkToRemoteVpc
    }

    // allow_remote_vpc_dns_resolution - computed: false, optional: true, required: false
    private _allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable | undefined; 
    public get allowRemoteVpcDnsResolution() {
      return this.getBooleanAttribute('allow_remote_vpc_dns_resolution') as any;
    }
    public set allowRemoteVpcDnsResolution(value: boolean | cdktf.IResolvable | undefined) {
      this._allowRemoteVpcDnsResolution = value;
    }
    public resetAllowRemoteVpcDnsResolution() {
      this._allowRemoteVpcDnsResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowRemoteVpcDnsResolutionInput() {
      return this._allowRemoteVpcDnsResolution
    }

    // allow_vpc_to_remote_classic_link - computed: false, optional: true, required: false
    private _allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable | undefined; 
    public get allowVpcToRemoteClassicLink() {
      return this.getBooleanAttribute('allow_vpc_to_remote_classic_link') as any;
    }
    public set allowVpcToRemoteClassicLink(value: boolean | cdktf.IResolvable | undefined) {
      this._allowVpcToRemoteClassicLink = value;
    }
    public resetAllowVpcToRemoteClassicLink() {
      this._allowVpcToRemoteClassicLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowVpcToRemoteClassicLinkInput() {
      return this._allowVpcToRemoteClassicLink
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html aws_vpc_peering_connection_options}
  */
  export class VpcPeeringConnectionOptions extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpc_peering_connection_options";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html aws_vpc_peering_connection_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcPeeringConnectionOptionsConfig
    */
    public constructor(scope: Construct, id: string, config: VpcPeeringConnectionOptionsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_vpc_peering_connection_options',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
      this._accepter = config.accepter;
      this._requester = config.requester;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // vpc_peering_connection_id - computed: false, optional: false, required: true
    private _vpcPeeringConnectionId?: string; 
    public get vpcPeeringConnectionId() {
      return this.getStringAttribute('vpc_peering_connection_id');
    }
    public set vpcPeeringConnectionId(value: string) {
      this._vpcPeeringConnectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcPeeringConnectionIdInput() {
      return this._vpcPeeringConnectionId
    }

    // accepter - computed: false, optional: true, required: false
    private _accepter?: VpcPeeringConnectionOptionsAccepter | undefined; 
    private __accepterOutput = new VpcPeeringConnectionOptionsAccepterOutputReference(this as any, "accepter", true);
    public get accepter() {
      return this.__accepterOutput;
    }
    public putAccepter(value: VpcPeeringConnectionOptionsAccepter | undefined) {
      this._accepter = value;
    }
    public resetAccepter() {
      this._accepter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accepterInput() {
      return this._accepter
    }

    // requester - computed: false, optional: true, required: false
    private _requester?: VpcPeeringConnectionOptionsRequester | undefined; 
    private __requesterOutput = new VpcPeeringConnectionOptionsRequesterOutputReference(this as any, "requester", true);
    public get requester() {
      return this.__requesterOutput;
    }
    public putRequester(value: VpcPeeringConnectionOptionsRequester | undefined) {
      this._requester = value;
    }
    public resetRequester() {
      this._requester = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requesterInput() {
      return this._requester
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
        accepter: vpcPeeringConnectionOptionsAccepterToTerraform(this._accepter),
        requester: vpcPeeringConnectionOptionsRequesterToTerraform(this._requester),
      };
    }
  }
  export interface VpnConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#customer_gateway_id VpnConnection#customer_gateway_id}
    */
    readonly customerGatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#enable_acceleration VpnConnection#enable_acceleration}
    */
    readonly enableAcceleration?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#local_ipv4_network_cidr VpnConnection#local_ipv4_network_cidr}
    */
    readonly localIpv4NetworkCidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#local_ipv6_network_cidr VpnConnection#local_ipv6_network_cidr}
    */
    readonly localIpv6NetworkCidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#remote_ipv4_network_cidr VpnConnection#remote_ipv4_network_cidr}
    */
    readonly remoteIpv4NetworkCidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#remote_ipv6_network_cidr VpnConnection#remote_ipv6_network_cidr}
    */
    readonly remoteIpv6NetworkCidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#static_routes_only VpnConnection#static_routes_only}
    */
    readonly staticRoutesOnly?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tags VpnConnection#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tags_all VpnConnection#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#transit_gateway_id VpnConnection#transit_gateway_id}
    */
    readonly transitGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_dpd_timeout_action VpnConnection#tunnel1_dpd_timeout_action}
    */
    readonly tunnel1DpdTimeoutAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_dpd_timeout_seconds VpnConnection#tunnel1_dpd_timeout_seconds}
    */
    readonly tunnel1DpdTimeoutSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_ike_versions VpnConnection#tunnel1_ike_versions}
    */
    readonly tunnel1IkeVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_inside_cidr VpnConnection#tunnel1_inside_cidr}
    */
    readonly tunnel1InsideCidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_inside_ipv6_cidr VpnConnection#tunnel1_inside_ipv6_cidr}
    */
    readonly tunnel1InsideIpv6Cidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_phase1_dh_group_numbers VpnConnection#tunnel1_phase1_dh_group_numbers}
    */
    readonly tunnel1Phase1DhGroupNumbers?: number[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_phase1_encryption_algorithms VpnConnection#tunnel1_phase1_encryption_algorithms}
    */
    readonly tunnel1Phase1EncryptionAlgorithms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_phase1_integrity_algorithms VpnConnection#tunnel1_phase1_integrity_algorithms}
    */
    readonly tunnel1Phase1IntegrityAlgorithms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_phase1_lifetime_seconds VpnConnection#tunnel1_phase1_lifetime_seconds}
    */
    readonly tunnel1Phase1LifetimeSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_phase2_dh_group_numbers VpnConnection#tunnel1_phase2_dh_group_numbers}
    */
    readonly tunnel1Phase2DhGroupNumbers?: number[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_phase2_encryption_algorithms VpnConnection#tunnel1_phase2_encryption_algorithms}
    */
    readonly tunnel1Phase2EncryptionAlgorithms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_phase2_integrity_algorithms VpnConnection#tunnel1_phase2_integrity_algorithms}
    */
    readonly tunnel1Phase2IntegrityAlgorithms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_phase2_lifetime_seconds VpnConnection#tunnel1_phase2_lifetime_seconds}
    */
    readonly tunnel1Phase2LifetimeSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_preshared_key VpnConnection#tunnel1_preshared_key}
    */
    readonly tunnel1PresharedKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_rekey_fuzz_percentage VpnConnection#tunnel1_rekey_fuzz_percentage}
    */
    readonly tunnel1RekeyFuzzPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_rekey_margin_time_seconds VpnConnection#tunnel1_rekey_margin_time_seconds}
    */
    readonly tunnel1RekeyMarginTimeSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_replay_window_size VpnConnection#tunnel1_replay_window_size}
    */
    readonly tunnel1ReplayWindowSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_startup_action VpnConnection#tunnel1_startup_action}
    */
    readonly tunnel1StartupAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_dpd_timeout_action VpnConnection#tunnel2_dpd_timeout_action}
    */
    readonly tunnel2DpdTimeoutAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_dpd_timeout_seconds VpnConnection#tunnel2_dpd_timeout_seconds}
    */
    readonly tunnel2DpdTimeoutSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_ike_versions VpnConnection#tunnel2_ike_versions}
    */
    readonly tunnel2IkeVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_inside_cidr VpnConnection#tunnel2_inside_cidr}
    */
    readonly tunnel2InsideCidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_inside_ipv6_cidr VpnConnection#tunnel2_inside_ipv6_cidr}
    */
    readonly tunnel2InsideIpv6Cidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_phase1_dh_group_numbers VpnConnection#tunnel2_phase1_dh_group_numbers}
    */
    readonly tunnel2Phase1DhGroupNumbers?: number[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_phase1_encryption_algorithms VpnConnection#tunnel2_phase1_encryption_algorithms}
    */
    readonly tunnel2Phase1EncryptionAlgorithms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_phase1_integrity_algorithms VpnConnection#tunnel2_phase1_integrity_algorithms}
    */
    readonly tunnel2Phase1IntegrityAlgorithms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_phase1_lifetime_seconds VpnConnection#tunnel2_phase1_lifetime_seconds}
    */
    readonly tunnel2Phase1LifetimeSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_phase2_dh_group_numbers VpnConnection#tunnel2_phase2_dh_group_numbers}
    */
    readonly tunnel2Phase2DhGroupNumbers?: number[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_phase2_encryption_algorithms VpnConnection#tunnel2_phase2_encryption_algorithms}
    */
    readonly tunnel2Phase2EncryptionAlgorithms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_phase2_integrity_algorithms VpnConnection#tunnel2_phase2_integrity_algorithms}
    */
    readonly tunnel2Phase2IntegrityAlgorithms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_phase2_lifetime_seconds VpnConnection#tunnel2_phase2_lifetime_seconds}
    */
    readonly tunnel2Phase2LifetimeSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_preshared_key VpnConnection#tunnel2_preshared_key}
    */
    readonly tunnel2PresharedKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_rekey_fuzz_percentage VpnConnection#tunnel2_rekey_fuzz_percentage}
    */
    readonly tunnel2RekeyFuzzPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_rekey_margin_time_seconds VpnConnection#tunnel2_rekey_margin_time_seconds}
    */
    readonly tunnel2RekeyMarginTimeSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_replay_window_size VpnConnection#tunnel2_replay_window_size}
    */
    readonly tunnel2ReplayWindowSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_startup_action VpnConnection#tunnel2_startup_action}
    */
    readonly tunnel2StartupAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel_inside_ip_version VpnConnection#tunnel_inside_ip_version}
    */
    readonly tunnelInsideIpVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#type VpnConnection#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#vpn_gateway_id VpnConnection#vpn_gateway_id}
    */
    readonly vpnGatewayId?: string;
  }
  export class VpnConnectionRoutes extends cdktf.ComplexComputedList {

    // destination_cidr_block - computed: true, optional: false, required: false
    public get destinationCidrBlock() {
      return this.getStringAttribute('destination_cidr_block');
    }

    // source - computed: true, optional: false, required: false
    public get source() {
      return this.getStringAttribute('source');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }
  }
  export class VpnConnectionVgwTelemetry extends cdktf.ComplexComputedList {

    // accepted_route_count - computed: true, optional: false, required: false
    public get acceptedRouteCount() {
      return this.getNumberAttribute('accepted_route_count');
    }

    // last_status_change - computed: true, optional: false, required: false
    public get lastStatusChange() {
      return this.getStringAttribute('last_status_change');
    }

    // outside_ip_address - computed: true, optional: false, required: false
    public get outsideIpAddress() {
      return this.getStringAttribute('outside_ip_address');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // status_message - computed: true, optional: false, required: false
    public get statusMessage() {
      return this.getStringAttribute('status_message');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html aws_vpn_connection}
  */
  export class VpnConnection extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpn_connection";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html aws_vpn_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpnConnectionConfig
    */
    public constructor(scope: Construct, id: string, config: VpnConnectionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_vpn_connection',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._customerGatewayId = config.customerGatewayId;
      this._enableAcceleration = config.enableAcceleration;
      this._localIpv4NetworkCidr = config.localIpv4NetworkCidr;
      this._localIpv6NetworkCidr = config.localIpv6NetworkCidr;
      this._remoteIpv4NetworkCidr = config.remoteIpv4NetworkCidr;
      this._remoteIpv6NetworkCidr = config.remoteIpv6NetworkCidr;
      this._staticRoutesOnly = config.staticRoutesOnly;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._transitGatewayId = config.transitGatewayId;
      this._tunnel1DpdTimeoutAction = config.tunnel1DpdTimeoutAction;
      this._tunnel1DpdTimeoutSeconds = config.tunnel1DpdTimeoutSeconds;
      this._tunnel1IkeVersions = config.tunnel1IkeVersions;
      this._tunnel1InsideCidr = config.tunnel1InsideCidr;
      this._tunnel1InsideIpv6Cidr = config.tunnel1InsideIpv6Cidr;
      this._tunnel1Phase1DhGroupNumbers = config.tunnel1Phase1DhGroupNumbers;
      this._tunnel1Phase1EncryptionAlgorithms = config.tunnel1Phase1EncryptionAlgorithms;
      this._tunnel1Phase1IntegrityAlgorithms = config.tunnel1Phase1IntegrityAlgorithms;
      this._tunnel1Phase1LifetimeSeconds = config.tunnel1Phase1LifetimeSeconds;
      this._tunnel1Phase2DhGroupNumbers = config.tunnel1Phase2DhGroupNumbers;
      this._tunnel1Phase2EncryptionAlgorithms = config.tunnel1Phase2EncryptionAlgorithms;
      this._tunnel1Phase2IntegrityAlgorithms = config.tunnel1Phase2IntegrityAlgorithms;
      this._tunnel1Phase2LifetimeSeconds = config.tunnel1Phase2LifetimeSeconds;
      this._tunnel1PresharedKey = config.tunnel1PresharedKey;
      this._tunnel1RekeyFuzzPercentage = config.tunnel1RekeyFuzzPercentage;
      this._tunnel1RekeyMarginTimeSeconds = config.tunnel1RekeyMarginTimeSeconds;
      this._tunnel1ReplayWindowSize = config.tunnel1ReplayWindowSize;
      this._tunnel1StartupAction = config.tunnel1StartupAction;
      this._tunnel2DpdTimeoutAction = config.tunnel2DpdTimeoutAction;
      this._tunnel2DpdTimeoutSeconds = config.tunnel2DpdTimeoutSeconds;
      this._tunnel2IkeVersions = config.tunnel2IkeVersions;
      this._tunnel2InsideCidr = config.tunnel2InsideCidr;
      this._tunnel2InsideIpv6Cidr = config.tunnel2InsideIpv6Cidr;
      this._tunnel2Phase1DhGroupNumbers = config.tunnel2Phase1DhGroupNumbers;
      this._tunnel2Phase1EncryptionAlgorithms = config.tunnel2Phase1EncryptionAlgorithms;
      this._tunnel2Phase1IntegrityAlgorithms = config.tunnel2Phase1IntegrityAlgorithms;
      this._tunnel2Phase1LifetimeSeconds = config.tunnel2Phase1LifetimeSeconds;
      this._tunnel2Phase2DhGroupNumbers = config.tunnel2Phase2DhGroupNumbers;
      this._tunnel2Phase2EncryptionAlgorithms = config.tunnel2Phase2EncryptionAlgorithms;
      this._tunnel2Phase2IntegrityAlgorithms = config.tunnel2Phase2IntegrityAlgorithms;
      this._tunnel2Phase2LifetimeSeconds = config.tunnel2Phase2LifetimeSeconds;
      this._tunnel2PresharedKey = config.tunnel2PresharedKey;
      this._tunnel2RekeyFuzzPercentage = config.tunnel2RekeyFuzzPercentage;
      this._tunnel2RekeyMarginTimeSeconds = config.tunnel2RekeyMarginTimeSeconds;
      this._tunnel2ReplayWindowSize = config.tunnel2ReplayWindowSize;
      this._tunnel2StartupAction = config.tunnel2StartupAction;
      this._tunnelInsideIpVersion = config.tunnelInsideIpVersion;
      this._type = config.type;
      this._vpnGatewayId = config.vpnGatewayId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // customer_gateway_configuration - computed: true, optional: false, required: false
    public get customerGatewayConfiguration() {
      return this.getStringAttribute('customer_gateway_configuration');
    }

    // customer_gateway_id - computed: false, optional: false, required: true
    private _customerGatewayId?: string; 
    public get customerGatewayId() {
      return this.getStringAttribute('customer_gateway_id');
    }
    public set customerGatewayId(value: string) {
      this._customerGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get customerGatewayIdInput() {
      return this._customerGatewayId
    }

    // enable_acceleration - computed: true, optional: true, required: false
    private _enableAcceleration?: boolean | cdktf.IResolvable | undefined; 
    public get enableAcceleration() {
      return this.getBooleanAttribute('enable_acceleration') as any;
    }
    public set enableAcceleration(value: boolean | cdktf.IResolvable | undefined) {
      this._enableAcceleration = value;
    }
    public resetEnableAcceleration() {
      this._enableAcceleration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableAccelerationInput() {
      return this._enableAcceleration
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // local_ipv4_network_cidr - computed: true, optional: true, required: false
    private _localIpv4NetworkCidr?: string | undefined; 
    public get localIpv4NetworkCidr() {
      return this.getStringAttribute('local_ipv4_network_cidr');
    }
    public set localIpv4NetworkCidr(value: string | undefined) {
      this._localIpv4NetworkCidr = value;
    }
    public resetLocalIpv4NetworkCidr() {
      this._localIpv4NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localIpv4NetworkCidrInput() {
      return this._localIpv4NetworkCidr
    }

    // local_ipv6_network_cidr - computed: true, optional: true, required: false
    private _localIpv6NetworkCidr?: string | undefined; 
    public get localIpv6NetworkCidr() {
      return this.getStringAttribute('local_ipv6_network_cidr');
    }
    public set localIpv6NetworkCidr(value: string | undefined) {
      this._localIpv6NetworkCidr = value;
    }
    public resetLocalIpv6NetworkCidr() {
      this._localIpv6NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localIpv6NetworkCidrInput() {
      return this._localIpv6NetworkCidr
    }

    // remote_ipv4_network_cidr - computed: true, optional: true, required: false
    private _remoteIpv4NetworkCidr?: string | undefined; 
    public get remoteIpv4NetworkCidr() {
      return this.getStringAttribute('remote_ipv4_network_cidr');
    }
    public set remoteIpv4NetworkCidr(value: string | undefined) {
      this._remoteIpv4NetworkCidr = value;
    }
    public resetRemoteIpv4NetworkCidr() {
      this._remoteIpv4NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get remoteIpv4NetworkCidrInput() {
      return this._remoteIpv4NetworkCidr
    }

    // remote_ipv6_network_cidr - computed: true, optional: true, required: false
    private _remoteIpv6NetworkCidr?: string | undefined; 
    public get remoteIpv6NetworkCidr() {
      return this.getStringAttribute('remote_ipv6_network_cidr');
    }
    public set remoteIpv6NetworkCidr(value: string | undefined) {
      this._remoteIpv6NetworkCidr = value;
    }
    public resetRemoteIpv6NetworkCidr() {
      this._remoteIpv6NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get remoteIpv6NetworkCidrInput() {
      return this._remoteIpv6NetworkCidr
    }

    // routes - computed: true, optional: false, required: false
    public routes(index: string) {
      return new VpnConnectionRoutes(this, 'routes', index);
    }

    // static_routes_only - computed: true, optional: true, required: false
    private _staticRoutesOnly?: boolean | cdktf.IResolvable | undefined; 
    public get staticRoutesOnly() {
      return this.getBooleanAttribute('static_routes_only') as any;
    }
    public set staticRoutesOnly(value: boolean | cdktf.IResolvable | undefined) {
      this._staticRoutesOnly = value;
    }
    public resetStaticRoutesOnly() {
      this._staticRoutesOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get staticRoutesOnlyInput() {
      return this._staticRoutesOnly
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // transit_gateway_attachment_id - computed: true, optional: false, required: false
    public get transitGatewayAttachmentId() {
      return this.getStringAttribute('transit_gateway_attachment_id');
    }

    // transit_gateway_id - computed: false, optional: true, required: false
    private _transitGatewayId?: string | undefined; 
    public get transitGatewayId() {
      return this.getStringAttribute('transit_gateway_id');
    }
    public set transitGatewayId(value: string | undefined) {
      this._transitGatewayId = value;
    }
    public resetTransitGatewayId() {
      this._transitGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayIdInput() {
      return this._transitGatewayId
    }

    // tunnel1_address - computed: true, optional: false, required: false
    public get tunnel1Address() {
      return this.getStringAttribute('tunnel1_address');
    }

    // tunnel1_bgp_asn - computed: true, optional: false, required: false
    public get tunnel1BgpAsn() {
      return this.getStringAttribute('tunnel1_bgp_asn');
    }

    // tunnel1_bgp_holdtime - computed: true, optional: false, required: false
    public get tunnel1BgpHoldtime() {
      return this.getNumberAttribute('tunnel1_bgp_holdtime');
    }

    // tunnel1_cgw_inside_address - computed: true, optional: false, required: false
    public get tunnel1CgwInsideAddress() {
      return this.getStringAttribute('tunnel1_cgw_inside_address');
    }

    // tunnel1_dpd_timeout_action - computed: false, optional: true, required: false
    private _tunnel1DpdTimeoutAction?: string | undefined; 
    public get tunnel1DpdTimeoutAction() {
      return this.getStringAttribute('tunnel1_dpd_timeout_action');
    }
    public set tunnel1DpdTimeoutAction(value: string | undefined) {
      this._tunnel1DpdTimeoutAction = value;
    }
    public resetTunnel1DpdTimeoutAction() {
      this._tunnel1DpdTimeoutAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel1DpdTimeoutActionInput() {
      return this._tunnel1DpdTimeoutAction
    }

    // tunnel1_dpd_timeout_seconds - computed: false, optional: true, required: false
    private _tunnel1DpdTimeoutSeconds?: number | undefined; 
    public get tunnel1DpdTimeoutSeconds() {
      return this.getNumberAttribute('tunnel1_dpd_timeout_seconds');
    }
    public set tunnel1DpdTimeoutSeconds(value: number | undefined) {
      this._tunnel1DpdTimeoutSeconds = value;
    }
    public resetTunnel1DpdTimeoutSeconds() {
      this._tunnel1DpdTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel1DpdTimeoutSecondsInput() {
      return this._tunnel1DpdTimeoutSeconds
    }

    // tunnel1_ike_versions - computed: false, optional: true, required: false
    private _tunnel1IkeVersions?: string[] | undefined; 
    public get tunnel1IkeVersions() {
      return this.getListAttribute('tunnel1_ike_versions');
    }
    public set tunnel1IkeVersions(value: string[] | undefined) {
      this._tunnel1IkeVersions = value;
    }
    public resetTunnel1IkeVersions() {
      this._tunnel1IkeVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel1IkeVersionsInput() {
      return this._tunnel1IkeVersions
    }

    // tunnel1_inside_cidr - computed: true, optional: true, required: false
    private _tunnel1InsideCidr?: string | undefined; 
    public get tunnel1InsideCidr() {
      return this.getStringAttribute('tunnel1_inside_cidr');
    }
    public set tunnel1InsideCidr(value: string | undefined) {
      this._tunnel1InsideCidr = value;
    }
    public resetTunnel1InsideCidr() {
      this._tunnel1InsideCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel1InsideCidrInput() {
      return this._tunnel1InsideCidr
    }

    // tunnel1_inside_ipv6_cidr - computed: true, optional: true, required: false
    private _tunnel1InsideIpv6Cidr?: string | undefined; 
    public get tunnel1InsideIpv6Cidr() {
      return this.getStringAttribute('tunnel1_inside_ipv6_cidr');
    }
    public set tunnel1InsideIpv6Cidr(value: string | undefined) {
      this._tunnel1InsideIpv6Cidr = value;
    }
    public resetTunnel1InsideIpv6Cidr() {
      this._tunnel1InsideIpv6Cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel1InsideIpv6CidrInput() {
      return this._tunnel1InsideIpv6Cidr
    }

    // tunnel1_phase1_dh_group_numbers - computed: false, optional: true, required: false
    private _tunnel1Phase1DhGroupNumbers?: number[] | undefined; 
    public get tunnel1Phase1DhGroupNumbers() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tunnel1_phase1_dh_group_numbers') as any;
    }
    public set tunnel1Phase1DhGroupNumbers(value: number[] | undefined) {
      this._tunnel1Phase1DhGroupNumbers = value;
    }
    public resetTunnel1Phase1DhGroupNumbers() {
      this._tunnel1Phase1DhGroupNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel1Phase1DhGroupNumbersInput() {
      return this._tunnel1Phase1DhGroupNumbers
    }

    // tunnel1_phase1_encryption_algorithms - computed: false, optional: true, required: false
    private _tunnel1Phase1EncryptionAlgorithms?: string[] | undefined; 
    public get tunnel1Phase1EncryptionAlgorithms() {
      return this.getListAttribute('tunnel1_phase1_encryption_algorithms');
    }
    public set tunnel1Phase1EncryptionAlgorithms(value: string[] | undefined) {
      this._tunnel1Phase1EncryptionAlgorithms = value;
    }
    public resetTunnel1Phase1EncryptionAlgorithms() {
      this._tunnel1Phase1EncryptionAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel1Phase1EncryptionAlgorithmsInput() {
      return this._tunnel1Phase1EncryptionAlgorithms
    }

    // tunnel1_phase1_integrity_algorithms - computed: false, optional: true, required: false
    private _tunnel1Phase1IntegrityAlgorithms?: string[] | undefined; 
    public get tunnel1Phase1IntegrityAlgorithms() {
      return this.getListAttribute('tunnel1_phase1_integrity_algorithms');
    }
    public set tunnel1Phase1IntegrityAlgorithms(value: string[] | undefined) {
      this._tunnel1Phase1IntegrityAlgorithms = value;
    }
    public resetTunnel1Phase1IntegrityAlgorithms() {
      this._tunnel1Phase1IntegrityAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel1Phase1IntegrityAlgorithmsInput() {
      return this._tunnel1Phase1IntegrityAlgorithms
    }

    // tunnel1_phase1_lifetime_seconds - computed: false, optional: true, required: false
    private _tunnel1Phase1LifetimeSeconds?: number | undefined; 
    public get tunnel1Phase1LifetimeSeconds() {
      return this.getNumberAttribute('tunnel1_phase1_lifetime_seconds');
    }
    public set tunnel1Phase1LifetimeSeconds(value: number | undefined) {
      this._tunnel1Phase1LifetimeSeconds = value;
    }
    public resetTunnel1Phase1LifetimeSeconds() {
      this._tunnel1Phase1LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel1Phase1LifetimeSecondsInput() {
      return this._tunnel1Phase1LifetimeSeconds
    }

    // tunnel1_phase2_dh_group_numbers - computed: false, optional: true, required: false
    private _tunnel1Phase2DhGroupNumbers?: number[] | undefined; 
    public get tunnel1Phase2DhGroupNumbers() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tunnel1_phase2_dh_group_numbers') as any;
    }
    public set tunnel1Phase2DhGroupNumbers(value: number[] | undefined) {
      this._tunnel1Phase2DhGroupNumbers = value;
    }
    public resetTunnel1Phase2DhGroupNumbers() {
      this._tunnel1Phase2DhGroupNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel1Phase2DhGroupNumbersInput() {
      return this._tunnel1Phase2DhGroupNumbers
    }

    // tunnel1_phase2_encryption_algorithms - computed: false, optional: true, required: false
    private _tunnel1Phase2EncryptionAlgorithms?: string[] | undefined; 
    public get tunnel1Phase2EncryptionAlgorithms() {
      return this.getListAttribute('tunnel1_phase2_encryption_algorithms');
    }
    public set tunnel1Phase2EncryptionAlgorithms(value: string[] | undefined) {
      this._tunnel1Phase2EncryptionAlgorithms = value;
    }
    public resetTunnel1Phase2EncryptionAlgorithms() {
      this._tunnel1Phase2EncryptionAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel1Phase2EncryptionAlgorithmsInput() {
      return this._tunnel1Phase2EncryptionAlgorithms
    }

    // tunnel1_phase2_integrity_algorithms - computed: false, optional: true, required: false
    private _tunnel1Phase2IntegrityAlgorithms?: string[] | undefined; 
    public get tunnel1Phase2IntegrityAlgorithms() {
      return this.getListAttribute('tunnel1_phase2_integrity_algorithms');
    }
    public set tunnel1Phase2IntegrityAlgorithms(value: string[] | undefined) {
      this._tunnel1Phase2IntegrityAlgorithms = value;
    }
    public resetTunnel1Phase2IntegrityAlgorithms() {
      this._tunnel1Phase2IntegrityAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel1Phase2IntegrityAlgorithmsInput() {
      return this._tunnel1Phase2IntegrityAlgorithms
    }

    // tunnel1_phase2_lifetime_seconds - computed: false, optional: true, required: false
    private _tunnel1Phase2LifetimeSeconds?: number | undefined; 
    public get tunnel1Phase2LifetimeSeconds() {
      return this.getNumberAttribute('tunnel1_phase2_lifetime_seconds');
    }
    public set tunnel1Phase2LifetimeSeconds(value: number | undefined) {
      this._tunnel1Phase2LifetimeSeconds = value;
    }
    public resetTunnel1Phase2LifetimeSeconds() {
      this._tunnel1Phase2LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel1Phase2LifetimeSecondsInput() {
      return this._tunnel1Phase2LifetimeSeconds
    }

    // tunnel1_preshared_key - computed: true, optional: true, required: false
    private _tunnel1PresharedKey?: string | undefined; 
    public get tunnel1PresharedKey() {
      return this.getStringAttribute('tunnel1_preshared_key');
    }
    public set tunnel1PresharedKey(value: string | undefined) {
      this._tunnel1PresharedKey = value;
    }
    public resetTunnel1PresharedKey() {
      this._tunnel1PresharedKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel1PresharedKeyInput() {
      return this._tunnel1PresharedKey
    }

    // tunnel1_rekey_fuzz_percentage - computed: false, optional: true, required: false
    private _tunnel1RekeyFuzzPercentage?: number | undefined; 
    public get tunnel1RekeyFuzzPercentage() {
      return this.getNumberAttribute('tunnel1_rekey_fuzz_percentage');
    }
    public set tunnel1RekeyFuzzPercentage(value: number | undefined) {
      this._tunnel1RekeyFuzzPercentage = value;
    }
    public resetTunnel1RekeyFuzzPercentage() {
      this._tunnel1RekeyFuzzPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel1RekeyFuzzPercentageInput() {
      return this._tunnel1RekeyFuzzPercentage
    }

    // tunnel1_rekey_margin_time_seconds - computed: false, optional: true, required: false
    private _tunnel1RekeyMarginTimeSeconds?: number | undefined; 
    public get tunnel1RekeyMarginTimeSeconds() {
      return this.getNumberAttribute('tunnel1_rekey_margin_time_seconds');
    }
    public set tunnel1RekeyMarginTimeSeconds(value: number | undefined) {
      this._tunnel1RekeyMarginTimeSeconds = value;
    }
    public resetTunnel1RekeyMarginTimeSeconds() {
      this._tunnel1RekeyMarginTimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel1RekeyMarginTimeSecondsInput() {
      return this._tunnel1RekeyMarginTimeSeconds
    }

    // tunnel1_replay_window_size - computed: false, optional: true, required: false
    private _tunnel1ReplayWindowSize?: number | undefined; 
    public get tunnel1ReplayWindowSize() {
      return this.getNumberAttribute('tunnel1_replay_window_size');
    }
    public set tunnel1ReplayWindowSize(value: number | undefined) {
      this._tunnel1ReplayWindowSize = value;
    }
    public resetTunnel1ReplayWindowSize() {
      this._tunnel1ReplayWindowSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel1ReplayWindowSizeInput() {
      return this._tunnel1ReplayWindowSize
    }

    // tunnel1_startup_action - computed: false, optional: true, required: false
    private _tunnel1StartupAction?: string | undefined; 
    public get tunnel1StartupAction() {
      return this.getStringAttribute('tunnel1_startup_action');
    }
    public set tunnel1StartupAction(value: string | undefined) {
      this._tunnel1StartupAction = value;
    }
    public resetTunnel1StartupAction() {
      this._tunnel1StartupAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel1StartupActionInput() {
      return this._tunnel1StartupAction
    }

    // tunnel1_vgw_inside_address - computed: true, optional: false, required: false
    public get tunnel1VgwInsideAddress() {
      return this.getStringAttribute('tunnel1_vgw_inside_address');
    }

    // tunnel2_address - computed: true, optional: false, required: false
    public get tunnel2Address() {
      return this.getStringAttribute('tunnel2_address');
    }

    // tunnel2_bgp_asn - computed: true, optional: false, required: false
    public get tunnel2BgpAsn() {
      return this.getStringAttribute('tunnel2_bgp_asn');
    }

    // tunnel2_bgp_holdtime - computed: true, optional: false, required: false
    public get tunnel2BgpHoldtime() {
      return this.getNumberAttribute('tunnel2_bgp_holdtime');
    }

    // tunnel2_cgw_inside_address - computed: true, optional: false, required: false
    public get tunnel2CgwInsideAddress() {
      return this.getStringAttribute('tunnel2_cgw_inside_address');
    }

    // tunnel2_dpd_timeout_action - computed: false, optional: true, required: false
    private _tunnel2DpdTimeoutAction?: string | undefined; 
    public get tunnel2DpdTimeoutAction() {
      return this.getStringAttribute('tunnel2_dpd_timeout_action');
    }
    public set tunnel2DpdTimeoutAction(value: string | undefined) {
      this._tunnel2DpdTimeoutAction = value;
    }
    public resetTunnel2DpdTimeoutAction() {
      this._tunnel2DpdTimeoutAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel2DpdTimeoutActionInput() {
      return this._tunnel2DpdTimeoutAction
    }

    // tunnel2_dpd_timeout_seconds - computed: false, optional: true, required: false
    private _tunnel2DpdTimeoutSeconds?: number | undefined; 
    public get tunnel2DpdTimeoutSeconds() {
      return this.getNumberAttribute('tunnel2_dpd_timeout_seconds');
    }
    public set tunnel2DpdTimeoutSeconds(value: number | undefined) {
      this._tunnel2DpdTimeoutSeconds = value;
    }
    public resetTunnel2DpdTimeoutSeconds() {
      this._tunnel2DpdTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel2DpdTimeoutSecondsInput() {
      return this._tunnel2DpdTimeoutSeconds
    }

    // tunnel2_ike_versions - computed: false, optional: true, required: false
    private _tunnel2IkeVersions?: string[] | undefined; 
    public get tunnel2IkeVersions() {
      return this.getListAttribute('tunnel2_ike_versions');
    }
    public set tunnel2IkeVersions(value: string[] | undefined) {
      this._tunnel2IkeVersions = value;
    }
    public resetTunnel2IkeVersions() {
      this._tunnel2IkeVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel2IkeVersionsInput() {
      return this._tunnel2IkeVersions
    }

    // tunnel2_inside_cidr - computed: true, optional: true, required: false
    private _tunnel2InsideCidr?: string | undefined; 
    public get tunnel2InsideCidr() {
      return this.getStringAttribute('tunnel2_inside_cidr');
    }
    public set tunnel2InsideCidr(value: string | undefined) {
      this._tunnel2InsideCidr = value;
    }
    public resetTunnel2InsideCidr() {
      this._tunnel2InsideCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel2InsideCidrInput() {
      return this._tunnel2InsideCidr
    }

    // tunnel2_inside_ipv6_cidr - computed: true, optional: true, required: false
    private _tunnel2InsideIpv6Cidr?: string | undefined; 
    public get tunnel2InsideIpv6Cidr() {
      return this.getStringAttribute('tunnel2_inside_ipv6_cidr');
    }
    public set tunnel2InsideIpv6Cidr(value: string | undefined) {
      this._tunnel2InsideIpv6Cidr = value;
    }
    public resetTunnel2InsideIpv6Cidr() {
      this._tunnel2InsideIpv6Cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel2InsideIpv6CidrInput() {
      return this._tunnel2InsideIpv6Cidr
    }

    // tunnel2_phase1_dh_group_numbers - computed: false, optional: true, required: false
    private _tunnel2Phase1DhGroupNumbers?: number[] | undefined; 
    public get tunnel2Phase1DhGroupNumbers() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tunnel2_phase1_dh_group_numbers') as any;
    }
    public set tunnel2Phase1DhGroupNumbers(value: number[] | undefined) {
      this._tunnel2Phase1DhGroupNumbers = value;
    }
    public resetTunnel2Phase1DhGroupNumbers() {
      this._tunnel2Phase1DhGroupNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel2Phase1DhGroupNumbersInput() {
      return this._tunnel2Phase1DhGroupNumbers
    }

    // tunnel2_phase1_encryption_algorithms - computed: false, optional: true, required: false
    private _tunnel2Phase1EncryptionAlgorithms?: string[] | undefined; 
    public get tunnel2Phase1EncryptionAlgorithms() {
      return this.getListAttribute('tunnel2_phase1_encryption_algorithms');
    }
    public set tunnel2Phase1EncryptionAlgorithms(value: string[] | undefined) {
      this._tunnel2Phase1EncryptionAlgorithms = value;
    }
    public resetTunnel2Phase1EncryptionAlgorithms() {
      this._tunnel2Phase1EncryptionAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel2Phase1EncryptionAlgorithmsInput() {
      return this._tunnel2Phase1EncryptionAlgorithms
    }

    // tunnel2_phase1_integrity_algorithms - computed: false, optional: true, required: false
    private _tunnel2Phase1IntegrityAlgorithms?: string[] | undefined; 
    public get tunnel2Phase1IntegrityAlgorithms() {
      return this.getListAttribute('tunnel2_phase1_integrity_algorithms');
    }
    public set tunnel2Phase1IntegrityAlgorithms(value: string[] | undefined) {
      this._tunnel2Phase1IntegrityAlgorithms = value;
    }
    public resetTunnel2Phase1IntegrityAlgorithms() {
      this._tunnel2Phase1IntegrityAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel2Phase1IntegrityAlgorithmsInput() {
      return this._tunnel2Phase1IntegrityAlgorithms
    }

    // tunnel2_phase1_lifetime_seconds - computed: false, optional: true, required: false
    private _tunnel2Phase1LifetimeSeconds?: number | undefined; 
    public get tunnel2Phase1LifetimeSeconds() {
      return this.getNumberAttribute('tunnel2_phase1_lifetime_seconds');
    }
    public set tunnel2Phase1LifetimeSeconds(value: number | undefined) {
      this._tunnel2Phase1LifetimeSeconds = value;
    }
    public resetTunnel2Phase1LifetimeSeconds() {
      this._tunnel2Phase1LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel2Phase1LifetimeSecondsInput() {
      return this._tunnel2Phase1LifetimeSeconds
    }

    // tunnel2_phase2_dh_group_numbers - computed: false, optional: true, required: false
    private _tunnel2Phase2DhGroupNumbers?: number[] | undefined; 
    public get tunnel2Phase2DhGroupNumbers() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tunnel2_phase2_dh_group_numbers') as any;
    }
    public set tunnel2Phase2DhGroupNumbers(value: number[] | undefined) {
      this._tunnel2Phase2DhGroupNumbers = value;
    }
    public resetTunnel2Phase2DhGroupNumbers() {
      this._tunnel2Phase2DhGroupNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel2Phase2DhGroupNumbersInput() {
      return this._tunnel2Phase2DhGroupNumbers
    }

    // tunnel2_phase2_encryption_algorithms - computed: false, optional: true, required: false
    private _tunnel2Phase2EncryptionAlgorithms?: string[] | undefined; 
    public get tunnel2Phase2EncryptionAlgorithms() {
      return this.getListAttribute('tunnel2_phase2_encryption_algorithms');
    }
    public set tunnel2Phase2EncryptionAlgorithms(value: string[] | undefined) {
      this._tunnel2Phase2EncryptionAlgorithms = value;
    }
    public resetTunnel2Phase2EncryptionAlgorithms() {
      this._tunnel2Phase2EncryptionAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel2Phase2EncryptionAlgorithmsInput() {
      return this._tunnel2Phase2EncryptionAlgorithms
    }

    // tunnel2_phase2_integrity_algorithms - computed: false, optional: true, required: false
    private _tunnel2Phase2IntegrityAlgorithms?: string[] | undefined; 
    public get tunnel2Phase2IntegrityAlgorithms() {
      return this.getListAttribute('tunnel2_phase2_integrity_algorithms');
    }
    public set tunnel2Phase2IntegrityAlgorithms(value: string[] | undefined) {
      this._tunnel2Phase2IntegrityAlgorithms = value;
    }
    public resetTunnel2Phase2IntegrityAlgorithms() {
      this._tunnel2Phase2IntegrityAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel2Phase2IntegrityAlgorithmsInput() {
      return this._tunnel2Phase2IntegrityAlgorithms
    }

    // tunnel2_phase2_lifetime_seconds - computed: false, optional: true, required: false
    private _tunnel2Phase2LifetimeSeconds?: number | undefined; 
    public get tunnel2Phase2LifetimeSeconds() {
      return this.getNumberAttribute('tunnel2_phase2_lifetime_seconds');
    }
    public set tunnel2Phase2LifetimeSeconds(value: number | undefined) {
      this._tunnel2Phase2LifetimeSeconds = value;
    }
    public resetTunnel2Phase2LifetimeSeconds() {
      this._tunnel2Phase2LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel2Phase2LifetimeSecondsInput() {
      return this._tunnel2Phase2LifetimeSeconds
    }

    // tunnel2_preshared_key - computed: true, optional: true, required: false
    private _tunnel2PresharedKey?: string | undefined; 
    public get tunnel2PresharedKey() {
      return this.getStringAttribute('tunnel2_preshared_key');
    }
    public set tunnel2PresharedKey(value: string | undefined) {
      this._tunnel2PresharedKey = value;
    }
    public resetTunnel2PresharedKey() {
      this._tunnel2PresharedKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel2PresharedKeyInput() {
      return this._tunnel2PresharedKey
    }

    // tunnel2_rekey_fuzz_percentage - computed: false, optional: true, required: false
    private _tunnel2RekeyFuzzPercentage?: number | undefined; 
    public get tunnel2RekeyFuzzPercentage() {
      return this.getNumberAttribute('tunnel2_rekey_fuzz_percentage');
    }
    public set tunnel2RekeyFuzzPercentage(value: number | undefined) {
      this._tunnel2RekeyFuzzPercentage = value;
    }
    public resetTunnel2RekeyFuzzPercentage() {
      this._tunnel2RekeyFuzzPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel2RekeyFuzzPercentageInput() {
      return this._tunnel2RekeyFuzzPercentage
    }

    // tunnel2_rekey_margin_time_seconds - computed: false, optional: true, required: false
    private _tunnel2RekeyMarginTimeSeconds?: number | undefined; 
    public get tunnel2RekeyMarginTimeSeconds() {
      return this.getNumberAttribute('tunnel2_rekey_margin_time_seconds');
    }
    public set tunnel2RekeyMarginTimeSeconds(value: number | undefined) {
      this._tunnel2RekeyMarginTimeSeconds = value;
    }
    public resetTunnel2RekeyMarginTimeSeconds() {
      this._tunnel2RekeyMarginTimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel2RekeyMarginTimeSecondsInput() {
      return this._tunnel2RekeyMarginTimeSeconds
    }

    // tunnel2_replay_window_size - computed: false, optional: true, required: false
    private _tunnel2ReplayWindowSize?: number | undefined; 
    public get tunnel2ReplayWindowSize() {
      return this.getNumberAttribute('tunnel2_replay_window_size');
    }
    public set tunnel2ReplayWindowSize(value: number | undefined) {
      this._tunnel2ReplayWindowSize = value;
    }
    public resetTunnel2ReplayWindowSize() {
      this._tunnel2ReplayWindowSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel2ReplayWindowSizeInput() {
      return this._tunnel2ReplayWindowSize
    }

    // tunnel2_startup_action - computed: false, optional: true, required: false
    private _tunnel2StartupAction?: string | undefined; 
    public get tunnel2StartupAction() {
      return this.getStringAttribute('tunnel2_startup_action');
    }
    public set tunnel2StartupAction(value: string | undefined) {
      this._tunnel2StartupAction = value;
    }
    public resetTunnel2StartupAction() {
      this._tunnel2StartupAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnel2StartupActionInput() {
      return this._tunnel2StartupAction
    }

    // tunnel2_vgw_inside_address - computed: true, optional: false, required: false
    public get tunnel2VgwInsideAddress() {
      return this.getStringAttribute('tunnel2_vgw_inside_address');
    }

    // tunnel_inside_ip_version - computed: true, optional: true, required: false
    private _tunnelInsideIpVersion?: string | undefined; 
    public get tunnelInsideIpVersion() {
      return this.getStringAttribute('tunnel_inside_ip_version');
    }
    public set tunnelInsideIpVersion(value: string | undefined) {
      this._tunnelInsideIpVersion = value;
    }
    public resetTunnelInsideIpVersion() {
      this._tunnelInsideIpVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnelInsideIpVersionInput() {
      return this._tunnelInsideIpVersion
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // vgw_telemetry - computed: true, optional: false, required: false
    public vgwTelemetry(index: string) {
      return new VpnConnectionVgwTelemetry(this, 'vgw_telemetry', index);
    }

    // vpn_gateway_id - computed: false, optional: true, required: false
    private _vpnGatewayId?: string | undefined; 
    public get vpnGatewayId() {
      return this.getStringAttribute('vpn_gateway_id');
    }
    public set vpnGatewayId(value: string | undefined) {
      this._vpnGatewayId = value;
    }
    public resetVpnGatewayId() {
      this._vpnGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpnGatewayIdInput() {
      return this._vpnGatewayId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        customer_gateway_id: cdktf.stringToTerraform(this._customerGatewayId),
        enable_acceleration: cdktf.booleanToTerraform(this._enableAcceleration),
        local_ipv4_network_cidr: cdktf.stringToTerraform(this._localIpv4NetworkCidr),
        local_ipv6_network_cidr: cdktf.stringToTerraform(this._localIpv6NetworkCidr),
        remote_ipv4_network_cidr: cdktf.stringToTerraform(this._remoteIpv4NetworkCidr),
        remote_ipv6_network_cidr: cdktf.stringToTerraform(this._remoteIpv6NetworkCidr),
        static_routes_only: cdktf.booleanToTerraform(this._staticRoutesOnly),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
        tunnel1_dpd_timeout_action: cdktf.stringToTerraform(this._tunnel1DpdTimeoutAction),
        tunnel1_dpd_timeout_seconds: cdktf.numberToTerraform(this._tunnel1DpdTimeoutSeconds),
        tunnel1_ike_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1IkeVersions),
        tunnel1_inside_cidr: cdktf.stringToTerraform(this._tunnel1InsideCidr),
        tunnel1_inside_ipv6_cidr: cdktf.stringToTerraform(this._tunnel1InsideIpv6Cidr),
        tunnel1_phase1_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel1Phase1DhGroupNumbers),
        tunnel1_phase1_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase1EncryptionAlgorithms),
        tunnel1_phase1_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase1IntegrityAlgorithms),
        tunnel1_phase1_lifetime_seconds: cdktf.numberToTerraform(this._tunnel1Phase1LifetimeSeconds),
        tunnel1_phase2_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel1Phase2DhGroupNumbers),
        tunnel1_phase2_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase2EncryptionAlgorithms),
        tunnel1_phase2_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase2IntegrityAlgorithms),
        tunnel1_phase2_lifetime_seconds: cdktf.numberToTerraform(this._tunnel1Phase2LifetimeSeconds),
        tunnel1_preshared_key: cdktf.stringToTerraform(this._tunnel1PresharedKey),
        tunnel1_rekey_fuzz_percentage: cdktf.numberToTerraform(this._tunnel1RekeyFuzzPercentage),
        tunnel1_rekey_margin_time_seconds: cdktf.numberToTerraform(this._tunnel1RekeyMarginTimeSeconds),
        tunnel1_replay_window_size: cdktf.numberToTerraform(this._tunnel1ReplayWindowSize),
        tunnel1_startup_action: cdktf.stringToTerraform(this._tunnel1StartupAction),
        tunnel2_dpd_timeout_action: cdktf.stringToTerraform(this._tunnel2DpdTimeoutAction),
        tunnel2_dpd_timeout_seconds: cdktf.numberToTerraform(this._tunnel2DpdTimeoutSeconds),
        tunnel2_ike_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2IkeVersions),
        tunnel2_inside_cidr: cdktf.stringToTerraform(this._tunnel2InsideCidr),
        tunnel2_inside_ipv6_cidr: cdktf.stringToTerraform(this._tunnel2InsideIpv6Cidr),
        tunnel2_phase1_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel2Phase1DhGroupNumbers),
        tunnel2_phase1_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase1EncryptionAlgorithms),
        tunnel2_phase1_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase1IntegrityAlgorithms),
        tunnel2_phase1_lifetime_seconds: cdktf.numberToTerraform(this._tunnel2Phase1LifetimeSeconds),
        tunnel2_phase2_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel2Phase2DhGroupNumbers),
        tunnel2_phase2_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase2EncryptionAlgorithms),
        tunnel2_phase2_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase2IntegrityAlgorithms),
        tunnel2_phase2_lifetime_seconds: cdktf.numberToTerraform(this._tunnel2Phase2LifetimeSeconds),
        tunnel2_preshared_key: cdktf.stringToTerraform(this._tunnel2PresharedKey),
        tunnel2_rekey_fuzz_percentage: cdktf.numberToTerraform(this._tunnel2RekeyFuzzPercentage),
        tunnel2_rekey_margin_time_seconds: cdktf.numberToTerraform(this._tunnel2RekeyMarginTimeSeconds),
        tunnel2_replay_window_size: cdktf.numberToTerraform(this._tunnel2ReplayWindowSize),
        tunnel2_startup_action: cdktf.stringToTerraform(this._tunnel2StartupAction),
        tunnel_inside_ip_version: cdktf.stringToTerraform(this._tunnelInsideIpVersion),
        type: cdktf.stringToTerraform(this._type),
        vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
      };
    }
  }
  export interface VpnConnectionRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection_route.html#destination_cidr_block VpnConnectionRoute#destination_cidr_block}
    */
    readonly destinationCidrBlock: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection_route.html#vpn_connection_id VpnConnectionRoute#vpn_connection_id}
    */
    readonly vpnConnectionId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection_route.html aws_vpn_connection_route}
  */
  export class VpnConnectionRoute extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpn_connection_route";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection_route.html aws_vpn_connection_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpnConnectionRouteConfig
    */
    public constructor(scope: Construct, id: string, config: VpnConnectionRouteConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_vpn_connection_route',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._destinationCidrBlock = config.destinationCidrBlock;
      this._vpnConnectionId = config.vpnConnectionId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // destination_cidr_block - computed: false, optional: false, required: true
    private _destinationCidrBlock?: string; 
    public get destinationCidrBlock() {
      return this.getStringAttribute('destination_cidr_block');
    }
    public set destinationCidrBlock(value: string) {
      this._destinationCidrBlock = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationCidrBlockInput() {
      return this._destinationCidrBlock
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // vpn_connection_id - computed: false, optional: false, required: true
    private _vpnConnectionId?: string; 
    public get vpnConnectionId() {
      return this.getStringAttribute('vpn_connection_id');
    }
    public set vpnConnectionId(value: string) {
      this._vpnConnectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpnConnectionIdInput() {
      return this._vpnConnectionId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
        vpn_connection_id: cdktf.stringToTerraform(this._vpnConnectionId),
      };
    }
  }
  export interface VpnGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway.html#amazon_side_asn VpnGateway#amazon_side_asn}
    */
    readonly amazonSideAsn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway.html#availability_zone VpnGateway#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway.html#tags VpnGateway#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway.html#tags_all VpnGateway#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway.html#vpc_id VpnGateway#vpc_id}
    */
    readonly vpcId?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway.html aws_vpn_gateway}
  */
  export class VpnGateway extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpn_gateway";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway.html aws_vpn_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpnGatewayConfig = {}
    */
    public constructor(scope: Construct, id: string, config: VpnGatewayConfig = {}) {
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
      this._availabilityZone = config.availabilityZone;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // amazon_side_asn - computed: true, optional: true, required: false
    private _amazonSideAsn?: string | undefined; 
    public get amazonSideAsn() {
      return this.getStringAttribute('amazon_side_asn');
    }
    public set amazonSideAsn(value: string | undefined) {
      this._amazonSideAsn = value;
    }
    public resetAmazonSideAsn() {
      this._amazonSideAsn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonSideAsnInput() {
      return this._amazonSideAsn
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // availability_zone - computed: false, optional: true, required: false
    private _availabilityZone?: string | undefined; 
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string | undefined) {
      this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
      this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
      return this._availabilityZone
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vpc_id - computed: true, optional: true, required: false
    private _vpcId?: string | undefined; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string | undefined) {
      this._vpcId = value;
    }
    public resetVpcId() {
      this._vpcId = undefined;
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
        amazon_side_asn: cdktf.stringToTerraform(this._amazonSideAsn),
        availability_zone: cdktf.stringToTerraform(this._availabilityZone),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
      };
    }
  }
  export interface VpnGatewayAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_attachment.html#vpc_id VpnGatewayAttachment#vpc_id}
    */
    readonly vpcId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_attachment.html#vpn_gateway_id VpnGatewayAttachment#vpn_gateway_id}
    */
    readonly vpnGatewayId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_attachment.html aws_vpn_gateway_attachment}
  */
  export class VpnGatewayAttachment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpn_gateway_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_attachment.html aws_vpn_gateway_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpnGatewayAttachmentConfig
    */
    public constructor(scope: Construct, id: string, config: VpnGatewayAttachmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_vpn_gateway_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._vpcId = config.vpcId;
      this._vpnGatewayId = config.vpnGatewayId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
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

    // vpn_gateway_id - computed: false, optional: false, required: true
    private _vpnGatewayId?: string; 
    public get vpnGatewayId() {
      return this.getStringAttribute('vpn_gateway_id');
    }
    public set vpnGatewayId(value: string) {
      this._vpnGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpnGatewayIdInput() {
      return this._vpnGatewayId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
      };
    }
  }
  export interface VpnGatewayRoutePropagationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html#route_table_id VpnGatewayRoutePropagation#route_table_id}
    */
    readonly routeTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html#vpn_gateway_id VpnGatewayRoutePropagation#vpn_gateway_id}
    */
    readonly vpnGatewayId: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html#timeouts VpnGatewayRoutePropagation#timeouts}
    */
    readonly timeouts?: VpnGatewayRoutePropagationTimeouts;
  }
  export interface VpnGatewayRoutePropagationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html#create VpnGatewayRoutePropagation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html#delete VpnGatewayRoutePropagation#delete}
    */
    readonly delete?: string;
  }

  function vpnGatewayRoutePropagationTimeoutsToTerraform(struct?: VpnGatewayRoutePropagationTimeoutsOutputReference | VpnGatewayRoutePropagationTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class VpnGatewayRoutePropagationTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html aws_vpn_gateway_route_propagation}
  */
  export class VpnGatewayRoutePropagation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpn_gateway_route_propagation";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html aws_vpn_gateway_route_propagation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpnGatewayRoutePropagationConfig
    */
    public constructor(scope: Construct, id: string, config: VpnGatewayRoutePropagationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_vpn_gateway_route_propagation',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._routeTableId = config.routeTableId;
      this._vpnGatewayId = config.vpnGatewayId;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // route_table_id - computed: false, optional: false, required: true
    private _routeTableId?: string; 
    public get routeTableId() {
      return this.getStringAttribute('route_table_id');
    }
    public set routeTableId(value: string) {
      this._routeTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routeTableIdInput() {
      return this._routeTableId
    }

    // vpn_gateway_id - computed: false, optional: false, required: true
    private _vpnGatewayId?: string; 
    public get vpnGatewayId() {
      return this.getStringAttribute('vpn_gateway_id');
    }
    public set vpnGatewayId(value: string) {
      this._vpnGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpnGatewayIdInput() {
      return this._vpnGatewayId
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: VpnGatewayRoutePropagationTimeouts | undefined; 
    private __timeoutsOutput = new VpnGatewayRoutePropagationTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: VpnGatewayRoutePropagationTimeouts | undefined) {
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
        route_table_id: cdktf.stringToTerraform(this._routeTableId),
        vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
        timeouts: vpnGatewayRoutePropagationTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DataAwsCustomerGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/customer_gateway.html#tags DataAwsCustomerGateway#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/customer_gateway.html#filter DataAwsCustomerGateway#filter}
    */
    readonly filter?: DataAwsCustomerGatewayFilter[];
  }
  export interface DataAwsCustomerGatewayFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/customer_gateway.html#name DataAwsCustomerGateway#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/customer_gateway.html#values DataAwsCustomerGateway#values}
    */
    readonly values: string[];
  }

  function dataAwsCustomerGatewayFilterToTerraform(struct?: DataAwsCustomerGatewayFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/customer_gateway.html aws_customer_gateway}
  */
  export class DataAwsCustomerGateway extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_customer_gateway";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/customer_gateway.html aws_customer_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCustomerGatewayConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsCustomerGatewayConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_customer_gateway',
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

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // bgp_asn - computed: true, optional: false, required: false
    public get bgpAsn() {
      return this.getNumberAttribute('bgp_asn');
    }

    // device_name - computed: true, optional: false, required: false
    public get deviceName() {
      return this.getStringAttribute('device_name');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ip_address - computed: true, optional: false, required: false
    public get ipAddress() {
      return this.getStringAttribute('ip_address');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsCustomerGatewayFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsCustomerGatewayFilter[] | undefined) {
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
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsCustomerGatewayFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsInternetGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html#internet_gateway_id DataAwsInternetGateway#internet_gateway_id}
    */
    readonly internetGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html#tags DataAwsInternetGateway#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html#filter DataAwsInternetGateway#filter}
    */
    readonly filter?: DataAwsInternetGatewayFilter[];
  }
  export class DataAwsInternetGatewayAttachments extends cdktf.ComplexComputedList {

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
  }
  export interface DataAwsInternetGatewayFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html#name DataAwsInternetGateway#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html#values DataAwsInternetGateway#values}
    */
    readonly values: string[];
  }

  function dataAwsInternetGatewayFilterToTerraform(struct?: DataAwsInternetGatewayFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html aws_internet_gateway}
  */
  export class DataAwsInternetGateway extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_internet_gateway";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html aws_internet_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsInternetGatewayConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsInternetGatewayConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_internet_gateway',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._internetGatewayId = config.internetGatewayId;
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // attachments - computed: true, optional: false, required: false
    public attachments(index: string) {
      return new DataAwsInternetGatewayAttachments(this, 'attachments', index);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // internet_gateway_id - computed: true, optional: true, required: false
    private _internetGatewayId?: string | undefined; 
    public get internetGatewayId() {
      return this.getStringAttribute('internet_gateway_id');
    }
    public set internetGatewayId(value: string | undefined) {
      this._internetGatewayId = value;
    }
    public resetInternetGatewayId() {
      this._internetGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get internetGatewayIdInput() {
      return this._internetGatewayId
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsInternetGatewayFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsInternetGatewayFilter[] | undefined) {
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
        internet_gateway_id: cdktf.stringToTerraform(this._internetGatewayId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsInternetGatewayFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsNatGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html#state DataAwsNatGateway#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html#subnet_id DataAwsNatGateway#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html#tags DataAwsNatGateway#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html#vpc_id DataAwsNatGateway#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html#filter DataAwsNatGateway#filter}
    */
    readonly filter?: DataAwsNatGatewayFilter[];
  }
  export interface DataAwsNatGatewayFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html#name DataAwsNatGateway#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html#values DataAwsNatGateway#values}
    */
    readonly values: string[];
  }

  function dataAwsNatGatewayFilterToTerraform(struct?: DataAwsNatGatewayFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html aws_nat_gateway}
  */
  export class DataAwsNatGateway extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_nat_gateway";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html aws_nat_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNatGatewayConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsNatGatewayConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_nat_gateway',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._state = config.state;
      this._subnetId = config.subnetId;
      this._tags = config.tags;
      this._vpcId = config.vpcId;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allocation_id - computed: true, optional: false, required: false
    public get allocationId() {
      return this.getStringAttribute('allocation_id');
    }

    // connectivity_type - computed: true, optional: false, required: false
    public get connectivityType() {
      return this.getStringAttribute('connectivity_type');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // network_interface_id - computed: true, optional: false, required: false
    public get networkInterfaceId() {
      return this.getStringAttribute('network_interface_id');
    }

    // private_ip - computed: true, optional: false, required: false
    public get privateIp() {
      return this.getStringAttribute('private_ip');
    }

    // public_ip - computed: true, optional: false, required: false
    public get publicIp() {
      return this.getStringAttribute('public_ip');
    }

    // state - computed: true, optional: true, required: false
    private _state?: string | undefined; 
    public get state() {
      return this.getStringAttribute('state');
    }
    public set state(value: string | undefined) {
      this._state = value;
    }
    public resetState() {
      this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
      return this._state
    }

    // subnet_id - computed: true, optional: true, required: false
    private _subnetId?: string | undefined; 
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string | undefined) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _vpcId?: string | undefined; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string | undefined) {
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
    private _filter?: DataAwsNatGatewayFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsNatGatewayFilter[] | undefined) {
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
        state: cdktf.stringToTerraform(this._state),
        subnet_id: cdktf.stringToTerraform(this._subnetId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        filter: cdktf.listMapper(dataAwsNatGatewayFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsNetworkAclsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html#tags DataAwsNetworkAcls#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html#vpc_id DataAwsNetworkAcls#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html#filter DataAwsNetworkAcls#filter}
    */
    readonly filter?: DataAwsNetworkAclsFilter[];
  }
  export interface DataAwsNetworkAclsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html#name DataAwsNetworkAcls#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html#values DataAwsNetworkAcls#values}
    */
    readonly values: string[];
  }

  function dataAwsNetworkAclsFilterToTerraform(struct?: DataAwsNetworkAclsFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html aws_network_acls}
  */
  export class DataAwsNetworkAcls extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_network_acls";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html aws_network_acls} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNetworkAclsConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsNetworkAclsConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_network_acls',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._vpcId = config.vpcId;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // vpc_id - computed: false, optional: true, required: false
    private _vpcId?: string | undefined; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string | undefined) {
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
    private _filter?: DataAwsNetworkAclsFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsNetworkAclsFilter[] | undefined) {
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
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        filter: cdktf.listMapper(dataAwsNetworkAclsFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsNetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_interface.html#tags DataAwsNetworkInterface#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_interface.html#filter DataAwsNetworkInterface#filter}
    */
    readonly filter?: DataAwsNetworkInterfaceFilter[];
  }
  export class DataAwsNetworkInterfaceAssociation extends cdktf.ComplexComputedList {

    // allocation_id - computed: true, optional: false, required: false
    public get allocationId() {
      return this.getStringAttribute('allocation_id');
    }

    // association_id - computed: true, optional: false, required: false
    public get associationId() {
      return this.getStringAttribute('association_id');
    }

    // carrier_ip - computed: true, optional: false, required: false
    public get carrierIp() {
      return this.getStringAttribute('carrier_ip');
    }

    // customer_owned_ip - computed: true, optional: false, required: false
    public get customerOwnedIp() {
      return this.getStringAttribute('customer_owned_ip');
    }

    // ip_owner_id - computed: true, optional: false, required: false
    public get ipOwnerId() {
      return this.getStringAttribute('ip_owner_id');
    }

    // public_dns_name - computed: true, optional: false, required: false
    public get publicDnsName() {
      return this.getStringAttribute('public_dns_name');
    }

    // public_ip - computed: true, optional: false, required: false
    public get publicIp() {
      return this.getStringAttribute('public_ip');
    }
  }
  export class DataAwsNetworkInterfaceAttachment extends cdktf.ComplexComputedList {

    // attachment_id - computed: true, optional: false, required: false
    public get attachmentId() {
      return this.getStringAttribute('attachment_id');
    }

    // device_index - computed: true, optional: false, required: false
    public get deviceIndex() {
      return this.getNumberAttribute('device_index');
    }

    // instance_id - computed: true, optional: false, required: false
    public get instanceId() {
      return this.getStringAttribute('instance_id');
    }

    // instance_owner_id - computed: true, optional: false, required: false
    public get instanceOwnerId() {
      return this.getStringAttribute('instance_owner_id');
    }
  }
  export interface DataAwsNetworkInterfaceFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_interface.html#name DataAwsNetworkInterface#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_interface.html#values DataAwsNetworkInterface#values}
    */
    readonly values: string[];
  }

  function dataAwsNetworkInterfaceFilterToTerraform(struct?: DataAwsNetworkInterfaceFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/network_interface.html aws_network_interface}
  */
  export class DataAwsNetworkInterface extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_network_interface";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/network_interface.html aws_network_interface} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNetworkInterfaceConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsNetworkInterfaceConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_network_interface',
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

    // association - computed: true, optional: false, required: false
    public association(index: string) {
      return new DataAwsNetworkInterfaceAssociation(this, 'association', index);
    }

    // attachment - computed: true, optional: false, required: false
    public attachment(index: string) {
      return new DataAwsNetworkInterfaceAttachment(this, 'attachment', index);
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // interface_type - computed: true, optional: false, required: false
    public get interfaceType() {
      return this.getStringAttribute('interface_type');
    }

    // ipv6_addresses - computed: true, optional: false, required: false
    public get ipv6Addresses() {
      return this.getListAttribute('ipv6_addresses');
    }

    // mac_address - computed: true, optional: false, required: false
    public get macAddress() {
      return this.getStringAttribute('mac_address');
    }

    // outpost_arn - computed: true, optional: false, required: false
    public get outpostArn() {
      return this.getStringAttribute('outpost_arn');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // private_dns_name - computed: true, optional: false, required: false
    public get privateDnsName() {
      return this.getStringAttribute('private_dns_name');
    }

    // private_ip - computed: true, optional: false, required: false
    public get privateIp() {
      return this.getStringAttribute('private_ip');
    }

    // private_ips - computed: true, optional: false, required: false
    public get privateIps() {
      return this.getListAttribute('private_ips');
    }

    // requester_id - computed: true, optional: false, required: false
    public get requesterId() {
      return this.getStringAttribute('requester_id');
    }

    // security_groups - computed: true, optional: false, required: false
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }

    // subnet_id - computed: true, optional: false, required: false
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsNetworkInterfaceFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsNetworkInterfaceFilter[] | undefined) {
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
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsNetworkInterfaceFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsNetworkInterfacesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_interfaces.html#tags DataAwsNetworkInterfaces#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_interfaces.html#filter DataAwsNetworkInterfaces#filter}
    */
    readonly filter?: DataAwsNetworkInterfacesFilter[];
  }
  export interface DataAwsNetworkInterfacesFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_interfaces.html#name DataAwsNetworkInterfaces#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_interfaces.html#values DataAwsNetworkInterfaces#values}
    */
    readonly values: string[];
  }

  function dataAwsNetworkInterfacesFilterToTerraform(struct?: DataAwsNetworkInterfacesFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/network_interfaces.html aws_network_interfaces}
  */
  export class DataAwsNetworkInterfaces extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_network_interfaces";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/network_interfaces.html aws_network_interfaces} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNetworkInterfacesConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsNetworkInterfacesConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_network_interfaces',
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

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsNetworkInterfacesFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsNetworkInterfacesFilter[] | undefined) {
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
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsNetworkInterfacesFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#carrier_gateway_id DataAwsRoute#carrier_gateway_id}
    */
    readonly carrierGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#destination_cidr_block DataAwsRoute#destination_cidr_block}
    */
    readonly destinationCidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#destination_ipv6_cidr_block DataAwsRoute#destination_ipv6_cidr_block}
    */
    readonly destinationIpv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#destination_prefix_list_id DataAwsRoute#destination_prefix_list_id}
    */
    readonly destinationPrefixListId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#egress_only_gateway_id DataAwsRoute#egress_only_gateway_id}
    */
    readonly egressOnlyGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#gateway_id DataAwsRoute#gateway_id}
    */
    readonly gatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#instance_id DataAwsRoute#instance_id}
    */
    readonly instanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#local_gateway_id DataAwsRoute#local_gateway_id}
    */
    readonly localGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#nat_gateway_id DataAwsRoute#nat_gateway_id}
    */
    readonly natGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#network_interface_id DataAwsRoute#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#route_table_id DataAwsRoute#route_table_id}
    */
    readonly routeTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#transit_gateway_id DataAwsRoute#transit_gateway_id}
    */
    readonly transitGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route.html#vpc_peering_connection_id DataAwsRoute#vpc_peering_connection_id}
    */
    readonly vpcPeeringConnectionId?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/route.html aws_route}
  */
  export class DataAwsRoute extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route.html aws_route} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRouteConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsRouteConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._carrierGatewayId = config.carrierGatewayId;
      this._destinationCidrBlock = config.destinationCidrBlock;
      this._destinationIpv6CidrBlock = config.destinationIpv6CidrBlock;
      this._destinationPrefixListId = config.destinationPrefixListId;
      this._egressOnlyGatewayId = config.egressOnlyGatewayId;
      this._gatewayId = config.gatewayId;
      this._instanceId = config.instanceId;
      this._localGatewayId = config.localGatewayId;
      this._natGatewayId = config.natGatewayId;
      this._networkInterfaceId = config.networkInterfaceId;
      this._routeTableId = config.routeTableId;
      this._transitGatewayId = config.transitGatewayId;
      this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // carrier_gateway_id - computed: true, optional: true, required: false
    private _carrierGatewayId?: string | undefined; 
    public get carrierGatewayId() {
      return this.getStringAttribute('carrier_gateway_id');
    }
    public set carrierGatewayId(value: string | undefined) {
      this._carrierGatewayId = value;
    }
    public resetCarrierGatewayId() {
      this._carrierGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get carrierGatewayIdInput() {
      return this._carrierGatewayId
    }

    // destination_cidr_block - computed: true, optional: true, required: false
    private _destinationCidrBlock?: string | undefined; 
    public get destinationCidrBlock() {
      return this.getStringAttribute('destination_cidr_block');
    }
    public set destinationCidrBlock(value: string | undefined) {
      this._destinationCidrBlock = value;
    }
    public resetDestinationCidrBlock() {
      this._destinationCidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationCidrBlockInput() {
      return this._destinationCidrBlock
    }

    // destination_ipv6_cidr_block - computed: true, optional: true, required: false
    private _destinationIpv6CidrBlock?: string | undefined; 
    public get destinationIpv6CidrBlock() {
      return this.getStringAttribute('destination_ipv6_cidr_block');
    }
    public set destinationIpv6CidrBlock(value: string | undefined) {
      this._destinationIpv6CidrBlock = value;
    }
    public resetDestinationIpv6CidrBlock() {
      this._destinationIpv6CidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationIpv6CidrBlockInput() {
      return this._destinationIpv6CidrBlock
    }

    // destination_prefix_list_id - computed: true, optional: true, required: false
    private _destinationPrefixListId?: string | undefined; 
    public get destinationPrefixListId() {
      return this.getStringAttribute('destination_prefix_list_id');
    }
    public set destinationPrefixListId(value: string | undefined) {
      this._destinationPrefixListId = value;
    }
    public resetDestinationPrefixListId() {
      this._destinationPrefixListId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPrefixListIdInput() {
      return this._destinationPrefixListId
    }

    // egress_only_gateway_id - computed: true, optional: true, required: false
    private _egressOnlyGatewayId?: string | undefined; 
    public get egressOnlyGatewayId() {
      return this.getStringAttribute('egress_only_gateway_id');
    }
    public set egressOnlyGatewayId(value: string | undefined) {
      this._egressOnlyGatewayId = value;
    }
    public resetEgressOnlyGatewayId() {
      this._egressOnlyGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressOnlyGatewayIdInput() {
      return this._egressOnlyGatewayId
    }

    // gateway_id - computed: true, optional: true, required: false
    private _gatewayId?: string | undefined; 
    public get gatewayId() {
      return this.getStringAttribute('gateway_id');
    }
    public set gatewayId(value: string | undefined) {
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

    // instance_id - computed: true, optional: true, required: false
    private _instanceId?: string | undefined; 
    public get instanceId() {
      return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string | undefined) {
      this._instanceId = value;
    }
    public resetInstanceId() {
      this._instanceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
      return this._instanceId
    }

    // local_gateway_id - computed: true, optional: true, required: false
    private _localGatewayId?: string | undefined; 
    public get localGatewayId() {
      return this.getStringAttribute('local_gateway_id');
    }
    public set localGatewayId(value: string | undefined) {
      this._localGatewayId = value;
    }
    public resetLocalGatewayId() {
      this._localGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localGatewayIdInput() {
      return this._localGatewayId
    }

    // nat_gateway_id - computed: true, optional: true, required: false
    private _natGatewayId?: string | undefined; 
    public get natGatewayId() {
      return this.getStringAttribute('nat_gateway_id');
    }
    public set natGatewayId(value: string | undefined) {
      this._natGatewayId = value;
    }
    public resetNatGatewayId() {
      this._natGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get natGatewayIdInput() {
      return this._natGatewayId
    }

    // network_interface_id - computed: true, optional: true, required: false
    private _networkInterfaceId?: string | undefined; 
    public get networkInterfaceId() {
      return this.getStringAttribute('network_interface_id');
    }
    public set networkInterfaceId(value: string | undefined) {
      this._networkInterfaceId = value;
    }
    public resetNetworkInterfaceId() {
      this._networkInterfaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceIdInput() {
      return this._networkInterfaceId
    }

    // route_table_id - computed: false, optional: false, required: true
    private _routeTableId?: string; 
    public get routeTableId() {
      return this.getStringAttribute('route_table_id');
    }
    public set routeTableId(value: string) {
      this._routeTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routeTableIdInput() {
      return this._routeTableId
    }

    // transit_gateway_id - computed: true, optional: true, required: false
    private _transitGatewayId?: string | undefined; 
    public get transitGatewayId() {
      return this.getStringAttribute('transit_gateway_id');
    }
    public set transitGatewayId(value: string | undefined) {
      this._transitGatewayId = value;
    }
    public resetTransitGatewayId() {
      this._transitGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayIdInput() {
      return this._transitGatewayId
    }

    // vpc_peering_connection_id - computed: true, optional: true, required: false
    private _vpcPeeringConnectionId?: string | undefined; 
    public get vpcPeeringConnectionId() {
      return this.getStringAttribute('vpc_peering_connection_id');
    }
    public set vpcPeeringConnectionId(value: string | undefined) {
      this._vpcPeeringConnectionId = value;
    }
    public resetVpcPeeringConnectionId() {
      this._vpcPeeringConnectionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcPeeringConnectionIdInput() {
      return this._vpcPeeringConnectionId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        carrier_gateway_id: cdktf.stringToTerraform(this._carrierGatewayId),
        destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
        destination_ipv6_cidr_block: cdktf.stringToTerraform(this._destinationIpv6CidrBlock),
        destination_prefix_list_id: cdktf.stringToTerraform(this._destinationPrefixListId),
        egress_only_gateway_id: cdktf.stringToTerraform(this._egressOnlyGatewayId),
        gateway_id: cdktf.stringToTerraform(this._gatewayId),
        instance_id: cdktf.stringToTerraform(this._instanceId),
        local_gateway_id: cdktf.stringToTerraform(this._localGatewayId),
        nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
        network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
        route_table_id: cdktf.stringToTerraform(this._routeTableId),
        transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
        vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
      };
    }
  }
  export interface DataAwsRouteTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_table.html#gateway_id DataAwsRouteTable#gateway_id}
    */
    readonly gatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_table.html#route_table_id DataAwsRouteTable#route_table_id}
    */
    readonly routeTableId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_table.html#subnet_id DataAwsRouteTable#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_table.html#tags DataAwsRouteTable#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_table.html#vpc_id DataAwsRouteTable#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_table.html#filter DataAwsRouteTable#filter}
    */
    readonly filter?: DataAwsRouteTableFilter[];
  }
  export class DataAwsRouteTableAssociations extends cdktf.ComplexComputedList {

    // gateway_id - computed: true, optional: false, required: false
    public get gatewayId() {
      return this.getStringAttribute('gateway_id');
    }

    // main - computed: true, optional: false, required: false
    public get main() {
      return this.getBooleanAttribute('main') as any;
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

    // carrier_gateway_id - computed: true, optional: false, required: false
    public get carrierGatewayId() {
      return this.getStringAttribute('carrier_gateway_id');
    }

    // cidr_block - computed: true, optional: false, required: false
    public get cidrBlock() {
      return this.getStringAttribute('cidr_block');
    }

    // destination_prefix_list_id - computed: true, optional: false, required: false
    public get destinationPrefixListId() {
      return this.getStringAttribute('destination_prefix_list_id');
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

    // local_gateway_id - computed: true, optional: false, required: false
    public get localGatewayId() {
      return this.getStringAttribute('local_gateway_id');
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

    // vpc_endpoint_id - computed: true, optional: false, required: false
    public get vpcEndpointId() {
      return this.getStringAttribute('vpc_endpoint_id');
    }

    // vpc_peering_connection_id - computed: true, optional: false, required: false
    public get vpcPeeringConnectionId() {
      return this.getStringAttribute('vpc_peering_connection_id');
    }
  }
  export interface DataAwsRouteTableFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_table.html#name DataAwsRouteTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_table.html#values DataAwsRouteTable#values}
    */
    readonly values: string[];
  }

  function dataAwsRouteTableFilterToTerraform(struct?: DataAwsRouteTableFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/route_table.html aws_route_table}
  */
  export class DataAwsRouteTable extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route_table";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route_table.html aws_route_table} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRouteTableConfig = {}
    */
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

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // associations - computed: true, optional: false, required: false
    public associations(index: string) {
      return new DataAwsRouteTableAssociations(this, 'associations', index);
    }

    // gateway_id - computed: true, optional: true, required: false
    private _gatewayId?: string | undefined; 
    public get gatewayId() {
      return this.getStringAttribute('gateway_id');
    }
    public set gatewayId(value: string | undefined) {
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
    private _routeTableId?: string | undefined; 
    public get routeTableId() {
      return this.getStringAttribute('route_table_id');
    }
    public set routeTableId(value: string | undefined) {
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
    private _subnetId?: string | undefined; 
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string | undefined) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _vpcId?: string | undefined; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string | undefined) {
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
    private _filter?: DataAwsRouteTableFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsRouteTableFilter[] | undefined) {
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
  export interface DataAwsRouteTablesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_tables.html#tags DataAwsRouteTables#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_tables.html#vpc_id DataAwsRouteTables#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_tables.html#filter DataAwsRouteTables#filter}
    */
    readonly filter?: DataAwsRouteTablesFilter[];
  }
  export interface DataAwsRouteTablesFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_tables.html#name DataAwsRouteTables#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_tables.html#values DataAwsRouteTables#values}
    */
    readonly values: string[];
  }

  function dataAwsRouteTablesFilterToTerraform(struct?: DataAwsRouteTablesFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/route_tables.html aws_route_tables}
  */
  export class DataAwsRouteTables extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route_tables";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route_tables.html aws_route_tables} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRouteTablesConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsRouteTablesConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_route_tables',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._vpcId = config.vpcId;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // vpc_id - computed: false, optional: true, required: false
    private _vpcId?: string | undefined; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string | undefined) {
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
    private _filter?: DataAwsRouteTablesFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsRouteTablesFilter[] | undefined) {
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
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        filter: cdktf.listMapper(dataAwsRouteTablesFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsSecurityGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_group.html#name DataAwsSecurityGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_group.html#tags DataAwsSecurityGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_group.html#vpc_id DataAwsSecurityGroup#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_group.html#filter DataAwsSecurityGroup#filter}
    */
    readonly filter?: DataAwsSecurityGroupFilter[];
  }
  export interface DataAwsSecurityGroupFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_group.html#name DataAwsSecurityGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_group.html#values DataAwsSecurityGroup#values}
    */
    readonly values: string[];
  }

  function dataAwsSecurityGroupFilterToTerraform(struct?: DataAwsSecurityGroupFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/security_group.html aws_security_group}
  */
  export class DataAwsSecurityGroup extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_security_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/security_group.html aws_security_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSecurityGroupConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsSecurityGroupConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_security_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._tags = config.tags;
      this._vpcId = config.vpcId;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _vpcId?: string | undefined; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string | undefined) {
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
    private _filter?: DataAwsSecurityGroupFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsSecurityGroupFilter[] | undefined) {
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
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        filter: cdktf.listMapper(dataAwsSecurityGroupFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsSecurityGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_groups.html#tags DataAwsSecurityGroups#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_groups.html#filter DataAwsSecurityGroups#filter}
    */
    readonly filter?: DataAwsSecurityGroupsFilter[];
  }
  export interface DataAwsSecurityGroupsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_groups.html#name DataAwsSecurityGroups#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_groups.html#values DataAwsSecurityGroups#values}
    */
    readonly values: string[];
  }

  function dataAwsSecurityGroupsFilterToTerraform(struct?: DataAwsSecurityGroupsFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/security_groups.html aws_security_groups}
  */
  export class DataAwsSecurityGroups extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_security_groups";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/security_groups.html aws_security_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSecurityGroupsConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsSecurityGroupsConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_security_groups',
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

    // arns - computed: true, optional: false, required: false
    public get arns() {
      return this.getListAttribute('arns');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // vpc_ids - computed: true, optional: false, required: false
    public get vpcIds() {
      return this.getListAttribute('vpc_ids');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsSecurityGroupsFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsSecurityGroupsFilter[] | undefined) {
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
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsSecurityGroupsFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsSubnetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#availability_zone DataAwsSubnet#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#availability_zone_id DataAwsSubnet#availability_zone_id}
    */
    readonly availabilityZoneId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#cidr_block DataAwsSubnet#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#default_for_az DataAwsSubnet#default_for_az}
    */
    readonly defaultForAz?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#ipv6_cidr_block DataAwsSubnet#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#state DataAwsSubnet#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#tags DataAwsSubnet#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#vpc_id DataAwsSubnet#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#filter DataAwsSubnet#filter}
    */
    readonly filter?: DataAwsSubnetFilter[];
  }
  export interface DataAwsSubnetFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#name DataAwsSubnet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#values DataAwsSubnet#values}
    */
    readonly values: string[];
  }

  function dataAwsSubnetFilterToTerraform(struct?: DataAwsSubnetFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/subnet.html aws_subnet}
  */
  export class DataAwsSubnet extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_subnet";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/subnet.html aws_subnet} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSubnetConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsSubnetConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_subnet',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._availabilityZone = config.availabilityZone;
      this._availabilityZoneId = config.availabilityZoneId;
      this._cidrBlock = config.cidrBlock;
      this._defaultForAz = config.defaultForAz;
      this._ipv6CidrBlock = config.ipv6CidrBlock;
      this._state = config.state;
      this._tags = config.tags;
      this._vpcId = config.vpcId;
      this._filter = config.filter;
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
      return this.getBooleanAttribute('assign_ipv6_address_on_creation') as any;
    }

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string | undefined; 
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string | undefined) {
      this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
      this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
      return this._availabilityZone
    }

    // availability_zone_id - computed: true, optional: true, required: false
    private _availabilityZoneId?: string | undefined; 
    public get availabilityZoneId() {
      return this.getStringAttribute('availability_zone_id');
    }
    public set availabilityZoneId(value: string | undefined) {
      this._availabilityZoneId = value;
    }
    public resetAvailabilityZoneId() {
      this._availabilityZoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneIdInput() {
      return this._availabilityZoneId
    }

    // available_ip_address_count - computed: true, optional: false, required: false
    public get availableIpAddressCount() {
      return this.getNumberAttribute('available_ip_address_count');
    }

    // cidr_block - computed: true, optional: true, required: false
    private _cidrBlock?: string | undefined; 
    public get cidrBlock() {
      return this.getStringAttribute('cidr_block');
    }
    public set cidrBlock(value: string | undefined) {
      this._cidrBlock = value;
    }
    public resetCidrBlock() {
      this._cidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrBlockInput() {
      return this._cidrBlock
    }

    // customer_owned_ipv4_pool - computed: true, optional: false, required: false
    public get customerOwnedIpv4Pool() {
      return this.getStringAttribute('customer_owned_ipv4_pool');
    }

    // default_for_az - computed: true, optional: true, required: false
    private _defaultForAz?: boolean | cdktf.IResolvable | undefined; 
    public get defaultForAz() {
      return this.getBooleanAttribute('default_for_az') as any;
    }
    public set defaultForAz(value: boolean | cdktf.IResolvable | undefined) {
      this._defaultForAz = value;
    }
    public resetDefaultForAz() {
      this._defaultForAz = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultForAzInput() {
      return this._defaultForAz
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ipv6_cidr_block - computed: true, optional: true, required: false
    private _ipv6CidrBlock?: string | undefined; 
    public get ipv6CidrBlock() {
      return this.getStringAttribute('ipv6_cidr_block');
    }
    public set ipv6CidrBlock(value: string | undefined) {
      this._ipv6CidrBlock = value;
    }
    public resetIpv6CidrBlock() {
      this._ipv6CidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6CidrBlockInput() {
      return this._ipv6CidrBlock
    }

    // ipv6_cidr_block_association_id - computed: true, optional: false, required: false
    public get ipv6CidrBlockAssociationId() {
      return this.getStringAttribute('ipv6_cidr_block_association_id');
    }

    // map_customer_owned_ip_on_launch - computed: true, optional: false, required: false
    public get mapCustomerOwnedIpOnLaunch() {
      return this.getBooleanAttribute('map_customer_owned_ip_on_launch') as any;
    }

    // map_public_ip_on_launch - computed: true, optional: false, required: false
    public get mapPublicIpOnLaunch() {
      return this.getBooleanAttribute('map_public_ip_on_launch') as any;
    }

    // outpost_arn - computed: true, optional: false, required: false
    public get outpostArn() {
      return this.getStringAttribute('outpost_arn');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // state - computed: true, optional: true, required: false
    private _state?: string | undefined; 
    public get state() {
      return this.getStringAttribute('state');
    }
    public set state(value: string | undefined) {
      this._state = value;
    }
    public resetState() {
      this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
      return this._state
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _vpcId?: string | undefined; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string | undefined) {
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
    private _filter?: DataAwsSubnetFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsSubnetFilter[] | undefined) {
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
        availability_zone: cdktf.stringToTerraform(this._availabilityZone),
        availability_zone_id: cdktf.stringToTerraform(this._availabilityZoneId),
        cidr_block: cdktf.stringToTerraform(this._cidrBlock),
        default_for_az: cdktf.booleanToTerraform(this._defaultForAz),
        ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
        state: cdktf.stringToTerraform(this._state),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        filter: cdktf.listMapper(dataAwsSubnetFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsSubnetIdsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html#tags DataAwsSubnetIds#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html#vpc_id DataAwsSubnetIds#vpc_id}
    */
    readonly vpcId: string;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html#filter DataAwsSubnetIds#filter}
    */
    readonly filter?: DataAwsSubnetIdsFilter[];
  }
  export interface DataAwsSubnetIdsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html#name DataAwsSubnetIds#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html#values DataAwsSubnetIds#values}
    */
    readonly values: string[];
  }

  function dataAwsSubnetIdsFilterToTerraform(struct?: DataAwsSubnetIdsFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html aws_subnet_ids}
  */
  export class DataAwsSubnetIds extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_subnet_ids";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html aws_subnet_ids} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSubnetIdsConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsSubnetIdsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_subnet_ids',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._vpcId = config.vpcId;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _vpcId?: string; 
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

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsSubnetIdsFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsSubnetIdsFilter[] | undefined) {
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
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        filter: cdktf.listMapper(dataAwsSubnetIdsFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsSubnetsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnets.html#tags DataAwsSubnets#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnets.html#filter DataAwsSubnets#filter}
    */
    readonly filter?: DataAwsSubnetsFilter[];
  }
  export interface DataAwsSubnetsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnets.html#name DataAwsSubnets#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnets.html#values DataAwsSubnets#values}
    */
    readonly values: string[];
  }

  function dataAwsSubnetsFilterToTerraform(struct?: DataAwsSubnetsFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/subnets.html aws_subnets}
  */
  export class DataAwsSubnets extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_subnets";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/subnets.html aws_subnets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSubnetsConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsSubnetsConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_subnets',
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

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsSubnetsFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsSubnetsFilter[] | undefined) {
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
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsSubnetsFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsVpcConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#cidr_block DataAwsVpc#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#default DataAwsVpc#default}
    */
    readonly default?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#dhcp_options_id DataAwsVpc#dhcp_options_id}
    */
    readonly dhcpOptionsId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#state DataAwsVpc#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#tags DataAwsVpc#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#filter DataAwsVpc#filter}
    */
    readonly filter?: DataAwsVpcFilter[];
  }
  export class DataAwsVpcCidrBlockAssociations extends cdktf.ComplexComputedList {

    // association_id - computed: true, optional: false, required: false
    public get associationId() {
      return this.getStringAttribute('association_id');
    }

    // cidr_block - computed: true, optional: false, required: false
    public get cidrBlock() {
      return this.getStringAttribute('cidr_block');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }
  }
  export interface DataAwsVpcFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#name DataAwsVpc#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#values DataAwsVpc#values}
    */
    readonly values: string[];
  }

  function dataAwsVpcFilterToTerraform(struct?: DataAwsVpcFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc.html aws_vpc}
  */
  export class DataAwsVpc extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpc";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc.html aws_vpc} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsVpcConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_vpc',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._cidrBlock = config.cidrBlock;
      this._default = config.default;
      this._dhcpOptionsId = config.dhcpOptionsId;
      this._state = config.state;
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cidr_block - computed: true, optional: true, required: false
    private _cidrBlock?: string | undefined; 
    public get cidrBlock() {
      return this.getStringAttribute('cidr_block');
    }
    public set cidrBlock(value: string | undefined) {
      this._cidrBlock = value;
    }
    public resetCidrBlock() {
      this._cidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrBlockInput() {
      return this._cidrBlock
    }

    // cidr_block_associations - computed: true, optional: false, required: false
    public cidrBlockAssociations(index: string) {
      return new DataAwsVpcCidrBlockAssociations(this, 'cidr_block_associations', index);
    }

    // default - computed: true, optional: true, required: false
    private _default?: boolean | cdktf.IResolvable | undefined; 
    public get default() {
      return this.getBooleanAttribute('default') as any;
    }
    public set default(value: boolean | cdktf.IResolvable | undefined) {
      this._default = value;
    }
    public resetDefault() {
      this._default = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultInput() {
      return this._default
    }

    // dhcp_options_id - computed: true, optional: true, required: false
    private _dhcpOptionsId?: string | undefined; 
    public get dhcpOptionsId() {
      return this.getStringAttribute('dhcp_options_id');
    }
    public set dhcpOptionsId(value: string | undefined) {
      this._dhcpOptionsId = value;
    }
    public resetDhcpOptionsId() {
      this._dhcpOptionsId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dhcpOptionsIdInput() {
      return this._dhcpOptionsId
    }

    // enable_dns_hostnames - computed: true, optional: false, required: false
    public get enableDnsHostnames() {
      return this.getBooleanAttribute('enable_dns_hostnames') as any;
    }

    // enable_dns_support - computed: true, optional: false, required: false
    public get enableDnsSupport() {
      return this.getBooleanAttribute('enable_dns_support') as any;
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_tenancy - computed: true, optional: false, required: false
    public get instanceTenancy() {
      return this.getStringAttribute('instance_tenancy');
    }

    // ipv6_association_id - computed: true, optional: false, required: false
    public get ipv6AssociationId() {
      return this.getStringAttribute('ipv6_association_id');
    }

    // ipv6_cidr_block - computed: true, optional: false, required: false
    public get ipv6CidrBlock() {
      return this.getStringAttribute('ipv6_cidr_block');
    }

    // main_route_table_id - computed: true, optional: false, required: false
    public get mainRouteTableId() {
      return this.getStringAttribute('main_route_table_id');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // state - computed: true, optional: true, required: false
    private _state?: string | undefined; 
    public get state() {
      return this.getStringAttribute('state');
    }
    public set state(value: string | undefined) {
      this._state = value;
    }
    public resetState() {
      this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
      return this._state
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsVpcFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsVpcFilter[] | undefined) {
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
        cidr_block: cdktf.stringToTerraform(this._cidrBlock),
        default: cdktf.booleanToTerraform(this._default),
        dhcp_options_id: cdktf.stringToTerraform(this._dhcpOptionsId),
        state: cdktf.stringToTerraform(this._state),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsVpcFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsVpcDhcpOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options.html#dhcp_options_id DataAwsVpcDhcpOptions#dhcp_options_id}
    */
    readonly dhcpOptionsId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options.html#tags DataAwsVpcDhcpOptions#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options.html#filter DataAwsVpcDhcpOptions#filter}
    */
    readonly filter?: DataAwsVpcDhcpOptionsFilter[];
  }
  export interface DataAwsVpcDhcpOptionsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options.html#name DataAwsVpcDhcpOptions#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options.html#values DataAwsVpcDhcpOptions#values}
    */
    readonly values: string[];
  }

  function dataAwsVpcDhcpOptionsFilterToTerraform(struct?: DataAwsVpcDhcpOptionsFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options.html aws_vpc_dhcp_options}
  */
  export class DataAwsVpcDhcpOptions extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpc_dhcp_options";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options.html aws_vpc_dhcp_options} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcDhcpOptionsConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsVpcDhcpOptionsConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_vpc_dhcp_options',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dhcpOptionsId = config.dhcpOptionsId;
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // dhcp_options_id - computed: true, optional: true, required: false
    private _dhcpOptionsId?: string | undefined; 
    public get dhcpOptionsId() {
      return this.getStringAttribute('dhcp_options_id');
    }
    public set dhcpOptionsId(value: string | undefined) {
      this._dhcpOptionsId = value;
    }
    public resetDhcpOptionsId() {
      this._dhcpOptionsId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dhcpOptionsIdInput() {
      return this._dhcpOptionsId
    }

    // domain_name - computed: true, optional: false, required: false
    public get domainName() {
      return this.getStringAttribute('domain_name');
    }

    // domain_name_servers - computed: true, optional: false, required: false
    public get domainNameServers() {
      return this.getListAttribute('domain_name_servers');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // netbios_name_servers - computed: true, optional: false, required: false
    public get netbiosNameServers() {
      return this.getListAttribute('netbios_name_servers');
    }

    // netbios_node_type - computed: true, optional: false, required: false
    public get netbiosNodeType() {
      return this.getStringAttribute('netbios_node_type');
    }

    // ntp_servers - computed: true, optional: false, required: false
    public get ntpServers() {
      return this.getListAttribute('ntp_servers');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsVpcDhcpOptionsFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsVpcDhcpOptionsFilter[] | undefined) {
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
        dhcp_options_id: cdktf.stringToTerraform(this._dhcpOptionsId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsVpcDhcpOptionsFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsVpcEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#service_name DataAwsVpcEndpoint#service_name}
    */
    readonly serviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#state DataAwsVpcEndpoint#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#tags DataAwsVpcEndpoint#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#vpc_id DataAwsVpcEndpoint#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#filter DataAwsVpcEndpoint#filter}
    */
    readonly filter?: DataAwsVpcEndpointFilter[];
  }
  export class DataAwsVpcEndpointDnsEntry extends cdktf.ComplexComputedList {

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
      return this.getStringAttribute('dns_name');
    }

    // hosted_zone_id - computed: true, optional: false, required: false
    public get hostedZoneId() {
      return this.getStringAttribute('hosted_zone_id');
    }
  }
  export interface DataAwsVpcEndpointFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#name DataAwsVpcEndpoint#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#values DataAwsVpcEndpoint#values}
    */
    readonly values: string[];
  }

  function dataAwsVpcEndpointFilterToTerraform(struct?: DataAwsVpcEndpointFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html aws_vpc_endpoint}
  */
  export class DataAwsVpcEndpoint extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpc_endpoint";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html aws_vpc_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcEndpointConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsVpcEndpointConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_vpc_endpoint',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._serviceName = config.serviceName;
      this._state = config.state;
      this._tags = config.tags;
      this._vpcId = config.vpcId;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cidr_blocks - computed: true, optional: false, required: false
    public get cidrBlocks() {
      return this.getListAttribute('cidr_blocks');
    }

    // dns_entry - computed: true, optional: false, required: false
    public dnsEntry(index: string) {
      return new DataAwsVpcEndpointDnsEntry(this, 'dns_entry', index);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // network_interface_ids - computed: true, optional: false, required: false
    public get networkInterfaceIds() {
      return this.getListAttribute('network_interface_ids');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // policy - computed: true, optional: false, required: false
    public get policy() {
      return this.getStringAttribute('policy');
    }

    // prefix_list_id - computed: true, optional: false, required: false
    public get prefixListId() {
      return this.getStringAttribute('prefix_list_id');
    }

    // private_dns_enabled - computed: true, optional: false, required: false
    public get privateDnsEnabled() {
      return this.getBooleanAttribute('private_dns_enabled') as any;
    }

    // requester_managed - computed: true, optional: false, required: false
    public get requesterManaged() {
      return this.getBooleanAttribute('requester_managed') as any;
    }

    // route_table_ids - computed: true, optional: false, required: false
    public get routeTableIds() {
      return this.getListAttribute('route_table_ids');
    }

    // security_group_ids - computed: true, optional: false, required: false
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }

    // service_name - computed: true, optional: true, required: false
    private _serviceName?: string | undefined; 
    public get serviceName() {
      return this.getStringAttribute('service_name');
    }
    public set serviceName(value: string | undefined) {
      this._serviceName = value;
    }
    public resetServiceName() {
      this._serviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNameInput() {
      return this._serviceName
    }

    // state - computed: true, optional: true, required: false
    private _state?: string | undefined; 
    public get state() {
      return this.getStringAttribute('state');
    }
    public set state(value: string | undefined) {
      this._state = value;
    }
    public resetState() {
      this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
      return this._state
    }

    // subnet_ids - computed: true, optional: false, required: false
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // vpc_endpoint_type - computed: true, optional: false, required: false
    public get vpcEndpointType() {
      return this.getStringAttribute('vpc_endpoint_type');
    }

    // vpc_id - computed: true, optional: true, required: false
    private _vpcId?: string | undefined; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string | undefined) {
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
    private _filter?: DataAwsVpcEndpointFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsVpcEndpointFilter[] | undefined) {
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
        service_name: cdktf.stringToTerraform(this._serviceName),
        state: cdktf.stringToTerraform(this._state),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        filter: cdktf.listMapper(dataAwsVpcEndpointFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsVpcEndpointServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#service DataAwsVpcEndpointService#service}
    */
    readonly service?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#service_name DataAwsVpcEndpointService#service_name}
    */
    readonly serviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#service_type DataAwsVpcEndpointService#service_type}
    */
    readonly serviceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#tags DataAwsVpcEndpointService#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#filter DataAwsVpcEndpointService#filter}
    */
    readonly filter?: DataAwsVpcEndpointServiceFilter[];
  }
  export interface DataAwsVpcEndpointServiceFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#name DataAwsVpcEndpointService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#values DataAwsVpcEndpointService#values}
    */
    readonly values: string[];
  }

  function dataAwsVpcEndpointServiceFilterToTerraform(struct?: DataAwsVpcEndpointServiceFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html aws_vpc_endpoint_service}
  */
  export class DataAwsVpcEndpointService extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpc_endpoint_service";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html aws_vpc_endpoint_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcEndpointServiceConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsVpcEndpointServiceConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_vpc_endpoint_service',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._service = config.service;
      this._serviceName = config.serviceName;
      this._serviceType = config.serviceType;
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // acceptance_required - computed: true, optional: false, required: false
    public get acceptanceRequired() {
      return this.getBooleanAttribute('acceptance_required') as any;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // availability_zones - computed: true, optional: false, required: false
    public get availabilityZones() {
      return this.getListAttribute('availability_zones');
    }

    // base_endpoint_dns_names - computed: true, optional: false, required: false
    public get baseEndpointDnsNames() {
      return this.getListAttribute('base_endpoint_dns_names');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // manages_vpc_endpoints - computed: true, optional: false, required: false
    public get managesVpcEndpoints() {
      return this.getBooleanAttribute('manages_vpc_endpoints') as any;
    }

    // owner - computed: true, optional: false, required: false
    public get owner() {
      return this.getStringAttribute('owner');
    }

    // private_dns_name - computed: true, optional: false, required: false
    public get privateDnsName() {
      return this.getStringAttribute('private_dns_name');
    }

    // service - computed: false, optional: true, required: false
    private _service?: string | undefined; 
    public get service() {
      return this.getStringAttribute('service');
    }
    public set service(value: string | undefined) {
      this._service = value;
    }
    public resetService() {
      this._service = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceInput() {
      return this._service
    }

    // service_id - computed: true, optional: false, required: false
    public get serviceId() {
      return this.getStringAttribute('service_id');
    }

    // service_name - computed: true, optional: true, required: false
    private _serviceName?: string | undefined; 
    public get serviceName() {
      return this.getStringAttribute('service_name');
    }
    public set serviceName(value: string | undefined) {
      this._serviceName = value;
    }
    public resetServiceName() {
      this._serviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNameInput() {
      return this._serviceName
    }

    // service_type - computed: true, optional: true, required: false
    private _serviceType?: string | undefined; 
    public get serviceType() {
      return this.getStringAttribute('service_type');
    }
    public set serviceType(value: string | undefined) {
      this._serviceType = value;
    }
    public resetServiceType() {
      this._serviceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceTypeInput() {
      return this._serviceType
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // vpc_endpoint_policy_supported - computed: true, optional: false, required: false
    public get vpcEndpointPolicySupported() {
      return this.getBooleanAttribute('vpc_endpoint_policy_supported') as any;
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsVpcEndpointServiceFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsVpcEndpointServiceFilter[] | undefined) {
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
        service: cdktf.stringToTerraform(this._service),
        service_name: cdktf.stringToTerraform(this._serviceName),
        service_type: cdktf.stringToTerraform(this._serviceType),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsVpcEndpointServiceFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsVpcPeeringConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#cidr_block DataAwsVpcPeeringConnection#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#owner_id DataAwsVpcPeeringConnection#owner_id}
    */
    readonly ownerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#peer_cidr_block DataAwsVpcPeeringConnection#peer_cidr_block}
    */
    readonly peerCidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#peer_owner_id DataAwsVpcPeeringConnection#peer_owner_id}
    */
    readonly peerOwnerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#peer_region DataAwsVpcPeeringConnection#peer_region}
    */
    readonly peerRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#peer_vpc_id DataAwsVpcPeeringConnection#peer_vpc_id}
    */
    readonly peerVpcId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#region DataAwsVpcPeeringConnection#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#status DataAwsVpcPeeringConnection#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#tags DataAwsVpcPeeringConnection#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#vpc_id DataAwsVpcPeeringConnection#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#filter DataAwsVpcPeeringConnection#filter}
    */
    readonly filter?: DataAwsVpcPeeringConnectionFilter[];
  }
  export class DataAwsVpcPeeringConnectionCidrBlockSet extends cdktf.ComplexComputedList {

    // cidr_block - computed: true, optional: false, required: false
    public get cidrBlock() {
      return this.getStringAttribute('cidr_block');
    }
  }
  export class DataAwsVpcPeeringConnectionPeerCidrBlockSet extends cdktf.ComplexComputedList {

    // cidr_block - computed: true, optional: false, required: false
    public get cidrBlock() {
      return this.getStringAttribute('cidr_block');
    }
  }
  export interface DataAwsVpcPeeringConnectionFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#name DataAwsVpcPeeringConnection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#values DataAwsVpcPeeringConnection#values}
    */
    readonly values: string[];
  }

  function dataAwsVpcPeeringConnectionFilterToTerraform(struct?: DataAwsVpcPeeringConnectionFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html aws_vpc_peering_connection}
  */
  export class DataAwsVpcPeeringConnection extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpc_peering_connection";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html aws_vpc_peering_connection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcPeeringConnectionConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsVpcPeeringConnectionConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_vpc_peering_connection',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._cidrBlock = config.cidrBlock;
      this._ownerId = config.ownerId;
      this._peerCidrBlock = config.peerCidrBlock;
      this._peerOwnerId = config.peerOwnerId;
      this._peerRegion = config.peerRegion;
      this._peerVpcId = config.peerVpcId;
      this._region = config.region;
      this._status = config.status;
      this._tags = config.tags;
      this._vpcId = config.vpcId;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accepter - computed: true, optional: false, required: false
    public accepter(key: string): boolean {
      return new cdktf.BooleanMap(this, 'accepter').lookup(key);
    }

    // cidr_block - computed: true, optional: true, required: false
    private _cidrBlock?: string | undefined; 
    public get cidrBlock() {
      return this.getStringAttribute('cidr_block');
    }
    public set cidrBlock(value: string | undefined) {
      this._cidrBlock = value;
    }
    public resetCidrBlock() {
      this._cidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrBlockInput() {
      return this._cidrBlock
    }

    // cidr_block_set - computed: true, optional: false, required: false
    public cidrBlockSet(index: string) {
      return new DataAwsVpcPeeringConnectionCidrBlockSet(this, 'cidr_block_set', index);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // owner_id - computed: true, optional: true, required: false
    private _ownerId?: string | undefined; 
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }
    public set ownerId(value: string | undefined) {
      this._ownerId = value;
    }
    public resetOwnerId() {
      this._ownerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerIdInput() {
      return this._ownerId
    }

    // peer_cidr_block - computed: true, optional: true, required: false
    private _peerCidrBlock?: string | undefined; 
    public get peerCidrBlock() {
      return this.getStringAttribute('peer_cidr_block');
    }
    public set peerCidrBlock(value: string | undefined) {
      this._peerCidrBlock = value;
    }
    public resetPeerCidrBlock() {
      this._peerCidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get peerCidrBlockInput() {
      return this._peerCidrBlock
    }

    // peer_cidr_block_set - computed: true, optional: false, required: false
    public peerCidrBlockSet(index: string) {
      return new DataAwsVpcPeeringConnectionPeerCidrBlockSet(this, 'peer_cidr_block_set', index);
    }

    // peer_owner_id - computed: true, optional: true, required: false
    private _peerOwnerId?: string | undefined; 
    public get peerOwnerId() {
      return this.getStringAttribute('peer_owner_id');
    }
    public set peerOwnerId(value: string | undefined) {
      this._peerOwnerId = value;
    }
    public resetPeerOwnerId() {
      this._peerOwnerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get peerOwnerIdInput() {
      return this._peerOwnerId
    }

    // peer_region - computed: true, optional: true, required: false
    private _peerRegion?: string | undefined; 
    public get peerRegion() {
      return this.getStringAttribute('peer_region');
    }
    public set peerRegion(value: string | undefined) {
      this._peerRegion = value;
    }
    public resetPeerRegion() {
      this._peerRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get peerRegionInput() {
      return this._peerRegion
    }

    // peer_vpc_id - computed: true, optional: true, required: false
    private _peerVpcId?: string | undefined; 
    public get peerVpcId() {
      return this.getStringAttribute('peer_vpc_id');
    }
    public set peerVpcId(value: string | undefined) {
      this._peerVpcId = value;
    }
    public resetPeerVpcId() {
      this._peerVpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get peerVpcIdInput() {
      return this._peerVpcId
    }

    // region - computed: true, optional: true, required: false
    private _region?: string | undefined; 
    public get region() {
      return this.getStringAttribute('region');
    }
    public set region(value: string | undefined) {
      this._region = value;
    }
    public resetRegion() {
      this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
      return this._region
    }

    // requester - computed: true, optional: false, required: false
    public requester(key: string): boolean {
      return new cdktf.BooleanMap(this, 'requester').lookup(key);
    }

    // status - computed: true, optional: true, required: false
    private _status?: string | undefined; 
    public get status() {
      return this.getStringAttribute('status');
    }
    public set status(value: string | undefined) {
      this._status = value;
    }
    public resetStatus() {
      this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
      return this._status
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _vpcId?: string | undefined; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string | undefined) {
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
    private _filter?: DataAwsVpcPeeringConnectionFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsVpcPeeringConnectionFilter[] | undefined) {
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
        cidr_block: cdktf.stringToTerraform(this._cidrBlock),
        owner_id: cdktf.stringToTerraform(this._ownerId),
        peer_cidr_block: cdktf.stringToTerraform(this._peerCidrBlock),
        peer_owner_id: cdktf.stringToTerraform(this._peerOwnerId),
        peer_region: cdktf.stringToTerraform(this._peerRegion),
        peer_vpc_id: cdktf.stringToTerraform(this._peerVpcId),
        region: cdktf.stringToTerraform(this._region),
        status: cdktf.stringToTerraform(this._status),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        filter: cdktf.listMapper(dataAwsVpcPeeringConnectionFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsVpcPeeringConnectionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections.html#tags DataAwsVpcPeeringConnections#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections.html#filter DataAwsVpcPeeringConnections#filter}
    */
    readonly filter?: DataAwsVpcPeeringConnectionsFilter[];
  }
  export interface DataAwsVpcPeeringConnectionsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections.html#name DataAwsVpcPeeringConnections#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections.html#values DataAwsVpcPeeringConnections#values}
    */
    readonly values: string[];
  }

  function dataAwsVpcPeeringConnectionsFilterToTerraform(struct?: DataAwsVpcPeeringConnectionsFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections.html aws_vpc_peering_connections}
  */
  export class DataAwsVpcPeeringConnections extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpc_peering_connections";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections.html aws_vpc_peering_connections} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcPeeringConnectionsConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsVpcPeeringConnectionsConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_vpc_peering_connections',
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

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsVpcPeeringConnectionsFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsVpcPeeringConnectionsFilter[] | undefined) {
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
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsVpcPeeringConnectionsFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsVpcsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html#tags DataAwsVpcs#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html#filter DataAwsVpcs#filter}
    */
    readonly filter?: DataAwsVpcsFilter[];
  }
  export interface DataAwsVpcsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html#name DataAwsVpcs#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html#values DataAwsVpcs#values}
    */
    readonly values: string[];
  }

  function dataAwsVpcsFilterToTerraform(struct?: DataAwsVpcsFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html aws_vpcs}
  */
  export class DataAwsVpcs extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_vpcs";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html aws_vpcs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcsConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsVpcsConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_vpcs',
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

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsVpcsFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsVpcsFilter[] | undefined) {
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
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsVpcsFilterToTerraform)(this._filter),
      };
    }
  }
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

  function dataAwsVpnGatewayFilterToTerraform(struct?: DataAwsVpnGatewayFilter): any {
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
    private _amazonSideAsn?: string | undefined; 
    public get amazonSideAsn() {
      return this.getStringAttribute('amazon_side_asn');
    }
    public set amazonSideAsn(value: string | undefined) {
      this._amazonSideAsn = value;
    }
    public resetAmazonSideAsn() {
      this._amazonSideAsn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonSideAsnInput() {
      return this._amazonSideAsn
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // attached_vpc_id - computed: true, optional: true, required: false
    private _attachedVpcId?: string | undefined; 
    public get attachedVpcId() {
      return this.getStringAttribute('attached_vpc_id');
    }
    public set attachedVpcId(value: string | undefined) {
      this._attachedVpcId = value;
    }
    public resetAttachedVpcId() {
      this._attachedVpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attachedVpcIdInput() {
      return this._attachedVpcId
    }

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string | undefined; 
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string | undefined) {
      this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
      this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
      return this._availabilityZone
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // state - computed: true, optional: true, required: false
    private _state?: string | undefined; 
    public get state() {
      return this.getStringAttribute('state');
    }
    public set state(value: string | undefined) {
      this._state = value;
    }
    public resetState() {
      this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
      return this._state
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsVpnGatewayFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsVpnGatewayFilter[] | undefined) {
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
        amazon_side_asn: cdktf.stringToTerraform(this._amazonSideAsn),
        attached_vpc_id: cdktf.stringToTerraform(this._attachedVpcId),
        availability_zone: cdktf.stringToTerraform(this._availabilityZone),
        state: cdktf.stringToTerraform(this._state),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsVpnGatewayFilterToTerraform)(this._filter),
      };
    }
  }
}
