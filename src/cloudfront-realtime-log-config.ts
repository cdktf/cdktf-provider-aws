// https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontRealtimeLogConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#fields CloudfrontRealtimeLogConfig#fields}
  */
  readonly fields: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#name CloudfrontRealtimeLogConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#sampling_rate CloudfrontRealtimeLogConfig#sampling_rate}
  */
  readonly samplingRate: number;
  /**
  * endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#endpoint CloudfrontRealtimeLogConfig#endpoint}
  */
  readonly endpoint: CloudfrontRealtimeLogConfigEndpoint[];
}
export interface CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#role_arn CloudfrontRealtimeLogConfig#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#stream_arn CloudfrontRealtimeLogConfig#stream_arn}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#stream_type CloudfrontRealtimeLogConfig#stream_type}
  */
  readonly streamType: string;
  /**
  * kinesis_stream_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#kinesis_stream_config CloudfrontRealtimeLogConfig#kinesis_stream_config}
  */
  readonly kinesisStreamConfig: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig[];
}

function cloudfrontRealtimeLogConfigEndpointToTerraform(struct?: CloudfrontRealtimeLogConfigEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    stream_type: cdktf.stringToTerraform(struct!.streamType),
    kinesis_stream_config: cdktf.listMapper(cloudfrontRealtimeLogConfigEndpointKinesisStreamConfigToTerraform)(struct!.kinesisStreamConfig),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html aws_cloudfront_realtime_log_config}
*/
export class CloudfrontRealtimeLogConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudfront_realtime_log_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html aws_cloudfront_realtime_log_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontRealtimeLogConfigConfig
  */
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
