/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/cloudfront_realtime_log_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontRealtimeLogConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/cloudfront_realtime_log_config#fields CloudfrontRealtimeLogConfig#fields}
  */
  readonly fields: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/cloudfront_realtime_log_config#id CloudfrontRealtimeLogConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/cloudfront_realtime_log_config#name CloudfrontRealtimeLogConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/cloudfront_realtime_log_config#sampling_rate CloudfrontRealtimeLogConfig#sampling_rate}
  */
  readonly samplingRate: number;
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/cloudfront_realtime_log_config#endpoint CloudfrontRealtimeLogConfig#endpoint}
  */
  readonly endpoint: CloudfrontRealtimeLogConfigEndpoint;
}
export interface CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/cloudfront_realtime_log_config#role_arn CloudfrontRealtimeLogConfig#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/cloudfront_realtime_log_config#stream_arn CloudfrontRealtimeLogConfig#stream_arn}
  */
  readonly streamArn: string;
}

export function cloudfrontRealtimeLogConfigEndpointKinesisStreamConfigToTerraform(struct?: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference | CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    stream_arn: cdktf.stringToTerraform(struct!.streamArn),
  }
}


export function cloudfrontRealtimeLogConfigEndpointKinesisStreamConfigToHclTerraform(struct?: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference | CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_arn: {
      value: cdktf.stringToHclTerraform(struct!.streamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._streamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamArn = this._streamArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleArn = undefined;
      this._streamArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleArn = value.roleArn;
      this._streamArn = value.streamArn;
    }
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // stream_arn - computed: false, optional: false, required: true
  private _streamArn?: string; 
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
  public set streamArn(value: string) {
    this._streamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamArnInput() {
    return this._streamArn;
  }
}
export interface CloudfrontRealtimeLogConfigEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/cloudfront_realtime_log_config#stream_type CloudfrontRealtimeLogConfig#stream_type}
  */
  readonly streamType: string;
  /**
  * kinesis_stream_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/cloudfront_realtime_log_config#kinesis_stream_config CloudfrontRealtimeLogConfig#kinesis_stream_config}
  */
  readonly kinesisStreamConfig: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig;
}

export function cloudfrontRealtimeLogConfigEndpointToTerraform(struct?: CloudfrontRealtimeLogConfigEndpointOutputReference | CloudfrontRealtimeLogConfigEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stream_type: cdktf.stringToTerraform(struct!.streamType),
    kinesis_stream_config: cloudfrontRealtimeLogConfigEndpointKinesisStreamConfigToTerraform(struct!.kinesisStreamConfig),
  }
}


export function cloudfrontRealtimeLogConfigEndpointToHclTerraform(struct?: CloudfrontRealtimeLogConfigEndpointOutputReference | CloudfrontRealtimeLogConfigEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stream_type: {
      value: cdktf.stringToHclTerraform(struct!.streamType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesis_stream_config: {
      value: cloudfrontRealtimeLogConfigEndpointKinesisStreamConfigToHclTerraform(struct!.kinesisStreamConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontRealtimeLogConfigEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontRealtimeLogConfigEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._streamType !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamType = this._streamType;
    }
    if (this._kinesisStreamConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisStreamConfig = this._kinesisStreamConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontRealtimeLogConfigEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._streamType = undefined;
      this._kinesisStreamConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._streamType = value.streamType;
      this._kinesisStreamConfig.internalValue = value.kinesisStreamConfig;
    }
  }

  // stream_type - computed: false, optional: false, required: true
  private _streamType?: string; 
  public get streamType() {
    return this.getStringAttribute('stream_type');
  }
  public set streamType(value: string) {
    this._streamType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamTypeInput() {
    return this._streamType;
  }

  // kinesis_stream_config - computed: false, optional: false, required: true
  private _kinesisStreamConfig = new CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference(this, "kinesis_stream_config");
  public get kinesisStreamConfig() {
    return this._kinesisStreamConfig;
  }
  public putKinesisStreamConfig(value: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig) {
    this._kinesisStreamConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamConfigInput() {
    return this._kinesisStreamConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/cloudfront_realtime_log_config aws_cloudfront_realtime_log_config}
*/
export class CloudfrontRealtimeLogConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_realtime_log_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudfrontRealtimeLogConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudfrontRealtimeLogConfig to import
  * @param importFromId The id of the existing CloudfrontRealtimeLogConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/cloudfront_realtime_log_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudfrontRealtimeLogConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_realtime_log_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/cloudfront_realtime_log_config aws_cloudfront_realtime_log_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontRealtimeLogConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontRealtimeLogConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_realtime_log_config',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.31.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fields = config.fields;
    this._id = config.id;
    this._name = config.name;
    this._samplingRate = config.samplingRate;
    this._endpoint.internalValue = config.endpoint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // fields - computed: false, optional: false, required: true
  private _fields?: string[]; 
  public get fields() {
    return cdktf.Fn.tolist(this.getListAttribute('fields'));
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
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

  // sampling_rate - computed: false, optional: false, required: true
  private _samplingRate?: number; 
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
  public set samplingRate(value: number) {
    this._samplingRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRateInput() {
    return this._samplingRate;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint = new CloudfrontRealtimeLogConfigEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: CloudfrontRealtimeLogConfigEndpoint) {
    this._endpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fields),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      sampling_rate: cdktf.numberToTerraform(this._samplingRate),
      endpoint: cloudfrontRealtimeLogConfigEndpointToTerraform(this._endpoint.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fields),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_rate: {
        value: cdktf.numberToHclTerraform(this._samplingRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      endpoint: {
        value: cloudfrontRealtimeLogConfigEndpointToHclTerraform(this._endpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontRealtimeLogConfigEndpointList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
