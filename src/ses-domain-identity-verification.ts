// https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "domain": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
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

export interface SesDomainIdentityVerificationConfig extends TerraformMetaArguments {
  readonly domain: string;
  /** timeouts block */
  readonly timeouts?: SesDomainIdentityVerificationTimeouts;
}
export interface SesDomainIdentityVerificationTimeouts {
  readonly create?: string;
}

// Resource

export class SesDomainIdentityVerification extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SesDomainIdentityVerificationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ses_domain_identity_verification',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domain = config.domain;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain - computed: false, optional: false, required: true
  private _domain: string;
  public get domain() {
    return this._domain;
  }
  public set domain(value: string) {
    this._domain = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SesDomainIdentityVerificationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SesDomainIdentityVerificationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: this._domain,
      timeouts: this._timeouts,
    };
  }
}
