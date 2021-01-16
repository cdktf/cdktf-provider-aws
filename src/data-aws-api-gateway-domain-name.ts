// https://www.terraform.io/docs/providers/aws/r/data_aws_api_gateway_domain_name.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsApiGatewayDomainNameConfig extends TerraformMetaArguments {
  readonly domainName: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsApiGatewayDomainNameEndpointConfiguration extends ComplexComputedList {

  // types - computed: true, optional: false, required: true
  public get types() {
    return this.getListAttribute('types');
  }
}

// Resource

export class DataAwsApiGatewayDomainName extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsApiGatewayDomainNameConfig) {
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
    this._domainName = config.domainName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_arn - computed: true, optional: false, required: true
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // certificate_name - computed: true, optional: false, required: true
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
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

  // endpoint_configuration - computed: true, optional: false, required: true
  public endpointConfiguration(index: string) {
    return new DataAwsApiGatewayDomainNameEndpointConfiguration(this, 'endpoint_configuration', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // regional_certificate_arn - computed: true, optional: false, required: true
  public get regionalCertificateArn() {
    return this.getStringAttribute('regional_certificate_arn');
  }

  // regional_certificate_name - computed: true, optional: false, required: true
  public get regionalCertificateName() {
    return this.getStringAttribute('regional_certificate_name');
  }

  // regional_domain_name - computed: true, optional: false, required: true
  public get regionalDomainName() {
    return this.getStringAttribute('regional_domain_name');
  }

  // regional_zone_id - computed: true, optional: false, required: true
  public get regionalZoneId() {
    return this.getStringAttribute('regional_zone_id');
  }

  // security_policy - computed: true, optional: false, required: true
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: this._domainName,
      tags: this._tags,
    };
  }
}
