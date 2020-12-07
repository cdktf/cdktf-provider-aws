// https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalacceleratorEndpointGroupConfig extends cdktf.TerraformMetaArguments {
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
}
export interface GlobalacceleratorEndpointGroupEndpointConfiguration {
  readonly endpointId?: string;
  readonly weight?: number;
}

function globalacceleratorEndpointGroupEndpointConfigurationToTerraform(struct?: GlobalacceleratorEndpointGroupEndpointConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_id: cdktf.stringToTerraform(struct!.endpointId),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


// Resource

export class GlobalacceleratorEndpointGroup extends cdktf.TerraformResource {

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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_group_region - computed: true, optional: true, required: false
  private _endpointGroupRegion?: string;
  public get endpointGroupRegion() {
    return this.getStringAttribute('endpoint_group_region');
  }
  public set endpointGroupRegion(value: string) {
    this._endpointGroupRegion = value;
  }
  public resetEndpointGroupRegion() {
    this._endpointGroupRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointGroupRegionInput() {
    return this._endpointGroupRegion
  }

  // health_check_interval_seconds - computed: false, optional: true, required: false
  private _healthCheckIntervalSeconds?: number;
  public get healthCheckIntervalSeconds() {
    return this.getNumberAttribute('health_check_interval_seconds');
  }
  public set healthCheckIntervalSeconds(value: number ) {
    this._healthCheckIntervalSeconds = value;
  }
  public resetHealthCheckIntervalSeconds() {
    this._healthCheckIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalSecondsInput() {
    return this._healthCheckIntervalSeconds
  }

  // health_check_path - computed: false, optional: true, required: false
  private _healthCheckPath?: string;
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }
  public set healthCheckPath(value: string ) {
    this._healthCheckPath = value;
  }
  public resetHealthCheckPath() {
    this._healthCheckPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPathInput() {
    return this._healthCheckPath
  }

  // health_check_port - computed: false, optional: true, required: false
  private _healthCheckPort?: number;
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }
  public set healthCheckPort(value: number ) {
    this._healthCheckPort = value;
  }
  public resetHealthCheckPort() {
    this._healthCheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort
  }

  // health_check_protocol - computed: false, optional: true, required: false
  private _healthCheckProtocol?: string;
  public get healthCheckProtocol() {
    return this.getStringAttribute('health_check_protocol');
  }
  public set healthCheckProtocol(value: string ) {
    this._healthCheckProtocol = value;
  }
  public resetHealthCheckProtocol() {
    this._healthCheckProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckProtocolInput() {
    return this._healthCheckProtocol
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listener_arn - computed: false, optional: false, required: true
  private _listenerArn: string;
  public get listenerArn() {
    return this.getStringAttribute('listener_arn');
  }
  public set listenerArn(value: string) {
    this._listenerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerArnInput() {
    return this._listenerArn
  }

  // threshold_count - computed: false, optional: true, required: false
  private _thresholdCount?: number;
  public get thresholdCount() {
    return this.getNumberAttribute('threshold_count');
  }
  public set thresholdCount(value: number ) {
    this._thresholdCount = value;
  }
  public resetThresholdCount() {
    this._thresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdCountInput() {
    return this._thresholdCount
  }

  // traffic_dial_percentage - computed: false, optional: true, required: false
  private _trafficDialPercentage?: number;
  public get trafficDialPercentage() {
    return this.getNumberAttribute('traffic_dial_percentage');
  }
  public set trafficDialPercentage(value: number ) {
    this._trafficDialPercentage = value;
  }
  public resetTrafficDialPercentage() {
    this._trafficDialPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDialPercentageInput() {
    return this._trafficDialPercentage
  }

  // endpoint_configuration - computed: false, optional: true, required: false
  private _endpointConfiguration?: GlobalacceleratorEndpointGroupEndpointConfiguration[];
  public get endpointConfiguration() {
    return this.interpolationForAttribute('endpoint_configuration') as any;
  }
  public set endpointConfiguration(value: GlobalacceleratorEndpointGroupEndpointConfiguration[] ) {
    this._endpointConfiguration = value;
  }
  public resetEndpointConfiguration() {
    this._endpointConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigurationInput() {
    return this._endpointConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_group_region: cdktf.stringToTerraform(this._endpointGroupRegion),
      health_check_interval_seconds: cdktf.numberToTerraform(this._healthCheckIntervalSeconds),
      health_check_path: cdktf.stringToTerraform(this._healthCheckPath),
      health_check_port: cdktf.numberToTerraform(this._healthCheckPort),
      health_check_protocol: cdktf.stringToTerraform(this._healthCheckProtocol),
      listener_arn: cdktf.stringToTerraform(this._listenerArn),
      threshold_count: cdktf.numberToTerraform(this._thresholdCount),
      traffic_dial_percentage: cdktf.numberToTerraform(this._trafficDialPercentage),
      endpoint_configuration: cdktf.listMapper(globalacceleratorEndpointGroupEndpointConfigurationToTerraform)(this._endpointConfiguration),
    };
  }
}
