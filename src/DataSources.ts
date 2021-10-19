// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Data Sources
*/
export namespace DataSources {
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
    readonly accessLogs?: ElbAccessLogs;
    /**
    * health_check block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#health_check Elb#health_check}
    */
    readonly healthCheck?: ElbHealthCheck;
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

  function elbAccessLogsToTerraform(struct?: ElbAccessLogsOutputReference | ElbAccessLogs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket: cdktf.stringToTerraform(struct!.bucket),
      bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      interval: cdktf.numberToTerraform(struct!.interval),
    }
  }

  export class ElbAccessLogsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket - computed: false, optional: false, required: true
    private _bucket?: string; 
    public get bucket() {
      return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
      this._bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
      return this._bucket
    }

    // bucket_prefix - computed: false, optional: true, required: false
    private _bucketPrefix?: string | undefined; 
    public get bucketPrefix() {
      return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string | undefined) {
      this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
      this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
      return this._bucketPrefix
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // interval - computed: false, optional: true, required: false
    private _interval?: number | undefined; 
    public get interval() {
      return this.getNumberAttribute('interval');
    }
    public set interval(value: number | undefined) {
      this._interval = value;
    }
    public resetInterval() {
      this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
      return this._interval
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

  function elbHealthCheckToTerraform(struct?: ElbHealthCheckOutputReference | ElbHealthCheck): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
      interval: cdktf.numberToTerraform(struct!.interval),
      target: cdktf.stringToTerraform(struct!.target),
      timeout: cdktf.numberToTerraform(struct!.timeout),
      unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
    }
  }

  export class ElbHealthCheckOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // healthy_threshold - computed: false, optional: false, required: true
    private _healthyThreshold?: number; 
    public get healthyThreshold() {
      return this.getNumberAttribute('healthy_threshold');
    }
    public set healthyThreshold(value: number) {
      this._healthyThreshold = value;
    }
    // Temporarily expose input value. Use with caution.
    public get healthyThresholdInput() {
      return this._healthyThreshold
    }

    // interval - computed: false, optional: false, required: true
    private _interval?: number; 
    public get interval() {
      return this.getNumberAttribute('interval');
    }
    public set interval(value: number) {
      this._interval = value;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
      return this._interval
    }

    // target - computed: false, optional: false, required: true
    private _target?: string; 
    public get target() {
      return this.getStringAttribute('target');
    }
    public set target(value: string) {
      this._target = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInput() {
      return this._target
    }

    // timeout - computed: false, optional: false, required: true
    private _timeout?: number; 
    public get timeout() {
      return this.getNumberAttribute('timeout');
    }
    public set timeout(value: number) {
      this._timeout = value;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
      return this._timeout
    }

    // unhealthy_threshold - computed: false, optional: false, required: true
    private _unhealthyThreshold?: number; 
    public get unhealthyThreshold() {
      return this.getNumberAttribute('unhealthy_threshold');
    }
    public set unhealthyThreshold(value: number) {
      this._unhealthyThreshold = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unhealthyThresholdInput() {
      return this._unhealthyThreshold
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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
    private _availabilityZones?: string[] | undefined; 
    public get availabilityZones() {
      return this.getListAttribute('availability_zones');
    }
    public set availabilityZones(value: string[] | undefined) {
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
    private _connectionDraining?: boolean | cdktf.IResolvable | undefined; 
    public get connectionDraining() {
      return this.getBooleanAttribute('connection_draining') as any;
    }
    public set connectionDraining(value: boolean | cdktf.IResolvable | undefined) {
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
    private _connectionDrainingTimeout?: number | undefined; 
    public get connectionDrainingTimeout() {
      return this.getNumberAttribute('connection_draining_timeout');
    }
    public set connectionDrainingTimeout(value: number | undefined) {
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
    private _crossZoneLoadBalancing?: boolean | cdktf.IResolvable | undefined; 
    public get crossZoneLoadBalancing() {
      return this.getBooleanAttribute('cross_zone_load_balancing') as any;
    }
    public set crossZoneLoadBalancing(value: boolean | cdktf.IResolvable | undefined) {
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
    private _idleTimeout?: number | undefined; 
    public get idleTimeout() {
      return this.getNumberAttribute('idle_timeout');
    }
    public set idleTimeout(value: number | undefined) {
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
    private _instances?: string[] | undefined; 
    public get instances() {
      return this.getListAttribute('instances');
    }
    public set instances(value: string[] | undefined) {
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
    private _internal?: boolean | cdktf.IResolvable | undefined; 
    public get internal() {
      return this.getBooleanAttribute('internal') as any;
    }
    public set internal(value: boolean | cdktf.IResolvable | undefined) {
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

    // name_prefix - computed: false, optional: true, required: false
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

    // source_security_group - computed: true, optional: true, required: false
    private _sourceSecurityGroup?: string | undefined; 
    public get sourceSecurityGroup() {
      return this.getStringAttribute('source_security_group');
    }
    public set sourceSecurityGroup(value: string | undefined) {
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
    private _subnets?: string[] | undefined; 
    public get subnets() {
      return this.getListAttribute('subnets');
    }
    public set subnets(value: string[] | undefined) {
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

    // zone_id - computed: true, optional: false, required: false
    public get zoneId() {
      return this.getStringAttribute('zone_id');
    }

    // access_logs - computed: false, optional: true, required: false
    private _accessLogs?: ElbAccessLogs | undefined; 
    private __accessLogsOutput = new ElbAccessLogsOutputReference(this as any, "access_logs", true);
    public get accessLogs() {
      return this.__accessLogsOutput;
    }
    public putAccessLogs(value: ElbAccessLogs | undefined) {
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
    private _healthCheck?: ElbHealthCheck | undefined; 
    private __healthCheckOutput = new ElbHealthCheckOutputReference(this as any, "health_check", true);
    public get healthCheck() {
      return this.__healthCheckOutput;
    }
    public putHealthCheck(value: ElbHealthCheck | undefined) {
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
    private _listener?: ElbListener[]; 
    public get listener() {
      // Getting the computed value is not yet implemented
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
        access_logs: elbAccessLogsToTerraform(this._accessLogs),
        health_check: elbHealthCheckToTerraform(this._healthCheck),
        listener: cdktf.listMapper(elbListenerToTerraform)(this._listener),
      };
    }
  }
  export interface ElbAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb_attachment.html#elb ElbAttachment#elb}
    */
    readonly elb: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb_attachment.html#instance ElbAttachment#instance}
    */
    readonly instance: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elb_attachment.html aws_elb_attachment}
  */
  export class ElbAttachment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elb_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elb_attachment.html aws_elb_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElbAttachmentConfig
    */
    public constructor(scope: Construct, id: string, config: ElbAttachmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_elb_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._elb = config.elb;
      this._instance = config.instance;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // elb - computed: false, optional: false, required: true
    private _elb?: string; 
    public get elb() {
      return this.getStringAttribute('elb');
    }
    public set elb(value: string) {
      this._elb = value;
    }
    // Temporarily expose input value. Use with caution.
    public get elbInput() {
      return this._elb
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance - computed: false, optional: false, required: true
    private _instance?: string; 
    public get instance() {
      return this.getStringAttribute('instance');
    }
    public set instance(value: string) {
      this._instance = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceInput() {
      return this._instance
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        elb: cdktf.stringToTerraform(this._elb),
        instance: cdktf.stringToTerraform(this._instance),
      };
    }
  }
  export interface LaunchConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#associate_public_ip_address LaunchConfiguration#associate_public_ip_address}
    */
    readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#ebs_optimized LaunchConfiguration#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#enable_monitoring LaunchConfiguration#enable_monitoring}
    */
    readonly enableMonitoring?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#iam_instance_profile LaunchConfiguration#iam_instance_profile}
    */
    readonly iamInstanceProfile?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#image_id LaunchConfiguration#image_id}
    */
    readonly imageId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#instance_type LaunchConfiguration#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#key_name LaunchConfiguration#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#name LaunchConfiguration#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#name_prefix LaunchConfiguration#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#placement_tenancy LaunchConfiguration#placement_tenancy}
    */
    readonly placementTenancy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#security_groups LaunchConfiguration#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#spot_price LaunchConfiguration#spot_price}
    */
    readonly spotPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#user_data LaunchConfiguration#user_data}
    */
    readonly userData?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#user_data_base64 LaunchConfiguration#user_data_base64}
    */
    readonly userDataBase64?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#vpc_classic_link_id LaunchConfiguration#vpc_classic_link_id}
    */
    readonly vpcClassicLinkId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#vpc_classic_link_security_groups LaunchConfiguration#vpc_classic_link_security_groups}
    */
    readonly vpcClassicLinkSecurityGroups?: string[];
    /**
    * ebs_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#ebs_block_device LaunchConfiguration#ebs_block_device}
    */
    readonly ebsBlockDevice?: LaunchConfigurationEbsBlockDevice[];
    /**
    * ephemeral_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#ephemeral_block_device LaunchConfiguration#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: LaunchConfigurationEphemeralBlockDevice[];
    /**
    * metadata_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#metadata_options LaunchConfiguration#metadata_options}
    */
    readonly metadataOptions?: LaunchConfigurationMetadataOptions;
    /**
    * root_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#root_block_device LaunchConfiguration#root_block_device}
    */
    readonly rootBlockDevice?: LaunchConfigurationRootBlockDevice;
  }
  export interface LaunchConfigurationEbsBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#delete_on_termination LaunchConfiguration#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#device_name LaunchConfiguration#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#encrypted LaunchConfiguration#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#iops LaunchConfiguration#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#no_device LaunchConfiguration#no_device}
    */
    readonly noDevice?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#snapshot_id LaunchConfiguration#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#throughput LaunchConfiguration#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#volume_size LaunchConfiguration#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#volume_type LaunchConfiguration#volume_type}
    */
    readonly volumeType?: string;
  }

  function launchConfigurationEbsBlockDeviceToTerraform(struct?: LaunchConfigurationEbsBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
      device_name: cdktf.stringToTerraform(struct!.deviceName),
      encrypted: cdktf.booleanToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      no_device: cdktf.booleanToTerraform(struct!.noDevice),
      snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
      throughput: cdktf.numberToTerraform(struct!.throughput),
      volume_size: cdktf.numberToTerraform(struct!.volumeSize),
      volume_type: cdktf.stringToTerraform(struct!.volumeType),
    }
  }

  export interface LaunchConfigurationEphemeralBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#device_name LaunchConfiguration#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#virtual_name LaunchConfiguration#virtual_name}
    */
    readonly virtualName: string;
  }

  function launchConfigurationEphemeralBlockDeviceToTerraform(struct?: LaunchConfigurationEphemeralBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      device_name: cdktf.stringToTerraform(struct!.deviceName),
      virtual_name: cdktf.stringToTerraform(struct!.virtualName),
    }
  }

  export interface LaunchConfigurationMetadataOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#http_endpoint LaunchConfiguration#http_endpoint}
    */
    readonly httpEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#http_put_response_hop_limit LaunchConfiguration#http_put_response_hop_limit}
    */
    readonly httpPutResponseHopLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#http_tokens LaunchConfiguration#http_tokens}
    */
    readonly httpTokens?: string;
  }

  function launchConfigurationMetadataOptionsToTerraform(struct?: LaunchConfigurationMetadataOptionsOutputReference | LaunchConfigurationMetadataOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      http_endpoint: cdktf.stringToTerraform(struct!.httpEndpoint),
      http_put_response_hop_limit: cdktf.numberToTerraform(struct!.httpPutResponseHopLimit),
      http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
    }
  }

  export class LaunchConfigurationMetadataOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // http_endpoint - computed: true, optional: true, required: false
    private _httpEndpoint?: string | undefined; 
    public get httpEndpoint() {
      return this.getStringAttribute('http_endpoint');
    }
    public set httpEndpoint(value: string | undefined) {
      this._httpEndpoint = value;
    }
    public resetHttpEndpoint() {
      this._httpEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpEndpointInput() {
      return this._httpEndpoint
    }

    // http_put_response_hop_limit - computed: true, optional: true, required: false
    private _httpPutResponseHopLimit?: number | undefined; 
    public get httpPutResponseHopLimit() {
      return this.getNumberAttribute('http_put_response_hop_limit');
    }
    public set httpPutResponseHopLimit(value: number | undefined) {
      this._httpPutResponseHopLimit = value;
    }
    public resetHttpPutResponseHopLimit() {
      this._httpPutResponseHopLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpPutResponseHopLimitInput() {
      return this._httpPutResponseHopLimit
    }

    // http_tokens - computed: true, optional: true, required: false
    private _httpTokens?: string | undefined; 
    public get httpTokens() {
      return this.getStringAttribute('http_tokens');
    }
    public set httpTokens(value: string | undefined) {
      this._httpTokens = value;
    }
    public resetHttpTokens() {
      this._httpTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpTokensInput() {
      return this._httpTokens
    }
  }
  export interface LaunchConfigurationRootBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#delete_on_termination LaunchConfiguration#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#encrypted LaunchConfiguration#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#iops LaunchConfiguration#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#throughput LaunchConfiguration#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#volume_size LaunchConfiguration#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#volume_type LaunchConfiguration#volume_type}
    */
    readonly volumeType?: string;
  }

  function launchConfigurationRootBlockDeviceToTerraform(struct?: LaunchConfigurationRootBlockDeviceOutputReference | LaunchConfigurationRootBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
      encrypted: cdktf.booleanToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      throughput: cdktf.numberToTerraform(struct!.throughput),
      volume_size: cdktf.numberToTerraform(struct!.volumeSize),
      volume_type: cdktf.stringToTerraform(struct!.volumeType),
    }
  }

  export class LaunchConfigurationRootBlockDeviceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // delete_on_termination - computed: false, optional: true, required: false
    private _deleteOnTermination?: boolean | cdktf.IResolvable | undefined; 
    public get deleteOnTermination() {
      return this.getBooleanAttribute('delete_on_termination') as any;
    }
    public set deleteOnTermination(value: boolean | cdktf.IResolvable | undefined) {
      this._deleteOnTermination = value;
    }
    public resetDeleteOnTermination() {
      this._deleteOnTermination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteOnTerminationInput() {
      return this._deleteOnTermination
    }

    // encrypted - computed: true, optional: true, required: false
    private _encrypted?: boolean | cdktf.IResolvable | undefined; 
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }
    public set encrypted(value: boolean | cdktf.IResolvable | undefined) {
      this._encrypted = value;
    }
    public resetEncrypted() {
      this._encrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptedInput() {
      return this._encrypted
    }

    // iops - computed: true, optional: true, required: false
    private _iops?: number | undefined; 
    public get iops() {
      return this.getNumberAttribute('iops');
    }
    public set iops(value: number | undefined) {
      this._iops = value;
    }
    public resetIops() {
      this._iops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iopsInput() {
      return this._iops
    }

    // throughput - computed: true, optional: true, required: false
    private _throughput?: number | undefined; 
    public get throughput() {
      return this.getNumberAttribute('throughput');
    }
    public set throughput(value: number | undefined) {
      this._throughput = value;
    }
    public resetThroughput() {
      this._throughput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throughputInput() {
      return this._throughput
    }

    // volume_size - computed: true, optional: true, required: false
    private _volumeSize?: number | undefined; 
    public get volumeSize() {
      return this.getNumberAttribute('volume_size');
    }
    public set volumeSize(value: number | undefined) {
      this._volumeSize = value;
    }
    public resetVolumeSize() {
      this._volumeSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeSizeInput() {
      return this._volumeSize
    }

    // volume_type - computed: true, optional: true, required: false
    private _volumeType?: string | undefined; 
    public get volumeType() {
      return this.getStringAttribute('volume_type');
    }
    public set volumeType(value: string | undefined) {
      this._volumeType = value;
    }
    public resetVolumeType() {
      this._volumeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeTypeInput() {
      return this._volumeType
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html aws_launch_configuration}
  */
  export class LaunchConfiguration extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_launch_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html aws_launch_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LaunchConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: LaunchConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_launch_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._associatePublicIpAddress = config.associatePublicIpAddress;
      this._ebsOptimized = config.ebsOptimized;
      this._enableMonitoring = config.enableMonitoring;
      this._iamInstanceProfile = config.iamInstanceProfile;
      this._imageId = config.imageId;
      this._instanceType = config.instanceType;
      this._keyName = config.keyName;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._placementTenancy = config.placementTenancy;
      this._securityGroups = config.securityGroups;
      this._spotPrice = config.spotPrice;
      this._userData = config.userData;
      this._userDataBase64 = config.userDataBase64;
      this._vpcClassicLinkId = config.vpcClassicLinkId;
      this._vpcClassicLinkSecurityGroups = config.vpcClassicLinkSecurityGroups;
      this._ebsBlockDevice = config.ebsBlockDevice;
      this._ephemeralBlockDevice = config.ephemeralBlockDevice;
      this._metadataOptions = config.metadataOptions;
      this._rootBlockDevice = config.rootBlockDevice;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // associate_public_ip_address - computed: false, optional: true, required: false
    private _associatePublicIpAddress?: boolean | cdktf.IResolvable | undefined; 
    public get associatePublicIpAddress() {
      return this.getBooleanAttribute('associate_public_ip_address') as any;
    }
    public set associatePublicIpAddress(value: boolean | cdktf.IResolvable | undefined) {
      this._associatePublicIpAddress = value;
    }
    public resetAssociatePublicIpAddress() {
      this._associatePublicIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associatePublicIpAddressInput() {
      return this._associatePublicIpAddress
    }

    // ebs_optimized - computed: true, optional: true, required: false
    private _ebsOptimized?: boolean | cdktf.IResolvable | undefined; 
    public get ebsOptimized() {
      return this.getBooleanAttribute('ebs_optimized') as any;
    }
    public set ebsOptimized(value: boolean | cdktf.IResolvable | undefined) {
      this._ebsOptimized = value;
    }
    public resetEbsOptimized() {
      this._ebsOptimized = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsOptimizedInput() {
      return this._ebsOptimized
    }

    // enable_monitoring - computed: false, optional: true, required: false
    private _enableMonitoring?: boolean | cdktf.IResolvable | undefined; 
    public get enableMonitoring() {
      return this.getBooleanAttribute('enable_monitoring') as any;
    }
    public set enableMonitoring(value: boolean | cdktf.IResolvable | undefined) {
      this._enableMonitoring = value;
    }
    public resetEnableMonitoring() {
      this._enableMonitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableMonitoringInput() {
      return this._enableMonitoring
    }

    // iam_instance_profile - computed: false, optional: true, required: false
    private _iamInstanceProfile?: string | undefined; 
    public get iamInstanceProfile() {
      return this.getStringAttribute('iam_instance_profile');
    }
    public set iamInstanceProfile(value: string | undefined) {
      this._iamInstanceProfile = value;
    }
    public resetIamInstanceProfile() {
      this._iamInstanceProfile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamInstanceProfileInput() {
      return this._iamInstanceProfile
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_id - computed: false, optional: false, required: true
    private _imageId?: string; 
    public get imageId() {
      return this.getStringAttribute('image_id');
    }
    public set imageId(value: string) {
      this._imageId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get imageIdInput() {
      return this._imageId
    }

    // instance_type - computed: false, optional: false, required: true
    private _instanceType?: string; 
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
      this._instanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // key_name - computed: true, optional: true, required: false
    private _keyName?: string | undefined; 
    public get keyName() {
      return this.getStringAttribute('key_name');
    }
    public set keyName(value: string | undefined) {
      this._keyName = value;
    }
    public resetKeyName() {
      this._keyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyNameInput() {
      return this._keyName
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

    // placement_tenancy - computed: false, optional: true, required: false
    private _placementTenancy?: string | undefined; 
    public get placementTenancy() {
      return this.getStringAttribute('placement_tenancy');
    }
    public set placementTenancy(value: string | undefined) {
      this._placementTenancy = value;
    }
    public resetPlacementTenancy() {
      this._placementTenancy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementTenancyInput() {
      return this._placementTenancy
    }

    // security_groups - computed: false, optional: true, required: false
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

    // spot_price - computed: false, optional: true, required: false
    private _spotPrice?: string | undefined; 
    public get spotPrice() {
      return this.getStringAttribute('spot_price');
    }
    public set spotPrice(value: string | undefined) {
      this._spotPrice = value;
    }
    public resetSpotPrice() {
      this._spotPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotPriceInput() {
      return this._spotPrice
    }

    // user_data - computed: false, optional: true, required: false
    private _userData?: string | undefined; 
    public get userData() {
      return this.getStringAttribute('user_data');
    }
    public set userData(value: string | undefined) {
      this._userData = value;
    }
    public resetUserData() {
      this._userData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userDataInput() {
      return this._userData
    }

    // user_data_base64 - computed: false, optional: true, required: false
    private _userDataBase64?: string | undefined; 
    public get userDataBase64() {
      return this.getStringAttribute('user_data_base64');
    }
    public set userDataBase64(value: string | undefined) {
      this._userDataBase64 = value;
    }
    public resetUserDataBase64() {
      this._userDataBase64 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userDataBase64Input() {
      return this._userDataBase64
    }

    // vpc_classic_link_id - computed: false, optional: true, required: false
    private _vpcClassicLinkId?: string | undefined; 
    public get vpcClassicLinkId() {
      return this.getStringAttribute('vpc_classic_link_id');
    }
    public set vpcClassicLinkId(value: string | undefined) {
      this._vpcClassicLinkId = value;
    }
    public resetVpcClassicLinkId() {
      this._vpcClassicLinkId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcClassicLinkIdInput() {
      return this._vpcClassicLinkId
    }

    // vpc_classic_link_security_groups - computed: false, optional: true, required: false
    private _vpcClassicLinkSecurityGroups?: string[] | undefined; 
    public get vpcClassicLinkSecurityGroups() {
      return this.getListAttribute('vpc_classic_link_security_groups');
    }
    public set vpcClassicLinkSecurityGroups(value: string[] | undefined) {
      this._vpcClassicLinkSecurityGroups = value;
    }
    public resetVpcClassicLinkSecurityGroups() {
      this._vpcClassicLinkSecurityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcClassicLinkSecurityGroupsInput() {
      return this._vpcClassicLinkSecurityGroups
    }

    // ebs_block_device - computed: false, optional: true, required: false
    private _ebsBlockDevice?: LaunchConfigurationEbsBlockDevice[] | undefined; 
    public get ebsBlockDevice() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ebs_block_device') as any;
    }
    public set ebsBlockDevice(value: LaunchConfigurationEbsBlockDevice[] | undefined) {
      this._ebsBlockDevice = value;
    }
    public resetEbsBlockDevice() {
      this._ebsBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsBlockDeviceInput() {
      return this._ebsBlockDevice
    }

    // ephemeral_block_device - computed: false, optional: true, required: false
    private _ephemeralBlockDevice?: LaunchConfigurationEphemeralBlockDevice[] | undefined; 
    public get ephemeralBlockDevice() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ephemeral_block_device') as any;
    }
    public set ephemeralBlockDevice(value: LaunchConfigurationEphemeralBlockDevice[] | undefined) {
      this._ephemeralBlockDevice = value;
    }
    public resetEphemeralBlockDevice() {
      this._ephemeralBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ephemeralBlockDeviceInput() {
      return this._ephemeralBlockDevice
    }

    // metadata_options - computed: false, optional: true, required: false
    private _metadataOptions?: LaunchConfigurationMetadataOptions | undefined; 
    private __metadataOptionsOutput = new LaunchConfigurationMetadataOptionsOutputReference(this as any, "metadata_options", true);
    public get metadataOptions() {
      return this.__metadataOptionsOutput;
    }
    public putMetadataOptions(value: LaunchConfigurationMetadataOptions | undefined) {
      this._metadataOptions = value;
    }
    public resetMetadataOptions() {
      this._metadataOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataOptionsInput() {
      return this._metadataOptions
    }

    // root_block_device - computed: false, optional: true, required: false
    private _rootBlockDevice?: LaunchConfigurationRootBlockDevice | undefined; 
    private __rootBlockDeviceOutput = new LaunchConfigurationRootBlockDeviceOutputReference(this as any, "root_block_device", true);
    public get rootBlockDevice() {
      return this.__rootBlockDeviceOutput;
    }
    public putRootBlockDevice(value: LaunchConfigurationRootBlockDevice | undefined) {
      this._rootBlockDevice = value;
    }
    public resetRootBlockDevice() {
      this._rootBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootBlockDeviceInput() {
      return this._rootBlockDevice
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        associate_public_ip_address: cdktf.booleanToTerraform(this._associatePublicIpAddress),
        ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
        enable_monitoring: cdktf.booleanToTerraform(this._enableMonitoring),
        iam_instance_profile: cdktf.stringToTerraform(this._iamInstanceProfile),
        image_id: cdktf.stringToTerraform(this._imageId),
        instance_type: cdktf.stringToTerraform(this._instanceType),
        key_name: cdktf.stringToTerraform(this._keyName),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        placement_tenancy: cdktf.stringToTerraform(this._placementTenancy),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
        spot_price: cdktf.stringToTerraform(this._spotPrice),
        user_data: cdktf.stringToTerraform(this._userData),
        user_data_base64: cdktf.stringToTerraform(this._userDataBase64),
        vpc_classic_link_id: cdktf.stringToTerraform(this._vpcClassicLinkId),
        vpc_classic_link_security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcClassicLinkSecurityGroups),
        ebs_block_device: cdktf.listMapper(launchConfigurationEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
        ephemeral_block_device: cdktf.listMapper(launchConfigurationEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
        metadata_options: launchConfigurationMetadataOptionsToTerraform(this._metadataOptions),
        root_block_device: launchConfigurationRootBlockDeviceToTerraform(this._rootBlockDevice),
      };
    }
  }
  export interface DataAwsArnConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/arn.html#arn DataAwsArn#arn}
    */
    readonly arn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/arn.html aws_arn}
  */
  export class DataAwsArn extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_arn";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/arn.html aws_arn} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsArnConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsArnConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_arn',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._arn = config.arn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account - computed: true, optional: false, required: false
    public get account() {
      return this.getStringAttribute('account');
    }

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
      this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // partition - computed: true, optional: false, required: false
    public get partition() {
      return this.getStringAttribute('partition');
    }

    // region - computed: true, optional: false, required: false
    public get region() {
      return this.getStringAttribute('region');
    }

    // resource - computed: true, optional: false, required: false
    public get resource() {
      return this.getStringAttribute('resource');
    }

    // service - computed: true, optional: false, required: false
    public get service() {
      return this.getStringAttribute('service');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        arn: cdktf.stringToTerraform(this._arn),
      };
    }
  }
  export interface DataAwsAvailabilityZoneConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#all_availability_zones DataAwsAvailabilityZone#all_availability_zones}
    */
    readonly allAvailabilityZones?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#name DataAwsAvailabilityZone#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#state DataAwsAvailabilityZone#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#zone_id DataAwsAvailabilityZone#zone_id}
    */
    readonly zoneId?: string;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#filter DataAwsAvailabilityZone#filter}
    */
    readonly filter?: DataAwsAvailabilityZoneFilter[];
  }
  export interface DataAwsAvailabilityZoneFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#name DataAwsAvailabilityZone#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#values DataAwsAvailabilityZone#values}
    */
    readonly values: string[];
  }

  function dataAwsAvailabilityZoneFilterToTerraform(struct?: DataAwsAvailabilityZoneFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html aws_availability_zone}
  */
  export class DataAwsAvailabilityZone extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_availability_zone";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html aws_availability_zone} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAvailabilityZoneConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsAvailabilityZoneConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_availability_zone',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._allAvailabilityZones = config.allAvailabilityZones;
      this._name = config.name;
      this._state = config.state;
      this._zoneId = config.zoneId;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // all_availability_zones - computed: false, optional: true, required: false
    private _allAvailabilityZones?: boolean | cdktf.IResolvable | undefined; 
    public get allAvailabilityZones() {
      return this.getBooleanAttribute('all_availability_zones') as any;
    }
    public set allAvailabilityZones(value: boolean | cdktf.IResolvable | undefined) {
      this._allAvailabilityZones = value;
    }
    public resetAllAvailabilityZones() {
      this._allAvailabilityZones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allAvailabilityZonesInput() {
      return this._allAvailabilityZones
    }

    // group_name - computed: true, optional: false, required: false
    public get groupName() {
      return this.getStringAttribute('group_name');
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

    // name_suffix - computed: true, optional: false, required: false
    public get nameSuffix() {
      return this.getStringAttribute('name_suffix');
    }

    // network_border_group - computed: true, optional: false, required: false
    public get networkBorderGroup() {
      return this.getStringAttribute('network_border_group');
    }

    // opt_in_status - computed: true, optional: false, required: false
    public get optInStatus() {
      return this.getStringAttribute('opt_in_status');
    }

    // parent_zone_id - computed: true, optional: false, required: false
    public get parentZoneId() {
      return this.getStringAttribute('parent_zone_id');
    }

    // parent_zone_name - computed: true, optional: false, required: false
    public get parentZoneName() {
      return this.getStringAttribute('parent_zone_name');
    }

    // region - computed: true, optional: false, required: false
    public get region() {
      return this.getStringAttribute('region');
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

    // zone_id - computed: true, optional: true, required: false
    private _zoneId?: string | undefined; 
    public get zoneId() {
      return this.getStringAttribute('zone_id');
    }
    public set zoneId(value: string | undefined) {
      this._zoneId = value;
    }
    public resetZoneId() {
      this._zoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zoneIdInput() {
      return this._zoneId
    }

    // zone_type - computed: true, optional: false, required: false
    public get zoneType() {
      return this.getStringAttribute('zone_type');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsAvailabilityZoneFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsAvailabilityZoneFilter[] | undefined) {
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
        all_availability_zones: cdktf.booleanToTerraform(this._allAvailabilityZones),
        name: cdktf.stringToTerraform(this._name),
        state: cdktf.stringToTerraform(this._state),
        zone_id: cdktf.stringToTerraform(this._zoneId),
        filter: cdktf.listMapper(dataAwsAvailabilityZoneFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsAvailabilityZonesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#all_availability_zones DataAwsAvailabilityZones#all_availability_zones}
    */
    readonly allAvailabilityZones?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#exclude_names DataAwsAvailabilityZones#exclude_names}
    */
    readonly excludeNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#exclude_zone_ids DataAwsAvailabilityZones#exclude_zone_ids}
    */
    readonly excludeZoneIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#state DataAwsAvailabilityZones#state}
    */
    readonly state?: string;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#filter DataAwsAvailabilityZones#filter}
    */
    readonly filter?: DataAwsAvailabilityZonesFilter[];
  }
  export interface DataAwsAvailabilityZonesFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#name DataAwsAvailabilityZones#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#values DataAwsAvailabilityZones#values}
    */
    readonly values: string[];
  }

  function dataAwsAvailabilityZonesFilterToTerraform(struct?: DataAwsAvailabilityZonesFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html aws_availability_zones}
  */
  export class DataAwsAvailabilityZones extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_availability_zones";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html aws_availability_zones} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAvailabilityZonesConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsAvailabilityZonesConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_availability_zones',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._allAvailabilityZones = config.allAvailabilityZones;
      this._excludeNames = config.excludeNames;
      this._excludeZoneIds = config.excludeZoneIds;
      this._state = config.state;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // all_availability_zones - computed: false, optional: true, required: false
    private _allAvailabilityZones?: boolean | cdktf.IResolvable | undefined; 
    public get allAvailabilityZones() {
      return this.getBooleanAttribute('all_availability_zones') as any;
    }
    public set allAvailabilityZones(value: boolean | cdktf.IResolvable | undefined) {
      this._allAvailabilityZones = value;
    }
    public resetAllAvailabilityZones() {
      this._allAvailabilityZones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allAvailabilityZonesInput() {
      return this._allAvailabilityZones
    }

    // exclude_names - computed: false, optional: true, required: false
    private _excludeNames?: string[] | undefined; 
    public get excludeNames() {
      return this.getListAttribute('exclude_names');
    }
    public set excludeNames(value: string[] | undefined) {
      this._excludeNames = value;
    }
    public resetExcludeNames() {
      this._excludeNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeNamesInput() {
      return this._excludeNames
    }

    // exclude_zone_ids - computed: false, optional: true, required: false
    private _excludeZoneIds?: string[] | undefined; 
    public get excludeZoneIds() {
      return this.getListAttribute('exclude_zone_ids');
    }
    public set excludeZoneIds(value: string[] | undefined) {
      this._excludeZoneIds = value;
    }
    public resetExcludeZoneIds() {
      this._excludeZoneIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeZoneIdsInput() {
      return this._excludeZoneIds
    }

    // group_names - computed: true, optional: false, required: false
    public get groupNames() {
      return this.getListAttribute('group_names');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // names - computed: true, optional: false, required: false
    public get names() {
      return this.getListAttribute('names');
    }

    // state - computed: false, optional: true, required: false
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

    // zone_ids - computed: true, optional: false, required: false
    public get zoneIds() {
      return this.getListAttribute('zone_ids');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsAvailabilityZonesFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsAvailabilityZonesFilter[] | undefined) {
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
        all_availability_zones: cdktf.booleanToTerraform(this._allAvailabilityZones),
        exclude_names: cdktf.listMapper(cdktf.stringToTerraform)(this._excludeNames),
        exclude_zone_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._excludeZoneIds),
        state: cdktf.stringToTerraform(this._state),
        filter: cdktf.listMapper(dataAwsAvailabilityZonesFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsBillingServiceAccountConfig extends cdktf.TerraformMetaArguments {
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/billing_service_account.html aws_billing_service_account}
  */
  export class DataAwsBillingServiceAccount extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_billing_service_account";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/billing_service_account.html aws_billing_service_account} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBillingServiceAccountConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsBillingServiceAccountConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_billing_service_account',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
      };
    }
  }
  export interface DataAwsCallerIdentityConfig extends cdktf.TerraformMetaArguments {
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/caller_identity.html aws_caller_identity}
  */
  export class DataAwsCallerIdentity extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_caller_identity";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/caller_identity.html aws_caller_identity} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCallerIdentityConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsCallerIdentityConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_caller_identity',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: false, required: false
    public get accountId() {
      return this.getStringAttribute('account_id');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // user_id - computed: true, optional: false, required: false
    public get userId() {
      return this.getStringAttribute('user_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
      };
    }
  }
  export interface DataAwsCanonicalUserIdConfig extends cdktf.TerraformMetaArguments {
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/canonical_user_id.html aws_canonical_user_id}
  */
  export class DataAwsCanonicalUserId extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_canonical_user_id";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/canonical_user_id.html aws_canonical_user_id} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCanonicalUserIdConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsCanonicalUserIdConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_canonical_user_id',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // display_name - computed: true, optional: false, required: false
    public get displayName() {
      return this.getStringAttribute('display_name');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
      };
    }
  }
  export interface DataAwsElbConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elb.html#name DataAwsElb#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elb.html#tags DataAwsElb#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsElbAccessLogs extends cdktf.ComplexComputedList {

    // bucket - computed: true, optional: false, required: false
    public get bucket() {
      return this.getStringAttribute('bucket');
    }

    // bucket_prefix - computed: true, optional: false, required: false
    public get bucketPrefix() {
      return this.getStringAttribute('bucket_prefix');
    }

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }

    // interval - computed: true, optional: false, required: false
    public get interval() {
      return this.getNumberAttribute('interval');
    }
  }
  export class DataAwsElbHealthCheck extends cdktf.ComplexComputedList {

    // healthy_threshold - computed: true, optional: false, required: false
    public get healthyThreshold() {
      return this.getNumberAttribute('healthy_threshold');
    }

    // interval - computed: true, optional: false, required: false
    public get interval() {
      return this.getNumberAttribute('interval');
    }

    // target - computed: true, optional: false, required: false
    public get target() {
      return this.getStringAttribute('target');
    }

    // timeout - computed: true, optional: false, required: false
    public get timeout() {
      return this.getNumberAttribute('timeout');
    }

    // unhealthy_threshold - computed: true, optional: false, required: false
    public get unhealthyThreshold() {
      return this.getNumberAttribute('unhealthy_threshold');
    }
  }
  export class DataAwsElbListener extends cdktf.ComplexComputedList {

    // instance_port - computed: true, optional: false, required: false
    public get instancePort() {
      return this.getNumberAttribute('instance_port');
    }

    // instance_protocol - computed: true, optional: false, required: false
    public get instanceProtocol() {
      return this.getStringAttribute('instance_protocol');
    }

    // lb_port - computed: true, optional: false, required: false
    public get lbPort() {
      return this.getNumberAttribute('lb_port');
    }

    // lb_protocol - computed: true, optional: false, required: false
    public get lbProtocol() {
      return this.getStringAttribute('lb_protocol');
    }

    // ssl_certificate_id - computed: true, optional: false, required: false
    public get sslCertificateId() {
      return this.getStringAttribute('ssl_certificate_id');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/elb.html aws_elb}
  */
  export class DataAwsElb extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elb";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elb.html aws_elb} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElbConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsElbConfig) {
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
      this._name = config.name;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_logs - computed: true, optional: false, required: false
    public accessLogs(index: string) {
      return new DataAwsElbAccessLogs(this, 'access_logs', index);
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // availability_zones - computed: true, optional: false, required: false
    public get availabilityZones() {
      return this.getListAttribute('availability_zones');
    }

    // connection_draining - computed: true, optional: false, required: false
    public get connectionDraining() {
      return this.getBooleanAttribute('connection_draining') as any;
    }

    // connection_draining_timeout - computed: true, optional: false, required: false
    public get connectionDrainingTimeout() {
      return this.getNumberAttribute('connection_draining_timeout');
    }

    // cross_zone_load_balancing - computed: true, optional: false, required: false
    public get crossZoneLoadBalancing() {
      return this.getBooleanAttribute('cross_zone_load_balancing') as any;
    }

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
      return this.getStringAttribute('dns_name');
    }

    // health_check - computed: true, optional: false, required: false
    public healthCheck(index: string) {
      return new DataAwsElbHealthCheck(this, 'health_check', index);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // idle_timeout - computed: true, optional: false, required: false
    public get idleTimeout() {
      return this.getNumberAttribute('idle_timeout');
    }

    // instances - computed: true, optional: false, required: false
    public get instances() {
      return this.getListAttribute('instances');
    }

    // internal - computed: true, optional: false, required: false
    public get internal() {
      return this.getBooleanAttribute('internal') as any;
    }

    // listener - computed: true, optional: false, required: false
    public listener(index: string) {
      return new DataAwsElbListener(this, 'listener', index);
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // security_groups - computed: true, optional: false, required: false
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }

    // source_security_group - computed: true, optional: false, required: false
    public get sourceSecurityGroup() {
      return this.getStringAttribute('source_security_group');
    }

    // source_security_group_id - computed: true, optional: false, required: false
    public get sourceSecurityGroupId() {
      return this.getStringAttribute('source_security_group_id');
    }

    // subnets - computed: true, optional: false, required: false
    public get subnets() {
      return this.getListAttribute('subnets');
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

    // zone_id - computed: true, optional: false, required: false
    public get zoneId() {
      return this.getStringAttribute('zone_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsElbHostedZoneIdConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elb_hosted_zone_id.html#region DataAwsElbHostedZoneId#region}
    */
    readonly region?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/elb_hosted_zone_id.html aws_elb_hosted_zone_id}
  */
  export class DataAwsElbHostedZoneId extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elb_hosted_zone_id";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elb_hosted_zone_id.html aws_elb_hosted_zone_id} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElbHostedZoneIdConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsElbHostedZoneIdConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_elb_hosted_zone_id',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._region = config.region;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // region - computed: false, optional: true, required: false
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        region: cdktf.stringToTerraform(this._region),
      };
    }
  }
  export interface DataAwsElbServiceAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elb_service_account.html#region DataAwsElbServiceAccount#region}
    */
    readonly region?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/elb_service_account.html aws_elb_service_account}
  */
  export class DataAwsElbServiceAccount extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elb_service_account";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elb_service_account.html aws_elb_service_account} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElbServiceAccountConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsElbServiceAccountConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_elb_service_account',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._region = config.region;
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

    // region - computed: false, optional: true, required: false
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        region: cdktf.stringToTerraform(this._region),
      };
    }
  }
  export interface DataAwsIpRangesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ip_ranges.html#regions DataAwsIpRanges#regions}
    */
    readonly regions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ip_ranges.html#services DataAwsIpRanges#services}
    */
    readonly services: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ip_ranges.html#url DataAwsIpRanges#url}
    */
    readonly url?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ip_ranges.html aws_ip_ranges}
  */
  export class DataAwsIpRanges extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ip_ranges";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ip_ranges.html aws_ip_ranges} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIpRangesConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsIpRangesConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ip_ranges',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._regions = config.regions;
      this._services = config.services;
      this._url = config.url;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cidr_blocks - computed: true, optional: false, required: false
    public get cidrBlocks() {
      return this.getListAttribute('cidr_blocks');
    }

    // create_date - computed: true, optional: false, required: false
    public get createDate() {
      return this.getStringAttribute('create_date');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ipv6_cidr_blocks - computed: true, optional: false, required: false
    public get ipv6CidrBlocks() {
      return this.getListAttribute('ipv6_cidr_blocks');
    }

    // regions - computed: false, optional: true, required: false
    private _regions?: string[] | undefined; 
    public get regions() {
      return this.getListAttribute('regions');
    }
    public set regions(value: string[] | undefined) {
      this._regions = value;
    }
    public resetRegions() {
      this._regions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionsInput() {
      return this._regions
    }

    // services - computed: false, optional: false, required: true
    private _services?: string[]; 
    public get services() {
      return this.getListAttribute('services');
    }
    public set services(value: string[]) {
      this._services = value;
    }
    // Temporarily expose input value. Use with caution.
    public get servicesInput() {
      return this._services
    }

    // sync_token - computed: true, optional: false, required: false
    public get syncToken() {
      return this.getNumberAttribute('sync_token');
    }

    // url - computed: false, optional: true, required: false
    private _url?: string | undefined; 
    public get url() {
      return this.getStringAttribute('url');
    }
    public set url(value: string | undefined) {
      this._url = value;
    }
    public resetUrl() {
      this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
      return this._url
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        regions: cdktf.listMapper(cdktf.stringToTerraform)(this._regions),
        services: cdktf.listMapper(cdktf.stringToTerraform)(this._services),
        url: cdktf.stringToTerraform(this._url),
      };
    }
  }
  export interface DataAwsLaunchConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_configuration.html#name DataAwsLaunchConfiguration#name}
    */
    readonly name: string;
  }
  export class DataAwsLaunchConfigurationEbsBlockDevice extends cdktf.ComplexComputedList {

    // delete_on_termination - computed: true, optional: false, required: false
    public get deleteOnTermination() {
      return this.getBooleanAttribute('delete_on_termination') as any;
    }

    // device_name - computed: true, optional: false, required: false
    public get deviceName() {
      return this.getStringAttribute('device_name');
    }

    // encrypted - computed: true, optional: false, required: false
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }

    // iops - computed: true, optional: false, required: false
    public get iops() {
      return this.getNumberAttribute('iops');
    }

    // no_device - computed: true, optional: false, required: false
    public get noDevice() {
      return this.getBooleanAttribute('no_device') as any;
    }

    // snapshot_id - computed: true, optional: false, required: false
    public get snapshotId() {
      return this.getStringAttribute('snapshot_id');
    }

    // throughput - computed: true, optional: false, required: false
    public get throughput() {
      return this.getBooleanAttribute('throughput') as any;
    }

    // volume_size - computed: true, optional: false, required: false
    public get volumeSize() {
      return this.getNumberAttribute('volume_size');
    }

    // volume_type - computed: true, optional: false, required: false
    public get volumeType() {
      return this.getStringAttribute('volume_type');
    }
  }
  export class DataAwsLaunchConfigurationEphemeralBlockDevice extends cdktf.ComplexComputedList {

    // device_name - computed: true, optional: false, required: false
    public get deviceName() {
      return this.getStringAttribute('device_name');
    }

    // virtual_name - computed: true, optional: false, required: false
    public get virtualName() {
      return this.getStringAttribute('virtual_name');
    }
  }
  export class DataAwsLaunchConfigurationMetadataOptions extends cdktf.ComplexComputedList {

    // http_endpoint - computed: true, optional: false, required: false
    public get httpEndpoint() {
      return this.getStringAttribute('http_endpoint');
    }

    // http_put_response_hop_limit - computed: true, optional: false, required: false
    public get httpPutResponseHopLimit() {
      return this.getNumberAttribute('http_put_response_hop_limit');
    }

    // http_tokens - computed: true, optional: false, required: false
    public get httpTokens() {
      return this.getStringAttribute('http_tokens');
    }
  }
  export class DataAwsLaunchConfigurationRootBlockDevice extends cdktf.ComplexComputedList {

    // delete_on_termination - computed: true, optional: false, required: false
    public get deleteOnTermination() {
      return this.getBooleanAttribute('delete_on_termination') as any;
    }

    // encrypted - computed: true, optional: false, required: false
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }

    // iops - computed: true, optional: false, required: false
    public get iops() {
      return this.getNumberAttribute('iops');
    }

    // throughput - computed: true, optional: false, required: false
    public get throughput() {
      return this.getBooleanAttribute('throughput') as any;
    }

    // volume_size - computed: true, optional: false, required: false
    public get volumeSize() {
      return this.getNumberAttribute('volume_size');
    }

    // volume_type - computed: true, optional: false, required: false
    public get volumeType() {
      return this.getStringAttribute('volume_type');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/launch_configuration.html aws_launch_configuration}
  */
  export class DataAwsLaunchConfiguration extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_launch_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/launch_configuration.html aws_launch_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLaunchConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsLaunchConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_launch_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // associate_public_ip_address - computed: true, optional: false, required: false
    public get associatePublicIpAddress() {
      return this.getBooleanAttribute('associate_public_ip_address') as any;
    }

    // ebs_block_device - computed: true, optional: false, required: false
    public ebsBlockDevice(index: string) {
      return new DataAwsLaunchConfigurationEbsBlockDevice(this, 'ebs_block_device', index);
    }

    // ebs_optimized - computed: true, optional: false, required: false
    public get ebsOptimized() {
      return this.getBooleanAttribute('ebs_optimized') as any;
    }

    // enable_monitoring - computed: true, optional: false, required: false
    public get enableMonitoring() {
      return this.getBooleanAttribute('enable_monitoring') as any;
    }

    // ephemeral_block_device - computed: true, optional: false, required: false
    public ephemeralBlockDevice(index: string) {
      return new DataAwsLaunchConfigurationEphemeralBlockDevice(this, 'ephemeral_block_device', index);
    }

    // iam_instance_profile - computed: true, optional: false, required: false
    public get iamInstanceProfile() {
      return this.getStringAttribute('iam_instance_profile');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_id - computed: true, optional: false, required: false
    public get imageId() {
      return this.getStringAttribute('image_id');
    }

    // instance_type - computed: true, optional: false, required: false
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }

    // key_name - computed: true, optional: false, required: false
    public get keyName() {
      return this.getStringAttribute('key_name');
    }

    // metadata_options - computed: true, optional: false, required: false
    public metadataOptions(index: string) {
      return new DataAwsLaunchConfigurationMetadataOptions(this, 'metadata_options', index);
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // placement_tenancy - computed: true, optional: false, required: false
    public get placementTenancy() {
      return this.getStringAttribute('placement_tenancy');
    }

    // root_block_device - computed: true, optional: false, required: false
    public rootBlockDevice(index: string) {
      return new DataAwsLaunchConfigurationRootBlockDevice(this, 'root_block_device', index);
    }

    // security_groups - computed: true, optional: false, required: false
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }

    // spot_price - computed: true, optional: false, required: false
    public get spotPrice() {
      return this.getStringAttribute('spot_price');
    }

    // user_data - computed: true, optional: false, required: false
    public get userData() {
      return this.getStringAttribute('user_data');
    }

    // vpc_classic_link_id - computed: true, optional: false, required: false
    public get vpcClassicLinkId() {
      return this.getStringAttribute('vpc_classic_link_id');
    }

    // vpc_classic_link_security_groups - computed: true, optional: false, required: false
    public get vpcClassicLinkSecurityGroups() {
      return this.getListAttribute('vpc_classic_link_security_groups');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsPartitionConfig extends cdktf.TerraformMetaArguments {
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/partition.html aws_partition}
  */
  export class DataAwsPartition extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_partition";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/partition.html aws_partition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsPartitionConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsPartitionConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_partition',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // dns_suffix - computed: true, optional: false, required: false
    public get dnsSuffix() {
      return this.getStringAttribute('dns_suffix');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // partition - computed: true, optional: false, required: false
    public get partition() {
      return this.getStringAttribute('partition');
    }

    // reverse_dns_prefix - computed: true, optional: false, required: false
    public get reverseDnsPrefix() {
      return this.getStringAttribute('reverse_dns_prefix');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
      };
    }
  }
  export interface DataAwsPrefixListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/prefix_list.html#name DataAwsPrefixList#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/prefix_list.html#prefix_list_id DataAwsPrefixList#prefix_list_id}
    */
    readonly prefixListId?: string;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/prefix_list.html#filter DataAwsPrefixList#filter}
    */
    readonly filter?: DataAwsPrefixListFilter[];
  }
  export interface DataAwsPrefixListFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/prefix_list.html#name DataAwsPrefixList#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/prefix_list.html#values DataAwsPrefixList#values}
    */
    readonly values: string[];
  }

  function dataAwsPrefixListFilterToTerraform(struct?: DataAwsPrefixListFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/prefix_list.html aws_prefix_list}
  */
  export class DataAwsPrefixList extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_prefix_list";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/prefix_list.html aws_prefix_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsPrefixListConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsPrefixListConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_prefix_list',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._prefixListId = config.prefixListId;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cidr_blocks - computed: true, optional: false, required: false
    public get cidrBlocks() {
      return this.getListAttribute('cidr_blocks');
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

    // prefix_list_id - computed: false, optional: true, required: false
    private _prefixListId?: string | undefined; 
    public get prefixListId() {
      return this.getStringAttribute('prefix_list_id');
    }
    public set prefixListId(value: string | undefined) {
      this._prefixListId = value;
    }
    public resetPrefixListId() {
      this._prefixListId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixListIdInput() {
      return this._prefixListId
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsPrefixListFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsPrefixListFilter[] | undefined) {
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
        prefix_list_id: cdktf.stringToTerraform(this._prefixListId),
        filter: cdktf.listMapper(dataAwsPrefixListFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsRegionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/region.html#endpoint DataAwsRegion#endpoint}
    */
    readonly endpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/region.html#name DataAwsRegion#name}
    */
    readonly name?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/region.html aws_region}
  */
  export class DataAwsRegion extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_region";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/region.html aws_region} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRegionConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsRegionConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_region',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._endpoint = config.endpoint;
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // endpoint - computed: true, optional: true, required: false
    private _endpoint?: string | undefined; 
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string | undefined) {
      this._endpoint = value;
    }
    public resetEndpoint() {
      this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
      return this._endpoint
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        endpoint: cdktf.stringToTerraform(this._endpoint),
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsRegionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/regions.html#all_regions DataAwsRegions#all_regions}
    */
    readonly allRegions?: boolean | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/regions.html#filter DataAwsRegions#filter}
    */
    readonly filter?: DataAwsRegionsFilter[];
  }
  export interface DataAwsRegionsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/regions.html#name DataAwsRegions#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/regions.html#values DataAwsRegions#values}
    */
    readonly values: string[];
  }

  function dataAwsRegionsFilterToTerraform(struct?: DataAwsRegionsFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/regions.html aws_regions}
  */
  export class DataAwsRegions extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_regions";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/regions.html aws_regions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRegionsConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsRegionsConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_regions',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._allRegions = config.allRegions;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // all_regions - computed: false, optional: true, required: false
    private _allRegions?: boolean | cdktf.IResolvable | undefined; 
    public get allRegions() {
      return this.getBooleanAttribute('all_regions') as any;
    }
    public set allRegions(value: boolean | cdktf.IResolvable | undefined) {
      this._allRegions = value;
    }
    public resetAllRegions() {
      this._allRegions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allRegionsInput() {
      return this._allRegions
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // names - computed: true, optional: false, required: false
    public get names() {
      return this.getListAttribute('names');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsRegionsFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsRegionsFilter[] | undefined) {
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
        all_regions: cdktf.booleanToTerraform(this._allRegions),
        filter: cdktf.listMapper(dataAwsRegionsFilterToTerraform)(this._filter),
      };
    }
  }
}
