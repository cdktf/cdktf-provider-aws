// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Signer
*/
export interface DataAwsSignerSigningProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile.html#name DataAwsSignerSigningProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile.html#tags DataAwsSignerSigningProfile#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}
export class DataAwsSignerSigningProfileRevocationRecord extends cdktf.ComplexComputedList {

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
export class DataAwsSignerSigningProfileSignatureValidityPeriod extends cdktf.ComplexComputedList {

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile.html aws_signer_signing_profile}
*/
export class DataAwsSignerSigningProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_signer_signing_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile.html aws_signer_signing_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSignerSigningProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsSignerSigningProfileConfig) {
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
    this._tags = config.tags;
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

  // platform_display_name - computed: true, optional: false, required: false
  public get platformDisplayName() {
    return this.getStringAttribute('platform_display_name');
  }

  // platform_id - computed: true, optional: false, required: false
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }

  // revocation_record - computed: true, optional: false, required: false
  public revocationRecord(index: string) {
    return new DataAwsSignerSigningProfileRevocationRecord(this, 'revocation_record', index);
  }

  // signature_validity_period - computed: true, optional: false, required: false
  public signatureValidityPeriod(index: string) {
    return new DataAwsSignerSigningProfileSignatureValidityPeriod(this, 'signature_validity_period', index);
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // version_arn - computed: true, optional: false, required: false
  public get versionArn() {
    return this.getStringAttribute('version_arn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
