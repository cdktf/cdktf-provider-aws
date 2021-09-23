// https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2ClientVpnEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#client_cidr_block Ec2ClientVpnEndpoint#client_cidr_block}
  */
  readonly clientCidrBlock: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#description Ec2ClientVpnEndpoint#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#dns_servers Ec2ClientVpnEndpoint#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#self_service_portal Ec2ClientVpnEndpoint#self_service_portal}
  */
  readonly selfServicePortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#server_certificate_arn Ec2ClientVpnEndpoint#server_certificate_arn}
  */
  readonly serverCertificateArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#split_tunnel Ec2ClientVpnEndpoint#split_tunnel}
  */
  readonly splitTunnel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#tags Ec2ClientVpnEndpoint#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#tags_all Ec2ClientVpnEndpoint#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#transport_protocol Ec2ClientVpnEndpoint#transport_protocol}
  */
  readonly transportProtocol?: string;
  /**
  * authentication_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#authentication_options Ec2ClientVpnEndpoint#authentication_options}
  */
  readonly authenticationOptions: Ec2ClientVpnEndpointAuthenticationOptions[];
  /**
  * connection_log_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#connection_log_options Ec2ClientVpnEndpoint#connection_log_options}
  */
  readonly connectionLogOptions: Ec2ClientVpnEndpointConnectionLogOptions[];
}
export interface Ec2ClientVpnEndpointAuthenticationOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#active_directory_id Ec2ClientVpnEndpoint#active_directory_id}
  */
  readonly activeDirectoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#root_certificate_chain_arn Ec2ClientVpnEndpoint#root_certificate_chain_arn}
  */
  readonly rootCertificateChainArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#saml_provider_arn Ec2ClientVpnEndpoint#saml_provider_arn}
  */
  readonly samlProviderArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#self_service_saml_provider_arn Ec2ClientVpnEndpoint#self_service_saml_provider_arn}
  */
  readonly selfServiceSamlProviderArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#type Ec2ClientVpnEndpoint#type}
  */
  readonly type: string;
}

function ec2ClientVpnEndpointAuthenticationOptionsToTerraform(struct?: Ec2ClientVpnEndpointAuthenticationOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    active_directory_id: cdktf.stringToTerraform(struct!.activeDirectoryId),
    root_certificate_chain_arn: cdktf.stringToTerraform(struct!.rootCertificateChainArn),
    saml_provider_arn: cdktf.stringToTerraform(struct!.samlProviderArn),
    self_service_saml_provider_arn: cdktf.stringToTerraform(struct!.selfServiceSamlProviderArn),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Ec2ClientVpnEndpointConnectionLogOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#cloudwatch_log_group Ec2ClientVpnEndpoint#cloudwatch_log_group}
  */
  readonly cloudwatchLogGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#cloudwatch_log_stream Ec2ClientVpnEndpoint#cloudwatch_log_stream}
  */
  readonly cloudwatchLogStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#enabled Ec2ClientVpnEndpoint#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

function ec2ClientVpnEndpointConnectionLogOptionsToTerraform(struct?: Ec2ClientVpnEndpointConnectionLogOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_log_group: cdktf.stringToTerraform(struct!.cloudwatchLogGroup),
    cloudwatch_log_stream: cdktf.stringToTerraform(struct!.cloudwatchLogStream),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html aws_ec2_client_vpn_endpoint}
*/
export class Ec2ClientVpnEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ec2_client_vpn_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html aws_ec2_client_vpn_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2ClientVpnEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2ClientVpnEndpointConfig) {
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
    this._clientCidrBlock = config.clientCidrBlock;
    this._description = config.description;
    this._dnsServers = config.dnsServers;
    this._selfServicePortal = config.selfServicePortal;
    this._serverCertificateArn = config.serverCertificateArn;
    this._splitTunnel = config.splitTunnel;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._transportProtocol = config.transportProtocol;
    this._authenticationOptions = config.authenticationOptions;
    this._connectionLogOptions = config.connectionLogOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // client_cidr_block - computed: false, optional: false, required: true
  private _clientCidrBlock: string;
  public get clientCidrBlock() {
    return this.getStringAttribute('client_cidr_block');
  }
  public set clientCidrBlock(value: string) {
    this._clientCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCidrBlockInput() {
    return this._clientCidrBlock
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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
  public set dnsServers(value: string[] ) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // self_service_portal - computed: false, optional: true, required: false
  private _selfServicePortal?: string;
  public get selfServicePortal() {
    return this.getStringAttribute('self_service_portal');
  }
  public set selfServicePortal(value: string ) {
    this._selfServicePortal = value;
  }
  public resetSelfServicePortal() {
    this._selfServicePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServicePortalInput() {
    return this._selfServicePortal
  }

  // server_certificate_arn - computed: false, optional: false, required: true
  private _serverCertificateArn: string;
  public get serverCertificateArn() {
    return this.getStringAttribute('server_certificate_arn');
  }
  public set serverCertificateArn(value: string) {
    this._serverCertificateArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateArnInput() {
    return this._serverCertificateArn
  }

  // split_tunnel - computed: false, optional: true, required: false
  private _splitTunnel?: boolean | cdktf.IResolvable;
  public get splitTunnel() {
    return this.getBooleanAttribute('split_tunnel');
  }
  public set splitTunnel(value: boolean | cdktf.IResolvable ) {
    this._splitTunnel = value;
  }
  public resetSplitTunnel() {
    this._splitTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTunnelInput() {
    return this._splitTunnel
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // transport_protocol - computed: false, optional: true, required: false
  private _transportProtocol?: string;
  public get transportProtocol() {
    return this.getStringAttribute('transport_protocol');
  }
  public set transportProtocol(value: string ) {
    this._transportProtocol = value;
  }
  public resetTransportProtocol() {
    this._transportProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportProtocolInput() {
    return this._transportProtocol
  }

  // authentication_options - computed: false, optional: false, required: true
  private _authenticationOptions: Ec2ClientVpnEndpointAuthenticationOptions[];
  public get authenticationOptions() {
    return this.interpolationForAttribute('authentication_options') as any;
  }
  public set authenticationOptions(value: Ec2ClientVpnEndpointAuthenticationOptions[]) {
    this._authenticationOptions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOptionsInput() {
    return this._authenticationOptions
  }

  // connection_log_options - computed: false, optional: false, required: true
  private _connectionLogOptions: Ec2ClientVpnEndpointConnectionLogOptions[];
  public get connectionLogOptions() {
    return this.interpolationForAttribute('connection_log_options') as any;
  }
  public set connectionLogOptions(value: Ec2ClientVpnEndpointConnectionLogOptions[]) {
    this._connectionLogOptions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLogOptionsInput() {
    return this._connectionLogOptions
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_cidr_block: cdktf.stringToTerraform(this._clientCidrBlock),
      description: cdktf.stringToTerraform(this._description),
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsServers),
      self_service_portal: cdktf.stringToTerraform(this._selfServicePortal),
      server_certificate_arn: cdktf.stringToTerraform(this._serverCertificateArn),
      split_tunnel: cdktf.booleanToTerraform(this._splitTunnel),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      transport_protocol: cdktf.stringToTerraform(this._transportProtocol),
      authentication_options: cdktf.listMapper(ec2ClientVpnEndpointAuthenticationOptionsToTerraform)(this._authenticationOptions),
      connection_log_options: cdktf.listMapper(ec2ClientVpnEndpointConnectionLogOptionsToTerraform)(this._connectionLogOptions),
    };
  }
}
