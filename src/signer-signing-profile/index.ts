/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SignerSigningProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile#id SignerSigningProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile#name SignerSigningProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile#name_prefix SignerSigningProfile#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile#platform_id SignerSigningProfile#platform_id}
  */
  readonly platformId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile#region SignerSigningProfile#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile#tags SignerSigningProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile#tags_all SignerSigningProfile#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * signature_validity_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile#signature_validity_period SignerSigningProfile#signature_validity_period}
  */
  readonly signatureValidityPeriod?: SignerSigningProfileSignatureValidityPeriod;
  /**
  * signing_material block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile#signing_material SignerSigningProfile#signing_material}
  */
  readonly signingMaterial?: SignerSigningProfileSigningMaterial;
}
export interface SignerSigningProfileRevocationRecord {
}

export function signerSigningProfileRevocationRecordToTerraform(struct?: SignerSigningProfileRevocationRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function signerSigningProfileRevocationRecordToHclTerraform(struct?: SignerSigningProfileRevocationRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SignerSigningProfileRevocationRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SignerSigningProfileRevocationRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignerSigningProfileRevocationRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // revocation_effective_from - computed: true, optional: false, required: false
  public get revocationEffectiveFrom() {
    return this.getStringAttribute('revocation_effective_from');
  }

  // revoked_at - computed: true, optional: false, required: false
  public get revokedAt() {
    return this.getStringAttribute('revoked_at');
  }

  // revoked_by - computed: true, optional: false, required: false
  public get revokedBy() {
    return this.getStringAttribute('revoked_by');
  }
}

export class SignerSigningProfileRevocationRecordList extends cdktf.ComplexList {

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
  public get(index: number): SignerSigningProfileRevocationRecordOutputReference {
    return new SignerSigningProfileRevocationRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SignerSigningProfileSignatureValidityPeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile#type SignerSigningProfile#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile#value SignerSigningProfile#value}
  */
  readonly value: number;
}

export function signerSigningProfileSignatureValidityPeriodToTerraform(struct?: SignerSigningProfileSignatureValidityPeriodOutputReference | SignerSigningProfileSignatureValidityPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function signerSigningProfileSignatureValidityPeriodToHclTerraform(struct?: SignerSigningProfileSignatureValidityPeriodOutputReference | SignerSigningProfileSignatureValidityPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SignerSigningProfileSignatureValidityPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SignerSigningProfileSignatureValidityPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignerSigningProfileSignatureValidityPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SignerSigningProfileSigningMaterial {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile#certificate_arn SignerSigningProfile#certificate_arn}
  */
  readonly certificateArn: string;
}

export function signerSigningProfileSigningMaterialToTerraform(struct?: SignerSigningProfileSigningMaterialOutputReference | SignerSigningProfileSigningMaterial): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
  }
}


export function signerSigningProfileSigningMaterialToHclTerraform(struct?: SignerSigningProfileSigningMaterialOutputReference | SignerSigningProfileSigningMaterial): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_arn: {
      value: cdktf.stringToHclTerraform(struct!.certificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SignerSigningProfileSigningMaterialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SignerSigningProfileSigningMaterial | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignerSigningProfileSigningMaterial | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateArn = value.certificateArn;
    }
  }

  // certificate_arn - computed: false, optional: false, required: true
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile aws_signer_signing_profile}
*/
export class SignerSigningProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_signer_signing_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SignerSigningProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SignerSigningProfile to import
  * @param importFromId The id of the existing SignerSigningProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SignerSigningProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_signer_signing_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile aws_signer_signing_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SignerSigningProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SignerSigningProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_signer_signing_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._platformId = config.platformId;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._signatureValidityPeriod.internalValue = config.signatureValidityPeriod;
    this._signingMaterial.internalValue = config.signingMaterial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // platform_display_name - computed: true, optional: false, required: false
  public get platformDisplayName() {
    return this.getStringAttribute('platform_display_name');
  }

  // platform_id - computed: false, optional: false, required: true
  private _platformId?: string; 
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }
  public set platformId(value: string) {
    this._platformId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformIdInput() {
    return this._platformId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // revocation_record - computed: true, optional: false, required: false
  private _revocationRecord = new SignerSigningProfileRevocationRecordList(this, "revocation_record", false);
  public get revocationRecord() {
    return this._revocationRecord;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // version_arn - computed: true, optional: false, required: false
  public get versionArn() {
    return this.getStringAttribute('version_arn');
  }

  // signature_validity_period - computed: false, optional: true, required: false
  private _signatureValidityPeriod = new SignerSigningProfileSignatureValidityPeriodOutputReference(this, "signature_validity_period");
  public get signatureValidityPeriod() {
    return this._signatureValidityPeriod;
  }
  public putSignatureValidityPeriod(value: SignerSigningProfileSignatureValidityPeriod) {
    this._signatureValidityPeriod.internalValue = value;
  }
  public resetSignatureValidityPeriod() {
    this._signatureValidityPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureValidityPeriodInput() {
    return this._signatureValidityPeriod.internalValue;
  }

  // signing_material - computed: false, optional: true, required: false
  private _signingMaterial = new SignerSigningProfileSigningMaterialOutputReference(this, "signing_material");
  public get signingMaterial() {
    return this._signingMaterial;
  }
  public putSigningMaterial(value: SignerSigningProfileSigningMaterial) {
    this._signingMaterial.internalValue = value;
  }
  public resetSigningMaterial() {
    this._signingMaterial.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingMaterialInput() {
    return this._signingMaterial.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      platform_id: cdktf.stringToTerraform(this._platformId),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      signature_validity_period: signerSigningProfileSignatureValidityPeriodToTerraform(this._signatureValidityPeriod.internalValue),
      signing_material: signerSigningProfileSigningMaterialToTerraform(this._signingMaterial.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_id: {
        value: cdktf.stringToHclTerraform(this._platformId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      signature_validity_period: {
        value: signerSigningProfileSignatureValidityPeriodToHclTerraform(this._signatureValidityPeriod.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SignerSigningProfileSignatureValidityPeriodList",
      },
      signing_material: {
        value: signerSigningProfileSigningMaterialToHclTerraform(this._signingMaterial.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SignerSigningProfileSigningMaterialList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
