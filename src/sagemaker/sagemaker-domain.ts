// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS SageMaker
*/
export interface SagemakerDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_network_access_type SagemakerDomain#app_network_access_type}
  */
  readonly appNetworkAccessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#auth_mode SagemakerDomain#auth_mode}
  */
  readonly authMode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#domain_name SagemakerDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#id SagemakerDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#kms_key_id SagemakerDomain#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#subnet_ids SagemakerDomain#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#tags SagemakerDomain#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#tags_all SagemakerDomain#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#vpc_id SagemakerDomain#vpc_id}
  */
  readonly vpcId: string;
  /**
  * default_user_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_user_settings SagemakerDomain#default_user_settings}
  */
  readonly defaultUserSettings: SagemakerDomainDefaultUserSettings;
  /**
  * retention_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#retention_policy SagemakerDomain#retention_policy}
  */
  readonly retentionPolicy?: SagemakerDomainRetentionPolicy;
}
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}

export class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * default_resource_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
}

export function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterServerAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArns),
    default_resource_spec: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}

export class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lifecycleConfigArns = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktf.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_name SagemakerDomain#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}

export class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

  // app_image_config_name - computed: false, optional: false, required: true
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList extends cdktf.ComplexList {
  public internalValue? : SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable

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
  public get(index: number): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference {
    return new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}

export class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * custom_image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#custom_image SagemakerDomain#custom_image}
  */
  readonly customImage?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable;
  /**
  * default_resource_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}

export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArns),
    custom_image: cdktf.listMapper(sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform, true)(struct!.customImage),
    default_resource_spec: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}

export class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._customImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lifecycleConfigArns = undefined;
      this._customImage.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._customImage.internalValue = value.customImage;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktf.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerDomainDefaultUserSettingsSharingSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#notebook_output_option SagemakerDomain#notebook_output_option}
  */
  readonly notebookOutputOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#s3_kms_key_id SagemakerDomain#s3_kms_key_id}
  */
  readonly s3KmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#s3_output_path SagemakerDomain#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference | SagemakerDomainDefaultUserSettingsSharingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notebook_output_option: cdktf.stringToTerraform(struct!.notebookOutputOption),
    s3_kms_key_id: cdktf.stringToTerraform(struct!.s3KmsKeyId),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}

export class SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsSharingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notebookOutputOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookOutputOption = this._notebookOutputOption;
    }
    if (this._s3KmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3KmsKeyId = this._s3KmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsSharingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notebookOutputOption = undefined;
      this._s3KmsKeyId = undefined;
      this._s3OutputPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notebookOutputOption = value.notebookOutputOption;
      this._s3KmsKeyId = value.s3KmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // notebook_output_option - computed: false, optional: true, required: false
  private _notebookOutputOption?: string; 
  public get notebookOutputOption() {
    return this.getStringAttribute('notebook_output_option');
  }
  public set notebookOutputOption(value: string) {
    this._notebookOutputOption = value;
  }
  public resetNotebookOutputOption() {
    this._notebookOutputOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookOutputOptionInput() {
    return this._notebookOutputOption;
  }

  // s3_kms_key_id - computed: false, optional: true, required: false
  private _s3KmsKeyId?: string; 
  public get s3KmsKeyId() {
    return this.getStringAttribute('s3_kms_key_id');
  }
  public set s3KmsKeyId(value: string) {
    this._s3KmsKeyId = value;
  }
  public resetS3KmsKeyId() {
    this._s3KmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KmsKeyIdInput() {
    return this._s3KmsKeyId;
  }

  // s3_output_path - computed: false, optional: true, required: false
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  public resetS3OutputPath() {
    this._s3OutputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}
export interface SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}

export class SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerDomainDefaultUserSettingsTensorBoardAppSettings {
  /**
  * default_resource_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec;
}

export function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsTensorBoardAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_resource_spec: sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}

export class SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerDomainDefaultUserSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#execution_role SagemakerDomain#execution_role}
  */
  readonly executionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#security_groups SagemakerDomain#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * jupyter_server_app_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#jupyter_server_app_settings SagemakerDomain#jupyter_server_app_settings}
  */
  readonly jupyterServerAppSettings?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings;
  /**
  * kernel_gateway_app_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#kernel_gateway_app_settings SagemakerDomain#kernel_gateway_app_settings}
  */
  readonly kernelGatewayAppSettings?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings;
  /**
  * sharing_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sharing_settings SagemakerDomain#sharing_settings}
  */
  readonly sharingSettings?: SagemakerDomainDefaultUserSettingsSharingSettings;
  /**
  * tensor_board_app_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#tensor_board_app_settings SagemakerDomain#tensor_board_app_settings}
  */
  readonly tensorBoardAppSettings?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings;
}

export function sagemakerDomainDefaultUserSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsOutputReference | SagemakerDomainDefaultUserSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_role: cdktf.stringToTerraform(struct!.executionRole),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    jupyter_server_app_settings: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct!.jupyterServerAppSettings),
    kernel_gateway_app_settings: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct!.kernelGatewayAppSettings),
    sharing_settings: sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct!.sharingSettings),
    tensor_board_app_settings: sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform(struct!.tensorBoardAppSettings),
  }
}

export class SagemakerDomainDefaultUserSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRole = this._executionRole;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._jupyterServerAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jupyterServerAppSettings = this._jupyterServerAppSettings?.internalValue;
    }
    if (this._kernelGatewayAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelGatewayAppSettings = this._kernelGatewayAppSettings?.internalValue;
    }
    if (this._sharingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharingSettings = this._sharingSettings?.internalValue;
    }
    if (this._tensorBoardAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tensorBoardAppSettings = this._tensorBoardAppSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executionRole = undefined;
      this._securityGroups = undefined;
      this._jupyterServerAppSettings.internalValue = undefined;
      this._kernelGatewayAppSettings.internalValue = undefined;
      this._sharingSettings.internalValue = undefined;
      this._tensorBoardAppSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executionRole = value.executionRole;
      this._securityGroups = value.securityGroups;
      this._jupyterServerAppSettings.internalValue = value.jupyterServerAppSettings;
      this._kernelGatewayAppSettings.internalValue = value.kernelGatewayAppSettings;
      this._sharingSettings.internalValue = value.sharingSettings;
      this._tensorBoardAppSettings.internalValue = value.tensorBoardAppSettings;
    }
  }

  // execution_role - computed: false, optional: false, required: true
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // jupyter_server_app_settings - computed: false, optional: true, required: false
  private _jupyterServerAppSettings = new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference(this, "jupyter_server_app_settings");
  public get jupyterServerAppSettings() {
    return this._jupyterServerAppSettings;
  }
  public putJupyterServerAppSettings(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings) {
    this._jupyterServerAppSettings.internalValue = value;
  }
  public resetJupyterServerAppSettings() {
    this._jupyterServerAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterServerAppSettingsInput() {
    return this._jupyterServerAppSettings.internalValue;
  }

  // kernel_gateway_app_settings - computed: false, optional: true, required: false
  private _kernelGatewayAppSettings = new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference(this, "kernel_gateway_app_settings");
  public get kernelGatewayAppSettings() {
    return this._kernelGatewayAppSettings;
  }
  public putKernelGatewayAppSettings(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings) {
    this._kernelGatewayAppSettings.internalValue = value;
  }
  public resetKernelGatewayAppSettings() {
    this._kernelGatewayAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelGatewayAppSettingsInput() {
    return this._kernelGatewayAppSettings.internalValue;
  }

  // sharing_settings - computed: false, optional: true, required: false
  private _sharingSettings = new SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference(this, "sharing_settings");
  public get sharingSettings() {
    return this._sharingSettings;
  }
  public putSharingSettings(value: SagemakerDomainDefaultUserSettingsSharingSettings) {
    this._sharingSettings.internalValue = value;
  }
  public resetSharingSettings() {
    this._sharingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingSettingsInput() {
    return this._sharingSettings.internalValue;
  }

  // tensor_board_app_settings - computed: false, optional: true, required: false
  private _tensorBoardAppSettings = new SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference(this, "tensor_board_app_settings");
  public get tensorBoardAppSettings() {
    return this._tensorBoardAppSettings;
  }
  public putTensorBoardAppSettings(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings) {
    this._tensorBoardAppSettings.internalValue = value;
  }
  public resetTensorBoardAppSettings() {
    this._tensorBoardAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tensorBoardAppSettingsInput() {
    return this._tensorBoardAppSettings.internalValue;
  }
}
export interface SagemakerDomainRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#home_efs_file_system SagemakerDomain#home_efs_file_system}
  */
  readonly homeEfsFileSystem?: string;
}

export function sagemakerDomainRetentionPolicyToTerraform(struct?: SagemakerDomainRetentionPolicyOutputReference | SagemakerDomainRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    home_efs_file_system: cdktf.stringToTerraform(struct!.homeEfsFileSystem),
  }
}

export class SagemakerDomainRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._homeEfsFileSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.homeEfsFileSystem = this._homeEfsFileSystem;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._homeEfsFileSystem = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._homeEfsFileSystem = value.homeEfsFileSystem;
    }
  }

  // home_efs_file_system - computed: false, optional: true, required: false
  private _homeEfsFileSystem?: string; 
  public get homeEfsFileSystem() {
    return this.getStringAttribute('home_efs_file_system');
  }
  public set homeEfsFileSystem(value: string) {
    this._homeEfsFileSystem = value;
  }
  public resetHomeEfsFileSystem() {
    this._homeEfsFileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeEfsFileSystemInput() {
    return this._homeEfsFileSystem;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain aws_sagemaker_domain}
*/
export class SagemakerDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain aws_sagemaker_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerDomainConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_domain',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.30.0',
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
    this._appNetworkAccessType = config.appNetworkAccessType;
    this._authMode = config.authMode;
    this._domainName = config.domainName;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vpcId = config.vpcId;
    this._defaultUserSettings.internalValue = config.defaultUserSettings;
    this._retentionPolicy.internalValue = config.retentionPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_network_access_type - computed: false, optional: true, required: false
  private _appNetworkAccessType?: string; 
  public get appNetworkAccessType() {
    return this.getStringAttribute('app_network_access_type');
  }
  public set appNetworkAccessType(value: string) {
    this._appNetworkAccessType = value;
  }
  public resetAppNetworkAccessType() {
    this._appNetworkAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNetworkAccessTypeInput() {
    return this._appNetworkAccessType;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auth_mode - computed: false, optional: false, required: true
  private _authMode?: string; 
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }
  public set authMode(value: string) {
    this._authMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeInput() {
    return this._authMode;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // home_efs_file_system_id - computed: true, optional: false, required: false
  public get homeEfsFileSystemId() {
    return this.getStringAttribute('home_efs_file_system_id');
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

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // single_sign_on_managed_application_instance_id - computed: true, optional: false, required: false
  public get singleSignOnManagedApplicationInstanceId() {
    return this.getStringAttribute('single_sign_on_managed_application_instance_id');
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // default_user_settings - computed: false, optional: false, required: true
  private _defaultUserSettings = new SagemakerDomainDefaultUserSettingsOutputReference(this, "default_user_settings");
  public get defaultUserSettings() {
    return this._defaultUserSettings;
  }
  public putDefaultUserSettings(value: SagemakerDomainDefaultUserSettings) {
    this._defaultUserSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserSettingsInput() {
    return this._defaultUserSettings.internalValue;
  }

  // retention_policy - computed: false, optional: true, required: false
  private _retentionPolicy = new SagemakerDomainRetentionPolicyOutputReference(this, "retention_policy");
  public get retentionPolicy() {
    return this._retentionPolicy;
  }
  public putRetentionPolicy(value: SagemakerDomainRetentionPolicy) {
    this._retentionPolicy.internalValue = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_network_access_type: cdktf.stringToTerraform(this._appNetworkAccessType),
      auth_mode: cdktf.stringToTerraform(this._authMode),
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      default_user_settings: sagemakerDomainDefaultUserSettingsToTerraform(this._defaultUserSettings.internalValue),
      retention_policy: sagemakerDomainRetentionPolicyToTerraform(this._retentionPolicy.internalValue),
    };
  }
}
