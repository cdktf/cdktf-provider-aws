// https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "certificate_arn": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "validation_record_fqdns": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AcmCertificateValidationConfig extends TerraformMetaArguments {
  readonly certificateArn: string;
  readonly validationRecordFqdns?: string[];
  /** timeouts block */
  readonly timeouts?: AcmCertificateValidationTimeouts;
}
export interface AcmCertificateValidationTimeouts {
  readonly create?: string;
}

// Resource

export class AcmCertificateValidation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this._certificateArn;
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // validation_record_fqdns - computed: false, optional: true, required: false
  private _validationRecordFqdns?: string[];
  public get validationRecordFqdns() {
    return this._validationRecordFqdns;
  }
  public set validationRecordFqdns(value: string[] | undefined) {
    this._validationRecordFqdns = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AcmCertificateValidationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AcmCertificateValidationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_arn: this._certificateArn,
      validation_record_fqdns: this._validationRecordFqdns,
      timeouts: this._timeouts,
    };
  }
}
