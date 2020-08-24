// https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Ec2ClientVpnEndpointConfig extends TerraformMetaArguments {
  readonly clientCidrBlock: string;
  readonly description?: string;
  readonly dnsServers?: string[];
  readonly serverCertificateArn: string;
  readonly splitTunnel?: boolean;
  readonly tags?: { [key: string]: string };
  readonly transportProtocol?: string;
  /** authentication_options block */
  readonly authenticationOptions: Ec2ClientVpnEndpointAuthenticationOptions[];
  /** connection_log_options block */
  readonly connectionLogOptions: Ec2ClientVpnEndpointConnectionLogOptions[];
}
export interface Ec2ClientVpnEndpointAuthenticationOptions {
  readonly activeDirectoryId?: string;
  readonly rootCertificateChainArn?: string;
  readonly type: string;
}
export interface Ec2ClientVpnEndpointConnectionLogOptions {
  readonly cloudwatchLogGroup?: string;
  readonly cloudwatchLogStream?: string;
  readonly enabled: boolean;
}

// Resource

export class Ec2ClientVpnEndpoint extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._serverCertificateArn = config.serverCertificateArn;
    this._splitTunnel = config.splitTunnel;
    this._tags = config.tags;
    this._transportProtocol = config.transportProtocol;
    this._authenticationOptions = config.authenticationOptions;
    this._connectionLogOptions = config.connectionLogOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // client_cidr_block - computed: false, optional: false, required: true
  private _clientCidrBlock: string;
  public get clientCidrBlock() {
    return this._clientCidrBlock;
  }
  public set clientCidrBlock(value: string) {
    this._clientCidrBlock = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // dns_name - computed: true, optional: false, required: true
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[];
  public get dnsServers() {
    return this._dnsServers;
  }
  public set dnsServers(value: string[] | undefined) {
    this._dnsServers = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // server_certificate_arn - computed: false, optional: false, required: true
  private _serverCertificateArn: string;
  public get serverCertificateArn() {
    return this._serverCertificateArn;
  }
  public set serverCertificateArn(value: string) {
    this._serverCertificateArn = value;
  }

  // split_tunnel - computed: false, optional: true, required: false
  private _splitTunnel?: boolean;
  public get splitTunnel() {
    return this._splitTunnel;
  }
  public set splitTunnel(value: boolean | undefined) {
    this._splitTunnel = value;
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

  // transport_protocol - computed: false, optional: true, required: false
  private _transportProtocol?: string;
  public get transportProtocol() {
    return this._transportProtocol;
  }
  public set transportProtocol(value: string | undefined) {
    this._transportProtocol = value;
  }

  // authentication_options - computed: false, optional: false, required: true
  private _authenticationOptions: Ec2ClientVpnEndpointAuthenticationOptions[];
  public get authenticationOptions() {
    return this._authenticationOptions;
  }
  public set authenticationOptions(value: Ec2ClientVpnEndpointAuthenticationOptions[]) {
    this._authenticationOptions = value;
  }

  // connection_log_options - computed: false, optional: false, required: true
  private _connectionLogOptions: Ec2ClientVpnEndpointConnectionLogOptions[];
  public get connectionLogOptions() {
    return this._connectionLogOptions;
  }
  public set connectionLogOptions(value: Ec2ClientVpnEndpointConnectionLogOptions[]) {
    this._connectionLogOptions = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_cidr_block: this._clientCidrBlock,
      description: this._description,
      dns_servers: this._dnsServers,
      server_certificate_arn: this._serverCertificateArn,
      split_tunnel: this._splitTunnel,
      tags: this._tags,
      transport_protocol: this._transportProtocol,
      authentication_options: this._authenticationOptions,
      connection_log_options: this._connectionLogOptions,
    };
  }
}
