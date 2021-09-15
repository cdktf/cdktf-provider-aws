// https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcmCertificateValidationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html#certificate_arn AcmCertificateValidation#certificate_arn}
  */
  readonly certificateArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html#validation_record_fqdns AcmCertificateValidation#validation_record_fqdns}
  */
  readonly validationRecordFqdns?: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html#timeouts AcmCertificateValidation#timeouts}
  */
  readonly timeouts?: AcmCertificateValidationTimeouts;
}
export interface AcmCertificateValidationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html#create AcmCertificateValidation#create}
  */
  readonly create?: string;
}

function acmCertificateValidationTimeoutsToTerraform(struct?: AcmCertificateValidationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html aws_acm_certificate_validation}
*/
export class AcmCertificateValidation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_acm_certificate_validation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html aws_acm_certificate_validation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcmCertificateValidationConfig
  */
  public constructor(scope: Construct, id: string, config: AcmCertificateValidationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_acm_certificate_validation',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateArn = config.certificateArn;
    this._validationRecordFqdns = config.validationRecordFqdns;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_arn - computed: false, optional: false, required: true
  private _certificateArn: string;
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // validation_record_fqdns - computed: false, optional: true, required: false
  private _validationRecordFqdns?: string[];
  public get validationRecordFqdns() {
    return this.getListAttribute('validation_record_fqdns');
  }
  public set validationRecordFqdns(value: string[] ) {
    this._validationRecordFqdns = value;
  }
  public resetValidationRecordFqdns() {
    this._validationRecordFqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationRecordFqdnsInput() {
    return this._validationRecordFqdns
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AcmCertificateValidationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AcmCertificateValidationTimeouts ) {
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
      certificate_arn: cdktf.stringToTerraform(this._certificateArn),
      validation_record_fqdns: cdktf.listMapper(cdktf.stringToTerraform)(this._validationRecordFqdns),
      timeouts: acmCertificateValidationTimeoutsToTerraform(this._timeouts),
    };
  }
}
