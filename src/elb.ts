// https://www.terraform.io/docs/providers/aws/r/elb.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ElbConfig extends TerraformMetaArguments {
  readonly availabilityZones?: string[];
  readonly connectionDraining?: boolean;
  readonly connectionDrainingTimeout?: number;
  readonly crossZoneLoadBalancing?: boolean;
  readonly idleTimeout?: number;
  readonly instances?: string[];
  readonly internal?: boolean;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly securityGroups?: string[];
  readonly sourceSecurityGroup?: string;
  readonly subnets?: string[];
  readonly tags?: { [key: string]: string };
  /** access_logs block */
  readonly accessLogs?: ElbAccessLogs[];
  /** health_check block */
  readonly healthCheck?: ElbHealthCheck[];
  /** listener block */
  readonly listener: ElbListener[];
}
export interface ElbAccessLogs {
  readonly bucket: string;
  readonly bucketPrefix?: string;
  readonly enabled?: boolean;
  readonly interval?: number;
}
export interface ElbHealthCheck {
  readonly healthyThreshold: number;
  readonly interval: number;
  readonly target: string;
  readonly timeout: number;
  readonly unhealthyThreshold: number;
}
export interface ElbListener {
  readonly instancePort: number;
  readonly instanceProtocol: string;
  readonly lbPort: number;
  readonly lbProtocol: string;
  readonly sslCertificateId?: string;
}

// Resource

export class Elb extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _connectionDraining?: boolean;
  public get connectionDraining() {
    return this.getBooleanAttribute('connection_draining');
  }
  public set connectionDraining(value: boolean ) {
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
  private _crossZoneLoadBalancing?: boolean;
  public get crossZoneLoadBalancing() {
    return this.getBooleanAttribute('cross_zone_load_balancing');
  }
  public set crossZoneLoadBalancing(value: boolean ) {
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
  private _internal?: boolean;
  public get internal() {
    return this.getBooleanAttribute('internal');
  }
  public set internal(value: boolean) {
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
      availability_zones: this._availabilityZones,
      connection_draining: this._connectionDraining,
      connection_draining_timeout: this._connectionDrainingTimeout,
      cross_zone_load_balancing: this._crossZoneLoadBalancing,
      idle_timeout: this._idleTimeout,
      instances: this._instances,
      internal: this._internal,
      name: this._name,
      name_prefix: this._namePrefix,
      security_groups: this._securityGroups,
      source_security_group: this._sourceSecurityGroup,
      subnets: this._subnets,
      tags: this._tags,
      access_logs: this._accessLogs,
      health_check: this._healthCheck,
      listener: this._listener,
    };
  }
}
