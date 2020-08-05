// https://www.terraform.io/docs/providers/aws/r/route53_health_check.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "child_health_threshold": {
        "type": "number",
        "optional": true
      },
      "child_healthchecks": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "cloudwatch_alarm_name": {
        "type": "string",
        "optional": true
      },
      "cloudwatch_alarm_region": {
        "type": "string",
        "optional": true
      },
      "enable_sni": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "failure_threshold": {
        "type": "number",
        "optional": true
      },
      "fqdn": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "insufficient_data_health_status": {
        "type": "string",
        "optional": true
      },
      "invert_healthcheck": {
        "type": "bool",
        "optional": true
      },
      "ip_address": {
        "type": "string",
        "optional": true
      },
      "measure_latency": {
        "type": "bool",
        "optional": true
      },
      "port": {
        "type": "number",
        "optional": true
      },
      "reference_name": {
        "type": "string",
        "optional": true
      },
      "regions": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "request_interval": {
        "type": "number",
        "optional": true
      },
      "resource_path": {
        "type": "string",
        "optional": true
      },
      "search_string": {
        "type": "string",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "type": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Route53HealthCheckConfig extends TerraformMetaArguments {
  readonly childHealthThreshold?: number;
  readonly childHealthchecks?: string[];
  readonly cloudwatchAlarmName?: string;
  readonly cloudwatchAlarmRegion?: string;
  readonly enableSni?: boolean;
  readonly failureThreshold?: number;
  readonly fqdn?: string;
  readonly insufficientDataHealthStatus?: string;
  readonly invertHealthcheck?: boolean;
  readonly ipAddress?: string;
  readonly measureLatency?: boolean;
  readonly port?: number;
  readonly referenceName?: string;
  readonly regions?: string[];
  readonly requestInterval?: number;
  readonly resourcePath?: string;
  readonly searchString?: string;
  readonly tags?: { [key: string]: string };
  readonly type: string;
}

// Resource

export class Route53HealthCheck extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._searchString = config.searchString;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // child_health_threshold - computed: false, optional: true, required: false
  private _childHealthThreshold?: number;
  public get childHealthThreshold() {
    return this._childHealthThreshold;
  }
  public set childHealthThreshold(value: number | undefined) {
    this._childHealthThreshold = value;
  }

  // child_healthchecks - computed: false, optional: true, required: false
  private _childHealthchecks?: string[];
  public get childHealthchecks() {
    return this._childHealthchecks;
  }
  public set childHealthchecks(value: string[] | undefined) {
    this._childHealthchecks = value;
  }

  // cloudwatch_alarm_name - computed: false, optional: true, required: false
  private _cloudwatchAlarmName?: string;
  public get cloudwatchAlarmName() {
    return this._cloudwatchAlarmName;
  }
  public set cloudwatchAlarmName(value: string | undefined) {
    this._cloudwatchAlarmName = value;
  }

  // cloudwatch_alarm_region - computed: false, optional: true, required: false
  private _cloudwatchAlarmRegion?: string;
  public get cloudwatchAlarmRegion() {
    return this._cloudwatchAlarmRegion;
  }
  public set cloudwatchAlarmRegion(value: string | undefined) {
    this._cloudwatchAlarmRegion = value;
  }

  // enable_sni - computed: true, optional: true, required: false
  private _enableSni?: boolean;
  public get enableSni() {
    return this._enableSni ?? this.getBooleanAttribute('enable_sni');
  }
  public set enableSni(value: boolean | undefined) {
    this._enableSni = value;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number;
  public get failureThreshold() {
    return this._failureThreshold;
  }
  public set failureThreshold(value: number | undefined) {
    this._failureThreshold = value;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string;
  public get fqdn() {
    return this._fqdn;
  }
  public set fqdn(value: string | undefined) {
    this._fqdn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // insufficient_data_health_status - computed: false, optional: true, required: false
  private _insufficientDataHealthStatus?: string;
  public get insufficientDataHealthStatus() {
    return this._insufficientDataHealthStatus;
  }
  public set insufficientDataHealthStatus(value: string | undefined) {
    this._insufficientDataHealthStatus = value;
  }

  // invert_healthcheck - computed: false, optional: true, required: false
  private _invertHealthcheck?: boolean;
  public get invertHealthcheck() {
    return this._invertHealthcheck;
  }
  public set invertHealthcheck(value: boolean | undefined) {
    this._invertHealthcheck = value;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string;
  public get ipAddress() {
    return this._ipAddress;
  }
  public set ipAddress(value: string | undefined) {
    this._ipAddress = value;
  }

  // measure_latency - computed: false, optional: true, required: false
  private _measureLatency?: boolean;
  public get measureLatency() {
    return this._measureLatency;
  }
  public set measureLatency(value: boolean | undefined) {
    this._measureLatency = value;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }

  // reference_name - computed: false, optional: true, required: false
  private _referenceName?: string;
  public get referenceName() {
    return this._referenceName;
  }
  public set referenceName(value: string | undefined) {
    this._referenceName = value;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[];
  public get regions() {
    return this._regions;
  }
  public set regions(value: string[] | undefined) {
    this._regions = value;
  }

  // request_interval - computed: false, optional: true, required: false
  private _requestInterval?: number;
  public get requestInterval() {
    return this._requestInterval;
  }
  public set requestInterval(value: number | undefined) {
    this._requestInterval = value;
  }

  // resource_path - computed: false, optional: true, required: false
  private _resourcePath?: string;
  public get resourcePath() {
    return this._resourcePath;
  }
  public set resourcePath(value: string | undefined) {
    this._resourcePath = value;
  }

  // search_string - computed: false, optional: true, required: false
  private _searchString?: string;
  public get searchString() {
    return this._searchString;
  }
  public set searchString(value: string | undefined) {
    this._searchString = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      child_health_threshold: this._childHealthThreshold,
      child_healthchecks: this._childHealthchecks,
      cloudwatch_alarm_name: this._cloudwatchAlarmName,
      cloudwatch_alarm_region: this._cloudwatchAlarmRegion,
      enable_sni: this._enableSni,
      failure_threshold: this._failureThreshold,
      fqdn: this._fqdn,
      insufficient_data_health_status: this._insufficientDataHealthStatus,
      invert_healthcheck: this._invertHealthcheck,
      ip_address: this._ipAddress,
      measure_latency: this._measureLatency,
      port: this._port,
      reference_name: this._referenceName,
      regions: this._regions,
      request_interval: this._requestInterval,
      resource_path: this._resourcePath,
      search_string: this._searchString,
      tags: this._tags,
      type: this._type,
    };
  }
}
