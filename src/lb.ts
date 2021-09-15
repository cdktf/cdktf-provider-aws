// https://www.terraform.io/docs/providers/aws/r/lb.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#customer_owned_ipv4_pool Lb#customer_owned_ipv4_pool}
  */
  readonly customerOwnedIpv4Pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#drop_invalid_header_fields Lb#drop_invalid_header_fields}
  */
  readonly dropInvalidHeaderFields?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#enable_cross_zone_load_balancing Lb#enable_cross_zone_load_balancing}
  */
  readonly enableCrossZoneLoadBalancing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#enable_deletion_protection Lb#enable_deletion_protection}
  */
  readonly enableDeletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#enable_http2 Lb#enable_http2}
  */
  readonly enableHttp2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#idle_timeout Lb#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#internal Lb#internal}
  */
  readonly internal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#ip_address_type Lb#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#load_balancer_type Lb#load_balancer_type}
  */
  readonly loadBalancerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#name Lb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#name_prefix Lb#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#security_groups Lb#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#subnets Lb#subnets}
  */
  readonly subnets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#tags Lb#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#tags_all Lb#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * access_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#access_logs Lb#access_logs}
  */
  readonly accessLogs?: LbAccessLogs[];
  /**
  * subnet_mapping block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#subnet_mapping Lb#subnet_mapping}
  */
  readonly subnetMapping?: LbSubnetMapping[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#timeouts Lb#timeouts}
  */
  readonly timeouts?: LbTimeouts;
}
export interface LbAccessLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#bucket Lb#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#enabled Lb#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#prefix Lb#prefix}
  */
  readonly prefix?: string;
}

function lbAccessLogsToTerraform(struct?: LbAccessLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export interface LbSubnetMapping {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#allocation_id Lb#allocation_id}
  */
  readonly allocationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#ipv6_address Lb#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#private_ipv4_address Lb#private_ipv4_address}
  */
  readonly privateIpv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#subnet_id Lb#subnet_id}
  */
  readonly subnetId: string;
}

function lbSubnetMappingToTerraform(struct?: LbSubnetMapping): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allocation_id: cdktf.stringToTerraform(struct!.allocationId),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    private_ipv4_address: cdktf.stringToTerraform(struct!.privateIpv4Address),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface LbTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#create Lb#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#delete Lb#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#update Lb#update}
  */
  readonly update?: string;
}

function lbTimeoutsToTerraform(struct?: LbTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb.html aws_lb}
*/
export class Lb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lb";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb.html aws_lb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LbConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_lb',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
    this._dropInvalidHeaderFields = config.dropInvalidHeaderFields;
    this._enableCrossZoneLoadBalancing = config.enableCrossZoneLoadBalancing;
    this._enableDeletionProtection = config.enableDeletionProtection;
    this._enableHttp2 = config.enableHttp2;
    this._idleTimeout = config.idleTimeout;
    this._internal = config.internal;
    this._ipAddressType = config.ipAddressType;
    this._loadBalancerType = config.loadBalancerType;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._securityGroups = config.securityGroups;
    this._subnets = config.subnets;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._accessLogs = config.accessLogs;
    this._subnetMapping = config.subnetMapping;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // arn_suffix - computed: true, optional: false, required: false
  public get arnSuffix() {
    return this.getStringAttribute('arn_suffix');
  }

  // customer_owned_ipv4_pool - computed: false, optional: true, required: false
  private _customerOwnedIpv4Pool?: string;
  public get customerOwnedIpv4Pool() {
    return this.getStringAttribute('customer_owned_ipv4_pool');
  }
  public set customerOwnedIpv4Pool(value: string ) {
    this._customerOwnedIpv4Pool = value;
  }
  public resetCustomerOwnedIpv4Pool() {
    this._customerOwnedIpv4Pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerOwnedIpv4PoolInput() {
    return this._customerOwnedIpv4Pool
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // drop_invalid_header_fields - computed: false, optional: true, required: false
  private _dropInvalidHeaderFields?: boolean | cdktf.IResolvable;
  public get dropInvalidHeaderFields() {
    return this.getBooleanAttribute('drop_invalid_header_fields');
  }
  public set dropInvalidHeaderFields(value: boolean | cdktf.IResolvable ) {
    this._dropInvalidHeaderFields = value;
  }
  public resetDropInvalidHeaderFields() {
    this._dropInvalidHeaderFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInvalidHeaderFieldsInput() {
    return this._dropInvalidHeaderFields
  }

  // enable_cross_zone_load_balancing - computed: false, optional: true, required: false
  private _enableCrossZoneLoadBalancing?: boolean | cdktf.IResolvable;
  public get enableCrossZoneLoadBalancing() {
    return this.getBooleanAttribute('enable_cross_zone_load_balancing');
  }
  public set enableCrossZoneLoadBalancing(value: boolean | cdktf.IResolvable ) {
    this._enableCrossZoneLoadBalancing = value;
  }
  public resetEnableCrossZoneLoadBalancing() {
    this._enableCrossZoneLoadBalancing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCrossZoneLoadBalancingInput() {
    return this._enableCrossZoneLoadBalancing
  }

  // enable_deletion_protection - computed: false, optional: true, required: false
  private _enableDeletionProtection?: boolean | cdktf.IResolvable;
  public get enableDeletionProtection() {
    return this.getBooleanAttribute('enable_deletion_protection');
  }
  public set enableDeletionProtection(value: boolean | cdktf.IResolvable ) {
    this._enableDeletionProtection = value;
  }
  public resetEnableDeletionProtection() {
    this._enableDeletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDeletionProtectionInput() {
    return this._enableDeletionProtection
  }

  // enable_http2 - computed: false, optional: true, required: false
  private _enableHttp2?: boolean | cdktf.IResolvable;
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }
  public set enableHttp2(value: boolean | cdktf.IResolvable ) {
    this._enableHttp2 = value;
  }
  public resetEnableHttp2() {
    this._enableHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2Input() {
    return this._enableHttp2
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number;
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number ) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout
  }

  // internal - computed: true, optional: true, required: false
  private _internal?: boolean | cdktf.IResolvable;
  public get internal() {
    return this.getBooleanAttribute('internal');
  }
  public set internal(value: boolean | cdktf.IResolvable) {
    this._internal = value;
  }
  public resetInternal() {
    this._internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal
  }

  // ip_address_type - computed: true, optional: true, required: false
  private _ipAddressType?: string;
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType
  }

  // load_balancer_type - computed: false, optional: true, required: false
  private _loadBalancerType?: string;
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
  public set loadBalancerType(value: string ) {
    this._loadBalancerType = value;
  }
  public resetLoadBalancerType() {
    this._loadBalancerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTypeInput() {
    return this._loadBalancerType
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string ) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[];
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups
  }

  // subnets - computed: true, optional: true, required: false
  private _subnets?: string[];
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets
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

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // access_logs - computed: false, optional: true, required: false
  private _accessLogs?: LbAccessLogs[];
  public get accessLogs() {
    return this.interpolationForAttribute('access_logs') as any;
  }
  public set accessLogs(value: LbAccessLogs[] ) {
    this._accessLogs = value;
  }
  public resetAccessLogs() {
    this._accessLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogsInput() {
    return this._accessLogs
  }

  // subnet_mapping - computed: false, optional: true, required: false
  private _subnetMapping?: LbSubnetMapping[];
  public get subnetMapping() {
    return this.interpolationForAttribute('subnet_mapping') as any;
  }
  public set subnetMapping(value: LbSubnetMapping[] ) {
    this._subnetMapping = value;
  }
  public resetSubnetMapping() {
    this._subnetMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMappingInput() {
    return this._subnetMapping
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LbTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LbTimeouts ) {
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
      customer_owned_ipv4_pool: cdktf.stringToTerraform(this._customerOwnedIpv4Pool),
      drop_invalid_header_fields: cdktf.booleanToTerraform(this._dropInvalidHeaderFields),
      enable_cross_zone_load_balancing: cdktf.booleanToTerraform(this._enableCrossZoneLoadBalancing),
      enable_deletion_protection: cdktf.booleanToTerraform(this._enableDeletionProtection),
      enable_http2: cdktf.booleanToTerraform(this._enableHttp2),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      internal: cdktf.booleanToTerraform(this._internal),
      ip_address_type: cdktf.stringToTerraform(this._ipAddressType),
      load_balancer_type: cdktf.stringToTerraform(this._loadBalancerType),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
      subnets: cdktf.listMapper(cdktf.stringToTerraform)(this._subnets),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      access_logs: cdktf.listMapper(lbAccessLogsToTerraform)(this._accessLogs),
      subnet_mapping: cdktf.listMapper(lbSubnetMappingToTerraform)(this._subnetMapping),
      timeouts: lbTimeoutsToTerraform(this._timeouts),
    };
  }
}
