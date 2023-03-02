# `storagegatewaySmbFileShare` Submodule <a name="`storagegatewaySmbFileShare` Submodule" id="@cdktf/provider-aws.storagegatewaySmbFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewaySmbFileShare <a name="StoragegatewaySmbFileShare" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share aws_storagegateway_smb_file_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_smb_file_share

storagegatewaySmbFileShare.StoragegatewaySmbFileShare(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gateway_arn: str,
  location_arn: str,
  role_arn: str,
  access_based_enumeration: typing.Union[bool, IResolvable] = None,
  admin_user_list: typing.List[str] = None,
  audit_destination_arn: str = None,
  authentication: str = None,
  bucket_region: str = None,
  cache_attributes: StoragegatewaySmbFileShareCacheAttributes = None,
  case_sensitivity: str = None,
  default_storage_class: str = None,
  file_share_name: str = None,
  guess_mime_type_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  invalid_user_list: typing.List[str] = None,
  kms_encrypted: typing.Union[bool, IResolvable] = None,
  kms_key_arn: str = None,
  notification_policy: str = None,
  object_acl: str = None,
  oplocks_enabled: typing.Union[bool, IResolvable] = None,
  read_only: typing.Union[bool, IResolvable] = None,
  requester_pays: typing.Union[bool, IResolvable] = None,
  smb_acl_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: StoragegatewaySmbFileShareTimeouts = None,
  valid_user_list: typing.List[str] = None,
  vpc_endpoint_dns_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.gatewayArn">gateway_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#gateway_arn StoragegatewaySmbFileShare#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.locationArn">location_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#location_arn StoragegatewaySmbFileShare#location_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#role_arn StoragegatewaySmbFileShare#role_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.accessBasedEnumeration">access_based_enumeration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.adminUserList">admin_user_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#admin_user_list StoragegatewaySmbFileShare#admin_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.auditDestinationArn">audit_destination_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.authentication">authentication</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#authentication StoragegatewaySmbFileShare#authentication}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.bucketRegion">bucket_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#bucket_region StoragegatewaySmbFileShare#bucket_region}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.cacheAttributes">cache_attributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | cache_attributes block. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.caseSensitivity">case_sensitivity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.defaultStorageClass">default_storage_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#default_storage_class StoragegatewaySmbFileShare#default_storage_class}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.fileShareName">file_share_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#file_share_name StoragegatewaySmbFileShare#file_share_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.guessMimeTypeEnabled">guess_mime_type_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#id StoragegatewaySmbFileShare#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.invalidUserList">invalid_user_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.kmsEncrypted">kms_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_key_arn StoragegatewaySmbFileShare#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.notificationPolicy">notification_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#notification_policy StoragegatewaySmbFileShare#notification_policy}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.objectAcl">object_acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#object_acl StoragegatewaySmbFileShare#object_acl}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.oplocksEnabled">oplocks_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#read_only StoragegatewaySmbFileShare#read_only}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.requesterPays">requester_pays</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#requester_pays StoragegatewaySmbFileShare#requester_pays}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.smbAclEnabled">smb_acl_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#smb_acl_enabled StoragegatewaySmbFileShare#smb_acl_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags StoragegatewaySmbFileShare#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags_all StoragegatewaySmbFileShare#tags_all}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.validUserList">valid_user_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#valid_user_list StoragegatewaySmbFileShare#valid_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.vpcEndpointDnsName">vpc_endpoint_dns_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.gatewayArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#gateway_arn StoragegatewaySmbFileShare#gateway_arn}.

---

##### `location_arn`<sup>Required</sup> <a name="location_arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.locationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#location_arn StoragegatewaySmbFileShare#location_arn}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#role_arn StoragegatewaySmbFileShare#role_arn}.

---

##### `access_based_enumeration`<sup>Optional</sup> <a name="access_based_enumeration" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.accessBasedEnumeration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}.

---

##### `admin_user_list`<sup>Optional</sup> <a name="admin_user_list" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.adminUserList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#admin_user_list StoragegatewaySmbFileShare#admin_user_list}.

---

##### `audit_destination_arn`<sup>Optional</sup> <a name="audit_destination_arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.auditDestinationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.authentication"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#authentication StoragegatewaySmbFileShare#authentication}.

---

##### `bucket_region`<sup>Optional</sup> <a name="bucket_region" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.bucketRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#bucket_region StoragegatewaySmbFileShare#bucket_region}.

---

##### `cache_attributes`<sup>Optional</sup> <a name="cache_attributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.cacheAttributes"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

cache_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#cache_attributes StoragegatewaySmbFileShare#cache_attributes}

---

##### `case_sensitivity`<sup>Optional</sup> <a name="case_sensitivity" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.caseSensitivity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}.

---

##### `default_storage_class`<sup>Optional</sup> <a name="default_storage_class" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.defaultStorageClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#default_storage_class StoragegatewaySmbFileShare#default_storage_class}.

---

##### `file_share_name`<sup>Optional</sup> <a name="file_share_name" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.fileShareName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#file_share_name StoragegatewaySmbFileShare#file_share_name}.

---

##### `guess_mime_type_enabled`<sup>Optional</sup> <a name="guess_mime_type_enabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.guessMimeTypeEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#id StoragegatewaySmbFileShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invalid_user_list`<sup>Optional</sup> <a name="invalid_user_list" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.invalidUserList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}.

---

##### `kms_encrypted`<sup>Optional</sup> <a name="kms_encrypted" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.kmsEncrypted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_key_arn StoragegatewaySmbFileShare#kms_key_arn}.

---

##### `notification_policy`<sup>Optional</sup> <a name="notification_policy" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.notificationPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#notification_policy StoragegatewaySmbFileShare#notification_policy}.

---

##### `object_acl`<sup>Optional</sup> <a name="object_acl" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.objectAcl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#object_acl StoragegatewaySmbFileShare#object_acl}.

---

##### `oplocks_enabled`<sup>Optional</sup> <a name="oplocks_enabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.oplocksEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}.

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#read_only StoragegatewaySmbFileShare#read_only}.

---

##### `requester_pays`<sup>Optional</sup> <a name="requester_pays" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.requesterPays"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#requester_pays StoragegatewaySmbFileShare#requester_pays}.

---

##### `smb_acl_enabled`<sup>Optional</sup> <a name="smb_acl_enabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.smbAclEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#smb_acl_enabled StoragegatewaySmbFileShare#smb_acl_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags StoragegatewaySmbFileShare#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags_all StoragegatewaySmbFileShare#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#timeouts StoragegatewaySmbFileShare#timeouts}

---

##### `valid_user_list`<sup>Optional</sup> <a name="valid_user_list" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.validUserList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#valid_user_list StoragegatewaySmbFileShare#valid_user_list}.

---

##### `vpc_endpoint_dns_name`<sup>Optional</sup> <a name="vpc_endpoint_dns_name" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.vpcEndpointDnsName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putCacheAttributes">put_cache_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAccessBasedEnumeration">reset_access_based_enumeration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAdminUserList">reset_admin_user_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuditDestinationArn">reset_audit_destination_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuthentication">reset_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetBucketRegion">reset_bucket_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCacheAttributes">reset_cache_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCaseSensitivity">reset_case_sensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetDefaultStorageClass">reset_default_storage_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetFileShareName">reset_file_share_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetGuessMimeTypeEnabled">reset_guess_mime_type_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetInvalidUserList">reset_invalid_user_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsEncrypted">reset_kms_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetNotificationPolicy">reset_notification_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetObjectAcl">reset_object_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOplocksEnabled">reset_oplocks_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetRequesterPays">reset_requester_pays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetSmbAclEnabled">reset_smb_acl_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetValidUserList">reset_valid_user_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetVpcEndpointDnsName">reset_vpc_endpoint_dns_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cache_attributes` <a name="put_cache_attributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putCacheAttributes"></a>

```python
def put_cache_attributes(
  cache_stale_timeout_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `cache_stale_timeout_in_seconds`<sup>Optional</sup> <a name="cache_stale_timeout_in_seconds" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putCacheAttributes.parameter.cacheStaleTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#cache_stale_timeout_in_seconds StoragegatewaySmbFileShare#cache_stale_timeout_in_seconds}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#create StoragegatewaySmbFileShare#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#delete StoragegatewaySmbFileShare#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#update StoragegatewaySmbFileShare#update}.

---

##### `reset_access_based_enumeration` <a name="reset_access_based_enumeration" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAccessBasedEnumeration"></a>

```python
def reset_access_based_enumeration() -> None
```

##### `reset_admin_user_list` <a name="reset_admin_user_list" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAdminUserList"></a>

```python
def reset_admin_user_list() -> None
```

##### `reset_audit_destination_arn` <a name="reset_audit_destination_arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuditDestinationArn"></a>

```python
def reset_audit_destination_arn() -> None
```

##### `reset_authentication` <a name="reset_authentication" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuthentication"></a>

```python
def reset_authentication() -> None
```

##### `reset_bucket_region` <a name="reset_bucket_region" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetBucketRegion"></a>

```python
def reset_bucket_region() -> None
```

##### `reset_cache_attributes` <a name="reset_cache_attributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCacheAttributes"></a>

```python
def reset_cache_attributes() -> None
```

##### `reset_case_sensitivity` <a name="reset_case_sensitivity" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCaseSensitivity"></a>

```python
def reset_case_sensitivity() -> None
```

##### `reset_default_storage_class` <a name="reset_default_storage_class" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetDefaultStorageClass"></a>

```python
def reset_default_storage_class() -> None
```

##### `reset_file_share_name` <a name="reset_file_share_name" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetFileShareName"></a>

```python
def reset_file_share_name() -> None
```

##### `reset_guess_mime_type_enabled` <a name="reset_guess_mime_type_enabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetGuessMimeTypeEnabled"></a>

```python
def reset_guess_mime_type_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_invalid_user_list` <a name="reset_invalid_user_list" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetInvalidUserList"></a>

```python
def reset_invalid_user_list() -> None
```

##### `reset_kms_encrypted` <a name="reset_kms_encrypted" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsEncrypted"></a>

```python
def reset_kms_encrypted() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_notification_policy` <a name="reset_notification_policy" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetNotificationPolicy"></a>

```python
def reset_notification_policy() -> None
```

##### `reset_object_acl` <a name="reset_object_acl" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetObjectAcl"></a>

```python
def reset_object_acl() -> None
```

##### `reset_oplocks_enabled` <a name="reset_oplocks_enabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOplocksEnabled"></a>

```python
def reset_oplocks_enabled() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_requester_pays` <a name="reset_requester_pays" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetRequesterPays"></a>

```python
def reset_requester_pays() -> None
```

##### `reset_smb_acl_enabled` <a name="reset_smb_acl_enabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetSmbAclEnabled"></a>

```python
def reset_smb_acl_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_valid_user_list` <a name="reset_valid_user_list" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetValidUserList"></a>

```python
def reset_valid_user_list() -> None
```

##### `reset_vpc_endpoint_dns_name` <a name="reset_vpc_endpoint_dns_name" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetVpcEndpointDnsName"></a>

```python
def reset_vpc_endpoint_dns_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_smb_file_share

storagegatewaySmbFileShare.StoragegatewaySmbFileShare.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_smb_file_share

storagegatewaySmbFileShare.StoragegatewaySmbFileShare.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_smb_file_share

storagegatewaySmbFileShare.StoragegatewaySmbFileShare.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributes">cache_attributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference">StoragegatewaySmbFileShareCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileshareId">fileshare_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference">StoragegatewaySmbFileShareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumerationInput">access_based_enumeration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserListInput">admin_user_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArnInput">audit_destination_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authenticationInput">authentication_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegionInput">bucket_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributesInput">cache_attributes_input</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivityInput">case_sensitivity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClassInput">default_storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareNameInput">file_share_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArnInput">gateway_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabledInput">guess_mime_type_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserListInput">invalid_user_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncryptedInput">kms_encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArnInput">location_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicyInput">notification_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAclInput">object_acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabledInput">oplocks_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPaysInput">requester_pays_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbAclEnabledInput">smb_acl_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserListInput">valid_user_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsNameInput">vpc_endpoint_dns_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumeration">access_based_enumeration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserList">admin_user_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArn">audit_destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authentication">authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegion">bucket_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivity">case_sensitivity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClass">default_storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareName">file_share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabled">guess_mime_type_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserList">invalid_user_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncrypted">kms_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArn">location_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicy">notification_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAcl">object_acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabled">oplocks_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPays">requester_pays</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbAclEnabled">smb_acl_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserList">valid_user_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsName">vpc_endpoint_dns_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cache_attributes`<sup>Required</sup> <a name="cache_attributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributes"></a>

```python
cache_attributes: StoragegatewaySmbFileShareCacheAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference">StoragegatewaySmbFileShareCacheAttributesOutputReference</a>

---

##### `fileshare_id`<sup>Required</sup> <a name="fileshare_id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileshareId"></a>

```python
fileshare_id: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.timeouts"></a>

```python
timeouts: StoragegatewaySmbFileShareTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference">StoragegatewaySmbFileShareTimeoutsOutputReference</a>

---

##### `access_based_enumeration_input`<sup>Optional</sup> <a name="access_based_enumeration_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumerationInput"></a>

```python
access_based_enumeration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_user_list_input`<sup>Optional</sup> <a name="admin_user_list_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserListInput"></a>

```python
admin_user_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_destination_arn_input`<sup>Optional</sup> <a name="audit_destination_arn_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArnInput"></a>

```python
audit_destination_arn_input: str
```

- *Type:* str

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authenticationInput"></a>

```python
authentication_input: str
```

- *Type:* str

---

##### `bucket_region_input`<sup>Optional</sup> <a name="bucket_region_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegionInput"></a>

```python
bucket_region_input: str
```

- *Type:* str

---

##### `cache_attributes_input`<sup>Optional</sup> <a name="cache_attributes_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributesInput"></a>

```python
cache_attributes_input: StoragegatewaySmbFileShareCacheAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

---

##### `case_sensitivity_input`<sup>Optional</sup> <a name="case_sensitivity_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivityInput"></a>

```python
case_sensitivity_input: str
```

- *Type:* str

---

##### `default_storage_class_input`<sup>Optional</sup> <a name="default_storage_class_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClassInput"></a>

```python
default_storage_class_input: str
```

- *Type:* str

---

##### `file_share_name_input`<sup>Optional</sup> <a name="file_share_name_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareNameInput"></a>

```python
file_share_name_input: str
```

- *Type:* str

---

##### `gateway_arn_input`<sup>Optional</sup> <a name="gateway_arn_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArnInput"></a>

```python
gateway_arn_input: str
```

- *Type:* str

---

##### `guess_mime_type_enabled_input`<sup>Optional</sup> <a name="guess_mime_type_enabled_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabledInput"></a>

```python
guess_mime_type_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `invalid_user_list_input`<sup>Optional</sup> <a name="invalid_user_list_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserListInput"></a>

```python
invalid_user_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_encrypted_input`<sup>Optional</sup> <a name="kms_encrypted_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncryptedInput"></a>

```python
kms_encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `location_arn_input`<sup>Optional</sup> <a name="location_arn_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArnInput"></a>

```python
location_arn_input: str
```

- *Type:* str

---

##### `notification_policy_input`<sup>Optional</sup> <a name="notification_policy_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicyInput"></a>

```python
notification_policy_input: str
```

- *Type:* str

---

##### `object_acl_input`<sup>Optional</sup> <a name="object_acl_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAclInput"></a>

```python
object_acl_input: str
```

- *Type:* str

---

##### `oplocks_enabled_input`<sup>Optional</sup> <a name="oplocks_enabled_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabledInput"></a>

```python
oplocks_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `requester_pays_input`<sup>Optional</sup> <a name="requester_pays_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPaysInput"></a>

```python
requester_pays_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `smb_acl_enabled_input`<sup>Optional</sup> <a name="smb_acl_enabled_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbAclEnabledInput"></a>

```python
smb_acl_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[StoragegatewaySmbFileShareTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a>, cdktf.IResolvable]

---

##### `valid_user_list_input`<sup>Optional</sup> <a name="valid_user_list_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserListInput"></a>

```python
valid_user_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_endpoint_dns_name_input`<sup>Optional</sup> <a name="vpc_endpoint_dns_name_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsNameInput"></a>

```python
vpc_endpoint_dns_name_input: str
```

- *Type:* str

---

##### `access_based_enumeration`<sup>Required</sup> <a name="access_based_enumeration" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumeration"></a>

```python
access_based_enumeration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_user_list`<sup>Required</sup> <a name="admin_user_list" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserList"></a>

```python
admin_user_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_destination_arn`<sup>Required</sup> <a name="audit_destination_arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArn"></a>

```python
audit_destination_arn: str
```

- *Type:* str

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authentication"></a>

```python
authentication: str
```

- *Type:* str

---

##### `bucket_region`<sup>Required</sup> <a name="bucket_region" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegion"></a>

```python
bucket_region: str
```

- *Type:* str

---

##### `case_sensitivity`<sup>Required</sup> <a name="case_sensitivity" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivity"></a>

```python
case_sensitivity: str
```

- *Type:* str

---

##### `default_storage_class`<sup>Required</sup> <a name="default_storage_class" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClass"></a>

```python
default_storage_class: str
```

- *Type:* str

---

##### `file_share_name`<sup>Required</sup> <a name="file_share_name" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareName"></a>

```python
file_share_name: str
```

- *Type:* str

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

---

##### `guess_mime_type_enabled`<sup>Required</sup> <a name="guess_mime_type_enabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabled"></a>

```python
guess_mime_type_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `invalid_user_list`<sup>Required</sup> <a name="invalid_user_list" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserList"></a>

```python
invalid_user_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_encrypted`<sup>Required</sup> <a name="kms_encrypted" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncrypted"></a>

```python
kms_encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `location_arn`<sup>Required</sup> <a name="location_arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArn"></a>

```python
location_arn: str
```

- *Type:* str

---

##### `notification_policy`<sup>Required</sup> <a name="notification_policy" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicy"></a>

```python
notification_policy: str
```

- *Type:* str

---

##### `object_acl`<sup>Required</sup> <a name="object_acl" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAcl"></a>

```python
object_acl: str
```

- *Type:* str

---

##### `oplocks_enabled`<sup>Required</sup> <a name="oplocks_enabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabled"></a>

```python
oplocks_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `requester_pays`<sup>Required</sup> <a name="requester_pays" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPays"></a>

```python
requester_pays: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `smb_acl_enabled`<sup>Required</sup> <a name="smb_acl_enabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbAclEnabled"></a>

```python
smb_acl_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `valid_user_list`<sup>Required</sup> <a name="valid_user_list" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserList"></a>

```python
valid_user_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_endpoint_dns_name`<sup>Required</sup> <a name="vpc_endpoint_dns_name" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsName"></a>

```python
vpc_endpoint_dns_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewaySmbFileShareCacheAttributes <a name="StoragegatewaySmbFileShareCacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_smb_file_share

storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes(
  cache_stale_timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds">cache_stale_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#cache_stale_timeout_in_seconds StoragegatewaySmbFileShare#cache_stale_timeout_in_seconds}. |

---

##### `cache_stale_timeout_in_seconds`<sup>Optional</sup> <a name="cache_stale_timeout_in_seconds" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds"></a>

```python
cache_stale_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#cache_stale_timeout_in_seconds StoragegatewaySmbFileShare#cache_stale_timeout_in_seconds}.

---

### StoragegatewaySmbFileShareConfig <a name="StoragegatewaySmbFileShareConfig" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_smb_file_share

storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gateway_arn: str,
  location_arn: str,
  role_arn: str,
  access_based_enumeration: typing.Union[bool, IResolvable] = None,
  admin_user_list: typing.List[str] = None,
  audit_destination_arn: str = None,
  authentication: str = None,
  bucket_region: str = None,
  cache_attributes: StoragegatewaySmbFileShareCacheAttributes = None,
  case_sensitivity: str = None,
  default_storage_class: str = None,
  file_share_name: str = None,
  guess_mime_type_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  invalid_user_list: typing.List[str] = None,
  kms_encrypted: typing.Union[bool, IResolvable] = None,
  kms_key_arn: str = None,
  notification_policy: str = None,
  object_acl: str = None,
  oplocks_enabled: typing.Union[bool, IResolvable] = None,
  read_only: typing.Union[bool, IResolvable] = None,
  requester_pays: typing.Union[bool, IResolvable] = None,
  smb_acl_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: StoragegatewaySmbFileShareTimeouts = None,
  valid_user_list: typing.List[str] = None,
  vpc_endpoint_dns_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#gateway_arn StoragegatewaySmbFileShare#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.locationArn">location_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#location_arn StoragegatewaySmbFileShare#location_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#role_arn StoragegatewaySmbFileShare#role_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.accessBasedEnumeration">access_based_enumeration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.adminUserList">admin_user_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#admin_user_list StoragegatewaySmbFileShare#admin_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.auditDestinationArn">audit_destination_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.authentication">authentication</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#authentication StoragegatewaySmbFileShare#authentication}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.bucketRegion">bucket_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#bucket_region StoragegatewaySmbFileShare#bucket_region}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.cacheAttributes">cache_attributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | cache_attributes block. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.caseSensitivity">case_sensitivity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.defaultStorageClass">default_storage_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#default_storage_class StoragegatewaySmbFileShare#default_storage_class}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.fileShareName">file_share_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#file_share_name StoragegatewaySmbFileShare#file_share_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.guessMimeTypeEnabled">guess_mime_type_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#id StoragegatewaySmbFileShare#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.invalidUserList">invalid_user_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsEncrypted">kms_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_key_arn StoragegatewaySmbFileShare#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.notificationPolicy">notification_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#notification_policy StoragegatewaySmbFileShare#notification_policy}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.objectAcl">object_acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#object_acl StoragegatewaySmbFileShare#object_acl}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.oplocksEnabled">oplocks_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#read_only StoragegatewaySmbFileShare#read_only}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.requesterPays">requester_pays</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#requester_pays StoragegatewaySmbFileShare#requester_pays}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.smbAclEnabled">smb_acl_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#smb_acl_enabled StoragegatewaySmbFileShare#smb_acl_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags StoragegatewaySmbFileShare#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags_all StoragegatewaySmbFileShare#tags_all}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.validUserList">valid_user_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#valid_user_list StoragegatewaySmbFileShare#valid_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.vpcEndpointDnsName">vpc_endpoint_dns_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#gateway_arn StoragegatewaySmbFileShare#gateway_arn}.

---

##### `location_arn`<sup>Required</sup> <a name="location_arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.locationArn"></a>

```python
location_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#location_arn StoragegatewaySmbFileShare#location_arn}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#role_arn StoragegatewaySmbFileShare#role_arn}.

---

##### `access_based_enumeration`<sup>Optional</sup> <a name="access_based_enumeration" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.accessBasedEnumeration"></a>

```python
access_based_enumeration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}.

---

##### `admin_user_list`<sup>Optional</sup> <a name="admin_user_list" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.adminUserList"></a>

```python
admin_user_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#admin_user_list StoragegatewaySmbFileShare#admin_user_list}.

---

##### `audit_destination_arn`<sup>Optional</sup> <a name="audit_destination_arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.auditDestinationArn"></a>

```python
audit_destination_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.authentication"></a>

```python
authentication: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#authentication StoragegatewaySmbFileShare#authentication}.

---

##### `bucket_region`<sup>Optional</sup> <a name="bucket_region" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.bucketRegion"></a>

```python
bucket_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#bucket_region StoragegatewaySmbFileShare#bucket_region}.

---

##### `cache_attributes`<sup>Optional</sup> <a name="cache_attributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.cacheAttributes"></a>

```python
cache_attributes: StoragegatewaySmbFileShareCacheAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

cache_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#cache_attributes StoragegatewaySmbFileShare#cache_attributes}

---

##### `case_sensitivity`<sup>Optional</sup> <a name="case_sensitivity" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.caseSensitivity"></a>

```python
case_sensitivity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}.

---

##### `default_storage_class`<sup>Optional</sup> <a name="default_storage_class" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.defaultStorageClass"></a>

```python
default_storage_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#default_storage_class StoragegatewaySmbFileShare#default_storage_class}.

---

##### `file_share_name`<sup>Optional</sup> <a name="file_share_name" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.fileShareName"></a>

```python
file_share_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#file_share_name StoragegatewaySmbFileShare#file_share_name}.

---

##### `guess_mime_type_enabled`<sup>Optional</sup> <a name="guess_mime_type_enabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.guessMimeTypeEnabled"></a>

```python
guess_mime_type_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#id StoragegatewaySmbFileShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invalid_user_list`<sup>Optional</sup> <a name="invalid_user_list" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.invalidUserList"></a>

```python
invalid_user_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}.

---

##### `kms_encrypted`<sup>Optional</sup> <a name="kms_encrypted" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsEncrypted"></a>

```python
kms_encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_key_arn StoragegatewaySmbFileShare#kms_key_arn}.

---

##### `notification_policy`<sup>Optional</sup> <a name="notification_policy" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.notificationPolicy"></a>

```python
notification_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#notification_policy StoragegatewaySmbFileShare#notification_policy}.

---

##### `object_acl`<sup>Optional</sup> <a name="object_acl" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.objectAcl"></a>

```python
object_acl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#object_acl StoragegatewaySmbFileShare#object_acl}.

---

##### `oplocks_enabled`<sup>Optional</sup> <a name="oplocks_enabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.oplocksEnabled"></a>

```python
oplocks_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}.

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#read_only StoragegatewaySmbFileShare#read_only}.

---

##### `requester_pays`<sup>Optional</sup> <a name="requester_pays" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.requesterPays"></a>

```python
requester_pays: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#requester_pays StoragegatewaySmbFileShare#requester_pays}.

---

##### `smb_acl_enabled`<sup>Optional</sup> <a name="smb_acl_enabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.smbAclEnabled"></a>

```python
smb_acl_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#smb_acl_enabled StoragegatewaySmbFileShare#smb_acl_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags StoragegatewaySmbFileShare#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags_all StoragegatewaySmbFileShare#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.timeouts"></a>

```python
timeouts: StoragegatewaySmbFileShareTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#timeouts StoragegatewaySmbFileShare#timeouts}

---

##### `valid_user_list`<sup>Optional</sup> <a name="valid_user_list" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.validUserList"></a>

```python
valid_user_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#valid_user_list StoragegatewaySmbFileShare#valid_user_list}.

---

##### `vpc_endpoint_dns_name`<sup>Optional</sup> <a name="vpc_endpoint_dns_name" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.vpcEndpointDnsName"></a>

```python
vpc_endpoint_dns_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}.

---

### StoragegatewaySmbFileShareTimeouts <a name="StoragegatewaySmbFileShareTimeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_smb_file_share

storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#create StoragegatewaySmbFileShare#create}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#delete StoragegatewaySmbFileShare#delete}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#update StoragegatewaySmbFileShare#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#create StoragegatewaySmbFileShare#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#delete StoragegatewaySmbFileShare#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#update StoragegatewaySmbFileShare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewaySmbFileShareCacheAttributesOutputReference <a name="StoragegatewaySmbFileShareCacheAttributesOutputReference" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_smb_file_share

storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds">reset_cache_stale_timeout_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cache_stale_timeout_in_seconds` <a name="reset_cache_stale_timeout_in_seconds" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds"></a>

```python
def reset_cache_stale_timeout_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput">cache_stale_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">cache_stale_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_stale_timeout_in_seconds_input`<sup>Optional</sup> <a name="cache_stale_timeout_in_seconds_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput"></a>

```python
cache_stale_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cache_stale_timeout_in_seconds`<sup>Required</sup> <a name="cache_stale_timeout_in_seconds" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```python
cache_stale_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.internalValue"></a>

```python
internal_value: StoragegatewaySmbFileShareCacheAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

---


### StoragegatewaySmbFileShareTimeoutsOutputReference <a name="StoragegatewaySmbFileShareTimeoutsOutputReference" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_smb_file_share

storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StoragegatewaySmbFileShareTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a>, cdktf.IResolvable]

---



