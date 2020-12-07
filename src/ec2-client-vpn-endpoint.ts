// https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2ClientVpnEndpointConfig extends cdktf.TerraformMetaArguments {
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

function ec2ClientVpnEndpointAuthenticationOptionsToTerraform(struct?: Ec2ClientVpnEndpointAuthenticationOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    active_directory_id: cdktf.stringToTerraform(struct!.activeDirectoryId),
    root_certificate_chain_arn: cdktf.stringToTerraform(struct!.rootCertificateChainArn),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Ec2ClientVpnEndpointConnectionLogOptions {
  readonly cloudwatchLogGroup?: string;
  readonly cloudwatchLogStream?: string;
  readonly enabled: boolean;
}

function ec2ClientVpnEndpointConnectionLogOptionsToTerraform(struct?: Ec2ClientVpnEndpointConnectionLogOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_log_group: cdktf.stringToTerraform(struct!.cloudwatchLogGroup),
    cloudwatch_log_stream: cdktf.stringToTerraform(struct!.cloudwatchLogStream),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


// Resource

export class Ec2ClientVpnEndpoint extends cdktf.TerraformResource {

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
  private _splitTunnel?: boolean;
  public get splitTunnel() {
    return this.getBooleanAttribute('split_tunnel');
  }
  public set splitTunnel(value: boolean ) {
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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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
      server_certificate_arn: cdktf.stringToTerraform(this._serverCertificateArn),
      split_tunnel: cdktf.booleanToTerraform(this._splitTunnel),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      transport_protocol: cdktf.stringToTerraform(this._transportProtocol),
      authentication_options: cdktf.listMapper(ec2ClientVpnEndpointAuthenticationOptionsToTerraform)(this._authenticationOptions),
      connection_log_options: cdktf.listMapper(ec2ClientVpnEndpointConnectionLogOptionsToTerraform)(this._connectionLogOptions),
    };
  }
}
