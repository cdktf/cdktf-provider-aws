// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Database Migration Service
*/
export interface DmsCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html#certificate_id DmsCertificate#certificate_id}
  */
  readonly certificateId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html#certificate_pem DmsCertificate#certificate_pem}
  */
  readonly certificatePem?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html#certificate_wallet DmsCertificate#certificate_wallet}
  */
  readonly certificateWallet?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html#tags DmsCertificate#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html#tags_all DmsCertificate#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html aws_dms_certificate}
*/
export class DmsCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_dms_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html aws_dms_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: DmsCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dms_certificate',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateId = config.certificateId;
    this._certificatePem = config.certificatePem;
    this._certificateWallet = config.certificateWallet;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // certificate_id - computed: false, optional: false, required: true
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // certificate_pem - computed: false, optional: true, required: false
  private _certificatePem?: string; 
  public get certificatePem() {
    return this.getStringAttribute('certificate_pem');
  }
  public set certificatePem(value: string) {
    this._certificatePem = value;
  }
  public resetCertificatePem() {
    this._certificatePem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePemInput() {
    return this._certificatePem;
  }

  // certificate_wallet - computed: false, optional: true, required: false
  private _certificateWallet?: string; 
  public get certificateWallet() {
    return this.getStringAttribute('certificate_wallet');
  }
  public set certificateWallet(value: string) {
    this._certificateWallet = value;
  }
  public resetCertificateWallet() {
    this._certificateWallet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateWalletInput() {
    return this._certificateWallet;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      certificate_pem: cdktf.stringToTerraform(this._certificatePem),
      certificate_wallet: cdktf.stringToTerraform(this._certificateWallet),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
    };
  }
}
