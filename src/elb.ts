// https://www.terraform.io/docs/providers/aws/r/elb.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#availability_zones Elb#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#connection_draining Elb#connection_draining}
  */
  readonly connectionDraining?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#connection_draining_timeout Elb#connection_draining_timeout}
  */
  readonly connectionDrainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#cross_zone_load_balancing Elb#cross_zone_load_balancing}
  */
  readonly crossZoneLoadBalancing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#idle_timeout Elb#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#instances Elb#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#internal Elb#internal}
  */
  readonly internal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#name Elb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#name_prefix Elb#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#security_groups Elb#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#source_security_group Elb#source_security_group}
  */
  readonly sourceSecurityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#subnets Elb#subnets}
  */
  readonly subnets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#tags Elb#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#tags_all Elb#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * access_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#access_logs Elb#access_logs}
  */
  readonly accessLogs?: ElbAccessLogs[];
  /**
  * health_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#health_check Elb#health_check}
  */
  readonly healthCheck?: ElbHealthCheck[];
  /**
  * listener block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#listener Elb#listener}
  */
  readonly listener: ElbListener[];
}
export interface ElbAccessLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#bucket Elb#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#bucket_prefix Elb#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#enabled Elb#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#interval Elb#interval}
  */
  readonly interval?: number;
}

function elbAccessLogsToTerraform(struct?: ElbAccessLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export interface ElbHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#healthy_threshold Elb#healthy_threshold}
  */
  readonly healthyThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#interval Elb#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#target Elb#target}
  */
  readonly target: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#timeout Elb#timeout}
  */
  readonly timeout: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#unhealthy_threshold Elb#unhealthy_threshold}
  */
  readonly unhealthyThreshold: number;
}

function elbHealthCheckToTerraform(struct?: ElbHealthCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval: cdktf.numberToTerraform(struct!.interval),
    target: cdktf.stringToTerraform(struct!.target),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}

export interface ElbListener {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#instance_port Elb#instance_port}
  */
  readonly instancePort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#instance_protocol Elb#instance_protocol}
  */
  readonly instanceProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#lb_port Elb#lb_port}
  */
  readonly lbPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#lb_protocol Elb#lb_protocol}
  */
  readonly lbProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#ssl_certificate_id Elb#ssl_certificate_id}
  */
  readonly sslCertificateId?: string;
}

function elbListenerToTerraform(struct?: ElbListener): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_port: cdktf.numberToTerraform(struct!.instancePort),
    instance_protocol: cdktf.stringToTerraform(struct!.instanceProtocol),
    lb_port: cdktf.numberToTerraform(struct!.lbPort),
    lb_protocol: cdktf.stringToTerraform(struct!.lbProtocol),
    ssl_certificate_id: cdktf.stringToTerraform(struct!.sslCertificateId),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elb.html aws_elb}
*/
export class Elb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_elb";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elb.html aws_elb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElbConfig
  */
  public constructor(scope: Construct, id: string, config: ElbConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elb',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZones = config.availabilityZones;
    this._connectionDraining = config.connectionDraining;
    this._connectionDrainingTimeout = config.connectionDrainingTimeout;
    this._crossZoneLoadBalancing = config.crossZoneLoadBalancing;
    this._idleTimeout = config.idleTimeout;
    this._instances = config.instances;
    this._internal = config.internal;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._securityGroups = config.securityGroups;
    this._sourceSecurityGroup = config.sourceSecurityGroup;
    this._subnets = config.subnets;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._accessLogs = config.accessLogs;
    this._healthCheck = config.healthCheck;
    this._listener = config.listener;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: true, required: false
  private _availabilityZones?: string[];
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones
  }

  // connection_draining - computed: false, optional: true, required: false
  private _connectionDraining?: boolean | cdktf.IResolvable;
  public get connectionDraining() {
    return this.getBooleanAttribute('connection_draining');
  }
  public set connectionDraining(value: boolean | cdktf.IResolvable ) {
    this._connectionDraining = value;
  }
  public resetConnectionDraining() {
    this._connectionDraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDrainingInput() {
    return this._connectionDraining
  }

  // connection_draining_timeout - computed: false, optional: true, required: false
  private _connectionDrainingTimeout?: number;
  public get connectionDrainingTimeout() {
    return this.getNumberAttribute('connection_draining_timeout');
  }
  public set connectionDrainingTimeout(value: number ) {
    this._connectionDrainingTimeout = value;
  }
  public resetConnectionDrainingTimeout() {
    this._connectionDrainingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDrainingTimeoutInput() {
    return this._connectionDrainingTimeout
  }

  // cross_zone_load_balancing - computed: false, optional: true, required: false
  private _crossZoneLoadBalancing?: boolean | cdktf.IResolvable;
  public get crossZoneLoadBalancing() {
    return this.getBooleanAttribute('cross_zone_load_balancing');
  }
  public set crossZoneLoadBalancing(value: boolean | cdktf.IResolvable ) {
    this._crossZoneLoadBalancing = value;
  }
  public resetCrossZoneLoadBalancing() {
    this._crossZoneLoadBalancing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossZoneLoadBalancingInput() {
    return this._crossZoneLoadBalancing
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
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

  // instances - computed: true, optional: true, required: false
  private _instances?: string[];
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances
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

  // source_security_group - computed: true, optional: true, required: false
  private _sourceSecurityGroup?: string;
  public get sourceSecurityGroup() {
    return this.getStringAttribute('source_security_group');
  }
  public set sourceSecurityGroup(value: string) {
    this._sourceSecurityGroup = value;
  }
  public resetSourceSecurityGroup() {
    this._sourceSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSecurityGroupInput() {
    return this._sourceSecurityGroup
  }

  // source_security_group_id - computed: true, optional: false, required: false
  public get sourceSecurityGroupId() {
    return this.getStringAttribute('source_security_group_id');
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

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // access_logs - computed: false, optional: true, required: false
  private _accessLogs?: ElbAccessLogs[];
  public get accessLogs() {
    return this.interpolationForAttribute('access_logs') as any;
  }
  public set accessLogs(value: ElbAccessLogs[] ) {
    this._accessLogs = value;
  }
  public resetAccessLogs() {
    this._accessLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogsInput() {
    return this._accessLogs
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: ElbHealthCheck[];
  public get healthCheck() {
    return this.interpolationForAttribute('health_check') as any;
  }
  public set healthCheck(value: ElbHealthCheck[] ) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck
  }

  // listener - computed: false, optional: false, required: true
  private _listener: ElbListener[];
  public get listener() {
    return this.interpolationForAttribute('listener') as any;
  }
  public set listener(value: ElbListener[]) {
    this._listener = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
      connection_draining: cdktf.booleanToTerraform(this._connectionDraining),
      connection_draining_timeout: cdktf.numberToTerraform(this._connectionDrainingTimeout),
      cross_zone_load_balancing: cdktf.booleanToTerraform(this._crossZoneLoadBalancing),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      instances: cdktf.listMapper(cdktf.stringToTerraform)(this._instances),
      internal: cdktf.booleanToTerraform(this._internal),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
      source_security_group: cdktf.stringToTerraform(this._sourceSecurityGroup),
      subnets: cdktf.listMapper(cdktf.stringToTerraform)(this._subnets),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      access_logs: cdktf.listMapper(elbAccessLogsToTerraform)(this._accessLogs),
      health_check: cdktf.listMapper(elbHealthCheckToTerraform)(this._healthCheck),
      listener: cdktf.listMapper(elbListenerToTerraform)(this._listener),
    };
  }
}
