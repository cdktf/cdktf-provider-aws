// https://www.terraform.io/docs/providers/aws/r/data_aws_acmpca_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsAcmpcaCertificateConfig extends cdktf.TerraformMetaArguments {
  readonly arn: string;
  readonly certificateAuthorityArn: string;
}

// Resource

export class DataAwsAcmpcaCertificate extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsAcmpcaCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_acmpca_certificate',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._arn = config.arn;
    this._certificateAuthorityArn = config.certificateAuthorityArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: false, required: true
  private _arn: string;
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // certificate_authority_arn - computed: false, optional: false, required: true
  private _certificateAuthorityArn: string;
  public get certificateAuthorityArn() {
    return this.getStringAttribute('certificate_authority_arn');
  }
  public set certificateAuthorityArn(value: string) {
    this._certificateAuthorityArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnInput() {
    return this._certificateAuthorityArn
  }

  // certificate_chain - computed: true, optional: false, required: false
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      certificate_authority_arn: cdktf.stringToTerraform(this._certificateAuthorityArn),
    };
  }
}
