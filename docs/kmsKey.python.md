# `kmsKey` Submodule <a name="`kmsKey` Submodule" id="@cdktf/provider-aws.kmsKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsKey <a name="KmsKey" id="@cdktf/provider-aws.kmsKey.KmsKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_key aws_kms_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kms_key

kmsKey.KmsKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bypass_policy_lockout_safety_check: typing.Union[bool, IResolvable] = None,
  customer_master_key_spec: str = None,
  custom_key_store_id: str = None,
  deletion_window_in_days: typing.Union[int, float] = None,
  description: str = None,
  enable_key_rotation: typing.Union[bool, IResolvable] = None,
  id: str = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  key_usage: str = None,
  multi_region: typing.Union[bool, IResolvable] = None,
  policy: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.bypassPolicyLockoutSafetyCheck">bypass_policy_lockout_safety_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#bypass_policy_lockout_safety_check KmsKey#bypass_policy_lockout_safety_check}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.customerMasterKeySpec">customer_master_key_spec</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#customer_master_key_spec KmsKey#customer_master_key_spec}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.customKeyStoreId">custom_key_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#custom_key_store_id KmsKey#custom_key_store_id}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.deletionWindowInDays">deletion_window_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#deletion_window_in_days KmsKey#deletion_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#description KmsKey#description}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.enableKeyRotation">enable_key_rotation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#enable_key_rotation KmsKey#enable_key_rotation}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#id KmsKey#id}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#is_enabled KmsKey#is_enabled}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.keyUsage">key_usage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#key_usage KmsKey#key_usage}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.multiRegion">multi_region</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#multi_region KmsKey#multi_region}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#policy KmsKey#policy}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#tags KmsKey#tags}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#tags_all KmsKey#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bypass_policy_lockout_safety_check`<sup>Optional</sup> <a name="bypass_policy_lockout_safety_check" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.bypassPolicyLockoutSafetyCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#bypass_policy_lockout_safety_check KmsKey#bypass_policy_lockout_safety_check}.

---

##### `customer_master_key_spec`<sup>Optional</sup> <a name="customer_master_key_spec" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.customerMasterKeySpec"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#customer_master_key_spec KmsKey#customer_master_key_spec}.

---

##### `custom_key_store_id`<sup>Optional</sup> <a name="custom_key_store_id" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.customKeyStoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#custom_key_store_id KmsKey#custom_key_store_id}.

---

##### `deletion_window_in_days`<sup>Optional</sup> <a name="deletion_window_in_days" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.deletionWindowInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#deletion_window_in_days KmsKey#deletion_window_in_days}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#description KmsKey#description}.

---

##### `enable_key_rotation`<sup>Optional</sup> <a name="enable_key_rotation" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.enableKeyRotation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#enable_key_rotation KmsKey#enable_key_rotation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#id KmsKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#is_enabled KmsKey#is_enabled}.

---

##### `key_usage`<sup>Optional</sup> <a name="key_usage" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.keyUsage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#key_usage KmsKey#key_usage}.

---

##### `multi_region`<sup>Optional</sup> <a name="multi_region" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.multiRegion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#multi_region KmsKey#multi_region}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.policy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#policy KmsKey#policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#tags KmsKey#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.kmsKey.KmsKey.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#tags_all KmsKey#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetBypassPolicyLockoutSafetyCheck">reset_bypass_policy_lockout_safety_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetCustomerMasterKeySpec">reset_customer_master_key_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetCustomKeyStoreId">reset_custom_key_store_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetDeletionWindowInDays">reset_deletion_window_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetEnableKeyRotation">reset_enable_key_rotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetKeyUsage">reset_key_usage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetMultiRegion">reset_multi_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kmsKey.KmsKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.kmsKey.KmsKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kmsKey.KmsKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kmsKey.KmsKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.kmsKey.KmsKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.kmsKey.KmsKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.kmsKey.KmsKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.kmsKey.KmsKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.kmsKey.KmsKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsKey.KmsKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kmsKey.KmsKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsKey.KmsKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_bypass_policy_lockout_safety_check` <a name="reset_bypass_policy_lockout_safety_check" id="@cdktf/provider-aws.kmsKey.KmsKey.resetBypassPolicyLockoutSafetyCheck"></a>

```python
def reset_bypass_policy_lockout_safety_check() -> None
```

##### `reset_customer_master_key_spec` <a name="reset_customer_master_key_spec" id="@cdktf/provider-aws.kmsKey.KmsKey.resetCustomerMasterKeySpec"></a>

```python
def reset_customer_master_key_spec() -> None
```

##### `reset_custom_key_store_id` <a name="reset_custom_key_store_id" id="@cdktf/provider-aws.kmsKey.KmsKey.resetCustomKeyStoreId"></a>

```python
def reset_custom_key_store_id() -> None
```

##### `reset_deletion_window_in_days` <a name="reset_deletion_window_in_days" id="@cdktf/provider-aws.kmsKey.KmsKey.resetDeletionWindowInDays"></a>

```python
def reset_deletion_window_in_days() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.kmsKey.KmsKey.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_key_rotation` <a name="reset_enable_key_rotation" id="@cdktf/provider-aws.kmsKey.KmsKey.resetEnableKeyRotation"></a>

```python
def reset_enable_key_rotation() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.kmsKey.KmsKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktf/provider-aws.kmsKey.KmsKey.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_key_usage` <a name="reset_key_usage" id="@cdktf/provider-aws.kmsKey.KmsKey.resetKeyUsage"></a>

```python
def reset_key_usage() -> None
```

##### `reset_multi_region` <a name="reset_multi_region" id="@cdktf/provider-aws.kmsKey.KmsKey.resetMultiRegion"></a>

```python
def reset_multi_region() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktf/provider-aws.kmsKey.KmsKey.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.kmsKey.KmsKey.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.kmsKey.KmsKey.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.kmsKey.KmsKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import kms_key

kmsKey.KmsKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsKey.KmsKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.kmsKey.KmsKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import kms_key

kmsKey.KmsKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsKey.KmsKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.kmsKey.KmsKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import kms_key

kmsKey.KmsKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsKey.KmsKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.bypassPolicyLockoutSafetyCheckInput">bypass_policy_lockout_safety_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.customerMasterKeySpecInput">customer_master_key_spec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.customKeyStoreIdInput">custom_key_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.deletionWindowInDaysInput">deletion_window_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.enableKeyRotationInput">enable_key_rotation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.keyUsageInput">key_usage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.multiRegionInput">multi_region_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.bypassPolicyLockoutSafetyCheck">bypass_policy_lockout_safety_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.customerMasterKeySpec">customer_master_key_spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.customKeyStoreId">custom_key_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.deletionWindowInDays">deletion_window_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.enableKeyRotation">enable_key_rotation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.keyUsage">key_usage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.multiRegion">multi_region</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kmsKey.KmsKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.kmsKey.KmsKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsKey.KmsKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.kmsKey.KmsKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.kmsKey.KmsKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.kmsKey.KmsKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.kmsKey.KmsKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsKey.KmsKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsKey.KmsKey.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kmsKey.KmsKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kmsKey.KmsKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsKey.KmsKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsKey.KmsKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsKey.KmsKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.kmsKey.KmsKey.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-aws.kmsKey.KmsKey.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `bypass_policy_lockout_safety_check_input`<sup>Optional</sup> <a name="bypass_policy_lockout_safety_check_input" id="@cdktf/provider-aws.kmsKey.KmsKey.property.bypassPolicyLockoutSafetyCheckInput"></a>

```python
bypass_policy_lockout_safety_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `customer_master_key_spec_input`<sup>Optional</sup> <a name="customer_master_key_spec_input" id="@cdktf/provider-aws.kmsKey.KmsKey.property.customerMasterKeySpecInput"></a>

```python
customer_master_key_spec_input: str
```

- *Type:* str

---

##### `custom_key_store_id_input`<sup>Optional</sup> <a name="custom_key_store_id_input" id="@cdktf/provider-aws.kmsKey.KmsKey.property.customKeyStoreIdInput"></a>

```python
custom_key_store_id_input: str
```

- *Type:* str

---

##### `deletion_window_in_days_input`<sup>Optional</sup> <a name="deletion_window_in_days_input" id="@cdktf/provider-aws.kmsKey.KmsKey.property.deletionWindowInDaysInput"></a>

```python
deletion_window_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.kmsKey.KmsKey.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enable_key_rotation_input`<sup>Optional</sup> <a name="enable_key_rotation_input" id="@cdktf/provider-aws.kmsKey.KmsKey.property.enableKeyRotationInput"></a>

```python
enable_key_rotation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.kmsKey.KmsKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-aws.kmsKey.KmsKey.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_usage_input`<sup>Optional</sup> <a name="key_usage_input" id="@cdktf/provider-aws.kmsKey.KmsKey.property.keyUsageInput"></a>

```python
key_usage_input: str
```

- *Type:* str

---

##### `multi_region_input`<sup>Optional</sup> <a name="multi_region_input" id="@cdktf/provider-aws.kmsKey.KmsKey.property.multiRegionInput"></a>

```python
multi_region_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-aws.kmsKey.KmsKey.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.kmsKey.KmsKey.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.kmsKey.KmsKey.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `bypass_policy_lockout_safety_check`<sup>Required</sup> <a name="bypass_policy_lockout_safety_check" id="@cdktf/provider-aws.kmsKey.KmsKey.property.bypassPolicyLockoutSafetyCheck"></a>

```python
bypass_policy_lockout_safety_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `customer_master_key_spec`<sup>Required</sup> <a name="customer_master_key_spec" id="@cdktf/provider-aws.kmsKey.KmsKey.property.customerMasterKeySpec"></a>

```python
customer_master_key_spec: str
```

- *Type:* str

---

##### `custom_key_store_id`<sup>Required</sup> <a name="custom_key_store_id" id="@cdktf/provider-aws.kmsKey.KmsKey.property.customKeyStoreId"></a>

```python
custom_key_store_id: str
```

- *Type:* str

---

##### `deletion_window_in_days`<sup>Required</sup> <a name="deletion_window_in_days" id="@cdktf/provider-aws.kmsKey.KmsKey.property.deletionWindowInDays"></a>

```python
deletion_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.kmsKey.KmsKey.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_key_rotation`<sup>Required</sup> <a name="enable_key_rotation" id="@cdktf/provider-aws.kmsKey.KmsKey.property.enableKeyRotation"></a>

```python
enable_key_rotation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsKey.KmsKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-aws.kmsKey.KmsKey.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_usage`<sup>Required</sup> <a name="key_usage" id="@cdktf/provider-aws.kmsKey.KmsKey.property.keyUsage"></a>

```python
key_usage: str
```

- *Type:* str

---

##### `multi_region`<sup>Required</sup> <a name="multi_region" id="@cdktf/provider-aws.kmsKey.KmsKey.property.multiRegion"></a>

```python
multi_region: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.kmsKey.KmsKey.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.kmsKey.KmsKey.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.kmsKey.KmsKey.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kmsKey.KmsKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KmsKeyConfig <a name="KmsKeyConfig" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kms_key

kmsKey.KmsKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bypass_policy_lockout_safety_check: typing.Union[bool, IResolvable] = None,
  customer_master_key_spec: str = None,
  custom_key_store_id: str = None,
  deletion_window_in_days: typing.Union[int, float] = None,
  description: str = None,
  enable_key_rotation: typing.Union[bool, IResolvable] = None,
  id: str = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  key_usage: str = None,
  multi_region: typing.Union[bool, IResolvable] = None,
  policy: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.bypassPolicyLockoutSafetyCheck">bypass_policy_lockout_safety_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#bypass_policy_lockout_safety_check KmsKey#bypass_policy_lockout_safety_check}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.customerMasterKeySpec">customer_master_key_spec</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#customer_master_key_spec KmsKey#customer_master_key_spec}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.customKeyStoreId">custom_key_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#custom_key_store_id KmsKey#custom_key_store_id}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.deletionWindowInDays">deletion_window_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#deletion_window_in_days KmsKey#deletion_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#description KmsKey#description}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.enableKeyRotation">enable_key_rotation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#enable_key_rotation KmsKey#enable_key_rotation}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#id KmsKey#id}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#is_enabled KmsKey#is_enabled}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.keyUsage">key_usage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#key_usage KmsKey#key_usage}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.multiRegion">multi_region</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#multi_region KmsKey#multi_region}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#policy KmsKey#policy}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#tags KmsKey#tags}. |
| <code><a href="#@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#tags_all KmsKey#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bypass_policy_lockout_safety_check`<sup>Optional</sup> <a name="bypass_policy_lockout_safety_check" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.bypassPolicyLockoutSafetyCheck"></a>

```python
bypass_policy_lockout_safety_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#bypass_policy_lockout_safety_check KmsKey#bypass_policy_lockout_safety_check}.

---

##### `customer_master_key_spec`<sup>Optional</sup> <a name="customer_master_key_spec" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.customerMasterKeySpec"></a>

```python
customer_master_key_spec: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#customer_master_key_spec KmsKey#customer_master_key_spec}.

---

##### `custom_key_store_id`<sup>Optional</sup> <a name="custom_key_store_id" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.customKeyStoreId"></a>

```python
custom_key_store_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#custom_key_store_id KmsKey#custom_key_store_id}.

---

##### `deletion_window_in_days`<sup>Optional</sup> <a name="deletion_window_in_days" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.deletionWindowInDays"></a>

```python
deletion_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#deletion_window_in_days KmsKey#deletion_window_in_days}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#description KmsKey#description}.

---

##### `enable_key_rotation`<sup>Optional</sup> <a name="enable_key_rotation" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.enableKeyRotation"></a>

```python
enable_key_rotation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#enable_key_rotation KmsKey#enable_key_rotation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#id KmsKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#is_enabled KmsKey#is_enabled}.

---

##### `key_usage`<sup>Optional</sup> <a name="key_usage" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.keyUsage"></a>

```python
key_usage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#key_usage KmsKey#key_usage}.

---

##### `multi_region`<sup>Optional</sup> <a name="multi_region" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.multiRegion"></a>

```python
multi_region: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#multi_region KmsKey#multi_region}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#policy KmsKey#policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#tags KmsKey#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.kmsKey.KmsKeyConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key#tags_all KmsKey#tags_all}.

---



