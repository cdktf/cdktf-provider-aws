// https://www.terraform.io/docs/providers/aws/r/config_conformance_pack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigConformancePackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#delivery_s3_bucket ConfigConformancePack#delivery_s3_bucket}
  */
  readonly deliveryS3Bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#delivery_s3_key_prefix ConfigConformancePack#delivery_s3_key_prefix}
  */
  readonly deliveryS3KeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#id ConfigConformancePack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#name ConfigConformancePack#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#template_body ConfigConformancePack#template_body}
  */
  readonly templateBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#template_s3_uri ConfigConformancePack#template_s3_uri}
  */
  readonly templateS3Uri?: string;
  /**
  * input_parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#input_parameter ConfigConformancePack#input_parameter}
  */
  readonly inputParameter?: ConfigConformancePackInputParameter[] | cdktf.IResolvable;
}
export interface ConfigConformancePackInputParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#parameter_name ConfigConformancePack#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#parameter_value ConfigConformancePack#parameter_value}
  */
  readonly parameterValue: string;
}

export function configConformancePackInputParameterToTerraform(struct?: ConfigConformancePackInputParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export class ConfigConformancePackInputParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConfigConformancePackInputParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConformancePackInputParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class ConfigConformancePackInputParameterList extends cdktf.ComplexList {
  public internalValue? : ConfigConformancePackInputParameter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConfigConformancePackInputParameterOutputReference {
    return new ConfigConformancePackInputParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack aws_config_conformance_pack}
*/
export class ConfigConformancePack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_config_conformance_pack";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack aws_config_conformance_pack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigConformancePackConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigConformancePackConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_conformance_pack',
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
    this._deliveryS3Bucket = config.deliveryS3Bucket;
    this._deliveryS3KeyPrefix = config.deliveryS3KeyPrefix;
    this._id = config.id;
    this._name = config.name;
    this._templateBody = config.templateBody;
    this._templateS3Uri = config.templateS3Uri;
    this._inputParameter.internalValue = config.inputParameter;
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
  private _inputParameter = new ConfigConformancePackInputParameterList(this, "input_parameter", true);
  public get inputParameter() {
    return this._inputParameter;
  }
  public putInputParameter(value: ConfigConformancePackInputParameter[] | cdktf.IResolvable) {
    this._inputParameter.internalValue = value;
  }
  public resetInputParameter() {
    this._inputParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputParameterInput() {
    return this._inputParameter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delivery_s3_bucket: cdktf.stringToTerraform(this._deliveryS3Bucket),
      delivery_s3_key_prefix: cdktf.stringToTerraform(this._deliveryS3KeyPrefix),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      template_body: cdktf.stringToTerraform(this._templateBody),
      template_s3_uri: cdktf.stringToTerraform(this._templateS3Uri),
      input_parameter: cdktf.listMapper(configConformancePackInputParameterToTerraform, true)(this._inputParameter.internalValue),
    };
  }
}
