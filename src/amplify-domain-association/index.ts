/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/amplify_domain_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AmplifyDomainAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/amplify_domain_association#app_id AmplifyDomainAssociation#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/amplify_domain_association#domain_name AmplifyDomainAssociation#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/amplify_domain_association#enable_auto_sub_domain AmplifyDomainAssociation#enable_auto_sub_domain}
  */
  readonly enableAutoSubDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/amplify_domain_association#id AmplifyDomainAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/amplify_domain_association#wait_for_verification AmplifyDomainAssociation#wait_for_verification}
  */
  readonly waitForVerification?: boolean | cdktf.IResolvable;
  /**
  * certificate_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/amplify_domain_association#certificate_settings AmplifyDomainAssociation#certificate_settings}
  */
  readonly certificateSettings?: AmplifyDomainAssociationCertificateSettings;
  /**
  * sub_domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/amplify_domain_association#sub_domain AmplifyDomainAssociation#sub_domain}
  */
  readonly subDomain: AmplifyDomainAssociationSubDomain[] | cdktf.IResolvable;
}
export interface AmplifyDomainAssociationCertificateSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/amplify_domain_association#custom_certificate_arn AmplifyDomainAssociation#custom_certificate_arn}
  */
  readonly customCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/amplify_domain_association#type AmplifyDomainAssociation#type}
  */
  readonly type: string;
}

export function amplifyDomainAssociationCertificateSettingsToTerraform(struct?: AmplifyDomainAssociationCertificateSettingsOutputReference | AmplifyDomainAssociationCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_certificate_arn: cdktf.stringToTerraform(struct!.customCertificateArn),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function amplifyDomainAssociationCertificateSettingsToHclTerraform(struct?: AmplifyDomainAssociationCertificateSettingsOutputReference | AmplifyDomainAssociationCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_certificate_arn: {
      value: cdktf.stringToHclTerraform(struct!.customCertificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AmplifyDomainAssociationCertificateSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AmplifyDomainAssociationCertificateSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customCertificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCertificateArn = this._customCertificateArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmplifyDomainAssociationCertificateSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customCertificateArn = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customCertificateArn = value.customCertificateArn;
      this._type = value.type;
    }
  }

  // certificate_verification_dns_record - computed: true, optional: false, required: false
  public get certificateVerificationDnsRecord() {
    return this.getStringAttribute('certificate_verification_dns_record');
  }

  // custom_certificate_arn - computed: false, optional: true, required: false
  private _customCertificateArn?: string; 
  public get customCertificateArn() {
    return this.getStringAttribute('custom_certificate_arn');
  }
  public set customCertificateArn(value: string) {
    this._customCertificateArn = value;
  }
  public resetCustomCertificateArn() {
    this._customCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCertificateArnInput() {
    return this._customCertificateArn;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface AmplifyDomainAssociationSubDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/amplify_domain_association#branch_name AmplifyDomainAssociation#branch_name}
  */
  readonly branchName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/amplify_domain_association#prefix AmplifyDomainAssociation#prefix}
  */
  readonly prefix: string;
}

export function amplifyDomainAssociationSubDomainToTerraform(struct?: AmplifyDomainAssociationSubDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function amplifyDomainAssociationSubDomainToHclTerraform(struct?: AmplifyDomainAssociationSubDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch_name: {
      value: cdktf.stringToHclTerraform(struct!.branchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AmplifyDomainAssociationSubDomainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AmplifyDomainAssociationSubDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchName = this._branchName;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmplifyDomainAssociationSubDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branchName = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branchName = value.branchName;
      this._prefix = value.prefix;
    }
  }

  // branch_name - computed: false, optional: false, required: true
  private _branchName?: string; 
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }
  public set branchName(value: string) {
    this._branchName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameInput() {
    return this._branchName;
  }

  // dns_record - computed: true, optional: false, required: false
  public get dnsRecord() {
    return this.getStringAttribute('dns_record');
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // verified - computed: true, optional: false, required: false
  public get verified() {
    return this.getBooleanAttribute('verified');
  }
}

export class AmplifyDomainAssociationSubDomainList extends cdktf.ComplexList {
  public internalValue? : AmplifyDomainAssociationSubDomain[] | cdktf.IResolvable

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
  public get(index: number): AmplifyDomainAssociationSubDomainOutputReference {
    return new AmplifyDomainAssociationSubDomainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/amplify_domain_association aws_amplify_domain_association}
*/
export class AmplifyDomainAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_amplify_domain_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AmplifyDomainAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AmplifyDomainAssociation to import
  * @param importFromId The id of the existing AmplifyDomainAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/amplify_domain_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AmplifyDomainAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_amplify_domain_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/amplify_domain_association aws_amplify_domain_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AmplifyDomainAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: AmplifyDomainAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_amplify_domain_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.71.0',
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
    this._appId = config.appId;
    this._domainName = config.domainName;
    this._enableAutoSubDomain = config.enableAutoSubDomain;
    this._id = config.id;
    this._waitForVerification = config.waitForVerification;
    this._certificateSettings.internalValue = config.certificateSettings;
    this._subDomain.internalValue = config.subDomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_verification_dns_record - computed: true, optional: false, required: false
  public get certificateVerificationDnsRecord() {
    return this.getStringAttribute('certificate_verification_dns_record');
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

  // enable_auto_sub_domain - computed: false, optional: true, required: false
  private _enableAutoSubDomain?: boolean | cdktf.IResolvable; 
  public get enableAutoSubDomain() {
    return this.getBooleanAttribute('enable_auto_sub_domain');
  }
  public set enableAutoSubDomain(value: boolean | cdktf.IResolvable) {
    this._enableAutoSubDomain = value;
  }
  public resetEnableAutoSubDomain() {
    this._enableAutoSubDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoSubDomainInput() {
    return this._enableAutoSubDomain;
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

  // wait_for_verification - computed: false, optional: true, required: false
  private _waitForVerification?: boolean | cdktf.IResolvable; 
  public get waitForVerification() {
    return this.getBooleanAttribute('wait_for_verification');
  }
  public set waitForVerification(value: boolean | cdktf.IResolvable) {
    this._waitForVerification = value;
  }
  public resetWaitForVerification() {
    this._waitForVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForVerificationInput() {
    return this._waitForVerification;
  }

  // certificate_settings - computed: false, optional: true, required: false
  private _certificateSettings = new AmplifyDomainAssociationCertificateSettingsOutputReference(this, "certificate_settings");
  public get certificateSettings() {
    return this._certificateSettings;
  }
  public putCertificateSettings(value: AmplifyDomainAssociationCertificateSettings) {
    this._certificateSettings.internalValue = value;
  }
  public resetCertificateSettings() {
    this._certificateSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSettingsInput() {
    return this._certificateSettings.internalValue;
  }

  // sub_domain - computed: false, optional: false, required: true
  private _subDomain = new AmplifyDomainAssociationSubDomainList(this, "sub_domain", true);
  public get subDomain() {
    return this._subDomain;
  }
  public putSubDomain(value: AmplifyDomainAssociationSubDomain[] | cdktf.IResolvable) {
    this._subDomain.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subDomainInput() {
    return this._subDomain.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      domain_name: cdktf.stringToTerraform(this._domainName),
      enable_auto_sub_domain: cdktf.booleanToTerraform(this._enableAutoSubDomain),
      id: cdktf.stringToTerraform(this._id),
      wait_for_verification: cdktf.booleanToTerraform(this._waitForVerification),
      certificate_settings: amplifyDomainAssociationCertificateSettingsToTerraform(this._certificateSettings.internalValue),
      sub_domain: cdktf.listMapper(amplifyDomainAssociationSubDomainToTerraform, true)(this._subDomain.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_auto_sub_domain: {
        value: cdktf.booleanToHclTerraform(this._enableAutoSubDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_verification: {
        value: cdktf.booleanToHclTerraform(this._waitForVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate_settings: {
        value: amplifyDomainAssociationCertificateSettingsToHclTerraform(this._certificateSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AmplifyDomainAssociationCertificateSettingsList",
      },
      sub_domain: {
        value: cdktf.listMapperHcl(amplifyDomainAssociationSubDomainToHclTerraform, true)(this._subDomain.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AmplifyDomainAssociationSubDomainList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
