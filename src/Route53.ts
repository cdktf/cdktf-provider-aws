// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Route 53
*/
export namespace Route53 {
  export interface Route53DelegationSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_delegation_set.html#reference_name Route53DelegationSet#reference_name}
    */
    readonly referenceName?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_delegation_set.html aws_route53_delegation_set}
  */
  export class Route53DelegationSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_delegation_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_delegation_set.html aws_route53_delegation_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53DelegationSetConfig = {}
    */
    public constructor(scope: Construct, id: string, config: Route53DelegationSetConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_delegation_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._referenceName = config.referenceName;
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

    // name_servers - computed: true, optional: false, required: false
    public get nameServers() {
      return this.getListAttribute('name_servers');
    }

    // reference_name - computed: false, optional: true, required: false
    private _referenceName?: string | undefined; 
    public get referenceName() {
      return this.getStringAttribute('reference_name');
    }
    public set referenceName(value: string | undefined) {
      this._referenceName = value;
    }
    public resetReferenceName() {
      this._referenceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get referenceNameInput() {
      return this._referenceName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        reference_name: cdktf.stringToTerraform(this._referenceName),
      };
    }
  }
  export interface Route53HealthCheckConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#child_health_threshold Route53HealthCheck#child_health_threshold}
    */
    readonly childHealthThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#child_healthchecks Route53HealthCheck#child_healthchecks}
    */
    readonly childHealthchecks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#cloudwatch_alarm_name Route53HealthCheck#cloudwatch_alarm_name}
    */
    readonly cloudwatchAlarmName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#cloudwatch_alarm_region Route53HealthCheck#cloudwatch_alarm_region}
    */
    readonly cloudwatchAlarmRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#disabled Route53HealthCheck#disabled}
    */
    readonly disabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#enable_sni Route53HealthCheck#enable_sni}
    */
    readonly enableSni?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#failure_threshold Route53HealthCheck#failure_threshold}
    */
    readonly failureThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#fqdn Route53HealthCheck#fqdn}
    */
    readonly fqdn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}
    */
    readonly insufficientDataHealthStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#invert_healthcheck Route53HealthCheck#invert_healthcheck}
    */
    readonly invertHealthcheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#ip_address Route53HealthCheck#ip_address}
    */
    readonly ipAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#measure_latency Route53HealthCheck#measure_latency}
    */
    readonly measureLatency?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#port Route53HealthCheck#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#reference_name Route53HealthCheck#reference_name}
    */
    readonly referenceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#regions Route53HealthCheck#regions}
    */
    readonly regions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#request_interval Route53HealthCheck#request_interval}
    */
    readonly requestInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#resource_path Route53HealthCheck#resource_path}
    */
    readonly resourcePath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#routing_control_arn Route53HealthCheck#routing_control_arn}
    */
    readonly routingControlArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#search_string Route53HealthCheck#search_string}
    */
    readonly searchString?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#tags Route53HealthCheck#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#tags_all Route53HealthCheck#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#type Route53HealthCheck#type}
    */
    readonly type: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html aws_route53_health_check}
  */
  export class Route53HealthCheck extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_health_check";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html aws_route53_health_check} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53HealthCheckConfig
    */
    public constructor(scope: Construct, id: string, config: Route53HealthCheckConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_health_check',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._childHealthThreshold = config.childHealthThreshold;
      this._childHealthchecks = config.childHealthchecks;
      this._cloudwatchAlarmName = config.cloudwatchAlarmName;
      this._cloudwatchAlarmRegion = config.cloudwatchAlarmRegion;
      this._disabled = config.disabled;
      this._enableSni = config.enableSni;
      this._failureThreshold = config.failureThreshold;
      this._fqdn = config.fqdn;
      this._insufficientDataHealthStatus = config.insufficientDataHealthStatus;
      this._invertHealthcheck = config.invertHealthcheck;
      this._ipAddress = config.ipAddress;
      this._measureLatency = config.measureLatency;
      this._port = config.port;
      this._referenceName = config.referenceName;
      this._regions = config.regions;
      this._requestInterval = config.requestInterval;
      this._resourcePath = config.resourcePath;
      this._routingControlArn = config.routingControlArn;
      this._searchString = config.searchString;
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

    // child_health_threshold - computed: false, optional: true, required: false
    private _childHealthThreshold?: number | undefined; 
    public get childHealthThreshold() {
      return this.getNumberAttribute('child_health_threshold');
    }
    public set childHealthThreshold(value: number | undefined) {
      this._childHealthThreshold = value;
    }
    public resetChildHealthThreshold() {
      this._childHealthThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get childHealthThresholdInput() {
      return this._childHealthThreshold
    }

    // child_healthchecks - computed: false, optional: true, required: false
    private _childHealthchecks?: string[] | undefined; 
    public get childHealthchecks() {
      return this.getListAttribute('child_healthchecks');
    }
    public set childHealthchecks(value: string[] | undefined) {
      this._childHealthchecks = value;
    }
    public resetChildHealthchecks() {
      this._childHealthchecks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get childHealthchecksInput() {
      return this._childHealthchecks
    }

    // cloudwatch_alarm_name - computed: false, optional: true, required: false
    private _cloudwatchAlarmName?: string | undefined; 
    public get cloudwatchAlarmName() {
      return this.getStringAttribute('cloudwatch_alarm_name');
    }
    public set cloudwatchAlarmName(value: string | undefined) {
      this._cloudwatchAlarmName = value;
    }
    public resetCloudwatchAlarmName() {
      this._cloudwatchAlarmName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchAlarmNameInput() {
      return this._cloudwatchAlarmName
    }

    // cloudwatch_alarm_region - computed: false, optional: true, required: false
    private _cloudwatchAlarmRegion?: string | undefined; 
    public get cloudwatchAlarmRegion() {
      return this.getStringAttribute('cloudwatch_alarm_region');
    }
    public set cloudwatchAlarmRegion(value: string | undefined) {
      this._cloudwatchAlarmRegion = value;
    }
    public resetCloudwatchAlarmRegion() {
      this._cloudwatchAlarmRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchAlarmRegionInput() {
      return this._cloudwatchAlarmRegion
    }

    // disabled - computed: false, optional: true, required: false
    private _disabled?: boolean | cdktf.IResolvable | undefined; 
    public get disabled() {
      return this.getBooleanAttribute('disabled') as any;
    }
    public set disabled(value: boolean | cdktf.IResolvable | undefined) {
      this._disabled = value;
    }
    public resetDisabled() {
      this._disabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disabledInput() {
      return this._disabled
    }

    // enable_sni - computed: true, optional: true, required: false
    private _enableSni?: boolean | cdktf.IResolvable | undefined; 
    public get enableSni() {
      return this.getBooleanAttribute('enable_sni') as any;
    }
    public set enableSni(value: boolean | cdktf.IResolvable | undefined) {
      this._enableSni = value;
    }
    public resetEnableSni() {
      this._enableSni = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableSniInput() {
      return this._enableSni
    }

    // failure_threshold - computed: true, optional: true, required: false
    private _failureThreshold?: number | undefined; 
    public get failureThreshold() {
      return this.getNumberAttribute('failure_threshold');
    }
    public set failureThreshold(value: number | undefined) {
      this._failureThreshold = value;
    }
    public resetFailureThreshold() {
      this._failureThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failureThresholdInput() {
      return this._failureThreshold
    }

    // fqdn - computed: false, optional: true, required: false
    private _fqdn?: string | undefined; 
    public get fqdn() {
      return this.getStringAttribute('fqdn');
    }
    public set fqdn(value: string | undefined) {
      this._fqdn = value;
    }
    public resetFqdn() {
      this._fqdn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fqdnInput() {
      return this._fqdn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // insufficient_data_health_status - computed: false, optional: true, required: false
    private _insufficientDataHealthStatus?: string | undefined; 
    public get insufficientDataHealthStatus() {
      return this.getStringAttribute('insufficient_data_health_status');
    }
    public set insufficientDataHealthStatus(value: string | undefined) {
      this._insufficientDataHealthStatus = value;
    }
    public resetInsufficientDataHealthStatus() {
      this._insufficientDataHealthStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get insufficientDataHealthStatusInput() {
      return this._insufficientDataHealthStatus
    }

    // invert_healthcheck - computed: false, optional: true, required: false
    private _invertHealthcheck?: boolean | cdktf.IResolvable | undefined; 
    public get invertHealthcheck() {
      return this.getBooleanAttribute('invert_healthcheck') as any;
    }
    public set invertHealthcheck(value: boolean | cdktf.IResolvable | undefined) {
      this._invertHealthcheck = value;
    }
    public resetInvertHealthcheck() {
      this._invertHealthcheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invertHealthcheckInput() {
      return this._invertHealthcheck
    }

    // ip_address - computed: false, optional: true, required: false
    private _ipAddress?: string | undefined; 
    public get ipAddress() {
      return this.getStringAttribute('ip_address');
    }
    public set ipAddress(value: string | undefined) {
      this._ipAddress = value;
    }
    public resetIpAddress() {
      this._ipAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressInput() {
      return this._ipAddress
    }

    // measure_latency - computed: false, optional: true, required: false
    private _measureLatency?: boolean | cdktf.IResolvable | undefined; 
    public get measureLatency() {
      return this.getBooleanAttribute('measure_latency') as any;
    }
    public set measureLatency(value: boolean | cdktf.IResolvable | undefined) {
      this._measureLatency = value;
    }
    public resetMeasureLatency() {
      this._measureLatency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get measureLatencyInput() {
      return this._measureLatency
    }

    // port - computed: false, optional: true, required: false
    private _port?: number | undefined; 
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number | undefined) {
      this._port = value;
    }
    public resetPort() {
      this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
      return this._port
    }

    // reference_name - computed: false, optional: true, required: false
    private _referenceName?: string | undefined; 
    public get referenceName() {
      return this.getStringAttribute('reference_name');
    }
    public set referenceName(value: string | undefined) {
      this._referenceName = value;
    }
    public resetReferenceName() {
      this._referenceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get referenceNameInput() {
      return this._referenceName
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

    // request_interval - computed: false, optional: true, required: false
    private _requestInterval?: number | undefined; 
    public get requestInterval() {
      return this.getNumberAttribute('request_interval');
    }
    public set requestInterval(value: number | undefined) {
      this._requestInterval = value;
    }
    public resetRequestInterval() {
      this._requestInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestIntervalInput() {
      return this._requestInterval
    }

    // resource_path - computed: false, optional: true, required: false
    private _resourcePath?: string | undefined; 
    public get resourcePath() {
      return this.getStringAttribute('resource_path');
    }
    public set resourcePath(value: string | undefined) {
      this._resourcePath = value;
    }
    public resetResourcePath() {
      this._resourcePath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcePathInput() {
      return this._resourcePath
    }

    // routing_control_arn - computed: false, optional: true, required: false
    private _routingControlArn?: string | undefined; 
    public get routingControlArn() {
      return this.getStringAttribute('routing_control_arn');
    }
    public set routingControlArn(value: string | undefined) {
      this._routingControlArn = value;
    }
    public resetRoutingControlArn() {
      this._routingControlArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingControlArnInput() {
      return this._routingControlArn
    }

    // search_string - computed: false, optional: true, required: false
    private _searchString?: string | undefined; 
    public get searchString() {
      return this.getStringAttribute('search_string');
    }
    public set searchString(value: string | undefined) {
      this._searchString = value;
    }
    public resetSearchString() {
      this._searchString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get searchStringInput() {
      return this._searchString
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
        child_health_threshold: cdktf.numberToTerraform(this._childHealthThreshold),
        child_healthchecks: cdktf.listMapper(cdktf.stringToTerraform)(this._childHealthchecks),
        cloudwatch_alarm_name: cdktf.stringToTerraform(this._cloudwatchAlarmName),
        cloudwatch_alarm_region: cdktf.stringToTerraform(this._cloudwatchAlarmRegion),
        disabled: cdktf.booleanToTerraform(this._disabled),
        enable_sni: cdktf.booleanToTerraform(this._enableSni),
        failure_threshold: cdktf.numberToTerraform(this._failureThreshold),
        fqdn: cdktf.stringToTerraform(this._fqdn),
        insufficient_data_health_status: cdktf.stringToTerraform(this._insufficientDataHealthStatus),
        invert_healthcheck: cdktf.booleanToTerraform(this._invertHealthcheck),
        ip_address: cdktf.stringToTerraform(this._ipAddress),
        measure_latency: cdktf.booleanToTerraform(this._measureLatency),
        port: cdktf.numberToTerraform(this._port),
        reference_name: cdktf.stringToTerraform(this._referenceName),
        regions: cdktf.listMapper(cdktf.stringToTerraform)(this._regions),
        request_interval: cdktf.numberToTerraform(this._requestInterval),
        resource_path: cdktf.stringToTerraform(this._resourcePath),
        routing_control_arn: cdktf.stringToTerraform(this._routingControlArn),
        search_string: cdktf.stringToTerraform(this._searchString),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        type: cdktf.stringToTerraform(this._type),
      };
    }
  }
  export interface Route53HostedZoneDnssecConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec.html#hosted_zone_id Route53HostedZoneDnssec#hosted_zone_id}
    */
    readonly hostedZoneId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec.html#signing_status Route53HostedZoneDnssec#signing_status}
    */
    readonly signingStatus?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec.html aws_route53_hosted_zone_dnssec}
  */
  export class Route53HostedZoneDnssec extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_hosted_zone_dnssec";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec.html aws_route53_hosted_zone_dnssec} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53HostedZoneDnssecConfig
    */
    public constructor(scope: Construct, id: string, config: Route53HostedZoneDnssecConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_hosted_zone_dnssec',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._hostedZoneId = config.hostedZoneId;
      this._signingStatus = config.signingStatus;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // hosted_zone_id - computed: false, optional: false, required: true
    private _hostedZoneId?: string; 
    public get hostedZoneId() {
      return this.getStringAttribute('hosted_zone_id');
    }
    public set hostedZoneId(value: string) {
      this._hostedZoneId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hostedZoneIdInput() {
      return this._hostedZoneId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // signing_status - computed: false, optional: true, required: false
    private _signingStatus?: string | undefined; 
    public get signingStatus() {
      return this.getStringAttribute('signing_status');
    }
    public set signingStatus(value: string | undefined) {
      this._signingStatus = value;
    }
    public resetSigningStatus() {
      this._signingStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get signingStatusInput() {
      return this._signingStatus
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        hosted_zone_id: cdktf.stringToTerraform(this._hostedZoneId),
        signing_status: cdktf.stringToTerraform(this._signingStatus),
      };
    }
  }
  export interface Route53KeySigningKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key.html#hosted_zone_id Route53KeySigningKey#hosted_zone_id}
    */
    readonly hostedZoneId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key.html#key_management_service_arn Route53KeySigningKey#key_management_service_arn}
    */
    readonly keyManagementServiceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key.html#name Route53KeySigningKey#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key.html#status Route53KeySigningKey#status}
    */
    readonly status?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key.html aws_route53_key_signing_key}
  */
  export class Route53KeySigningKey extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_key_signing_key";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key.html aws_route53_key_signing_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53KeySigningKeyConfig
    */
    public constructor(scope: Construct, id: string, config: Route53KeySigningKeyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_key_signing_key',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._hostedZoneId = config.hostedZoneId;
      this._keyManagementServiceArn = config.keyManagementServiceArn;
      this._name = config.name;
      this._status = config.status;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // digest_algorithm_mnemonic - computed: true, optional: false, required: false
    public get digestAlgorithmMnemonic() {
      return this.getStringAttribute('digest_algorithm_mnemonic');
    }

    // digest_algorithm_type - computed: true, optional: false, required: false
    public get digestAlgorithmType() {
      return this.getNumberAttribute('digest_algorithm_type');
    }

    // digest_value - computed: true, optional: false, required: false
    public get digestValue() {
      return this.getStringAttribute('digest_value');
    }

    // dnskey_record - computed: true, optional: false, required: false
    public get dnskeyRecord() {
      return this.getStringAttribute('dnskey_record');
    }

    // ds_record - computed: true, optional: false, required: false
    public get dsRecord() {
      return this.getStringAttribute('ds_record');
    }

    // flag - computed: true, optional: false, required: false
    public get flag() {
      return this.getNumberAttribute('flag');
    }

    // hosted_zone_id - computed: false, optional: false, required: true
    private _hostedZoneId?: string; 
    public get hostedZoneId() {
      return this.getStringAttribute('hosted_zone_id');
    }
    public set hostedZoneId(value: string) {
      this._hostedZoneId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hostedZoneIdInput() {
      return this._hostedZoneId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key_management_service_arn - computed: false, optional: false, required: true
    private _keyManagementServiceArn?: string; 
    public get keyManagementServiceArn() {
      return this.getStringAttribute('key_management_service_arn');
    }
    public set keyManagementServiceArn(value: string) {
      this._keyManagementServiceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyManagementServiceArnInput() {
      return this._keyManagementServiceArn
    }

    // key_tag - computed: true, optional: false, required: false
    public get keyTag() {
      return this.getNumberAttribute('key_tag');
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

    // public_key - computed: true, optional: false, required: false
    public get publicKey() {
      return this.getStringAttribute('public_key');
    }

    // signing_algorithm_mnemonic - computed: true, optional: false, required: false
    public get signingAlgorithmMnemonic() {
      return this.getStringAttribute('signing_algorithm_mnemonic');
    }

    // signing_algorithm_type - computed: true, optional: false, required: false
    public get signingAlgorithmType() {
      return this.getNumberAttribute('signing_algorithm_type');
    }

    // status - computed: false, optional: true, required: false
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        hosted_zone_id: cdktf.stringToTerraform(this._hostedZoneId),
        key_management_service_arn: cdktf.stringToTerraform(this._keyManagementServiceArn),
        name: cdktf.stringToTerraform(this._name),
        status: cdktf.stringToTerraform(this._status),
      };
    }
  }
  export interface Route53QueryLogConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_query_log.html#cloudwatch_log_group_arn Route53QueryLog#cloudwatch_log_group_arn}
    */
    readonly cloudwatchLogGroupArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_query_log.html#zone_id Route53QueryLog#zone_id}
    */
    readonly zoneId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_query_log.html aws_route53_query_log}
  */
  export class Route53QueryLog extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_query_log";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_query_log.html aws_route53_query_log} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53QueryLogConfig
    */
    public constructor(scope: Construct, id: string, config: Route53QueryLogConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_query_log',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._cloudwatchLogGroupArn = config.cloudwatchLogGroupArn;
      this._zoneId = config.zoneId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cloudwatch_log_group_arn - computed: false, optional: false, required: true
    private _cloudwatchLogGroupArn?: string; 
    public get cloudwatchLogGroupArn() {
      return this.getStringAttribute('cloudwatch_log_group_arn');
    }
    public set cloudwatchLogGroupArn(value: string) {
      this._cloudwatchLogGroupArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogGroupArnInput() {
      return this._cloudwatchLogGroupArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // zone_id - computed: false, optional: false, required: true
    private _zoneId?: string; 
    public get zoneId() {
      return this.getStringAttribute('zone_id');
    }
    public set zoneId(value: string) {
      this._zoneId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get zoneIdInput() {
      return this._zoneId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cloudwatch_log_group_arn: cdktf.stringToTerraform(this._cloudwatchLogGroupArn),
        zone_id: cdktf.stringToTerraform(this._zoneId),
      };
    }
  }
  export interface Route53RecordConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#allow_overwrite Route53Record#allow_overwrite}
    */
    readonly allowOverwrite?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#health_check_id Route53Record#health_check_id}
    */
    readonly healthCheckId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#multivalue_answer_routing_policy Route53Record#multivalue_answer_routing_policy}
    */
    readonly multivalueAnswerRoutingPolicy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#name Route53Record#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#records Route53Record#records}
    */
    readonly records?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#set_identifier Route53Record#set_identifier}
    */
    readonly setIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#ttl Route53Record#ttl}
    */
    readonly ttl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#type Route53Record#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#zone_id Route53Record#zone_id}
    */
    readonly zoneId: string;
    /**
    * alias block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#alias Route53Record#alias}
    */
    readonly alias?: Route53RecordAlias[];
    /**
    * failover_routing_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#failover_routing_policy Route53Record#failover_routing_policy}
    */
    readonly failoverRoutingPolicy?: Route53RecordFailoverRoutingPolicy[];
    /**
    * geolocation_routing_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#geolocation_routing_policy Route53Record#geolocation_routing_policy}
    */
    readonly geolocationRoutingPolicy?: Route53RecordGeolocationRoutingPolicy[];
    /**
    * latency_routing_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#latency_routing_policy Route53Record#latency_routing_policy}
    */
    readonly latencyRoutingPolicy?: Route53RecordLatencyRoutingPolicy[];
    /**
    * weighted_routing_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#weighted_routing_policy Route53Record#weighted_routing_policy}
    */
    readonly weightedRoutingPolicy?: Route53RecordWeightedRoutingPolicy[];
  }
  export interface Route53RecordAlias {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#evaluate_target_health Route53Record#evaluate_target_health}
    */
    readonly evaluateTargetHealth: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#name Route53Record#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#zone_id Route53Record#zone_id}
    */
    readonly zoneId: string;
  }

  function route53RecordAliasToTerraform(struct?: Route53RecordAlias): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      evaluate_target_health: cdktf.booleanToTerraform(struct!.evaluateTargetHealth),
      name: cdktf.stringToTerraform(struct!.name),
      zone_id: cdktf.stringToTerraform(struct!.zoneId),
    }
  }

  export interface Route53RecordFailoverRoutingPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#type Route53Record#type}
    */
    readonly type: string;
  }

  function route53RecordFailoverRoutingPolicyToTerraform(struct?: Route53RecordFailoverRoutingPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface Route53RecordGeolocationRoutingPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#continent Route53Record#continent}
    */
    readonly continent?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#country Route53Record#country}
    */
    readonly country?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#subdivision Route53Record#subdivision}
    */
    readonly subdivision?: string;
  }

  function route53RecordGeolocationRoutingPolicyToTerraform(struct?: Route53RecordGeolocationRoutingPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      continent: cdktf.stringToTerraform(struct!.continent),
      country: cdktf.stringToTerraform(struct!.country),
      subdivision: cdktf.stringToTerraform(struct!.subdivision),
    }
  }

  export interface Route53RecordLatencyRoutingPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#region Route53Record#region}
    */
    readonly region: string;
  }

  function route53RecordLatencyRoutingPolicyToTerraform(struct?: Route53RecordLatencyRoutingPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      region: cdktf.stringToTerraform(struct!.region),
    }
  }

  export interface Route53RecordWeightedRoutingPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#weight Route53Record#weight}
    */
    readonly weight: number;
  }

  function route53RecordWeightedRoutingPolicyToTerraform(struct?: Route53RecordWeightedRoutingPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      weight: cdktf.numberToTerraform(struct!.weight),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html aws_route53_record}
  */
  export class Route53Record extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_record";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html aws_route53_record} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecordConfig
    */
    public constructor(scope: Construct, id: string, config: Route53RecordConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_record',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._allowOverwrite = config.allowOverwrite;
      this._healthCheckId = config.healthCheckId;
      this._multivalueAnswerRoutingPolicy = config.multivalueAnswerRoutingPolicy;
      this._name = config.name;
      this._records = config.records;
      this._setIdentifier = config.setIdentifier;
      this._ttl = config.ttl;
      this._type = config.type;
      this._zoneId = config.zoneId;
      this._alias = config.alias;
      this._failoverRoutingPolicy = config.failoverRoutingPolicy;
      this._geolocationRoutingPolicy = config.geolocationRoutingPolicy;
      this._latencyRoutingPolicy = config.latencyRoutingPolicy;
      this._weightedRoutingPolicy = config.weightedRoutingPolicy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allow_overwrite - computed: true, optional: true, required: false
    private _allowOverwrite?: boolean | cdktf.IResolvable | undefined; 
    public get allowOverwrite() {
      return this.getBooleanAttribute('allow_overwrite') as any;
    }
    public set allowOverwrite(value: boolean | cdktf.IResolvable | undefined) {
      this._allowOverwrite = value;
    }
    public resetAllowOverwrite() {
      this._allowOverwrite = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowOverwriteInput() {
      return this._allowOverwrite
    }

    // fqdn - computed: true, optional: false, required: false
    public get fqdn() {
      return this.getStringAttribute('fqdn');
    }

    // health_check_id - computed: false, optional: true, required: false
    private _healthCheckId?: string | undefined; 
    public get healthCheckId() {
      return this.getStringAttribute('health_check_id');
    }
    public set healthCheckId(value: string | undefined) {
      this._healthCheckId = value;
    }
    public resetHealthCheckId() {
      this._healthCheckId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckIdInput() {
      return this._healthCheckId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // multivalue_answer_routing_policy - computed: false, optional: true, required: false
    private _multivalueAnswerRoutingPolicy?: boolean | cdktf.IResolvable | undefined; 
    public get multivalueAnswerRoutingPolicy() {
      return this.getBooleanAttribute('multivalue_answer_routing_policy') as any;
    }
    public set multivalueAnswerRoutingPolicy(value: boolean | cdktf.IResolvable | undefined) {
      this._multivalueAnswerRoutingPolicy = value;
    }
    public resetMultivalueAnswerRoutingPolicy() {
      this._multivalueAnswerRoutingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multivalueAnswerRoutingPolicyInput() {
      return this._multivalueAnswerRoutingPolicy
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

    // records - computed: false, optional: true, required: false
    private _records?: string[] | undefined; 
    public get records() {
      return this.getListAttribute('records');
    }
    public set records(value: string[] | undefined) {
      this._records = value;
    }
    public resetRecords() {
      this._records = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordsInput() {
      return this._records
    }

    // set_identifier - computed: false, optional: true, required: false
    private _setIdentifier?: string | undefined; 
    public get setIdentifier() {
      return this.getStringAttribute('set_identifier');
    }
    public set setIdentifier(value: string | undefined) {
      this._setIdentifier = value;
    }
    public resetSetIdentifier() {
      this._setIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get setIdentifierInput() {
      return this._setIdentifier
    }

    // ttl - computed: false, optional: true, required: false
    private _ttl?: number | undefined; 
    public get ttl() {
      return this.getNumberAttribute('ttl');
    }
    public set ttl(value: number | undefined) {
      this._ttl = value;
    }
    public resetTtl() {
      this._ttl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ttlInput() {
      return this._ttl
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

    // zone_id - computed: false, optional: false, required: true
    private _zoneId?: string; 
    public get zoneId() {
      return this.getStringAttribute('zone_id');
    }
    public set zoneId(value: string) {
      this._zoneId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get zoneIdInput() {
      return this._zoneId
    }

    // alias - computed: false, optional: true, required: false
    private _alias?: Route53RecordAlias[] | undefined; 
    public get alias() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('alias') as any;
    }
    public set alias(value: Route53RecordAlias[] | undefined) {
      this._alias = value;
    }
    public resetAlias() {
      this._alias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasInput() {
      return this._alias
    }

    // failover_routing_policy - computed: false, optional: true, required: false
    private _failoverRoutingPolicy?: Route53RecordFailoverRoutingPolicy[] | undefined; 
    public get failoverRoutingPolicy() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('failover_routing_policy') as any;
    }
    public set failoverRoutingPolicy(value: Route53RecordFailoverRoutingPolicy[] | undefined) {
      this._failoverRoutingPolicy = value;
    }
    public resetFailoverRoutingPolicy() {
      this._failoverRoutingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failoverRoutingPolicyInput() {
      return this._failoverRoutingPolicy
    }

    // geolocation_routing_policy - computed: false, optional: true, required: false
    private _geolocationRoutingPolicy?: Route53RecordGeolocationRoutingPolicy[] | undefined; 
    public get geolocationRoutingPolicy() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('geolocation_routing_policy') as any;
    }
    public set geolocationRoutingPolicy(value: Route53RecordGeolocationRoutingPolicy[] | undefined) {
      this._geolocationRoutingPolicy = value;
    }
    public resetGeolocationRoutingPolicy() {
      this._geolocationRoutingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get geolocationRoutingPolicyInput() {
      return this._geolocationRoutingPolicy
    }

    // latency_routing_policy - computed: false, optional: true, required: false
    private _latencyRoutingPolicy?: Route53RecordLatencyRoutingPolicy[] | undefined; 
    public get latencyRoutingPolicy() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('latency_routing_policy') as any;
    }
    public set latencyRoutingPolicy(value: Route53RecordLatencyRoutingPolicy[] | undefined) {
      this._latencyRoutingPolicy = value;
    }
    public resetLatencyRoutingPolicy() {
      this._latencyRoutingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get latencyRoutingPolicyInput() {
      return this._latencyRoutingPolicy
    }

    // weighted_routing_policy - computed: false, optional: true, required: false
    private _weightedRoutingPolicy?: Route53RecordWeightedRoutingPolicy[] | undefined; 
    public get weightedRoutingPolicy() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('weighted_routing_policy') as any;
    }
    public set weightedRoutingPolicy(value: Route53RecordWeightedRoutingPolicy[] | undefined) {
      this._weightedRoutingPolicy = value;
    }
    public resetWeightedRoutingPolicy() {
      this._weightedRoutingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weightedRoutingPolicyInput() {
      return this._weightedRoutingPolicy
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        allow_overwrite: cdktf.booleanToTerraform(this._allowOverwrite),
        health_check_id: cdktf.stringToTerraform(this._healthCheckId),
        multivalue_answer_routing_policy: cdktf.booleanToTerraform(this._multivalueAnswerRoutingPolicy),
        name: cdktf.stringToTerraform(this._name),
        records: cdktf.listMapper(cdktf.stringToTerraform)(this._records),
        set_identifier: cdktf.stringToTerraform(this._setIdentifier),
        ttl: cdktf.numberToTerraform(this._ttl),
        type: cdktf.stringToTerraform(this._type),
        zone_id: cdktf.stringToTerraform(this._zoneId),
        alias: cdktf.listMapper(route53RecordAliasToTerraform)(this._alias),
        failover_routing_policy: cdktf.listMapper(route53RecordFailoverRoutingPolicyToTerraform)(this._failoverRoutingPolicy),
        geolocation_routing_policy: cdktf.listMapper(route53RecordGeolocationRoutingPolicyToTerraform)(this._geolocationRoutingPolicy),
        latency_routing_policy: cdktf.listMapper(route53RecordLatencyRoutingPolicyToTerraform)(this._latencyRoutingPolicy),
        weighted_routing_policy: cdktf.listMapper(route53RecordWeightedRoutingPolicyToTerraform)(this._weightedRoutingPolicy),
      };
    }
  }
  export interface Route53ResolverDnssecConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_dnssec_config.html#resource_id Route53ResolverDnssecConfig#resource_id}
    */
    readonly resourceId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_dnssec_config.html aws_route53_resolver_dnssec_config}
  */
  export class Route53ResolverDnssecConfig extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_resolver_dnssec_config";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_dnssec_config.html aws_route53_resolver_dnssec_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverDnssecConfigConfig
    */
    public constructor(scope: Construct, id: string, config: Route53ResolverDnssecConfigConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_resolver_dnssec_config',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._resourceId = config.resourceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // resource_id - computed: false, optional: false, required: true
    private _resourceId?: string; 
    public get resourceId() {
      return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
      this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
      return this._resourceId
    }

    // validation_status - computed: true, optional: false, required: false
    public get validationStatus() {
      return this.getStringAttribute('validation_status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        resource_id: cdktf.stringToTerraform(this._resourceId),
      };
    }
  }
  export interface Route53ResolverEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#direction Route53ResolverEndpoint#direction}
    */
    readonly direction: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#name Route53ResolverEndpoint#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#security_group_ids Route53ResolverEndpoint#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#tags Route53ResolverEndpoint#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#tags_all Route53ResolverEndpoint#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * ip_address block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#ip_address Route53ResolverEndpoint#ip_address}
    */
    readonly ipAddress: Route53ResolverEndpointIpAddress[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#timeouts Route53ResolverEndpoint#timeouts}
    */
    readonly timeouts?: Route53ResolverEndpointTimeouts;
  }
  export interface Route53ResolverEndpointIpAddress {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#ip Route53ResolverEndpoint#ip}
    */
    readonly ip?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#subnet_id Route53ResolverEndpoint#subnet_id}
    */
    readonly subnetId: string;
  }

  function route53ResolverEndpointIpAddressToTerraform(struct?: Route53ResolverEndpointIpAddress): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      ip: cdktf.stringToTerraform(struct!.ip),
      subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    }
  }

  export interface Route53ResolverEndpointTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#create Route53ResolverEndpoint#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#delete Route53ResolverEndpoint#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#update Route53ResolverEndpoint#update}
    */
    readonly update?: string;
  }

  function route53ResolverEndpointTimeoutsToTerraform(struct?: Route53ResolverEndpointTimeoutsOutputReference | Route53ResolverEndpointTimeouts): any {
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

  export class Route53ResolverEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html aws_route53_resolver_endpoint}
  */
  export class Route53ResolverEndpoint extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_resolver_endpoint";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html aws_route53_resolver_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverEndpointConfig
    */
    public constructor(scope: Construct, id: string, config: Route53ResolverEndpointConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_resolver_endpoint',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._direction = config.direction;
      this._name = config.name;
      this._securityGroupIds = config.securityGroupIds;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._ipAddress = config.ipAddress;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // direction - computed: false, optional: false, required: true
    private _direction?: string; 
    public get direction() {
      return this.getStringAttribute('direction');
    }
    public set direction(value: string) {
      this._direction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get directionInput() {
      return this._direction
    }

    // host_vpc_id - computed: true, optional: false, required: false
    public get hostVpcId() {
      return this.getStringAttribute('host_vpc_id');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: true, required: false
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

    // security_group_ids - computed: false, optional: false, required: true
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
      this._securityGroupIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
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

    // ip_address - computed: false, optional: false, required: true
    private _ipAddress?: Route53ResolverEndpointIpAddress[]; 
    public get ipAddress() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ip_address') as any;
    }
    public set ipAddress(value: Route53ResolverEndpointIpAddress[]) {
      this._ipAddress = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressInput() {
      return this._ipAddress
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: Route53ResolverEndpointTimeouts | undefined; 
    private __timeoutsOutput = new Route53ResolverEndpointTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: Route53ResolverEndpointTimeouts | undefined) {
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
        direction: cdktf.stringToTerraform(this._direction),
        name: cdktf.stringToTerraform(this._name),
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        ip_address: cdktf.listMapper(route53ResolverEndpointIpAddressToTerraform)(this._ipAddress),
        timeouts: route53ResolverEndpointTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface Route53ResolverFirewallConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_config.html#firewall_fail_open Route53ResolverFirewallConfig#firewall_fail_open}
    */
    readonly firewallFailOpen?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_config.html#resource_id Route53ResolverFirewallConfig#resource_id}
    */
    readonly resourceId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_config.html aws_route53_resolver_firewall_config}
  */
  export class Route53ResolverFirewallConfig extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_resolver_firewall_config";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_config.html aws_route53_resolver_firewall_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverFirewallConfigConfig
    */
    public constructor(scope: Construct, id: string, config: Route53ResolverFirewallConfigConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_resolver_firewall_config',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._firewallFailOpen = config.firewallFailOpen;
      this._resourceId = config.resourceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // firewall_fail_open - computed: true, optional: true, required: false
    private _firewallFailOpen?: string | undefined; 
    public get firewallFailOpen() {
      return this.getStringAttribute('firewall_fail_open');
    }
    public set firewallFailOpen(value: string | undefined) {
      this._firewallFailOpen = value;
    }
    public resetFirewallFailOpen() {
      this._firewallFailOpen = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallFailOpenInput() {
      return this._firewallFailOpen
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // resource_id - computed: false, optional: false, required: true
    private _resourceId?: string; 
    public get resourceId() {
      return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
      this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
      return this._resourceId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        firewall_fail_open: cdktf.stringToTerraform(this._firewallFailOpen),
        resource_id: cdktf.stringToTerraform(this._resourceId),
      };
    }
  }
  export interface Route53ResolverFirewallDomainListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_domain_list.html#domains Route53ResolverFirewallDomainList#domains}
    */
    readonly domains?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_domain_list.html#name Route53ResolverFirewallDomainList#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_domain_list.html#tags Route53ResolverFirewallDomainList#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_domain_list.html#tags_all Route53ResolverFirewallDomainList#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_domain_list.html aws_route53_resolver_firewall_domain_list}
  */
  export class Route53ResolverFirewallDomainList extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_resolver_firewall_domain_list";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_domain_list.html aws_route53_resolver_firewall_domain_list} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverFirewallDomainListConfig
    */
    public constructor(scope: Construct, id: string, config: Route53ResolverFirewallDomainListConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_resolver_firewall_domain_list',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._domains = config.domains;
      this._name = config.name;
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

    // domains - computed: false, optional: true, required: false
    private _domains?: string[] | undefined; 
    public get domains() {
      return this.getListAttribute('domains');
    }
    public set domains(value: string[] | undefined) {
      this._domains = value;
    }
    public resetDomains() {
      this._domains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainsInput() {
      return this._domains
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
        domains: cdktf.listMapper(cdktf.stringToTerraform)(this._domains),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface Route53ResolverFirewallRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html#action Route53ResolverFirewallRule#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html#block_override_dns_type Route53ResolverFirewallRule#block_override_dns_type}
    */
    readonly blockOverrideDnsType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html#block_override_domain Route53ResolverFirewallRule#block_override_domain}
    */
    readonly blockOverrideDomain?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html#block_override_ttl Route53ResolverFirewallRule#block_override_ttl}
    */
    readonly blockOverrideTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html#block_response Route53ResolverFirewallRule#block_response}
    */
    readonly blockResponse?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html#firewall_domain_list_id Route53ResolverFirewallRule#firewall_domain_list_id}
    */
    readonly firewallDomainListId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html#firewall_rule_group_id Route53ResolverFirewallRule#firewall_rule_group_id}
    */
    readonly firewallRuleGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html#name Route53ResolverFirewallRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html#priority Route53ResolverFirewallRule#priority}
    */
    readonly priority: number;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html aws_route53_resolver_firewall_rule}
  */
  export class Route53ResolverFirewallRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_resolver_firewall_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html aws_route53_resolver_firewall_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverFirewallRuleConfig
    */
    public constructor(scope: Construct, id: string, config: Route53ResolverFirewallRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_resolver_firewall_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._action = config.action;
      this._blockOverrideDnsType = config.blockOverrideDnsType;
      this._blockOverrideDomain = config.blockOverrideDomain;
      this._blockOverrideTtl = config.blockOverrideTtl;
      this._blockResponse = config.blockResponse;
      this._firewallDomainListId = config.firewallDomainListId;
      this._firewallRuleGroupId = config.firewallRuleGroupId;
      this._name = config.name;
      this._priority = config.priority;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action - computed: false, optional: false, required: true
    private _action?: string; 
    public get action() {
      return this.getStringAttribute('action');
    }
    public set action(value: string) {
      this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
      return this._action
    }

    // block_override_dns_type - computed: false, optional: true, required: false
    private _blockOverrideDnsType?: string | undefined; 
    public get blockOverrideDnsType() {
      return this.getStringAttribute('block_override_dns_type');
    }
    public set blockOverrideDnsType(value: string | undefined) {
      this._blockOverrideDnsType = value;
    }
    public resetBlockOverrideDnsType() {
      this._blockOverrideDnsType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockOverrideDnsTypeInput() {
      return this._blockOverrideDnsType
    }

    // block_override_domain - computed: false, optional: true, required: false
    private _blockOverrideDomain?: string | undefined; 
    public get blockOverrideDomain() {
      return this.getStringAttribute('block_override_domain');
    }
    public set blockOverrideDomain(value: string | undefined) {
      this._blockOverrideDomain = value;
    }
    public resetBlockOverrideDomain() {
      this._blockOverrideDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockOverrideDomainInput() {
      return this._blockOverrideDomain
    }

    // block_override_ttl - computed: false, optional: true, required: false
    private _blockOverrideTtl?: number | undefined; 
    public get blockOverrideTtl() {
      return this.getNumberAttribute('block_override_ttl');
    }
    public set blockOverrideTtl(value: number | undefined) {
      this._blockOverrideTtl = value;
    }
    public resetBlockOverrideTtl() {
      this._blockOverrideTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockOverrideTtlInput() {
      return this._blockOverrideTtl
    }

    // block_response - computed: false, optional: true, required: false
    private _blockResponse?: string | undefined; 
    public get blockResponse() {
      return this.getStringAttribute('block_response');
    }
    public set blockResponse(value: string | undefined) {
      this._blockResponse = value;
    }
    public resetBlockResponse() {
      this._blockResponse = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockResponseInput() {
      return this._blockResponse
    }

    // firewall_domain_list_id - computed: false, optional: false, required: true
    private _firewallDomainListId?: string; 
    public get firewallDomainListId() {
      return this.getStringAttribute('firewall_domain_list_id');
    }
    public set firewallDomainListId(value: string) {
      this._firewallDomainListId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallDomainListIdInput() {
      return this._firewallDomainListId
    }

    // firewall_rule_group_id - computed: false, optional: false, required: true
    private _firewallRuleGroupId?: string; 
    public get firewallRuleGroupId() {
      return this.getStringAttribute('firewall_rule_group_id');
    }
    public set firewallRuleGroupId(value: string) {
      this._firewallRuleGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallRuleGroupIdInput() {
      return this._firewallRuleGroupId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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

    // priority - computed: false, optional: false, required: true
    private _priority?: number; 
    public get priority() {
      return this.getNumberAttribute('priority');
    }
    public set priority(value: number) {
      this._priority = value;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
      return this._priority
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        action: cdktf.stringToTerraform(this._action),
        block_override_dns_type: cdktf.stringToTerraform(this._blockOverrideDnsType),
        block_override_domain: cdktf.stringToTerraform(this._blockOverrideDomain),
        block_override_ttl: cdktf.numberToTerraform(this._blockOverrideTtl),
        block_response: cdktf.stringToTerraform(this._blockResponse),
        firewall_domain_list_id: cdktf.stringToTerraform(this._firewallDomainListId),
        firewall_rule_group_id: cdktf.stringToTerraform(this._firewallRuleGroupId),
        name: cdktf.stringToTerraform(this._name),
        priority: cdktf.numberToTerraform(this._priority),
      };
    }
  }
  export interface Route53ResolverFirewallRuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group.html#name Route53ResolverFirewallRuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group.html#tags Route53ResolverFirewallRuleGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group.html#tags_all Route53ResolverFirewallRuleGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group.html aws_route53_resolver_firewall_rule_group}
  */
  export class Route53ResolverFirewallRuleGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_resolver_firewall_rule_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group.html aws_route53_resolver_firewall_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverFirewallRuleGroupConfig
    */
    public constructor(scope: Construct, id: string, config: Route53ResolverFirewallRuleGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_resolver_firewall_rule_group',
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
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
      return this.getStringAttribute('id');
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

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // share_status - computed: true, optional: false, required: false
    public get shareStatus() {
      return this.getStringAttribute('share_status');
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
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface Route53ResolverFirewallRuleGroupAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#firewall_rule_group_id Route53ResolverFirewallRuleGroupAssociation#firewall_rule_group_id}
    */
    readonly firewallRuleGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#mutation_protection Route53ResolverFirewallRuleGroupAssociation#mutation_protection}
    */
    readonly mutationProtection?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#name Route53ResolverFirewallRuleGroupAssociation#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#priority Route53ResolverFirewallRuleGroupAssociation#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#tags Route53ResolverFirewallRuleGroupAssociation#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#tags_all Route53ResolverFirewallRuleGroupAssociation#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#vpc_id Route53ResolverFirewallRuleGroupAssociation#vpc_id}
    */
    readonly vpcId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html aws_route53_resolver_firewall_rule_group_association}
  */
  export class Route53ResolverFirewallRuleGroupAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_resolver_firewall_rule_group_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html aws_route53_resolver_firewall_rule_group_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverFirewallRuleGroupAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: Route53ResolverFirewallRuleGroupAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_resolver_firewall_rule_group_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._firewallRuleGroupId = config.firewallRuleGroupId;
      this._mutationProtection = config.mutationProtection;
      this._name = config.name;
      this._priority = config.priority;
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

    // firewall_rule_group_id - computed: false, optional: false, required: true
    private _firewallRuleGroupId?: string; 
    public get firewallRuleGroupId() {
      return this.getStringAttribute('firewall_rule_group_id');
    }
    public set firewallRuleGroupId(value: string) {
      this._firewallRuleGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallRuleGroupIdInput() {
      return this._firewallRuleGroupId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // mutation_protection - computed: true, optional: true, required: false
    private _mutationProtection?: string | undefined; 
    public get mutationProtection() {
      return this.getStringAttribute('mutation_protection');
    }
    public set mutationProtection(value: string | undefined) {
      this._mutationProtection = value;
    }
    public resetMutationProtection() {
      this._mutationProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mutationProtectionInput() {
      return this._mutationProtection
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

    // priority - computed: false, optional: false, required: true
    private _priority?: number; 
    public get priority() {
      return this.getNumberAttribute('priority');
    }
    public set priority(value: number) {
      this._priority = value;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
      return this._priority
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
        firewall_rule_group_id: cdktf.stringToTerraform(this._firewallRuleGroupId),
        mutation_protection: cdktf.stringToTerraform(this._mutationProtection),
        name: cdktf.stringToTerraform(this._name),
        priority: cdktf.numberToTerraform(this._priority),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
      };
    }
  }
  export interface Route53ResolverQueryLogConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config.html#destination_arn Route53ResolverQueryLogConfig#destination_arn}
    */
    readonly destinationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config.html#name Route53ResolverQueryLogConfig#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config.html#tags Route53ResolverQueryLogConfig#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config.html#tags_all Route53ResolverQueryLogConfig#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config.html aws_route53_resolver_query_log_config}
  */
  export class Route53ResolverQueryLogConfig extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_resolver_query_log_config";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config.html aws_route53_resolver_query_log_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverQueryLogConfigConfig
    */
    public constructor(scope: Construct, id: string, config: Route53ResolverQueryLogConfigConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_resolver_query_log_config',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._destinationArn = config.destinationArn;
      this._name = config.name;
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

    // destination_arn - computed: false, optional: false, required: true
    private _destinationArn?: string; 
    public get destinationArn() {
      return this.getStringAttribute('destination_arn');
    }
    public set destinationArn(value: string) {
      this._destinationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationArnInput() {
      return this._destinationArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // share_status - computed: true, optional: false, required: false
    public get shareStatus() {
      return this.getStringAttribute('share_status');
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
        destination_arn: cdktf.stringToTerraform(this._destinationArn),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface Route53ResolverQueryLogConfigAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config_association.html#resolver_query_log_config_id Route53ResolverQueryLogConfigAssociation#resolver_query_log_config_id}
    */
    readonly resolverQueryLogConfigId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config_association.html#resource_id Route53ResolverQueryLogConfigAssociation#resource_id}
    */
    readonly resourceId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config_association.html aws_route53_resolver_query_log_config_association}
  */
  export class Route53ResolverQueryLogConfigAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_resolver_query_log_config_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config_association.html aws_route53_resolver_query_log_config_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverQueryLogConfigAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: Route53ResolverQueryLogConfigAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_resolver_query_log_config_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._resolverQueryLogConfigId = config.resolverQueryLogConfigId;
      this._resourceId = config.resourceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // resolver_query_log_config_id - computed: false, optional: false, required: true
    private _resolverQueryLogConfigId?: string; 
    public get resolverQueryLogConfigId() {
      return this.getStringAttribute('resolver_query_log_config_id');
    }
    public set resolverQueryLogConfigId(value: string) {
      this._resolverQueryLogConfigId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resolverQueryLogConfigIdInput() {
      return this._resolverQueryLogConfigId
    }

    // resource_id - computed: false, optional: false, required: true
    private _resourceId?: string; 
    public get resourceId() {
      return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
      this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
      return this._resourceId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        resolver_query_log_config_id: cdktf.stringToTerraform(this._resolverQueryLogConfigId),
        resource_id: cdktf.stringToTerraform(this._resourceId),
      };
    }
  }
  export interface Route53ResolverRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#domain_name Route53ResolverRule#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#name Route53ResolverRule#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#resolver_endpoint_id Route53ResolverRule#resolver_endpoint_id}
    */
    readonly resolverEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#rule_type Route53ResolverRule#rule_type}
    */
    readonly ruleType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#tags Route53ResolverRule#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#tags_all Route53ResolverRule#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * target_ip block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#target_ip Route53ResolverRule#target_ip}
    */
    readonly targetIp?: Route53ResolverRuleTargetIp[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#timeouts Route53ResolverRule#timeouts}
    */
    readonly timeouts?: Route53ResolverRuleTimeouts;
  }
  export interface Route53ResolverRuleTargetIp {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#ip Route53ResolverRule#ip}
    */
    readonly ip: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#port Route53ResolverRule#port}
    */
    readonly port?: number;
  }

  function route53ResolverRuleTargetIpToTerraform(struct?: Route53ResolverRuleTargetIp): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      ip: cdktf.stringToTerraform(struct!.ip),
      port: cdktf.numberToTerraform(struct!.port),
    }
  }

  export interface Route53ResolverRuleTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#create Route53ResolverRule#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#delete Route53ResolverRule#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#update Route53ResolverRule#update}
    */
    readonly update?: string;
  }

  function route53ResolverRuleTimeoutsToTerraform(struct?: Route53ResolverRuleTimeoutsOutputReference | Route53ResolverRuleTimeouts): any {
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

  export class Route53ResolverRuleTimeoutsOutputReference extends cdktf.ComplexObject {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html aws_route53_resolver_rule}
  */
  export class Route53ResolverRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_resolver_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html aws_route53_resolver_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverRuleConfig
    */
    public constructor(scope: Construct, id: string, config: Route53ResolverRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_resolver_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._domainName = config.domainName;
      this._name = config.name;
      this._resolverEndpointId = config.resolverEndpointId;
      this._ruleType = config.ruleType;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._targetIp = config.targetIp;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // domain_name - computed: false, optional: false, required: true
    private _domainName?: string; 
    public get domainName() {
      return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
      this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
      return this._domainName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: true, required: false
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

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // resolver_endpoint_id - computed: false, optional: true, required: false
    private _resolverEndpointId?: string | undefined; 
    public get resolverEndpointId() {
      return this.getStringAttribute('resolver_endpoint_id');
    }
    public set resolverEndpointId(value: string | undefined) {
      this._resolverEndpointId = value;
    }
    public resetResolverEndpointId() {
      this._resolverEndpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resolverEndpointIdInput() {
      return this._resolverEndpointId
    }

    // rule_type - computed: false, optional: false, required: true
    private _ruleType?: string; 
    public get ruleType() {
      return this.getStringAttribute('rule_type');
    }
    public set ruleType(value: string) {
      this._ruleType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleTypeInput() {
      return this._ruleType
    }

    // share_status - computed: true, optional: false, required: false
    public get shareStatus() {
      return this.getStringAttribute('share_status');
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

    // target_ip - computed: false, optional: true, required: false
    private _targetIp?: Route53ResolverRuleTargetIp[] | undefined; 
    public get targetIp() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('target_ip') as any;
    }
    public set targetIp(value: Route53ResolverRuleTargetIp[] | undefined) {
      this._targetIp = value;
    }
    public resetTargetIp() {
      this._targetIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetIpInput() {
      return this._targetIp
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: Route53ResolverRuleTimeouts | undefined; 
    private __timeoutsOutput = new Route53ResolverRuleTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: Route53ResolverRuleTimeouts | undefined) {
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
        domain_name: cdktf.stringToTerraform(this._domainName),
        name: cdktf.stringToTerraform(this._name),
        resolver_endpoint_id: cdktf.stringToTerraform(this._resolverEndpointId),
        rule_type: cdktf.stringToTerraform(this._ruleType),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        target_ip: cdktf.listMapper(route53ResolverRuleTargetIpToTerraform)(this._targetIp),
        timeouts: route53ResolverRuleTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface Route53ResolverRuleAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html#name Route53ResolverRuleAssociation#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html#resolver_rule_id Route53ResolverRuleAssociation#resolver_rule_id}
    */
    readonly resolverRuleId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html#vpc_id Route53ResolverRuleAssociation#vpc_id}
    */
    readonly vpcId: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html#timeouts Route53ResolverRuleAssociation#timeouts}
    */
    readonly timeouts?: Route53ResolverRuleAssociationTimeouts;
  }
  export interface Route53ResolverRuleAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html#create Route53ResolverRuleAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html#delete Route53ResolverRuleAssociation#delete}
    */
    readonly delete?: string;
  }

  function route53ResolverRuleAssociationTimeoutsToTerraform(struct?: Route53ResolverRuleAssociationTimeoutsOutputReference | Route53ResolverRuleAssociationTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class Route53ResolverRuleAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html aws_route53_resolver_rule_association}
  */
  export class Route53ResolverRuleAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_resolver_rule_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html aws_route53_resolver_rule_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverRuleAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: Route53ResolverRuleAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_resolver_rule_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._resolverRuleId = config.resolverRuleId;
      this._vpcId = config.vpcId;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: true, required: false
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

    // resolver_rule_id - computed: false, optional: false, required: true
    private _resolverRuleId?: string; 
    public get resolverRuleId() {
      return this.getStringAttribute('resolver_rule_id');
    }
    public set resolverRuleId(value: string) {
      this._resolverRuleId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resolverRuleIdInput() {
      return this._resolverRuleId
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
    private _timeouts?: Route53ResolverRuleAssociationTimeouts | undefined; 
    private __timeoutsOutput = new Route53ResolverRuleAssociationTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: Route53ResolverRuleAssociationTimeouts | undefined) {
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
        name: cdktf.stringToTerraform(this._name),
        resolver_rule_id: cdktf.stringToTerraform(this._resolverRuleId),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        timeouts: route53ResolverRuleAssociationTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface Route53VpcAssociationAuthorizationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization.html#vpc_id Route53VpcAssociationAuthorization#vpc_id}
    */
    readonly vpcId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization.html#vpc_region Route53VpcAssociationAuthorization#vpc_region}
    */
    readonly vpcRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization.html#zone_id Route53VpcAssociationAuthorization#zone_id}
    */
    readonly zoneId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization.html aws_route53_vpc_association_authorization}
  */
  export class Route53VpcAssociationAuthorization extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_vpc_association_authorization";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization.html aws_route53_vpc_association_authorization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53VpcAssociationAuthorizationConfig
    */
    public constructor(scope: Construct, id: string, config: Route53VpcAssociationAuthorizationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_vpc_association_authorization',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._vpcId = config.vpcId;
      this._vpcRegion = config.vpcRegion;
      this._zoneId = config.zoneId;
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

    // vpc_region - computed: true, optional: true, required: false
    private _vpcRegion?: string | undefined; 
    public get vpcRegion() {
      return this.getStringAttribute('vpc_region');
    }
    public set vpcRegion(value: string | undefined) {
      this._vpcRegion = value;
    }
    public resetVpcRegion() {
      this._vpcRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcRegionInput() {
      return this._vpcRegion
    }

    // zone_id - computed: false, optional: false, required: true
    private _zoneId?: string; 
    public get zoneId() {
      return this.getStringAttribute('zone_id');
    }
    public set zoneId(value: string) {
      this._zoneId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get zoneIdInput() {
      return this._zoneId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        vpc_region: cdktf.stringToTerraform(this._vpcRegion),
        zone_id: cdktf.stringToTerraform(this._zoneId),
      };
    }
  }
  export interface Route53ZoneConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#comment Route53Zone#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#delegation_set_id Route53Zone#delegation_set_id}
    */
    readonly delegationSetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#force_destroy Route53Zone#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#name Route53Zone#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#tags Route53Zone#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#tags_all Route53Zone#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * vpc block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#vpc Route53Zone#vpc}
    */
    readonly vpc?: Route53ZoneVpc[];
  }
  export interface Route53ZoneVpc {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#vpc_id Route53Zone#vpc_id}
    */
    readonly vpcId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#vpc_region Route53Zone#vpc_region}
    */
    readonly vpcRegion?: string;
  }

  function route53ZoneVpcToTerraform(struct?: Route53ZoneVpc): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      vpc_id: cdktf.stringToTerraform(struct!.vpcId),
      vpc_region: cdktf.stringToTerraform(struct!.vpcRegion),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html aws_route53_zone}
  */
  export class Route53Zone extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_zone";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html aws_route53_zone} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ZoneConfig
    */
    public constructor(scope: Construct, id: string, config: Route53ZoneConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_zone',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._comment = config.comment;
      this._delegationSetId = config.delegationSetId;
      this._forceDestroy = config.forceDestroy;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpc = config.vpc;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // comment - computed: false, optional: true, required: false
    private _comment?: string | undefined; 
    public get comment() {
      return this.getStringAttribute('comment');
    }
    public set comment(value: string | undefined) {
      this._comment = value;
    }
    public resetComment() {
      this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
      return this._comment
    }

    // delegation_set_id - computed: false, optional: true, required: false
    private _delegationSetId?: string | undefined; 
    public get delegationSetId() {
      return this.getStringAttribute('delegation_set_id');
    }
    public set delegationSetId(value: string | undefined) {
      this._delegationSetId = value;
    }
    public resetDelegationSetId() {
      this._delegationSetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get delegationSetIdInput() {
      return this._delegationSetId
    }

    // force_destroy - computed: false, optional: true, required: false
    private _forceDestroy?: boolean | cdktf.IResolvable | undefined; 
    public get forceDestroy() {
      return this.getBooleanAttribute('force_destroy') as any;
    }
    public set forceDestroy(value: boolean | cdktf.IResolvable | undefined) {
      this._forceDestroy = value;
    }
    public resetForceDestroy() {
      this._forceDestroy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceDestroyInput() {
      return this._forceDestroy
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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

    // name_servers - computed: true, optional: false, required: false
    public get nameServers() {
      return this.getListAttribute('name_servers');
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

    // vpc - computed: false, optional: true, required: false
    private _vpc?: Route53ZoneVpc[] | undefined; 
    public get vpc() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('vpc') as any;
    }
    public set vpc(value: Route53ZoneVpc[] | undefined) {
      this._vpc = value;
    }
    public resetVpc() {
      this._vpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcInput() {
      return this._vpc
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        comment: cdktf.stringToTerraform(this._comment),
        delegation_set_id: cdktf.stringToTerraform(this._delegationSetId),
        force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc: cdktf.listMapper(route53ZoneVpcToTerraform)(this._vpc),
      };
    }
  }
  export interface Route53ZoneAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone_association.html#vpc_id Route53ZoneAssociation#vpc_id}
    */
    readonly vpcId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone_association.html#vpc_region Route53ZoneAssociation#vpc_region}
    */
    readonly vpcRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone_association.html#zone_id Route53ZoneAssociation#zone_id}
    */
    readonly zoneId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_zone_association.html aws_route53_zone_association}
  */
  export class Route53ZoneAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_zone_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_zone_association.html aws_route53_zone_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ZoneAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: Route53ZoneAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_zone_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._vpcId = config.vpcId;
      this._vpcRegion = config.vpcRegion;
      this._zoneId = config.zoneId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // owning_account - computed: true, optional: false, required: false
    public get owningAccount() {
      return this.getStringAttribute('owning_account');
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

    // vpc_region - computed: true, optional: true, required: false
    private _vpcRegion?: string | undefined; 
    public get vpcRegion() {
      return this.getStringAttribute('vpc_region');
    }
    public set vpcRegion(value: string | undefined) {
      this._vpcRegion = value;
    }
    public resetVpcRegion() {
      this._vpcRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcRegionInput() {
      return this._vpcRegion
    }

    // zone_id - computed: false, optional: false, required: true
    private _zoneId?: string; 
    public get zoneId() {
      return this.getStringAttribute('zone_id');
    }
    public set zoneId(value: string) {
      this._zoneId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get zoneIdInput() {
      return this._zoneId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        vpc_region: cdktf.stringToTerraform(this._vpcRegion),
        zone_id: cdktf.stringToTerraform(this._zoneId),
      };
    }
  }
  export interface Route53RecoverycontrolconfigClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_cluster.html#name Route53RecoverycontrolconfigCluster#name}
    */
    readonly name: string;
  }
  export class Route53RecoverycontrolconfigClusterClusterEndpoints extends cdktf.ComplexComputedList {

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }

    // region - computed: true, optional: false, required: false
    public get region() {
      return this.getStringAttribute('region');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_cluster.html aws_route53recoverycontrolconfig_cluster}
  */
  export class Route53RecoverycontrolconfigCluster extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53recoverycontrolconfig_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_cluster.html aws_route53recoverycontrolconfig_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoverycontrolconfigClusterConfig
    */
    public constructor(scope: Construct, id: string, config: Route53RecoverycontrolconfigClusterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53recoverycontrolconfig_cluster',
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

    // cluster_endpoints - computed: true, optional: false, required: false
    public clusterEndpoints(index: string) {
      return new Route53RecoverycontrolconfigClusterClusterEndpoints(this, 'cluster_endpoints', index);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
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
  export interface Route53RecoverycontrolconfigControlPanelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel.html#cluster_arn Route53RecoverycontrolconfigControlPanel#cluster_arn}
    */
    readonly clusterArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel.html#name Route53RecoverycontrolconfigControlPanel#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel.html aws_route53recoverycontrolconfig_control_panel}
  */
  export class Route53RecoverycontrolconfigControlPanel extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53recoverycontrolconfig_control_panel";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel.html aws_route53recoverycontrolconfig_control_panel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoverycontrolconfigControlPanelConfig
    */
    public constructor(scope: Construct, id: string, config: Route53RecoverycontrolconfigControlPanelConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53recoverycontrolconfig_control_panel',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterArn = config.clusterArn;
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cluster_arn - computed: false, optional: false, required: true
    private _clusterArn?: string; 
    public get clusterArn() {
      return this.getStringAttribute('cluster_arn');
    }
    public set clusterArn(value: string) {
      this._clusterArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterArnInput() {
      return this._clusterArn
    }

    // default_control_panel - computed: true, optional: false, required: false
    public get defaultControlPanel() {
      return this.getBooleanAttribute('default_control_panel') as any;
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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

    // routing_control_count - computed: true, optional: false, required: false
    public get routingControlCount() {
      return this.getNumberAttribute('routing_control_count');
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
        cluster_arn: cdktf.stringToTerraform(this._clusterArn),
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface Route53RecoverycontrolconfigRoutingControlConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_routing_control.html#cluster_arn Route53RecoverycontrolconfigRoutingControl#cluster_arn}
    */
    readonly clusterArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_routing_control.html#control_panel_arn Route53RecoverycontrolconfigRoutingControl#control_panel_arn}
    */
    readonly controlPanelArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_routing_control.html#name Route53RecoverycontrolconfigRoutingControl#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_routing_control.html aws_route53recoverycontrolconfig_routing_control}
  */
  export class Route53RecoverycontrolconfigRoutingControl extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53recoverycontrolconfig_routing_control";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_routing_control.html aws_route53recoverycontrolconfig_routing_control} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoverycontrolconfigRoutingControlConfig
    */
    public constructor(scope: Construct, id: string, config: Route53RecoverycontrolconfigRoutingControlConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53recoverycontrolconfig_routing_control',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterArn = config.clusterArn;
      this._controlPanelArn = config.controlPanelArn;
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cluster_arn - computed: false, optional: false, required: true
    private _clusterArn?: string; 
    public get clusterArn() {
      return this.getStringAttribute('cluster_arn');
    }
    public set clusterArn(value: string) {
      this._clusterArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterArnInput() {
      return this._clusterArn
    }

    // control_panel_arn - computed: true, optional: true, required: false
    private _controlPanelArn?: string | undefined; 
    public get controlPanelArn() {
      return this.getStringAttribute('control_panel_arn');
    }
    public set controlPanelArn(value: string | undefined) {
      this._controlPanelArn = value;
    }
    public resetControlPanelArn() {
      this._controlPanelArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get controlPanelArnInput() {
      return this._controlPanelArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_arn: cdktf.stringToTerraform(this._clusterArn),
        control_panel_arn: cdktf.stringToTerraform(this._controlPanelArn),
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface Route53RecoverycontrolconfigSafetyRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#asserted_controls Route53RecoverycontrolconfigSafetyRule#asserted_controls}
    */
    readonly assertedControls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#control_panel_arn Route53RecoverycontrolconfigSafetyRule#control_panel_arn}
    */
    readonly controlPanelArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#gating_controls Route53RecoverycontrolconfigSafetyRule#gating_controls}
    */
    readonly gatingControls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#name Route53RecoverycontrolconfigSafetyRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#target_controls Route53RecoverycontrolconfigSafetyRule#target_controls}
    */
    readonly targetControls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#wait_period_ms Route53RecoverycontrolconfigSafetyRule#wait_period_ms}
    */
    readonly waitPeriodMs: number;
    /**
    * rule_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#rule_config Route53RecoverycontrolconfigSafetyRule#rule_config}
    */
    readonly ruleConfig: Route53RecoverycontrolconfigSafetyRuleRuleConfig;
  }
  export interface Route53RecoverycontrolconfigSafetyRuleRuleConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#inverted Route53RecoverycontrolconfigSafetyRule#inverted}
    */
    readonly inverted: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#threshold Route53RecoverycontrolconfigSafetyRule#threshold}
    */
    readonly threshold: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#type Route53RecoverycontrolconfigSafetyRule#type}
    */
    readonly type: string;
  }

  function route53RecoverycontrolconfigSafetyRuleRuleConfigToTerraform(struct?: Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference | Route53RecoverycontrolconfigSafetyRuleRuleConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      inverted: cdktf.booleanToTerraform(struct!.inverted),
      threshold: cdktf.numberToTerraform(struct!.threshold),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // inverted - computed: false, optional: false, required: true
    private _inverted?: boolean | cdktf.IResolvable; 
    public get inverted() {
      return this.getBooleanAttribute('inverted') as any;
    }
    public set inverted(value: boolean | cdktf.IResolvable) {
      this._inverted = value;
    }
    // Temporarily expose input value. Use with caution.
    public get invertedInput() {
      return this._inverted
    }

    // threshold - computed: false, optional: false, required: true
    private _threshold?: number; 
    public get threshold() {
      return this.getNumberAttribute('threshold');
    }
    public set threshold(value: number) {
      this._threshold = value;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdInput() {
      return this._threshold
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
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html aws_route53recoverycontrolconfig_safety_rule}
  */
  export class Route53RecoverycontrolconfigSafetyRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53recoverycontrolconfig_safety_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html aws_route53recoverycontrolconfig_safety_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoverycontrolconfigSafetyRuleConfig
    */
    public constructor(scope: Construct, id: string, config: Route53RecoverycontrolconfigSafetyRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53recoverycontrolconfig_safety_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._assertedControls = config.assertedControls;
      this._controlPanelArn = config.controlPanelArn;
      this._gatingControls = config.gatingControls;
      this._name = config.name;
      this._targetControls = config.targetControls;
      this._waitPeriodMs = config.waitPeriodMs;
      this._ruleConfig = config.ruleConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // asserted_controls - computed: false, optional: true, required: false
    private _assertedControls?: string[] | undefined; 
    public get assertedControls() {
      return this.getListAttribute('asserted_controls');
    }
    public set assertedControls(value: string[] | undefined) {
      this._assertedControls = value;
    }
    public resetAssertedControls() {
      this._assertedControls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assertedControlsInput() {
      return this._assertedControls
    }

    // control_panel_arn - computed: false, optional: false, required: true
    private _controlPanelArn?: string; 
    public get controlPanelArn() {
      return this.getStringAttribute('control_panel_arn');
    }
    public set controlPanelArn(value: string) {
      this._controlPanelArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get controlPanelArnInput() {
      return this._controlPanelArn
    }

    // gating_controls - computed: false, optional: true, required: false
    private _gatingControls?: string[] | undefined; 
    public get gatingControls() {
      return this.getListAttribute('gating_controls');
    }
    public set gatingControls(value: string[] | undefined) {
      this._gatingControls = value;
    }
    public resetGatingControls() {
      this._gatingControls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gatingControlsInput() {
      return this._gatingControls
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // target_controls - computed: false, optional: true, required: false
    private _targetControls?: string[] | undefined; 
    public get targetControls() {
      return this.getListAttribute('target_controls');
    }
    public set targetControls(value: string[] | undefined) {
      this._targetControls = value;
    }
    public resetTargetControls() {
      this._targetControls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetControlsInput() {
      return this._targetControls
    }

    // wait_period_ms - computed: false, optional: false, required: true
    private _waitPeriodMs?: number; 
    public get waitPeriodMs() {
      return this.getNumberAttribute('wait_period_ms');
    }
    public set waitPeriodMs(value: number) {
      this._waitPeriodMs = value;
    }
    // Temporarily expose input value. Use with caution.
    public get waitPeriodMsInput() {
      return this._waitPeriodMs
    }

    // rule_config - computed: false, optional: false, required: true
    private _ruleConfig?: Route53RecoverycontrolconfigSafetyRuleRuleConfig; 
    private __ruleConfigOutput = new Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference(this as any, "rule_config", true);
    public get ruleConfig() {
      return this.__ruleConfigOutput;
    }
    public putRuleConfig(value: Route53RecoverycontrolconfigSafetyRuleRuleConfig) {
      this._ruleConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleConfigInput() {
      return this._ruleConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        asserted_controls: cdktf.listMapper(cdktf.stringToTerraform)(this._assertedControls),
        control_panel_arn: cdktf.stringToTerraform(this._controlPanelArn),
        gating_controls: cdktf.listMapper(cdktf.stringToTerraform)(this._gatingControls),
        name: cdktf.stringToTerraform(this._name),
        target_controls: cdktf.listMapper(cdktf.stringToTerraform)(this._targetControls),
        wait_period_ms: cdktf.numberToTerraform(this._waitPeriodMs),
        rule_config: route53RecoverycontrolconfigSafetyRuleRuleConfigToTerraform(this._ruleConfig),
      };
    }
  }
  export interface Route53RecoveryreadinessCellConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html#cell_name Route53RecoveryreadinessCell#cell_name}
    */
    readonly cellName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html#cells Route53RecoveryreadinessCell#cells}
    */
    readonly cells?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html#tags Route53RecoveryreadinessCell#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html#tags_all Route53RecoveryreadinessCell#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html#timeouts Route53RecoveryreadinessCell#timeouts}
    */
    readonly timeouts?: Route53RecoveryreadinessCellTimeouts;
  }
  export interface Route53RecoveryreadinessCellTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html#delete Route53RecoveryreadinessCell#delete}
    */
    readonly delete?: string;
  }

  function route53RecoveryreadinessCellTimeoutsToTerraform(struct?: Route53RecoveryreadinessCellTimeoutsOutputReference | Route53RecoveryreadinessCellTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class Route53RecoveryreadinessCellTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html aws_route53recoveryreadiness_cell}
  */
  export class Route53RecoveryreadinessCell extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53recoveryreadiness_cell";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html aws_route53recoveryreadiness_cell} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoveryreadinessCellConfig
    */
    public constructor(scope: Construct, id: string, config: Route53RecoveryreadinessCellConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53recoveryreadiness_cell',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._cellName = config.cellName;
      this._cells = config.cells;
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

    // cell_name - computed: false, optional: false, required: true
    private _cellName?: string; 
    public get cellName() {
      return this.getStringAttribute('cell_name');
    }
    public set cellName(value: string) {
      this._cellName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cellNameInput() {
      return this._cellName
    }

    // cells - computed: false, optional: true, required: false
    private _cells?: string[] | undefined; 
    public get cells() {
      return this.getListAttribute('cells');
    }
    public set cells(value: string[] | undefined) {
      this._cells = value;
    }
    public resetCells() {
      this._cells = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cellsInput() {
      return this._cells
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // parent_readiness_scopes - computed: true, optional: false, required: false
    public get parentReadinessScopes() {
      return this.getListAttribute('parent_readiness_scopes');
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

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: Route53RecoveryreadinessCellTimeouts | undefined; 
    private __timeoutsOutput = new Route53RecoveryreadinessCellTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: Route53RecoveryreadinessCellTimeouts | undefined) {
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
        cell_name: cdktf.stringToTerraform(this._cellName),
        cells: cdktf.listMapper(cdktf.stringToTerraform)(this._cells),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: route53RecoveryreadinessCellTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface Route53RecoveryreadinessReadinessCheckConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check.html#readiness_check_name Route53RecoveryreadinessReadinessCheck#readiness_check_name}
    */
    readonly readinessCheckName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check.html#resource_set_name Route53RecoveryreadinessReadinessCheck#resource_set_name}
    */
    readonly resourceSetName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check.html#tags Route53RecoveryreadinessReadinessCheck#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check.html#tags_all Route53RecoveryreadinessReadinessCheck#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check.html#timeouts Route53RecoveryreadinessReadinessCheck#timeouts}
    */
    readonly timeouts?: Route53RecoveryreadinessReadinessCheckTimeouts;
  }
  export interface Route53RecoveryreadinessReadinessCheckTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check.html#delete Route53RecoveryreadinessReadinessCheck#delete}
    */
    readonly delete?: string;
  }

  function route53RecoveryreadinessReadinessCheckTimeoutsToTerraform(struct?: Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference | Route53RecoveryreadinessReadinessCheckTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check.html aws_route53recoveryreadiness_readiness_check}
  */
  export class Route53RecoveryreadinessReadinessCheck extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53recoveryreadiness_readiness_check";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check.html aws_route53recoveryreadiness_readiness_check} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoveryreadinessReadinessCheckConfig
    */
    public constructor(scope: Construct, id: string, config: Route53RecoveryreadinessReadinessCheckConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53recoveryreadiness_readiness_check',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._readinessCheckName = config.readinessCheckName;
      this._resourceSetName = config.resourceSetName;
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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // readiness_check_name - computed: false, optional: false, required: true
    private _readinessCheckName?: string; 
    public get readinessCheckName() {
      return this.getStringAttribute('readiness_check_name');
    }
    public set readinessCheckName(value: string) {
      this._readinessCheckName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get readinessCheckNameInput() {
      return this._readinessCheckName
    }

    // resource_set_name - computed: false, optional: false, required: true
    private _resourceSetName?: string; 
    public get resourceSetName() {
      return this.getStringAttribute('resource_set_name');
    }
    public set resourceSetName(value: string) {
      this._resourceSetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceSetNameInput() {
      return this._resourceSetName
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

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: Route53RecoveryreadinessReadinessCheckTimeouts | undefined; 
    private __timeoutsOutput = new Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: Route53RecoveryreadinessReadinessCheckTimeouts | undefined) {
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
        readiness_check_name: cdktf.stringToTerraform(this._readinessCheckName),
        resource_set_name: cdktf.stringToTerraform(this._resourceSetName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: route53RecoveryreadinessReadinessCheckTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface Route53RecoveryreadinessRecoveryGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html#cells Route53RecoveryreadinessRecoveryGroup#cells}
    */
    readonly cells?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html#recovery_group_name Route53RecoveryreadinessRecoveryGroup#recovery_group_name}
    */
    readonly recoveryGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html#tags Route53RecoveryreadinessRecoveryGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html#tags_all Route53RecoveryreadinessRecoveryGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html#timeouts Route53RecoveryreadinessRecoveryGroup#timeouts}
    */
    readonly timeouts?: Route53RecoveryreadinessRecoveryGroupTimeouts;
  }
  export interface Route53RecoveryreadinessRecoveryGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html#delete Route53RecoveryreadinessRecoveryGroup#delete}
    */
    readonly delete?: string;
  }

  function route53RecoveryreadinessRecoveryGroupTimeoutsToTerraform(struct?: Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference | Route53RecoveryreadinessRecoveryGroupTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html aws_route53recoveryreadiness_recovery_group}
  */
  export class Route53RecoveryreadinessRecoveryGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53recoveryreadiness_recovery_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html aws_route53recoveryreadiness_recovery_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoveryreadinessRecoveryGroupConfig
    */
    public constructor(scope: Construct, id: string, config: Route53RecoveryreadinessRecoveryGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53recoveryreadiness_recovery_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._cells = config.cells;
      this._recoveryGroupName = config.recoveryGroupName;
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

    // cells - computed: false, optional: true, required: false
    private _cells?: string[] | undefined; 
    public get cells() {
      return this.getListAttribute('cells');
    }
    public set cells(value: string[] | undefined) {
      this._cells = value;
    }
    public resetCells() {
      this._cells = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cellsInput() {
      return this._cells
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // recovery_group_name - computed: false, optional: false, required: true
    private _recoveryGroupName?: string; 
    public get recoveryGroupName() {
      return this.getStringAttribute('recovery_group_name');
    }
    public set recoveryGroupName(value: string) {
      this._recoveryGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recoveryGroupNameInput() {
      return this._recoveryGroupName
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

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: Route53RecoveryreadinessRecoveryGroupTimeouts | undefined; 
    private __timeoutsOutput = new Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: Route53RecoveryreadinessRecoveryGroupTimeouts | undefined) {
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
        cells: cdktf.listMapper(cdktf.stringToTerraform)(this._cells),
        recovery_group_name: cdktf.stringToTerraform(this._recoveryGroupName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: route53RecoveryreadinessRecoveryGroupTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface Route53RecoveryreadinessResourceSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#resource_set_name Route53RecoveryreadinessResourceSet#resource_set_name}
    */
    readonly resourceSetName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#resource_set_type Route53RecoveryreadinessResourceSet#resource_set_type}
    */
    readonly resourceSetType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#tags Route53RecoveryreadinessResourceSet#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#tags_all Route53RecoveryreadinessResourceSet#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * resources block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#resources Route53RecoveryreadinessResourceSet#resources}
    */
    readonly resources: Route53RecoveryreadinessResourceSetResources[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#timeouts Route53RecoveryreadinessResourceSet#timeouts}
    */
    readonly timeouts?: Route53RecoveryreadinessResourceSetTimeouts;
  }
  export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#arn Route53RecoveryreadinessResourceSet#arn}
    */
    readonly arn?: string;
  }

  function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference | Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      arn: cdktf.stringToTerraform(struct!.arn),
    }
  }

  export class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // arn - computed: false, optional: true, required: false
    private _arn?: string | undefined; 
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string | undefined) {
      this._arn = value;
    }
    public resetArn() {
      this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }
  }
  export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#domain_name Route53RecoveryreadinessResourceSet#domain_name}
    */
    readonly domainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}
    */
    readonly recordSetId?: string;
  }

  function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference | Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      domain_name: cdktf.stringToTerraform(struct!.domainName),
      record_set_id: cdktf.stringToTerraform(struct!.recordSetId),
    }
  }

  export class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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

    // record_set_id - computed: false, optional: true, required: false
    private _recordSetId?: string | undefined; 
    public get recordSetId() {
      return this.getStringAttribute('record_set_id');
    }
    public set recordSetId(value: string | undefined) {
      this._recordSetId = value;
    }
    public resetRecordSetId() {
      this._recordSetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordSetIdInput() {
      return this._recordSetId
    }
  }
  export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource {
    /**
    * nlb_resource block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#nlb_resource Route53RecoveryreadinessResourceSet#nlb_resource}
    */
    readonly nlbResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource;
    /**
    * r53_resource block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#r53_resource Route53RecoveryreadinessResourceSet#r53_resource}
    */
    readonly r53Resource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource;
  }

  function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference | Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      nlb_resource: route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform(struct!.nlbResource),
      r53_resource: route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform(struct!.r53Resource),
    }
  }

  export class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // nlb_resource - computed: false, optional: true, required: false
    private _nlbResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource | undefined; 
    private __nlbResourceOutput = new Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference(this as any, "nlb_resource", true);
    public get nlbResource() {
      return this.__nlbResourceOutput;
    }
    public putNlbResource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource | undefined) {
      this._nlbResource = value;
    }
    public resetNlbResource() {
      this._nlbResource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nlbResourceInput() {
      return this._nlbResource
    }

    // r53_resource - computed: false, optional: true, required: false
    private _r53Resource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource | undefined; 
    private __r53ResourceOutput = new Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference(this as any, "r53_resource", true);
    public get r53Resource() {
      return this.__r53ResourceOutput;
    }
    public putR53Resource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource | undefined) {
      this._r53Resource = value;
    }
    public resetR53Resource() {
      this._r53Resource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get r53ResourceInput() {
      return this._r53Resource
    }
  }
  export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#domain_name Route53RecoveryreadinessResourceSet#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#hosted_zone_arn Route53RecoveryreadinessResourceSet#hosted_zone_arn}
    */
    readonly hostedZoneArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}
    */
    readonly recordSetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#record_type Route53RecoveryreadinessResourceSet#record_type}
    */
    readonly recordType?: string;
    /**
    * target_resource block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#target_resource Route53RecoveryreadinessResourceSet#target_resource}
    */
    readonly targetResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource;
  }

  function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference | Route53RecoveryreadinessResourceSetResourcesDnsTargetResource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      domain_name: cdktf.stringToTerraform(struct!.domainName),
      hosted_zone_arn: cdktf.stringToTerraform(struct!.hostedZoneArn),
      record_set_id: cdktf.stringToTerraform(struct!.recordSetId),
      record_type: cdktf.stringToTerraform(struct!.recordType),
      target_resource: route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform(struct!.targetResource),
    }
  }

  export class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // domain_name - computed: false, optional: false, required: true
    private _domainName?: string; 
    public get domainName() {
      return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
      this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
      return this._domainName
    }

    // hosted_zone_arn - computed: false, optional: true, required: false
    private _hostedZoneArn?: string | undefined; 
    public get hostedZoneArn() {
      return this.getStringAttribute('hosted_zone_arn');
    }
    public set hostedZoneArn(value: string | undefined) {
      this._hostedZoneArn = value;
    }
    public resetHostedZoneArn() {
      this._hostedZoneArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostedZoneArnInput() {
      return this._hostedZoneArn
    }

    // record_set_id - computed: false, optional: true, required: false
    private _recordSetId?: string | undefined; 
    public get recordSetId() {
      return this.getStringAttribute('record_set_id');
    }
    public set recordSetId(value: string | undefined) {
      this._recordSetId = value;
    }
    public resetRecordSetId() {
      this._recordSetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordSetIdInput() {
      return this._recordSetId
    }

    // record_type - computed: false, optional: true, required: false
    private _recordType?: string | undefined; 
    public get recordType() {
      return this.getStringAttribute('record_type');
    }
    public set recordType(value: string | undefined) {
      this._recordType = value;
    }
    public resetRecordType() {
      this._recordType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordTypeInput() {
      return this._recordType
    }

    // target_resource - computed: false, optional: true, required: false
    private _targetResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource | undefined; 
    private __targetResourceOutput = new Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference(this as any, "target_resource", true);
    public get targetResource() {
      return this.__targetResourceOutput;
    }
    public putTargetResource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource | undefined) {
      this._targetResource = value;
    }
    public resetTargetResource() {
      this._targetResource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetResourceInput() {
      return this._targetResource
    }
  }
  export interface Route53RecoveryreadinessResourceSetResources {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#readiness_scopes Route53RecoveryreadinessResourceSet#readiness_scopes}
    */
    readonly readinessScopes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#resource_arn Route53RecoveryreadinessResourceSet#resource_arn}
    */
    readonly resourceArn?: string;
    /**
    * dns_target_resource block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#dns_target_resource Route53RecoveryreadinessResourceSet#dns_target_resource}
    */
    readonly dnsTargetResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource;
  }

  function route53RecoveryreadinessResourceSetResourcesToTerraform(struct?: Route53RecoveryreadinessResourceSetResources): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      readiness_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.readinessScopes),
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
      dns_target_resource: route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform(struct!.dnsTargetResource),
    }
  }

  export interface Route53RecoveryreadinessResourceSetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#delete Route53RecoveryreadinessResourceSet#delete}
    */
    readonly delete?: string;
  }

  function route53RecoveryreadinessResourceSetTimeoutsToTerraform(struct?: Route53RecoveryreadinessResourceSetTimeoutsOutputReference | Route53RecoveryreadinessResourceSetTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class Route53RecoveryreadinessResourceSetTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html aws_route53recoveryreadiness_resource_set}
  */
  export class Route53RecoveryreadinessResourceSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53recoveryreadiness_resource_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html aws_route53recoveryreadiness_resource_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoveryreadinessResourceSetConfig
    */
    public constructor(scope: Construct, id: string, config: Route53RecoveryreadinessResourceSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53recoveryreadiness_resource_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._resourceSetName = config.resourceSetName;
      this._resourceSetType = config.resourceSetType;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._resources = config.resources;
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

    // resource_set_name - computed: false, optional: false, required: true
    private _resourceSetName?: string; 
    public get resourceSetName() {
      return this.getStringAttribute('resource_set_name');
    }
    public set resourceSetName(value: string) {
      this._resourceSetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceSetNameInput() {
      return this._resourceSetName
    }

    // resource_set_type - computed: false, optional: false, required: true
    private _resourceSetType?: string; 
    public get resourceSetType() {
      return this.getStringAttribute('resource_set_type');
    }
    public set resourceSetType(value: string) {
      this._resourceSetType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceSetTypeInput() {
      return this._resourceSetType
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

    // resources - computed: false, optional: false, required: true
    private _resources?: Route53RecoveryreadinessResourceSetResources[]; 
    public get resources() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('resources') as any;
    }
    public set resources(value: Route53RecoveryreadinessResourceSetResources[]) {
      this._resources = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesInput() {
      return this._resources
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: Route53RecoveryreadinessResourceSetTimeouts | undefined; 
    private __timeoutsOutput = new Route53RecoveryreadinessResourceSetTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: Route53RecoveryreadinessResourceSetTimeouts | undefined) {
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
        resource_set_name: cdktf.stringToTerraform(this._resourceSetName),
        resource_set_type: cdktf.stringToTerraform(this._resourceSetType),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        resources: cdktf.listMapper(route53RecoveryreadinessResourceSetResourcesToTerraform)(this._resources),
        timeouts: route53RecoveryreadinessResourceSetTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DataAwsRoute53DelegationSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_delegation_set.html#id DataAwsRoute53DelegationSet#id}
    */
    readonly id: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_delegation_set.html aws_route53_delegation_set}
  */
  export class DataAwsRoute53DelegationSet extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_delegation_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_delegation_set.html aws_route53_delegation_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53DelegationSetConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsRoute53DelegationSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_delegation_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._id = config.id;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // caller_reference - computed: true, optional: false, required: false
    public get callerReference() {
      return this.getStringAttribute('caller_reference');
    }

    // id - computed: false, optional: false, required: true
    private _id?: string; 
    public get id() {
      return this.getStringAttribute('id');
    }
    public set id(value: string) {
      this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
      return this._id
    }

    // name_servers - computed: true, optional: false, required: false
    public get nameServers() {
      return this.getListAttribute('name_servers');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        id: cdktf.stringToTerraform(this._id),
      };
    }
  }
  export interface DataAwsRoute53ResolverEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html#resolver_endpoint_id DataAwsRoute53ResolverEndpoint#resolver_endpoint_id}
    */
    readonly resolverEndpointId?: string;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html#filter DataAwsRoute53ResolverEndpoint#filter}
    */
    readonly filter?: DataAwsRoute53ResolverEndpointFilter[];
  }
  export interface DataAwsRoute53ResolverEndpointFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html#name DataAwsRoute53ResolverEndpoint#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html#values DataAwsRoute53ResolverEndpoint#values}
    */
    readonly values: string[];
  }

  function dataAwsRoute53ResolverEndpointFilterToTerraform(struct?: DataAwsRoute53ResolverEndpointFilter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html aws_route53_resolver_endpoint}
  */
  export class DataAwsRoute53ResolverEndpoint extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_resolver_endpoint";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html aws_route53_resolver_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53ResolverEndpointConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsRoute53ResolverEndpointConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_resolver_endpoint',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._resolverEndpointId = config.resolverEndpointId;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // direction - computed: true, optional: false, required: false
    public get direction() {
      return this.getStringAttribute('direction');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ip_addresses - computed: true, optional: false, required: false
    public get ipAddresses() {
      return this.getListAttribute('ip_addresses');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // resolver_endpoint_id - computed: false, optional: true, required: false
    private _resolverEndpointId?: string | undefined; 
    public get resolverEndpointId() {
      return this.getStringAttribute('resolver_endpoint_id');
    }
    public set resolverEndpointId(value: string | undefined) {
      this._resolverEndpointId = value;
    }
    public resetResolverEndpointId() {
      this._resolverEndpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resolverEndpointIdInput() {
      return this._resolverEndpointId
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsRoute53ResolverEndpointFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsRoute53ResolverEndpointFilter[] | undefined) {
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
        resolver_endpoint_id: cdktf.stringToTerraform(this._resolverEndpointId),
        filter: cdktf.listMapper(dataAwsRoute53ResolverEndpointFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsRoute53ResolverRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule.html#domain_name DataAwsRoute53ResolverRule#domain_name}
    */
    readonly domainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule.html#name DataAwsRoute53ResolverRule#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule.html#resolver_endpoint_id DataAwsRoute53ResolverRule#resolver_endpoint_id}
    */
    readonly resolverEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule.html#resolver_rule_id DataAwsRoute53ResolverRule#resolver_rule_id}
    */
    readonly resolverRuleId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule.html#rule_type DataAwsRoute53ResolverRule#rule_type}
    */
    readonly ruleType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule.html#tags DataAwsRoute53ResolverRule#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule.html aws_route53_resolver_rule}
  */
  export class DataAwsRoute53ResolverRule extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_resolver_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule.html aws_route53_resolver_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53ResolverRuleConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsRoute53ResolverRuleConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_resolver_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._domainName = config.domainName;
      this._name = config.name;
      this._resolverEndpointId = config.resolverEndpointId;
      this._resolverRuleId = config.resolverRuleId;
      this._ruleType = config.ruleType;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // domain_name - computed: true, optional: true, required: false
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

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // resolver_endpoint_id - computed: true, optional: true, required: false
    private _resolverEndpointId?: string | undefined; 
    public get resolverEndpointId() {
      return this.getStringAttribute('resolver_endpoint_id');
    }
    public set resolverEndpointId(value: string | undefined) {
      this._resolverEndpointId = value;
    }
    public resetResolverEndpointId() {
      this._resolverEndpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resolverEndpointIdInput() {
      return this._resolverEndpointId
    }

    // resolver_rule_id - computed: true, optional: true, required: false
    private _resolverRuleId?: string | undefined; 
    public get resolverRuleId() {
      return this.getStringAttribute('resolver_rule_id');
    }
    public set resolverRuleId(value: string | undefined) {
      this._resolverRuleId = value;
    }
    public resetResolverRuleId() {
      this._resolverRuleId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resolverRuleIdInput() {
      return this._resolverRuleId
    }

    // rule_type - computed: true, optional: true, required: false
    private _ruleType?: string | undefined; 
    public get ruleType() {
      return this.getStringAttribute('rule_type');
    }
    public set ruleType(value: string | undefined) {
      this._ruleType = value;
    }
    public resetRuleType() {
      this._ruleType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleTypeInput() {
      return this._ruleType
    }

    // share_status - computed: true, optional: false, required: false
    public get shareStatus() {
      return this.getStringAttribute('share_status');
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        domain_name: cdktf.stringToTerraform(this._domainName),
        name: cdktf.stringToTerraform(this._name),
        resolver_endpoint_id: cdktf.stringToTerraform(this._resolverEndpointId),
        resolver_rule_id: cdktf.stringToTerraform(this._resolverRuleId),
        rule_type: cdktf.stringToTerraform(this._ruleType),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsRoute53ResolverRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html#owner_id DataAwsRoute53ResolverRules#owner_id}
    */
    readonly ownerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html#resolver_endpoint_id DataAwsRoute53ResolverRules#resolver_endpoint_id}
    */
    readonly resolverEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html#rule_type DataAwsRoute53ResolverRules#rule_type}
    */
    readonly ruleType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html#share_status DataAwsRoute53ResolverRules#share_status}
    */
    readonly shareStatus?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html aws_route53_resolver_rules}
  */
  export class DataAwsRoute53ResolverRules extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_resolver_rules";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html aws_route53_resolver_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53ResolverRulesConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsRoute53ResolverRulesConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_resolver_rules',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._ownerId = config.ownerId;
      this._resolverEndpointId = config.resolverEndpointId;
      this._ruleType = config.ruleType;
      this._shareStatus = config.shareStatus;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // owner_id - computed: false, optional: true, required: false
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

    // resolver_endpoint_id - computed: false, optional: true, required: false
    private _resolverEndpointId?: string | undefined; 
    public get resolverEndpointId() {
      return this.getStringAttribute('resolver_endpoint_id');
    }
    public set resolverEndpointId(value: string | undefined) {
      this._resolverEndpointId = value;
    }
    public resetResolverEndpointId() {
      this._resolverEndpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resolverEndpointIdInput() {
      return this._resolverEndpointId
    }

    // resolver_rule_ids - computed: true, optional: false, required: false
    public get resolverRuleIds() {
      return this.getListAttribute('resolver_rule_ids');
    }

    // rule_type - computed: false, optional: true, required: false
    private _ruleType?: string | undefined; 
    public get ruleType() {
      return this.getStringAttribute('rule_type');
    }
    public set ruleType(value: string | undefined) {
      this._ruleType = value;
    }
    public resetRuleType() {
      this._ruleType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleTypeInput() {
      return this._ruleType
    }

    // share_status - computed: false, optional: true, required: false
    private _shareStatus?: string | undefined; 
    public get shareStatus() {
      return this.getStringAttribute('share_status');
    }
    public set shareStatus(value: string | undefined) {
      this._shareStatus = value;
    }
    public resetShareStatus() {
      this._shareStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareStatusInput() {
      return this._shareStatus
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        owner_id: cdktf.stringToTerraform(this._ownerId),
        resolver_endpoint_id: cdktf.stringToTerraform(this._resolverEndpointId),
        rule_type: cdktf.stringToTerraform(this._ruleType),
        share_status: cdktf.stringToTerraform(this._shareStatus),
      };
    }
  }
  export interface DataAwsRoute53ZoneConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html#name DataAwsRoute53Zone#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html#private_zone DataAwsRoute53Zone#private_zone}
    */
    readonly privateZone?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html#resource_record_set_count DataAwsRoute53Zone#resource_record_set_count}
    */
    readonly resourceRecordSetCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html#tags DataAwsRoute53Zone#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html#vpc_id DataAwsRoute53Zone#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html#zone_id DataAwsRoute53Zone#zone_id}
    */
    readonly zoneId?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html aws_route53_zone}
  */
  export class DataAwsRoute53Zone extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_route53_zone";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html aws_route53_zone} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53ZoneConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsRoute53ZoneConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_route53_zone',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._privateZone = config.privateZone;
      this._resourceRecordSetCount = config.resourceRecordSetCount;
      this._tags = config.tags;
      this._vpcId = config.vpcId;
      this._zoneId = config.zoneId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // caller_reference - computed: true, optional: false, required: false
    public get callerReference() {
      return this.getStringAttribute('caller_reference');
    }

    // comment - computed: true, optional: false, required: false
    public get comment() {
      return this.getStringAttribute('comment');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // linked_service_description - computed: true, optional: false, required: false
    public get linkedServiceDescription() {
      return this.getStringAttribute('linked_service_description');
    }

    // linked_service_principal - computed: true, optional: false, required: false
    public get linkedServicePrincipal() {
      return this.getStringAttribute('linked_service_principal');
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

    // name_servers - computed: true, optional: false, required: false
    public get nameServers() {
      return this.getListAttribute('name_servers');
    }

    // private_zone - computed: false, optional: true, required: false
    private _privateZone?: boolean | cdktf.IResolvable | undefined; 
    public get privateZone() {
      return this.getBooleanAttribute('private_zone') as any;
    }
    public set privateZone(value: boolean | cdktf.IResolvable | undefined) {
      this._privateZone = value;
    }
    public resetPrivateZone() {
      this._privateZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateZoneInput() {
      return this._privateZone
    }

    // resource_record_set_count - computed: true, optional: true, required: false
    private _resourceRecordSetCount?: number | undefined; 
    public get resourceRecordSetCount() {
      return this.getNumberAttribute('resource_record_set_count');
    }
    public set resourceRecordSetCount(value: number | undefined) {
      this._resourceRecordSetCount = value;
    }
    public resetResourceRecordSetCount() {
      this._resourceRecordSetCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceRecordSetCountInput() {
      return this._resourceRecordSetCount
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        private_zone: cdktf.booleanToTerraform(this._privateZone),
        resource_record_set_count: cdktf.numberToTerraform(this._resourceRecordSetCount),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        zone_id: cdktf.stringToTerraform(this._zoneId),
      };
    }
  }
}
