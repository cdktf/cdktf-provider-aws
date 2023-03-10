// https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2ClientVpnEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#client_cidr_block Ec2ClientVpnEndpoint#client_cidr_block}
  */
  readonly clientCidrBlock: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#description Ec2ClientVpnEndpoint#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#dns_servers Ec2ClientVpnEndpoint#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#id Ec2ClientVpnEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#security_group_ids Ec2ClientVpnEndpoint#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#self_service_portal Ec2ClientVpnEndpoint#self_service_portal}
  */
  readonly selfServicePortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#server_certificate_arn Ec2ClientVpnEndpoint#server_certificate_arn}
  */
  readonly serverCertificateArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#session_timeout_hours Ec2ClientVpnEndpoint#session_timeout_hours}
  */
  readonly sessionTimeoutHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#split_tunnel Ec2ClientVpnEndpoint#split_tunnel}
  */
  readonly splitTunnel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#tags Ec2ClientVpnEndpoint#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#tags_all Ec2ClientVpnEndpoint#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#transport_protocol Ec2ClientVpnEndpoint#transport_protocol}
  */
  readonly transportProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#vpc_id Ec2ClientVpnEndpoint#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#vpn_port Ec2ClientVpnEndpoint#vpn_port}
  */
  readonly vpnPort?: number;
  /**
  * authentication_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#authentication_options Ec2ClientVpnEndpoint#authentication_options}
  */
  readonly authenticationOptions: Ec2ClientVpnEndpointAuthenticationOptions[] | cdktf.IResolvable;
  /**
  * client_connect_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#client_connect_options Ec2ClientVpnEndpoint#client_connect_options}
  */
  readonly clientConnectOptions?: Ec2ClientVpnEndpointClientConnectOptions;
  /**
  * client_login_banner_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#client_login_banner_options Ec2ClientVpnEndpoint#client_login_banner_options}
  */
  readonly clientLoginBannerOptions?: Ec2ClientVpnEndpointClientLoginBannerOptions;
  /**
  * connection_log_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#connection_log_options Ec2ClientVpnEndpoint#connection_log_options}
  */
  readonly connectionLogOptions: Ec2ClientVpnEndpointConnectionLogOptions;
}
export interface Ec2ClientVpnEndpointAuthenticationOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#active_directory_id Ec2ClientVpnEndpoint#active_directory_id}
  */
  readonly activeDirectoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#root_certificate_chain_arn Ec2ClientVpnEndpoint#root_certificate_chain_arn}
  */
  readonly rootCertificateChainArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#saml_provider_arn Ec2ClientVpnEndpoint#saml_provider_arn}
  */
  readonly samlProviderArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#self_service_saml_provider_arn Ec2ClientVpnEndpoint#self_service_saml_provider_arn}
  */
  readonly selfServiceSamlProviderArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#type Ec2ClientVpnEndpoint#type}
  */
  readonly type: string;
}

export function ec2ClientVpnEndpointAuthenticationOptionsToTerraform(struct?: Ec2ClientVpnEndpointAuthenticationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_directory_id: cdktf.stringToTerraform(struct!.activeDirectoryId),
    root_certificate_chain_arn: cdktf.stringToTerraform(struct!.rootCertificateChainArn),
    saml_provider_arn: cdktf.stringToTerraform(struct!.samlProviderArn),
    self_service_saml_provider_arn: cdktf.stringToTerraform(struct!.selfServiceSamlProviderArn),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Ec2ClientVpnEndpointAuthenticationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2ClientVpnEndpointAuthenticationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDirectoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectoryId = this._activeDirectoryId;
    }
    if (this._rootCertificateChainArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCertificateChainArn = this._rootCertificateChainArn;
    }
    if (this._samlProviderArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlProviderArn = this._samlProviderArn;
    }
    if (this._selfServiceSamlProviderArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfServiceSamlProviderArn = this._selfServiceSamlProviderArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointAuthenticationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeDirectoryId = undefined;
      this._rootCertificateChainArn = undefined;
      this._samlProviderArn = undefined;
      this._selfServiceSamlProviderArn = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeDirectoryId = value.activeDirectoryId;
      this._rootCertificateChainArn = value.rootCertificateChainArn;
      this._samlProviderArn = value.samlProviderArn;
      this._selfServiceSamlProviderArn = value.selfServiceSamlProviderArn;
      this._type = value.type;
    }
  }

  // active_directory_id - computed: false, optional: true, required: false
  private _activeDirectoryId?: string; 
  public get activeDirectoryId() {
    return this.getStringAttribute('active_directory_id');
  }
  public set activeDirectoryId(value: string) {
    this._activeDirectoryId = value;
  }
  public resetActiveDirectoryId() {
    this._activeDirectoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryIdInput() {
    return this._activeDirectoryId;
  }

  // root_certificate_chain_arn - computed: false, optional: true, required: false
  private _rootCertificateChainArn?: string; 
  public get rootCertificateChainArn() {
    return this.getStringAttribute('root_certificate_chain_arn');
  }
  public set rootCertificateChainArn(value: string) {
    this._rootCertificateChainArn = value;
  }
  public resetRootCertificateChainArn() {
    this._rootCertificateChainArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCertificateChainArnInput() {
    return this._rootCertificateChainArn;
  }

  // saml_provider_arn - computed: false, optional: true, required: false
  private _samlProviderArn?: string; 
  public get samlProviderArn() {
    return this.getStringAttribute('saml_provider_arn');
  }
  public set samlProviderArn(value: string) {
    this._samlProviderArn = value;
  }
  public resetSamlProviderArn() {
    this._samlProviderArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlProviderArnInput() {
    return this._samlProviderArn;
  }

  // self_service_saml_provider_arn - computed: false, optional: true, required: false
  private _selfServiceSamlProviderArn?: string; 
  public get selfServiceSamlProviderArn() {
    return this.getStringAttribute('self_service_saml_provider_arn');
  }
  public set selfServiceSamlProviderArn(value: string) {
    this._selfServiceSamlProviderArn = value;
  }
  public resetSelfServiceSamlProviderArn() {
    this._selfServiceSamlProviderArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServiceSamlProviderArnInput() {
    return this._selfServiceSamlProviderArn;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class Ec2ClientVpnEndpointAuthenticationOptionsList extends cdktf.ComplexList {
  public internalValue? : Ec2ClientVpnEndpointAuthenticationOptions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2ClientVpnEndpointAuthenticationOptionsOutputReference {
    return new Ec2ClientVpnEndpointAuthenticationOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2ClientVpnEndpointClientConnectOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#lambda_function_arn Ec2ClientVpnEndpoint#lambda_function_arn}
  */
  readonly lambdaFunctionArn?: string;
}

export function ec2ClientVpnEndpointClientConnectOptionsToTerraform(struct?: Ec2ClientVpnEndpointClientConnectOptionsOutputReference | Ec2ClientVpnEndpointClientConnectOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    lambda_function_arn: cdktf.stringToTerraform(struct!.lambdaFunctionArn),
  }
}

export class Ec2ClientVpnEndpointClientConnectOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ec2ClientVpnEndpointClientConnectOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._lambdaFunctionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionArn = this._lambdaFunctionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointClientConnectOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._lambdaFunctionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._lambdaFunctionArn = value.lambdaFunctionArn;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // lambda_function_arn - computed: true, optional: true, required: false
  private _lambdaFunctionArn?: string; 
  public get lambdaFunctionArn() {
    return this.getStringAttribute('lambda_function_arn');
  }
  public set lambdaFunctionArn(value: string) {
    this._lambdaFunctionArn = value;
  }
  public resetLambdaFunctionArn() {
    this._lambdaFunctionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionArnInput() {
    return this._lambdaFunctionArn;
  }
}
export interface Ec2ClientVpnEndpointClientLoginBannerOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#banner_text Ec2ClientVpnEndpoint#banner_text}
  */
  readonly bannerText?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function ec2ClientVpnEndpointClientLoginBannerOptionsToTerraform(struct?: Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference | Ec2ClientVpnEndpointClientLoginBannerOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    banner_text: cdktf.stringToTerraform(struct!.bannerText),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ec2ClientVpnEndpointClientLoginBannerOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bannerText !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannerText = this._bannerText;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointClientLoginBannerOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bannerText = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bannerText = value.bannerText;
      this._enabled = value.enabled;
    }
  }

  // banner_text - computed: true, optional: true, required: false
  private _bannerText?: string; 
  public get bannerText() {
    return this.getStringAttribute('banner_text');
  }
  public set bannerText(value: string) {
    this._bannerText = value;
  }
  public resetBannerText() {
    this._bannerText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerTextInput() {
    return this._bannerText;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface Ec2ClientVpnEndpointConnectionLogOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#cloudwatch_log_group Ec2ClientVpnEndpoint#cloudwatch_log_group}
  */
  readonly cloudwatchLogGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#cloudwatch_log_stream Ec2ClientVpnEndpoint#cloudwatch_log_stream}
  */
  readonly cloudwatchLogStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function ec2ClientVpnEndpointConnectionLogOptionsToTerraform(struct?: Ec2ClientVpnEndpointConnectionLogOptionsOutputReference | Ec2ClientVpnEndpointConnectionLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_log_group: cdktf.stringToTerraform(struct!.cloudwatchLogGroup),
    cloudwatch_log_stream: cdktf.stringToTerraform(struct!.cloudwatchLogStream),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class Ec2ClientVpnEndpointConnectionLogOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ec2ClientVpnEndpointConnectionLogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogGroup = this._cloudwatchLogGroup;
    }
    if (this._cloudwatchLogStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogStream = this._cloudwatchLogStream;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointConnectionLogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchLogGroup = undefined;
      this._cloudwatchLogStream = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchLogGroup = value.cloudwatchLogGroup;
      this._cloudwatchLogStream = value.cloudwatchLogStream;
      this._enabled = value.enabled;
    }
  }

  // cloudwatch_log_group - computed: false, optional: true, required: false
  private _cloudwatchLogGroup?: string; 
  public get cloudwatchLogGroup() {
    return this.getStringAttribute('cloudwatch_log_group');
  }
  public set cloudwatchLogGroup(value: string) {
    this._cloudwatchLogGroup = value;
  }
  public resetCloudwatchLogGroup() {
    this._cloudwatchLogGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogGroupInput() {
    return this._cloudwatchLogGroup;
  }

  // cloudwatch_log_stream - computed: true, optional: true, required: false
  private _cloudwatchLogStream?: string; 
  public get cloudwatchLogStream() {
    return this.getStringAttribute('cloudwatch_log_stream');
  }
  public set cloudwatchLogStream(value: string) {
    this._cloudwatchLogStream = value;
  }
  public resetCloudwatchLogStream() {
    this._cloudwatchLogStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogStreamInput() {
    return this._cloudwatchLogStream;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint aws_ec2_client_vpn_endpoint}
*/
export class Ec2ClientVpnEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_client_vpn_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint aws_ec2_client_vpn_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2ClientVpnEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2ClientVpnEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_client_vpn_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientCidrBlock = config.clientCidrBlock;
    this._description = config.description;
    this._dnsServers = config.dnsServers;
    this._id = config.id;
    this._securityGroupIds = config.securityGroupIds;
    this._selfServicePortal = config.selfServicePortal;
    this._serverCertificateArn = config.serverCertificateArn;
    this._sessionTimeoutHours = config.sessionTimeoutHours;
    this._splitTunnel = config.splitTunnel;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._transportProtocol = config.transportProtocol;
    this._vpcId = config.vpcId;
    this._vpnPort = config.vpnPort;
    this._authenticationOptions.internalValue = config.authenticationOptions;
    this._clientConnectOptions.internalValue = config.clientConnectOptions;
    this._clientLoginBannerOptions.internalValue = config.clientLoginBannerOptions;
    this._connectionLogOptions.internalValue = config.connectionLogOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // client_cidr_block - computed: false, optional: false, required: true
  private _clientCidrBlock?: string; 
  public get clientCidrBlock() {
    return this.getStringAttribute('client_cidr_block');
  }
  public set clientCidrBlock(value: string) {
    this._clientCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCidrBlockInput() {
    return this._clientCidrBlock;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
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

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // self_service_portal - computed: false, optional: true, required: false
  private _selfServicePortal?: string; 
  public get selfServicePortal() {
    return this.getStringAttribute('self_service_portal');
  }
  public set selfServicePortal(value: string) {
    this._selfServicePortal = value;
  }
  public resetSelfServicePortal() {
    this._selfServicePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServicePortalInput() {
    return this._selfServicePortal;
  }

  // server_certificate_arn - computed: false, optional: false, required: true
  private _serverCertificateArn?: string; 
  public get serverCertificateArn() {
    return this.getStringAttribute('server_certificate_arn');
  }
  public set serverCertificateArn(value: string) {
    this._serverCertificateArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateArnInput() {
    return this._serverCertificateArn;
  }

  // session_timeout_hours - computed: false, optional: true, required: false
  private _sessionTimeoutHours?: number; 
  public get sessionTimeoutHours() {
    return this.getNumberAttribute('session_timeout_hours');
  }
  public set sessionTimeoutHours(value: number) {
    this._sessionTimeoutHours = value;
  }
  public resetSessionTimeoutHours() {
    this._sessionTimeoutHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutHoursInput() {
    return this._sessionTimeoutHours;
  }

  // split_tunnel - computed: false, optional: true, required: false
  private _splitTunnel?: boolean | cdktf.IResolvable; 
  public get splitTunnel() {
    return this.getBooleanAttribute('split_tunnel');
  }
  public set splitTunnel(value: boolean | cdktf.IResolvable) {
    this._splitTunnel = value;
  }
  public resetSplitTunnel() {
    this._splitTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTunnelInput() {
    return this._splitTunnel;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // transport_protocol - computed: false, optional: true, required: false
  private _transportProtocol?: string; 
  public get transportProtocol() {
    return this.getStringAttribute('transport_protocol');
  }
  public set transportProtocol(value: string) {
    this._transportProtocol = value;
  }
  public resetTransportProtocol() {
    this._transportProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportProtocolInput() {
    return this._transportProtocol;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpn_port - computed: false, optional: true, required: false
  private _vpnPort?: number; 
  public get vpnPort() {
    return this.getNumberAttribute('vpn_port');
  }
  public set vpnPort(value: number) {
    this._vpnPort = value;
  }
  public resetVpnPort() {
    this._vpnPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnPortInput() {
    return this._vpnPort;
  }

  // authentication_options - computed: false, optional: false, required: true
  private _authenticationOptions = new Ec2ClientVpnEndpointAuthenticationOptionsList(this, "authentication_options", true);
  public get authenticationOptions() {
    return this._authenticationOptions;
  }
  public putAuthenticationOptions(value: Ec2ClientVpnEndpointAuthenticationOptions[] | cdktf.IResolvable) {
    this._authenticationOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOptionsInput() {
    return this._authenticationOptions.internalValue;
  }

  // client_connect_options - computed: false, optional: true, required: false
  private _clientConnectOptions = new Ec2ClientVpnEndpointClientConnectOptionsOutputReference(this, "client_connect_options");
  public get clientConnectOptions() {
    return this._clientConnectOptions;
  }
  public putClientConnectOptions(value: Ec2ClientVpnEndpointClientConnectOptions) {
    this._clientConnectOptions.internalValue = value;
  }
  public resetClientConnectOptions() {
    this._clientConnectOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnectOptionsInput() {
    return this._clientConnectOptions.internalValue;
  }

  // client_login_banner_options - computed: false, optional: true, required: false
  private _clientLoginBannerOptions = new Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference(this, "client_login_banner_options");
  public get clientLoginBannerOptions() {
    return this._clientLoginBannerOptions;
  }
  public putClientLoginBannerOptions(value: Ec2ClientVpnEndpointClientLoginBannerOptions) {
    this._clientLoginBannerOptions.internalValue = value;
  }
  public resetClientLoginBannerOptions() {
    this._clientLoginBannerOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLoginBannerOptionsInput() {
    return this._clientLoginBannerOptions.internalValue;
  }

  // connection_log_options - computed: false, optional: false, required: true
  private _connectionLogOptions = new Ec2ClientVpnEndpointConnectionLogOptionsOutputReference(this, "connection_log_options");
  public get connectionLogOptions() {
    return this._connectionLogOptions;
  }
  public putConnectionLogOptions(value: Ec2ClientVpnEndpointConnectionLogOptions) {
    this._connectionLogOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLogOptionsInput() {
    return this._connectionLogOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_cidr_block: cdktf.stringToTerraform(this._clientCidrBlock),
      description: cdktf.stringToTerraform(this._description),
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServers),
      id: cdktf.stringToTerraform(this._id),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      self_service_portal: cdktf.stringToTerraform(this._selfServicePortal),
      server_certificate_arn: cdktf.stringToTerraform(this._serverCertificateArn),
      session_timeout_hours: cdktf.numberToTerraform(this._sessionTimeoutHours),
      split_tunnel: cdktf.booleanToTerraform(this._splitTunnel),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      transport_protocol: cdktf.stringToTerraform(this._transportProtocol),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpn_port: cdktf.numberToTerraform(this._vpnPort),
      authentication_options: cdktf.listMapper(ec2ClientVpnEndpointAuthenticationOptionsToTerraform, true)(this._authenticationOptions.internalValue),
      client_connect_options: ec2ClientVpnEndpointClientConnectOptionsToTerraform(this._clientConnectOptions.internalValue),
      client_login_banner_options: ec2ClientVpnEndpointClientLoginBannerOptionsToTerraform(this._clientLoginBannerOptions.internalValue),
      connection_log_options: ec2ClientVpnEndpointConnectionLogOptionsToTerraform(this._connectionLogOptions.internalValue),
    };
  }
}
