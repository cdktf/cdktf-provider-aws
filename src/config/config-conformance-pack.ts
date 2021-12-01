// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Config
*/
export interface ConfigConformancePackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#delivery_s3_bucket ConfigConformancePack#delivery_s3_bucket}
  */
  readonly deliveryS3Bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#delivery_s3_key_prefix ConfigConformancePack#delivery_s3_key_prefix}
  */
  readonly deliveryS3KeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#name ConfigConformancePack#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#template_body ConfigConformancePack#template_body}
  */
  readonly templateBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#template_s3_uri ConfigConformancePack#template_s3_uri}
  */
  readonly templateS3Uri?: string;
  /**
  * input_parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#input_parameter ConfigConformancePack#input_parameter}
  */
  readonly inputParameter?: ConfigConformancePackInputParameter[];
}
export interface ConfigConformancePackInputParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#parameter_name ConfigConformancePack#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#parameter_value ConfigConformancePack#parameter_value}
  */
  readonly parameterValue: string;
}

export function configConformancePackInputParameterToTerraform(struct?: ConfigConformancePackInputParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html aws_config_conformance_pack}
*/
export class ConfigConformancePack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_config_conformance_pack";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html aws_config_conformance_pack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigConformancePackConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigConformancePackConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_conformance_pack',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deliveryS3Bucket = config.deliveryS3Bucket;
    this._deliveryS3KeyPrefix = config.deliveryS3KeyPrefix;
    this._name = config.name;
    this._templateBody = config.templateBody;
    this._templateS3Uri = config.templateS3Uri;
    this._inputParameter = config.inputParameter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // delivery_s3_bucket - computed: false, optional: true, required: false
  private _deliveryS3Bucket?: string; 
  public get deliveryS3Bucket() {
    return this.getStringAttribute('delivery_s3_bucket');
  }
  public set deliveryS3Bucket(value: string) {
    this._deliveryS3Bucket = value;
  }
  public resetDeliveryS3Bucket() {
    this._deliveryS3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryS3BucketInput() {
    return this._deliveryS3Bucket;
  }

  // delivery_s3_key_prefix - computed: false, optional: true, required: false
  private _deliveryS3KeyPrefix?: string; 
  public get deliveryS3KeyPrefix() {
    return this.getStringAttribute('delivery_s3_key_prefix');
  }
  public set deliveryS3KeyPrefix(value: string) {
    this._deliveryS3KeyPrefix = value;
  }
  public resetDeliveryS3KeyPrefix() {
    this._deliveryS3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryS3KeyPrefixInput() {
    return this._deliveryS3KeyPrefix;
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

  // template_body - computed: false, optional: true, required: false
  private _templateBody?: string; 
  public get templateBody() {
    return this.getStringAttribute('template_body');
  }
  public set templateBody(value: string) {
    this._templateBody = value;
  }
  public resetTemplateBody() {
    this._templateBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateBodyInput() {
    return this._templateBody;
  }

  // template_s3_uri - computed: false, optional: true, required: false
  private _templateS3Uri?: string; 
  public get templateS3Uri() {
    return this.getStringAttribute('template_s3_uri');
  }
  public set templateS3Uri(value: string) {
    this._templateS3Uri = value;
  }
  public resetTemplateS3Uri() {
    this._templateS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateS3UriInput() {
    return this._templateS3Uri;
  }

  // input_parameter - computed: false, optional: true, required: false
  private _inputParameter?: ConfigConformancePackInputParameter[]; 
  public get inputParameter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('input_parameter') as any;
  }
  public set inputParameter(value: ConfigConformancePackInputParameter[]) {
    this._inputParameter = value;
  }
  public resetInputParameter() {
    this._inputParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputParameterInput() {
    return this._inputParameter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delivery_s3_bucket: cdktf.stringToTerraform(this._deliveryS3Bucket),
      delivery_s3_key_prefix: cdktf.stringToTerraform(this._deliveryS3KeyPrefix),
      name: cdktf.stringToTerraform(this._name),
      template_body: cdktf.stringToTerraform(this._templateBody),
      template_s3_uri: cdktf.stringToTerraform(this._templateS3Uri),
      input_parameter: cdktf.listMapper(configConformancePackInputParameterToTerraform)(this._inputParameter),
    };
  }
}
