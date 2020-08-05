// https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html
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
      "certificate_arn": {
        "type": "string",
        "optional": true
      },
      "certificate_body": {
        "type": "string",
        "optional": true
      },
      "certificate_chain": {
        "type": "string",
        "optional": true
      },
      "certificate_name": {
        "type": "string",
        "optional": true
      },
      "certificate_private_key": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "certificate_upload_date": {
        "type": "string",
        "computed": true
      },
      "cloudfront_domain_name": {
        "type": "string",
        "computed": true
      },
      "cloudfront_zone_id": {
        "type": "string",
        "computed": true
      },
      "domain_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "regional_certificate_arn": {
        "type": "string",
        "optional": true
      },
      "regional_certificate_name": {
        "type": "string",
        "optional": true
      },
      "regional_domain_name": {
        "type": "string",
        "computed": true
      },
      "regional_zone_id": {
        "type": "string",
        "computed": true
      },
      "security_policy": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "endpoint_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "types": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiGatewayDomainNameConfig extends TerraformMetaArguments {
  readonly certificateArn?: string;
  readonly certificateBody?: string;
  readonly certificateChain?: string;
  readonly certificateName?: string;
  readonly certificatePrivateKey?: string;
  readonly domainName: string;
  readonly regionalCertificateArn?: string;
  readonly regionalCertificateName?: string;
  readonly securityPolicy?: string;
  readonly tags?: { [key: string]: string };
  /** endpoint_configuration block */
  readonly endpointConfiguration?: ApiGatewayDomainNameEndpointConfiguration[];
}
export interface ApiGatewayDomainNameEndpointConfiguration {
  readonly types: string[];
}

// Resource

export class ApiGatewayDomainName extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayDomainNameConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_domain_name',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateArn = config.certificateArn;
    this._certificateBody = config.certificateBody;
    this._certificateChain = config.certificateChain;
    this._certificateName = config.certificateName;
    this._certificatePrivateKey = config.certificatePrivateKey;
    this._domainName = config.domainName;
    this._regionalCertificateArn = config.regionalCertificateArn;
    this._regionalCertificateName = config.regionalCertificateName;
    this._securityPolicy = config.securityPolicy;
    this._tags = config.tags;
    this._endpointConfiguration = config.endpointConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string;
  public get certificateArn() {
    return this._certificateArn;
  }
  public set certificateArn(value: string | undefined) {
    this._certificateArn = value;
  }

  // certificate_body - computed: false, optional: true, required: false
  private _certificateBody?: string;
  public get certificateBody() {
    return this._certificateBody;
  }
  public set certificateBody(value: string | undefined) {
    this._certificateBody = value;
  }

  // certificate_chain - computed: false, optional: true, required: false
  private _certificateChain?: string;
  public get certificateChain() {
    return this._certificateChain;
  }
  public set certificateChain(value: string | undefined) {
    this._certificateChain = value;
  }

  // certificate_name - computed: false, optional: true, required: false
  private _certificateName?: string;
  public get certificateName() {
    return this._certificateName;
  }
  public set certificateName(value: string | undefined) {
    this._certificateName = value;
  }

  // certificate_private_key - computed: false, optional: true, required: false
  private _certificatePrivateKey?: string;
  public get certificatePrivateKey() {
    return this._certificatePrivateKey;
  }
  public set certificatePrivateKey(value: string | undefined) {
    this._certificatePrivateKey = value;
  }

  // certificate_upload_date - computed: true, optional: false, required: true
  public get certificateUploadDate() {
    return this.getStringAttribute('certificate_upload_date');
  }

  // cloudfront_domain_name - computed: true, optional: false, required: true
  public get cloudfrontDomainName() {
    return this.getStringAttribute('cloudfront_domain_name');
  }

  // cloudfront_zone_id - computed: true, optional: false, required: true
  public get cloudfrontZoneId() {
    return this.getStringAttribute('cloudfront_zone_id');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this._domainName;
  }
  public set domainName(value: string) {
    this._domainName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // regional_certificate_arn - computed: false, optional: true, required: false
  private _regionalCertificateArn?: string;
  public get regionalCertificateArn() {
    return this._regionalCertificateArn;
  }
  public set regionalCertificateArn(value: string | undefined) {
    this._regionalCertificateArn = value;
  }

  // regional_certificate_name - computed: false, optional: true, required: false
  private _regionalCertificateName?: string;
  public get regionalCertificateName() {
    return this._regionalCertificateName;
  }
  public set regionalCertificateName(value: string | undefined) {
    this._regionalCertificateName = value;
  }

  // regional_domain_name - computed: true, optional: false, required: true
  public get regionalDomainName() {
    return this.getStringAttribute('regional_domain_name');
  }

  // regional_zone_id - computed: true, optional: false, required: true
  public get regionalZoneId() {
    return this.getStringAttribute('regional_zone_id');
  }

  // security_policy - computed: true, optional: true, required: false
  private _securityPolicy?: string;
  public get securityPolicy() {
    return this._securityPolicy ?? this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string | undefined) {
    this._securityPolicy = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // endpoint_configuration - computed: false, optional: true, required: false
  private _endpointConfiguration?: ApiGatewayDomainNameEndpointConfiguration[];
  public get endpointConfiguration() {
    return this._endpointConfiguration;
  }
  public set endpointConfiguration(value: ApiGatewayDomainNameEndpointConfiguration[] | undefined) {
    this._endpointConfiguration = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_arn: this._certificateArn,
      certificate_body: this._certificateBody,
      certificate_chain: this._certificateChain,
      certificate_name: this._certificateName,
      certificate_private_key: this._certificatePrivateKey,
      domain_name: this._domainName,
      regional_certificate_arn: this._regionalCertificateArn,
      regional_certificate_name: this._regionalCertificateName,
      security_policy: this._securityPolicy,
      tags: this._tags,
      endpoint_configuration: this._endpointConfiguration,
    };
  }
}
