/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayDomainNameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#certificate_arn ApiGatewayDomainName#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#certificate_body ApiGatewayDomainName#certificate_body}
  */
  readonly certificateBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#certificate_chain ApiGatewayDomainName#certificate_chain}
  */
  readonly certificateChain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#certificate_name ApiGatewayDomainName#certificate_name}
  */
  readonly certificateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#certificate_private_key ApiGatewayDomainName#certificate_private_key}
  */
  readonly certificatePrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#domain_name ApiGatewayDomainName#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#id ApiGatewayDomainName#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#ownership_verification_certificate_arn ApiGatewayDomainName#ownership_verification_certificate_arn}
  */
  readonly ownershipVerificationCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#policy ApiGatewayDomainName#policy}
  */
  readonly policy?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#region ApiGatewayDomainName#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#regional_certificate_arn ApiGatewayDomainName#regional_certificate_arn}
  */
  readonly regionalCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#regional_certificate_name ApiGatewayDomainName#regional_certificate_name}
  */
  readonly regionalCertificateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#security_policy ApiGatewayDomainName#security_policy}
  */
  readonly securityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#tags ApiGatewayDomainName#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#tags_all ApiGatewayDomainName#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * endpoint_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#endpoint_configuration ApiGatewayDomainName#endpoint_configuration}
  */
  readonly endpointConfiguration?: ApiGatewayDomainNameEndpointConfiguration;
  /**
  * mutual_tls_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#mutual_tls_authentication ApiGatewayDomainName#mutual_tls_authentication}
  */
  readonly mutualTlsAuthentication?: ApiGatewayDomainNameMutualTlsAuthentication;
}
export interface ApiGatewayDomainNameEndpointConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#ip_address_type ApiGatewayDomainName#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#types ApiGatewayDomainName#types}
  */
  readonly types: string[];
}

export function apiGatewayDomainNameEndpointConfigurationToTerraform(struct?: ApiGatewayDomainNameEndpointConfigurationOutputReference | ApiGatewayDomainNameEndpointConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address_type: cdktf.stringToTerraform(struct!.ipAddressType),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function apiGatewayDomainNameEndpointConfigurationToHclTerraform(struct?: ApiGatewayDomainNameEndpointConfigurationOutputReference | ApiGatewayDomainNameEndpointConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address_type: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayDomainNameEndpointConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayDomainNameEndpointConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayDomainNameEndpointConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddressType = undefined;
      this._types = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddressType = value.ipAddressType;
      this._types = value.types;
    }
  }

  // ip_address_type - computed: true, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // types - computed: false, optional: false, required: true
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface ApiGatewayDomainNameMutualTlsAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#truststore_uri ApiGatewayDomainName#truststore_uri}
  */
  readonly truststoreUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#truststore_version ApiGatewayDomainName#truststore_version}
  */
  readonly truststoreVersion?: string;
}

export function apiGatewayDomainNameMutualTlsAuthenticationToTerraform(struct?: ApiGatewayDomainNameMutualTlsAuthenticationOutputReference | ApiGatewayDomainNameMutualTlsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    truststore_uri: cdktf.stringToTerraform(struct!.truststoreUri),
    truststore_version: cdktf.stringToTerraform(struct!.truststoreVersion),
  }
}


export function apiGatewayDomainNameMutualTlsAuthenticationToHclTerraform(struct?: ApiGatewayDomainNameMutualTlsAuthenticationOutputReference | ApiGatewayDomainNameMutualTlsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    truststore_uri: {
      value: cdktf.stringToHclTerraform(struct!.truststoreUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    truststore_version: {
      value: cdktf.stringToHclTerraform(struct!.truststoreVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayDomainNameMutualTlsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayDomainNameMutualTlsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._truststoreUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.truststoreUri = this._truststoreUri;
    }
    if (this._truststoreVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.truststoreVersion = this._truststoreVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayDomainNameMutualTlsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._truststoreUri = undefined;
      this._truststoreVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._truststoreUri = value.truststoreUri;
      this._truststoreVersion = value.truststoreVersion;
    }
  }

  // truststore_uri - computed: false, optional: false, required: true
  private _truststoreUri?: string; 
  public get truststoreUri() {
    return this.getStringAttribute('truststore_uri');
  }
  public set truststoreUri(value: string) {
    this._truststoreUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get truststoreUriInput() {
    return this._truststoreUri;
  }

  // truststore_version - computed: false, optional: true, required: false
  private _truststoreVersion?: string; 
  public get truststoreVersion() {
    return this.getStringAttribute('truststore_version');
  }
  public set truststoreVersion(value: string) {
    this._truststoreVersion = value;
  }
  public resetTruststoreVersion() {
    this._truststoreVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truststoreVersionInput() {
    return this._truststoreVersion;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name aws_api_gateway_domain_name}
*/
export class ApiGatewayDomainName extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_api_gateway_domain_name";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayDomainName resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayDomainName to import
  * @param importFromId The id of the existing ApiGatewayDomainName that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayDomainName to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_api_gateway_domain_name", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_domain_name aws_api_gateway_domain_name} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayDomainNameConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayDomainNameConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_domain_name',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateArn = config.certificateArn;
    this._certificateBody = config.certificateBody;
    this._certificateChain = config.certificateChain;
    this._certificateName = config.certificateName;
    this._certificatePrivateKey = config.certificatePrivateKey;
    this._domainName = config.domainName;
    this._id = config.id;
    this._ownershipVerificationCertificateArn = config.ownershipVerificationCertificateArn;
    this._policy = config.policy;
    this._region = config.region;
    this._regionalCertificateArn = config.regionalCertificateArn;
    this._regionalCertificateName = config.regionalCertificateName;
    this._securityPolicy = config.securityPolicy;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._endpointConfiguration.internalValue = config.endpointConfiguration;
    this._mutualTlsAuthentication.internalValue = config.mutualTlsAuthentication;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // certificate_body - computed: false, optional: true, required: false
  private _certificateBody?: string; 
  public get certificateBody() {
    return this.getStringAttribute('certificate_body');
  }
  public set certificateBody(value: string) {
    this._certificateBody = value;
  }
  public resetCertificateBody() {
    this._certificateBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBodyInput() {
    return this._certificateBody;
  }

  // certificate_chain - computed: false, optional: true, required: false
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  public resetCertificateChain() {
    this._certificateChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }

  // certificate_name - computed: false, optional: true, required: false
  private _certificateName?: string; 
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }
  public set certificateName(value: string) {
    this._certificateName = value;
  }
  public resetCertificateName() {
    this._certificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameInput() {
    return this._certificateName;
  }

  // certificate_private_key - computed: false, optional: true, required: false
  private _certificatePrivateKey?: string; 
  public get certificatePrivateKey() {
    return this.getStringAttribute('certificate_private_key');
  }
  public set certificatePrivateKey(value: string) {
    this._certificatePrivateKey = value;
  }
  public resetCertificatePrivateKey() {
    this._certificatePrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePrivateKeyInput() {
    return this._certificatePrivateKey;
  }

  // certificate_upload_date - computed: true, optional: false, required: false
  public get certificateUploadDate() {
    return this.getStringAttribute('certificate_upload_date');
  }

  // cloudfront_domain_name - computed: true, optional: false, required: false
  public get cloudfrontDomainName() {
    return this.getStringAttribute('cloudfront_domain_name');
  }

  // cloudfront_zone_id - computed: true, optional: false, required: false
  public get cloudfrontZoneId() {
    return this.getStringAttribute('cloudfront_zone_id');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_name_id - computed: true, optional: false, required: false
  public get domainNameId() {
    return this.getStringAttribute('domain_name_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ownership_verification_certificate_arn - computed: true, optional: true, required: false
  private _ownershipVerificationCertificateArn?: string; 
  public get ownershipVerificationCertificateArn() {
    return this.getStringAttribute('ownership_verification_certificate_arn');
  }
  public set ownershipVerificationCertificateArn(value: string) {
    this._ownershipVerificationCertificateArn = value;
  }
  public resetOwnershipVerificationCertificateArn() {
    this._ownershipVerificationCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipVerificationCertificateArnInput() {
    return this._ownershipVerificationCertificateArn;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // regional_certificate_arn - computed: false, optional: true, required: false
  private _regionalCertificateArn?: string; 
  public get regionalCertificateArn() {
    return this.getStringAttribute('regional_certificate_arn');
  }
  public set regionalCertificateArn(value: string) {
    this._regionalCertificateArn = value;
  }
  public resetRegionalCertificateArn() {
    this._regionalCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalCertificateArnInput() {
    return this._regionalCertificateArn;
  }

  // regional_certificate_name - computed: false, optional: true, required: false
  private _regionalCertificateName?: string; 
  public get regionalCertificateName() {
    return this.getStringAttribute('regional_certificate_name');
  }
  public set regionalCertificateName(value: string) {
    this._regionalCertificateName = value;
  }
  public resetRegionalCertificateName() {
    this._regionalCertificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalCertificateNameInput() {
    return this._regionalCertificateName;
  }

  // regional_domain_name - computed: true, optional: false, required: false
  public get regionalDomainName() {
    return this.getStringAttribute('regional_domain_name');
  }

  // regional_zone_id - computed: true, optional: false, required: false
  public get regionalZoneId() {
    return this.getStringAttribute('regional_zone_id');
  }

  // security_policy - computed: true, optional: true, required: false
  private _securityPolicy?: string; 
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string) {
    this._securityPolicy = value;
  }
  public resetSecurityPolicy() {
    this._securityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // endpoint_configuration - computed: false, optional: true, required: false
  private _endpointConfiguration = new ApiGatewayDomainNameEndpointConfigurationOutputReference(this, "endpoint_configuration");
  public get endpointConfiguration() {
    return this._endpointConfiguration;
  }
  public putEndpointConfiguration(value: ApiGatewayDomainNameEndpointConfiguration) {
    this._endpointConfiguration.internalValue = value;
  }
  public resetEndpointConfiguration() {
    this._endpointConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigurationInput() {
    return this._endpointConfiguration.internalValue;
  }

  // mutual_tls_authentication - computed: false, optional: true, required: false
  private _mutualTlsAuthentication = new ApiGatewayDomainNameMutualTlsAuthenticationOutputReference(this, "mutual_tls_authentication");
  public get mutualTlsAuthentication() {
    return this._mutualTlsAuthentication;
  }
  public putMutualTlsAuthentication(value: ApiGatewayDomainNameMutualTlsAuthentication) {
    this._mutualTlsAuthentication.internalValue = value;
  }
  public resetMutualTlsAuthentication() {
    this._mutualTlsAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutualTlsAuthenticationInput() {
    return this._mutualTlsAuthentication.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_arn: cdktf.stringToTerraform(this._certificateArn),
      certificate_body: cdktf.stringToTerraform(this._certificateBody),
      certificate_chain: cdktf.stringToTerraform(this._certificateChain),
      certificate_name: cdktf.stringToTerraform(this._certificateName),
      certificate_private_key: cdktf.stringToTerraform(this._certificatePrivateKey),
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      ownership_verification_certificate_arn: cdktf.stringToTerraform(this._ownershipVerificationCertificateArn),
      policy: cdktf.stringToTerraform(this._policy),
      region: cdktf.stringToTerraform(this._region),
      regional_certificate_arn: cdktf.stringToTerraform(this._regionalCertificateArn),
      regional_certificate_name: cdktf.stringToTerraform(this._regionalCertificateName),
      security_policy: cdktf.stringToTerraform(this._securityPolicy),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      endpoint_configuration: apiGatewayDomainNameEndpointConfigurationToTerraform(this._endpointConfiguration.internalValue),
      mutual_tls_authentication: apiGatewayDomainNameMutualTlsAuthenticationToTerraform(this._mutualTlsAuthentication.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_arn: {
        value: cdktf.stringToHclTerraform(this._certificateArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_body: {
        value: cdktf.stringToHclTerraform(this._certificateBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_chain: {
        value: cdktf.stringToHclTerraform(this._certificateChain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_name: {
        value: cdktf.stringToHclTerraform(this._certificateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_private_key: {
        value: cdktf.stringToHclTerraform(this._certificatePrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ownership_verification_certificate_arn: {
        value: cdktf.stringToHclTerraform(this._ownershipVerificationCertificateArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regional_certificate_arn: {
        value: cdktf.stringToHclTerraform(this._regionalCertificateArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regional_certificate_name: {
        value: cdktf.stringToHclTerraform(this._regionalCertificateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy: {
        value: cdktf.stringToHclTerraform(this._securityPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      endpoint_configuration: {
        value: apiGatewayDomainNameEndpointConfigurationToHclTerraform(this._endpointConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayDomainNameEndpointConfigurationList",
      },
      mutual_tls_authentication: {
        value: apiGatewayDomainNameMutualTlsAuthenticationToHclTerraform(this._mutualTlsAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayDomainNameMutualTlsAuthenticationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
