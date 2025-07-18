# `transferServer` Submodule <a name="`transferServer` Submodule" id="@cdktf/provider-aws.transferServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferServer <a name="TransferServer" id="@cdktf/provider-aws.transferServer.TransferServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server aws_transfer_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_server.TransferServer;

TransferServer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .certificate(java.lang.String)
//  .directoryId(java.lang.String)
//  .domain(java.lang.String)
//  .endpointDetails(TransferServerEndpointDetails)
//  .endpointType(java.lang.String)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .function(java.lang.String)
//  .hostKey(java.lang.String)
//  .id(java.lang.String)
//  .identityProviderType(java.lang.String)
//  .invocationRole(java.lang.String)
//  .loggingRole(java.lang.String)
//  .postAuthenticationLoginBanner(java.lang.String)
//  .preAuthenticationLoginBanner(java.lang.String)
//  .protocolDetails(TransferServerProtocolDetails)
//  .protocols(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .s3StorageOptions(TransferServerS3StorageOptions)
//  .securityPolicyName(java.lang.String)
//  .sftpAuthenticationMethods(java.lang.String)
//  .structuredLogDestinations(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .url(java.lang.String)
//  .workflowDetails(TransferServerWorkflowDetails)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#certificate TransferServer#certificate}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#directory_id TransferServer#directory_id}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#domain TransferServer#domain}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.endpointDetails">endpointDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | endpoint_details block. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.endpointType">endpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#endpoint_type TransferServer#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#force_destroy TransferServer#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.function">function</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#function TransferServer#function}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.hostKey">hostKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#host_key TransferServer#host_key}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#id TransferServer#id}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.identityProviderType">identityProviderType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#identity_provider_type TransferServer#identity_provider_type}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.invocationRole">invocationRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#invocation_role TransferServer#invocation_role}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.loggingRole">loggingRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#logging_role TransferServer#logging_role}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.postAuthenticationLoginBanner">postAuthenticationLoginBanner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#post_authentication_login_banner TransferServer#post_authentication_login_banner}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.preAuthenticationLoginBanner">preAuthenticationLoginBanner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#pre_authentication_login_banner TransferServer#pre_authentication_login_banner}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.protocolDetails">protocolDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a></code> | protocol_details block. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#protocols TransferServer#protocols}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.s3StorageOptions">s3StorageOptions</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a></code> | s3_storage_options block. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.securityPolicyName">securityPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#security_policy_name TransferServer#security_policy_name}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.sftpAuthenticationMethods">sftpAuthenticationMethods</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#sftp_authentication_methods TransferServer#sftp_authentication_methods}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.structuredLogDestinations">structuredLogDestinations</a></code> | <code>java.util.List<java.lang.String></code> | This is a set of arns of destinations that will receive structured logs from the transfer server. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#tags TransferServer#tags}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#tags_all TransferServer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#url TransferServer#url}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.workflowDetails">workflowDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | workflow_details block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.certificate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#certificate TransferServer#certificate}.

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.directoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#directory_id TransferServer#directory_id}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#domain TransferServer#domain}.

---

##### `endpointDetails`<sup>Optional</sup> <a name="endpointDetails" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.endpointDetails"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

endpoint_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#endpoint_details TransferServer#endpoint_details}

---

##### `endpointType`<sup>Optional</sup> <a name="endpointType" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.endpointType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#endpoint_type TransferServer#endpoint_type}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#force_destroy TransferServer#force_destroy}.

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.function"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#function TransferServer#function}.

---

##### `hostKey`<sup>Optional</sup> <a name="hostKey" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.hostKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#host_key TransferServer#host_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#id TransferServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderType`<sup>Optional</sup> <a name="identityProviderType" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.identityProviderType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#identity_provider_type TransferServer#identity_provider_type}.

---

##### `invocationRole`<sup>Optional</sup> <a name="invocationRole" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.invocationRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#invocation_role TransferServer#invocation_role}.

---

##### `loggingRole`<sup>Optional</sup> <a name="loggingRole" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.loggingRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#logging_role TransferServer#logging_role}.

---

##### `postAuthenticationLoginBanner`<sup>Optional</sup> <a name="postAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.postAuthenticationLoginBanner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#post_authentication_login_banner TransferServer#post_authentication_login_banner}.

---

##### `preAuthenticationLoginBanner`<sup>Optional</sup> <a name="preAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.preAuthenticationLoginBanner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#pre_authentication_login_banner TransferServer#pre_authentication_login_banner}.

---

##### `protocolDetails`<sup>Optional</sup> <a name="protocolDetails" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.protocolDetails"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a>

protocol_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#protocol_details TransferServer#protocol_details}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.protocols"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#protocols TransferServer#protocols}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#region TransferServer#region}

---

##### `s3StorageOptions`<sup>Optional</sup> <a name="s3StorageOptions" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.s3StorageOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a>

s3_storage_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#s3_storage_options TransferServer#s3_storage_options}

---

##### `securityPolicyName`<sup>Optional</sup> <a name="securityPolicyName" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.securityPolicyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#security_policy_name TransferServer#security_policy_name}.

---

##### `sftpAuthenticationMethods`<sup>Optional</sup> <a name="sftpAuthenticationMethods" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.sftpAuthenticationMethods"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#sftp_authentication_methods TransferServer#sftp_authentication_methods}.

---

##### `structuredLogDestinations`<sup>Optional</sup> <a name="structuredLogDestinations" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.structuredLogDestinations"></a>

- *Type:* java.util.List<java.lang.String>

This is a set of arns of destinations that will receive structured logs from the transfer server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#structured_log_destinations TransferServer#structured_log_destinations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#tags TransferServer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#tags_all TransferServer#tags_all}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.url"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#url TransferServer#url}.

---

##### `workflowDetails`<sup>Optional</sup> <a name="workflowDetails" id="@cdktf/provider-aws.transferServer.TransferServer.Initializer.parameter.workflowDetails"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

workflow_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#workflow_details TransferServer#workflow_details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.putEndpointDetails">putEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.putProtocolDetails">putProtocolDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.putS3StorageOptions">putS3StorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.putWorkflowDetails">putWorkflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetDirectoryId">resetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetEndpointDetails">resetEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetEndpointType">resetEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetFunction">resetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetHostKey">resetHostKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetIdentityProviderType">resetIdentityProviderType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetInvocationRole">resetInvocationRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetLoggingRole">resetLoggingRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetPostAuthenticationLoginBanner">resetPostAuthenticationLoginBanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetPreAuthenticationLoginBanner">resetPreAuthenticationLoginBanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetProtocolDetails">resetProtocolDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetS3StorageOptions">resetS3StorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetSecurityPolicyName">resetSecurityPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetSftpAuthenticationMethods">resetSftpAuthenticationMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetStructuredLogDestinations">resetStructuredLogDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.resetWorkflowDetails">resetWorkflowDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferServer.TransferServer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.transferServer.TransferServer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferServer.TransferServer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferServer.TransferServer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.transferServer.TransferServer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.transferServer.TransferServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.transferServer.TransferServer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.transferServer.TransferServer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.transferServer.TransferServer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.transferServer.TransferServer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.transferServer.TransferServer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.transferServer.TransferServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.transferServer.TransferServer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.transferServer.TransferServer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferServer.TransferServer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferServer.TransferServer.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.transferServer.TransferServer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferServer.TransferServer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.transferServer.TransferServer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.transferServer.TransferServer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.transferServer.TransferServer.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.transferServer.TransferServer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferServer.TransferServer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpointDetails` <a name="putEndpointDetails" id="@cdktf/provider-aws.transferServer.TransferServer.putEndpointDetails"></a>

```java
public void putEndpointDetails(TransferServerEndpointDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferServer.TransferServer.putEndpointDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

---

##### `putProtocolDetails` <a name="putProtocolDetails" id="@cdktf/provider-aws.transferServer.TransferServer.putProtocolDetails"></a>

```java
public void putProtocolDetails(TransferServerProtocolDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferServer.TransferServer.putProtocolDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a>

---

##### `putS3StorageOptions` <a name="putS3StorageOptions" id="@cdktf/provider-aws.transferServer.TransferServer.putS3StorageOptions"></a>

```java
public void putS3StorageOptions(TransferServerS3StorageOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferServer.TransferServer.putS3StorageOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a>

---

##### `putWorkflowDetails` <a name="putWorkflowDetails" id="@cdktf/provider-aws.transferServer.TransferServer.putWorkflowDetails"></a>

```java
public void putWorkflowDetails(TransferServerWorkflowDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferServer.TransferServer.putWorkflowDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

---

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-aws.transferServer.TransferServer.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetDirectoryId` <a name="resetDirectoryId" id="@cdktf/provider-aws.transferServer.TransferServer.resetDirectoryId"></a>

```java
public void resetDirectoryId()
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-aws.transferServer.TransferServer.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetEndpointDetails` <a name="resetEndpointDetails" id="@cdktf/provider-aws.transferServer.TransferServer.resetEndpointDetails"></a>

```java
public void resetEndpointDetails()
```

##### `resetEndpointType` <a name="resetEndpointType" id="@cdktf/provider-aws.transferServer.TransferServer.resetEndpointType"></a>

```java
public void resetEndpointType()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-aws.transferServer.TransferServer.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetFunction` <a name="resetFunction" id="@cdktf/provider-aws.transferServer.TransferServer.resetFunction"></a>

```java
public void resetFunction()
```

##### `resetHostKey` <a name="resetHostKey" id="@cdktf/provider-aws.transferServer.TransferServer.resetHostKey"></a>

```java
public void resetHostKey()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.transferServer.TransferServer.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityProviderType` <a name="resetIdentityProviderType" id="@cdktf/provider-aws.transferServer.TransferServer.resetIdentityProviderType"></a>

```java
public void resetIdentityProviderType()
```

##### `resetInvocationRole` <a name="resetInvocationRole" id="@cdktf/provider-aws.transferServer.TransferServer.resetInvocationRole"></a>

```java
public void resetInvocationRole()
```

##### `resetLoggingRole` <a name="resetLoggingRole" id="@cdktf/provider-aws.transferServer.TransferServer.resetLoggingRole"></a>

```java
public void resetLoggingRole()
```

##### `resetPostAuthenticationLoginBanner` <a name="resetPostAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServer.resetPostAuthenticationLoginBanner"></a>

```java
public void resetPostAuthenticationLoginBanner()
```

##### `resetPreAuthenticationLoginBanner` <a name="resetPreAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServer.resetPreAuthenticationLoginBanner"></a>

```java
public void resetPreAuthenticationLoginBanner()
```

##### `resetProtocolDetails` <a name="resetProtocolDetails" id="@cdktf/provider-aws.transferServer.TransferServer.resetProtocolDetails"></a>

```java
public void resetProtocolDetails()
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktf/provider-aws.transferServer.TransferServer.resetProtocols"></a>

```java
public void resetProtocols()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.transferServer.TransferServer.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetS3StorageOptions` <a name="resetS3StorageOptions" id="@cdktf/provider-aws.transferServer.TransferServer.resetS3StorageOptions"></a>

```java
public void resetS3StorageOptions()
```

##### `resetSecurityPolicyName` <a name="resetSecurityPolicyName" id="@cdktf/provider-aws.transferServer.TransferServer.resetSecurityPolicyName"></a>

```java
public void resetSecurityPolicyName()
```

##### `resetSftpAuthenticationMethods` <a name="resetSftpAuthenticationMethods" id="@cdktf/provider-aws.transferServer.TransferServer.resetSftpAuthenticationMethods"></a>

```java
public void resetSftpAuthenticationMethods()
```

##### `resetStructuredLogDestinations` <a name="resetStructuredLogDestinations" id="@cdktf/provider-aws.transferServer.TransferServer.resetStructuredLogDestinations"></a>

```java
public void resetStructuredLogDestinations()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.transferServer.TransferServer.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.transferServer.TransferServer.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-aws.transferServer.TransferServer.resetUrl"></a>

```java
public void resetUrl()
```

##### `resetWorkflowDetails` <a name="resetWorkflowDetails" id="@cdktf/provider-aws.transferServer.TransferServer.resetWorkflowDetails"></a>

```java
public void resetWorkflowDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TransferServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.transferServer.TransferServer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_server.TransferServer;

TransferServer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferServer.TransferServer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.transferServer.TransferServer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_server.TransferServer;

TransferServer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferServer.TransferServer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.transferServer.TransferServer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_server.TransferServer;

TransferServer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferServer.TransferServer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.transferServer.TransferServer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_server.TransferServer;

TransferServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TransferServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a TransferServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferServer.TransferServer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.transferServer.TransferServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TransferServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.transferServer.TransferServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TransferServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferServer.TransferServer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the TransferServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.endpointDetails">endpointDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference">TransferServerEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.hostKeyFingerprint">hostKeyFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.protocolDetails">protocolDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference">TransferServerProtocolDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.s3StorageOptions">s3StorageOptions</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference">TransferServerS3StorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.workflowDetails">workflowDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference">TransferServerWorkflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.directoryIdInput">directoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.endpointDetailsInput">endpointDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.endpointTypeInput">endpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.functionInput">functionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.hostKeyInput">hostKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.identityProviderTypeInput">identityProviderTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.invocationRoleInput">invocationRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.loggingRoleInput">loggingRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.postAuthenticationLoginBannerInput">postAuthenticationLoginBannerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.preAuthenticationLoginBannerInput">preAuthenticationLoginBannerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.protocolDetailsInput">protocolDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.s3StorageOptionsInput">s3StorageOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.securityPolicyNameInput">securityPolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.sftpAuthenticationMethodsInput">sftpAuthenticationMethodsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.structuredLogDestinationsInput">structuredLogDestinationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.workflowDetailsInput">workflowDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.function">function</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.hostKey">hostKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.identityProviderType">identityProviderType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.invocationRole">invocationRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.loggingRole">loggingRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.postAuthenticationLoginBanner">postAuthenticationLoginBanner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.preAuthenticationLoginBanner">preAuthenticationLoginBanner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.securityPolicyName">securityPolicyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.sftpAuthenticationMethods">sftpAuthenticationMethods</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.structuredLogDestinations">structuredLogDestinations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.transferServer.TransferServer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.transferServer.TransferServer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferServer.TransferServer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.transferServer.TransferServer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.transferServer.TransferServer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.transferServer.TransferServer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.transferServer.TransferServer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferServer.TransferServer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferServer.TransferServer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transferServer.TransferServer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transferServer.TransferServer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferServer.TransferServer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferServer.TransferServer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferServer.TransferServer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.transferServer.TransferServer.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.transferServer.TransferServer.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `endpointDetails`<sup>Required</sup> <a name="endpointDetails" id="@cdktf/provider-aws.transferServer.TransferServer.property.endpointDetails"></a>

```java
public TransferServerEndpointDetailsOutputReference getEndpointDetails();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference">TransferServerEndpointDetailsOutputReference</a>

---

##### `hostKeyFingerprint`<sup>Required</sup> <a name="hostKeyFingerprint" id="@cdktf/provider-aws.transferServer.TransferServer.property.hostKeyFingerprint"></a>

```java
public java.lang.String getHostKeyFingerprint();
```

- *Type:* java.lang.String

---

##### `protocolDetails`<sup>Required</sup> <a name="protocolDetails" id="@cdktf/provider-aws.transferServer.TransferServer.property.protocolDetails"></a>

```java
public TransferServerProtocolDetailsOutputReference getProtocolDetails();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference">TransferServerProtocolDetailsOutputReference</a>

---

##### `s3StorageOptions`<sup>Required</sup> <a name="s3StorageOptions" id="@cdktf/provider-aws.transferServer.TransferServer.property.s3StorageOptions"></a>

```java
public TransferServerS3StorageOptionsOutputReference getS3StorageOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference">TransferServerS3StorageOptionsOutputReference</a>

---

##### `workflowDetails`<sup>Required</sup> <a name="workflowDetails" id="@cdktf/provider-aws.transferServer.TransferServer.property.workflowDetails"></a>

```java
public TransferServerWorkflowDetailsOutputReference getWorkflowDetails();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference">TransferServerWorkflowDetailsOutputReference</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.directoryIdInput"></a>

```java
public java.lang.String getDirectoryIdInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `endpointDetailsInput`<sup>Optional</sup> <a name="endpointDetailsInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.endpointDetailsInput"></a>

```java
public TransferServerEndpointDetails getEndpointDetailsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.endpointTypeInput"></a>

```java
public java.lang.String getEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.forceDestroyInput"></a>

```java
public java.lang.Object getForceDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.functionInput"></a>

```java
public java.lang.String getFunctionInput();
```

- *Type:* java.lang.String

---

##### `hostKeyInput`<sup>Optional</sup> <a name="hostKeyInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.hostKeyInput"></a>

```java
public java.lang.String getHostKeyInput();
```

- *Type:* java.lang.String

---

##### `identityProviderTypeInput`<sup>Optional</sup> <a name="identityProviderTypeInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.identityProviderTypeInput"></a>

```java
public java.lang.String getIdentityProviderTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `invocationRoleInput`<sup>Optional</sup> <a name="invocationRoleInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.invocationRoleInput"></a>

```java
public java.lang.String getInvocationRoleInput();
```

- *Type:* java.lang.String

---

##### `loggingRoleInput`<sup>Optional</sup> <a name="loggingRoleInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.loggingRoleInput"></a>

```java
public java.lang.String getLoggingRoleInput();
```

- *Type:* java.lang.String

---

##### `postAuthenticationLoginBannerInput`<sup>Optional</sup> <a name="postAuthenticationLoginBannerInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.postAuthenticationLoginBannerInput"></a>

```java
public java.lang.String getPostAuthenticationLoginBannerInput();
```

- *Type:* java.lang.String

---

##### `preAuthenticationLoginBannerInput`<sup>Optional</sup> <a name="preAuthenticationLoginBannerInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.preAuthenticationLoginBannerInput"></a>

```java
public java.lang.String getPreAuthenticationLoginBannerInput();
```

- *Type:* java.lang.String

---

##### `protocolDetailsInput`<sup>Optional</sup> <a name="protocolDetailsInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.protocolDetailsInput"></a>

```java
public TransferServerProtocolDetails getProtocolDetailsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a>

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.protocolsInput"></a>

```java
public java.util.List<java.lang.String> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `s3StorageOptionsInput`<sup>Optional</sup> <a name="s3StorageOptionsInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.s3StorageOptionsInput"></a>

```java
public TransferServerS3StorageOptions getS3StorageOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a>

---

##### `securityPolicyNameInput`<sup>Optional</sup> <a name="securityPolicyNameInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.securityPolicyNameInput"></a>

```java
public java.lang.String getSecurityPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `sftpAuthenticationMethodsInput`<sup>Optional</sup> <a name="sftpAuthenticationMethodsInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.sftpAuthenticationMethodsInput"></a>

```java
public java.lang.String getSftpAuthenticationMethodsInput();
```

- *Type:* java.lang.String

---

##### `structuredLogDestinationsInput`<sup>Optional</sup> <a name="structuredLogDestinationsInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.structuredLogDestinationsInput"></a>

```java
public java.util.List<java.lang.String> getStructuredLogDestinationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `workflowDetailsInput`<sup>Optional</sup> <a name="workflowDetailsInput" id="@cdktf/provider-aws.transferServer.TransferServer.property.workflowDetailsInput"></a>

```java
public TransferServerWorkflowDetails getWorkflowDetailsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.transferServer.TransferServer.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.transferServer.TransferServer.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.transferServer.TransferServer.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-aws.transferServer.TransferServer.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-aws.transferServer.TransferServer.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-aws.transferServer.TransferServer.property.function"></a>

```java
public java.lang.String getFunction();
```

- *Type:* java.lang.String

---

##### `hostKey`<sup>Required</sup> <a name="hostKey" id="@cdktf/provider-aws.transferServer.TransferServer.property.hostKey"></a>

```java
public java.lang.String getHostKey();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferServer.TransferServer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityProviderType`<sup>Required</sup> <a name="identityProviderType" id="@cdktf/provider-aws.transferServer.TransferServer.property.identityProviderType"></a>

```java
public java.lang.String getIdentityProviderType();
```

- *Type:* java.lang.String

---

##### `invocationRole`<sup>Required</sup> <a name="invocationRole" id="@cdktf/provider-aws.transferServer.TransferServer.property.invocationRole"></a>

```java
public java.lang.String getInvocationRole();
```

- *Type:* java.lang.String

---

##### `loggingRole`<sup>Required</sup> <a name="loggingRole" id="@cdktf/provider-aws.transferServer.TransferServer.property.loggingRole"></a>

```java
public java.lang.String getLoggingRole();
```

- *Type:* java.lang.String

---

##### `postAuthenticationLoginBanner`<sup>Required</sup> <a name="postAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServer.property.postAuthenticationLoginBanner"></a>

```java
public java.lang.String getPostAuthenticationLoginBanner();
```

- *Type:* java.lang.String

---

##### `preAuthenticationLoginBanner`<sup>Required</sup> <a name="preAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServer.property.preAuthenticationLoginBanner"></a>

```java
public java.lang.String getPreAuthenticationLoginBanner();
```

- *Type:* java.lang.String

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-aws.transferServer.TransferServer.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.transferServer.TransferServer.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `securityPolicyName`<sup>Required</sup> <a name="securityPolicyName" id="@cdktf/provider-aws.transferServer.TransferServer.property.securityPolicyName"></a>

```java
public java.lang.String getSecurityPolicyName();
```

- *Type:* java.lang.String

---

##### `sftpAuthenticationMethods`<sup>Required</sup> <a name="sftpAuthenticationMethods" id="@cdktf/provider-aws.transferServer.TransferServer.property.sftpAuthenticationMethods"></a>

```java
public java.lang.String getSftpAuthenticationMethods();
```

- *Type:* java.lang.String

---

##### `structuredLogDestinations`<sup>Required</sup> <a name="structuredLogDestinations" id="@cdktf/provider-aws.transferServer.TransferServer.property.structuredLogDestinations"></a>

```java
public java.util.List<java.lang.String> getStructuredLogDestinations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.transferServer.TransferServer.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.transferServer.TransferServer.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.transferServer.TransferServer.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.transferServer.TransferServer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TransferServerConfig <a name="TransferServerConfig" id="@cdktf/provider-aws.transferServer.TransferServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferServer.TransferServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_server.TransferServerConfig;

TransferServerConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .certificate(java.lang.String)
//  .directoryId(java.lang.String)
//  .domain(java.lang.String)
//  .endpointDetails(TransferServerEndpointDetails)
//  .endpointType(java.lang.String)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .function(java.lang.String)
//  .hostKey(java.lang.String)
//  .id(java.lang.String)
//  .identityProviderType(java.lang.String)
//  .invocationRole(java.lang.String)
//  .loggingRole(java.lang.String)
//  .postAuthenticationLoginBanner(java.lang.String)
//  .preAuthenticationLoginBanner(java.lang.String)
//  .protocolDetails(TransferServerProtocolDetails)
//  .protocols(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .s3StorageOptions(TransferServerS3StorageOptions)
//  .securityPolicyName(java.lang.String)
//  .sftpAuthenticationMethods(java.lang.String)
//  .structuredLogDestinations(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .url(java.lang.String)
//  .workflowDetails(TransferServerWorkflowDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#certificate TransferServer#certificate}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#directory_id TransferServer#directory_id}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#domain TransferServer#domain}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.endpointDetails">endpointDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | endpoint_details block. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#endpoint_type TransferServer#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#force_destroy TransferServer#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.function">function</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#function TransferServer#function}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.hostKey">hostKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#host_key TransferServer#host_key}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#id TransferServer#id}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.identityProviderType">identityProviderType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#identity_provider_type TransferServer#identity_provider_type}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.invocationRole">invocationRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#invocation_role TransferServer#invocation_role}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.loggingRole">loggingRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#logging_role TransferServer#logging_role}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.postAuthenticationLoginBanner">postAuthenticationLoginBanner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#post_authentication_login_banner TransferServer#post_authentication_login_banner}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.preAuthenticationLoginBanner">preAuthenticationLoginBanner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#pre_authentication_login_banner TransferServer#pre_authentication_login_banner}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.protocolDetails">protocolDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a></code> | protocol_details block. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#protocols TransferServer#protocols}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.s3StorageOptions">s3StorageOptions</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a></code> | s3_storage_options block. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.securityPolicyName">securityPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#security_policy_name TransferServer#security_policy_name}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.sftpAuthenticationMethods">sftpAuthenticationMethods</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#sftp_authentication_methods TransferServer#sftp_authentication_methods}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.structuredLogDestinations">structuredLogDestinations</a></code> | <code>java.util.List<java.lang.String></code> | This is a set of arns of destinations that will receive structured logs from the transfer server. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#tags TransferServer#tags}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#tags_all TransferServer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#url TransferServer#url}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerConfig.property.workflowDetails">workflowDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | workflow_details block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#certificate TransferServer#certificate}.

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#directory_id TransferServer#directory_id}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#domain TransferServer#domain}.

---

##### `endpointDetails`<sup>Optional</sup> <a name="endpointDetails" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.endpointDetails"></a>

```java
public TransferServerEndpointDetails getEndpointDetails();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

endpoint_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#endpoint_details TransferServer#endpoint_details}

---

##### `endpointType`<sup>Optional</sup> <a name="endpointType" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#endpoint_type TransferServer#endpoint_type}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#force_destroy TransferServer#force_destroy}.

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.function"></a>

```java
public java.lang.String getFunction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#function TransferServer#function}.

---

##### `hostKey`<sup>Optional</sup> <a name="hostKey" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.hostKey"></a>

```java
public java.lang.String getHostKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#host_key TransferServer#host_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#id TransferServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderType`<sup>Optional</sup> <a name="identityProviderType" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.identityProviderType"></a>

```java
public java.lang.String getIdentityProviderType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#identity_provider_type TransferServer#identity_provider_type}.

---

##### `invocationRole`<sup>Optional</sup> <a name="invocationRole" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.invocationRole"></a>

```java
public java.lang.String getInvocationRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#invocation_role TransferServer#invocation_role}.

---

##### `loggingRole`<sup>Optional</sup> <a name="loggingRole" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.loggingRole"></a>

```java
public java.lang.String getLoggingRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#logging_role TransferServer#logging_role}.

---

##### `postAuthenticationLoginBanner`<sup>Optional</sup> <a name="postAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.postAuthenticationLoginBanner"></a>

```java
public java.lang.String getPostAuthenticationLoginBanner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#post_authentication_login_banner TransferServer#post_authentication_login_banner}.

---

##### `preAuthenticationLoginBanner`<sup>Optional</sup> <a name="preAuthenticationLoginBanner" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.preAuthenticationLoginBanner"></a>

```java
public java.lang.String getPreAuthenticationLoginBanner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#pre_authentication_login_banner TransferServer#pre_authentication_login_banner}.

---

##### `protocolDetails`<sup>Optional</sup> <a name="protocolDetails" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.protocolDetails"></a>

```java
public TransferServerProtocolDetails getProtocolDetails();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a>

protocol_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#protocol_details TransferServer#protocol_details}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#protocols TransferServer#protocols}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#region TransferServer#region}

---

##### `s3StorageOptions`<sup>Optional</sup> <a name="s3StorageOptions" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.s3StorageOptions"></a>

```java
public TransferServerS3StorageOptions getS3StorageOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a>

s3_storage_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#s3_storage_options TransferServer#s3_storage_options}

---

##### `securityPolicyName`<sup>Optional</sup> <a name="securityPolicyName" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.securityPolicyName"></a>

```java
public java.lang.String getSecurityPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#security_policy_name TransferServer#security_policy_name}.

---

##### `sftpAuthenticationMethods`<sup>Optional</sup> <a name="sftpAuthenticationMethods" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.sftpAuthenticationMethods"></a>

```java
public java.lang.String getSftpAuthenticationMethods();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#sftp_authentication_methods TransferServer#sftp_authentication_methods}.

---

##### `structuredLogDestinations`<sup>Optional</sup> <a name="structuredLogDestinations" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.structuredLogDestinations"></a>

```java
public java.util.List<java.lang.String> getStructuredLogDestinations();
```

- *Type:* java.util.List<java.lang.String>

This is a set of arns of destinations that will receive structured logs from the transfer server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#structured_log_destinations TransferServer#structured_log_destinations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#tags TransferServer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#tags_all TransferServer#tags_all}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#url TransferServer#url}.

---

##### `workflowDetails`<sup>Optional</sup> <a name="workflowDetails" id="@cdktf/provider-aws.transferServer.TransferServerConfig.property.workflowDetails"></a>

```java
public TransferServerWorkflowDetails getWorkflowDetails();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

workflow_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#workflow_details TransferServer#workflow_details}

---

### TransferServerEndpointDetails <a name="TransferServerEndpointDetails" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_server.TransferServerEndpointDetails;

TransferServerEndpointDetails.builder()
//  .addressAllocationIds(java.util.List<java.lang.String>)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
//  .vpcEndpointId(java.lang.String)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.addressAllocationIds">addressAllocationIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#address_allocation_ids TransferServer#address_allocation_ids}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#security_group_ids TransferServer#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#subnet_ids TransferServer#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#vpc_endpoint_id TransferServer#vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#vpc_id TransferServer#vpc_id}. |

---

##### `addressAllocationIds`<sup>Optional</sup> <a name="addressAllocationIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.addressAllocationIds"></a>

```java
public java.util.List<java.lang.String> getAddressAllocationIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#address_allocation_ids TransferServer#address_allocation_ids}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#security_group_ids TransferServer#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#subnet_ids TransferServer#subnet_ids}.

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#vpc_endpoint_id TransferServer#vpc_endpoint_id}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetails.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#vpc_id TransferServer#vpc_id}.

---

### TransferServerProtocolDetails <a name="TransferServerProtocolDetails" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_server.TransferServerProtocolDetails;

TransferServerProtocolDetails.builder()
//  .as2Transports(java.util.List<java.lang.String>)
//  .passiveIp(java.lang.String)
//  .setStatOption(java.lang.String)
//  .tlsSessionResumptionMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetails.property.as2Transports">as2Transports</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#as2_transports TransferServer#as2_transports}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetails.property.passiveIp">passiveIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#passive_ip TransferServer#passive_ip}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetails.property.setStatOption">setStatOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#set_stat_option TransferServer#set_stat_option}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetails.property.tlsSessionResumptionMode">tlsSessionResumptionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#tls_session_resumption_mode TransferServer#tls_session_resumption_mode}. |

---

##### `as2Transports`<sup>Optional</sup> <a name="as2Transports" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetails.property.as2Transports"></a>

```java
public java.util.List<java.lang.String> getAs2Transports();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#as2_transports TransferServer#as2_transports}.

---

##### `passiveIp`<sup>Optional</sup> <a name="passiveIp" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetails.property.passiveIp"></a>

```java
public java.lang.String getPassiveIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#passive_ip TransferServer#passive_ip}.

---

##### `setStatOption`<sup>Optional</sup> <a name="setStatOption" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetails.property.setStatOption"></a>

```java
public java.lang.String getSetStatOption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#set_stat_option TransferServer#set_stat_option}.

---

##### `tlsSessionResumptionMode`<sup>Optional</sup> <a name="tlsSessionResumptionMode" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetails.property.tlsSessionResumptionMode"></a>

```java
public java.lang.String getTlsSessionResumptionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#tls_session_resumption_mode TransferServer#tls_session_resumption_mode}.

---

### TransferServerS3StorageOptions <a name="TransferServerS3StorageOptions" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_server.TransferServerS3StorageOptions;

TransferServerS3StorageOptions.builder()
//  .directoryListingOptimization(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptions.property.directoryListingOptimization">directoryListingOptimization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#directory_listing_optimization TransferServer#directory_listing_optimization}. |

---

##### `directoryListingOptimization`<sup>Optional</sup> <a name="directoryListingOptimization" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptions.property.directoryListingOptimization"></a>

```java
public java.lang.String getDirectoryListingOptimization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#directory_listing_optimization TransferServer#directory_listing_optimization}.

---

### TransferServerWorkflowDetails <a name="TransferServerWorkflowDetails" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_server.TransferServerWorkflowDetails;

TransferServerWorkflowDetails.builder()
//  .onPartialUpload(TransferServerWorkflowDetailsOnPartialUpload)
//  .onUpload(TransferServerWorkflowDetailsOnUpload)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails.property.onPartialUpload">onPartialUpload</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a></code> | on_partial_upload block. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails.property.onUpload">onUpload</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a></code> | on_upload block. |

---

##### `onPartialUpload`<sup>Optional</sup> <a name="onPartialUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails.property.onPartialUpload"></a>

```java
public TransferServerWorkflowDetailsOnPartialUpload getOnPartialUpload();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>

on_partial_upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#on_partial_upload TransferServer#on_partial_upload}

---

##### `onUpload`<sup>Optional</sup> <a name="onUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails.property.onUpload"></a>

```java
public TransferServerWorkflowDetailsOnUpload getOnUpload();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

on_upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#on_upload TransferServer#on_upload}

---

### TransferServerWorkflowDetailsOnPartialUpload <a name="TransferServerWorkflowDetailsOnPartialUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_server.TransferServerWorkflowDetailsOnPartialUpload;

TransferServerWorkflowDetailsOnPartialUpload.builder()
    .executionRole(java.lang.String)
    .workflowId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#execution_role TransferServer#execution_role}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload.property.workflowId">workflowId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#workflow_id TransferServer#workflow_id}. |

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#execution_role TransferServer#execution_role}.

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload.property.workflowId"></a>

```java
public java.lang.String getWorkflowId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#workflow_id TransferServer#workflow_id}.

---

### TransferServerWorkflowDetailsOnUpload <a name="TransferServerWorkflowDetailsOnUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_server.TransferServerWorkflowDetailsOnUpload;

TransferServerWorkflowDetailsOnUpload.builder()
    .executionRole(java.lang.String)
    .workflowId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#execution_role TransferServer#execution_role}. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.property.workflowId">workflowId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#workflow_id TransferServer#workflow_id}. |

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#execution_role TransferServer#execution_role}.

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.property.workflowId"></a>

```java
public java.lang.String getWorkflowId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_server#workflow_id TransferServer#workflow_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferServerEndpointDetailsOutputReference <a name="TransferServerEndpointDetailsOutputReference" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_server.TransferServerEndpointDetailsOutputReference;

new TransferServerEndpointDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetAddressAllocationIds">resetAddressAllocationIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressAllocationIds` <a name="resetAddressAllocationIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetAddressAllocationIds"></a>

```java
public void resetAddressAllocationIds()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcEndpointId"></a>

```java
public void resetVpcEndpointId()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcId"></a>

```java
public void resetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIdsInput">addressAllocationIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIds">addressAllocationIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressAllocationIdsInput`<sup>Optional</sup> <a name="addressAllocationIdsInput" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIdsInput"></a>

```java
public java.util.List<java.lang.String> getAddressAllocationIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointIdInput"></a>

```java
public java.lang.String getVpcEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `addressAllocationIds`<sup>Required</sup> <a name="addressAllocationIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIds"></a>

```java
public java.util.List<java.lang.String> getAddressAllocationIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.internalValue"></a>

```java
public TransferServerEndpointDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

---


### TransferServerProtocolDetailsOutputReference <a name="TransferServerProtocolDetailsOutputReference" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_server.TransferServerProtocolDetailsOutputReference;

new TransferServerProtocolDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resetAs2Transports">resetAs2Transports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resetPassiveIp">resetPassiveIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resetSetStatOption">resetSetStatOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resetTlsSessionResumptionMode">resetTlsSessionResumptionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAs2Transports` <a name="resetAs2Transports" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resetAs2Transports"></a>

```java
public void resetAs2Transports()
```

##### `resetPassiveIp` <a name="resetPassiveIp" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resetPassiveIp"></a>

```java
public void resetPassiveIp()
```

##### `resetSetStatOption` <a name="resetSetStatOption" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resetSetStatOption"></a>

```java
public void resetSetStatOption()
```

##### `resetTlsSessionResumptionMode` <a name="resetTlsSessionResumptionMode" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resetTlsSessionResumptionMode"></a>

```java
public void resetTlsSessionResumptionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.as2TransportsInput">as2TransportsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.passiveIpInput">passiveIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.setStatOptionInput">setStatOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.tlsSessionResumptionModeInput">tlsSessionResumptionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.as2Transports">as2Transports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.passiveIp">passiveIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.setStatOption">setStatOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.tlsSessionResumptionMode">tlsSessionResumptionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `as2TransportsInput`<sup>Optional</sup> <a name="as2TransportsInput" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.as2TransportsInput"></a>

```java
public java.util.List<java.lang.String> getAs2TransportsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `passiveIpInput`<sup>Optional</sup> <a name="passiveIpInput" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.passiveIpInput"></a>

```java
public java.lang.String getPassiveIpInput();
```

- *Type:* java.lang.String

---

##### `setStatOptionInput`<sup>Optional</sup> <a name="setStatOptionInput" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.setStatOptionInput"></a>

```java
public java.lang.String getSetStatOptionInput();
```

- *Type:* java.lang.String

---

##### `tlsSessionResumptionModeInput`<sup>Optional</sup> <a name="tlsSessionResumptionModeInput" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.tlsSessionResumptionModeInput"></a>

```java
public java.lang.String getTlsSessionResumptionModeInput();
```

- *Type:* java.lang.String

---

##### `as2Transports`<sup>Required</sup> <a name="as2Transports" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.as2Transports"></a>

```java
public java.util.List<java.lang.String> getAs2Transports();
```

- *Type:* java.util.List<java.lang.String>

---

##### `passiveIp`<sup>Required</sup> <a name="passiveIp" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.passiveIp"></a>

```java
public java.lang.String getPassiveIp();
```

- *Type:* java.lang.String

---

##### `setStatOption`<sup>Required</sup> <a name="setStatOption" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.setStatOption"></a>

```java
public java.lang.String getSetStatOption();
```

- *Type:* java.lang.String

---

##### `tlsSessionResumptionMode`<sup>Required</sup> <a name="tlsSessionResumptionMode" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.tlsSessionResumptionMode"></a>

```java
public java.lang.String getTlsSessionResumptionMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.internalValue"></a>

```java
public TransferServerProtocolDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a>

---


### TransferServerS3StorageOptionsOutputReference <a name="TransferServerS3StorageOptionsOutputReference" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_server.TransferServerS3StorageOptionsOutputReference;

new TransferServerS3StorageOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.resetDirectoryListingOptimization">resetDirectoryListingOptimization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectoryListingOptimization` <a name="resetDirectoryListingOptimization" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.resetDirectoryListingOptimization"></a>

```java
public void resetDirectoryListingOptimization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.property.directoryListingOptimizationInput">directoryListingOptimizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.property.directoryListingOptimization">directoryListingOptimization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directoryListingOptimizationInput`<sup>Optional</sup> <a name="directoryListingOptimizationInput" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.property.directoryListingOptimizationInput"></a>

```java
public java.lang.String getDirectoryListingOptimizationInput();
```

- *Type:* java.lang.String

---

##### `directoryListingOptimization`<sup>Required</sup> <a name="directoryListingOptimization" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.property.directoryListingOptimization"></a>

```java
public java.lang.String getDirectoryListingOptimization();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.property.internalValue"></a>

```java
public TransferServerS3StorageOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a>

---


### TransferServerWorkflowDetailsOnPartialUploadOutputReference <a name="TransferServerWorkflowDetailsOnPartialUploadOutputReference" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_server.TransferServerWorkflowDetailsOnPartialUploadOutputReference;

new TransferServerWorkflowDetailsOnPartialUploadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.executionRoleInput">executionRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.workflowIdInput">workflowIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.workflowId">workflowId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.executionRoleInput"></a>

```java
public java.lang.String getExecutionRoleInput();
```

- *Type:* java.lang.String

---

##### `workflowIdInput`<sup>Optional</sup> <a name="workflowIdInput" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.workflowIdInput"></a>

```java
public java.lang.String getWorkflowIdInput();
```

- *Type:* java.lang.String

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.workflowId"></a>

```java
public java.lang.String getWorkflowId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.internalValue"></a>

```java
public TransferServerWorkflowDetailsOnPartialUpload getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>

---


### TransferServerWorkflowDetailsOnUploadOutputReference <a name="TransferServerWorkflowDetailsOnUploadOutputReference" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_server.TransferServerWorkflowDetailsOnUploadOutputReference;

new TransferServerWorkflowDetailsOnUploadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRoleInput">executionRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowIdInput">workflowIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowId">workflowId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRoleInput"></a>

```java
public java.lang.String getExecutionRoleInput();
```

- *Type:* java.lang.String

---

##### `workflowIdInput`<sup>Optional</sup> <a name="workflowIdInput" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowIdInput"></a>

```java
public java.lang.String getWorkflowIdInput();
```

- *Type:* java.lang.String

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowId"></a>

```java
public java.lang.String getWorkflowId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.internalValue"></a>

```java
public TransferServerWorkflowDetailsOnUpload getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

---


### TransferServerWorkflowDetailsOutputReference <a name="TransferServerWorkflowDetailsOutputReference" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.transfer_server.TransferServerWorkflowDetailsOutputReference;

new TransferServerWorkflowDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.putOnPartialUpload">putOnPartialUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.putOnUpload">putOnUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnPartialUpload">resetOnPartialUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnUpload">resetOnUpload</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnPartialUpload` <a name="putOnPartialUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.putOnPartialUpload"></a>

```java
public void putOnPartialUpload(TransferServerWorkflowDetailsOnPartialUpload value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.putOnPartialUpload.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>

---

##### `putOnUpload` <a name="putOnUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.putOnUpload"></a>

```java
public void putOnUpload(TransferServerWorkflowDetailsOnUpload value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.putOnUpload.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

---

##### `resetOnPartialUpload` <a name="resetOnPartialUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnPartialUpload"></a>

```java
public void resetOnPartialUpload()
```

##### `resetOnUpload` <a name="resetOnUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnUpload"></a>

```java
public void resetOnUpload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onPartialUpload">onPartialUpload</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference">TransferServerWorkflowDetailsOnPartialUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUpload">onUpload</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference">TransferServerWorkflowDetailsOnUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onPartialUploadInput">onPartialUploadInput</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUploadInput">onUploadInput</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onPartialUpload`<sup>Required</sup> <a name="onPartialUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onPartialUpload"></a>

```java
public TransferServerWorkflowDetailsOnPartialUploadOutputReference getOnPartialUpload();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference">TransferServerWorkflowDetailsOnPartialUploadOutputReference</a>

---

##### `onUpload`<sup>Required</sup> <a name="onUpload" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUpload"></a>

```java
public TransferServerWorkflowDetailsOnUploadOutputReference getOnUpload();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference">TransferServerWorkflowDetailsOnUploadOutputReference</a>

---

##### `onPartialUploadInput`<sup>Optional</sup> <a name="onPartialUploadInput" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onPartialUploadInput"></a>

```java
public TransferServerWorkflowDetailsOnPartialUpload getOnPartialUploadInput();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>

---

##### `onUploadInput`<sup>Optional</sup> <a name="onUploadInput" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUploadInput"></a>

```java
public TransferServerWorkflowDetailsOnUpload getOnUploadInput();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.internalValue"></a>

```java
public TransferServerWorkflowDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

---



