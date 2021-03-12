// https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcmpcaCertificateConfig extends cdktf.TerraformMetaArguments {
  readonly certificateAuthorityArn: string;
  readonly certificateSigningRequest: string;
  readonly signingAlgorithm: string;
  readonly templateArn?: string;
  /** validity block */
  readonly validity: AcmpcaCertificateValidity[];
}
export interface AcmpcaCertificateValidity {
  readonly type: string;
  readonly value: string;
}

function acmpcaCertificateValidityToTerraform(struct?: AcmpcaCertificateValidity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


// Resource

export class AcmpcaCertificate extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AcmpcaCertificateConfig) {
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
    this._certificateAuthorityArn = config.certificateAuthorityArn;
    this._certificateSigningRequest = config.certificateSigningRequest;
    this._signingAlgorithm = config.signingAlgorithm;
    this._templateArn = config.templateArn;
    this._validity = config.validity;
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

  // certificate_signing_request - computed: false, optional: false, required: true
  private _certificateSigningRequest: string;
  public get certificateSigningRequest() {
    return this.getStringAttribute('certificate_signing_request');
  }
  public set certificateSigningRequest(value: string) {
    this._certificateSigningRequest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSigningRequestInput() {
    return this._certificateSigningRequest
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // signing_algorithm - computed: false, optional: false, required: true
  private _signingAlgorithm: string;
  public get signingAlgorithm() {
    return this.getStringAttribute('signing_algorithm');
  }
  public set signingAlgorithm(value: string) {
    this._signingAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingAlgorithmInput() {
    return this._signingAlgorithm
  }

  // template_arn - computed: false, optional: true, required: false
  private _templateArn?: string;
  public get templateArn() {
    return this.getStringAttribute('template_arn');
  }
  public set templateArn(value: string ) {
    this._templateArn = value;
  }
  public resetTemplateArn() {
    this._templateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateArnInput() {
    return this._templateArn
  }

  // validity - computed: false, optional: false, required: true
  private _validity: AcmpcaCertificateValidity[];
  public get validity() {
    return this.interpolationForAttribute('validity') as any;
  }
  public set validity(value: AcmpcaCertificateValidity[]) {
    this._validity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validityInput() {
    return this._validity
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_authority_arn: cdktf.stringToTerraform(this._certificateAuthorityArn),
      certificate_signing_request: cdktf.stringToTerraform(this._certificateSigningRequest),
      signing_algorithm: cdktf.stringToTerraform(this._signingAlgorithm),
      template_arn: cdktf.stringToTerraform(this._templateArn),
      validity: cdktf.listMapper(acmpcaCertificateValidityToTerraform)(this._validity),
    };
  }
}
