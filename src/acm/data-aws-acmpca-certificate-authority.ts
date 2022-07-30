// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* Amazon Certificate Manager
*/
export interface DataAwsAcmpcaCertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#arn DataAwsAcmpcaCertificateAuthority#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#id DataAwsAcmpcaCertificateAuthority#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#tags DataAwsAcmpcaCertificateAuthority#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * revocation_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#revocation_configuration DataAwsAcmpcaCertificateAuthority#revocation_configuration}
  */
  readonly revocationConfiguration?: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration[] | cdktf.IResolvable;
}
export interface DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration {
}

export function dataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct?: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // custom_cname - computed: true, optional: false, required: false
  public get customCname() {
    return this.getStringAttribute('custom_cname');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // expiration_in_days - computed: true, optional: false, required: false
  public get expirationInDays() {
    return this.getNumberAttribute('expiration_in_days');
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }

  // s3_object_acl - computed: true, optional: false, required: false
  public get s3ObjectAcl() {
    return this.getStringAttribute('s3_object_acl');
  }
}

export class DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList extends cdktf.ComplexList {
  public internalValue? : DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference {
    return new DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration {
}

export function dataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationToTerraform(struct?: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // ocsp_custom_cname - computed: true, optional: false, required: false
  public get ocspCustomCname() {
    return this.getStringAttribute('ocsp_custom_cname');
  }
}

export class DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList extends cdktf.ComplexList {
  public internalValue? : DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference {
    return new DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsAcmpcaCertificateAuthorityRevocationConfiguration {
  /**
  * crl_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#crl_configuration DataAwsAcmpcaCertificateAuthority#crl_configuration}
  */
  readonly crlConfiguration?: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration[] | cdktf.IResolvable;
  /**
  * ocsp_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#ocsp_configuration DataAwsAcmpcaCertificateAuthority#ocsp_configuration}
  */
  readonly ocspConfiguration?: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration[] | cdktf.IResolvable;
}

export function dataAwsAcmpcaCertificateAuthorityRevocationConfigurationToTerraform(struct?: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crl_configuration: cdktf.listMapper(dataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform, true)(struct!.crlConfiguration),
    ocsp_configuration: cdktf.listMapper(dataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationToTerraform, true)(struct!.ocspConfiguration),
  }
}

export class DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsAcmpcaCertificateAuthorityRevocationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crlConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlConfiguration = this._crlConfiguration?.internalValue;
    }
    if (this._ocspConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspConfiguration = this._ocspConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crlConfiguration.internalValue = undefined;
      this._ocspConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crlConfiguration.internalValue = value.crlConfiguration;
      this._ocspConfiguration.internalValue = value.ocspConfiguration;
    }
  }

  // crl_configuration - computed: false, optional: true, required: false
  private _crlConfiguration = new DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList(this, "crl_configuration", false);
  public get crlConfiguration() {
    return this._crlConfiguration;
  }
  public putCrlConfiguration(value: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration[] | cdktf.IResolvable) {
    this._crlConfiguration.internalValue = value;
  }
  public resetCrlConfiguration() {
    this._crlConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlConfigurationInput() {
    return this._crlConfiguration.internalValue;
  }

  // ocsp_configuration - computed: false, optional: true, required: false
  private _ocspConfiguration = new DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList(this, "ocsp_configuration", false);
  public get ocspConfiguration() {
    return this._ocspConfiguration;
  }
  public putOcspConfiguration(value: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration[] | cdktf.IResolvable) {
    this._ocspConfiguration.internalValue = value;
  }
  public resetOcspConfiguration() {
    this._ocspConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspConfigurationInput() {
    return this._ocspConfiguration.internalValue;
  }
}

export class DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList extends cdktf.ComplexList {
  public internalValue? : DataAwsAcmpcaCertificateAuthorityRevocationConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference {
    return new DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority aws_acmpca_certificate_authority}
*/
export class DataAwsAcmpcaCertificateAuthority extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_acmpca_certificate_authority";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority aws_acmpca_certificate_authority} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsAcmpcaCertificateAuthorityConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsAcmpcaCertificateAuthorityConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_acmpca_certificate_authority',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.24.0',
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
    this._arn = config.arn;
    this._id = config.id;
    this._tags = config.tags;
    this._revocationConfiguration.internalValue = config.revocationConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // certificate_chain - computed: true, optional: false, required: false
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }

  // certificate_signing_request - computed: true, optional: false, required: false
  public get certificateSigningRequest() {
    return this.getStringAttribute('certificate_signing_request');
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

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // revocation_configuration - computed: false, optional: true, required: false
  private _revocationConfiguration = new DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList(this, "revocation_configuration", false);
  public get revocationConfiguration() {
    return this._revocationConfiguration;
  }
  public putRevocationConfiguration(value: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration[] | cdktf.IResolvable) {
    this._revocationConfiguration.internalValue = value;
  }
  public resetRevocationConfiguration() {
    this._revocationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationConfigurationInput() {
    return this._revocationConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      revocation_configuration: cdktf.listMapper(dataAwsAcmpcaCertificateAuthorityRevocationConfigurationToTerraform, true)(this._revocationConfiguration.internalValue),
    };
  }
}
