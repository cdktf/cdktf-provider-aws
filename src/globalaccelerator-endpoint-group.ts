// https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "endpoint_group_region": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "health_check_interval_seconds": {
        "type": "number",
        "optional": true
      },
      "health_check_path": {
        "type": "string",
        "optional": true
      },
      "health_check_port": {
        "type": "number",
        "optional": true
      },
      "health_check_protocol": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "listener_arn": {
        "type": "string",
        "required": true
      },
      "threshold_count": {
        "type": "number",
        "optional": true
      },
      "traffic_dial_percentage": {
        "type": "number",
        "optional": true
      }
    },
    "block_types": {
      "endpoint_configuration": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "endpoint_id": {
              "type": "string",
              "optional": true
            },
            "weight": {
              "type": "number",
              "optional": true
            }
          }
        },
        "max_items": 10
      }
    }
  }
}
*/
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
}
export interface GlobalacceleratorEndpointGroupEndpointConfiguration {
  readonly endpointId?: string;
  readonly weight?: number;
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // health_check_path - computed: false, optional: true, required: false
  private _healthCheckPath?: string;
  public get healthCheckPath() {
    return this._healthCheckPath;
  }
  public set healthCheckPath(value: string | undefined) {
    this._healthCheckPath = value;
  }

  // health_check_port - computed: false, optional: true, required: false
  private _healthCheckPort?: number;
  public get healthCheckPort() {
    return this._healthCheckPort;
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
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
    };
  }
}
