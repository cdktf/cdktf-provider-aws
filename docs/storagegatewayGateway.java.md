# `storagegatewayGateway` Submodule <a name="`storagegatewayGateway` Submodule" id="@cdktf/provider-aws.storagegatewayGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayGateway <a name="StoragegatewayGateway" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway aws_storagegateway_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_gateway.StoragegatewayGateway;

StoragegatewayGateway.Builder.create(Construct scope, java.lang.String id)
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
    .gatewayName(java.lang.String)
    .gatewayTimezone(java.lang.String)
//  .activationKey(java.lang.String)
//  .averageDownloadRateLimitInBitsPerSec(java.lang.Number)
//  .averageUploadRateLimitInBitsPerSec(java.lang.Number)
//  .cloudwatchLogGroupArn(java.lang.String)
//  .gatewayIpAddress(java.lang.String)
//  .gatewayType(java.lang.String)
//  .gatewayVpcEndpoint(java.lang.String)
//  .id(java.lang.String)
//  .maintenanceStartTime(StoragegatewayGatewayMaintenanceStartTime)
//  .mediumChangerType(java.lang.String)
//  .smbActiveDirectorySettings(StoragegatewayGatewaySmbActiveDirectorySettings)
//  .smbFileShareVisibility(java.lang.Boolean)
//  .smbFileShareVisibility(IResolvable)
//  .smbGuestPassword(java.lang.String)
//  .smbSecurityStrategy(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .tapeDriveType(java.lang.String)
//  .timeouts(StoragegatewayGatewayTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.gatewayName">gatewayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_name StoragegatewayGateway#gateway_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.gatewayTimezone">gatewayTimezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_timezone StoragegatewayGateway#gateway_timezone}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.activationKey">activationKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#activation_key StoragegatewayGateway#activation_key}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.averageDownloadRateLimitInBitsPerSec">averageDownloadRateLimitInBitsPerSec</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_download_rate_limit_in_bits_per_sec StoragegatewayGateway#average_download_rate_limit_in_bits_per_sec}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.averageUploadRateLimitInBitsPerSec">averageUploadRateLimitInBitsPerSec</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_upload_rate_limit_in_bits_per_sec StoragegatewayGateway#average_upload_rate_limit_in_bits_per_sec}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#cloudwatch_log_group_arn StoragegatewayGateway#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.gatewayIpAddress">gatewayIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_ip_address StoragegatewayGateway#gateway_ip_address}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.gatewayType">gatewayType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_type StoragegatewayGateway#gateway_type}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.gatewayVpcEndpoint">gatewayVpcEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_vpc_endpoint StoragegatewayGateway#gateway_vpc_endpoint}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#id StoragegatewayGateway#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.maintenanceStartTime">maintenanceStartTime</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a></code> | maintenance_start_time block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.mediumChangerType">mediumChangerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#medium_changer_type StoragegatewayGateway#medium_changer_type}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.smbActiveDirectorySettings">smbActiveDirectorySettings</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a></code> | smb_active_directory_settings block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.smbFileShareVisibility">smbFileShareVisibility</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_file_share_visibility StoragegatewayGateway#smb_file_share_visibility}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.smbGuestPassword">smbGuestPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_guest_password StoragegatewayGateway#smb_guest_password}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.smbSecurityStrategy">smbSecurityStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_security_strategy StoragegatewayGateway#smb_security_strategy}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags StoragegatewayGateway#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags_all StoragegatewayGateway#tags_all}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.tapeDriveType">tapeDriveType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tape_drive_type StoragegatewayGateway#tape_drive_type}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.gatewayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_name StoragegatewayGateway#gateway_name}.

---

##### `gatewayTimezone`<sup>Required</sup> <a name="gatewayTimezone" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.gatewayTimezone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_timezone StoragegatewayGateway#gateway_timezone}.

---

##### `activationKey`<sup>Optional</sup> <a name="activationKey" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.activationKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#activation_key StoragegatewayGateway#activation_key}.

---

##### `averageDownloadRateLimitInBitsPerSec`<sup>Optional</sup> <a name="averageDownloadRateLimitInBitsPerSec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.averageDownloadRateLimitInBitsPerSec"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_download_rate_limit_in_bits_per_sec StoragegatewayGateway#average_download_rate_limit_in_bits_per_sec}.

---

##### `averageUploadRateLimitInBitsPerSec`<sup>Optional</sup> <a name="averageUploadRateLimitInBitsPerSec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.averageUploadRateLimitInBitsPerSec"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_upload_rate_limit_in_bits_per_sec StoragegatewayGateway#average_upload_rate_limit_in_bits_per_sec}.

---

##### `cloudwatchLogGroupArn`<sup>Optional</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.cloudwatchLogGroupArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#cloudwatch_log_group_arn StoragegatewayGateway#cloudwatch_log_group_arn}.

---

##### `gatewayIpAddress`<sup>Optional</sup> <a name="gatewayIpAddress" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.gatewayIpAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_ip_address StoragegatewayGateway#gateway_ip_address}.

---

##### `gatewayType`<sup>Optional</sup> <a name="gatewayType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.gatewayType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_type StoragegatewayGateway#gateway_type}.

---

##### `gatewayVpcEndpoint`<sup>Optional</sup> <a name="gatewayVpcEndpoint" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.gatewayVpcEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_vpc_endpoint StoragegatewayGateway#gateway_vpc_endpoint}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#id StoragegatewayGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceStartTime`<sup>Optional</sup> <a name="maintenanceStartTime" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.maintenanceStartTime"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a>

maintenance_start_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#maintenance_start_time StoragegatewayGateway#maintenance_start_time}

---

##### `mediumChangerType`<sup>Optional</sup> <a name="mediumChangerType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.mediumChangerType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#medium_changer_type StoragegatewayGateway#medium_changer_type}.

---

##### `smbActiveDirectorySettings`<sup>Optional</sup> <a name="smbActiveDirectorySettings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.smbActiveDirectorySettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a>

smb_active_directory_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_active_directory_settings StoragegatewayGateway#smb_active_directory_settings}

---

##### `smbFileShareVisibility`<sup>Optional</sup> <a name="smbFileShareVisibility" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.smbFileShareVisibility"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_file_share_visibility StoragegatewayGateway#smb_file_share_visibility}.

---

##### `smbGuestPassword`<sup>Optional</sup> <a name="smbGuestPassword" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.smbGuestPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_guest_password StoragegatewayGateway#smb_guest_password}.

---

##### `smbSecurityStrategy`<sup>Optional</sup> <a name="smbSecurityStrategy" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.smbSecurityStrategy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_security_strategy StoragegatewayGateway#smb_security_strategy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags StoragegatewayGateway#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags_all StoragegatewayGateway#tags_all}.

---

##### `tapeDriveType`<sup>Optional</sup> <a name="tapeDriveType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.tapeDriveType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tape_drive_type StoragegatewayGateway#tape_drive_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#timeouts StoragegatewayGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putMaintenanceStartTime">putMaintenanceStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putSmbActiveDirectorySettings">putSmbActiveDirectorySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetActivationKey">resetActivationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetAverageDownloadRateLimitInBitsPerSec">resetAverageDownloadRateLimitInBitsPerSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetAverageUploadRateLimitInBitsPerSec">resetAverageUploadRateLimitInBitsPerSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetCloudwatchLogGroupArn">resetCloudwatchLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayIpAddress">resetGatewayIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayType">resetGatewayType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayVpcEndpoint">resetGatewayVpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetMaintenanceStartTime">resetMaintenanceStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetMediumChangerType">resetMediumChangerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbActiveDirectorySettings">resetSmbActiveDirectorySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbFileShareVisibility">resetSmbFileShareVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbGuestPassword">resetSmbGuestPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbSecurityStrategy">resetSmbSecurityStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTapeDriveType">resetTapeDriveType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMaintenanceStartTime` <a name="putMaintenanceStartTime" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putMaintenanceStartTime"></a>

```java
public void putMaintenanceStartTime(StoragegatewayGatewayMaintenanceStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putMaintenanceStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a>

---

##### `putSmbActiveDirectorySettings` <a name="putSmbActiveDirectorySettings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putSmbActiveDirectorySettings"></a>

```java
public void putSmbActiveDirectorySettings(StoragegatewayGatewaySmbActiveDirectorySettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putSmbActiveDirectorySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putTimeouts"></a>

```java
public void putTimeouts(StoragegatewayGatewayTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a>

---

##### `resetActivationKey` <a name="resetActivationKey" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetActivationKey"></a>

```java
public void resetActivationKey()
```

##### `resetAverageDownloadRateLimitInBitsPerSec` <a name="resetAverageDownloadRateLimitInBitsPerSec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetAverageDownloadRateLimitInBitsPerSec"></a>

```java
public void resetAverageDownloadRateLimitInBitsPerSec()
```

##### `resetAverageUploadRateLimitInBitsPerSec` <a name="resetAverageUploadRateLimitInBitsPerSec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetAverageUploadRateLimitInBitsPerSec"></a>

```java
public void resetAverageUploadRateLimitInBitsPerSec()
```

##### `resetCloudwatchLogGroupArn` <a name="resetCloudwatchLogGroupArn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetCloudwatchLogGroupArn"></a>

```java
public void resetCloudwatchLogGroupArn()
```

##### `resetGatewayIpAddress` <a name="resetGatewayIpAddress" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayIpAddress"></a>

```java
public void resetGatewayIpAddress()
```

##### `resetGatewayType` <a name="resetGatewayType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayType"></a>

```java
public void resetGatewayType()
```

##### `resetGatewayVpcEndpoint` <a name="resetGatewayVpcEndpoint" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayVpcEndpoint"></a>

```java
public void resetGatewayVpcEndpoint()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetId"></a>

```java
public void resetId()
```

##### `resetMaintenanceStartTime` <a name="resetMaintenanceStartTime" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetMaintenanceStartTime"></a>

```java
public void resetMaintenanceStartTime()
```

##### `resetMediumChangerType` <a name="resetMediumChangerType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetMediumChangerType"></a>

```java
public void resetMediumChangerType()
```

##### `resetSmbActiveDirectorySettings` <a name="resetSmbActiveDirectorySettings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbActiveDirectorySettings"></a>

```java
public void resetSmbActiveDirectorySettings()
```

##### `resetSmbFileShareVisibility` <a name="resetSmbFileShareVisibility" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbFileShareVisibility"></a>

```java
public void resetSmbFileShareVisibility()
```

##### `resetSmbGuestPassword` <a name="resetSmbGuestPassword" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbGuestPassword"></a>

```java
public void resetSmbGuestPassword()
```

##### `resetSmbSecurityStrategy` <a name="resetSmbSecurityStrategy" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbSecurityStrategy"></a>

```java
public void resetSmbSecurityStrategy()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTapeDriveType` <a name="resetTapeDriveType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTapeDriveType"></a>

```java
public void resetTapeDriveType()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_gateway.StoragegatewayGateway;

StoragegatewayGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_gateway.StoragegatewayGateway;

StoragegatewayGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_gateway.StoragegatewayGateway;

StoragegatewayGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.ec2InstanceId">ec2InstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayNetworkInterface">gatewayNetworkInterface</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList">StoragegatewayGatewayGatewayNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.hostEnvironment">hostEnvironment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.maintenanceStartTime">maintenanceStartTime</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference">StoragegatewayGatewayMaintenanceStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbActiveDirectorySettings">smbActiveDirectorySettings</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference">StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference">StoragegatewayGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.activationKeyInput">activationKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageDownloadRateLimitInBitsPerSecInput">averageDownloadRateLimitInBitsPerSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageUploadRateLimitInBitsPerSecInput">averageUploadRateLimitInBitsPerSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cloudwatchLogGroupArnInput">cloudwatchLogGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayIpAddressInput">gatewayIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayNameInput">gatewayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTimezoneInput">gatewayTimezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTypeInput">gatewayTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayVpcEndpointInput">gatewayVpcEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.maintenanceStartTimeInput">maintenanceStartTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.mediumChangerTypeInput">mediumChangerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbActiveDirectorySettingsInput">smbActiveDirectorySettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbFileShareVisibilityInput">smbFileShareVisibilityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbGuestPasswordInput">smbGuestPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbSecurityStrategyInput">smbSecurityStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tapeDriveTypeInput">tapeDriveTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.activationKey">activationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageDownloadRateLimitInBitsPerSec">averageDownloadRateLimitInBitsPerSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageUploadRateLimitInBitsPerSec">averageUploadRateLimitInBitsPerSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayIpAddress">gatewayIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayName">gatewayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTimezone">gatewayTimezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayType">gatewayType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayVpcEndpoint">gatewayVpcEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.mediumChangerType">mediumChangerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbFileShareVisibility">smbFileShareVisibility</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbGuestPassword">smbGuestPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbSecurityStrategy">smbSecurityStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tapeDriveType">tapeDriveType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `ec2InstanceId`<sup>Required</sup> <a name="ec2InstanceId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.ec2InstanceId"></a>

```java
public java.lang.String getEc2InstanceId();
```

- *Type:* java.lang.String

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

---

##### `gatewayNetworkInterface`<sup>Required</sup> <a name="gatewayNetworkInterface" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayNetworkInterface"></a>

```java
public StoragegatewayGatewayGatewayNetworkInterfaceList getGatewayNetworkInterface();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList">StoragegatewayGatewayGatewayNetworkInterfaceList</a>

---

##### `hostEnvironment`<sup>Required</sup> <a name="hostEnvironment" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.hostEnvironment"></a>

```java
public java.lang.String getHostEnvironment();
```

- *Type:* java.lang.String

---

##### `maintenanceStartTime`<sup>Required</sup> <a name="maintenanceStartTime" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.maintenanceStartTime"></a>

```java
public StoragegatewayGatewayMaintenanceStartTimeOutputReference getMaintenanceStartTime();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference">StoragegatewayGatewayMaintenanceStartTimeOutputReference</a>

---

##### `smbActiveDirectorySettings`<sup>Required</sup> <a name="smbActiveDirectorySettings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbActiveDirectorySettings"></a>

```java
public StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference getSmbActiveDirectorySettings();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference">StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.timeouts"></a>

```java
public StoragegatewayGatewayTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference">StoragegatewayGatewayTimeoutsOutputReference</a>

---

##### `activationKeyInput`<sup>Optional</sup> <a name="activationKeyInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.activationKeyInput"></a>

```java
public java.lang.String getActivationKeyInput();
```

- *Type:* java.lang.String

---

##### `averageDownloadRateLimitInBitsPerSecInput`<sup>Optional</sup> <a name="averageDownloadRateLimitInBitsPerSecInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageDownloadRateLimitInBitsPerSecInput"></a>

```java
public java.lang.Number getAverageDownloadRateLimitInBitsPerSecInput();
```

- *Type:* java.lang.Number

---

##### `averageUploadRateLimitInBitsPerSecInput`<sup>Optional</sup> <a name="averageUploadRateLimitInBitsPerSecInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageUploadRateLimitInBitsPerSecInput"></a>

```java
public java.lang.Number getAverageUploadRateLimitInBitsPerSecInput();
```

- *Type:* java.lang.Number

---

##### `cloudwatchLogGroupArnInput`<sup>Optional</sup> <a name="cloudwatchLogGroupArnInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cloudwatchLogGroupArnInput"></a>

```java
public java.lang.String getCloudwatchLogGroupArnInput();
```

- *Type:* java.lang.String

---

##### `gatewayIpAddressInput`<sup>Optional</sup> <a name="gatewayIpAddressInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayIpAddressInput"></a>

```java
public java.lang.String getGatewayIpAddressInput();
```

- *Type:* java.lang.String

---

##### `gatewayNameInput`<sup>Optional</sup> <a name="gatewayNameInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayNameInput"></a>

```java
public java.lang.String getGatewayNameInput();
```

- *Type:* java.lang.String

---

##### `gatewayTimezoneInput`<sup>Optional</sup> <a name="gatewayTimezoneInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTimezoneInput"></a>

```java
public java.lang.String getGatewayTimezoneInput();
```

- *Type:* java.lang.String

---

##### `gatewayTypeInput`<sup>Optional</sup> <a name="gatewayTypeInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTypeInput"></a>

```java
public java.lang.String getGatewayTypeInput();
```

- *Type:* java.lang.String

---

##### `gatewayVpcEndpointInput`<sup>Optional</sup> <a name="gatewayVpcEndpointInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayVpcEndpointInput"></a>

```java
public java.lang.String getGatewayVpcEndpointInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maintenanceStartTimeInput`<sup>Optional</sup> <a name="maintenanceStartTimeInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.maintenanceStartTimeInput"></a>

```java
public StoragegatewayGatewayMaintenanceStartTime getMaintenanceStartTimeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a>

---

##### `mediumChangerTypeInput`<sup>Optional</sup> <a name="mediumChangerTypeInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.mediumChangerTypeInput"></a>

```java
public java.lang.String getMediumChangerTypeInput();
```

- *Type:* java.lang.String

---

##### `smbActiveDirectorySettingsInput`<sup>Optional</sup> <a name="smbActiveDirectorySettingsInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbActiveDirectorySettingsInput"></a>

```java
public StoragegatewayGatewaySmbActiveDirectorySettings getSmbActiveDirectorySettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a>

---

##### `smbFileShareVisibilityInput`<sup>Optional</sup> <a name="smbFileShareVisibilityInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbFileShareVisibilityInput"></a>

```java
public java.lang.Object getSmbFileShareVisibilityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `smbGuestPasswordInput`<sup>Optional</sup> <a name="smbGuestPasswordInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbGuestPasswordInput"></a>

```java
public java.lang.String getSmbGuestPasswordInput();
```

- *Type:* java.lang.String

---

##### `smbSecurityStrategyInput`<sup>Optional</sup> <a name="smbSecurityStrategyInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbSecurityStrategyInput"></a>

```java
public java.lang.String getSmbSecurityStrategyInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tapeDriveTypeInput`<sup>Optional</sup> <a name="tapeDriveTypeInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tapeDriveTypeInput"></a>

```java
public java.lang.String getTapeDriveTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `activationKey`<sup>Required</sup> <a name="activationKey" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.activationKey"></a>

```java
public java.lang.String getActivationKey();
```

- *Type:* java.lang.String

---

##### `averageDownloadRateLimitInBitsPerSec`<sup>Required</sup> <a name="averageDownloadRateLimitInBitsPerSec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageDownloadRateLimitInBitsPerSec"></a>

```java
public java.lang.Number getAverageDownloadRateLimitInBitsPerSec();
```

- *Type:* java.lang.Number

---

##### `averageUploadRateLimitInBitsPerSec`<sup>Required</sup> <a name="averageUploadRateLimitInBitsPerSec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageUploadRateLimitInBitsPerSec"></a>

```java
public java.lang.Number getAverageUploadRateLimitInBitsPerSec();
```

- *Type:* java.lang.Number

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cloudwatchLogGroupArn"></a>

```java
public java.lang.String getCloudwatchLogGroupArn();
```

- *Type:* java.lang.String

---

##### `gatewayIpAddress`<sup>Required</sup> <a name="gatewayIpAddress" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayIpAddress"></a>

```java
public java.lang.String getGatewayIpAddress();
```

- *Type:* java.lang.String

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayName"></a>

```java
public java.lang.String getGatewayName();
```

- *Type:* java.lang.String

---

##### `gatewayTimezone`<sup>Required</sup> <a name="gatewayTimezone" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTimezone"></a>

```java
public java.lang.String getGatewayTimezone();
```

- *Type:* java.lang.String

---

##### `gatewayType`<sup>Required</sup> <a name="gatewayType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayType"></a>

```java
public java.lang.String getGatewayType();
```

- *Type:* java.lang.String

---

##### `gatewayVpcEndpoint`<sup>Required</sup> <a name="gatewayVpcEndpoint" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayVpcEndpoint"></a>

```java
public java.lang.String getGatewayVpcEndpoint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mediumChangerType`<sup>Required</sup> <a name="mediumChangerType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.mediumChangerType"></a>

```java
public java.lang.String getMediumChangerType();
```

- *Type:* java.lang.String

---

##### `smbFileShareVisibility`<sup>Required</sup> <a name="smbFileShareVisibility" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbFileShareVisibility"></a>

```java
public java.lang.Object getSmbFileShareVisibility();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `smbGuestPassword`<sup>Required</sup> <a name="smbGuestPassword" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbGuestPassword"></a>

```java
public java.lang.String getSmbGuestPassword();
```

- *Type:* java.lang.String

---

##### `smbSecurityStrategy`<sup>Required</sup> <a name="smbSecurityStrategy" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbSecurityStrategy"></a>

```java
public java.lang.String getSmbSecurityStrategy();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tapeDriveType`<sup>Required</sup> <a name="tapeDriveType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tapeDriveType"></a>

```java
public java.lang.String getTapeDriveType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayGatewayConfig <a name="StoragegatewayGatewayConfig" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_gateway.StoragegatewayGatewayConfig;

StoragegatewayGatewayConfig.builder()
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
    .gatewayName(java.lang.String)
    .gatewayTimezone(java.lang.String)
//  .activationKey(java.lang.String)
//  .averageDownloadRateLimitInBitsPerSec(java.lang.Number)
//  .averageUploadRateLimitInBitsPerSec(java.lang.Number)
//  .cloudwatchLogGroupArn(java.lang.String)
//  .gatewayIpAddress(java.lang.String)
//  .gatewayType(java.lang.String)
//  .gatewayVpcEndpoint(java.lang.String)
//  .id(java.lang.String)
//  .maintenanceStartTime(StoragegatewayGatewayMaintenanceStartTime)
//  .mediumChangerType(java.lang.String)
//  .smbActiveDirectorySettings(StoragegatewayGatewaySmbActiveDirectorySettings)
//  .smbFileShareVisibility(java.lang.Boolean)
//  .smbFileShareVisibility(IResolvable)
//  .smbGuestPassword(java.lang.String)
//  .smbSecurityStrategy(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .tapeDriveType(java.lang.String)
//  .timeouts(StoragegatewayGatewayTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayName">gatewayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_name StoragegatewayGateway#gateway_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayTimezone">gatewayTimezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_timezone StoragegatewayGateway#gateway_timezone}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.activationKey">activationKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#activation_key StoragegatewayGateway#activation_key}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.averageDownloadRateLimitInBitsPerSec">averageDownloadRateLimitInBitsPerSec</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_download_rate_limit_in_bits_per_sec StoragegatewayGateway#average_download_rate_limit_in_bits_per_sec}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.averageUploadRateLimitInBitsPerSec">averageUploadRateLimitInBitsPerSec</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_upload_rate_limit_in_bits_per_sec StoragegatewayGateway#average_upload_rate_limit_in_bits_per_sec}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#cloudwatch_log_group_arn StoragegatewayGateway#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayIpAddress">gatewayIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_ip_address StoragegatewayGateway#gateway_ip_address}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayType">gatewayType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_type StoragegatewayGateway#gateway_type}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayVpcEndpoint">gatewayVpcEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_vpc_endpoint StoragegatewayGateway#gateway_vpc_endpoint}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#id StoragegatewayGateway#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.maintenanceStartTime">maintenanceStartTime</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a></code> | maintenance_start_time block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.mediumChangerType">mediumChangerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#medium_changer_type StoragegatewayGateway#medium_changer_type}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbActiveDirectorySettings">smbActiveDirectorySettings</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a></code> | smb_active_directory_settings block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbFileShareVisibility">smbFileShareVisibility</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_file_share_visibility StoragegatewayGateway#smb_file_share_visibility}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbGuestPassword">smbGuestPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_guest_password StoragegatewayGateway#smb_guest_password}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbSecurityStrategy">smbSecurityStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_security_strategy StoragegatewayGateway#smb_security_strategy}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags StoragegatewayGateway#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags_all StoragegatewayGateway#tags_all}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tapeDriveType">tapeDriveType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tape_drive_type StoragegatewayGateway#tape_drive_type}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayName"></a>

```java
public java.lang.String getGatewayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_name StoragegatewayGateway#gateway_name}.

---

##### `gatewayTimezone`<sup>Required</sup> <a name="gatewayTimezone" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayTimezone"></a>

```java
public java.lang.String getGatewayTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_timezone StoragegatewayGateway#gateway_timezone}.

---

##### `activationKey`<sup>Optional</sup> <a name="activationKey" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.activationKey"></a>

```java
public java.lang.String getActivationKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#activation_key StoragegatewayGateway#activation_key}.

---

##### `averageDownloadRateLimitInBitsPerSec`<sup>Optional</sup> <a name="averageDownloadRateLimitInBitsPerSec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.averageDownloadRateLimitInBitsPerSec"></a>

```java
public java.lang.Number getAverageDownloadRateLimitInBitsPerSec();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_download_rate_limit_in_bits_per_sec StoragegatewayGateway#average_download_rate_limit_in_bits_per_sec}.

---

##### `averageUploadRateLimitInBitsPerSec`<sup>Optional</sup> <a name="averageUploadRateLimitInBitsPerSec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.averageUploadRateLimitInBitsPerSec"></a>

```java
public java.lang.Number getAverageUploadRateLimitInBitsPerSec();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_upload_rate_limit_in_bits_per_sec StoragegatewayGateway#average_upload_rate_limit_in_bits_per_sec}.

---

##### `cloudwatchLogGroupArn`<sup>Optional</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.cloudwatchLogGroupArn"></a>

```java
public java.lang.String getCloudwatchLogGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#cloudwatch_log_group_arn StoragegatewayGateway#cloudwatch_log_group_arn}.

---

##### `gatewayIpAddress`<sup>Optional</sup> <a name="gatewayIpAddress" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayIpAddress"></a>

```java
public java.lang.String getGatewayIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_ip_address StoragegatewayGateway#gateway_ip_address}.

---

##### `gatewayType`<sup>Optional</sup> <a name="gatewayType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayType"></a>

```java
public java.lang.String getGatewayType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_type StoragegatewayGateway#gateway_type}.

---

##### `gatewayVpcEndpoint`<sup>Optional</sup> <a name="gatewayVpcEndpoint" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayVpcEndpoint"></a>

```java
public java.lang.String getGatewayVpcEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_vpc_endpoint StoragegatewayGateway#gateway_vpc_endpoint}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#id StoragegatewayGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceStartTime`<sup>Optional</sup> <a name="maintenanceStartTime" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.maintenanceStartTime"></a>

```java
public StoragegatewayGatewayMaintenanceStartTime getMaintenanceStartTime();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a>

maintenance_start_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#maintenance_start_time StoragegatewayGateway#maintenance_start_time}

---

##### `mediumChangerType`<sup>Optional</sup> <a name="mediumChangerType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.mediumChangerType"></a>

```java
public java.lang.String getMediumChangerType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#medium_changer_type StoragegatewayGateway#medium_changer_type}.

---

##### `smbActiveDirectorySettings`<sup>Optional</sup> <a name="smbActiveDirectorySettings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbActiveDirectorySettings"></a>

```java
public StoragegatewayGatewaySmbActiveDirectorySettings getSmbActiveDirectorySettings();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a>

smb_active_directory_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_active_directory_settings StoragegatewayGateway#smb_active_directory_settings}

---

##### `smbFileShareVisibility`<sup>Optional</sup> <a name="smbFileShareVisibility" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbFileShareVisibility"></a>

```java
public java.lang.Object getSmbFileShareVisibility();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_file_share_visibility StoragegatewayGateway#smb_file_share_visibility}.

---

##### `smbGuestPassword`<sup>Optional</sup> <a name="smbGuestPassword" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbGuestPassword"></a>

```java
public java.lang.String getSmbGuestPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_guest_password StoragegatewayGateway#smb_guest_password}.

---

##### `smbSecurityStrategy`<sup>Optional</sup> <a name="smbSecurityStrategy" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbSecurityStrategy"></a>

```java
public java.lang.String getSmbSecurityStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_security_strategy StoragegatewayGateway#smb_security_strategy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags StoragegatewayGateway#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags_all StoragegatewayGateway#tags_all}.

---

##### `tapeDriveType`<sup>Optional</sup> <a name="tapeDriveType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tapeDriveType"></a>

```java
public java.lang.String getTapeDriveType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tape_drive_type StoragegatewayGateway#tape_drive_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.timeouts"></a>

```java
public StoragegatewayGatewayTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#timeouts StoragegatewayGateway#timeouts}

---

### StoragegatewayGatewayGatewayNetworkInterface <a name="StoragegatewayGatewayGatewayNetworkInterface" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_gateway.StoragegatewayGatewayGatewayNetworkInterface;

StoragegatewayGatewayGatewayNetworkInterface.builder()
    .build();
```


### StoragegatewayGatewayMaintenanceStartTime <a name="StoragegatewayGatewayMaintenanceStartTime" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_gateway.StoragegatewayGatewayMaintenanceStartTime;

StoragegatewayGatewayMaintenanceStartTime.builder()
    .hourOfDay(java.lang.Number)
//  .dayOfMonth(java.lang.String)
//  .dayOfWeek(java.lang.String)
//  .minuteOfHour(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.hourOfDay">hourOfDay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#hour_of_day StoragegatewayGateway#hour_of_day}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.dayOfMonth">dayOfMonth</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#day_of_month StoragegatewayGateway#day_of_month}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#day_of_week StoragegatewayGateway#day_of_week}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.minuteOfHour">minuteOfHour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#minute_of_hour StoragegatewayGateway#minute_of_hour}. |

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.hourOfDay"></a>

```java
public java.lang.Number getHourOfDay();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#hour_of_day StoragegatewayGateway#hour_of_day}.

---

##### `dayOfMonth`<sup>Optional</sup> <a name="dayOfMonth" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.dayOfMonth"></a>

```java
public java.lang.String getDayOfMonth();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#day_of_month StoragegatewayGateway#day_of_month}.

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#day_of_week StoragegatewayGateway#day_of_week}.

---

##### `minuteOfHour`<sup>Optional</sup> <a name="minuteOfHour" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.minuteOfHour"></a>

```java
public java.lang.Number getMinuteOfHour();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#minute_of_hour StoragegatewayGateway#minute_of_hour}.

---

### StoragegatewayGatewaySmbActiveDirectorySettings <a name="StoragegatewayGatewaySmbActiveDirectorySettings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_gateway.StoragegatewayGatewaySmbActiveDirectorySettings;

StoragegatewayGatewaySmbActiveDirectorySettings.builder()
    .domainName(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
//  .domainControllers(java.util.List<java.lang.String>)
//  .organizationalUnit(java.lang.String)
//  .timeoutInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#domain_name StoragegatewayGateway#domain_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#password StoragegatewayGateway#password}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#username StoragegatewayGateway#username}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.domainControllers">domainControllers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#domain_controllers StoragegatewayGateway#domain_controllers}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#organizational_unit StoragegatewayGateway#organizational_unit}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#timeout_in_seconds StoragegatewayGateway#timeout_in_seconds}. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#domain_name StoragegatewayGateway#domain_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#password StoragegatewayGateway#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#username StoragegatewayGateway#username}.

---

##### `domainControllers`<sup>Optional</sup> <a name="domainControllers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.domainControllers"></a>

```java
public java.util.List<java.lang.String> getDomainControllers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#domain_controllers StoragegatewayGateway#domain_controllers}.

---

##### `organizationalUnit`<sup>Optional</sup> <a name="organizationalUnit" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#organizational_unit StoragegatewayGateway#organizational_unit}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#timeout_in_seconds StoragegatewayGateway#timeout_in_seconds}.

---

### StoragegatewayGatewayTimeouts <a name="StoragegatewayGatewayTimeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_gateway.StoragegatewayGatewayTimeouts;

StoragegatewayGatewayTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#create StoragegatewayGateway#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#create StoragegatewayGateway#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayGatewayGatewayNetworkInterfaceList <a name="StoragegatewayGatewayGatewayNetworkInterfaceList" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_gateway.StoragegatewayGatewayGatewayNetworkInterfaceList;

new StoragegatewayGatewayGatewayNetworkInterfaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.get"></a>

```java
public StoragegatewayGatewayGatewayNetworkInterfaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### StoragegatewayGatewayGatewayNetworkInterfaceOutputReference <a name="StoragegatewayGatewayGatewayNetworkInterfaceOutputReference" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_gateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference;

new StoragegatewayGatewayGatewayNetworkInterfaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.ipv4Address">ipv4Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterface">StoragegatewayGatewayGatewayNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.ipv4Address"></a>

```java
public java.lang.String getIpv4Address();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.internalValue"></a>

```java
public StoragegatewayGatewayGatewayNetworkInterface getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterface">StoragegatewayGatewayGatewayNetworkInterface</a>

---


### StoragegatewayGatewayMaintenanceStartTimeOutputReference <a name="StoragegatewayGatewayMaintenanceStartTimeOutputReference" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_gateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference;

new StoragegatewayGatewayMaintenanceStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetDayOfMonth">resetDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetMinuteOfHour">resetMinuteOfHour</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDayOfMonth` <a name="resetDayOfMonth" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetDayOfMonth"></a>

```java
public void resetDayOfMonth()
```

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetDayOfWeek"></a>

```java
public void resetDayOfWeek()
```

##### `resetMinuteOfHour` <a name="resetMinuteOfHour" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetMinuteOfHour"></a>

```java
public void resetMinuteOfHour()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfMonthInput">dayOfMonthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.hourOfDayInput">hourOfDayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.minuteOfHourInput">minuteOfHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfMonth">dayOfMonth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.hourOfDay">hourOfDay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.minuteOfHour">minuteOfHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfMonthInput`<sup>Optional</sup> <a name="dayOfMonthInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfMonthInput"></a>

```java
public java.lang.String getDayOfMonthInput();
```

- *Type:* java.lang.String

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `hourOfDayInput`<sup>Optional</sup> <a name="hourOfDayInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.hourOfDayInput"></a>

```java
public java.lang.Number getHourOfDayInput();
```

- *Type:* java.lang.Number

---

##### `minuteOfHourInput`<sup>Optional</sup> <a name="minuteOfHourInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.minuteOfHourInput"></a>

```java
public java.lang.Number getMinuteOfHourInput();
```

- *Type:* java.lang.Number

---

##### `dayOfMonth`<sup>Required</sup> <a name="dayOfMonth" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfMonth"></a>

```java
public java.lang.String getDayOfMonth();
```

- *Type:* java.lang.String

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.hourOfDay"></a>

```java
public java.lang.Number getHourOfDay();
```

- *Type:* java.lang.Number

---

##### `minuteOfHour`<sup>Required</sup> <a name="minuteOfHour" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.minuteOfHour"></a>

```java
public java.lang.Number getMinuteOfHour();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.internalValue"></a>

```java
public StoragegatewayGatewayMaintenanceStartTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a>

---


### StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference <a name="StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_gateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference;

new StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetDomainControllers">resetDomainControllers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetOrganizationalUnit">resetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomainControllers` <a name="resetDomainControllers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetDomainControllers"></a>

```java
public void resetDomainControllers()
```

##### `resetOrganizationalUnit` <a name="resetOrganizationalUnit" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetOrganizationalUnit"></a>

```java
public void resetOrganizationalUnit()
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetTimeoutInSeconds"></a>

```java
public void resetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.activeDirectoryStatus">activeDirectoryStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainControllersInput">domainControllersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.organizationalUnitInput">organizationalUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainControllers">domainControllers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeDirectoryStatus`<sup>Required</sup> <a name="activeDirectoryStatus" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.activeDirectoryStatus"></a>

```java
public java.lang.String getActiveDirectoryStatus();
```

- *Type:* java.lang.String

---

##### `domainControllersInput`<sup>Optional</sup> <a name="domainControllersInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainControllersInput"></a>

```java
public java.util.List<java.lang.String> getDomainControllersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `organizationalUnitInput`<sup>Optional</sup> <a name="organizationalUnitInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.organizationalUnitInput"></a>

```java
public java.lang.String getOrganizationalUnitInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.timeoutInSecondsInput"></a>

```java
public java.lang.Number getTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `domainControllers`<sup>Required</sup> <a name="domainControllers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainControllers"></a>

```java
public java.util.List<java.lang.String> getDomainControllers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.internalValue"></a>

```java
public StoragegatewayGatewaySmbActiveDirectorySettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a>

---


### StoragegatewayGatewayTimeoutsOutputReference <a name="StoragegatewayGatewayTimeoutsOutputReference" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_gateway.StoragegatewayGatewayTimeoutsOutputReference;

new StoragegatewayGatewayTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



