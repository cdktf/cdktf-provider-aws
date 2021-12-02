// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* Amazon Certificate Manager
*/
export interface DataAwsAcmpcaCertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority.html#arn DataAwsAcmpcaCertificateAuthority#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority.html#tags DataAwsAcmpcaCertificateAuthority#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * revocation_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority.html#revocation_configuration DataAwsAcmpcaCertificateAuthority#revocation_configuration}
  */
  readonly revocationConfiguration?: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration[];
}
export interface DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration {
}

export function dataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct?: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export interface DataAwsAcmpcaCertificateAuthorityRevocationConfiguration {
  /**
  * crl_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority.html#crl_configuration DataAwsAcmpcaCertificateAuthority#crl_configuration}
  */
  readonly crlConfiguration?: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration[];
}

export function dataAwsAcmpcaCertificateAuthorityRevocationConfigurationToTerraform(struct?: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crl_configuration: cdktf.listMapper(dataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform)(struct!.crlConfiguration),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority.html aws_acmpca_certificate_authority}
*/
export class DataAwsAcmpcaCertificateAuthority extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_acmpca_certificate_authority";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority.html aws_acmpca_certificate_authority} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsAcmpcaCertificateAuthorityConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsAcmpcaCertificateAuthorityConfig) {
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
    this._arn = config.arn;
    this._tags = config.tags;
    this._revocationConfiguration = config.revocationConfiguration;
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

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // revocation_configuration - computed: false, optional: true, required: false
  private _revocationConfiguration?: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration[]; 
  public get revocationConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('revocation_configuration') as any;
  }
  public set revocationConfiguration(value: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration[]) {
    this._revocationConfiguration = value;
  }
  public resetRevocationConfiguration() {
    this._revocationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationConfigurationInput() {
    return this._revocationConfiguration;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      revocation_configuration: cdktf.listMapper(dataAwsAcmpcaCertificateAuthorityRevocationConfigurationToTerraform)(this._revocationConfiguration),
    };
  }
}
