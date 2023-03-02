# `storagegatewayGateway` Submodule <a name="`storagegatewayGateway` Submodule" id="@cdktf/provider-aws.storagegatewayGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayGateway <a name="StoragegatewayGateway" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway aws_storagegateway_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_gateway

storagegatewayGateway.StoragegatewayGateway(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gateway_name: str,
  gateway_timezone: str,
  activation_key: str = None,
  average_download_rate_limit_in_bits_per_sec: typing.Union[int, float] = None,
  average_upload_rate_limit_in_bits_per_sec: typing.Union[int, float] = None,
  cloudwatch_log_group_arn: str = None,
  gateway_ip_address: str = None,
  gateway_type: str = None,
  gateway_vpc_endpoint: str = None,
  id: str = None,
  maintenance_start_time: StoragegatewayGatewayMaintenanceStartTime = None,
  medium_changer_type: str = None,
  smb_active_directory_settings: StoragegatewayGatewaySmbActiveDirectorySettings = None,
  smb_file_share_visibility: typing.Union[bool, IResolvable] = None,
  smb_guest_password: str = None,
  smb_security_strategy: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  tape_drive_type: str = None,
  timeouts: StoragegatewayGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.gatewayName">gateway_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_name StoragegatewayGateway#gateway_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.gatewayTimezone">gateway_timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_timezone StoragegatewayGateway#gateway_timezone}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.activationKey">activation_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#activation_key StoragegatewayGateway#activation_key}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.averageDownloadRateLimitInBitsPerSec">average_download_rate_limit_in_bits_per_sec</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_download_rate_limit_in_bits_per_sec StoragegatewayGateway#average_download_rate_limit_in_bits_per_sec}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.averageUploadRateLimitInBitsPerSec">average_upload_rate_limit_in_bits_per_sec</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_upload_rate_limit_in_bits_per_sec StoragegatewayGateway#average_upload_rate_limit_in_bits_per_sec}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#cloudwatch_log_group_arn StoragegatewayGateway#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.gatewayIpAddress">gateway_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_ip_address StoragegatewayGateway#gateway_ip_address}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.gatewayType">gateway_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_type StoragegatewayGateway#gateway_type}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.gatewayVpcEndpoint">gateway_vpc_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_vpc_endpoint StoragegatewayGateway#gateway_vpc_endpoint}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#id StoragegatewayGateway#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.maintenanceStartTime">maintenance_start_time</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a></code> | maintenance_start_time block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.mediumChangerType">medium_changer_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#medium_changer_type StoragegatewayGateway#medium_changer_type}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.smbActiveDirectorySettings">smb_active_directory_settings</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a></code> | smb_active_directory_settings block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.smbFileShareVisibility">smb_file_share_visibility</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_file_share_visibility StoragegatewayGateway#smb_file_share_visibility}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.smbGuestPassword">smb_guest_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_guest_password StoragegatewayGateway#smb_guest_password}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.smbSecurityStrategy">smb_security_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_security_strategy StoragegatewayGateway#smb_security_strategy}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags StoragegatewayGateway#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags_all StoragegatewayGateway#tags_all}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.tapeDriveType">tape_drive_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tape_drive_type StoragegatewayGateway#tape_drive_type}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gateway_name`<sup>Required</sup> <a name="gateway_name" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.gatewayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_name StoragegatewayGateway#gateway_name}.

---

##### `gateway_timezone`<sup>Required</sup> <a name="gateway_timezone" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.gatewayTimezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_timezone StoragegatewayGateway#gateway_timezone}.

---

##### `activation_key`<sup>Optional</sup> <a name="activation_key" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.activationKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#activation_key StoragegatewayGateway#activation_key}.

---

##### `average_download_rate_limit_in_bits_per_sec`<sup>Optional</sup> <a name="average_download_rate_limit_in_bits_per_sec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.averageDownloadRateLimitInBitsPerSec"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_download_rate_limit_in_bits_per_sec StoragegatewayGateway#average_download_rate_limit_in_bits_per_sec}.

---

##### `average_upload_rate_limit_in_bits_per_sec`<sup>Optional</sup> <a name="average_upload_rate_limit_in_bits_per_sec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.averageUploadRateLimitInBitsPerSec"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_upload_rate_limit_in_bits_per_sec StoragegatewayGateway#average_upload_rate_limit_in_bits_per_sec}.

---

##### `cloudwatch_log_group_arn`<sup>Optional</sup> <a name="cloudwatch_log_group_arn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.cloudwatchLogGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#cloudwatch_log_group_arn StoragegatewayGateway#cloudwatch_log_group_arn}.

---

##### `gateway_ip_address`<sup>Optional</sup> <a name="gateway_ip_address" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.gatewayIpAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_ip_address StoragegatewayGateway#gateway_ip_address}.

---

##### `gateway_type`<sup>Optional</sup> <a name="gateway_type" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.gatewayType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_type StoragegatewayGateway#gateway_type}.

---

##### `gateway_vpc_endpoint`<sup>Optional</sup> <a name="gateway_vpc_endpoint" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.gatewayVpcEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_vpc_endpoint StoragegatewayGateway#gateway_vpc_endpoint}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#id StoragegatewayGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_start_time`<sup>Optional</sup> <a name="maintenance_start_time" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.maintenanceStartTime"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a>

maintenance_start_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#maintenance_start_time StoragegatewayGateway#maintenance_start_time}

---

##### `medium_changer_type`<sup>Optional</sup> <a name="medium_changer_type" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.mediumChangerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#medium_changer_type StoragegatewayGateway#medium_changer_type}.

---

##### `smb_active_directory_settings`<sup>Optional</sup> <a name="smb_active_directory_settings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.smbActiveDirectorySettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a>

smb_active_directory_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_active_directory_settings StoragegatewayGateway#smb_active_directory_settings}

---

##### `smb_file_share_visibility`<sup>Optional</sup> <a name="smb_file_share_visibility" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.smbFileShareVisibility"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_file_share_visibility StoragegatewayGateway#smb_file_share_visibility}.

---

##### `smb_guest_password`<sup>Optional</sup> <a name="smb_guest_password" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.smbGuestPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_guest_password StoragegatewayGateway#smb_guest_password}.

---

##### `smb_security_strategy`<sup>Optional</sup> <a name="smb_security_strategy" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.smbSecurityStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_security_strategy StoragegatewayGateway#smb_security_strategy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags StoragegatewayGateway#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags_all StoragegatewayGateway#tags_all}.

---

##### `tape_drive_type`<sup>Optional</sup> <a name="tape_drive_type" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.tapeDriveType"></a>

- *Type:* str

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
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putMaintenanceStartTime">put_maintenance_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putSmbActiveDirectorySettings">put_smb_active_directory_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetActivationKey">reset_activation_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetAverageDownloadRateLimitInBitsPerSec">reset_average_download_rate_limit_in_bits_per_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetAverageUploadRateLimitInBitsPerSec">reset_average_upload_rate_limit_in_bits_per_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetCloudwatchLogGroupArn">reset_cloudwatch_log_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayIpAddress">reset_gateway_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayType">reset_gateway_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayVpcEndpoint">reset_gateway_vpc_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetMaintenanceStartTime">reset_maintenance_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetMediumChangerType">reset_medium_changer_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbActiveDirectorySettings">reset_smb_active_directory_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbFileShareVisibility">reset_smb_file_share_visibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbGuestPassword">reset_smb_guest_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbSecurityStrategy">reset_smb_security_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTapeDriveType">reset_tape_drive_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_maintenance_start_time` <a name="put_maintenance_start_time" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putMaintenanceStartTime"></a>

```python
def put_maintenance_start_time(
  hour_of_day: typing.Union[int, float],
  day_of_month: str = None,
  day_of_week: str = None,
  minute_of_hour: typing.Union[int, float] = None
) -> None
```

###### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putMaintenanceStartTime.parameter.hourOfDay"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#hour_of_day StoragegatewayGateway#hour_of_day}.

---

###### `day_of_month`<sup>Optional</sup> <a name="day_of_month" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putMaintenanceStartTime.parameter.dayOfMonth"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#day_of_month StoragegatewayGateway#day_of_month}.

---

###### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putMaintenanceStartTime.parameter.dayOfWeek"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#day_of_week StoragegatewayGateway#day_of_week}.

---

###### `minute_of_hour`<sup>Optional</sup> <a name="minute_of_hour" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putMaintenanceStartTime.parameter.minuteOfHour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#minute_of_hour StoragegatewayGateway#minute_of_hour}.

---

##### `put_smb_active_directory_settings` <a name="put_smb_active_directory_settings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putSmbActiveDirectorySettings"></a>

```python
def put_smb_active_directory_settings(
  domain_name: str,
  password: str,
  username: str,
  domain_controllers: typing.List[str] = None,
  organizational_unit: str = None,
  timeout_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putSmbActiveDirectorySettings.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#domain_name StoragegatewayGateway#domain_name}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putSmbActiveDirectorySettings.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#password StoragegatewayGateway#password}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putSmbActiveDirectorySettings.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#username StoragegatewayGateway#username}.

---

###### `domain_controllers`<sup>Optional</sup> <a name="domain_controllers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putSmbActiveDirectorySettings.parameter.domainControllers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#domain_controllers StoragegatewayGateway#domain_controllers}.

---

###### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putSmbActiveDirectorySettings.parameter.organizationalUnit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#organizational_unit StoragegatewayGateway#organizational_unit}.

---

###### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putSmbActiveDirectorySettings.parameter.timeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#timeout_in_seconds StoragegatewayGateway#timeout_in_seconds}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#create StoragegatewayGateway#create}.

---

##### `reset_activation_key` <a name="reset_activation_key" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetActivationKey"></a>

```python
def reset_activation_key() -> None
```

##### `reset_average_download_rate_limit_in_bits_per_sec` <a name="reset_average_download_rate_limit_in_bits_per_sec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetAverageDownloadRateLimitInBitsPerSec"></a>

```python
def reset_average_download_rate_limit_in_bits_per_sec() -> None
```

##### `reset_average_upload_rate_limit_in_bits_per_sec` <a name="reset_average_upload_rate_limit_in_bits_per_sec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetAverageUploadRateLimitInBitsPerSec"></a>

```python
def reset_average_upload_rate_limit_in_bits_per_sec() -> None
```

##### `reset_cloudwatch_log_group_arn` <a name="reset_cloudwatch_log_group_arn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetCloudwatchLogGroupArn"></a>

```python
def reset_cloudwatch_log_group_arn() -> None
```

##### `reset_gateway_ip_address` <a name="reset_gateway_ip_address" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayIpAddress"></a>

```python
def reset_gateway_ip_address() -> None
```

##### `reset_gateway_type` <a name="reset_gateway_type" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayType"></a>

```python
def reset_gateway_type() -> None
```

##### `reset_gateway_vpc_endpoint` <a name="reset_gateway_vpc_endpoint" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayVpcEndpoint"></a>

```python
def reset_gateway_vpc_endpoint() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintenance_start_time` <a name="reset_maintenance_start_time" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetMaintenanceStartTime"></a>

```python
def reset_maintenance_start_time() -> None
```

##### `reset_medium_changer_type` <a name="reset_medium_changer_type" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetMediumChangerType"></a>

```python
def reset_medium_changer_type() -> None
```

##### `reset_smb_active_directory_settings` <a name="reset_smb_active_directory_settings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbActiveDirectorySettings"></a>

```python
def reset_smb_active_directory_settings() -> None
```

##### `reset_smb_file_share_visibility` <a name="reset_smb_file_share_visibility" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbFileShareVisibility"></a>

```python
def reset_smb_file_share_visibility() -> None
```

##### `reset_smb_guest_password` <a name="reset_smb_guest_password" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbGuestPassword"></a>

```python
def reset_smb_guest_password() -> None
```

##### `reset_smb_security_strategy` <a name="reset_smb_security_strategy" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbSecurityStrategy"></a>

```python
def reset_smb_security_strategy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_tape_drive_type` <a name="reset_tape_drive_type" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTapeDriveType"></a>

```python
def reset_tape_drive_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_gateway

storagegatewayGateway.StoragegatewayGateway.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_gateway

storagegatewayGateway.StoragegatewayGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_gateway

storagegatewayGateway.StoragegatewayGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.ec2InstanceId">ec2_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayNetworkInterface">gateway_network_interface</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList">StoragegatewayGatewayGatewayNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.hostEnvironment">host_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.maintenanceStartTime">maintenance_start_time</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference">StoragegatewayGatewayMaintenanceStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbActiveDirectorySettings">smb_active_directory_settings</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference">StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference">StoragegatewayGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.activationKeyInput">activation_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageDownloadRateLimitInBitsPerSecInput">average_download_rate_limit_in_bits_per_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageUploadRateLimitInBitsPerSecInput">average_upload_rate_limit_in_bits_per_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cloudwatchLogGroupArnInput">cloudwatch_log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayIpAddressInput">gateway_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayNameInput">gateway_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTimezoneInput">gateway_timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTypeInput">gateway_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayVpcEndpointInput">gateway_vpc_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.maintenanceStartTimeInput">maintenance_start_time_input</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.mediumChangerTypeInput">medium_changer_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbActiveDirectorySettingsInput">smb_active_directory_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbFileShareVisibilityInput">smb_file_share_visibility_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbGuestPasswordInput">smb_guest_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbSecurityStrategyInput">smb_security_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tapeDriveTypeInput">tape_drive_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.activationKey">activation_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageDownloadRateLimitInBitsPerSec">average_download_rate_limit_in_bits_per_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageUploadRateLimitInBitsPerSec">average_upload_rate_limit_in_bits_per_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayIpAddress">gateway_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayName">gateway_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTimezone">gateway_timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayType">gateway_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayVpcEndpoint">gateway_vpc_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.mediumChangerType">medium_changer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbFileShareVisibility">smb_file_share_visibility</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbGuestPassword">smb_guest_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbSecurityStrategy">smb_security_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tapeDriveType">tape_drive_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `ec2_instance_id`<sup>Required</sup> <a name="ec2_instance_id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.ec2InstanceId"></a>

```python
ec2_instance_id: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `gateway_network_interface`<sup>Required</sup> <a name="gateway_network_interface" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayNetworkInterface"></a>

```python
gateway_network_interface: StoragegatewayGatewayGatewayNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList">StoragegatewayGatewayGatewayNetworkInterfaceList</a>

---

##### `host_environment`<sup>Required</sup> <a name="host_environment" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.hostEnvironment"></a>

```python
host_environment: str
```

- *Type:* str

---

##### `maintenance_start_time`<sup>Required</sup> <a name="maintenance_start_time" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.maintenanceStartTime"></a>

```python
maintenance_start_time: StoragegatewayGatewayMaintenanceStartTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference">StoragegatewayGatewayMaintenanceStartTimeOutputReference</a>

---

##### `smb_active_directory_settings`<sup>Required</sup> <a name="smb_active_directory_settings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbActiveDirectorySettings"></a>

```python
smb_active_directory_settings: StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference">StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.timeouts"></a>

```python
timeouts: StoragegatewayGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference">StoragegatewayGatewayTimeoutsOutputReference</a>

---

##### `activation_key_input`<sup>Optional</sup> <a name="activation_key_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.activationKeyInput"></a>

```python
activation_key_input: str
```

- *Type:* str

---

##### `average_download_rate_limit_in_bits_per_sec_input`<sup>Optional</sup> <a name="average_download_rate_limit_in_bits_per_sec_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageDownloadRateLimitInBitsPerSecInput"></a>

```python
average_download_rate_limit_in_bits_per_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `average_upload_rate_limit_in_bits_per_sec_input`<sup>Optional</sup> <a name="average_upload_rate_limit_in_bits_per_sec_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageUploadRateLimitInBitsPerSecInput"></a>

```python
average_upload_rate_limit_in_bits_per_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cloudwatch_log_group_arn_input`<sup>Optional</sup> <a name="cloudwatch_log_group_arn_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cloudwatchLogGroupArnInput"></a>

```python
cloudwatch_log_group_arn_input: str
```

- *Type:* str

---

##### `gateway_ip_address_input`<sup>Optional</sup> <a name="gateway_ip_address_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayIpAddressInput"></a>

```python
gateway_ip_address_input: str
```

- *Type:* str

---

##### `gateway_name_input`<sup>Optional</sup> <a name="gateway_name_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayNameInput"></a>

```python
gateway_name_input: str
```

- *Type:* str

---

##### `gateway_timezone_input`<sup>Optional</sup> <a name="gateway_timezone_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTimezoneInput"></a>

```python
gateway_timezone_input: str
```

- *Type:* str

---

##### `gateway_type_input`<sup>Optional</sup> <a name="gateway_type_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTypeInput"></a>

```python
gateway_type_input: str
```

- *Type:* str

---

##### `gateway_vpc_endpoint_input`<sup>Optional</sup> <a name="gateway_vpc_endpoint_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayVpcEndpointInput"></a>

```python
gateway_vpc_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintenance_start_time_input`<sup>Optional</sup> <a name="maintenance_start_time_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.maintenanceStartTimeInput"></a>

```python
maintenance_start_time_input: StoragegatewayGatewayMaintenanceStartTime
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a>

---

##### `medium_changer_type_input`<sup>Optional</sup> <a name="medium_changer_type_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.mediumChangerTypeInput"></a>

```python
medium_changer_type_input: str
```

- *Type:* str

---

##### `smb_active_directory_settings_input`<sup>Optional</sup> <a name="smb_active_directory_settings_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbActiveDirectorySettingsInput"></a>

```python
smb_active_directory_settings_input: StoragegatewayGatewaySmbActiveDirectorySettings
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a>

---

##### `smb_file_share_visibility_input`<sup>Optional</sup> <a name="smb_file_share_visibility_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbFileShareVisibilityInput"></a>

```python
smb_file_share_visibility_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `smb_guest_password_input`<sup>Optional</sup> <a name="smb_guest_password_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbGuestPasswordInput"></a>

```python
smb_guest_password_input: str
```

- *Type:* str

---

##### `smb_security_strategy_input`<sup>Optional</sup> <a name="smb_security_strategy_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbSecurityStrategyInput"></a>

```python
smb_security_strategy_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tape_drive_type_input`<sup>Optional</sup> <a name="tape_drive_type_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tapeDriveTypeInput"></a>

```python
tape_drive_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[StoragegatewayGatewayTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a>, cdktf.IResolvable]

---

##### `activation_key`<sup>Required</sup> <a name="activation_key" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.activationKey"></a>

```python
activation_key: str
```

- *Type:* str

---

##### `average_download_rate_limit_in_bits_per_sec`<sup>Required</sup> <a name="average_download_rate_limit_in_bits_per_sec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageDownloadRateLimitInBitsPerSec"></a>

```python
average_download_rate_limit_in_bits_per_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `average_upload_rate_limit_in_bits_per_sec`<sup>Required</sup> <a name="average_upload_rate_limit_in_bits_per_sec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageUploadRateLimitInBitsPerSec"></a>

```python
average_upload_rate_limit_in_bits_per_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cloudwatch_log_group_arn`<sup>Required</sup> <a name="cloudwatch_log_group_arn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

---

##### `gateway_ip_address`<sup>Required</sup> <a name="gateway_ip_address" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayIpAddress"></a>

```python
gateway_ip_address: str
```

- *Type:* str

---

##### `gateway_name`<sup>Required</sup> <a name="gateway_name" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayName"></a>

```python
gateway_name: str
```

- *Type:* str

---

##### `gateway_timezone`<sup>Required</sup> <a name="gateway_timezone" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTimezone"></a>

```python
gateway_timezone: str
```

- *Type:* str

---

##### `gateway_type`<sup>Required</sup> <a name="gateway_type" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayType"></a>

```python
gateway_type: str
```

- *Type:* str

---

##### `gateway_vpc_endpoint`<sup>Required</sup> <a name="gateway_vpc_endpoint" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayVpcEndpoint"></a>

```python
gateway_vpc_endpoint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `medium_changer_type`<sup>Required</sup> <a name="medium_changer_type" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.mediumChangerType"></a>

```python
medium_changer_type: str
```

- *Type:* str

---

##### `smb_file_share_visibility`<sup>Required</sup> <a name="smb_file_share_visibility" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbFileShareVisibility"></a>

```python
smb_file_share_visibility: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `smb_guest_password`<sup>Required</sup> <a name="smb_guest_password" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbGuestPassword"></a>

```python
smb_guest_password: str
```

- *Type:* str

---

##### `smb_security_strategy`<sup>Required</sup> <a name="smb_security_strategy" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbSecurityStrategy"></a>

```python
smb_security_strategy: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tape_drive_type`<sup>Required</sup> <a name="tape_drive_type" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tapeDriveType"></a>

```python
tape_drive_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayGatewayConfig <a name="StoragegatewayGatewayConfig" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_gateway

storagegatewayGateway.StoragegatewayGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gateway_name: str,
  gateway_timezone: str,
  activation_key: str = None,
  average_download_rate_limit_in_bits_per_sec: typing.Union[int, float] = None,
  average_upload_rate_limit_in_bits_per_sec: typing.Union[int, float] = None,
  cloudwatch_log_group_arn: str = None,
  gateway_ip_address: str = None,
  gateway_type: str = None,
  gateway_vpc_endpoint: str = None,
  id: str = None,
  maintenance_start_time: StoragegatewayGatewayMaintenanceStartTime = None,
  medium_changer_type: str = None,
  smb_active_directory_settings: StoragegatewayGatewaySmbActiveDirectorySettings = None,
  smb_file_share_visibility: typing.Union[bool, IResolvable] = None,
  smb_guest_password: str = None,
  smb_security_strategy: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  tape_drive_type: str = None,
  timeouts: StoragegatewayGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayName">gateway_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_name StoragegatewayGateway#gateway_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayTimezone">gateway_timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_timezone StoragegatewayGateway#gateway_timezone}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.activationKey">activation_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#activation_key StoragegatewayGateway#activation_key}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.averageDownloadRateLimitInBitsPerSec">average_download_rate_limit_in_bits_per_sec</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_download_rate_limit_in_bits_per_sec StoragegatewayGateway#average_download_rate_limit_in_bits_per_sec}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.averageUploadRateLimitInBitsPerSec">average_upload_rate_limit_in_bits_per_sec</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_upload_rate_limit_in_bits_per_sec StoragegatewayGateway#average_upload_rate_limit_in_bits_per_sec}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#cloudwatch_log_group_arn StoragegatewayGateway#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayIpAddress">gateway_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_ip_address StoragegatewayGateway#gateway_ip_address}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayType">gateway_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_type StoragegatewayGateway#gateway_type}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayVpcEndpoint">gateway_vpc_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_vpc_endpoint StoragegatewayGateway#gateway_vpc_endpoint}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#id StoragegatewayGateway#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.maintenanceStartTime">maintenance_start_time</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a></code> | maintenance_start_time block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.mediumChangerType">medium_changer_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#medium_changer_type StoragegatewayGateway#medium_changer_type}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbActiveDirectorySettings">smb_active_directory_settings</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a></code> | smb_active_directory_settings block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbFileShareVisibility">smb_file_share_visibility</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_file_share_visibility StoragegatewayGateway#smb_file_share_visibility}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbGuestPassword">smb_guest_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_guest_password StoragegatewayGateway#smb_guest_password}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbSecurityStrategy">smb_security_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_security_strategy StoragegatewayGateway#smb_security_strategy}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags StoragegatewayGateway#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags_all StoragegatewayGateway#tags_all}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tapeDriveType">tape_drive_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tape_drive_type StoragegatewayGateway#tape_drive_type}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gateway_name`<sup>Required</sup> <a name="gateway_name" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayName"></a>

```python
gateway_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_name StoragegatewayGateway#gateway_name}.

---

##### `gateway_timezone`<sup>Required</sup> <a name="gateway_timezone" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayTimezone"></a>

```python
gateway_timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_timezone StoragegatewayGateway#gateway_timezone}.

---

##### `activation_key`<sup>Optional</sup> <a name="activation_key" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.activationKey"></a>

```python
activation_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#activation_key StoragegatewayGateway#activation_key}.

---

##### `average_download_rate_limit_in_bits_per_sec`<sup>Optional</sup> <a name="average_download_rate_limit_in_bits_per_sec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.averageDownloadRateLimitInBitsPerSec"></a>

```python
average_download_rate_limit_in_bits_per_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_download_rate_limit_in_bits_per_sec StoragegatewayGateway#average_download_rate_limit_in_bits_per_sec}.

---

##### `average_upload_rate_limit_in_bits_per_sec`<sup>Optional</sup> <a name="average_upload_rate_limit_in_bits_per_sec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.averageUploadRateLimitInBitsPerSec"></a>

```python
average_upload_rate_limit_in_bits_per_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_upload_rate_limit_in_bits_per_sec StoragegatewayGateway#average_upload_rate_limit_in_bits_per_sec}.

---

##### `cloudwatch_log_group_arn`<sup>Optional</sup> <a name="cloudwatch_log_group_arn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#cloudwatch_log_group_arn StoragegatewayGateway#cloudwatch_log_group_arn}.

---

##### `gateway_ip_address`<sup>Optional</sup> <a name="gateway_ip_address" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayIpAddress"></a>

```python
gateway_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_ip_address StoragegatewayGateway#gateway_ip_address}.

---

##### `gateway_type`<sup>Optional</sup> <a name="gateway_type" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayType"></a>

```python
gateway_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_type StoragegatewayGateway#gateway_type}.

---

##### `gateway_vpc_endpoint`<sup>Optional</sup> <a name="gateway_vpc_endpoint" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayVpcEndpoint"></a>

```python
gateway_vpc_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_vpc_endpoint StoragegatewayGateway#gateway_vpc_endpoint}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#id StoragegatewayGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_start_time`<sup>Optional</sup> <a name="maintenance_start_time" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.maintenanceStartTime"></a>

```python
maintenance_start_time: StoragegatewayGatewayMaintenanceStartTime
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a>

maintenance_start_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#maintenance_start_time StoragegatewayGateway#maintenance_start_time}

---

##### `medium_changer_type`<sup>Optional</sup> <a name="medium_changer_type" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.mediumChangerType"></a>

```python
medium_changer_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#medium_changer_type StoragegatewayGateway#medium_changer_type}.

---

##### `smb_active_directory_settings`<sup>Optional</sup> <a name="smb_active_directory_settings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbActiveDirectorySettings"></a>

```python
smb_active_directory_settings: StoragegatewayGatewaySmbActiveDirectorySettings
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a>

smb_active_directory_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_active_directory_settings StoragegatewayGateway#smb_active_directory_settings}

---

##### `smb_file_share_visibility`<sup>Optional</sup> <a name="smb_file_share_visibility" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbFileShareVisibility"></a>

```python
smb_file_share_visibility: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_file_share_visibility StoragegatewayGateway#smb_file_share_visibility}.

---

##### `smb_guest_password`<sup>Optional</sup> <a name="smb_guest_password" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbGuestPassword"></a>

```python
smb_guest_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_guest_password StoragegatewayGateway#smb_guest_password}.

---

##### `smb_security_strategy`<sup>Optional</sup> <a name="smb_security_strategy" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbSecurityStrategy"></a>

```python
smb_security_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_security_strategy StoragegatewayGateway#smb_security_strategy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags StoragegatewayGateway#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags_all StoragegatewayGateway#tags_all}.

---

##### `tape_drive_type`<sup>Optional</sup> <a name="tape_drive_type" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tapeDriveType"></a>

```python
tape_drive_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tape_drive_type StoragegatewayGateway#tape_drive_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.timeouts"></a>

```python
timeouts: StoragegatewayGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#timeouts StoragegatewayGateway#timeouts}

---

### StoragegatewayGatewayGatewayNetworkInterface <a name="StoragegatewayGatewayGatewayNetworkInterface" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_gateway

storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterface()
```


### StoragegatewayGatewayMaintenanceStartTime <a name="StoragegatewayGatewayMaintenanceStartTime" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_gateway

storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime(
  hour_of_day: typing.Union[int, float],
  day_of_month: str = None,
  day_of_week: str = None,
  minute_of_hour: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#hour_of_day StoragegatewayGateway#hour_of_day}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.dayOfMonth">day_of_month</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#day_of_month StoragegatewayGateway#day_of_month}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#day_of_week StoragegatewayGateway#day_of_week}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.minuteOfHour">minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#minute_of_hour StoragegatewayGateway#minute_of_hour}. |

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#hour_of_day StoragegatewayGateway#hour_of_day}.

---

##### `day_of_month`<sup>Optional</sup> <a name="day_of_month" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.dayOfMonth"></a>

```python
day_of_month: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#day_of_month StoragegatewayGateway#day_of_month}.

---

##### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#day_of_week StoragegatewayGateway#day_of_week}.

---

##### `minute_of_hour`<sup>Optional</sup> <a name="minute_of_hour" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.minuteOfHour"></a>

```python
minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#minute_of_hour StoragegatewayGateway#minute_of_hour}.

---

### StoragegatewayGatewaySmbActiveDirectorySettings <a name="StoragegatewayGatewaySmbActiveDirectorySettings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_gateway

storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings(
  domain_name: str,
  password: str,
  username: str,
  domain_controllers: typing.List[str] = None,
  organizational_unit: str = None,
  timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#domain_name StoragegatewayGateway#domain_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#password StoragegatewayGateway#password}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#username StoragegatewayGateway#username}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.domainControllers">domain_controllers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#domain_controllers StoragegatewayGateway#domain_controllers}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#organizational_unit StoragegatewayGateway#organizational_unit}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#timeout_in_seconds StoragegatewayGateway#timeout_in_seconds}. |

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#domain_name StoragegatewayGateway#domain_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#password StoragegatewayGateway#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#username StoragegatewayGateway#username}.

---

##### `domain_controllers`<sup>Optional</sup> <a name="domain_controllers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.domainControllers"></a>

```python
domain_controllers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#domain_controllers StoragegatewayGateway#domain_controllers}.

---

##### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#organizational_unit StoragegatewayGateway#organizational_unit}.

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#timeout_in_seconds StoragegatewayGateway#timeout_in_seconds}.

---

### StoragegatewayGatewayTimeouts <a name="StoragegatewayGatewayTimeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_gateway

storagegatewayGateway.StoragegatewayGatewayTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#create StoragegatewayGateway#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#create StoragegatewayGateway#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayGatewayGatewayNetworkInterfaceList <a name="StoragegatewayGatewayGatewayNetworkInterfaceList" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_gateway

storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StoragegatewayGatewayGatewayNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StoragegatewayGatewayGatewayNetworkInterfaceOutputReference <a name="StoragegatewayGatewayGatewayNetworkInterfaceOutputReference" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_gateway

storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterface">StoragegatewayGatewayGatewayNetworkInterface</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: StoragegatewayGatewayGatewayNetworkInterface
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterface">StoragegatewayGatewayGatewayNetworkInterface</a>

---


### StoragegatewayGatewayMaintenanceStartTimeOutputReference <a name="StoragegatewayGatewayMaintenanceStartTimeOutputReference" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_gateway

storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetDayOfMonth">reset_day_of_month</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetDayOfWeek">reset_day_of_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetMinuteOfHour">reset_minute_of_hour</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day_of_month` <a name="reset_day_of_month" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetDayOfMonth"></a>

```python
def reset_day_of_month() -> None
```

##### `reset_day_of_week` <a name="reset_day_of_week" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetDayOfWeek"></a>

```python
def reset_day_of_week() -> None
```

##### `reset_minute_of_hour` <a name="reset_minute_of_hour" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetMinuteOfHour"></a>

```python
def reset_minute_of_hour() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfMonthInput">day_of_month_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.hourOfDayInput">hour_of_day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.minuteOfHourInput">minute_of_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfMonth">day_of_month</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.minuteOfHour">minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_month_input`<sup>Optional</sup> <a name="day_of_month_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfMonthInput"></a>

```python
day_of_month_input: str
```

- *Type:* str

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `hour_of_day_input`<sup>Optional</sup> <a name="hour_of_day_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.hourOfDayInput"></a>

```python
hour_of_day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_of_hour_input`<sup>Optional</sup> <a name="minute_of_hour_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.minuteOfHourInput"></a>

```python
minute_of_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_of_month`<sup>Required</sup> <a name="day_of_month" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfMonth"></a>

```python
day_of_month: str
```

- *Type:* str

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_of_hour`<sup>Required</sup> <a name="minute_of_hour" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.minuteOfHour"></a>

```python
minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: StoragegatewayGatewayMaintenanceStartTime
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a>

---


### StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference <a name="StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_gateway

storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetDomainControllers">reset_domain_controllers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetOrganizationalUnit">reset_organizational_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetTimeoutInSeconds">reset_timeout_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_domain_controllers` <a name="reset_domain_controllers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetDomainControllers"></a>

```python
def reset_domain_controllers() -> None
```

##### `reset_organizational_unit` <a name="reset_organizational_unit" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetOrganizationalUnit"></a>

```python
def reset_organizational_unit() -> None
```

##### `reset_timeout_in_seconds` <a name="reset_timeout_in_seconds" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetTimeoutInSeconds"></a>

```python
def reset_timeout_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.activeDirectoryStatus">active_directory_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainControllersInput">domain_controllers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.organizationalUnitInput">organizational_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.timeoutInSecondsInput">timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainControllers">domain_controllers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_directory_status`<sup>Required</sup> <a name="active_directory_status" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.activeDirectoryStatus"></a>

```python
active_directory_status: str
```

- *Type:* str

---

##### `domain_controllers_input`<sup>Optional</sup> <a name="domain_controllers_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainControllersInput"></a>

```python
domain_controllers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `organizational_unit_input`<sup>Optional</sup> <a name="organizational_unit_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.organizationalUnitInput"></a>

```python
organizational_unit_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `timeout_in_seconds_input`<sup>Optional</sup> <a name="timeout_in_seconds_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.timeoutInSecondsInput"></a>

```python
timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `domain_controllers`<sup>Required</sup> <a name="domain_controllers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainControllers"></a>

```python
domain_controllers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.internalValue"></a>

```python
internal_value: StoragegatewayGatewaySmbActiveDirectorySettings
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a>

---


### StoragegatewayGatewayTimeoutsOutputReference <a name="StoragegatewayGatewayTimeoutsOutputReference" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_gateway

storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StoragegatewayGatewayTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a>, cdktf.IResolvable]

---



