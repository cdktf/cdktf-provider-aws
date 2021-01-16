// https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SignerSigningProfileConfig extends cdktf.TerraformMetaArguments {
  readonly name?: string;
  readonly namePrefix?: string;
  readonly platformId: string;
  readonly tags?: { [key: string]: string };
  /** signature_validity_period block */
  readonly signatureValidityPeriod?: SignerSigningProfileSignatureValidityPeriod[];
}
export class SignerSigningProfileRevocationRecord extends cdktf.ComplexComputedList {

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
export interface SignerSigningProfileSignatureValidityPeriod {
  readonly type: string;
  readonly value: number;
}

function signerSigningProfileSignatureValidityPeriodToTerraform(struct?: SignerSigningProfileSignatureValidityPeriod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


// Resource

export class SignerSigningProfile extends cdktf.TerraformResource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._name
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string ) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
  }

  // platform_display_name - computed: true, optional: false, required: false
  public get platformDisplayName() {
    return this.getStringAttribute('platform_display_name');
  }

  // platform_id - computed: false, optional: false, required: true
  private _platformId: string;
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }
  public set platformId(value: string) {
    this._platformId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformIdInput() {
    return this._platformId
  }

  // revocation_record - computed: true, optional: false, required: false
  public revocationRecord(index: string) {
    return new SignerSigningProfileRevocationRecord(this, 'revocation_record', index);
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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
  private _signatureValidityPeriod?: SignerSigningProfileSignatureValidityPeriod[];
  public get signatureValidityPeriod() {
    return this.interpolationForAttribute('signature_validity_period') as any;
  }
  public set signatureValidityPeriod(value: SignerSigningProfileSignatureValidityPeriod[] ) {
    this._signatureValidityPeriod = value;
  }
  public resetSignatureValidityPeriod() {
    this._signatureValidityPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureValidityPeriodInput() {
    return this._signatureValidityPeriod
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      platform_id: cdktf.stringToTerraform(this._platformId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      signature_validity_period: cdktf.listMapper(signerSigningProfileSignatureValidityPeriodToTerraform)(this._signatureValidityPeriod),
    };
  }
}
