/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/iot_domain_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotDomainConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/iot_domain_configuration#domain_name IotDomainConfiguration#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/iot_domain_configuration#id IotDomainConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/iot_domain_configuration#name IotDomainConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/iot_domain_configuration#server_certificate_arns IotDomainConfiguration#server_certificate_arns}
  */
  readonly serverCertificateArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/iot_domain_configuration#service_type IotDomainConfiguration#service_type}
  */
  readonly serviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/iot_domain_configuration#status IotDomainConfiguration#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/iot_domain_configuration#tags IotDomainConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/iot_domain_configuration#tags_all IotDomainConfiguration#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/iot_domain_configuration#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}
  */
  readonly validationCertificateArn?: string;
  /**
  * authorizer_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/iot_domain_configuration#authorizer_config IotDomainConfiguration#authorizer_config}
  */
  readonly authorizerConfig?: IotDomainConfigurationAuthorizerConfig;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/iot_domain_configuration#tls_config IotDomainConfiguration#tls_config}
  */
  readonly tlsConfig?: IotDomainConfigurationTlsConfig;
}
export interface IotDomainConfigurationAuthorizerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/iot_domain_configuration#allow_authorizer_override IotDomainConfiguration#allow_authorizer_override}
  */
  readonly allowAuthorizerOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/iot_domain_configuration#default_authorizer_name IotDomainConfiguration#default_authorizer_name}
  */
  readonly defaultAuthorizerName?: string;
}

export function iotDomainConfigurationAuthorizerConfigToTerraform(struct?: IotDomainConfigurationAuthorizerConfigOutputReference | IotDomainConfigurationAuthorizerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_authorizer_override: cdktf.booleanToTerraform(struct!.allowAuthorizerOverride),
    default_authorizer_name: cdktf.stringToTerraform(struct!.defaultAuthorizerName),
  }
}


export function iotDomainConfigurationAuthorizerConfigToHclTerraform(struct?: IotDomainConfigurationAuthorizerConfigOutputReference | IotDomainConfigurationAuthorizerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_authorizer_override: {
      value: cdktf.booleanToHclTerraform(struct!.allowAuthorizerOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_authorizer_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultAuthorizerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotDomainConfigurationAuthorizerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotDomainConfigurationAuthorizerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAuthorizerOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAuthorizerOverride = this._allowAuthorizerOverride;
    }
    if (this._defaultAuthorizerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAuthorizerName = this._defaultAuthorizerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotDomainConfigurationAuthorizerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAuthorizerOverride = undefined;
      this._defaultAuthorizerName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAuthorizerOverride = value.allowAuthorizerOverride;
      this._defaultAuthorizerName = value.defaultAuthorizerName;
    }
  }

  // allow_authorizer_override - computed: false, optional: true, required: false
  private _allowAuthorizerOverride?: boolean | cdktf.IResolvable; 
  public get allowAuthorizerOverride() {
    return this.getBooleanAttribute('allow_authorizer_override');
  }
  public set allowAuthorizerOverride(value: boolean | cdktf.IResolvable) {
    this._allowAuthorizerOverride = value;
  }
  public resetAllowAuthorizerOverride() {
    this._allowAuthorizerOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAuthorizerOverrideInput() {
    return this._allowAuthorizerOverride;
  }

  // default_authorizer_name - computed: false, optional: true, required: false
  private _defaultAuthorizerName?: string; 
  public get defaultAuthorizerName() {
    return this.getStringAttribute('default_authorizer_name');
  }
  public set defaultAuthorizerName(value: string) {
    this._defaultAuthorizerName = value;
  }
  public resetDefaultAuthorizerName() {
    this._defaultAuthorizerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAuthorizerNameInput() {
    return this._defaultAuthorizerName;
  }
}
export interface IotDomainConfigurationTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/iot_domain_configuration#security_policy IotDomainConfiguration#security_policy}
  */
  readonly securityPolicy?: string;
}

export function iotDomainConfigurationTlsConfigToTerraform(struct?: IotDomainConfigurationTlsConfigOutputReference | IotDomainConfigurationTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_policy: cdktf.stringToTerraform(struct!.securityPolicy),
  }
}


export function iotDomainConfigurationTlsConfigToHclTerraform(struct?: IotDomainConfigurationTlsConfigOutputReference | IotDomainConfigurationTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_policy: {
      value: cdktf.stringToHclTerraform(struct!.securityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotDomainConfigurationTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotDomainConfigurationTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityPolicy = this._securityPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotDomainConfigurationTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityPolicy = value.securityPolicy;
    }
  }

  // security_policy - computed: true, optional: true, required: false
  private _securityPolicy?: string; 
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string) {
    this._securityPolicy = value;
  }
  public resetSecurityPolicy() {
    this._securityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/iot_domain_configuration aws_iot_domain_configuration}
*/
export class IotDomainConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iot_domain_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IotDomainConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotDomainConfiguration to import
  * @param importFromId The id of the existing IotDomainConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/iot_domain_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotDomainConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_iot_domain_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/iot_domain_configuration aws_iot_domain_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotDomainConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: IotDomainConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_domain_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.72.0',
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
    this._domainName = config.domainName;
    this._id = config.id;
    this._name = config.name;
    this._serverCertificateArns = config.serverCertificateArns;
    this._serviceType = config.serviceType;
    this._status = config.status;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._validationCertificateArn = config.validationCertificateArn;
    this._authorizerConfig.internalValue = config.authorizerConfig;
    this._tlsConfig.internalValue = config.tlsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_type - computed: true, optional: false, required: false
  public get domainType() {
    return this.getStringAttribute('domain_type');
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

  // server_certificate_arns - computed: false, optional: true, required: false
  private _serverCertificateArns?: string[]; 
  public get serverCertificateArns() {
    return cdktf.Fn.tolist(this.getListAttribute('server_certificate_arns'));
  }
  public set serverCertificateArns(value: string[]) {
    this._serverCertificateArns = value;
  }
  public resetServerCertificateArns() {
    this._serverCertificateArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateArnsInput() {
    return this._serverCertificateArns;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // validation_certificate_arn - computed: false, optional: true, required: false
  private _validationCertificateArn?: string; 
  public get validationCertificateArn() {
    return this.getStringAttribute('validation_certificate_arn');
  }
  public set validationCertificateArn(value: string) {
    this._validationCertificateArn = value;
  }
  public resetValidationCertificateArn() {
    this._validationCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationCertificateArnInput() {
    return this._validationCertificateArn;
  }

  // authorizer_config - computed: false, optional: true, required: false
  private _authorizerConfig = new IotDomainConfigurationAuthorizerConfigOutputReference(this, "authorizer_config");
  public get authorizerConfig() {
    return this._authorizerConfig;
  }
  public putAuthorizerConfig(value: IotDomainConfigurationAuthorizerConfig) {
    this._authorizerConfig.internalValue = value;
  }
  public resetAuthorizerConfig() {
    this._authorizerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerConfigInput() {
    return this._authorizerConfig.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new IotDomainConfigurationTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: IotDomainConfigurationTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      server_certificate_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverCertificateArns),
      service_type: cdktf.stringToTerraform(this._serviceType),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      validation_certificate_arn: cdktf.stringToTerraform(this._validationCertificateArn),
      authorizer_config: iotDomainConfigurationAuthorizerConfigToTerraform(this._authorizerConfig.internalValue),
      tls_config: iotDomainConfigurationTlsConfigToTerraform(this._tlsConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_certificate_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverCertificateArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      validation_certificate_arn: {
        value: cdktf.stringToHclTerraform(this._validationCertificateArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorizer_config: {
        value: iotDomainConfigurationAuthorizerConfigToHclTerraform(this._authorizerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotDomainConfigurationAuthorizerConfigList",
      },
      tls_config: {
        value: iotDomainConfigurationTlsConfigToHclTerraform(this._tlsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotDomainConfigurationTlsConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
