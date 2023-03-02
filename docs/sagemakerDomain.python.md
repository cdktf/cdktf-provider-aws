# `sagemakerDomain` Submodule <a name="`sagemakerDomain` Submodule" id="@cdktf/provider-aws.sagemakerDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerDomain <a name="SagemakerDomain" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain aws_sagemaker_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomain(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_mode: str,
  default_user_settings: SagemakerDomainDefaultUserSettings,
  domain_name: str,
  subnet_ids: typing.List[str],
  vpc_id: str,
  app_network_access_type: str = None,
  app_security_group_management: str = None,
  default_space_settings: SagemakerDomainDefaultSpaceSettings = None,
  domain_settings: SagemakerDomainDomainSettings = None,
  id: str = None,
  kms_key_id: str = None,
  retention_policy: SagemakerDomainRetentionPolicy = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.authMode">auth_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#auth_mode SagemakerDomain#auth_mode}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.defaultUserSettings">default_user_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings">SagemakerDomainDefaultUserSettings</a></code> | default_user_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#domain_name SagemakerDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#subnet_ids SagemakerDomain#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#vpc_id SagemakerDomain#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.appNetworkAccessType">app_network_access_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_network_access_type SagemakerDomain#app_network_access_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.appSecurityGroupManagement">app_security_group_management</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_security_group_management SagemakerDomain#app_security_group_management}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.defaultSpaceSettings">default_space_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings">SagemakerDomainDefaultSpaceSettings</a></code> | default_space_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.domainSettings">domain_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings">SagemakerDomainDomainSettings</a></code> | domain_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#id SagemakerDomain#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#kms_key_id SagemakerDomain#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy">SagemakerDomainRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#tags SagemakerDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#tags_all SagemakerDomain#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_mode`<sup>Required</sup> <a name="auth_mode" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.authMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#auth_mode SagemakerDomain#auth_mode}.

---

##### `default_user_settings`<sup>Required</sup> <a name="default_user_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.defaultUserSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings">SagemakerDomainDefaultUserSettings</a>

default_user_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_user_settings SagemakerDomain#default_user_settings}

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#domain_name SagemakerDomain#domain_name}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#subnet_ids SagemakerDomain#subnet_ids}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#vpc_id SagemakerDomain#vpc_id}.

---

##### `app_network_access_type`<sup>Optional</sup> <a name="app_network_access_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.appNetworkAccessType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_network_access_type SagemakerDomain#app_network_access_type}.

---

##### `app_security_group_management`<sup>Optional</sup> <a name="app_security_group_management" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.appSecurityGroupManagement"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_security_group_management SagemakerDomain#app_security_group_management}.

---

##### `default_space_settings`<sup>Optional</sup> <a name="default_space_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.defaultSpaceSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings">SagemakerDomainDefaultSpaceSettings</a>

default_space_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_space_settings SagemakerDomain#default_space_settings}

---

##### `domain_settings`<sup>Optional</sup> <a name="domain_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.domainSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings">SagemakerDomainDomainSettings</a>

domain_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#domain_settings SagemakerDomain#domain_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#id SagemakerDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#kms_key_id SagemakerDomain#kms_key_id}.

---

##### `retention_policy`<sup>Optional</sup> <a name="retention_policy" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.retentionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy">SagemakerDomainRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#retention_policy SagemakerDomain#retention_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#tags SagemakerDomain#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#tags_all SagemakerDomain#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultSpaceSettings">put_default_space_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultUserSettings">put_default_user_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDomainSettings">put_domain_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putRetentionPolicy">put_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetAppNetworkAccessType">reset_app_network_access_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetAppSecurityGroupManagement">reset_app_security_group_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetDefaultSpaceSettings">reset_default_space_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetDomainSettings">reset_domain_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetRetentionPolicy">reset_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_default_space_settings` <a name="put_default_space_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultSpaceSettings"></a>

```python
def put_default_space_settings(
  execution_role: str,
  jupyter_server_app_settings: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings = None,
  kernel_gateway_app_settings: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings = None,
  security_groups: typing.List[str] = None
) -> None
```

###### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultSpaceSettings.parameter.executionRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#execution_role SagemakerDomain#execution_role}.

---

###### `jupyter_server_app_settings`<sup>Optional</sup> <a name="jupyter_server_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultSpaceSettings.parameter.jupyterServerAppSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings</a>

jupyter_server_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#jupyter_server_app_settings SagemakerDomain#jupyter_server_app_settings}

---

###### `kernel_gateway_app_settings`<sup>Optional</sup> <a name="kernel_gateway_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultSpaceSettings.parameter.kernelGatewayAppSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings</a>

kernel_gateway_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#kernel_gateway_app_settings SagemakerDomain#kernel_gateway_app_settings}

---

###### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultSpaceSettings.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#security_groups SagemakerDomain#security_groups}.

---

##### `put_default_user_settings` <a name="put_default_user_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultUserSettings"></a>

```python
def put_default_user_settings(
  execution_role: str,
  canvas_app_settings: SagemakerDomainDefaultUserSettingsCanvasAppSettings = None,
  jupyter_server_app_settings: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings = None,
  kernel_gateway_app_settings: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings = None,
  r_session_app_settings: SagemakerDomainDefaultUserSettingsRSessionAppSettings = None,
  security_groups: typing.List[str] = None,
  sharing_settings: SagemakerDomainDefaultUserSettingsSharingSettings = None,
  tensor_board_app_settings: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings = None
) -> None
```

###### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultUserSettings.parameter.executionRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#execution_role SagemakerDomain#execution_role}.

---

###### `canvas_app_settings`<sup>Optional</sup> <a name="canvas_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultUserSettings.parameter.canvasAppSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettings</a>

canvas_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#canvas_app_settings SagemakerDomain#canvas_app_settings}

---

###### `jupyter_server_app_settings`<sup>Optional</sup> <a name="jupyter_server_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultUserSettings.parameter.jupyterServerAppSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings">SagemakerDomainDefaultUserSettingsJupyterServerAppSettings</a>

jupyter_server_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#jupyter_server_app_settings SagemakerDomain#jupyter_server_app_settings}

---

###### `kernel_gateway_app_settings`<sup>Optional</sup> <a name="kernel_gateway_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultUserSettings.parameter.kernelGatewayAppSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings</a>

kernel_gateway_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#kernel_gateway_app_settings SagemakerDomain#kernel_gateway_app_settings}

---

###### `r_session_app_settings`<sup>Optional</sup> <a name="r_session_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultUserSettings.parameter.rSessionAppSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings">SagemakerDomainDefaultUserSettingsRSessionAppSettings</a>

r_session_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#r_session_app_settings SagemakerDomain#r_session_app_settings}

---

###### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultUserSettings.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#security_groups SagemakerDomain#security_groups}.

---

###### `sharing_settings`<sup>Optional</sup> <a name="sharing_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultUserSettings.parameter.sharingSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings">SagemakerDomainDefaultUserSettingsSharingSettings</a>

sharing_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sharing_settings SagemakerDomain#sharing_settings}

---

###### `tensor_board_app_settings`<sup>Optional</sup> <a name="tensor_board_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultUserSettings.parameter.tensorBoardAppSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings">SagemakerDomainDefaultUserSettingsTensorBoardAppSettings</a>

tensor_board_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#tensor_board_app_settings SagemakerDomain#tensor_board_app_settings}

---

##### `put_domain_settings` <a name="put_domain_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDomainSettings"></a>

```python
def put_domain_settings(
  execution_role_identity_config: str = None,
  security_group_ids: typing.List[str] = None
) -> None
```

###### `execution_role_identity_config`<sup>Optional</sup> <a name="execution_role_identity_config" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDomainSettings.parameter.executionRoleIdentityConfig"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#execution_role_identity_config SagemakerDomain#execution_role_identity_config}.

---

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDomainSettings.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#security_group_ids SagemakerDomain#security_group_ids}.

---

##### `put_retention_policy` <a name="put_retention_policy" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putRetentionPolicy"></a>

```python
def put_retention_policy(
  home_efs_file_system: str = None
) -> None
```

###### `home_efs_file_system`<sup>Optional</sup> <a name="home_efs_file_system" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putRetentionPolicy.parameter.homeEfsFileSystem"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#home_efs_file_system SagemakerDomain#home_efs_file_system}.

---

##### `reset_app_network_access_type` <a name="reset_app_network_access_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetAppNetworkAccessType"></a>

```python
def reset_app_network_access_type() -> None
```

##### `reset_app_security_group_management` <a name="reset_app_security_group_management" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetAppSecurityGroupManagement"></a>

```python
def reset_app_security_group_management() -> None
```

##### `reset_default_space_settings` <a name="reset_default_space_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetDefaultSpaceSettings"></a>

```python
def reset_default_space_settings() -> None
```

##### `reset_domain_settings` <a name="reset_domain_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetDomainSettings"></a>

```python
def reset_domain_settings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_retention_policy` <a name="reset_retention_policy" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetRetentionPolicy"></a>

```python
def reset_retention_policy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.defaultSpaceSettings">default_space_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference">SagemakerDomainDefaultSpaceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.defaultUserSettings">default_user_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference">SagemakerDomainDefaultUserSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.domainSettings">domain_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference">SagemakerDomainDomainSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.homeEfsFileSystemId">home_efs_file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference">SagemakerDomainRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.securityGroupIdForDomainBoundary">security_group_id_for_domain_boundary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.singleSignOnManagedApplicationInstanceId">single_sign_on_managed_application_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.appNetworkAccessTypeInput">app_network_access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.appSecurityGroupManagementInput">app_security_group_management_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.authModeInput">auth_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.defaultSpaceSettingsInput">default_space_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings">SagemakerDomainDefaultSpaceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.defaultUserSettingsInput">default_user_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings">SagemakerDomainDefaultUserSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.domainSettingsInput">domain_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings">SagemakerDomainDomainSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.retentionPolicyInput">retention_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy">SagemakerDomainRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.appNetworkAccessType">app_network_access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.appSecurityGroupManagement">app_security_group_management</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.authMode">auth_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `default_space_settings`<sup>Required</sup> <a name="default_space_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.defaultSpaceSettings"></a>

```python
default_space_settings: SagemakerDomainDefaultSpaceSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference">SagemakerDomainDefaultSpaceSettingsOutputReference</a>

---

##### `default_user_settings`<sup>Required</sup> <a name="default_user_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.defaultUserSettings"></a>

```python
default_user_settings: SagemakerDomainDefaultUserSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference">SagemakerDomainDefaultUserSettingsOutputReference</a>

---

##### `domain_settings`<sup>Required</sup> <a name="domain_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.domainSettings"></a>

```python
domain_settings: SagemakerDomainDomainSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference">SagemakerDomainDomainSettingsOutputReference</a>

---

##### `home_efs_file_system_id`<sup>Required</sup> <a name="home_efs_file_system_id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.homeEfsFileSystemId"></a>

```python
home_efs_file_system_id: str
```

- *Type:* str

---

##### `retention_policy`<sup>Required</sup> <a name="retention_policy" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.retentionPolicy"></a>

```python
retention_policy: SagemakerDomainRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference">SagemakerDomainRetentionPolicyOutputReference</a>

---

##### `security_group_id_for_domain_boundary`<sup>Required</sup> <a name="security_group_id_for_domain_boundary" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.securityGroupIdForDomainBoundary"></a>

```python
security_group_id_for_domain_boundary: str
```

- *Type:* str

---

##### `single_sign_on_managed_application_instance_id`<sup>Required</sup> <a name="single_sign_on_managed_application_instance_id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.singleSignOnManagedApplicationInstanceId"></a>

```python
single_sign_on_managed_application_instance_id: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `app_network_access_type_input`<sup>Optional</sup> <a name="app_network_access_type_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.appNetworkAccessTypeInput"></a>

```python
app_network_access_type_input: str
```

- *Type:* str

---

##### `app_security_group_management_input`<sup>Optional</sup> <a name="app_security_group_management_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.appSecurityGroupManagementInput"></a>

```python
app_security_group_management_input: str
```

- *Type:* str

---

##### `auth_mode_input`<sup>Optional</sup> <a name="auth_mode_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.authModeInput"></a>

```python
auth_mode_input: str
```

- *Type:* str

---

##### `default_space_settings_input`<sup>Optional</sup> <a name="default_space_settings_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.defaultSpaceSettingsInput"></a>

```python
default_space_settings_input: SagemakerDomainDefaultSpaceSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings">SagemakerDomainDefaultSpaceSettings</a>

---

##### `default_user_settings_input`<sup>Optional</sup> <a name="default_user_settings_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.defaultUserSettingsInput"></a>

```python
default_user_settings_input: SagemakerDomainDefaultUserSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings">SagemakerDomainDefaultUserSettings</a>

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `domain_settings_input`<sup>Optional</sup> <a name="domain_settings_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.domainSettingsInput"></a>

```python
domain_settings_input: SagemakerDomainDomainSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings">SagemakerDomainDomainSettings</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `retention_policy_input`<sup>Optional</sup> <a name="retention_policy_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.retentionPolicyInput"></a>

```python
retention_policy_input: SagemakerDomainRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy">SagemakerDomainRetentionPolicy</a>

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `app_network_access_type`<sup>Required</sup> <a name="app_network_access_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.appNetworkAccessType"></a>

```python
app_network_access_type: str
```

- *Type:* str

---

##### `app_security_group_management`<sup>Required</sup> <a name="app_security_group_management" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.appSecurityGroupManagement"></a>

```python
app_security_group_management: str
```

- *Type:* str

---

##### `auth_mode`<sup>Required</sup> <a name="auth_mode" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.authMode"></a>

```python
auth_mode: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerDomainConfig <a name="SagemakerDomainConfig" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_mode: str,
  default_user_settings: SagemakerDomainDefaultUserSettings,
  domain_name: str,
  subnet_ids: typing.List[str],
  vpc_id: str,
  app_network_access_type: str = None,
  app_security_group_management: str = None,
  default_space_settings: SagemakerDomainDefaultSpaceSettings = None,
  domain_settings: SagemakerDomainDomainSettings = None,
  id: str = None,
  kms_key_id: str = None,
  retention_policy: SagemakerDomainRetentionPolicy = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.authMode">auth_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#auth_mode SagemakerDomain#auth_mode}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.defaultUserSettings">default_user_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings">SagemakerDomainDefaultUserSettings</a></code> | default_user_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#domain_name SagemakerDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#subnet_ids SagemakerDomain#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#vpc_id SagemakerDomain#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.appNetworkAccessType">app_network_access_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_network_access_type SagemakerDomain#app_network_access_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.appSecurityGroupManagement">app_security_group_management</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_security_group_management SagemakerDomain#app_security_group_management}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.defaultSpaceSettings">default_space_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings">SagemakerDomainDefaultSpaceSettings</a></code> | default_space_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.domainSettings">domain_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings">SagemakerDomainDomainSettings</a></code> | domain_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#id SagemakerDomain#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#kms_key_id SagemakerDomain#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy">SagemakerDomainRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#tags SagemakerDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#tags_all SagemakerDomain#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_mode`<sup>Required</sup> <a name="auth_mode" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.authMode"></a>

```python
auth_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#auth_mode SagemakerDomain#auth_mode}.

---

##### `default_user_settings`<sup>Required</sup> <a name="default_user_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.defaultUserSettings"></a>

```python
default_user_settings: SagemakerDomainDefaultUserSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings">SagemakerDomainDefaultUserSettings</a>

default_user_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_user_settings SagemakerDomain#default_user_settings}

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#domain_name SagemakerDomain#domain_name}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#subnet_ids SagemakerDomain#subnet_ids}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#vpc_id SagemakerDomain#vpc_id}.

---

##### `app_network_access_type`<sup>Optional</sup> <a name="app_network_access_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.appNetworkAccessType"></a>

```python
app_network_access_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_network_access_type SagemakerDomain#app_network_access_type}.

---

##### `app_security_group_management`<sup>Optional</sup> <a name="app_security_group_management" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.appSecurityGroupManagement"></a>

```python
app_security_group_management: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_security_group_management SagemakerDomain#app_security_group_management}.

---

##### `default_space_settings`<sup>Optional</sup> <a name="default_space_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.defaultSpaceSettings"></a>

```python
default_space_settings: SagemakerDomainDefaultSpaceSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings">SagemakerDomainDefaultSpaceSettings</a>

default_space_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_space_settings SagemakerDomain#default_space_settings}

---

##### `domain_settings`<sup>Optional</sup> <a name="domain_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.domainSettings"></a>

```python
domain_settings: SagemakerDomainDomainSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings">SagemakerDomainDomainSettings</a>

domain_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#domain_settings SagemakerDomain#domain_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#id SagemakerDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#kms_key_id SagemakerDomain#kms_key_id}.

---

##### `retention_policy`<sup>Optional</sup> <a name="retention_policy" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.retentionPolicy"></a>

```python
retention_policy: SagemakerDomainRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy">SagemakerDomainRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#retention_policy SagemakerDomain#retention_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#tags SagemakerDomain#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#tags_all SagemakerDomain#tags_all}.

---

### SagemakerDomainDefaultSpaceSettings <a name="SagemakerDomainDefaultSpaceSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultSpaceSettings(
  execution_role: str,
  jupyter_server_app_settings: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings = None,
  kernel_gateway_app_settings: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings = None,
  security_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings.property.executionRole">execution_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#execution_role SagemakerDomain#execution_role}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings.property.jupyterServerAppSettings">jupyter_server_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings</a></code> | jupyter_server_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings.property.kernelGatewayAppSettings">kernel_gateway_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings</a></code> | kernel_gateway_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#security_groups SagemakerDomain#security_groups}. |

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#execution_role SagemakerDomain#execution_role}.

---

##### `jupyter_server_app_settings`<sup>Optional</sup> <a name="jupyter_server_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings.property.jupyterServerAppSettings"></a>

```python
jupyter_server_app_settings: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings</a>

jupyter_server_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#jupyter_server_app_settings SagemakerDomain#jupyter_server_app_settings}

---

##### `kernel_gateway_app_settings`<sup>Optional</sup> <a name="kernel_gateway_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings.property.kernelGatewayAppSettings"></a>

```python
kernel_gateway_app_settings: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings</a>

kernel_gateway_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#kernel_gateway_app_settings SagemakerDomain#kernel_gateway_app_settings}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#security_groups SagemakerDomain#security_groups}.

---

### SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings <a name="SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings(
  code_repository: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository]] = None,
  default_resource_spec: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec = None,
  lifecycle_config_arns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings.property.codeRepository">code_repository</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository</a>]]</code> | code_repository block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings.property.lifecycleConfigArns">lifecycle_config_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}. |

---

##### `code_repository`<sup>Optional</sup> <a name="code_repository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings.property.codeRepository"></a>

```python
code_repository: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository</a>]]

code_repository block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#code_repository SagemakerDomain#code_repository}

---

##### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}

---

##### `lifecycle_config_arns`<sup>Optional</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings.property.lifecycleConfigArns"></a>

```python
lifecycle_config_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}.

---

### SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository <a name="SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository(
  repository_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository.property.repositoryUrl">repository_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#repository_url SagemakerDomain#repository_url}. |

---

##### `repository_url`<sup>Required</sup> <a name="repository_url" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#repository_url SagemakerDomain#repository_url}.

---

### SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec <a name="SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}. |

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}.

---

##### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}.

---

##### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.

---

##### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}.

---

### SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings <a name="SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings(
  custom_image: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage]] = None,
  default_resource_spec: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec = None,
  lifecycle_config_arns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings.property.customImage">custom_image</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage</a>]]</code> | custom_image block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings.property.lifecycleConfigArns">lifecycle_config_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}. |

---

##### `custom_image`<sup>Optional</sup> <a name="custom_image" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings.property.customImage"></a>

```python
custom_image: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage</a>]]

custom_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#custom_image SagemakerDomain#custom_image}

---

##### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}

---

##### `lifecycle_config_arns`<sup>Optional</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings.property.lifecycleConfigArns"></a>

```python
lifecycle_config_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}.

---

### SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage <a name="SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage(
  app_image_config_name: str,
  image_name: str,
  image_version_number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage.property.appImageConfigName">app_image_config_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_name SagemakerDomain#image_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage.property.imageVersionNumber">image_version_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}. |

---

##### `app_image_config_name`<sup>Required</sup> <a name="app_image_config_name" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage.property.appImageConfigName"></a>

```python
app_image_config_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}.

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_name SagemakerDomain#image_name}.

---

##### `image_version_number`<sup>Optional</sup> <a name="image_version_number" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage.property.imageVersionNumber"></a>

```python
image_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}.

---

### SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec <a name="SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}. |

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}.

---

##### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}.

---

##### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.

---

##### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}.

---

### SagemakerDomainDefaultUserSettings <a name="SagemakerDomainDefaultUserSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettings(
  execution_role: str,
  canvas_app_settings: SagemakerDomainDefaultUserSettingsCanvasAppSettings = None,
  jupyter_server_app_settings: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings = None,
  kernel_gateway_app_settings: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings = None,
  r_session_app_settings: SagemakerDomainDefaultUserSettingsRSessionAppSettings = None,
  security_groups: typing.List[str] = None,
  sharing_settings: SagemakerDomainDefaultUserSettingsSharingSettings = None,
  tensor_board_app_settings: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.executionRole">execution_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#execution_role SagemakerDomain#execution_role}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.canvasAppSettings">canvas_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettings</a></code> | canvas_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.jupyterServerAppSettings">jupyter_server_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings">SagemakerDomainDefaultUserSettingsJupyterServerAppSettings</a></code> | jupyter_server_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.kernelGatewayAppSettings">kernel_gateway_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings</a></code> | kernel_gateway_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.rSessionAppSettings">r_session_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings">SagemakerDomainDefaultUserSettingsRSessionAppSettings</a></code> | r_session_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#security_groups SagemakerDomain#security_groups}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.sharingSettings">sharing_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings">SagemakerDomainDefaultUserSettingsSharingSettings</a></code> | sharing_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.tensorBoardAppSettings">tensor_board_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings">SagemakerDomainDefaultUserSettingsTensorBoardAppSettings</a></code> | tensor_board_app_settings block. |

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#execution_role SagemakerDomain#execution_role}.

---

##### `canvas_app_settings`<sup>Optional</sup> <a name="canvas_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.canvasAppSettings"></a>

```python
canvas_app_settings: SagemakerDomainDefaultUserSettingsCanvasAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettings</a>

canvas_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#canvas_app_settings SagemakerDomain#canvas_app_settings}

---

##### `jupyter_server_app_settings`<sup>Optional</sup> <a name="jupyter_server_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.jupyterServerAppSettings"></a>

```python
jupyter_server_app_settings: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings">SagemakerDomainDefaultUserSettingsJupyterServerAppSettings</a>

jupyter_server_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#jupyter_server_app_settings SagemakerDomain#jupyter_server_app_settings}

---

##### `kernel_gateway_app_settings`<sup>Optional</sup> <a name="kernel_gateway_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.kernelGatewayAppSettings"></a>

```python
kernel_gateway_app_settings: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings</a>

kernel_gateway_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#kernel_gateway_app_settings SagemakerDomain#kernel_gateway_app_settings}

---

##### `r_session_app_settings`<sup>Optional</sup> <a name="r_session_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.rSessionAppSettings"></a>

```python
r_session_app_settings: SagemakerDomainDefaultUserSettingsRSessionAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings">SagemakerDomainDefaultUserSettingsRSessionAppSettings</a>

r_session_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#r_session_app_settings SagemakerDomain#r_session_app_settings}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#security_groups SagemakerDomain#security_groups}.

---

##### `sharing_settings`<sup>Optional</sup> <a name="sharing_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.sharingSettings"></a>

```python
sharing_settings: SagemakerDomainDefaultUserSettingsSharingSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings">SagemakerDomainDefaultUserSettingsSharingSettings</a>

sharing_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sharing_settings SagemakerDomain#sharing_settings}

---

##### `tensor_board_app_settings`<sup>Optional</sup> <a name="tensor_board_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.tensorBoardAppSettings"></a>

```python
tensor_board_app_settings: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings">SagemakerDomainDefaultUserSettingsTensorBoardAppSettings</a>

tensor_board_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#tensor_board_app_settings SagemakerDomain#tensor_board_app_settings}

---

### SagemakerDomainDefaultUserSettingsCanvasAppSettings <a name="SagemakerDomainDefaultUserSettingsCanvasAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings(
  time_series_forecasting_settings: SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings.property.timeSeriesForecastingSettings">time_series_forecasting_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a></code> | time_series_forecasting_settings block. |

---

##### `time_series_forecasting_settings`<sup>Optional</sup> <a name="time_series_forecasting_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings.property.timeSeriesForecastingSettings"></a>

```python
time_series_forecasting_settings: SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a>

time_series_forecasting_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#time_series_forecasting_settings SagemakerDomain#time_series_forecasting_settings}

---

### SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings <a name="SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings(
  amazon_forecast_role_arn: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.property.amazonForecastRoleArn">amazon_forecast_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#amazon_forecast_role_arn SagemakerDomain#amazon_forecast_role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#status SagemakerDomain#status}. |

---

##### `amazon_forecast_role_arn`<sup>Optional</sup> <a name="amazon_forecast_role_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.property.amazonForecastRoleArn"></a>

```python
amazon_forecast_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#amazon_forecast_role_arn SagemakerDomain#amazon_forecast_role_arn}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#status SagemakerDomain#status}.

---

### SagemakerDomainDefaultUserSettingsJupyterServerAppSettings <a name="SagemakerDomainDefaultUserSettingsJupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings(
  code_repository: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository]] = None,
  default_resource_spec: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec = None,
  lifecycle_config_arns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings.property.codeRepository">code_repository</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository</a>]]</code> | code_repository block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings.property.lifecycleConfigArns">lifecycle_config_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}. |

---

##### `code_repository`<sup>Optional</sup> <a name="code_repository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings.property.codeRepository"></a>

```python
code_repository: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository</a>]]

code_repository block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#code_repository SagemakerDomain#code_repository}

---

##### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}

---

##### `lifecycle_config_arns`<sup>Optional</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings.property.lifecycleConfigArns"></a>

```python
lifecycle_config_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}.

---

### SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository <a name="SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository(
  repository_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository.property.repositoryUrl">repository_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#repository_url SagemakerDomain#repository_url}. |

---

##### `repository_url`<sup>Required</sup> <a name="repository_url" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#repository_url SagemakerDomain#repository_url}.

---

### SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec <a name="SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}. |

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}.

---

##### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}.

---

##### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.

---

##### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}.

---

### SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings <a name="SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings(
  custom_image: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage]] = None,
  default_resource_spec: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec = None,
  lifecycle_config_arns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings.property.customImage">custom_image</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage</a>]]</code> | custom_image block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings.property.lifecycleConfigArns">lifecycle_config_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}. |

---

##### `custom_image`<sup>Optional</sup> <a name="custom_image" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings.property.customImage"></a>

```python
custom_image: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage</a>]]

custom_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#custom_image SagemakerDomain#custom_image}

---

##### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}

---

##### `lifecycle_config_arns`<sup>Optional</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings.property.lifecycleConfigArns"></a>

```python
lifecycle_config_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}.

---

### SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage <a name="SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage(
  app_image_config_name: str,
  image_name: str,
  image_version_number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage.property.appImageConfigName">app_image_config_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_name SagemakerDomain#image_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage.property.imageVersionNumber">image_version_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}. |

---

##### `app_image_config_name`<sup>Required</sup> <a name="app_image_config_name" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage.property.appImageConfigName"></a>

```python
app_image_config_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}.

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_name SagemakerDomain#image_name}.

---

##### `image_version_number`<sup>Optional</sup> <a name="image_version_number" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage.property.imageVersionNumber"></a>

```python
image_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}.

---

### SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec <a name="SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}. |

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}.

---

##### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}.

---

##### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.

---

##### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}.

---

### SagemakerDomainDefaultUserSettingsRSessionAppSettings <a name="SagemakerDomainDefaultUserSettingsRSessionAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings(
  custom_image: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage]] = None,
  default_resource_spec: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings.property.customImage">custom_image</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage">SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage</a>]]</code> | custom_image block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |

---

##### `custom_image`<sup>Optional</sup> <a name="custom_image" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings.property.customImage"></a>

```python
custom_image: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage">SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage</a>]]

custom_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#custom_image SagemakerDomain#custom_image}

---

##### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}

---

### SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage <a name="SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage(
  app_image_config_name: str,
  image_name: str,
  image_version_number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage.property.appImageConfigName">app_image_config_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_name SagemakerDomain#image_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage.property.imageVersionNumber">image_version_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}. |

---

##### `app_image_config_name`<sup>Required</sup> <a name="app_image_config_name" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage.property.appImageConfigName"></a>

```python
app_image_config_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}.

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_name SagemakerDomain#image_name}.

---

##### `image_version_number`<sup>Optional</sup> <a name="image_version_number" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage.property.imageVersionNumber"></a>

```python
image_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}.

---

### SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec <a name="SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}. |

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}.

---

##### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}.

---

##### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.

---

##### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}.

---

### SagemakerDomainDefaultUserSettingsSharingSettings <a name="SagemakerDomainDefaultUserSettingsSharingSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings(
  notebook_output_option: str = None,
  s3_kms_key_id: str = None,
  s3_output_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings.property.notebookOutputOption">notebook_output_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#notebook_output_option SagemakerDomain#notebook_output_option}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings.property.s3KmsKeyId">s3_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#s3_kms_key_id SagemakerDomain#s3_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings.property.s3OutputPath">s3_output_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#s3_output_path SagemakerDomain#s3_output_path}. |

---

##### `notebook_output_option`<sup>Optional</sup> <a name="notebook_output_option" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings.property.notebookOutputOption"></a>

```python
notebook_output_option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#notebook_output_option SagemakerDomain#notebook_output_option}.

---

##### `s3_kms_key_id`<sup>Optional</sup> <a name="s3_kms_key_id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings.property.s3KmsKeyId"></a>

```python
s3_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#s3_kms_key_id SagemakerDomain#s3_kms_key_id}.

---

##### `s3_output_path`<sup>Optional</sup> <a name="s3_output_path" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings.property.s3OutputPath"></a>

```python
s3_output_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#s3_output_path SagemakerDomain#s3_output_path}.

---

### SagemakerDomainDefaultUserSettingsTensorBoardAppSettings <a name="SagemakerDomainDefaultUserSettingsTensorBoardAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings(
  default_resource_spec: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |

---

##### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}

---

### SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec <a name="SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}. |

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}.

---

##### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}.

---

##### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.

---

##### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}.

---

### SagemakerDomainDomainSettings <a name="SagemakerDomainDomainSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDomainSettings(
  execution_role_identity_config: str = None,
  security_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings.property.executionRoleIdentityConfig">execution_role_identity_config</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#execution_role_identity_config SagemakerDomain#execution_role_identity_config}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#security_group_ids SagemakerDomain#security_group_ids}. |

---

##### `execution_role_identity_config`<sup>Optional</sup> <a name="execution_role_identity_config" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings.property.executionRoleIdentityConfig"></a>

```python
execution_role_identity_config: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#execution_role_identity_config SagemakerDomain#execution_role_identity_config}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#security_group_ids SagemakerDomain#security_group_ids}.

---

### SagemakerDomainRetentionPolicy <a name="SagemakerDomainRetentionPolicy" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainRetentionPolicy(
  home_efs_file_system: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy.property.homeEfsFileSystem">home_efs_file_system</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#home_efs_file_system SagemakerDomain#home_efs_file_system}. |

---

##### `home_efs_file_system`<sup>Optional</sup> <a name="home_efs_file_system" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy.property.homeEfsFileSystem"></a>

```python
home_efs_file_system: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#home_efs_file_system SagemakerDomain#home_efs_file_system}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList <a name="SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository</a>]]

---


### SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference <a name="SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput">repository_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrl">repository_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_url_input`<sup>Optional</sup> <a name="repository_url_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput"></a>

```python
repository_url_input: str
```

- *Type:* str

---

##### `repository_url`<sup>Required</sup> <a name="repository_url" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository</a>, cdktf.IResolvable]

---


### SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">reset_lifecycle_config_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">reset_sagemaker_image_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">reset_sagemaker_image_version_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_lifecycle_config_arn` <a name="reset_lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```python
def reset_lifecycle_config_arn() -> None
```

##### `reset_sagemaker_image_arn` <a name="reset_sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```python
def reset_sagemaker_image_arn() -> None
```

##### `reset_sagemaker_image_version_arn` <a name="reset_sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```python
def reset_sagemaker_image_version_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycle_config_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">sagemaker_image_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemaker_image_version_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `lifecycle_config_arn_input`<sup>Optional</sup> <a name="lifecycle_config_arn_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```python
lifecycle_config_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_arn_input`<sup>Optional</sup> <a name="sagemaker_image_arn_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```python
sagemaker_image_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn_input`<sup>Optional</sup> <a name="sagemaker_image_version_arn_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```python
sagemaker_image_version_arn_input: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `lifecycle_config_arn`<sup>Required</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

---

##### `sagemaker_image_arn`<sup>Required</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn`<sup>Required</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---


### SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference <a name="SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.putCodeRepository">put_code_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec">put_default_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.resetCodeRepository">reset_code_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec">reset_default_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns">reset_lifecycle_config_arns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_code_repository` <a name="put_code_repository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.putCodeRepository"></a>

```python
def put_code_repository(
  value: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.putCodeRepository.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository</a>]]

---

##### `put_default_resource_spec` <a name="put_default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec"></a>

```python
def put_default_resource_spec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_arn: str = None
) -> None
```

###### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}.

---

###### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.lifecycleConfigArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}.

---

###### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.

---

###### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageVersionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}.

---

##### `reset_code_repository` <a name="reset_code_repository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.resetCodeRepository"></a>

```python
def reset_code_repository() -> None
```

##### `reset_default_resource_spec` <a name="reset_default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```python
def reset_default_resource_spec() -> None
```

##### `reset_lifecycle_config_arns` <a name="reset_lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```python
def reset_lifecycle_config_arns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.codeRepository">code_repository</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.codeRepositoryInput">code_repository_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput">default_resource_spec_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycle_config_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns">lifecycle_config_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_repository`<sup>Required</sup> <a name="code_repository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.codeRepository"></a>

```python
code_repository: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList</a>

---

##### `default_resource_spec`<sup>Required</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `code_repository_input`<sup>Optional</sup> <a name="code_repository_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.codeRepositoryInput"></a>

```python
code_repository_input: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository</a>]]

---

##### `default_resource_spec_input`<sup>Optional</sup> <a name="default_resource_spec_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```python
default_resource_spec_input: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `lifecycle_config_arns_input`<sup>Optional</sup> <a name="lifecycle_config_arns_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```python
lifecycle_config_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lifecycle_config_arns`<sup>Required</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```python
lifecycle_config_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings</a>

---


### SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList <a name="SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage</a>]]

---


### SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference <a name="SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.resetImageVersionNumber">reset_image_version_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image_version_number` <a name="reset_image_version_number" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.resetImageVersionNumber"></a>

```python
def reset_image_version_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigNameInput">app_image_config_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumberInput">image_version_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigName">app_image_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumber">image_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_image_config_name_input`<sup>Optional</sup> <a name="app_image_config_name_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigNameInput"></a>

```python
app_image_config_name_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `image_version_number_input`<sup>Optional</sup> <a name="image_version_number_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumberInput"></a>

```python
image_version_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `app_image_config_name`<sup>Required</sup> <a name="app_image_config_name" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigName"></a>

```python
app_image_config_name: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `image_version_number`<sup>Required</sup> <a name="image_version_number" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumber"></a>

```python
image_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage</a>, cdktf.IResolvable]

---


### SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">reset_lifecycle_config_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">reset_sagemaker_image_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">reset_sagemaker_image_version_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_lifecycle_config_arn` <a name="reset_lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```python
def reset_lifecycle_config_arn() -> None
```

##### `reset_sagemaker_image_arn` <a name="reset_sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```python
def reset_sagemaker_image_arn() -> None
```

##### `reset_sagemaker_image_version_arn` <a name="reset_sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```python
def reset_sagemaker_image_version_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycle_config_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">sagemaker_image_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemaker_image_version_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `lifecycle_config_arn_input`<sup>Optional</sup> <a name="lifecycle_config_arn_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```python
lifecycle_config_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_arn_input`<sup>Optional</sup> <a name="sagemaker_image_arn_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```python
sagemaker_image_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn_input`<sup>Optional</sup> <a name="sagemaker_image_version_arn_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```python
sagemaker_image_version_arn_input: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `lifecycle_config_arn`<sup>Required</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

---

##### `sagemaker_image_arn`<sup>Required</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn`<sup>Required</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---


### SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference <a name="SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.putCustomImage">put_custom_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec">put_default_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.resetCustomImage">reset_custom_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec">reset_default_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns">reset_lifecycle_config_arns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_image` <a name="put_custom_image" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.putCustomImage"></a>

```python
def put_custom_image(
  value: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.putCustomImage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage</a>]]

---

##### `put_default_resource_spec` <a name="put_default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec"></a>

```python
def put_default_resource_spec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_arn: str = None
) -> None
```

###### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}.

---

###### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.lifecycleConfigArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}.

---

###### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.

---

###### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageVersionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}.

---

##### `reset_custom_image` <a name="reset_custom_image" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.resetCustomImage"></a>

```python
def reset_custom_image() -> None
```

##### `reset_default_resource_spec` <a name="reset_default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```python
def reset_default_resource_spec() -> None
```

##### `reset_lifecycle_config_arns` <a name="reset_lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```python
def reset_lifecycle_config_arns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImage">custom_image</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImageInput">custom_image_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput">default_resource_spec_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycle_config_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns">lifecycle_config_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_image`<sup>Required</sup> <a name="custom_image" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImage"></a>

```python
custom_image: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList</a>

---

##### `default_resource_spec`<sup>Required</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `custom_image_input`<sup>Optional</sup> <a name="custom_image_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImageInput"></a>

```python
custom_image_input: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage</a>]]

---

##### `default_resource_spec_input`<sup>Optional</sup> <a name="default_resource_spec_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```python
default_resource_spec_input: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `lifecycle_config_arns_input`<sup>Optional</sup> <a name="lifecycle_config_arns_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```python
lifecycle_config_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lifecycle_config_arns`<sup>Required</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```python
lifecycle_config_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings</a>

---


### SagemakerDomainDefaultSpaceSettingsOutputReference <a name="SagemakerDomainDefaultSpaceSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.putJupyterServerAppSettings">put_jupyter_server_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.putKernelGatewayAppSettings">put_kernel_gateway_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.resetJupyterServerAppSettings">reset_jupyter_server_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.resetKernelGatewayAppSettings">reset_kernel_gateway_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_jupyter_server_app_settings` <a name="put_jupyter_server_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.putJupyterServerAppSettings"></a>

```python
def put_jupyter_server_app_settings(
  code_repository: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository]] = None,
  default_resource_spec: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec = None,
  lifecycle_config_arns: typing.List[str] = None
) -> None
```

###### `code_repository`<sup>Optional</sup> <a name="code_repository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.putJupyterServerAppSettings.parameter.codeRepository"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository</a>]]

code_repository block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#code_repository SagemakerDomain#code_repository}

---

###### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.putJupyterServerAppSettings.parameter.defaultResourceSpec"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}

---

###### `lifecycle_config_arns`<sup>Optional</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.putJupyterServerAppSettings.parameter.lifecycleConfigArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}.

---

##### `put_kernel_gateway_app_settings` <a name="put_kernel_gateway_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.putKernelGatewayAppSettings"></a>

```python
def put_kernel_gateway_app_settings(
  custom_image: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage]] = None,
  default_resource_spec: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec = None,
  lifecycle_config_arns: typing.List[str] = None
) -> None
```

###### `custom_image`<sup>Optional</sup> <a name="custom_image" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.putKernelGatewayAppSettings.parameter.customImage"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage</a>]]

custom_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#custom_image SagemakerDomain#custom_image}

---

###### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.putKernelGatewayAppSettings.parameter.defaultResourceSpec"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}

---

###### `lifecycle_config_arns`<sup>Optional</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.putKernelGatewayAppSettings.parameter.lifecycleConfigArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}.

---

##### `reset_jupyter_server_app_settings` <a name="reset_jupyter_server_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.resetJupyterServerAppSettings"></a>

```python
def reset_jupyter_server_app_settings() -> None
```

##### `reset_kernel_gateway_app_settings` <a name="reset_kernel_gateway_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.resetKernelGatewayAppSettings"></a>

```python
def reset_kernel_gateway_app_settings() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.jupyterServerAppSettings">jupyter_server_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.kernelGatewayAppSettings">kernel_gateway_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.executionRoleInput">execution_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.jupyterServerAppSettingsInput">jupyter_server_app_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.kernelGatewayAppSettingsInput">kernel_gateway_app_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.executionRole">execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings">SagemakerDomainDefaultSpaceSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `jupyter_server_app_settings`<sup>Required</sup> <a name="jupyter_server_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.jupyterServerAppSettings"></a>

```python
jupyter_server_app_settings: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference</a>

---

##### `kernel_gateway_app_settings`<sup>Required</sup> <a name="kernel_gateway_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.kernelGatewayAppSettings"></a>

```python
kernel_gateway_app_settings: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference</a>

---

##### `execution_role_input`<sup>Optional</sup> <a name="execution_role_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.executionRoleInput"></a>

```python
execution_role_input: str
```

- *Type:* str

---

##### `jupyter_server_app_settings_input`<sup>Optional</sup> <a name="jupyter_server_app_settings_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.jupyterServerAppSettingsInput"></a>

```python
jupyter_server_app_settings_input: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings</a>

---

##### `kernel_gateway_app_settings_input`<sup>Optional</sup> <a name="kernel_gateway_app_settings_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.kernelGatewayAppSettingsInput"></a>

```python
kernel_gateway_app_settings_input: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings</a>

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerDomainDefaultSpaceSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings">SagemakerDomainDefaultSpaceSettings</a>

---


### SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference <a name="SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.putTimeSeriesForecastingSettings">put_time_series_forecasting_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.resetTimeSeriesForecastingSettings">reset_time_series_forecasting_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_time_series_forecasting_settings` <a name="put_time_series_forecasting_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.putTimeSeriesForecastingSettings"></a>

```python
def put_time_series_forecasting_settings(
  amazon_forecast_role_arn: str = None,
  status: str = None
) -> None
```

###### `amazon_forecast_role_arn`<sup>Optional</sup> <a name="amazon_forecast_role_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.putTimeSeriesForecastingSettings.parameter.amazonForecastRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#amazon_forecast_role_arn SagemakerDomain#amazon_forecast_role_arn}.

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.putTimeSeriesForecastingSettings.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#status SagemakerDomain#status}.

---

##### `reset_time_series_forecasting_settings` <a name="reset_time_series_forecasting_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.resetTimeSeriesForecastingSettings"></a>

```python
def reset_time_series_forecasting_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.property.timeSeriesForecastingSettings">time_series_forecasting_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference">SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.property.timeSeriesForecastingSettingsInput">time_series_forecasting_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_series_forecasting_settings`<sup>Required</sup> <a name="time_series_forecasting_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.property.timeSeriesForecastingSettings"></a>

```python
time_series_forecasting_settings: SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference">SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference</a>

---

##### `time_series_forecasting_settings_input`<sup>Optional</sup> <a name="time_series_forecasting_settings_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.property.timeSeriesForecastingSettingsInput"></a>

```python
time_series_forecasting_settings_input: SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerDomainDefaultUserSettingsCanvasAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettings</a>

---


### SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference <a name="SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resetAmazonForecastRoleArn">reset_amazon_forecast_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_amazon_forecast_role_arn` <a name="reset_amazon_forecast_role_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resetAmazonForecastRoleArn"></a>

```python
def reset_amazon_forecast_role_arn() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.amazonForecastRoleArnInput">amazon_forecast_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.amazonForecastRoleArn">amazon_forecast_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amazon_forecast_role_arn_input`<sup>Optional</sup> <a name="amazon_forecast_role_arn_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.amazonForecastRoleArnInput"></a>

```python
amazon_forecast_role_arn_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `amazon_forecast_role_arn`<sup>Required</sup> <a name="amazon_forecast_role_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.amazonForecastRoleArn"></a>

```python
amazon_forecast_role_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a>

---


### SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList <a name="SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository</a>]]

---


### SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference <a name="SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput">repository_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrl">repository_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_url_input`<sup>Optional</sup> <a name="repository_url_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput"></a>

```python
repository_url_input: str
```

- *Type:* str

---

##### `repository_url`<sup>Required</sup> <a name="repository_url" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository</a>, cdktf.IResolvable]

---


### SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">reset_lifecycle_config_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">reset_sagemaker_image_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">reset_sagemaker_image_version_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_lifecycle_config_arn` <a name="reset_lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```python
def reset_lifecycle_config_arn() -> None
```

##### `reset_sagemaker_image_arn` <a name="reset_sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```python
def reset_sagemaker_image_arn() -> None
```

##### `reset_sagemaker_image_version_arn` <a name="reset_sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```python
def reset_sagemaker_image_version_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycle_config_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">sagemaker_image_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemaker_image_version_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `lifecycle_config_arn_input`<sup>Optional</sup> <a name="lifecycle_config_arn_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```python
lifecycle_config_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_arn_input`<sup>Optional</sup> <a name="sagemaker_image_arn_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```python
sagemaker_image_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn_input`<sup>Optional</sup> <a name="sagemaker_image_version_arn_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```python
sagemaker_image_version_arn_input: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `lifecycle_config_arn`<sup>Required</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

---

##### `sagemaker_image_arn`<sup>Required</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn`<sup>Required</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---


### SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference <a name="SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.putCodeRepository">put_code_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec">put_default_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.resetCodeRepository">reset_code_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec">reset_default_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns">reset_lifecycle_config_arns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_code_repository` <a name="put_code_repository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.putCodeRepository"></a>

```python
def put_code_repository(
  value: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.putCodeRepository.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository</a>]]

---

##### `put_default_resource_spec` <a name="put_default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec"></a>

```python
def put_default_resource_spec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_arn: str = None
) -> None
```

###### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}.

---

###### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.lifecycleConfigArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}.

---

###### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.

---

###### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageVersionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}.

---

##### `reset_code_repository` <a name="reset_code_repository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.resetCodeRepository"></a>

```python
def reset_code_repository() -> None
```

##### `reset_default_resource_spec` <a name="reset_default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```python
def reset_default_resource_spec() -> None
```

##### `reset_lifecycle_config_arns` <a name="reset_lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```python
def reset_lifecycle_config_arns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.codeRepository">code_repository</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.codeRepositoryInput">code_repository_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput">default_resource_spec_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycle_config_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns">lifecycle_config_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings">SagemakerDomainDefaultUserSettingsJupyterServerAppSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_repository`<sup>Required</sup> <a name="code_repository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.codeRepository"></a>

```python
code_repository: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList</a>

---

##### `default_resource_spec`<sup>Required</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `code_repository_input`<sup>Optional</sup> <a name="code_repository_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.codeRepositoryInput"></a>

```python
code_repository_input: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository</a>]]

---

##### `default_resource_spec_input`<sup>Optional</sup> <a name="default_resource_spec_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```python
default_resource_spec_input: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `lifecycle_config_arns_input`<sup>Optional</sup> <a name="lifecycle_config_arns_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```python
lifecycle_config_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lifecycle_config_arns`<sup>Required</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```python
lifecycle_config_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings">SagemakerDomainDefaultUserSettingsJupyterServerAppSettings</a>

---


### SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList <a name="SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage</a>]]

---


### SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference <a name="SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.resetImageVersionNumber">reset_image_version_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image_version_number` <a name="reset_image_version_number" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.resetImageVersionNumber"></a>

```python
def reset_image_version_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigNameInput">app_image_config_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumberInput">image_version_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigName">app_image_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumber">image_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_image_config_name_input`<sup>Optional</sup> <a name="app_image_config_name_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigNameInput"></a>

```python
app_image_config_name_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `image_version_number_input`<sup>Optional</sup> <a name="image_version_number_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumberInput"></a>

```python
image_version_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `app_image_config_name`<sup>Required</sup> <a name="app_image_config_name" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigName"></a>

```python
app_image_config_name: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `image_version_number`<sup>Required</sup> <a name="image_version_number" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumber"></a>

```python
image_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage</a>, cdktf.IResolvable]

---


### SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">reset_lifecycle_config_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">reset_sagemaker_image_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">reset_sagemaker_image_version_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_lifecycle_config_arn` <a name="reset_lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```python
def reset_lifecycle_config_arn() -> None
```

##### `reset_sagemaker_image_arn` <a name="reset_sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```python
def reset_sagemaker_image_arn() -> None
```

##### `reset_sagemaker_image_version_arn` <a name="reset_sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```python
def reset_sagemaker_image_version_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycle_config_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">sagemaker_image_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemaker_image_version_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `lifecycle_config_arn_input`<sup>Optional</sup> <a name="lifecycle_config_arn_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```python
lifecycle_config_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_arn_input`<sup>Optional</sup> <a name="sagemaker_image_arn_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```python
sagemaker_image_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn_input`<sup>Optional</sup> <a name="sagemaker_image_version_arn_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```python
sagemaker_image_version_arn_input: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `lifecycle_config_arn`<sup>Required</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

---

##### `sagemaker_image_arn`<sup>Required</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn`<sup>Required</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---


### SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference <a name="SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImage">put_custom_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec">put_default_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.resetCustomImage">reset_custom_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec">reset_default_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns">reset_lifecycle_config_arns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_image` <a name="put_custom_image" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImage"></a>

```python
def put_custom_image(
  value: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage</a>]]

---

##### `put_default_resource_spec` <a name="put_default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec"></a>

```python
def put_default_resource_spec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_arn: str = None
) -> None
```

###### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}.

---

###### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.lifecycleConfigArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}.

---

###### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.

---

###### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageVersionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}.

---

##### `reset_custom_image` <a name="reset_custom_image" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.resetCustomImage"></a>

```python
def reset_custom_image() -> None
```

##### `reset_default_resource_spec` <a name="reset_default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```python
def reset_default_resource_spec() -> None
```

##### `reset_lifecycle_config_arns` <a name="reset_lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```python
def reset_lifecycle_config_arns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.customImage">custom_image</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.customImageInput">custom_image_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput">default_resource_spec_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycle_config_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns">lifecycle_config_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_image`<sup>Required</sup> <a name="custom_image" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.customImage"></a>

```python
custom_image: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList</a>

---

##### `default_resource_spec`<sup>Required</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `custom_image_input`<sup>Optional</sup> <a name="custom_image_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.customImageInput"></a>

```python
custom_image_input: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage</a>]]

---

##### `default_resource_spec_input`<sup>Optional</sup> <a name="default_resource_spec_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```python
default_resource_spec_input: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `lifecycle_config_arns_input`<sup>Optional</sup> <a name="lifecycle_config_arns_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```python
lifecycle_config_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lifecycle_config_arns`<sup>Required</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```python
lifecycle_config_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings</a>

---


### SagemakerDomainDefaultUserSettingsOutputReference <a name="SagemakerDomainDefaultUserSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putCanvasAppSettings">put_canvas_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putJupyterServerAppSettings">put_jupyter_server_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putKernelGatewayAppSettings">put_kernel_gateway_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putRSessionAppSettings">put_r_session_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putSharingSettings">put_sharing_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putTensorBoardAppSettings">put_tensor_board_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetCanvasAppSettings">reset_canvas_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetJupyterServerAppSettings">reset_jupyter_server_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetKernelGatewayAppSettings">reset_kernel_gateway_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetRSessionAppSettings">reset_r_session_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetSharingSettings">reset_sharing_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetTensorBoardAppSettings">reset_tensor_board_app_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_canvas_app_settings` <a name="put_canvas_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putCanvasAppSettings"></a>

```python
def put_canvas_app_settings(
  time_series_forecasting_settings: SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings = None
) -> None
```

###### `time_series_forecasting_settings`<sup>Optional</sup> <a name="time_series_forecasting_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putCanvasAppSettings.parameter.timeSeriesForecastingSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a>

time_series_forecasting_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#time_series_forecasting_settings SagemakerDomain#time_series_forecasting_settings}

---

##### `put_jupyter_server_app_settings` <a name="put_jupyter_server_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putJupyterServerAppSettings"></a>

```python
def put_jupyter_server_app_settings(
  code_repository: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository]] = None,
  default_resource_spec: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec = None,
  lifecycle_config_arns: typing.List[str] = None
) -> None
```

###### `code_repository`<sup>Optional</sup> <a name="code_repository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putJupyterServerAppSettings.parameter.codeRepository"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository</a>]]

code_repository block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#code_repository SagemakerDomain#code_repository}

---

###### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putJupyterServerAppSettings.parameter.defaultResourceSpec"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}

---

###### `lifecycle_config_arns`<sup>Optional</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putJupyterServerAppSettings.parameter.lifecycleConfigArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}.

---

##### `put_kernel_gateway_app_settings` <a name="put_kernel_gateway_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putKernelGatewayAppSettings"></a>

```python
def put_kernel_gateway_app_settings(
  custom_image: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage]] = None,
  default_resource_spec: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec = None,
  lifecycle_config_arns: typing.List[str] = None
) -> None
```

###### `custom_image`<sup>Optional</sup> <a name="custom_image" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putKernelGatewayAppSettings.parameter.customImage"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage</a>]]

custom_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#custom_image SagemakerDomain#custom_image}

---

###### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putKernelGatewayAppSettings.parameter.defaultResourceSpec"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}

---

###### `lifecycle_config_arns`<sup>Optional</sup> <a name="lifecycle_config_arns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putKernelGatewayAppSettings.parameter.lifecycleConfigArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}.

---

##### `put_r_session_app_settings` <a name="put_r_session_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putRSessionAppSettings"></a>

```python
def put_r_session_app_settings(
  custom_image: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage]] = None,
  default_resource_spec: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec = None
) -> None
```

###### `custom_image`<sup>Optional</sup> <a name="custom_image" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putRSessionAppSettings.parameter.customImage"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage">SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage</a>]]

custom_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#custom_image SagemakerDomain#custom_image}

---

###### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putRSessionAppSettings.parameter.defaultResourceSpec"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}

---

##### `put_sharing_settings` <a name="put_sharing_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putSharingSettings"></a>

```python
def put_sharing_settings(
  notebook_output_option: str = None,
  s3_kms_key_id: str = None,
  s3_output_path: str = None
) -> None
```

###### `notebook_output_option`<sup>Optional</sup> <a name="notebook_output_option" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putSharingSettings.parameter.notebookOutputOption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#notebook_output_option SagemakerDomain#notebook_output_option}.

---

###### `s3_kms_key_id`<sup>Optional</sup> <a name="s3_kms_key_id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putSharingSettings.parameter.s3KmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#s3_kms_key_id SagemakerDomain#s3_kms_key_id}.

---

###### `s3_output_path`<sup>Optional</sup> <a name="s3_output_path" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putSharingSettings.parameter.s3OutputPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#s3_output_path SagemakerDomain#s3_output_path}.

---

##### `put_tensor_board_app_settings` <a name="put_tensor_board_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putTensorBoardAppSettings"></a>

```python
def put_tensor_board_app_settings(
  default_resource_spec: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec = None
) -> None
```

###### `default_resource_spec`<sup>Optional</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putTensorBoardAppSettings.parameter.defaultResourceSpec"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}

---

##### `reset_canvas_app_settings` <a name="reset_canvas_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetCanvasAppSettings"></a>

```python
def reset_canvas_app_settings() -> None
```

##### `reset_jupyter_server_app_settings` <a name="reset_jupyter_server_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetJupyterServerAppSettings"></a>

```python
def reset_jupyter_server_app_settings() -> None
```

##### `reset_kernel_gateway_app_settings` <a name="reset_kernel_gateway_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetKernelGatewayAppSettings"></a>

```python
def reset_kernel_gateway_app_settings() -> None
```

##### `reset_r_session_app_settings` <a name="reset_r_session_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetRSessionAppSettings"></a>

```python
def reset_r_session_app_settings() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_sharing_settings` <a name="reset_sharing_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetSharingSettings"></a>

```python
def reset_sharing_settings() -> None
```

##### `reset_tensor_board_app_settings` <a name="reset_tensor_board_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetTensorBoardAppSettings"></a>

```python
def reset_tensor_board_app_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.canvasAppSettings">canvas_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference">SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.jupyterServerAppSettings">jupyter_server_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.kernelGatewayAppSettings">kernel_gateway_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.rSessionAppSettings">r_session_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference">SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.sharingSettings">sharing_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference">SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.tensorBoardAppSettings">tensor_board_app_settings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.canvasAppSettingsInput">canvas_app_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.executionRoleInput">execution_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.jupyterServerAppSettingsInput">jupyter_server_app_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings">SagemakerDomainDefaultUserSettingsJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.kernelGatewayAppSettingsInput">kernel_gateway_app_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.rSessionAppSettingsInput">r_session_app_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings">SagemakerDomainDefaultUserSettingsRSessionAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.sharingSettingsInput">sharing_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings">SagemakerDomainDefaultUserSettingsSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.tensorBoardAppSettingsInput">tensor_board_app_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings">SagemakerDomainDefaultUserSettingsTensorBoardAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.executionRole">execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings">SagemakerDomainDefaultUserSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `canvas_app_settings`<sup>Required</sup> <a name="canvas_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.canvasAppSettings"></a>

```python
canvas_app_settings: SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference">SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference</a>

---

##### `jupyter_server_app_settings`<sup>Required</sup> <a name="jupyter_server_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.jupyterServerAppSettings"></a>

```python
jupyter_server_app_settings: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference</a>

---

##### `kernel_gateway_app_settings`<sup>Required</sup> <a name="kernel_gateway_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.kernelGatewayAppSettings"></a>

```python
kernel_gateway_app_settings: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference</a>

---

##### `r_session_app_settings`<sup>Required</sup> <a name="r_session_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.rSessionAppSettings"></a>

```python
r_session_app_settings: SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference">SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference</a>

---

##### `sharing_settings`<sup>Required</sup> <a name="sharing_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.sharingSettings"></a>

```python
sharing_settings: SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference">SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference</a>

---

##### `tensor_board_app_settings`<sup>Required</sup> <a name="tensor_board_app_settings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.tensorBoardAppSettings"></a>

```python
tensor_board_app_settings: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference</a>

---

##### `canvas_app_settings_input`<sup>Optional</sup> <a name="canvas_app_settings_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.canvasAppSettingsInput"></a>

```python
canvas_app_settings_input: SagemakerDomainDefaultUserSettingsCanvasAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettings</a>

---

##### `execution_role_input`<sup>Optional</sup> <a name="execution_role_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.executionRoleInput"></a>

```python
execution_role_input: str
```

- *Type:* str

---

##### `jupyter_server_app_settings_input`<sup>Optional</sup> <a name="jupyter_server_app_settings_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.jupyterServerAppSettingsInput"></a>

```python
jupyter_server_app_settings_input: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings">SagemakerDomainDefaultUserSettingsJupyterServerAppSettings</a>

---

##### `kernel_gateway_app_settings_input`<sup>Optional</sup> <a name="kernel_gateway_app_settings_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.kernelGatewayAppSettingsInput"></a>

```python
kernel_gateway_app_settings_input: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings</a>

---

##### `r_session_app_settings_input`<sup>Optional</sup> <a name="r_session_app_settings_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.rSessionAppSettingsInput"></a>

```python
r_session_app_settings_input: SagemakerDomainDefaultUserSettingsRSessionAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings">SagemakerDomainDefaultUserSettingsRSessionAppSettings</a>

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sharing_settings_input`<sup>Optional</sup> <a name="sharing_settings_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.sharingSettingsInput"></a>

```python
sharing_settings_input: SagemakerDomainDefaultUserSettingsSharingSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings">SagemakerDomainDefaultUserSettingsSharingSettings</a>

---

##### `tensor_board_app_settings_input`<sup>Optional</sup> <a name="tensor_board_app_settings_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.tensorBoardAppSettingsInput"></a>

```python
tensor_board_app_settings_input: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings">SagemakerDomainDefaultUserSettingsTensorBoardAppSettings</a>

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerDomainDefaultUserSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings">SagemakerDomainDefaultUserSettings</a>

---


### SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList <a name="SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage">SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage">SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage</a>]]

---


### SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference <a name="SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.resetImageVersionNumber">reset_image_version_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image_version_number` <a name="reset_image_version_number" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.resetImageVersionNumber"></a>

```python
def reset_image_version_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.appImageConfigNameInput">app_image_config_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageVersionNumberInput">image_version_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.appImageConfigName">app_image_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageVersionNumber">image_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage">SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_image_config_name_input`<sup>Optional</sup> <a name="app_image_config_name_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.appImageConfigNameInput"></a>

```python
app_image_config_name_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `image_version_number_input`<sup>Optional</sup> <a name="image_version_number_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageVersionNumberInput"></a>

```python
image_version_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `app_image_config_name`<sup>Required</sup> <a name="app_image_config_name" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.appImageConfigName"></a>

```python
app_image_config_name: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `image_version_number`<sup>Required</sup> <a name="image_version_number" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageVersionNumber"></a>

```python
image_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage">SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage</a>, cdktf.IResolvable]

---


### SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">reset_lifecycle_config_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">reset_sagemaker_image_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">reset_sagemaker_image_version_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_lifecycle_config_arn` <a name="reset_lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```python
def reset_lifecycle_config_arn() -> None
```

##### `reset_sagemaker_image_arn` <a name="reset_sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```python
def reset_sagemaker_image_arn() -> None
```

##### `reset_sagemaker_image_version_arn` <a name="reset_sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```python
def reset_sagemaker_image_version_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycle_config_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">sagemaker_image_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemaker_image_version_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `lifecycle_config_arn_input`<sup>Optional</sup> <a name="lifecycle_config_arn_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```python
lifecycle_config_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_arn_input`<sup>Optional</sup> <a name="sagemaker_image_arn_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```python
sagemaker_image_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn_input`<sup>Optional</sup> <a name="sagemaker_image_version_arn_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```python
sagemaker_image_version_arn_input: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `lifecycle_config_arn`<sup>Required</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

---

##### `sagemaker_image_arn`<sup>Required</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn`<sup>Required</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec</a>

---


### SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference <a name="SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.putCustomImage">put_custom_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.putDefaultResourceSpec">put_default_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.resetCustomImage">reset_custom_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.resetDefaultResourceSpec">reset_default_resource_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_image` <a name="put_custom_image" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.putCustomImage"></a>

```python
def put_custom_image(
  value: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.putCustomImage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage">SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage</a>]]

---

##### `put_default_resource_spec` <a name="put_default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.putDefaultResourceSpec"></a>

```python
def put_default_resource_spec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_arn: str = None
) -> None
```

###### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.putDefaultResourceSpec.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}.

---

###### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.putDefaultResourceSpec.parameter.lifecycleConfigArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}.

---

###### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.

---

###### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageVersionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}.

---

##### `reset_custom_image` <a name="reset_custom_image" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.resetCustomImage"></a>

```python
def reset_custom_image() -> None
```

##### `reset_default_resource_spec` <a name="reset_default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```python
def reset_default_resource_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.customImage">custom_image</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList">SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.customImageInput">custom_image_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage">SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.defaultResourceSpecInput">default_resource_spec_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings">SagemakerDomainDefaultUserSettingsRSessionAppSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_image`<sup>Required</sup> <a name="custom_image" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.customImage"></a>

```python
custom_image: SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList">SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList</a>

---

##### `default_resource_spec`<sup>Required</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `custom_image_input`<sup>Optional</sup> <a name="custom_image_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.customImageInput"></a>

```python
custom_image_input: typing.Union[IResolvable, typing.List[SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage">SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage</a>]]

---

##### `default_resource_spec_input`<sup>Optional</sup> <a name="default_resource_spec_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```python
default_resource_spec_input: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerDomainDefaultUserSettingsRSessionAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings">SagemakerDomainDefaultUserSettingsRSessionAppSettings</a>

---


### SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference <a name="SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.resetNotebookOutputOption">reset_notebook_output_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.resetS3KmsKeyId">reset_s3_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.resetS3OutputPath">reset_s3_output_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_notebook_output_option` <a name="reset_notebook_output_option" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.resetNotebookOutputOption"></a>

```python
def reset_notebook_output_option() -> None
```

##### `reset_s3_kms_key_id` <a name="reset_s3_kms_key_id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.resetS3KmsKeyId"></a>

```python
def reset_s3_kms_key_id() -> None
```

##### `reset_s3_output_path` <a name="reset_s3_output_path" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.resetS3OutputPath"></a>

```python
def reset_s3_output_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.notebookOutputOptionInput">notebook_output_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.s3KmsKeyIdInput">s3_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.s3OutputPathInput">s3_output_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.notebookOutputOption">notebook_output_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.s3KmsKeyId">s3_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.s3OutputPath">s3_output_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings">SagemakerDomainDefaultUserSettingsSharingSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notebook_output_option_input`<sup>Optional</sup> <a name="notebook_output_option_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.notebookOutputOptionInput"></a>

```python
notebook_output_option_input: str
```

- *Type:* str

---

##### `s3_kms_key_id_input`<sup>Optional</sup> <a name="s3_kms_key_id_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.s3KmsKeyIdInput"></a>

```python
s3_kms_key_id_input: str
```

- *Type:* str

---

##### `s3_output_path_input`<sup>Optional</sup> <a name="s3_output_path_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.s3OutputPathInput"></a>

```python
s3_output_path_input: str
```

- *Type:* str

---

##### `notebook_output_option`<sup>Required</sup> <a name="notebook_output_option" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.notebookOutputOption"></a>

```python
notebook_output_option: str
```

- *Type:* str

---

##### `s3_kms_key_id`<sup>Required</sup> <a name="s3_kms_key_id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.s3KmsKeyId"></a>

```python
s3_kms_key_id: str
```

- *Type:* str

---

##### `s3_output_path`<sup>Required</sup> <a name="s3_output_path" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.s3OutputPath"></a>

```python
s3_output_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerDomainDefaultUserSettingsSharingSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings">SagemakerDomainDefaultUserSettingsSharingSettings</a>

---


### SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">reset_lifecycle_config_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">reset_sagemaker_image_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">reset_sagemaker_image_version_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_lifecycle_config_arn` <a name="reset_lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```python
def reset_lifecycle_config_arn() -> None
```

##### `reset_sagemaker_image_arn` <a name="reset_sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```python
def reset_sagemaker_image_arn() -> None
```

##### `reset_sagemaker_image_version_arn` <a name="reset_sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```python
def reset_sagemaker_image_version_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycle_config_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">sagemaker_image_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemaker_image_version_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycle_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">sagemaker_image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemaker_image_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `lifecycle_config_arn_input`<sup>Optional</sup> <a name="lifecycle_config_arn_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```python
lifecycle_config_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_arn_input`<sup>Optional</sup> <a name="sagemaker_image_arn_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```python
sagemaker_image_arn_input: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn_input`<sup>Optional</sup> <a name="sagemaker_image_version_arn_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```python
sagemaker_image_version_arn_input: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `lifecycle_config_arn`<sup>Required</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```python
lifecycle_config_arn: str
```

- *Type:* str

---

##### `sagemaker_image_arn`<sup>Required</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```python
sagemaker_image_arn: str
```

- *Type:* str

---

##### `sagemaker_image_version_arn`<sup>Required</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```python
sagemaker_image_version_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a>

---


### SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference <a name="SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.putDefaultResourceSpec">put_default_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.resetDefaultResourceSpec">reset_default_resource_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_resource_spec` <a name="put_default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.putDefaultResourceSpec"></a>

```python
def put_default_resource_spec(
  instance_type: str = None,
  lifecycle_config_arn: str = None,
  sagemaker_image_arn: str = None,
  sagemaker_image_version_arn: str = None
) -> None
```

###### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.putDefaultResourceSpec.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}.

---

###### `lifecycle_config_arn`<sup>Optional</sup> <a name="lifecycle_config_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.putDefaultResourceSpec.parameter.lifecycleConfigArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}.

---

###### `sagemaker_image_arn`<sup>Optional</sup> <a name="sagemaker_image_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.

---

###### `sagemaker_image_version_arn`<sup>Optional</sup> <a name="sagemaker_image_version_arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.putDefaultResourceSpec.parameter.sagemakerImageVersionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}.

---

##### `reset_default_resource_spec` <a name="reset_default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```python
def reset_default_resource_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.property.defaultResourceSpec">default_resource_spec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.property.defaultResourceSpecInput">default_resource_spec_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings">SagemakerDomainDefaultUserSettingsTensorBoardAppSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_resource_spec`<sup>Required</sup> <a name="default_resource_spec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.property.defaultResourceSpec"></a>

```python
default_resource_spec: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `default_resource_spec_input`<sup>Optional</sup> <a name="default_resource_spec_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```python
default_resource_spec_input: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings">SagemakerDomainDefaultUserSettingsTensorBoardAppSettings</a>

---


### SagemakerDomainDomainSettingsOutputReference <a name="SagemakerDomainDomainSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainDomainSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.resetExecutionRoleIdentityConfig">reset_execution_role_identity_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_execution_role_identity_config` <a name="reset_execution_role_identity_config" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.resetExecutionRoleIdentityConfig"></a>

```python
def reset_execution_role_identity_config() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.executionRoleIdentityConfigInput">execution_role_identity_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.executionRoleIdentityConfig">execution_role_identity_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings">SagemakerDomainDomainSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_role_identity_config_input`<sup>Optional</sup> <a name="execution_role_identity_config_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.executionRoleIdentityConfigInput"></a>

```python
execution_role_identity_config_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `execution_role_identity_config`<sup>Required</sup> <a name="execution_role_identity_config" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.executionRoleIdentityConfig"></a>

```python
execution_role_identity_config: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerDomainDomainSettings
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings">SagemakerDomainDomainSettings</a>

---


### SagemakerDomainRetentionPolicyOutputReference <a name="SagemakerDomainRetentionPolicyOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_domain

sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.resetHomeEfsFileSystem">reset_home_efs_file_system</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_home_efs_file_system` <a name="reset_home_efs_file_system" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.resetHomeEfsFileSystem"></a>

```python
def reset_home_efs_file_system() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.property.homeEfsFileSystemInput">home_efs_file_system_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.property.homeEfsFileSystem">home_efs_file_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy">SagemakerDomainRetentionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `home_efs_file_system_input`<sup>Optional</sup> <a name="home_efs_file_system_input" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.property.homeEfsFileSystemInput"></a>

```python
home_efs_file_system_input: str
```

- *Type:* str

---

##### `home_efs_file_system`<sup>Required</sup> <a name="home_efs_file_system" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.property.homeEfsFileSystem"></a>

```python
home_efs_file_system: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerDomainRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy">SagemakerDomainRetentionPolicy</a>

---



