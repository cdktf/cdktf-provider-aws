// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface DataAwsEc2ClientVpnEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#client_vpn_endpoint_id DataAwsEc2ClientVpnEndpoint#client_vpn_endpoint_id}
  */
  readonly clientVpnEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#tags DataAwsEc2ClientVpnEndpoint#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#filter DataAwsEc2ClientVpnEndpoint#filter}
  */
  readonly filter?: DataAwsEc2ClientVpnEndpointFilter[] | cdktf.IResolvable;
}
export class DataAwsEc2ClientVpnEndpointAuthenticationOptions extends cdktf.ComplexComputedList {

  // active_directory_id - computed: true, optional: false, required: false
  public get activeDirectoryId() {
    return this.getStringAttribute('active_directory_id');
  }

  // root_certificate_chain_arn - computed: true, optional: false, required: false
  public get rootCertificateChainArn() {
    return this.getStringAttribute('root_certificate_chain_arn');
  }

  // saml_provider_arn - computed: true, optional: false, required: false
  public get samlProviderArn() {
    return this.getStringAttribute('saml_provider_arn');
  }

  // self_service_saml_provider_arn - computed: true, optional: false, required: false
  public get selfServiceSamlProviderArn() {
    return this.getStringAttribute('self_service_saml_provider_arn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataAwsEc2ClientVpnEndpointClientConnectOptions extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // lambda_function_arn - computed: true, optional: false, required: false
  public get lambdaFunctionArn() {
    return this.getStringAttribute('lambda_function_arn');
  }
}
export class DataAwsEc2ClientVpnEndpointClientLoginBannerOptions extends cdktf.ComplexComputedList {

  // banner_text - computed: true, optional: false, required: false
  public get bannerText() {
    return this.getStringAttribute('banner_text');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class DataAwsEc2ClientVpnEndpointConnectionLogOptions extends cdktf.ComplexComputedList {

  // cloudwatch_log_group - computed: true, optional: false, required: false
  public get cloudwatchLogGroup() {
    return this.getStringAttribute('cloudwatch_log_group');
  }

  // cloudwatch_log_stream - computed: true, optional: false, required: false
  public get cloudwatchLogStream() {
    return this.getStringAttribute('cloudwatch_log_stream');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsEc2ClientVpnEndpointFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#name DataAwsEc2ClientVpnEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#values DataAwsEc2ClientVpnEndpoint#values}
  */
  readonly values: string[];
}

export function dataAwsEc2ClientVpnEndpointFilterToTerraform(struct?: DataAwsEc2ClientVpnEndpointFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint aws_ec2_client_vpn_endpoint}
*/
export class DataAwsEc2ClientVpnEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ec2_client_vpn_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint aws_ec2_client_vpn_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEc2ClientVpnEndpointConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsEc2ClientVpnEndpointConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_client_vpn_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clientVpnEndpointId = config.clientVpnEndpointId;
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authentication_options - computed: true, optional: false, required: false
  public authenticationOptions(index: string) {
    return new DataAwsEc2ClientVpnEndpointAuthenticationOptions(this, 'authentication_options', index, false);
  }

  // client_cidr_block - computed: true, optional: false, required: false
  public get clientCidrBlock() {
    return this.getStringAttribute('client_cidr_block');
  }

  // client_connect_options - computed: true, optional: false, required: false
  public clientConnectOptions(index: string) {
    return new DataAwsEc2ClientVpnEndpointClientConnectOptions(this, 'client_connect_options', index, false);
  }

  // client_login_banner_options - computed: true, optional: false, required: false
  public clientLoginBannerOptions(index: string) {
    return new DataAwsEc2ClientVpnEndpointClientLoginBannerOptions(this, 'client_login_banner_options', index, false);
  }

  // client_vpn_endpoint_id - computed: true, optional: true, required: false
  private _clientVpnEndpointId?: string; 
  public get clientVpnEndpointId() {
    return this.getStringAttribute('client_vpn_endpoint_id');
  }
  public set clientVpnEndpointId(value: string) {
    this._clientVpnEndpointId = value;
  }
  public resetClientVpnEndpointId() {
    this._clientVpnEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientVpnEndpointIdInput() {
    return this._clientVpnEndpointId;
  }

  // connection_log_options - computed: true, optional: false, required: false
  public connectionLogOptions(index: string) {
    return new DataAwsEc2ClientVpnEndpointConnectionLogOptions(this, 'connection_log_options', index, false);
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // dns_servers - computed: true, optional: false, required: false
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // self_service_portal - computed: true, optional: false, required: false
  public get selfServicePortal() {
    return this.getStringAttribute('self_service_portal');
  }

  // server_certificate_arn - computed: true, optional: false, required: false
  public get serverCertificateArn() {
    return this.getStringAttribute('server_certificate_arn');
  }

  // session_timeout_hours - computed: true, optional: false, required: false
  public get sessionTimeoutHours() {
    return this.getNumberAttribute('session_timeout_hours');
  }

  // split_tunnel - computed: true, optional: false, required: false
  public get splitTunnel() {
    return this.getBooleanAttribute('split_tunnel');
  }

  // tags - computed: true, optional: true, required: false
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

  // transport_protocol - computed: true, optional: false, required: false
  public get transportProtocol() {
    return this.getStringAttribute('transport_protocol');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpn_port - computed: true, optional: false, required: false
  public get vpnPort() {
    return this.getNumberAttribute('vpn_port');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2ClientVpnEndpointFilter[] | cdktf.IResolvable; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('filter')));
  }
  public set filter(value: DataAwsEc2ClientVpnEndpointFilter[] | cdktf.IResolvable) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_vpn_endpoint_id: cdktf.stringToTerraform(this._clientVpnEndpointId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsEc2ClientVpnEndpointFilterToTerraform)(this._filter),
    };
  }
}
