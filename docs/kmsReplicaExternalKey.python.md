# `kmsReplicaExternalKey` Submodule <a name="`kmsReplicaExternalKey` Submodule" id="@cdktf/provider-aws.kmsReplicaExternalKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsReplicaExternalKey <a name="KmsReplicaExternalKey" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key aws_kms_replica_external_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kms_replica_external_key

kmsReplicaExternalKey.KmsReplicaExternalKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  primary_key_arn: str,
  bypass_policy_lockout_safety_check: typing.Union[bool, IResolvable] = None,
  deletion_window_in_days: typing.Union[int, float] = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  key_material_base64: str = None,
  policy: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  valid_to: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.primaryKeyArn">primary_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#primary_key_arn KmsReplicaExternalKey#primary_key_arn}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.bypassPolicyLockoutSafetyCheck">bypass_policy_lockout_safety_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#bypass_policy_lockout_safety_check KmsReplicaExternalKey#bypass_policy_lockout_safety_check}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.deletionWindowInDays">deletion_window_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#deletion_window_in_days KmsReplicaExternalKey#deletion_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#description KmsReplicaExternalKey#description}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#enabled KmsReplicaExternalKey#enabled}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#id KmsReplicaExternalKey#id}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.keyMaterialBase64">key_material_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#key_material_base64 KmsReplicaExternalKey#key_material_base64}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#policy KmsReplicaExternalKey#policy}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#tags KmsReplicaExternalKey#tags}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#tags_all KmsReplicaExternalKey#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.validTo">valid_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#valid_to KmsReplicaExternalKey#valid_to}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `primary_key_arn`<sup>Required</sup> <a name="primary_key_arn" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.primaryKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#primary_key_arn KmsReplicaExternalKey#primary_key_arn}.

---

##### `bypass_policy_lockout_safety_check`<sup>Optional</sup> <a name="bypass_policy_lockout_safety_check" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.bypassPolicyLockoutSafetyCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#bypass_policy_lockout_safety_check KmsReplicaExternalKey#bypass_policy_lockout_safety_check}.

---

##### `deletion_window_in_days`<sup>Optional</sup> <a name="deletion_window_in_days" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.deletionWindowInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#deletion_window_in_days KmsReplicaExternalKey#deletion_window_in_days}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#description KmsReplicaExternalKey#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#enabled KmsReplicaExternalKey#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#id KmsReplicaExternalKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_material_base64`<sup>Optional</sup> <a name="key_material_base64" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.keyMaterialBase64"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#key_material_base64 KmsReplicaExternalKey#key_material_base64}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.policy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#policy KmsReplicaExternalKey#policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#tags KmsReplicaExternalKey#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#tags_all KmsReplicaExternalKey#tags_all}.

---

##### `valid_to`<sup>Optional</sup> <a name="valid_to" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.validTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#valid_to KmsReplicaExternalKey#valid_to}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetBypassPolicyLockoutSafetyCheck">reset_bypass_policy_lockout_safety_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetDeletionWindowInDays">reset_deletion_window_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetKeyMaterialBase64">reset_key_material_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetValidTo">reset_valid_to</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_bypass_policy_lockout_safety_check` <a name="reset_bypass_policy_lockout_safety_check" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetBypassPolicyLockoutSafetyCheck"></a>

```python
def reset_bypass_policy_lockout_safety_check() -> None
```

##### `reset_deletion_window_in_days` <a name="reset_deletion_window_in_days" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetDeletionWindowInDays"></a>

```python
def reset_deletion_window_in_days() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_material_base64` <a name="reset_key_material_base64" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetKeyMaterialBase64"></a>

```python
def reset_key_material_base64() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_valid_to` <a name="reset_valid_to" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetValidTo"></a>

```python
def reset_valid_to() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import kms_replica_external_key

kmsReplicaExternalKey.KmsReplicaExternalKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import kms_replica_external_key

kmsReplicaExternalKey.KmsReplicaExternalKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import kms_replica_external_key

kmsReplicaExternalKey.KmsReplicaExternalKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.expirationModel">expiration_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyState">key_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyUsage">key_usage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.bypassPolicyLockoutSafetyCheckInput">bypass_policy_lockout_safety_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.deletionWindowInDaysInput">deletion_window_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyMaterialBase64Input">key_material_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.primaryKeyArnInput">primary_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.validToInput">valid_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.bypassPolicyLockoutSafetyCheck">bypass_policy_lockout_safety_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.deletionWindowInDays">deletion_window_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyMaterialBase64">key_material_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.primaryKeyArn">primary_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.validTo">valid_to</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `expiration_model`<sup>Required</sup> <a name="expiration_model" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.expirationModel"></a>

```python
expiration_model: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `key_state`<sup>Required</sup> <a name="key_state" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyState"></a>

```python
key_state: str
```

- *Type:* str

---

##### `key_usage`<sup>Required</sup> <a name="key_usage" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyUsage"></a>

```python
key_usage: str
```

- *Type:* str

---

##### `bypass_policy_lockout_safety_check_input`<sup>Optional</sup> <a name="bypass_policy_lockout_safety_check_input" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.bypassPolicyLockoutSafetyCheckInput"></a>

```python
bypass_policy_lockout_safety_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deletion_window_in_days_input`<sup>Optional</sup> <a name="deletion_window_in_days_input" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.deletionWindowInDaysInput"></a>

```python
deletion_window_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_material_base64_input`<sup>Optional</sup> <a name="key_material_base64_input" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyMaterialBase64Input"></a>

```python
key_material_base64_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `primary_key_arn_input`<sup>Optional</sup> <a name="primary_key_arn_input" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.primaryKeyArnInput"></a>

```python
primary_key_arn_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `valid_to_input`<sup>Optional</sup> <a name="valid_to_input" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.validToInput"></a>

```python
valid_to_input: str
```

- *Type:* str

---

##### `bypass_policy_lockout_safety_check`<sup>Required</sup> <a name="bypass_policy_lockout_safety_check" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.bypassPolicyLockoutSafetyCheck"></a>

```python
bypass_policy_lockout_safety_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deletion_window_in_days`<sup>Required</sup> <a name="deletion_window_in_days" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.deletionWindowInDays"></a>

```python
deletion_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_material_base64`<sup>Required</sup> <a name="key_material_base64" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyMaterialBase64"></a>

```python
key_material_base64: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `primary_key_arn`<sup>Required</sup> <a name="primary_key_arn" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.primaryKeyArn"></a>

```python
primary_key_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `valid_to`<sup>Required</sup> <a name="valid_to" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.validTo"></a>

```python
valid_to: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KmsReplicaExternalKeyConfig <a name="KmsReplicaExternalKeyConfig" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kms_replica_external_key

kmsReplicaExternalKey.KmsReplicaExternalKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  primary_key_arn: str,
  bypass_policy_lockout_safety_check: typing.Union[bool, IResolvable] = None,
  deletion_window_in_days: typing.Union[int, float] = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  key_material_base64: str = None,
  policy: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  valid_to: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.primaryKeyArn">primary_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#primary_key_arn KmsReplicaExternalKey#primary_key_arn}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.bypassPolicyLockoutSafetyCheck">bypass_policy_lockout_safety_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#bypass_policy_lockout_safety_check KmsReplicaExternalKey#bypass_policy_lockout_safety_check}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.deletionWindowInDays">deletion_window_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#deletion_window_in_days KmsReplicaExternalKey#deletion_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#description KmsReplicaExternalKey#description}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#enabled KmsReplicaExternalKey#enabled}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#id KmsReplicaExternalKey#id}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.keyMaterialBase64">key_material_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#key_material_base64 KmsReplicaExternalKey#key_material_base64}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#policy KmsReplicaExternalKey#policy}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#tags KmsReplicaExternalKey#tags}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#tags_all KmsReplicaExternalKey#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.validTo">valid_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#valid_to KmsReplicaExternalKey#valid_to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `primary_key_arn`<sup>Required</sup> <a name="primary_key_arn" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.primaryKeyArn"></a>

```python
primary_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#primary_key_arn KmsReplicaExternalKey#primary_key_arn}.

---

##### `bypass_policy_lockout_safety_check`<sup>Optional</sup> <a name="bypass_policy_lockout_safety_check" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.bypassPolicyLockoutSafetyCheck"></a>

```python
bypass_policy_lockout_safety_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#bypass_policy_lockout_safety_check KmsReplicaExternalKey#bypass_policy_lockout_safety_check}.

---

##### `deletion_window_in_days`<sup>Optional</sup> <a name="deletion_window_in_days" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.deletionWindowInDays"></a>

```python
deletion_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#deletion_window_in_days KmsReplicaExternalKey#deletion_window_in_days}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#description KmsReplicaExternalKey#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#enabled KmsReplicaExternalKey#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#id KmsReplicaExternalKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_material_base64`<sup>Optional</sup> <a name="key_material_base64" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.keyMaterialBase64"></a>

```python
key_material_base64: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#key_material_base64 KmsReplicaExternalKey#key_material_base64}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#policy KmsReplicaExternalKey#policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#tags KmsReplicaExternalKey#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#tags_all KmsReplicaExternalKey#tags_all}.

---

##### `valid_to`<sup>Optional</sup> <a name="valid_to" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.validTo"></a>

```python
valid_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#valid_to KmsReplicaExternalKey#valid_to}.

---



