// https://www.terraform.io/docs/providers/aws/r/acm_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcmCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_authority_arn AcmCertificate#certificate_authority_arn}
  */
  readonly certificateAuthorityArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_body AcmCertificate#certificate_body}
  */
  readonly certificateBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_chain AcmCertificate#certificate_chain}
  */
  readonly certificateChain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#early_renewal_duration AcmCertificate#early_renewal_duration}
  */
  readonly earlyRenewalDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#id AcmCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#key_algorithm AcmCertificate#key_algorithm}
  */
  readonly keyAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#private_key AcmCertificate#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#subject_alternative_names AcmCertificate#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags AcmCertificate#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags_all AcmCertificate#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_method AcmCertificate#validation_method}
  */
  readonly validationMethod?: string;
  /**
  * options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#options AcmCertificate#options}
  */
  readonly options?: AcmCertificateOptions;
  /**
  * validation_option block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_option AcmCertificate#validation_option}
  */
  readonly validationOption?: AcmCertificateValidationOption[] | cdktf.IResolvable;
}
export interface AcmCertificateDomainValidationOptions {
}

export function acmCertificateDomainValidationOptionsToTerraform(struct?: AcmCertificateDomainValidationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class AcmCertificateDomainValidationOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AcmCertificateDomainValidationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcmCertificateDomainValidationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // resource_record_name - computed: true, optional: false, required: false
  public get resourceRecordName() {
    return this.getStringAttribute('resource_record_name');
  }

  // resource_record_type - computed: true, optional: false, required: false
  public get resourceRecordType() {
    return this.getStringAttribute('resource_record_type');
  }

  // resource_record_value - computed: true, optional: false, required: false
  public get resourceRecordValue() {
    return this.getStringAttribute('resource_record_value');
  }
}

export class AcmCertificateDomainValidationOptionsList extends cdktf.ComplexList {

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
  public get(index: number): AcmCertificateDomainValidationOptionsOutputReference {
    return new AcmCertificateDomainValidationOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AcmCertificateRenewalSummary {
}

export function acmCertificateRenewalSummaryToTerraform(struct?: AcmCertificateRenewalSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class AcmCertificateRenewalSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AcmCertificateRenewalSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcmCertificateRenewalSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // renewal_status - computed: true, optional: false, required: false
  public get renewalStatus() {
    return this.getStringAttribute('renewal_status');
  }

  // renewal_status_reason - computed: true, optional: false, required: false
  public get renewalStatusReason() {
    return this.getStringAttribute('renewal_status_reason');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class AcmCertificateRenewalSummaryList extends cdktf.ComplexList {

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
  public get(index: number): AcmCertificateRenewalSummaryOutputReference {
    return new AcmCertificateRenewalSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AcmCertificateOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_transparency_logging_preference AcmCertificate#certificate_transparency_logging_preference}
  */
  readonly certificateTransparencyLoggingPreference?: string;
}

export function acmCertificateOptionsToTerraform(struct?: AcmCertificateOptionsOutputReference | AcmCertificateOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_transparency_logging_preference: cdktf.stringToTerraform(struct!.certificateTransparencyLoggingPreference),
  }
}

export class AcmCertificateOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AcmCertificateOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateTransparencyLoggingPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateTransparencyLoggingPreference = this._certificateTransparencyLoggingPreference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcmCertificateOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateTransparencyLoggingPreference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateTransparencyLoggingPreference = value.certificateTransparencyLoggingPreference;
    }
  }

  // certificate_transparency_logging_preference - computed: false, optional: true, required: false
  private _certificateTransparencyLoggingPreference?: string; 
  public get certificateTransparencyLoggingPreference() {
    return this.getStringAttribute('certificate_transparency_logging_preference');
  }
  public set certificateTransparencyLoggingPreference(value: string) {
    this._certificateTransparencyLoggingPreference = value;
  }
  public resetCertificateTransparencyLoggingPreference() {
    this._certificateTransparencyLoggingPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTransparencyLoggingPreferenceInput() {
    return this._certificateTransparencyLoggingPreference;
  }
}
export interface AcmCertificateValidationOption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_domain AcmCertificate#validation_domain}
  */
  readonly validationDomain: string;
}

export function acmCertificateValidationOptionToTerraform(struct?: AcmCertificateValidationOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    validation_domain: cdktf.stringToTerraform(struct!.validationDomain),
  }
}

export class AcmCertificateValidationOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AcmCertificateValidationOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._validationDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationDomain = this._validationDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcmCertificateValidationOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainName = undefined;
      this._validationDomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainName = value.domainName;
      this._validationDomain = value.validationDomain;
    }
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

  // validation_domain - computed: false, optional: false, required: true
  private _validationDomain?: string; 
  public get validationDomain() {
    return this.getStringAttribute('validation_domain');
  }
  public set validationDomain(value: string) {
    this._validationDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationDomainInput() {
    return this._validationDomain;
  }
}

export class AcmCertificateValidationOptionList extends cdktf.ComplexList {
  public internalValue? : AcmCertificateValidationOption[] | cdktf.IResolvable

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
  public get(index: number): AcmCertificateValidationOptionOutputReference {
    return new AcmCertificateValidationOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate aws_acm_certificate}
*/
export class AcmCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_acm_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate aws_acm_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcmCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AcmCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_acm_certificate',
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
    this._certificateAuthorityArn = config.certificateAuthorityArn;
    this._certificateBody = config.certificateBody;
    this._certificateChain = config.certificateChain;
    this._domainName = config.domainName;
    this._earlyRenewalDuration = config.earlyRenewalDuration;
    this._id = config.id;
    this._keyAlgorithm = config.keyAlgorithm;
    this._privateKey = config.privateKey;
    this._subjectAlternativeNames = config.subjectAlternativeNames;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._validationMethod = config.validationMethod;
    this._options.internalValue = config.options;
    this._validationOption.internalValue = config.validationOption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_authority_arn - computed: false, optional: true, required: false
  private _certificateAuthorityArn?: string; 
  public get certificateAuthorityArn() {
    return this.getStringAttribute('certificate_authority_arn');
  }
  public set certificateAuthorityArn(value: string) {
    this._certificateAuthorityArn = value;
  }
  public resetCertificateAuthorityArn() {
    this._certificateAuthorityArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnInput() {
    return this._certificateAuthorityArn;
  }

  // certificate_body - computed: false, optional: true, required: false
  private _certificateBody?: string; 
  public get certificateBody() {
    return this.getStringAttribute('certificate_body');
  }
  public set certificateBody(value: string) {
    this._certificateBody = value;
  }
  public resetCertificateBody() {
    this._certificateBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBodyInput() {
    return this._certificateBody;
  }

  // certificate_chain - computed: false, optional: true, required: false
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  public resetCertificateChain() {
    this._certificateChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }

  // domain_name - computed: true, optional: true, required: false
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

  // domain_validation_options - computed: true, optional: false, required: false
  private _domainValidationOptions = new AcmCertificateDomainValidationOptionsList(this, "domain_validation_options", true);
  public get domainValidationOptions() {
    return this._domainValidationOptions;
  }

  // early_renewal_duration - computed: false, optional: true, required: false
  private _earlyRenewalDuration?: string; 
  public get earlyRenewalDuration() {
    return this.getStringAttribute('early_renewal_duration');
  }
  public set earlyRenewalDuration(value: string) {
    this._earlyRenewalDuration = value;
  }
  public resetEarlyRenewalDuration() {
    this._earlyRenewalDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyRenewalDurationInput() {
    return this._earlyRenewalDuration;
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

  // key_algorithm - computed: true, optional: true, required: false
  private _keyAlgorithm?: string; 
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string) {
    this._keyAlgorithm = value;
  }
  public resetKeyAlgorithm() {
    this._keyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm;
  }

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // pending_renewal - computed: true, optional: false, required: false
  public get pendingRenewal() {
    return this.getBooleanAttribute('pending_renewal');
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // renewal_eligibility - computed: true, optional: false, required: false
  public get renewalEligibility() {
    return this.getStringAttribute('renewal_eligibility');
  }

  // renewal_summary - computed: true, optional: false, required: false
  private _renewalSummary = new AcmCertificateRenewalSummaryList(this, "renewal_summary", false);
  public get renewalSummary() {
    return this._renewalSummary;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subject_alternative_names - computed: true, optional: true, required: false
  private _subjectAlternativeNames?: string[]; 
  public get subjectAlternativeNames() {
    return cdktf.Fn.tolist(this.getListAttribute('subject_alternative_names'));
  }
  public set subjectAlternativeNames(value: string[]) {
    this._subjectAlternativeNames = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // validation_emails - computed: true, optional: false, required: false
  public get validationEmails() {
    return this.getListAttribute('validation_emails');
  }

  // validation_method - computed: true, optional: true, required: false
  private _validationMethod?: string; 
  public get validationMethod() {
    return this.getStringAttribute('validation_method');
  }
  public set validationMethod(value: string) {
    this._validationMethod = value;
  }
  public resetValidationMethod() {
    this._validationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationMethodInput() {
    return this._validationMethod;
  }

  // options - computed: false, optional: true, required: false
  private _options = new AcmCertificateOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: AcmCertificateOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // validation_option - computed: false, optional: true, required: false
  private _validationOption = new AcmCertificateValidationOptionList(this, "validation_option", true);
  public get validationOption() {
    return this._validationOption;
  }
  public putValidationOption(value: AcmCertificateValidationOption[] | cdktf.IResolvable) {
    this._validationOption.internalValue = value;
  }
  public resetValidationOption() {
    this._validationOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationOptionInput() {
    return this._validationOption.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_authority_arn: cdktf.stringToTerraform(this._certificateAuthorityArn),
      certificate_body: cdktf.stringToTerraform(this._certificateBody),
      certificate_chain: cdktf.stringToTerraform(this._certificateChain),
      domain_name: cdktf.stringToTerraform(this._domainName),
      early_renewal_duration: cdktf.stringToTerraform(this._earlyRenewalDuration),
      id: cdktf.stringToTerraform(this._id),
      key_algorithm: cdktf.stringToTerraform(this._keyAlgorithm),
      private_key: cdktf.stringToTerraform(this._privateKey),
      subject_alternative_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subjectAlternativeNames),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      validation_method: cdktf.stringToTerraform(this._validationMethod),
      options: acmCertificateOptionsToTerraform(this._options.internalValue),
      validation_option: cdktf.listMapper(acmCertificateValidationOptionToTerraform, true)(this._validationOption.internalValue),
    };
  }
}
