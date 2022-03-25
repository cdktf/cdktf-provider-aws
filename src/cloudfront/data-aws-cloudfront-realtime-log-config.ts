// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudFront
*/
export interface DataAwsCloudfrontRealtimeLogConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_realtime_log_config#name DataAwsCloudfrontRealtimeLogConfig#name}
  */
  readonly name: string;
}
export class DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig extends cdktf.ComplexComputedList {

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // stream_arn - computed: true, optional: false, required: false
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
}
export class DataAwsCloudfrontRealtimeLogConfigEndpoint extends cdktf.ComplexComputedList {

  // kinesis_stream_config - computed: true, optional: false, required: false
  public get kinesisStreamConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('kinesis_stream_config');
  }

  // stream_type - computed: true, optional: false, required: false
  public get streamType() {
    return this.getStringAttribute('stream_type');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_realtime_log_config aws_cloudfront_realtime_log_config}
*/
export class DataAwsCloudfrontRealtimeLogConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudfront_realtime_log_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_realtime_log_config aws_cloudfront_realtime_log_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsCloudfrontRealtimeLogConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsCloudfrontRealtimeLogConfigConfig) {
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // endpoint - computed: true, optional: false, required: false
  public endpoint(index: string) {
    return new DataAwsCloudfrontRealtimeLogConfigEndpoint(this, 'endpoint', index, false);
  }

  // fields - computed: true, optional: false, required: false
  public get fields() {
    return cdktf.Fn.tolist(this.getListAttribute('fields'));
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
    return this._name;
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
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
