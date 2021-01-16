// https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface SignerSigningProfileConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly namePrefix?: string;
  readonly platformId: string;
  readonly tags?: { [key: string]: string };
  /** signature_validity_period block */
  readonly signatureValidityPeriod?: SignerSigningProfileSignatureValidityPeriod[];
}
export class SignerSigningProfileRevocationRecord extends ComplexComputedList {

  // revocation_effective_from - computed: true, optional: false, required: true
  public get revocationEffectiveFrom() {
    return this.getStringAttribute('revocation_effective_from');
  }

  // revoked_at - computed: true, optional: false, required: true
  public get revokedAt() {
    return this.getStringAttribute('revoked_at');
  }

  // revoked_by - computed: true, optional: false, required: true
  public get revokedBy() {
    return this.getStringAttribute('revoked_by');
  }
}
export interface SignerSigningProfileSignatureValidityPeriod {
  readonly type: string;
  readonly value: number;
}

// Resource

export class SignerSigningProfile extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SignerSigningProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_signer_signing_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._platformId = config.platformId;
    this._tags = config.tags;
    this._signatureValidityPeriod = config.signatureValidityPeriod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix;
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }

  // platform_display_name - computed: true, optional: false, required: true
  public get platformDisplayName() {
    return this.getStringAttribute('platform_display_name');
  }

  // platform_id - computed: false, optional: false, required: true
  private _platformId: string;
  public get platformId() {
    return this._platformId;
  }
  public set platformId(value: string) {
    this._platformId = value;
  }

  // revocation_record - computed: true, optional: false, required: true
  public revocationRecord(index: string) {
    return new SignerSigningProfileRevocationRecord(this, 'revocation_record', index);
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // version_arn - computed: true, optional: false, required: true
  public get versionArn() {
    return this.getStringAttribute('version_arn');
  }

  // signature_validity_period - computed: false, optional: true, required: false
  private _signatureValidityPeriod?: SignerSigningProfileSignatureValidityPeriod[];
  public get signatureValidityPeriod() {
    return this._signatureValidityPeriod;
  }
  public set signatureValidityPeriod(value: SignerSigningProfileSignatureValidityPeriod[] | undefined) {
    this._signatureValidityPeriod = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      name_prefix: this._namePrefix,
      platform_id: this._platformId,
      tags: this._tags,
      signature_validity_period: this._signatureValidityPeriod,
    };
  }
}
