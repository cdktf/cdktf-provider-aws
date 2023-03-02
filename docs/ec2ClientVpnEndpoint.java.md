# `ec2ClientVpnEndpoint` Submodule <a name="`ec2ClientVpnEndpoint` Submodule" id="@cdktf/provider-aws.ec2ClientVpnEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ClientVpnEndpoint <a name="Ec2ClientVpnEndpoint" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint aws_ec2_client_vpn_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_client_vpn_endpoint.Ec2ClientVpnEndpoint;

Ec2ClientVpnEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .authenticationOptions(IResolvable)
    .authenticationOptions(java.util.List<Ec2ClientVpnEndpointAuthenticationOptions>)
    .clientCidrBlock(java.lang.String)
    .connectionLogOptions(Ec2ClientVpnEndpointConnectionLogOptions)
    .serverCertificateArn(java.lang.String)
//  .clientConnectOptions(Ec2ClientVpnEndpointClientConnectOptions)
//  .clientLoginBannerOptions(Ec2ClientVpnEndpointClientLoginBannerOptions)
//  .description(java.lang.String)
//  .dnsServers(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .selfServicePortal(java.lang.String)
//  .sessionTimeoutHours(java.lang.Number)
//  .splitTunnel(java.lang.Boolean)
//  .splitTunnel(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .transportProtocol(java.lang.String)
//  .vpcId(java.lang.String)
//  .vpnPort(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.authenticationOptions">authenticationOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>></code> | authentication_options block. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.clientCidrBlock">clientCidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#client_cidr_block Ec2ClientVpnEndpoint#client_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.connectionLogOptions">connectionLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a></code> | connection_log_options block. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.serverCertificateArn">serverCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#server_certificate_arn Ec2ClientVpnEndpoint#server_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.clientConnectOptions">clientConnectOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a></code> | client_connect_options block. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.clientLoginBannerOptions">clientLoginBannerOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a></code> | client_login_banner_options block. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#description Ec2ClientVpnEndpoint#description}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#dns_servers Ec2ClientVpnEndpoint#dns_servers}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#id Ec2ClientVpnEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#security_group_ids Ec2ClientVpnEndpoint#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.selfServicePortal">selfServicePortal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#self_service_portal Ec2ClientVpnEndpoint#self_service_portal}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.sessionTimeoutHours">sessionTimeoutHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#session_timeout_hours Ec2ClientVpnEndpoint#session_timeout_hours}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.splitTunnel">splitTunnel</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#split_tunnel Ec2ClientVpnEndpoint#split_tunnel}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#tags Ec2ClientVpnEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#tags_all Ec2ClientVpnEndpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.transportProtocol">transportProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#transport_protocol Ec2ClientVpnEndpoint#transport_protocol}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#vpc_id Ec2ClientVpnEndpoint#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.vpnPort">vpnPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#vpn_port Ec2ClientVpnEndpoint#vpn_port}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticationOptions`<sup>Required</sup> <a name="authenticationOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.authenticationOptions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>>

authentication_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#authentication_options Ec2ClientVpnEndpoint#authentication_options}

---

##### `clientCidrBlock`<sup>Required</sup> <a name="clientCidrBlock" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.clientCidrBlock"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#client_cidr_block Ec2ClientVpnEndpoint#client_cidr_block}.

---

##### `connectionLogOptions`<sup>Required</sup> <a name="connectionLogOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.connectionLogOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

connection_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#connection_log_options Ec2ClientVpnEndpoint#connection_log_options}

---

##### `serverCertificateArn`<sup>Required</sup> <a name="serverCertificateArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.serverCertificateArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#server_certificate_arn Ec2ClientVpnEndpoint#server_certificate_arn}.

---

##### `clientConnectOptions`<sup>Optional</sup> <a name="clientConnectOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.clientConnectOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

client_connect_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#client_connect_options Ec2ClientVpnEndpoint#client_connect_options}

---

##### `clientLoginBannerOptions`<sup>Optional</sup> <a name="clientLoginBannerOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.clientLoginBannerOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

client_login_banner_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#client_login_banner_options Ec2ClientVpnEndpoint#client_login_banner_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#description Ec2ClientVpnEndpoint#description}.

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.dnsServers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#dns_servers Ec2ClientVpnEndpoint#dns_servers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#id Ec2ClientVpnEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#security_group_ids Ec2ClientVpnEndpoint#security_group_ids}.

---

##### `selfServicePortal`<sup>Optional</sup> <a name="selfServicePortal" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.selfServicePortal"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#self_service_portal Ec2ClientVpnEndpoint#self_service_portal}.

---

##### `sessionTimeoutHours`<sup>Optional</sup> <a name="sessionTimeoutHours" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.sessionTimeoutHours"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#session_timeout_hours Ec2ClientVpnEndpoint#session_timeout_hours}.

---

##### `splitTunnel`<sup>Optional</sup> <a name="splitTunnel" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.splitTunnel"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#split_tunnel Ec2ClientVpnEndpoint#split_tunnel}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#tags Ec2ClientVpnEndpoint#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#tags_all Ec2ClientVpnEndpoint#tags_all}.

---

##### `transportProtocol`<sup>Optional</sup> <a name="transportProtocol" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.transportProtocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#transport_protocol Ec2ClientVpnEndpoint#transport_protocol}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#vpc_id Ec2ClientVpnEndpoint#vpc_id}.

---

##### `vpnPort`<sup>Optional</sup> <a name="vpnPort" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.vpnPort"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#vpn_port Ec2ClientVpnEndpoint#vpn_port}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthenticationOptions">putAuthenticationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientConnectOptions">putClientConnectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientLoginBannerOptions">putClientLoginBannerOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putConnectionLogOptions">putConnectionLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientConnectOptions">resetClientConnectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientLoginBannerOptions">resetClientLoginBannerOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDnsServers">resetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSelfServicePortal">resetSelfServicePortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSessionTimeoutHours">resetSessionTimeoutHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSplitTunnel">resetSplitTunnel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTransportProtocol">resetTransportProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetVpcId">resetVpcId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetVpnPort">resetVpnPort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAuthenticationOptions` <a name="putAuthenticationOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthenticationOptions"></a>

```java
public void putAuthenticationOptions(IResolvable OR java.util.List<Ec2ClientVpnEndpointAuthenticationOptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthenticationOptions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>>

---

##### `putClientConnectOptions` <a name="putClientConnectOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientConnectOptions"></a>

```java
public void putClientConnectOptions(Ec2ClientVpnEndpointClientConnectOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientConnectOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

---

##### `putClientLoginBannerOptions` <a name="putClientLoginBannerOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientLoginBannerOptions"></a>

```java
public void putClientLoginBannerOptions(Ec2ClientVpnEndpointClientLoginBannerOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientLoginBannerOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

---

##### `putConnectionLogOptions` <a name="putConnectionLogOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putConnectionLogOptions"></a>

```java
public void putConnectionLogOptions(Ec2ClientVpnEndpointConnectionLogOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putConnectionLogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

---

##### `resetClientConnectOptions` <a name="resetClientConnectOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientConnectOptions"></a>

```java
public void resetClientConnectOptions()
```

##### `resetClientLoginBannerOptions` <a name="resetClientLoginBannerOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientLoginBannerOptions"></a>

```java
public void resetClientLoginBannerOptions()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDnsServers` <a name="resetDnsServers" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDnsServers"></a>

```java
public void resetDnsServers()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSelfServicePortal` <a name="resetSelfServicePortal" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSelfServicePortal"></a>

```java
public void resetSelfServicePortal()
```

##### `resetSessionTimeoutHours` <a name="resetSessionTimeoutHours" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSessionTimeoutHours"></a>

```java
public void resetSessionTimeoutHours()
```

##### `resetSplitTunnel` <a name="resetSplitTunnel" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSplitTunnel"></a>

```java
public void resetSplitTunnel()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTransportProtocol` <a name="resetTransportProtocol" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTransportProtocol"></a>

```java
public void resetTransportProtocol()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetVpcId"></a>

```java
public void resetVpcId()
```

##### `resetVpnPort` <a name="resetVpnPort" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetVpnPort"></a>

```java
public void resetVpnPort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_client_vpn_endpoint.Ec2ClientVpnEndpoint;

Ec2ClientVpnEndpoint.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_client_vpn_endpoint.Ec2ClientVpnEndpoint;

Ec2ClientVpnEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_client_vpn_endpoint.Ec2ClientVpnEndpoint;

Ec2ClientVpnEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authenticationOptions">authenticationOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList">Ec2ClientVpnEndpointAuthenticationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientConnectOptions">clientConnectOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference">Ec2ClientVpnEndpointClientConnectOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientLoginBannerOptions">clientLoginBannerOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference">Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connectionLogOptions">connectionLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference">Ec2ClientVpnEndpointConnectionLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authenticationOptionsInput">authenticationOptionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientCidrBlockInput">clientCidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientConnectOptionsInput">clientConnectOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientLoginBannerOptionsInput">clientLoginBannerOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connectionLogOptionsInput">connectionLogOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsServersInput">dnsServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.selfServicePortalInput">selfServicePortalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.serverCertificateArnInput">serverCertificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.sessionTimeoutHoursInput">sessionTimeoutHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.splitTunnelInput">splitTunnelInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transportProtocolInput">transportProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpnPortInput">vpnPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientCidrBlock">clientCidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.selfServicePortal">selfServicePortal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.serverCertificateArn">serverCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.sessionTimeoutHours">sessionTimeoutHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.splitTunnel">splitTunnel</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transportProtocol">transportProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpnPort">vpnPort</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `authenticationOptions`<sup>Required</sup> <a name="authenticationOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authenticationOptions"></a>

```java
public Ec2ClientVpnEndpointAuthenticationOptionsList getAuthenticationOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList">Ec2ClientVpnEndpointAuthenticationOptionsList</a>

---

##### `clientConnectOptions`<sup>Required</sup> <a name="clientConnectOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientConnectOptions"></a>

```java
public Ec2ClientVpnEndpointClientConnectOptionsOutputReference getClientConnectOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference">Ec2ClientVpnEndpointClientConnectOptionsOutputReference</a>

---

##### `clientLoginBannerOptions`<sup>Required</sup> <a name="clientLoginBannerOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientLoginBannerOptions"></a>

```java
public Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference getClientLoginBannerOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference">Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference</a>

---

##### `connectionLogOptions`<sup>Required</sup> <a name="connectionLogOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connectionLogOptions"></a>

```java
public Ec2ClientVpnEndpointConnectionLogOptionsOutputReference getConnectionLogOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference">Ec2ClientVpnEndpointConnectionLogOptionsOutputReference</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `authenticationOptionsInput`<sup>Optional</sup> <a name="authenticationOptionsInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authenticationOptionsInput"></a>

```java
public java.lang.Object getAuthenticationOptionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>>

---

##### `clientCidrBlockInput`<sup>Optional</sup> <a name="clientCidrBlockInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientCidrBlockInput"></a>

```java
public java.lang.String getClientCidrBlockInput();
```

- *Type:* java.lang.String

---

##### `clientConnectOptionsInput`<sup>Optional</sup> <a name="clientConnectOptionsInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientConnectOptionsInput"></a>

```java
public Ec2ClientVpnEndpointClientConnectOptions getClientConnectOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

---

##### `clientLoginBannerOptionsInput`<sup>Optional</sup> <a name="clientLoginBannerOptionsInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientLoginBannerOptionsInput"></a>

```java
public Ec2ClientVpnEndpointClientLoginBannerOptions getClientLoginBannerOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

---

##### `connectionLogOptionsInput`<sup>Optional</sup> <a name="connectionLogOptionsInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connectionLogOptionsInput"></a>

```java
public Ec2ClientVpnEndpointConnectionLogOptions getConnectionLogOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dnsServersInput`<sup>Optional</sup> <a name="dnsServersInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsServersInput"></a>

```java
public java.util.List<java.lang.String> getDnsServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selfServicePortalInput`<sup>Optional</sup> <a name="selfServicePortalInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.selfServicePortalInput"></a>

```java
public java.lang.String getSelfServicePortalInput();
```

- *Type:* java.lang.String

---

##### `serverCertificateArnInput`<sup>Optional</sup> <a name="serverCertificateArnInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.serverCertificateArnInput"></a>

```java
public java.lang.String getServerCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `sessionTimeoutHoursInput`<sup>Optional</sup> <a name="sessionTimeoutHoursInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.sessionTimeoutHoursInput"></a>

```java
public java.lang.Number getSessionTimeoutHoursInput();
```

- *Type:* java.lang.Number

---

##### `splitTunnelInput`<sup>Optional</sup> <a name="splitTunnelInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.splitTunnelInput"></a>

```java
public java.lang.Object getSplitTunnelInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `transportProtocolInput`<sup>Optional</sup> <a name="transportProtocolInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transportProtocolInput"></a>

```java
public java.lang.String getTransportProtocolInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `vpnPortInput`<sup>Optional</sup> <a name="vpnPortInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpnPortInput"></a>

```java
public java.lang.Number getVpnPortInput();
```

- *Type:* java.lang.Number

---

##### `clientCidrBlock`<sup>Required</sup> <a name="clientCidrBlock" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientCidrBlock"></a>

```java
public java.lang.String getClientCidrBlock();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selfServicePortal`<sup>Required</sup> <a name="selfServicePortal" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.selfServicePortal"></a>

```java
public java.lang.String getSelfServicePortal();
```

- *Type:* java.lang.String

---

##### `serverCertificateArn`<sup>Required</sup> <a name="serverCertificateArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.serverCertificateArn"></a>

```java
public java.lang.String getServerCertificateArn();
```

- *Type:* java.lang.String

---

##### `sessionTimeoutHours`<sup>Required</sup> <a name="sessionTimeoutHours" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.sessionTimeoutHours"></a>

```java
public java.lang.Number getSessionTimeoutHours();
```

- *Type:* java.lang.Number

---

##### `splitTunnel`<sup>Required</sup> <a name="splitTunnel" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.splitTunnel"></a>

```java
public java.lang.Object getSplitTunnel();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `transportProtocol`<sup>Required</sup> <a name="transportProtocol" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transportProtocol"></a>

```java
public java.lang.String getTransportProtocol();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `vpnPort`<sup>Required</sup> <a name="vpnPort" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpnPort"></a>

```java
public java.lang.Number getVpnPort();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ClientVpnEndpointAuthenticationOptions <a name="Ec2ClientVpnEndpointAuthenticationOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_client_vpn_endpoint.Ec2ClientVpnEndpointAuthenticationOptions;

Ec2ClientVpnEndpointAuthenticationOptions.builder()
    .type(java.lang.String)
//  .activeDirectoryId(java.lang.String)
//  .rootCertificateChainArn(java.lang.String)
//  .samlProviderArn(java.lang.String)
//  .selfServiceSamlProviderArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#type Ec2ClientVpnEndpoint#type}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.activeDirectoryId">activeDirectoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#active_directory_id Ec2ClientVpnEndpoint#active_directory_id}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.rootCertificateChainArn">rootCertificateChainArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#root_certificate_chain_arn Ec2ClientVpnEndpoint#root_certificate_chain_arn}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.samlProviderArn">samlProviderArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#saml_provider_arn Ec2ClientVpnEndpoint#saml_provider_arn}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.selfServiceSamlProviderArn">selfServiceSamlProviderArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#self_service_saml_provider_arn Ec2ClientVpnEndpoint#self_service_saml_provider_arn}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#type Ec2ClientVpnEndpoint#type}.

---

##### `activeDirectoryId`<sup>Optional</sup> <a name="activeDirectoryId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.activeDirectoryId"></a>

```java
public java.lang.String getActiveDirectoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#active_directory_id Ec2ClientVpnEndpoint#active_directory_id}.

---

##### `rootCertificateChainArn`<sup>Optional</sup> <a name="rootCertificateChainArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.rootCertificateChainArn"></a>

```java
public java.lang.String getRootCertificateChainArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#root_certificate_chain_arn Ec2ClientVpnEndpoint#root_certificate_chain_arn}.

---

##### `samlProviderArn`<sup>Optional</sup> <a name="samlProviderArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.samlProviderArn"></a>

```java
public java.lang.String getSamlProviderArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#saml_provider_arn Ec2ClientVpnEndpoint#saml_provider_arn}.

---

##### `selfServiceSamlProviderArn`<sup>Optional</sup> <a name="selfServiceSamlProviderArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.selfServiceSamlProviderArn"></a>

```java
public java.lang.String getSelfServiceSamlProviderArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#self_service_saml_provider_arn Ec2ClientVpnEndpoint#self_service_saml_provider_arn}.

---

### Ec2ClientVpnEndpointClientConnectOptions <a name="Ec2ClientVpnEndpointClientConnectOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_client_vpn_endpoint.Ec2ClientVpnEndpointClientConnectOptions;

Ec2ClientVpnEndpointClientConnectOptions.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .lambdaFunctionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#lambda_function_arn Ec2ClientVpnEndpoint#lambda_function_arn}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}.

---

##### `lambdaFunctionArn`<sup>Optional</sup> <a name="lambdaFunctionArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.property.lambdaFunctionArn"></a>

```java
public java.lang.String getLambdaFunctionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#lambda_function_arn Ec2ClientVpnEndpoint#lambda_function_arn}.

---

### Ec2ClientVpnEndpointClientLoginBannerOptions <a name="Ec2ClientVpnEndpointClientLoginBannerOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_client_vpn_endpoint.Ec2ClientVpnEndpointClientLoginBannerOptions;

Ec2ClientVpnEndpointClientLoginBannerOptions.builder()
//  .bannerText(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.property.bannerText">bannerText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#banner_text Ec2ClientVpnEndpoint#banner_text}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}. |

---

##### `bannerText`<sup>Optional</sup> <a name="bannerText" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.property.bannerText"></a>

```java
public java.lang.String getBannerText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#banner_text Ec2ClientVpnEndpoint#banner_text}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}.

---

### Ec2ClientVpnEndpointConfig <a name="Ec2ClientVpnEndpointConfig" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_client_vpn_endpoint.Ec2ClientVpnEndpointConfig;

Ec2ClientVpnEndpointConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .authenticationOptions(IResolvable)
    .authenticationOptions(java.util.List<Ec2ClientVpnEndpointAuthenticationOptions>)
    .clientCidrBlock(java.lang.String)
    .connectionLogOptions(Ec2ClientVpnEndpointConnectionLogOptions)
    .serverCertificateArn(java.lang.String)
//  .clientConnectOptions(Ec2ClientVpnEndpointClientConnectOptions)
//  .clientLoginBannerOptions(Ec2ClientVpnEndpointClientLoginBannerOptions)
//  .description(java.lang.String)
//  .dnsServers(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .selfServicePortal(java.lang.String)
//  .sessionTimeoutHours(java.lang.Number)
//  .splitTunnel(java.lang.Boolean)
//  .splitTunnel(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .transportProtocol(java.lang.String)
//  .vpcId(java.lang.String)
//  .vpnPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.authenticationOptions">authenticationOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>></code> | authentication_options block. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientCidrBlock">clientCidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#client_cidr_block Ec2ClientVpnEndpoint#client_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.connectionLogOptions">connectionLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a></code> | connection_log_options block. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.serverCertificateArn">serverCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#server_certificate_arn Ec2ClientVpnEndpoint#server_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientConnectOptions">clientConnectOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a></code> | client_connect_options block. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientLoginBannerOptions">clientLoginBannerOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a></code> | client_login_banner_options block. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#description Ec2ClientVpnEndpoint#description}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#dns_servers Ec2ClientVpnEndpoint#dns_servers}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#id Ec2ClientVpnEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#security_group_ids Ec2ClientVpnEndpoint#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.selfServicePortal">selfServicePortal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#self_service_portal Ec2ClientVpnEndpoint#self_service_portal}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.sessionTimeoutHours">sessionTimeoutHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#session_timeout_hours Ec2ClientVpnEndpoint#session_timeout_hours}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.splitTunnel">splitTunnel</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#split_tunnel Ec2ClientVpnEndpoint#split_tunnel}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#tags Ec2ClientVpnEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#tags_all Ec2ClientVpnEndpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.transportProtocol">transportProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#transport_protocol Ec2ClientVpnEndpoint#transport_protocol}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#vpc_id Ec2ClientVpnEndpoint#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.vpnPort">vpnPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#vpn_port Ec2ClientVpnEndpoint#vpn_port}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticationOptions`<sup>Required</sup> <a name="authenticationOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.authenticationOptions"></a>

```java
public java.lang.Object getAuthenticationOptions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>>

authentication_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#authentication_options Ec2ClientVpnEndpoint#authentication_options}

---

##### `clientCidrBlock`<sup>Required</sup> <a name="clientCidrBlock" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientCidrBlock"></a>

```java
public java.lang.String getClientCidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#client_cidr_block Ec2ClientVpnEndpoint#client_cidr_block}.

---

##### `connectionLogOptions`<sup>Required</sup> <a name="connectionLogOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.connectionLogOptions"></a>

```java
public Ec2ClientVpnEndpointConnectionLogOptions getConnectionLogOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

connection_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#connection_log_options Ec2ClientVpnEndpoint#connection_log_options}

---

##### `serverCertificateArn`<sup>Required</sup> <a name="serverCertificateArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.serverCertificateArn"></a>

```java
public java.lang.String getServerCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#server_certificate_arn Ec2ClientVpnEndpoint#server_certificate_arn}.

---

##### `clientConnectOptions`<sup>Optional</sup> <a name="clientConnectOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientConnectOptions"></a>

```java
public Ec2ClientVpnEndpointClientConnectOptions getClientConnectOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

client_connect_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#client_connect_options Ec2ClientVpnEndpoint#client_connect_options}

---

##### `clientLoginBannerOptions`<sup>Optional</sup> <a name="clientLoginBannerOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientLoginBannerOptions"></a>

```java
public Ec2ClientVpnEndpointClientLoginBannerOptions getClientLoginBannerOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

client_login_banner_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#client_login_banner_options Ec2ClientVpnEndpoint#client_login_banner_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#description Ec2ClientVpnEndpoint#description}.

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#dns_servers Ec2ClientVpnEndpoint#dns_servers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#id Ec2ClientVpnEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#security_group_ids Ec2ClientVpnEndpoint#security_group_ids}.

---

##### `selfServicePortal`<sup>Optional</sup> <a name="selfServicePortal" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.selfServicePortal"></a>

```java
public java.lang.String getSelfServicePortal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#self_service_portal Ec2ClientVpnEndpoint#self_service_portal}.

---

##### `sessionTimeoutHours`<sup>Optional</sup> <a name="sessionTimeoutHours" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.sessionTimeoutHours"></a>

```java
public java.lang.Number getSessionTimeoutHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#session_timeout_hours Ec2ClientVpnEndpoint#session_timeout_hours}.

---

##### `splitTunnel`<sup>Optional</sup> <a name="splitTunnel" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.splitTunnel"></a>

```java
public java.lang.Object getSplitTunnel();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#split_tunnel Ec2ClientVpnEndpoint#split_tunnel}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#tags Ec2ClientVpnEndpoint#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#tags_all Ec2ClientVpnEndpoint#tags_all}.

---

##### `transportProtocol`<sup>Optional</sup> <a name="transportProtocol" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.transportProtocol"></a>

```java
public java.lang.String getTransportProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#transport_protocol Ec2ClientVpnEndpoint#transport_protocol}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#vpc_id Ec2ClientVpnEndpoint#vpc_id}.

---

##### `vpnPort`<sup>Optional</sup> <a name="vpnPort" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.vpnPort"></a>

```java
public java.lang.Number getVpnPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#vpn_port Ec2ClientVpnEndpoint#vpn_port}.

---

### Ec2ClientVpnEndpointConnectionLogOptions <a name="Ec2ClientVpnEndpointConnectionLogOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_client_vpn_endpoint.Ec2ClientVpnEndpointConnectionLogOptions;

Ec2ClientVpnEndpointConnectionLogOptions.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .cloudwatchLogGroup(java.lang.String)
//  .cloudwatchLogStream(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.cloudwatchLogGroup">cloudwatchLogGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#cloudwatch_log_group Ec2ClientVpnEndpoint#cloudwatch_log_group}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.cloudwatchLogStream">cloudwatchLogStream</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#cloudwatch_log_stream Ec2ClientVpnEndpoint#cloudwatch_log_stream}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}.

---

##### `cloudwatchLogGroup`<sup>Optional</sup> <a name="cloudwatchLogGroup" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.cloudwatchLogGroup"></a>

```java
public java.lang.String getCloudwatchLogGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#cloudwatch_log_group Ec2ClientVpnEndpoint#cloudwatch_log_group}.

---

##### `cloudwatchLogStream`<sup>Optional</sup> <a name="cloudwatchLogStream" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.cloudwatchLogStream"></a>

```java
public java.lang.String getCloudwatchLogStream();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#cloudwatch_log_stream Ec2ClientVpnEndpoint#cloudwatch_log_stream}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2ClientVpnEndpointAuthenticationOptionsList <a name="Ec2ClientVpnEndpointAuthenticationOptionsList" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_client_vpn_endpoint.Ec2ClientVpnEndpointAuthenticationOptionsList;

new Ec2ClientVpnEndpointAuthenticationOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.get"></a>

```java
public Ec2ClientVpnEndpointAuthenticationOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>>

---


### Ec2ClientVpnEndpointAuthenticationOptionsOutputReference <a name="Ec2ClientVpnEndpointAuthenticationOptionsOutputReference" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_client_vpn_endpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference;

new Ec2ClientVpnEndpointAuthenticationOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetActiveDirectoryId">resetActiveDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetRootCertificateChainArn">resetRootCertificateChainArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetSamlProviderArn">resetSamlProviderArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetSelfServiceSamlProviderArn">resetSelfServiceSamlProviderArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveDirectoryId` <a name="resetActiveDirectoryId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetActiveDirectoryId"></a>

```java
public void resetActiveDirectoryId()
```

##### `resetRootCertificateChainArn` <a name="resetRootCertificateChainArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetRootCertificateChainArn"></a>

```java
public void resetRootCertificateChainArn()
```

##### `resetSamlProviderArn` <a name="resetSamlProviderArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetSamlProviderArn"></a>

```java
public void resetSamlProviderArn()
```

##### `resetSelfServiceSamlProviderArn` <a name="resetSelfServiceSamlProviderArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetSelfServiceSamlProviderArn"></a>

```java
public void resetSelfServiceSamlProviderArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryIdInput">activeDirectoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.rootCertificateChainArnInput">rootCertificateChainArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.samlProviderArnInput">samlProviderArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.selfServiceSamlProviderArnInput">selfServiceSamlProviderArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryId">activeDirectoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.rootCertificateChainArn">rootCertificateChainArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.samlProviderArn">samlProviderArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.selfServiceSamlProviderArn">selfServiceSamlProviderArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeDirectoryIdInput`<sup>Optional</sup> <a name="activeDirectoryIdInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryIdInput"></a>

```java
public java.lang.String getActiveDirectoryIdInput();
```

- *Type:* java.lang.String

---

##### `rootCertificateChainArnInput`<sup>Optional</sup> <a name="rootCertificateChainArnInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.rootCertificateChainArnInput"></a>

```java
public java.lang.String getRootCertificateChainArnInput();
```

- *Type:* java.lang.String

---

##### `samlProviderArnInput`<sup>Optional</sup> <a name="samlProviderArnInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.samlProviderArnInput"></a>

```java
public java.lang.String getSamlProviderArnInput();
```

- *Type:* java.lang.String

---

##### `selfServiceSamlProviderArnInput`<sup>Optional</sup> <a name="selfServiceSamlProviderArnInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.selfServiceSamlProviderArnInput"></a>

```java
public java.lang.String getSelfServiceSamlProviderArnInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `activeDirectoryId`<sup>Required</sup> <a name="activeDirectoryId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryId"></a>

```java
public java.lang.String getActiveDirectoryId();
```

- *Type:* java.lang.String

---

##### `rootCertificateChainArn`<sup>Required</sup> <a name="rootCertificateChainArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.rootCertificateChainArn"></a>

```java
public java.lang.String getRootCertificateChainArn();
```

- *Type:* java.lang.String

---

##### `samlProviderArn`<sup>Required</sup> <a name="samlProviderArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.samlProviderArn"></a>

```java
public java.lang.String getSamlProviderArn();
```

- *Type:* java.lang.String

---

##### `selfServiceSamlProviderArn`<sup>Required</sup> <a name="selfServiceSamlProviderArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.selfServiceSamlProviderArn"></a>

```java
public java.lang.String getSelfServiceSamlProviderArn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a> OR com.hashicorp.cdktf.IResolvable

---


### Ec2ClientVpnEndpointClientConnectOptionsOutputReference <a name="Ec2ClientVpnEndpointClientConnectOptionsOutputReference" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_client_vpn_endpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference;

new Ec2ClientVpnEndpointClientConnectOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resetLambdaFunctionArn">resetLambdaFunctionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetLambdaFunctionArn` <a name="resetLambdaFunctionArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resetLambdaFunctionArn"></a>

```java
public void resetLambdaFunctionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArnInput">lambdaFunctionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lambdaFunctionArnInput`<sup>Optional</sup> <a name="lambdaFunctionArnInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArnInput"></a>

```java
public java.lang.String getLambdaFunctionArnInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="lambdaFunctionArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArn"></a>

```java
public java.lang.String getLambdaFunctionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.internalValue"></a>

```java
public Ec2ClientVpnEndpointClientConnectOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

---


### Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference <a name="Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_client_vpn_endpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference;

new Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resetBannerText">resetBannerText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBannerText` <a name="resetBannerText" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resetBannerText"></a>

```java
public void resetBannerText()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerTextInput">bannerTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerText">bannerText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bannerTextInput`<sup>Optional</sup> <a name="bannerTextInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerTextInput"></a>

```java
public java.lang.String getBannerTextInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bannerText`<sup>Required</sup> <a name="bannerText" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerText"></a>

```java
public java.lang.String getBannerText();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.internalValue"></a>

```java
public Ec2ClientVpnEndpointClientLoginBannerOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

---


### Ec2ClientVpnEndpointConnectionLogOptionsOutputReference <a name="Ec2ClientVpnEndpointConnectionLogOptionsOutputReference" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_client_vpn_endpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference;

new Ec2ClientVpnEndpointConnectionLogOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetCloudwatchLogGroup">resetCloudwatchLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetCloudwatchLogStream">resetCloudwatchLogStream</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudwatchLogGroup` <a name="resetCloudwatchLogGroup" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetCloudwatchLogGroup"></a>

```java
public void resetCloudwatchLogGroup()
```

##### `resetCloudwatchLogStream` <a name="resetCloudwatchLogStream" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetCloudwatchLogStream"></a>

```java
public void resetCloudwatchLogStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroupInput">cloudwatchLogGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStreamInput">cloudwatchLogStreamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroup">cloudwatchLogGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStream">cloudwatchLogStream</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogGroupInput`<sup>Optional</sup> <a name="cloudwatchLogGroupInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroupInput"></a>

```java
public java.lang.String getCloudwatchLogGroupInput();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogStreamInput`<sup>Optional</sup> <a name="cloudwatchLogStreamInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStreamInput"></a>

```java
public java.lang.String getCloudwatchLogStreamInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cloudwatchLogGroup`<sup>Required</sup> <a name="cloudwatchLogGroup" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroup"></a>

```java
public java.lang.String getCloudwatchLogGroup();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogStream`<sup>Required</sup> <a name="cloudwatchLogStream" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStream"></a>

```java
public java.lang.String getCloudwatchLogStream();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.internalValue"></a>

```java
public Ec2ClientVpnEndpointConnectionLogOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

---



