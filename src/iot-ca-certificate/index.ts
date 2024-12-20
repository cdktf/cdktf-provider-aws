/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/iot_ca_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotCaCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/iot_ca_certificate#active IotCaCertificate#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/iot_ca_certificate#allow_auto_registration IotCaCertificate#allow_auto_registration}
  */
  readonly allowAutoRegistration: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/iot_ca_certificate#ca_certificate_pem IotCaCertificate#ca_certificate_pem}
  */
  readonly caCertificatePem: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/iot_ca_certificate#certificate_mode IotCaCertificate#certificate_mode}
  */
  readonly certificateMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/iot_ca_certificate#id IotCaCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/iot_ca_certificate#tags IotCaCertificate#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/iot_ca_certificate#tags_all IotCaCertificate#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/iot_ca_certificate#verification_certificate_pem IotCaCertificate#verification_certificate_pem}
  */
  readonly verificationCertificatePem?: string;
  /**
  * registration_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/iot_ca_certificate#registration_config IotCaCertificate#registration_config}
  */
  readonly registrationConfig?: IotCaCertificateRegistrationConfig;
}
export interface IotCaCertificateValidity {
}

export function iotCaCertificateValidityToTerraform(struct?: IotCaCertificateValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function iotCaCertificateValidityToHclTerraform(struct?: IotCaCertificateValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IotCaCertificateValidityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IotCaCertificateValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotCaCertificateValidity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }
}

export class IotCaCertificateValidityList extends cdktf.ComplexList {

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
  public get(index: number): IotCaCertificateValidityOutputReference {
    return new IotCaCertificateValidityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotCaCertificateRegistrationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/iot_ca_certificate#role_arn IotCaCertificate#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/iot_ca_certificate#template_body IotCaCertificate#template_body}
  */
  readonly templateBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/iot_ca_certificate#template_name IotCaCertificate#template_name}
  */
  readonly templateName?: string;
}

export function iotCaCertificateRegistrationConfigToTerraform(struct?: IotCaCertificateRegistrationConfigOutputReference | IotCaCertificateRegistrationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    template_body: cdktf.stringToTerraform(struct!.templateBody),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function iotCaCertificateRegistrationConfigToHclTerraform(struct?: IotCaCertificateRegistrationConfigOutputReference | IotCaCertificateRegistrationConfig): any {
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
    template_body: {
      value: cdktf.stringToHclTerraform(struct!.templateBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotCaCertificateRegistrationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotCaCertificateRegistrationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._templateBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateBody = this._templateBody;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotCaCertificateRegistrationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleArn = undefined;
      this._templateBody = undefined;
      this._templateName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleArn = value.roleArn;
      this._templateBody = value.templateBody;
      this._templateName = value.templateName;
    }
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/iot_ca_certificate aws_iot_ca_certificate}
*/
export class IotCaCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iot_ca_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IotCaCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotCaCertificate to import
  * @param importFromId The id of the existing IotCaCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/iot_ca_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotCaCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_iot_ca_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/iot_ca_certificate aws_iot_ca_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotCaCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: IotCaCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_ca_certificate',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.82.1',
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
    this._active = config.active;
    this._allowAutoRegistration = config.allowAutoRegistration;
    this._caCertificatePem = config.caCertificatePem;
    this._certificateMode = config.certificateMode;
    this._id = config.id;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._verificationCertificatePem = config.verificationCertificatePem;
    this._registrationConfig.internalValue = config.registrationConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // allow_auto_registration - computed: false, optional: false, required: true
  private _allowAutoRegistration?: boolean | cdktf.IResolvable; 
  public get allowAutoRegistration() {
    return this.getBooleanAttribute('allow_auto_registration');
  }
  public set allowAutoRegistration(value: boolean | cdktf.IResolvable) {
    this._allowAutoRegistration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAutoRegistrationInput() {
    return this._allowAutoRegistration;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // ca_certificate_pem - computed: false, optional: false, required: true
  private _caCertificatePem?: string; 
  public get caCertificatePem() {
    return this.getStringAttribute('ca_certificate_pem');
  }
  public set caCertificatePem(value: string) {
    this._caCertificatePem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatePemInput() {
    return this._caCertificatePem;
  }

  // certificate_mode - computed: false, optional: true, required: false
  private _certificateMode?: string; 
  public get certificateMode() {
    return this.getStringAttribute('certificate_mode');
  }
  public set certificateMode(value: string) {
    this._certificateMode = value;
  }
  public resetCertificateMode() {
    this._certificateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateModeInput() {
    return this._certificateMode;
  }

  // customer_version - computed: true, optional: false, required: false
  public get customerVersion() {
    return this.getNumberAttribute('customer_version');
  }

  // generation_id - computed: true, optional: false, required: false
  public get generationId() {
    return this.getStringAttribute('generation_id');
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

  // validity - computed: true, optional: false, required: false
  private _validity = new IotCaCertificateValidityList(this, "validity", false);
  public get validity() {
    return this._validity;
  }

  // verification_certificate_pem - computed: false, optional: true, required: false
  private _verificationCertificatePem?: string; 
  public get verificationCertificatePem() {
    return this.getStringAttribute('verification_certificate_pem');
  }
  public set verificationCertificatePem(value: string) {
    this._verificationCertificatePem = value;
  }
  public resetVerificationCertificatePem() {
    this._verificationCertificatePem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationCertificatePemInput() {
    return this._verificationCertificatePem;
  }

  // registration_config - computed: false, optional: true, required: false
  private _registrationConfig = new IotCaCertificateRegistrationConfigOutputReference(this, "registration_config");
  public get registrationConfig() {
    return this._registrationConfig;
  }
  public putRegistrationConfig(value: IotCaCertificateRegistrationConfig) {
    this._registrationConfig.internalValue = value;
  }
  public resetRegistrationConfig() {
    this._registrationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationConfigInput() {
    return this._registrationConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      allow_auto_registration: cdktf.booleanToTerraform(this._allowAutoRegistration),
      ca_certificate_pem: cdktf.stringToTerraform(this._caCertificatePem),
      certificate_mode: cdktf.stringToTerraform(this._certificateMode),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      verification_certificate_pem: cdktf.stringToTerraform(this._verificationCertificatePem),
      registration_config: iotCaCertificateRegistrationConfigToTerraform(this._registrationConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_auto_registration: {
        value: cdktf.booleanToHclTerraform(this._allowAutoRegistration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ca_certificate_pem: {
        value: cdktf.stringToHclTerraform(this._caCertificatePem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_mode: {
        value: cdktf.stringToHclTerraform(this._certificateMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      verification_certificate_pem: {
        value: cdktf.stringToHclTerraform(this._verificationCertificatePem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registration_config: {
        value: iotCaCertificateRegistrationConfigToHclTerraform(this._registrationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotCaCertificateRegistrationConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
