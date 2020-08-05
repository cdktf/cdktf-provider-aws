// https://www.terraform.io/docs/providers/aws/r/data_aws_acmpca_certificate_authority.html
// generated from terraform resource schema

/*
{
  "version": 1,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "required": true
      },
      "certificate": {
        "type": "string",
        "computed": true
      },
      "certificate_chain": {
        "type": "string",
        "computed": true
      },
      "certificate_signing_request": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "not_after": {
        "type": "string",
        "computed": true
      },
      "not_before": {
        "type": "string",
        "computed": true
      },
      "serial": {
        "type": "string",
        "computed": true
      },
      "status": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "type": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "revocation_configuration": {
        "nesting_mode": "list",
        "block": {
          "block_types": {
            "crl_configuration": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "custom_cname": {
                    "type": "string",
                    "computed": true
                  },
                  "enabled": {
                    "type": "bool",
                    "computed": true
                  },
                  "expiration_in_days": {
                    "type": "number",
                    "computed": true
                  },
                  "s3_bucket_name": {
                    "type": "string",
                    "computed": true
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsAcmpcaCertificateAuthorityConfig extends TerraformMetaArguments {
  readonly arn: string;
  readonly tags?: { [key: string]: string };
  /** revocation_configuration block */
  readonly revocationConfiguration?: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration[];
}
export interface DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration {
}
export interface DataAwsAcmpcaCertificateAuthorityRevocationConfiguration {
  /** crl_configuration block */
  readonly crlConfiguration?: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration[];
}

// Resource

export class DataAwsAcmpcaCertificateAuthority extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _arn: string;
  public get arn() {
    return this._arn;
  }
  public set arn(value: string) {
    this._arn = value;
  }

  // certificate - computed: true, optional: false, required: true
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // certificate_chain - computed: true, optional: false, required: true
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }

  // certificate_signing_request - computed: true, optional: false, required: true
  public get certificateSigningRequest() {
    return this.getStringAttribute('certificate_signing_request');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // not_after - computed: true, optional: false, required: true
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: true
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // serial - computed: true, optional: false, required: true
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // revocation_configuration - computed: false, optional: true, required: false
  private _revocationConfiguration?: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration[];
  public get revocationConfiguration() {
    return this._revocationConfiguration;
  }
  public set revocationConfiguration(value: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration[] | undefined) {
    this._revocationConfiguration = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: this._arn,
      tags: this._tags,
      revocation_configuration: this._revocationConfiguration,
    };
  }
}
