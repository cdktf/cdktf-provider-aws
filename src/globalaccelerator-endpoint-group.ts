// https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GlobalacceleratorEndpointGroupConfig extends TerraformMetaArguments {
  readonly endpointGroupRegion?: string;
  readonly healthCheckIntervalSeconds?: number;
  readonly healthCheckPath?: string;
  readonly healthCheckPort?: number;
  readonly healthCheckProtocol?: string;
  readonly listenerArn: string;
  readonly thresholdCount?: number;
  readonly trafficDialPercentage?: number;
  /** endpoint_configuration block */
  readonly endpointConfiguration?: GlobalacceleratorEndpointGroupEndpointConfiguration[];
  /** port_override block */
  readonly portOverride?: GlobalacceleratorEndpointGroupPortOverride[];
  /** timeouts block */
  readonly timeouts?: GlobalacceleratorEndpointGroupTimeouts;
}
export interface GlobalacceleratorEndpointGroupEndpointConfiguration {
  readonly clientIpPreservationEnabled?: boolean;
  readonly endpointId?: string;
  readonly weight?: number;
}
export interface GlobalacceleratorEndpointGroupPortOverride {
  readonly endpointPort: number;
  readonly listenerPort: number;
}
export interface GlobalacceleratorEndpointGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GlobalacceleratorEndpointGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlobalacceleratorEndpointGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_globalaccelerator_endpoint_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._endpointGroupRegion = config.endpointGroupRegion;
    this._healthCheckIntervalSeconds = config.healthCheckIntervalSeconds;
    this._healthCheckPath = config.healthCheckPath;
    this._healthCheckPort = config.healthCheckPort;
    this._healthCheckProtocol = config.healthCheckProtocol;
    this._listenerArn = config.listenerArn;
    this._thresholdCount = config.thresholdCount;
    this._trafficDialPercentage = config.trafficDialPercentage;
    this._endpointConfiguration = config.endpointConfiguration;
    this._portOverride = config.portOverride;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // endpoint_group_region - computed: true, optional: true, required: false
  private _endpointGroupRegion?: string;
  public get endpointGroupRegion() {
    return this._endpointGroupRegion ?? this.getStringAttribute('endpoint_group_region');
  }
  public set endpointGroupRegion(value: string | undefined) {
    this._endpointGroupRegion = value;
  }

  // health_check_interval_seconds - computed: false, optional: true, required: false
  private _healthCheckIntervalSeconds?: number;
  public get healthCheckIntervalSeconds() {
    return this._healthCheckIntervalSeconds;
  }
  public set healthCheckIntervalSeconds(value: number | undefined) {
    this._healthCheckIntervalSeconds = value;
  }

  // health_check_path - computed: true, optional: true, required: false
  private _healthCheckPath?: string;
  public get healthCheckPath() {
    return this._healthCheckPath ?? this.getStringAttribute('health_check_path');
  }
  public set healthCheckPath(value: string | undefined) {
    this._healthCheckPath = value;
  }

  // health_check_port - computed: true, optional: true, required: false
  private _healthCheckPort?: number;
  public get healthCheckPort() {
    return this._healthCheckPort ?? this.getNumberAttribute('health_check_port');
  }
  public set healthCheckPort(value: number | undefined) {
    this._healthCheckPort = value;
  }

  // health_check_protocol - computed: false, optional: true, required: false
  private _healthCheckProtocol?: string;
  public get healthCheckProtocol() {
    return this._healthCheckProtocol;
  }
  public set healthCheckProtocol(value: string | undefined) {
    this._healthCheckProtocol = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // listener_arn - computed: false, optional: false, required: true
  private _listenerArn: string;
  public get listenerArn() {
    return this._listenerArn;
  }
  public set listenerArn(value: string) {
    this._listenerArn = value;
  }

  // threshold_count - computed: false, optional: true, required: false
  private _thresholdCount?: number;
  public get thresholdCount() {
    return this._thresholdCount;
  }
  public set thresholdCount(value: number | undefined) {
    this._thresholdCount = value;
  }

  // traffic_dial_percentage - computed: false, optional: true, required: false
  private _trafficDialPercentage?: number;
  public get trafficDialPercentage() {
    return this._trafficDialPercentage;
  }
  public set trafficDialPercentage(value: number | undefined) {
    this._trafficDialPercentage = value;
  }

  // endpoint_configuration - computed: false, optional: true, required: false
  private _endpointConfiguration?: GlobalacceleratorEndpointGroupEndpointConfiguration[];
  public get endpointConfiguration() {
    return this._endpointConfiguration;
  }
  public set endpointConfiguration(value: GlobalacceleratorEndpointGroupEndpointConfiguration[] | undefined) {
    this._endpointConfiguration = value;
  }

  // port_override - computed: false, optional: true, required: false
  private _portOverride?: GlobalacceleratorEndpointGroupPortOverride[];
  public get portOverride() {
    return this._portOverride;
  }
  public set portOverride(value: GlobalacceleratorEndpointGroupPortOverride[] | undefined) {
    this._portOverride = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GlobalacceleratorEndpointGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GlobalacceleratorEndpointGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_group_region: this._endpointGroupRegion,
      health_check_interval_seconds: this._healthCheckIntervalSeconds,
      health_check_path: this._healthCheckPath,
      health_check_port: this._healthCheckPort,
      health_check_protocol: this._healthCheckProtocol,
      listener_arn: this._listenerArn,
      threshold_count: this._thresholdCount,
      traffic_dial_percentage: this._trafficDialPercentage,
      endpoint_configuration: this._endpointConfiguration,
      port_override: this._portOverride,
      timeouts: this._timeouts,
    };
  }
}
