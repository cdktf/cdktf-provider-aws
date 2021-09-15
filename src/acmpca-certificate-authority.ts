// https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcmpcaCertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#enabled AcmpcaCertificateAuthority#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#permanent_deletion_time_in_days AcmpcaCertificateAuthority#permanent_deletion_time_in_days}
  */
  readonly permanentDeletionTimeInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#tags AcmpcaCertificateAuthority#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#tags_all AcmpcaCertificateAuthority#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#type AcmpcaCertificateAuthority#type}
  */
  readonly type?: string;
  /**
  * certificate_authority_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#certificate_authority_configuration AcmpcaCertificateAuthority#certificate_authority_configuration}
  */
  readonly certificateAuthorityConfiguration: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration[];
  /**
  * revocation_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#revocation_configuration AcmpcaCertificateAuthority#revocation_configuration}
  */
  readonly revocationConfiguration?: AcmpcaCertificateAuthorityRevocationConfiguration[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#timeouts AcmpcaCertificateAuthority#timeouts}
  */
  readonly timeouts?: AcmpcaCertificateAuthorityTimeouts;
}
export interface AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#common_name AcmpcaCertificateAuthority#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#country AcmpcaCertificateAuthority#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}
  */
  readonly distinguishedNameQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}
  */
  readonly generationQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#given_name AcmpcaCertificateAuthority#given_name}
  */
  readonly givenName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#initials AcmpcaCertificateAuthority#initials}
  */
  readonly initials?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#locality AcmpcaCertificateAuthority#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#organization AcmpcaCertificateAuthority#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#organizational_unit AcmpcaCertificateAuthority#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#pseudonym AcmpcaCertificateAuthority#pseudonym}
  */
  readonly pseudonym?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#state AcmpcaCertificateAuthority#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#surname AcmpcaCertificateAuthority#surname}
  */
  readonly surname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#title AcmpcaCertificateAuthority#title}
  */
  readonly title?: string;
}

function acmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectToTerraform(struct?: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.stringToTerraform(struct!.country),
    distinguished_name_qualifier: cdktf.stringToTerraform(struct!.distinguishedNameQualifier),
    generation_qualifier: cdktf.stringToTerraform(struct!.generationQualifier),
    given_name: cdktf.stringToTerraform(struct!.givenName),
    initials: cdktf.stringToTerraform(struct!.initials),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    pseudonym: cdktf.stringToTerraform(struct!.pseudonym),
    state: cdktf.stringToTerraform(struct!.state),
    surname: cdktf.stringToTerraform(struct!.surname),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

export interface AcmpcaCertificateAuthorityCertificateAuthorityConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#key_algorithm AcmpcaCertificateAuthority#key_algorithm}
  */
  readonly keyAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#signing_algorithm AcmpcaCertificateAuthority#signing_algorithm}
  */
  readonly signingAlgorithm: string;
  /**
  * subject block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#subject AcmpcaCertificateAuthority#subject}
  */
  readonly subject: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject[];
}

function acmpcaCertificateAuthorityCertificateAuthorityConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_algorithm: cdktf.stringToTerraform(struct!.keyAlgorithm),
    signing_algorithm: cdktf.stringToTerraform(struct!.signingAlgorithm),
    subject: cdktf.listMapper(acmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectToTerraform)(struct!.subject),
  }
}

export interface AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#custom_cname AcmpcaCertificateAuthority#custom_cname}
  */
  readonly customCname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#enabled AcmpcaCertificateAuthority#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#expiration_in_days AcmpcaCertificateAuthority#expiration_in_days}
  */
  readonly expirationInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#s3_bucket_name AcmpcaCertificateAuthority#s3_bucket_name}
  */
  readonly s3BucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#s3_object_acl AcmpcaCertificateAuthority#s3_object_acl}
  */
  readonly s3ObjectAcl?: string;
}

function acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_cname: cdktf.stringToTerraform(struct!.customCname),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    expiration_in_days: cdktf.numberToTerraform(struct!.expirationInDays),
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_object_acl: cdktf.stringToTerraform(struct!.s3ObjectAcl),
  }
}

export interface AcmpcaCertificateAuthorityRevocationConfiguration {
  /**
  * crl_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#crl_configuration AcmpcaCertificateAuthority#crl_configuration}
  */
  readonly crlConfiguration?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration[];
}

function acmpcaCertificateAuthorityRevocationConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    crl_configuration: cdktf.listMapper(acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform)(struct!.crlConfiguration),
  }
}

export interface AcmpcaCertificateAuthorityTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#create AcmpcaCertificateAuthority#create}
  */
  readonly create?: string;
}

function acmpcaCertificateAuthorityTimeoutsToTerraform(struct?: AcmpcaCertificateAuthorityTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html aws_acmpca_certificate_authority}
*/
export class AcmpcaCertificateAuthority extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_acmpca_certificate_authority";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html aws_acmpca_certificate_authority} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcmpcaCertificateAuthorityConfig
  */
  public constructor(scope: Construct, id: string, config: AcmpcaCertificateAuthorityConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_acmpca_certificate_authority',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._permanentDeletionTimeInDays = config.permanentDeletionTimeInDays;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._certificateAuthorityConfiguration = config.certificateAuthorityConfiguration;
    this._revocationConfiguration = config.revocationConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // permanent_deletion_time_in_days - computed: false, optional: true, required: false
  private _permanentDeletionTimeInDays?: number;
  public get permanentDeletionTimeInDays() {
    return this.getNumberAttribute('permanent_deletion_time_in_days');
  }
  public set permanentDeletionTimeInDays(value: number ) {
    this._permanentDeletionTimeInDays = value;
  }
  public resetPermanentDeletionTimeInDays() {
    this._permanentDeletionTimeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentDeletionTimeInDaysInput() {
    return this._permanentDeletionTimeInDays
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string ) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // certificate_authority_configuration - computed: false, optional: false, required: true
  private _certificateAuthorityConfiguration: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration[];
  public get certificateAuthorityConfiguration() {
    return this.interpolationForAttribute('certificate_authority_configuration') as any;
  }
  public set certificateAuthorityConfiguration(value: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration[]) {
    this._certificateAuthorityConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityConfigurationInput() {
    return this._certificateAuthorityConfiguration
  }

  // revocation_configuration - computed: false, optional: true, required: false
  private _revocationConfiguration?: AcmpcaCertificateAuthorityRevocationConfiguration[];
  public get revocationConfiguration() {
    return this.interpolationForAttribute('revocation_configuration') as any;
  }
  public set revocationConfiguration(value: AcmpcaCertificateAuthorityRevocationConfiguration[] ) {
    this._revocationConfiguration = value;
  }
  public resetRevocationConfiguration() {
    this._revocationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationConfigurationInput() {
    return this._revocationConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AcmpcaCertificateAuthorityTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AcmpcaCertificateAuthorityTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      permanent_deletion_time_in_days: cdktf.numberToTerraform(this._permanentDeletionTimeInDays),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      certificate_authority_configuration: cdktf.listMapper(acmpcaCertificateAuthorityCertificateAuthorityConfigurationToTerraform)(this._certificateAuthorityConfiguration),
      revocation_configuration: cdktf.listMapper(acmpcaCertificateAuthorityRevocationConfigurationToTerraform)(this._revocationConfiguration),
      timeouts: acmpcaCertificateAuthorityTimeoutsToTerraform(this._timeouts),
    };
  }
}
