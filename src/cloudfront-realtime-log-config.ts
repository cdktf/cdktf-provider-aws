// https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontRealtimeLogConfigConfig extends cdktf.TerraformMetaArguments {
  readonly fields: string[];
  readonly name: string;
  readonly samplingRate: number;
  /** endpoint block */
  readonly endpoint: CloudfrontRealtimeLogConfigEndpoint[];
}
export interface CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig {
  readonly roleArn: string;
  readonly streamArn: string;
}

function cloudfrontRealtimeLogConfigEndpointKinesisStreamConfigToTerraform(struct?: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    stream_arn: cdktf.stringToTerraform(struct!.streamArn),
  }
}

export interface CloudfrontRealtimeLogConfigEndpoint {
  readonly streamType: string;
  /** kinesis_stream_config block */
  readonly kinesisStreamConfig: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig[];
}

function cloudfrontRealtimeLogConfigEndpointToTerraform(struct?: CloudfrontRealtimeLogConfigEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    stream_type: cdktf.stringToTerraform(struct!.streamType),
    kinesis_stream_config: cdktf.listMapper(cloudfrontRealtimeLogConfigEndpointKinesisStreamConfigToTerraform)(struct!.kinesisStreamConfig),
  }
}


// Resource

export class CloudfrontRealtimeLogConfig extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudfrontRealtimeLogConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_realtime_log_config',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._fields = config.fields;
    this._name = config.name;
    this._samplingRate = config.samplingRate;
    this._endpoint = config.endpoint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // fields - computed: false, optional: false, required: true
  private _fields: string[];
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
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

  // sampling_rate - computed: false, optional: false, required: true
  private _samplingRate: number;
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
  public set samplingRate(value: number) {
    this._samplingRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRateInput() {
    return this._samplingRate
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint: CloudfrontRealtimeLogConfigEndpoint[];
  public get endpoint() {
    return this.interpolationForAttribute('endpoint') as any;
  }
  public set endpoint(value: CloudfrontRealtimeLogConfigEndpoint[]) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fields: cdktf.listMapper(cdktf.stringToTerraform)(this._fields),
      name: cdktf.stringToTerraform(this._name),
      sampling_rate: cdktf.numberToTerraform(this._samplingRate),
      endpoint: cdktf.listMapper(cloudfrontRealtimeLogConfigEndpointToTerraform)(this._endpoint),
    };
  }
}
