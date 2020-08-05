// https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html
// generated from terraform resource schema

/*
{
  "version": 1,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
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
      "enabled": {
        "type": "bool",
        "optional": true
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
      "permanent_deletion_time_in_days": {
        "type": "number",
        "optional": true
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
        "optional": true
      },
      "type": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "certificate_authority_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "key_algorithm": {
              "type": "string",
              "required": true
            },
            "signing_algorithm": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "subject": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "common_name": {
                    "type": "string",
                    "optional": true
                  },
                  "country": {
                    "type": "string",
                    "optional": true
                  },
                  "distinguished_name_qualifier": {
                    "type": "string",
                    "optional": true
                  },
                  "generation_qualifier": {
                    "type": "string",
                    "optional": true
                  },
                  "given_name": {
                    "type": "string",
                    "optional": true
                  },
                  "initials": {
                    "type": "string",
                    "optional": true
                  },
                  "locality": {
                    "type": "string",
                    "optional": true
                  },
                  "organization": {
                    "type": "string",
                    "optional": true
                  },
                  "organizational_unit": {
                    "type": "string",
                    "optional": true
                  },
                  "pseudonym": {
                    "type": "string",
                    "optional": true
                  },
                  "state": {
                    "type": "string",
                    "optional": true
                  },
                  "surname": {
                    "type": "string",
                    "optional": true
                  },
                  "title": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "min_items": 1,
              "max_items": 1
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      },
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
                    "optional": true
                  },
                  "enabled": {
                    "type": "bool",
                    "optional": true
                  },
                  "expiration_in_days": {
                    "type": "number",
                    "required": true
                  },
                  "s3_bucket_name": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "max_items": 1
      },
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

export interface AcmpcaCertificateAuthorityConfig extends TerraformMetaArguments {
  readonly enabled?: boolean;
  readonly permanentDeletionTimeInDays?: number;
  readonly tags?: { [key: string]: string };
  readonly type?: string;
  /** certificate_authority_configuration block */
  readonly certificateAuthorityConfiguration: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration[];
  /** revocation_configuration block */
  readonly revocationConfiguration?: AcmpcaCertificateAuthorityRevocationConfiguration[];
  /** timeouts block */
  readonly timeouts?: AcmpcaCertificateAuthorityTimeouts;
}
export interface AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject {
  readonly commonName?: string;
  readonly country?: string;
  readonly distinguishedNameQualifier?: string;
  readonly generationQualifier?: string;
  readonly givenName?: string;
  readonly initials?: string;
  readonly locality?: string;
  readonly organization?: string;
  readonly organizationalUnit?: string;
  readonly pseudonym?: string;
  readonly state?: string;
  readonly surname?: string;
  readonly title?: string;
}
export interface AcmpcaCertificateAuthorityCertificateAuthorityConfiguration {
  readonly keyAlgorithm: string;
  readonly signingAlgorithm: string;
  /** subject block */
  readonly subject: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject[];
}
export interface AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration {
  readonly customCname?: string;
  readonly enabled?: boolean;
  readonly expirationInDays: number;
  readonly s3BucketName?: string;
}
export interface AcmpcaCertificateAuthorityRevocationConfiguration {
  /** crl_configuration block */
  readonly crlConfiguration?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration[];
}
export interface AcmpcaCertificateAuthorityTimeouts {
  readonly create?: string;
}

// Resource

export class AcmpcaCertificateAuthority extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AcmpcaCertificateAuthorityConfig) {
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
    this._enabled = config.enabled;
    this._permanentDeletionTimeInDays = config.permanentDeletionTimeInDays;
    this._tags = config.tags;
    this._type = config.type;
    this._certificateAuthorityConfiguration = config.certificateAuthorityConfiguration;
    this._revocationConfiguration = config.revocationConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
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

  // permanent_deletion_time_in_days - computed: false, optional: true, required: false
  private _permanentDeletionTimeInDays?: number;
  public get permanentDeletionTimeInDays() {
    return this._permanentDeletionTimeInDays;
  }
  public set permanentDeletionTimeInDays(value: number | undefined) {
    this._permanentDeletionTimeInDays = value;
  }

  // serial - computed: true, optional: false, required: true
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this._type;
  }
  public set type(value: string | undefined) {
    this._type = value;
  }

  // certificate_authority_configuration - computed: false, optional: false, required: true
  private _certificateAuthorityConfiguration: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration[];
  public get certificateAuthorityConfiguration() {
    return this._certificateAuthorityConfiguration;
  }
  public set certificateAuthorityConfiguration(value: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration[]) {
    this._certificateAuthorityConfiguration = value;
  }

  // revocation_configuration - computed: false, optional: true, required: false
  private _revocationConfiguration?: AcmpcaCertificateAuthorityRevocationConfiguration[];
  public get revocationConfiguration() {
    return this._revocationConfiguration;
  }
  public set revocationConfiguration(value: AcmpcaCertificateAuthorityRevocationConfiguration[] | undefined) {
    this._revocationConfiguration = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AcmpcaCertificateAuthorityTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AcmpcaCertificateAuthorityTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: this._enabled,
      permanent_deletion_time_in_days: this._permanentDeletionTimeInDays,
      tags: this._tags,
      type: this._type,
      certificate_authority_configuration: this._certificateAuthorityConfiguration,
      revocation_configuration: this._revocationConfiguration,
      timeouts: this._timeouts,
    };
  }
}
