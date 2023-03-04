// https://www.terraform.io/docs/providers/aws/r/route53_health_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53HealthCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_health_threshold Route53HealthCheck#child_health_threshold}
  */
  readonly childHealthThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_healthchecks Route53HealthCheck#child_healthchecks}
  */
  readonly childHealthchecks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_name Route53HealthCheck#cloudwatch_alarm_name}
  */
  readonly cloudwatchAlarmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_region Route53HealthCheck#cloudwatch_alarm_region}
  */
  readonly cloudwatchAlarmRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#disabled Route53HealthCheck#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#enable_sni Route53HealthCheck#enable_sni}
  */
  readonly enableSni?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#fqdn Route53HealthCheck#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#id Route53HealthCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}
  */
  readonly insufficientDataHealthStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#invert_healthcheck Route53HealthCheck#invert_healthcheck}
  */
  readonly invertHealthcheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#ip_address Route53HealthCheck#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#measure_latency Route53HealthCheck#measure_latency}
  */
  readonly measureLatency?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#port Route53HealthCheck#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#reference_name Route53HealthCheck#reference_name}
  */
  readonly referenceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#regions Route53HealthCheck#regions}
  */
  readonly regions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#request_interval Route53HealthCheck#request_interval}
  */
  readonly requestInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#resource_path Route53HealthCheck#resource_path}
  */
  readonly resourcePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}
  */
  readonly routingControlArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#search_string Route53HealthCheck#search_string}
  */
  readonly searchString?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags Route53HealthCheck#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags_all Route53HealthCheck#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#type Route53HealthCheck#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check aws_route53_health_check}
*/
export class Route53HealthCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53_health_check";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check aws_route53_health_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53HealthCheckConfig
  */
  public constructor(scope: Construct, id: string, config: Route53HealthCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_health_check',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._childHealthThreshold = config.childHealthThreshold;
    this._childHealthchecks = config.childHealthchecks;
    this._cloudwatchAlarmName = config.cloudwatchAlarmName;
    this._cloudwatchAlarmRegion = config.cloudwatchAlarmRegion;
    this._disabled = config.disabled;
    this._enableSni = config.enableSni;
    this._failureThreshold = config.failureThreshold;
    this._fqdn = config.fqdn;
    this._id = config.id;
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
  private _childHealthThreshold?: number; 
  public get childHealthThreshold() {
    return this.getNumberAttribute('child_health_threshold');
  }
  public set childHealthThreshold(value: number) {
    this._childHealthThreshold = value;
  }
  public resetChildHealthThreshold() {
    this._childHealthThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childHealthThresholdInput() {
    return this._childHealthThreshold;
  }

  // child_healthchecks - computed: false, optional: true, required: false
  private _childHealthchecks?: string[]; 
  public get childHealthchecks() {
    return cdktf.Fn.tolist(this.getListAttribute('child_healthchecks'));
  }
  public set childHealthchecks(value: string[]) {
    this._childHealthchecks = value;
  }
  public resetChildHealthchecks() {
    this._childHealthchecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childHealthchecksInput() {
    return this._childHealthchecks;
  }

  // cloudwatch_alarm_name - computed: false, optional: true, required: false
  private _cloudwatchAlarmName?: string; 
  public get cloudwatchAlarmName() {
    return this.getStringAttribute('cloudwatch_alarm_name');
  }
  public set cloudwatchAlarmName(value: string) {
    this._cloudwatchAlarmName = value;
  }
  public resetCloudwatchAlarmName() {
    this._cloudwatchAlarmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchAlarmNameInput() {
    return this._cloudwatchAlarmName;
  }

  // cloudwatch_alarm_region - computed: false, optional: true, required: false
  private _cloudwatchAlarmRegion?: string; 
  public get cloudwatchAlarmRegion() {
    return this.getStringAttribute('cloudwatch_alarm_region');
  }
  public set cloudwatchAlarmRegion(value: string) {
    this._cloudwatchAlarmRegion = value;
  }
  public resetCloudwatchAlarmRegion() {
    this._cloudwatchAlarmRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchAlarmRegionInput() {
    return this._cloudwatchAlarmRegion;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // enable_sni - computed: true, optional: true, required: false
  private _enableSni?: boolean | cdktf.IResolvable; 
  public get enableSni() {
    return this.getBooleanAttribute('enable_sni');
  }
  public set enableSni(value: boolean | cdktf.IResolvable) {
    this._enableSni = value;
  }
  public resetEnableSni() {
    this._enableSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSniInput() {
    return this._enableSni;
  }

  // failure_threshold - computed: true, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // insufficient_data_health_status - computed: false, optional: true, required: false
  private _insufficientDataHealthStatus?: string; 
  public get insufficientDataHealthStatus() {
    return this.getStringAttribute('insufficient_data_health_status');
  }
  public set insufficientDataHealthStatus(value: string) {
    this._insufficientDataHealthStatus = value;
  }
  public resetInsufficientDataHealthStatus() {
    this._insufficientDataHealthStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insufficientDataHealthStatusInput() {
    return this._insufficientDataHealthStatus;
  }

  // invert_healthcheck - computed: false, optional: true, required: false
  private _invertHealthcheck?: boolean | cdktf.IResolvable; 
  public get invertHealthcheck() {
    return this.getBooleanAttribute('invert_healthcheck');
  }
  public set invertHealthcheck(value: boolean | cdktf.IResolvable) {
    this._invertHealthcheck = value;
  }
  public resetInvertHealthcheck() {
    this._invertHealthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertHealthcheckInput() {
    return this._invertHealthcheck;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // measure_latency - computed: false, optional: true, required: false
  private _measureLatency?: boolean | cdktf.IResolvable; 
  public get measureLatency() {
    return this.getBooleanAttribute('measure_latency');
  }
  public set measureLatency(value: boolean | cdktf.IResolvable) {
    this._measureLatency = value;
  }
  public resetMeasureLatency() {
    this._measureLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureLatencyInput() {
    return this._measureLatency;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // reference_name - computed: false, optional: true, required: false
  private _referenceName?: string; 
  public get referenceName() {
    return this.getStringAttribute('reference_name');
  }
  public set referenceName(value: string) {
    this._referenceName = value;
  }
  public resetReferenceName() {
    this._referenceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceNameInput() {
    return this._referenceName;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // request_interval - computed: false, optional: true, required: false
  private _requestInterval?: number; 
  public get requestInterval() {
    return this.getNumberAttribute('request_interval');
  }
  public set requestInterval(value: number) {
    this._requestInterval = value;
  }
  public resetRequestInterval() {
    this._requestInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIntervalInput() {
    return this._requestInterval;
  }

  // resource_path - computed: false, optional: true, required: false
  private _resourcePath?: string; 
  public get resourcePath() {
    return this.getStringAttribute('resource_path');
  }
  public set resourcePath(value: string) {
    this._resourcePath = value;
  }
  public resetResourcePath() {
    this._resourcePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePathInput() {
    return this._resourcePath;
  }

  // routing_control_arn - computed: false, optional: true, required: false
  private _routingControlArn?: string; 
  public get routingControlArn() {
    return this.getStringAttribute('routing_control_arn');
  }
  public set routingControlArn(value: string) {
    this._routingControlArn = value;
  }
  public resetRoutingControlArn() {
    this._routingControlArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingControlArnInput() {
    return this._routingControlArn;
  }

  // search_string - computed: false, optional: true, required: false
  private _searchString?: string; 
  public get searchString() {
    return this.getStringAttribute('search_string');
  }
  public set searchString(value: string) {
    this._searchString = value;
  }
  public resetSearchString() {
    this._searchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchStringInput() {
    return this._searchString;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
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
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      child_health_threshold: cdktf.numberToTerraform(this._childHealthThreshold),
      child_healthchecks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._childHealthchecks),
      cloudwatch_alarm_name: cdktf.stringToTerraform(this._cloudwatchAlarmName),
      cloudwatch_alarm_region: cdktf.stringToTerraform(this._cloudwatchAlarmRegion),
      disabled: cdktf.booleanToTerraform(this._disabled),
      enable_sni: cdktf.booleanToTerraform(this._enableSni),
      failure_threshold: cdktf.numberToTerraform(this._failureThreshold),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      id: cdktf.stringToTerraform(this._id),
      insufficient_data_health_status: cdktf.stringToTerraform(this._insufficientDataHealthStatus),
      invert_healthcheck: cdktf.booleanToTerraform(this._invertHealthcheck),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      measure_latency: cdktf.booleanToTerraform(this._measureLatency),
      port: cdktf.numberToTerraform(this._port),
      reference_name: cdktf.stringToTerraform(this._referenceName),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      request_interval: cdktf.numberToTerraform(this._requestInterval),
      resource_path: cdktf.stringToTerraform(this._resourcePath),
      routing_control_arn: cdktf.stringToTerraform(this._routingControlArn),
      search_string: cdktf.stringToTerraform(this._searchString),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
